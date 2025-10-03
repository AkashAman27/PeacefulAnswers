import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

interface ContentSection {
  title: string
  content: string
  image_url?: string
  image_alt?: string
}

interface RamayanaPageInput {
  title: string
  sanskrit_title?: string
  kand: string
  episode_number: number
  slug: string
  subtitle?: string
  description?: string
  hero_image_url?: string
  hero_image_alt?: string
  content_sections?: ContentSection[]
  key_characters?: string[]
  key_locations?: string[]
  spiritual_teachings?: string
  modern_relevance?: string
  meta_title?: string
  meta_description?: string
  keywords?: string[]
  canonical_url?: string
  status?: 'draft' | 'published' | 'archived'
  is_featured?: boolean
  sort_order?: number
}

interface ValidationError {
  row: number
  field: string
  message: string
}

interface BulkUploadData {
  pages: RamayanaPageInput[]
}

const validKands = [
  'bala-kanda',
  'ayodhya-kanda',
  'aranya-kanda',
  'kishkindha-kanda',
  'sundara-kanda',
  'yuddha-kanda',
  'uttara-kanda'
]

const validStatuses = ['draft', 'published', 'archived']

function validatePage(page: any, index: number): ValidationError[] {
  const errors: ValidationError[] = []
  const row = index + 1

  // Required fields validation
  if (!page.title || typeof page.title !== 'string' || page.title.trim() === '') {
    errors.push({ row, field: 'title', message: 'Title is required and must be a non-empty string' })
  }

  if (!page.kand || typeof page.kand !== 'string') {
    errors.push({ row, field: 'kand', message: 'Kand is required and must be a string' })
  } else if (!validKands.includes(page.kand)) {
    errors.push({ row, field: 'kand', message: `Kand must be one of: ${validKands.join(', ')}` })
  }

  if (page.episode_number === undefined || page.episode_number === null) {
    errors.push({ row, field: 'episode_number', message: 'Episode number is required' })
  } else if (typeof page.episode_number !== 'number' || page.episode_number < 1) {
    errors.push({ row, field: 'episode_number', message: 'Episode number must be a positive number' })
  }

  if (!page.slug || typeof page.slug !== 'string' || page.slug.trim() === '') {
    errors.push({ row, field: 'slug', message: 'Slug is required and must be a non-empty string' })
  } else if (!/^[a-z0-9-]+$/.test(page.slug)) {
    errors.push({ row, field: 'slug', message: 'Slug must contain only lowercase letters, numbers, and hyphens' })
  }

  // Optional field validation
  if (page.sanskrit_title && typeof page.sanskrit_title !== 'string') {
    errors.push({ row, field: 'sanskrit_title', message: 'Sanskrit title must be a string' })
  }

  if (page.subtitle && typeof page.subtitle !== 'string') {
    errors.push({ row, field: 'subtitle', message: 'Subtitle must be a string' })
  }

  if (page.description && typeof page.description !== 'string') {
    errors.push({ row, field: 'description', message: 'Description must be a string' })
  }

  if (page.hero_image_url && (typeof page.hero_image_url !== 'string' || !isValidUrl(page.hero_image_url))) {
    errors.push({ row, field: 'hero_image_url', message: 'Hero image URL must be a valid URL' })
  }

  if (page.hero_image_alt && typeof page.hero_image_alt !== 'string') {
    errors.push({ row, field: 'hero_image_alt', message: 'Hero image alt text must be a string' })
  }

  if (page.status && !validStatuses.includes(page.status)) {
    errors.push({ row, field: 'status', message: `Status must be one of: ${validStatuses.join(', ')}` })
  }

  if (page.is_featured !== undefined && typeof page.is_featured !== 'boolean') {
    errors.push({ row, field: 'is_featured', message: 'is_featured must be a boolean' })
  }

  if (page.sort_order !== undefined && (typeof page.sort_order !== 'number' || page.sort_order < 0)) {
    errors.push({ row, field: 'sort_order', message: 'sort_order must be a non-negative number' })
  }

  // Array field validation
  if (page.content_sections && !Array.isArray(page.content_sections)) {
    errors.push({ row, field: 'content_sections', message: 'content_sections must be an array' })
  } else if (page.content_sections) {
    page.content_sections.forEach((section: any, sectionIndex: number) => {
      if (!section.title || typeof section.title !== 'string') {
        errors.push({ row, field: `content_sections[${sectionIndex}].title`, message: 'Section title is required and must be a string' })
      }
      if (!section.content || typeof section.content !== 'string') {
        errors.push({ row, field: `content_sections[${sectionIndex}].content`, message: 'Section content is required and must be a string' })
      }
      if (section.image_url && (typeof section.image_url !== 'string' || !isValidUrl(section.image_url))) {
        errors.push({ row, field: `content_sections[${sectionIndex}].image_url`, message: 'Section image URL must be a valid URL' })
      }
      if (section.image_alt && typeof section.image_alt !== 'string') {
        errors.push({ row, field: `content_sections[${sectionIndex}].image_alt`, message: 'Section image alt text must be a string' })
      }
    })
  }

  if (page.key_characters && !Array.isArray(page.key_characters)) {
    errors.push({ row, field: 'key_characters', message: 'key_characters must be an array' })
  } else if (page.key_characters && !page.key_characters.every((char: any) => typeof char === 'string')) {
    errors.push({ row, field: 'key_characters', message: 'All key_characters must be strings' })
  }

  if (page.key_locations && !Array.isArray(page.key_locations)) {
    errors.push({ row, field: 'key_locations', message: 'key_locations must be an array' })
  } else if (page.key_locations && !page.key_locations.every((loc: any) => typeof loc === 'string')) {
    errors.push({ row, field: 'key_locations', message: 'All key_locations must be strings' })
  }

  if (page.keywords && !Array.isArray(page.keywords)) {
    errors.push({ row, field: 'keywords', message: 'keywords must be an array' })
  } else if (page.keywords && !page.keywords.every((keyword: any) => typeof keyword === 'string')) {
    errors.push({ row, field: 'keywords', message: 'All keywords must be strings' })
  }

  // HTML content fields
  if (page.spiritual_teachings && typeof page.spiritual_teachings !== 'string') {
    errors.push({ row, field: 'spiritual_teachings', message: 'Spiritual teachings must be a string' })
  }

  if (page.modern_relevance && typeof page.modern_relevance !== 'string') {
    errors.push({ row, field: 'modern_relevance', message: 'Modern relevance must be a string' })
  }

  if (page.meta_title && typeof page.meta_title !== 'string') {
    errors.push({ row, field: 'meta_title', message: 'Meta title must be a string' })
  }

  if (page.meta_description && typeof page.meta_description !== 'string') {
    errors.push({ row, field: 'meta_description', message: 'Meta description must be a string' })
  }

  return errors
}

function isValidUrl(string: string): boolean {
  try {
    new URL(string)
    return true
  } catch (_) {
    return false
  }
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function generateCanonicalUrl(kand: string, slug: string): string {
  return `/scriptures/ramayana/${kand}/${slug}`
}

export async function POST(request: NextRequest) {
  try {
    if (!supabaseAdmin) {
      return NextResponse.json(
        {
          success: false,
          error: 'Supabase admin client not configured'
        },
        { status: 500 }
      )
    }

    const body: BulkUploadData = await request.json()

    // Validate request structure
    if (!body.pages || !Array.isArray(body.pages)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Request must contain a "pages" array',
          errors: []
        },
        { status: 400 }
      )
    }

    if (body.pages.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Pages array cannot be empty',
          errors: []
        },
        { status: 400 }
      )
    }

    // Validate all pages
    const allErrors: ValidationError[] = []
    body.pages.forEach((page, index) => {
      const pageErrors = validatePage(page, index)
      allErrors.push(...pageErrors)
    })

    if (allErrors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: `Validation failed with ${allErrors.length} errors`,
          errors: allErrors
        },
        { status: 400 }
      )
    }

    // Check for duplicate slugs within the same kand
    const slugMap = new Map<string, number[]>()
    body.pages.forEach((page, index) => {
      const key = `${page.kand}:${page.slug}`
      if (!slugMap.has(key)) {
        slugMap.set(key, [])
      }
      slugMap.get(key)!.push(index + 1)
    })

    const duplicateErrors: ValidationError[] = []
    slugMap.forEach((rows, kandSlug) => {
      if (rows.length > 1) {
        const [kand, slug] = kandSlug.split(':')
        rows.forEach(row => {
          duplicateErrors.push({
            row,
            field: 'slug',
            message: `Duplicate slug "${slug}" in kand "${kand}" (also in rows: ${rows.filter(r => r !== row).join(', ')})`
          })
        })
      }
    })

    if (duplicateErrors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Duplicate slugs found within the same kand',
          errors: duplicateErrors
        },
        { status: 400 }
      )
    }

    // Process pages for database insertion
    const processedPages = body.pages.map(page => {
      const slug = page.slug || generateSlug(page.title)
      return {
        title: page.title,
        sanskrit_title: page.sanskrit_title || '',
        kand: page.kand,
        episode_number: page.episode_number,
        slug,
        subtitle: page.subtitle || '',
        description: page.description || '',
        hero_image_url: page.hero_image_url || '',
        hero_image_alt: page.hero_image_alt || '',
        content_sections: page.content_sections || [],
        key_characters: page.key_characters || [],
        key_locations: page.key_locations || [],
        spiritual_teachings: page.spiritual_teachings || '',
        modern_relevance: page.modern_relevance || '',
        meta_title: page.meta_title || page.title,
        meta_description: page.meta_description || page.description || '',
        keywords: page.keywords || [],
        canonical_url: page.canonical_url || generateCanonicalUrl(page.kand, slug),
        status: page.status || 'draft',
        is_featured: page.is_featured || false,
        sort_order: page.sort_order || 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
    })

    // Insert pages into database
    let created = 0
    let updated = 0
    const insertErrors: ValidationError[] = []

    for (let i = 0; i < processedPages.length; i++) {
      const page = processedPages[i]

      try {
        // Check if page already exists
        const { data: existingPage } = await (supabaseAdmin as any)
          .schema('hindu')
          .from('ramayana_pages')
          .select('id')
          .eq('kand', page.kand)
          .eq('slug', page.slug)
          .single()

        if (existingPage) {
          // Update existing page
          const { error } = await (supabaseAdmin as any)
            .schema('hindu')
            .from('ramayana_pages')
            .update({
              ...page,
              updated_at: new Date().toISOString()
            })
            .eq('id', existingPage.id)

          if (error) {
            insertErrors.push({
              row: i + 1,
              field: 'database',
              message: `Failed to update existing page: ${error.message || error.toString() || 'Unknown database error'}`
            })
          } else {
            updated++
          }
        } else {
          // Insert new page
          const { error } = await (supabaseAdmin as any)
            .schema('hindu')
            .from('ramayana_pages')
            .insert(page)

          if (error) {
            insertErrors.push({
              row: i + 1,
              field: 'database',
              message: `Failed to insert page: ${error.message || error.toString() || 'Unknown database error'}`
            })
          } else {
            created++
          }
        }
      } catch (error: any) {
        insertErrors.push({
          row: i + 1,
          field: 'database',
          message: `Unexpected error: ${error.message || error.toString() || 'Unknown error'}`
        })
      }
    }

    if (insertErrors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: `Database errors occurred during import`,
          errors: insertErrors,
          created,
          updated
        },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: `Successfully processed ${created + updated} pages`,
      created,
      updated,
      errors: []
    })

  } catch (error: any) {
    console.error('Bulk upload error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error: ' + error.message,
        errors: []
      },
      { status: 500 }
    )
  }
}