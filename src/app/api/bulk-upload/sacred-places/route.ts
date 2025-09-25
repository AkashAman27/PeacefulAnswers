import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

interface SacredPlaceBulkData {
  category_slug: string
  sacred_places: SacredPlace[]
}

interface SacredPlace {
  name: string
  sanskrit_name?: string
  slug: string
  title?: string
  subtitle?: string
  description?: string
  location_details?: any
  hero_image_url?: string
  hero_image_alt?: string
  featured_image_url?: string
  featured_image_alt?: string
  content_sections?: any[]
  interesting_facts?: any[]
  religious_significance?: string
  mythology_stories?: any[]
  festivals?: any[]
  rituals_practices?: any[]
  pilgrimage_info?: any
  temples?: any[]
  darshan_timings?: any
  gallery_images?: any[]
  related_places?: string[]
  faqs?: any[]
  meta_title?: string
  meta_description?: string
  keywords?: string[]
  canonical_url?: string
  status?: string
  is_featured?: boolean
  sort_order?: number
  view_count?: number
}

export async function POST(request: NextRequest) {
  try {
    const body: SacredPlaceBulkData = await request.json()

    if (!body.category_slug || !body.sacred_places || !Array.isArray(body.sacred_places)) {
      return NextResponse.json(
        { error: 'Invalid request format. Expected category_slug and sacred_places array.' },
        { status: 400 }
      )
    }

    // Get the category ID
    const { data: category, error: categoryError } = await supabase
      .schema('hindu')
      .from('sacred_place_categories')
      .select('id')
      .eq('slug', body.category_slug)
      .single()

    if (categoryError || !category) {
      return NextResponse.json(
        { error: `Category '${body.category_slug}' not found` },
        { status: 404 }
      )
    }

    const results: any[] = []
    let successCount = 0
    let failureCount = 0

    // Process each sacred place
    for (const place of body.sacred_places) {
      try {
        // Validate required fields
        if (!place.name || !place.slug) {
          results.push({
            slug: place.slug || 'unknown',
            success: false,
            error: 'Missing required fields: name and slug'
          })
          failureCount++
          continue
        }

        // Check if place already exists
        const { data: existingPlace } = await supabase
          .schema('hindu')
          .from('sacred_places')
          .select('id')
          .eq('slug', place.slug)
          .single()

        const placeData = {
          name: place.name,
          sanskrit_name: place.sanskrit_name,
          slug: place.slug,
          category_id: category.id,
          title: place.title,
          subtitle: place.subtitle,
          description: place.description,
          location_details: place.location_details || {},
          hero_image_url: place.hero_image_url,
          hero_image_alt: place.hero_image_alt,
          featured_image_url: place.featured_image_url,
          featured_image_alt: place.featured_image_alt,
          content_sections: place.content_sections || [],
          interesting_facts: place.interesting_facts || [],
          religious_significance: place.religious_significance,
          mythology_stories: place.mythology_stories || [],
          festivals: place.festivals || [],
          rituals_practices: place.rituals_practices || [],
          pilgrimage_info: place.pilgrimage_info || {},
          temples: place.temples || [],
          darshan_timings: place.darshan_timings || {},
          gallery_images: place.gallery_images || [],
          related_places: place.related_places || [],
          faqs: place.faqs || [],
          meta_title: place.meta_title,
          meta_description: place.meta_description,
          keywords: place.keywords || [],
          canonical_url: place.canonical_url,
          status: place.status || 'draft',
          is_featured: place.is_featured || false,
          sort_order: place.sort_order || 0,
          view_count: place.view_count || 0,
          updated_at: new Date().toISOString()
        }

        let result
        if (existingPlace) {
          // Update existing place
          const { data, error } = await supabase
            .schema('hindu')
            .from('sacred_places')
            .update(placeData)
            .eq('id', existingPlace.id)
            .select('id, slug, name')
            .single()

          result = { data, error, action: 'updated' }
        } else {
          // Create new place
          const { data, error } = await supabase
            .schema('hindu')
            .from('sacred_places')
            .insert({
              ...placeData,
              created_at: new Date().toISOString()
            })
            .select('id, slug, name')
            .single()

          result = { data, error, action: 'created' }
        }

        if (result.error) {
          results.push({
            slug: place.slug,
            success: false,
            error: result.error.message,
            action: result.action
          })
          failureCount++
        } else {
          results.push({
            slug: place.slug,
            success: true,
            data: result.data,
            action: result.action
          })
          successCount++
        }

      } catch (error: any) {
        results.push({
          slug: place.slug || 'unknown',
          success: false,
          error: error.message || 'Unknown error occurred'
        })
        failureCount++
      }
    }

    return NextResponse.json({
      success: true,
      message: `Processed ${body.sacred_places.length} sacred places`,
      summary: {
        total: body.sacred_places.length,
        successful: successCount,
        failed: failureCount
      },
      results
    })

  } catch (error: any) {
    console.error('Bulk upload error:', error)
    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const action = url.searchParams.get('action')

  try {
    if (action === 'template') {
      // Return a template structure for sacred places bulk upload
      const template = {
        category_slug: "char-dham",
        sacred_places: [
          {
            name: "Example Sacred Place",
            sanskrit_name: "संस्कृत नाम",
            slug: "example-sacred-place",
            title: "Title for SEO and display",
            subtitle: "Subtitle for context",
            description: "Main description of the sacred place...",
            location_details: {
              address: "Full address",
              city: "City name",
              state: "State name",
              country: "India",
              coordinates: {
                lat: 0.0,
                lng: 0.0
              },
              altitude: "Altitude in meters"
            },
            hero_image_url: "/images/hero.jpg",
            hero_image_alt: "Alt text for hero image",
            featured_image_url: "/images/featured.jpg",
            featured_image_alt: "Alt text for featured image",
            content_sections: [
              {
                title: "Section Title",
                content: "Section content...",
                type: "text"
              }
            ],
            interesting_facts: [
              {
                title: "Fact Title",
                description: "Fact description..."
              }
            ],
            faqs: [
              {
                question: "Question text?",
                answer: "Answer text..."
              }
            ],
            meta_title: "SEO title",
            meta_description: "SEO description",
            keywords: ["keyword1", "keyword2"],
            status: "draft",
            is_featured: false,
            sort_order: 1
          }
        ]
      }

      return NextResponse.json({ template })
    }

    if (action === 'categories') {
      // Return available categories
      const { data: categories, error } = await supabase
        .schema('hindu')
        .from('sacred_place_categories')
        .select('slug, name, description')
        .eq('is_active', true)
        .order('sort_order')

      if (error) {
        throw error
      }

      return NextResponse.json({ categories })
    }

    return NextResponse.json({
      message: 'Sacred Places Bulk Upload API',
      endpoints: {
        'POST /': 'Upload sacred places data',
        'GET /?action=template': 'Get upload template',
        'GET /?action=categories': 'Get available categories'
      }
    })

  } catch (error: any) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
      { status: 500 }
    )
  }
}