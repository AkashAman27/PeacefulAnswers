import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

interface BulkFAQItem {
  question: string;
  answer: string;
  category?: string;
  tags?: string[];
  display_order?: number;
  is_published?: boolean;
}

interface BulkUploadResult {
  success: boolean;
  totalItems: number;
  successCount: number;
  failureCount: number;
  errors: Array<{
    item: number;
    question: string;
    error: string;
  }>;
  createdItems: string[];
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { items }: { items: BulkFAQItem[] } = body;

    if (!items || !Array.isArray(items)) {
      return NextResponse.json(
        { error: 'Invalid request body. Expected array of FAQ items.' },
        { status: 400 }
      );
    }

    const result: BulkUploadResult = {
      success: true,
      totalItems: items.length,
      successCount: 0,
      failureCount: 0,
      errors: [],
      createdItems: []
    };

    // Process each FAQ item
    for (let index = 0; index < items.length; index++) {
      const item = items[index];

      // Validate required fields
      if (!item.question || !item.answer) {
        result.errors.push({
          item: index + 1,
          question: item.question || `Item ${index + 1}`,
          error: 'Question and answer are required fields'
        });
        result.failureCount++;
        continue;
      }

      try {
        // Prepare data for insertion
        const faqData = {
          question: item.question.trim(),
          answer: item.answer.trim(),
          category: item.category || 'General',
          tags: item.tags || [],
          display_order: item.display_order || 0,
          is_published: item.is_published !== false // Default to true unless explicitly false
        };

        // Insert into database
        const { data, error } = await supabase
          .schema('hindu')
          .from('hindu_faq')
          .insert([faqData])
          .select('id, question')
          .single();

        if (error) {
          result.errors.push({
            item: index + 1,
            question: item.question,
            error: `Database error: ${error.message}`
          });
          result.failureCount++;
        } else {
          result.createdItems.push(data.question);
          result.successCount++;
        }
      } catch (error) {
        result.errors.push({
          item: index + 1,
          question: item.question,
          error: `Processing error: ${error instanceof Error ? error.message : 'Unknown error'}`
        });
        result.failureCount++;
      }
    }

    return NextResponse.json(result);

  } catch (error) {
    console.error('Bulk FAQ upload error:', error);
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
    message: 'FAQ Bulk Upload API',
    version: '1.0.0',
    description: 'Upload multiple FAQ questions in JSON format',
    expectedFormat: {
      items: [
        {
          question: 'What is dharma?',
          answer: 'Dharma refers to the moral and ethical duties...',
          category: 'Philosophy', // Optional, defaults to 'General'
          tags: ['dharma', 'ethics', 'philosophy'], // Optional
          display_order: 1, // Optional, defaults to 0
          is_published: true // Optional, defaults to true
        }
      ]
    },
    acceptedFormats: ['application/json']
  });
}