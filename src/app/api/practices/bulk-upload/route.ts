import { NextRequest, NextResponse } from 'next/server'
import { hinduSupabase } from '@/lib/supabase'

interface PracticeData {
  name: string
  sanskrit_name?: string
  slug: string
  title: string
  subtitle?: string
  description?: string
  purpose?: string
  category_id?: string
  duration?: string
  difficulty_level?: 'Beginner' | 'Intermediate' | 'Advanced'
  best_time?: string
  practice_type?: string
  tradition?: string
  spiritual_level?: string
  steps?: Array<{
    title: string
    description: string
    duration?: string
    notes?: string
  }>
  benefits?: string[]
  materials?: Array<{
    name: string
    description: string
    required: boolean
  }>
  variations?: Array<{
    name: string
    description: string
    suitable_for?: string[]
  }>
  precautions?: string[]
  prerequisites?: string[]
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
  practices: PracticeData[]
}

export async function POST(request: NextRequest) {
  try {
    const body: BulkUploadRequest = await request.json()
    
    if (!body.practices || !Array.isArray(body.practices)) {
      return NextResponse.json(
        { error: 'Request must contain a "practices" array' },
        { status: 400 }
      )
    }

    const results = {
      successCount: 0,
      failureCount: 0,
      totalItems: body.practices.length,
      createdPractices: [] as string[],
      skippedPractices: [] as string[],
      errors: [] as Array<{ practice: string, error: string }>
    }

    for (const practiceData of body.practices) {
      try {
        // Validate required fields
        if (!practiceData.name || !practiceData.slug) {
          results.errors.push({
            practice: `${practiceData.name || 'Unknown'} (${practiceData.slug || 'no-slug'})`,
            error: 'Name and slug are required'
          })
          results.failureCount++
          continue
        }

        // Check if practice already exists
        const { data: existingPractice } = await hinduSupabase
          .from('practices')
          .select('id, name')
          .eq('slug', practiceData.slug)
          .single()

        if (existingPractice) {
          results.skippedPractices.push(`${practiceData.name} (${practiceData.slug})`)
          continue
        }

        // Prepare practice data
        const practiceRecord = {
          ...practiceData,
          status: practiceData.status || 'draft',
          is_featured: practiceData.is_featured || false,
          sort_order: practiceData.sort_order || 0,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }

        // Insert practice
        const { data: insertedPractice, error: insertError } = await hinduSupabase
          .from('practices')
          .insert([practiceRecord])
          .select('id, name, slug')
          .single()

        if (insertError) {
          results.errors.push({
            practice: `${practiceData.name} (${practiceData.slug})`,
            error: insertError.message
          })
          results.failureCount++
          continue
        }

        results.createdPractices.push(`${insertedPractice.name} (${insertedPractice.slug})`)
        results.successCount++

      } catch (error) {
        results.errors.push({
          practice: `${practiceData.name || 'Unknown'} (${practiceData.slug || 'no-slug'})`,
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
    practices: [
      {
        name: "Pranayama",
        sanskrit_name: "प्राणायाम",
        slug: "pranayama",
        title: "The Art of Breath Control",
        subtitle: "Master your life force through conscious breathing",
        description: "Pranayama is the yogic practice of controlling the breath, which is the source of our prana, or vital life force. Through various breathing techniques, practitioners can influence their physical, mental, and spiritual well-being.",
        purpose: "Pranayama helps regulate the nervous system, increase oxygen flow to the brain, reduce stress and anxiety, and prepare the mind for meditation. It bridges the gap between physical and spiritual practices.",
        duration: "15-30 minutes",
        difficulty_level: "Beginner",
        best_time: "Early morning or evening",
        practice_type: "Breathing Exercise",
        tradition: "Hatha Yoga",
        spiritual_level: "Foundational",
        steps: [
          {
            title: "Preparation",
            description: "Sit in a comfortable meditative posture with spine straight. Close your eyes and relax your body.",
            duration: "2-3 minutes",
            notes: "Ensure you're in a clean, well-ventilated space"
          },
          {
            title: "Natural Breath Awareness",
            description: "Begin by observing your natural breath without controlling it. Notice the rhythm and depth.",
            duration: "3-5 minutes",
            notes: "Don't judge or try to change anything, just observe"
          },
          {
            title: "Deep Breathing (Dirga Pranayama)",
            description: "Inhale slowly filling the belly, ribs, and chest. Exhale in reverse order - chest, ribs, belly.",
            duration: "5-7 minutes",
            notes: "Keep the breath smooth and controlled"
          },
          {
            title: "Counted Breathing",
            description: "Inhale for 4 counts, hold for 4 counts, exhale for 6 counts. Gradually increase the count.",
            duration: "5-10 minutes",
            notes: "Never strain. If you feel dizzy, return to natural breathing"
          },
          {
            title: "Integration",
            description: "Return to natural breathing and sit quietly, observing the effects of the practice.",
            duration: "2-3 minutes",
            notes: "Notice any changes in your mental state or energy levels"
          }
        ],
        benefits: [
          "Reduces stress and anxiety",
          "Improves concentration and mental clarity",
          "Enhances oxygen supply to the brain",
          "Balances the nervous system",
          "Prepares the mind for meditation",
          "Increases lung capacity",
          "Helps regulate blood pressure",
          "Promotes better sleep"
        ],
        materials: [
          {
            name: "Meditation Cushion",
            description: "For comfortable seated posture",
            required: false
          },
          {
            name: "Quiet Space",
            description: "Clean, well-ventilated area free from distractions",
            required: true
          },
          {
            name: "Comfortable Clothing",
            description: "Loose, breathable clothing that doesn't restrict breathing",
            required: true
          }
        ],
        variations: [
          {
            name: "Nadi Shodhana (Alternate Nostril Breathing)",
            description: "Use thumb and ring finger to alternate breathing through each nostril",
            suitable_for: ["Intermediate practitioners", "Those seeking mental balance"]
          },
          {
            name: "Kapalabhati (Skull Shining Breath)",
            description: "Rapid, forceful exhalations followed by passive inhalations",
            suitable_for: ["Advanced practitioners", "Morning energizing practice"]
          },
          {
            name: "Bhramari (Bee Breath)",
            description: "Humming sound during exhalation while closing ears with fingers",
            suitable_for: ["Anxiety relief", "Improved concentration"]
          }
        ],
        precautions: [
          "Avoid practicing on a full stomach",
          "Stop if you feel dizzy or uncomfortable",
          "Don't force or strain the breath",
          "Practice in a well-ventilated space",
          "Pregnant women should consult a teacher",
          "Those with respiratory conditions should start slowly"
        ],
        prerequisites: [
          "Basic understanding of comfortable sitting posture",
          "Ability to breathe freely through the nose",
          "Basic body awareness"
        ],
        status: "published",
        is_featured: true,
        sort_order: 1
      },
      {
        name: "Japa Meditation",
        sanskrit_name: "जप",
        slug: "japa-meditation",
        title: "Repetitive Prayer Practice",
        subtitle: "Connect with the divine through sacred sound",
        description: "Japa is the meditative repetition of a mantra or divine name. This ancient practice helps focus the mind, purify consciousness, and develop devotion while connecting the practitioner with divine energy.",
        purpose: "Japa meditation helps quiet mental chatter, develop concentration, and create a direct connection with the divine. It can be practiced anywhere and serves as both meditation and prayer.",
        duration: "20-45 minutes",
        difficulty_level: "Beginner",
        best_time: "Early morning or evening",
        practice_type: "Mantra Meditation",
        tradition: "Bhakti Yoga",
        spiritual_level: "All levels",
        steps: [
          {
            title: "Choose Your Mantra",
            description: "Select a sacred name or mantra that resonates with you (Om, Om Namah Shivaya, Hare Krishna, etc.)",
            duration: "Before practice",
            notes: "Traditional mantras carry special power from centuries of repetition"
          },
          {
            title: "Comfortable Seating",
            description: "Sit in a quiet place facing east or north, with spine straight and body relaxed.",
            duration: "1-2 minutes",
            notes: "You can also walk slowly while doing japa"
          },
          {
            title: "Begin Repetition",
            description: "Start repeating your chosen mantra mentally or softly aloud, maintaining steady rhythm.",
            duration: "15-40 minutes",
            notes: "Begin with shorter periods and gradually increase"
          },
          {
            title: "Use Mala (Optional)",
            description: "Count repetitions using a mala (prayer beads) to help maintain focus and track progress.",
            duration: "Throughout practice",
            notes: "One full mala equals 108 repetitions"
          },
          {
            title: "Silent Conclusion",
            description: "End in silence, offering gratitude and allowing the vibration of the mantra to settle.",
            duration: "2-5 minutes",
            notes: "Notice the peace and stillness that follows"
          }
        ],
        benefits: [
          "Calms and focuses the mind",
          "Develops devotion and surrender",
          "Purifies consciousness",
          "Reduces stress and anxiety",
          "Creates positive mental vibrations",
          "Enhances spiritual connection",
          "Can be practiced anywhere",
          "Builds patience and discipline"
        ],
        materials: [
          {
            name: "Mala (Prayer Beads)",
            description: "108 beads for counting repetitions",
            required: false
          },
          {
            name: "Quiet Space",
            description: "Peaceful environment for practice",
            required: true
          },
          {
            name: "Mantra Book",
            description: "Reference for traditional mantras and their meanings",
            required: false
          }
        ],
        variations: [
          {
            name: "Mental Japa",
            description: "Silent repetition of the mantra in the mind",
            suitable_for: ["Public spaces", "Beginners", "Deep meditation"]
          },
          {
            name: "Vocal Japa",
            description: "Soft audible repetition of the mantra",
            suitable_for: ["Home practice", "Group sessions", "Emotional release"]
          },
          {
            name: "Walking Japa",
            description: "Repetition while walking slowly and mindfully",
            suitable_for: ["Active practitioners", "Outdoor practice", "Restless minds"]
          }
        ],
        precautions: [
          "Choose a mantra that feels comfortable and sacred to you",
          "Don't rush the repetition - maintain steady rhythm",
          "If using a mala, don't cross over the guru bead",
          "Practice with genuine devotion rather than mechanical repetition",
          "Start with shorter sessions and gradually increase duration"
        ],
        prerequisites: [
          "Basic understanding of mantra pronunciation",
          "Ability to sit comfortably for extended periods",
          "Sincere desire for spiritual connection"
        ],
        status: "published",
        is_featured: false,
        sort_order: 2
      }
    ]
  }

  return NextResponse.json(sampleData)
}