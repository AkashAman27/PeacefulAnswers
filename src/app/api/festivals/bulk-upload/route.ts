import { NextRequest, NextResponse } from 'next/server'
import { hinduSupabase } from '@/lib/supabase'

interface FestivalData {
  name: string
  sanskrit_name?: string
  slug: string
  title: string
  subtitle?: string
  description?: string
  historical_significance?: string
  category_id?: string
  date_type?: string
  duration?: string
  primary_deity?: string
  significance_type?: string
  lunar_calendar_date?: string
  gregorian_date_range?: string
  rituals?: Array<{
    name: string
    description: string
    timing?: string
    materials?: string[]
  }>
  regional_variations?: Array<{
    region: string
    description: string
    special_features?: string[]
  }>
  stories?: Array<{
    title: string
    story: string
    moral?: string
  }>
  celebrations?: Array<{
    activity: string
    description: string
    participants?: string
  }>
  traditional_foods?: Array<{
    name: string
    description: string
    significance?: string
  }>
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
  festivals: FestivalData[]
}

export async function POST(request: NextRequest) {
  try {
    const body: BulkUploadRequest = await request.json()
    
    if (!body.festivals || !Array.isArray(body.festivals)) {
      return NextResponse.json(
        { error: 'Request must contain a "festivals" array' },
        { status: 400 }
      )
    }

    const results = {
      successCount: 0,
      failureCount: 0,
      totalItems: body.festivals.length,
      createdFestivals: [] as string[],
      skippedFestivals: [] as string[],
      errors: [] as Array<{ festival: string, error: string }>
    }

    for (const festivalData of body.festivals) {
      try {
        // Validate required fields
        if (!festivalData.name || !festivalData.slug) {
          results.errors.push({
            festival: `${festivalData.name || 'Unknown'} (${festivalData.slug || 'no-slug'})`,
            error: 'Name and slug are required'
          })
          results.failureCount++
          continue
        }

        // Check if festival already exists
        const { data: existingFestival } = await hinduSupabase
          .from('festivals')
          .select('id, name')
          .eq('slug', festivalData.slug)
          .single()

        if (existingFestival) {
          results.skippedFestivals.push(`${festivalData.name} (${festivalData.slug})`)
          continue
        }

        // Prepare festival data
        const festivalRecord = {
          ...festivalData,
          status: festivalData.status || 'draft',
          is_featured: festivalData.is_featured || false,
          sort_order: festivalData.sort_order || 0,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }

        // Insert festival
        const { data: insertedFestival, error: insertError } = await hinduSupabase
          .from('festivals')
          .insert([festivalRecord])
          .select('id, name, slug')
          .single()

        if (insertError) {
          results.errors.push({
            festival: `${festivalData.name} (${festivalData.slug})`,
            error: insertError.message
          })
          results.failureCount++
          continue
        }

        results.createdFestivals.push(`${insertedFestival.name} (${insertedFestival.slug})`)
        results.successCount++

      } catch (error) {
        results.errors.push({
          festival: `${festivalData.name || 'Unknown'} (${festivalData.slug || 'no-slug'})`,
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
    festivals: [
      {
        name: "Navaratri",
        sanskrit_name: "नवरात्रि",
        slug: "navaratri",
        title: "Nine Nights of Divine Feminine",
        subtitle: "Celebrating the triumph of good over evil",
        description: "Navaratri is a nine-day Hindu festival celebrating the divine feminine energy (Shakti) and commemorating the victory of Goddess Durga over the demon Mahishasura. Each day is dedicated to different forms of the goddess.",
        historical_significance: "Navaratri has ancient origins dating back thousands of years. It represents the eternal struggle between good and evil, light and darkness. The festival celebrates the divine feminine power that protects and nurtures the universe while destroying negative forces.",
        date_type: "Lunar Calendar",
        duration: "9 Days",
        primary_deity: "Goddess Durga",
        significance_type: "Spiritual Victory",
        lunar_calendar_date: "Ashwin Shukla Pratipada to Navami",
        gregorian_date_range: "September/October",
        rituals: [
          {
            name: "Ghatasthapana",
            description: "Installation of the sacred pot (kalash) to invoke the goddess",
            timing: "First day morning",
            materials: ["Sacred pot", "Holy water", "Rice", "Flowers", "Coins"]
          },
          {
            name: "Daily Puja",
            description: "Morning and evening prayers with specific mantras for each day",
            timing: "Morning and evening",
            materials: ["Flowers", "Incense", "Lamps", "Prasad", "Sacred text"]
          },
          {
            name: "Fasting",
            description: "Devotees observe various types of fasts during the nine days",
            timing: "Throughout the festival",
            materials: ["Fruits", "Milk", "Special fasting foods"]
          },
          {
            name: "Garba and Dandiya",
            description: "Traditional folk dances performed in celebration",
            timing: "Evening",
            materials: ["Traditional costumes", "Dandiya sticks", "Music"]
          }
        ],
        regional_variations: [
          {
            region: "Gujarat",
            description: "Famous for Garba and Dandiya Raas dances with elaborate decorations",
            special_features: ["Garba dance", "Dandiya Raas", "Colorful attire", "Community celebrations"]
          },
          {
            region: "West Bengal",
            description: "Celebrated as Durga Puja with magnificent pandals and cultural programs",
            special_features: ["Artistic pandals", "Clay idols", "Cultural performances", "Dhunuchi dance"]
          },
          {
            region: "Karnataka",
            description: "Known as Mysore Dasara with royal processions and cultural events",
            special_features: ["Royal procession", "Palace illumination", "Classical music concerts"]
          },
          {
            region: "Tamil Nadu",
            description: "Celebrated with Golu (doll displays) and Saraswati Puja",
            special_features: ["Golu displays", "Traditional dolls", "Kolu arrangements"]
          }
        ],
        stories: [
          {
            title: "The Defeat of Mahishasura",
            story: "Long ago, the demon Mahishasura obtained a boon that no man or god could kill him. Drunk with power, he terrorized the heavens and earth. The gods combined their powers to create Goddess Durga, who fought the demon for nine days and finally defeated him on the tenth day, known as Vijaya Dashami.",
            moral: "Good always triumphs over evil, and divine power protects those who are righteous"
          },
          {
            title: "The Nine Forms of Goddess",
            story: "During Navaratri, the goddess manifests in nine different forms: Shailaputri, Brahmacharini, Chandraghanta, Kushmanda, Skandamata, Katyayani, Kalaratri, Mahagauri, and Siddhidatri. Each form represents different aspects of divine feminine energy and spiritual evolution.",
            moral: "The divine manifests in multiple forms to guide devotees through different stages of spiritual growth"
          }
        ],
        celebrations: [
          {
            activity: "Garba Dance",
            description: "Traditional circular dance performed around a clay pot with a lamp",
            participants: "Men and women of all ages"
          },
          {
            activity: "Dandiya Raas",
            description: "Energetic dance with decorated sticks representing the fight between Durga and Mahishasura",
            participants: "Dancers in pairs"
          },
          {
            activity: "Golu Display",
            description: "Elaborate displays of dolls and figurines depicting mythological stories",
            participants: "Families, especially women"
          },
          {
            activity: "Kanya Puja",
            description: "Worship of young girls representing the goddess",
            participants: "Young girls and devotees"
          }
        ],
        traditional_foods: [
          {
            name: "Sabudana Khichdi",
            description: "Tapioca pearls cooked with peanuts and spices",
            significance: "Popular fasting food during Navaratri"
          },
          {
            name: "Kuttu Ki Puri",
            description: "Deep-fried bread made from buckwheat flour",
            significance: "Gluten-free option for fasting devotees"
          },
          {
            name: "Fruit Chaat",
            description: "Mixed fruits with spices and herbs",
            significance: "Healthy and refreshing fasting food"
          },
          {
            name: "Malpua",
            description: "Sweet pancakes offered as prasad",
            significance: "Traditional offering to the goddess"
          }
        ],
        status: "published",
        is_featured: true,
        sort_order: 1
      },
      {
        name: "Karva Chauth",
        sanskrit_name: "करवा चौथ",
        slug: "karva-chauth",
        title: "Festival of Married Women",
        subtitle: "A day of fasting and prayers for husband's longevity",
        description: "Karva Chauth is a one-day festival celebrated by married Hindu women in Northern India. They observe a strict fast from sunrise to moonrise for the safety and longevity of their husbands.",
        historical_significance: "This ancient festival has its roots in the tradition where women would pray for their husbands' safe return from wars and travels. The fast demonstrates the power of devotion and love in a marriage.",
        date_type: "Lunar Calendar",
        duration: "1 Day",
        primary_deity: "Goddess Parvati",
        significance_type: "Marital Devotion",
        lunar_calendar_date: "Kartik Krishna Chaturthi",
        gregorian_date_range: "October/November",
        rituals: [
          {
            name: "Pre-dawn Meal (Sargi)",
            description: "Special meal eaten before sunrise, usually prepared by mother-in-law",
            timing: "Before sunrise",
            materials: ["Traditional sweets", "Fruits", "Coconut", "Almonds"]
          },
          {
            name: "Day-long Fast",
            description: "Complete fast without food or water from sunrise to moonrise",
            timing: "Sunrise to moonrise",
            materials: ["Strong determination", "Prayer beads"]
          },
          {
            name: "Evening Puja",
            description: "Group prayers with other married women sharing Karva Chauth stories",
            timing: "Evening before moonrise",
            materials: ["Karva (clay pot)", "Diya", "Flowers", "Offerings"]
          },
          {
            name: "Moon Viewing",
            description: "Breaking the fast after seeing the moon through a sieve and husband's face",
            timing: "After moonrise",
            materials: ["Sieve", "Water", "First bite from husband"]
          }
        ],
        regional_variations: [
          {
            region: "Punjab",
            description: "Elaborate celebrations with traditional songs and dances",
            special_features: ["Gidda dance", "Traditional suits", "Community gatherings"]
          },
          {
            region: "Rajasthan",
            description: "Celebrated with mehendi ceremonies and storytelling",
            special_features: ["Mehendi application", "Folk songs", "Traditional stories"]
          },
          {
            region: "Uttar Pradesh",
            description: "Focus on Karva Chauth Katha (stories) and group prayers",
            special_features: ["Story recitation", "Collective prayers", "Traditional offerings"]
          }
        ],
        stories: [
          {
            title: "The Story of Veeravati",
            story: "Once a woman named Veeravati was tricked by her brothers into breaking her Karva Chauth fast early. As a result, her husband fell seriously ill. When she discovered the truth, she performed the fast properly with complete devotion, and her husband was restored to health.",
            moral: "The power of a wife's devotion and proper observance of traditions can overcome any difficulty"
          },
          {
            title: "Queen Velavati and King Asal",
            story: "Queen Velavati observed Karva Chauth with such dedication that when her husband King Asal died from a snake bite, she refused to accept his death. Her devotion was so powerful that Yama, the god of death, had to restore her husband's life.",
            moral: "True love and unwavering faith can even conquer death"
          }
        ],
        celebrations: [
          {
            activity: "Mehendi Application",
            description: "Women apply intricate henna designs on their hands and feet",
            participants: "Married women"
          },
          {
            activity: "Sargi Preparation",
            description: "Mother-in-law prepares special pre-dawn meal for daughter-in-law",
            participants: "Mother-in-law and daughter-in-law"
          },
          {
            activity: "Group Storytelling",
            description: "Women gather to share Karva Chauth stories and perform puja together",
            participants: "Married women in the community"
          },
          {
            activity: "Gift Exchange",
            description: "Husbands give gifts to wives after the fast is broken",
            participants: "Married couples"
          }
        ],
        traditional_foods: [
          {
            name: "Sargi Thali",
            description: "Pre-dawn meal with sweets, fruits, and savory items",
            significance: "Provides energy for the day-long fast"
          },
          {
            name: "Fenia",
            description: "Traditional sweet made with milk and sugar",
            significance: "Auspicious sweet for the occasion"
          },
          {
            name: "Mathri",
            description: "Crispy, flaky savory crackers",
            significance: "Long-lasting food that provides sustenance"
          },
          {
            name: "Coconut Laddu",
            description: "Sweet coconut balls offered in prayers",
            significance: "Symbol of purity and devotion"
          }
        ],
        status: "published",
        is_featured: false,
        sort_order: 2
      }
    ]
  }

  return NextResponse.json(sampleData)
}