import { NextRequest, NextResponse } from 'next/server'
import { hinduSupabase } from '@/lib/supabase'

interface DeityData {
  name: string
  sanskrit_name?: string
  slug: string
  title: string
  description?: string
  story?: string
  category_id?: string
  sacred_iconography?: Array<{
    title: string
    description: string
    icon?: string
    significance?: string
  }>
  sacred_stories?: Array<{
    title: string
    content: string
  }>
  divine_symbolism?: Array<{
    title: string
    meaning: string
  }>
  festivals?: Array<{
    name: string
    date: string
    description: string
  }>
  sacred_places?: Array<{
    name: string
    location?: string
    significance: string
  }>
  mantras?: Array<{
    title: string
    sanskrit: string
    transliteration: string
    meaning: string
    benefits: string
  }>
  essential_facts?: Array<{
    title?: string
    description?: string
    fact?: string
  }>
  youtube_videos?: {
    story?: string
    iconography?: string
    stories?: string
    symbolism?: string
    festivals?: string
    temples?: string
    mantras?: string
  }
  featured_image_url?: string
  hero_image_url?: string
  hero_image_alt?: string
  featured_image_alt?: string
  meta_title?: string
  meta_description?: string
  meta_keywords?: string
  status?: 'published' | 'draft' | 'archived'
  is_featured?: boolean
  sort_order?: number
}

interface BulkUploadRequest {
  deities: DeityData[]
}

export async function POST(request: NextRequest) {
  try {
    const body: BulkUploadRequest = await request.json()
    
    if (!body.deities || !Array.isArray(body.deities)) {
      return NextResponse.json(
        { error: 'Request must contain a "deities" array' },
        { status: 400 }
      )
    }

    const results = {
      successCount: 0,
      failureCount: 0,
      totalItems: body.deities.length,
      createdDeities: [] as string[],
      skippedDeities: [] as string[],
      errors: [] as Array<{ deity: string, error: string }>
    }

    for (const deityData of body.deities) {
      try {
        // Validate required fields
        if (!deityData.name || !deityData.slug) {
          results.errors.push({
            deity: `${deityData.name || 'Unknown'} (${deityData.slug || 'no-slug'})`,
            error: 'Name and slug are required'
          })
          results.failureCount++
          continue
        }

        // Check if deity already exists
        const { data: existingDeity } = await hinduSupabase
          .from('deities')
          .select('id, name')
          .eq('slug', deityData.slug)
          .single()

        if (existingDeity) {
          results.skippedDeities.push(`${deityData.name} (${deityData.slug})`)
          continue
        }

        // Prepare deity data
        const deityRecord = {
          ...deityData,
          status: deityData.status || 'draft',
          is_featured: deityData.is_featured || false,
          sort_order: deityData.sort_order || 0,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }

        // Insert deity
        const { data: insertedDeity, error: insertError } = await hinduSupabase
          .from('deities')
          .insert([deityRecord])
          .select('id, name, slug')
          .single()

        if (insertError) {
          results.errors.push({
            deity: `${deityData.name} (${deityData.slug})`,
            error: insertError.message
          })
          results.failureCount++
          continue
        }

        results.createdDeities.push(`${insertedDeity.name} (${insertedDeity.slug})`)
        results.successCount++

      } catch (error) {
        results.errors.push({
          deity: `${deityData.name || 'Unknown'} (${deityData.slug || 'no-slug'})`,
          error: error instanceof Error ? error.message : 'Unknown error'
        })
        results.failureCount++
      }
    }

    return NextResponse.json({
      message: `Bulk upload completed. ${results.successCount} successful, ${results.failureCount} failed.`,
      ...results
    })

  } catch (error) {
    console.error('Bulk upload error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to process bulk upload',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

// Generate sample data for testing
export async function GET() {
  const sampleData: BulkUploadRequest = {
    deities: [
      {
        name: "Saraswati",
        sanskrit_name: "सरस्वती",
        slug: "saraswati",
        title: "Goddess of Knowledge and Arts",
        description: "Saraswati is the Hindu goddess of knowledge, music, arts, wisdom, and learning. She is one of the members of the Tridevi (three goddesses) along with Lakshmi and Parvati.",
        story: "Saraswati emerged from the mouth of Brahma and became his consort. She is revered as the divine source of wisdom and learning, flowing like a sacred river to nourish the minds of devotees with knowledge and creativity.",
        sacred_iconography: [
          {
            title: "White Lotus",
            description: "Represents purity and spiritual perfection",
            icon: "Flower"
          },
          {
            title: "Veena",
            description: "Musical instrument symbolizing harmony in knowledge and arts",
            icon: "Music"
          },
          {
            title: "Sacred Books",
            description: "Represents knowledge and learning",
            icon: "BookOpen"
          },
          {
            title: "Swan",
            description: "Vehicle representing wisdom and discrimination",
            icon: "Crown"
          }
        ],
        divine_symbolism: [
          {
            title: "White Color",
            meaning: "Represents purity, peace, and knowledge"
          },
          {
            title: "Flowing Water",
            meaning: "Knowledge flows continuously like a river"
          },
          {
            title: "Four Arms",
            meaning: "Represents the four aspects of human personality in learning"
          }
        ],
        festivals: [
          {
            name: "Saraswati Puja",
            date: "Vasant Panchami (February)",
            description: "Main festival dedicated to Goddess Saraswati, celebrated especially by students and artists"
          },
          {
            name: "Navaratri",
            date: "September/October",
            description: "During Navaratri, Saraswati is worshipped on the final days"
          }
        ],
        mantras: [
          {
            title: "Saraswati Vandana",
            sanskrit: "ॐ सरस्वत्यै नमः",
            transliteration: "Om Saraswatyai Namah",
            meaning: "Salutations to Goddess Saraswati",
            benefits: "Enhances learning, memory, and artistic abilities"
          }
        ],
        essential_facts: [
          {
            title: "Consort",
            description: "Wife of Lord Brahma, the creator"
          },
          {
            title: "Domain",
            description: "Knowledge, music, arts, wisdom, and learning"
          },
          {
            title: "Vehicle",
            description: "Swan (Hamsa) representing wisdom and discrimination"
          }
        ],
        status: "published",
        is_featured: true,
        sort_order: 1
      },
      {
        name: "Lakshmi",
        sanskrit_name: "लक्ष्मी",
        slug: "lakshmi",
        title: "Goddess of Wealth and Prosperity",
        description: "Lakshmi is the Hindu goddess of wealth, fortune, prosperity, beauty, and abundance. She is the consort of Vishnu and is also called Shri.",
        story: "Lakshmi emerged from the churning of the cosmic ocean (Samudra Manthan) standing on a lotus flower. She chose Vishnu as her eternal consort and appears in various forms in his different incarnations.",
        sacred_iconography: [
          {
            title: "Lotus Flower",
            description: "Symbol of purity and spiritual power",
            icon: "Flower"
          },
          {
            title: "Gold Coins",
            description: "Represents material and spiritual wealth",
            icon: "Star"
          },
          {
            title: "Four Arms",
            description: "Represents the four goals of human life",
            icon: "Crown"
          },
          {
            title: "Elephants",
            description: "Symbol of royal power and wisdom",
            icon: "Shield"
          }
        ],
        divine_symbolism: [
          {
            title: "Red and Gold Colors",
            meaning: "Represents prosperity, fertility, and purity"
          },
          {
            title: "Lotus Seat",
            meaning: "Rising above material desires while providing abundance"
          },
          {
            title: "Flowing Water",
            meaning: "Continuous flow of prosperity and grace"
          }
        ],
        festivals: [
          {
            name: "Diwali",
            date: "October/November",
            description: "Main festival of Lakshmi, Festival of Lights celebrating her arrival"
          },
          {
            name: "Lakshmi Puja",
            date: "Various dates",
            description: "Special worship for prosperity and abundance"
          }
        ],
        mantras: [
          {
            title: "Lakshmi Gayatri",
            sanskrit: "ॐ महालक्ष्म्यै नमः",
            transliteration: "Om Mahalakshmyai Namah",
            meaning: "Salutations to the Great Goddess Lakshmi",
            benefits: "Brings prosperity, abundance, and material success"
          }
        ],
        essential_facts: [
          {
            title: "Consort",
            description: "Wife of Lord Vishnu, the preserver"
          },
          {
            title: "Domain",
            description: "Wealth, prosperity, fortune, beauty, and abundance"
          },
          {
            title: "Symbol",
            description: "Lotus flower and gold coins"
          }
        ],
        status: "published",
        is_featured: true,
        sort_order: 2
      }
    ]
  }

  return NextResponse.json(sampleData)
}