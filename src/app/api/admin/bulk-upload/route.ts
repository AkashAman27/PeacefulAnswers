import { NextRequest, NextResponse } from 'next/server';
import { BulkUploadItem, BulkUploadResult } from '@/types/bulkUpload';
import { JSONValidator } from '@/utils/jsonValidator';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { items }: { items: BulkUploadItem[] } = body;

    if (!items || !Array.isArray(items)) {
      return NextResponse.json(
        { error: 'Invalid request body. Expected array of items.' },
        { status: 400 }
      );
    }

    // Validate all items
    const validationResults = JSONValidator.validateBulkUpload(items);
    const duplicateSlugs = JSONValidator.checkForDuplicateSlugs(items);

    if (duplicateSlugs.length > 0) {
      return NextResponse.json(
        { error: `Duplicate slugs found: ${duplicateSlugs.join(', ')}` },
        { status: 400 }
      );
    }

    // Separate valid and invalid items
    const validItems: BulkUploadItem[] = [];
    const errors: BulkUploadResult['errors'] = [];

    items.forEach((item, index) => {
      const validation = validationResults[index];
      if (validation.isValid) {
        validItems.push(item);
      } else {
        errors.push({
          item: `Item ${index + 1}`,
          slug: item.slug || 'unknown',
          errors: validation.errors
        });
      }
    });

    // Check for existing slugs in database
    const existingSlugs = new Set<string>();
    if (validItems.length > 0) {
      const slugsToCheck = validItems.map(item => item.slug);
      const { data: existingPages } = await supabase
        .from('peace.hindu_pages')
        .select('slug')
        .in('slug', slugsToCheck);

      if (existingPages) {
        existingPages.forEach(page => existingSlugs.add(page.slug));
      }
    }

    // Process valid items
    const createdSlugs: string[] = [];
    const skippedSlugs: string[] = [];

    for (const item of validItems) {
      if (existingSlugs.has(item.slug)) {
        skippedSlugs.push(item.slug);
        continue;
      }

      try {
        // Prepare data for database insertion
        const pageData = {
          slug: item.slug,
          title: item.title,
          content_type: item.contentType,
          status: item.status,
          short_description: item.shortDescription,
          description: item.description,
          long_content: item.longContent || null,
          featured_image: item.featuredImage,
          gallery: item.gallery || null,
          hero_image: item.heroImage || null,
          seo_data: item.seo,
          tags: item.tags,
          categories: item.categories,
          deity_info: item.deityInfo || null,
          story_info: item.storyInfo || null,
          scripture_info: item.scriptureInfo || null,
          practice_info: item.practiceInfo || null,
          author: item.author || null,
          publish_date: item.publishDate || new Date().toISOString(),
          last_modified: new Date().toISOString(),
          language: item.language || 'en',
          reading_time: item.readingTime || null,
          related_content: item.relatedContent || null,
          references: item.references || null,
          external_links: item.externalLinks || null,
          custom_fields: item.customFields || null
        };

        // Insert into database
        const { error: insertError } = await supabase
          .from('peace.hindu_pages')
          .insert([pageData]);

        if (insertError) {
          console.error('Database insert error:', insertError);
          errors.push({
            item: item.title,
            slug: item.slug,
            errors: [`Database error: ${insertError.message}`]
          });
        } else {
          createdSlugs.push(item.slug);
        }
      } catch (error) {
        console.error('Processing error for item:', item.slug, error);
        errors.push({
          item: item.title,
          slug: item.slug,
          errors: [`Processing error: ${error instanceof Error ? error.message : 'Unknown error'}`]
        });
      }
    }

    // Prepare result
    const result: BulkUploadResult = {
      success: true,
      totalItems: items.length,
      successCount: createdSlugs.length,
      failureCount: errors.length + skippedSlugs.length,
      errors,
      createdSlugs,
      skippedSlugs
    };

    return NextResponse.json(result);

  } catch (error) {
    console.error('Bulk upload API error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Bulk Upload API',
    version: '1.0.0',
    supportedContentTypes: [
      'deity', 'goddess', 'god', 'story', 'ramayana',
      'scripture', 'practice', 'festival', 'temple', 'mantra', 'philosophy'
    ],
    maxFileSize: '10MB',
    acceptedFormats: ['application/json']
  });
}