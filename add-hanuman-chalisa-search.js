const { createClient } = require('@supabase/supabase-js')
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env.local') })

// Load environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing required environment variables')
  console.error('NEXT_PUBLIC_SUPABASE_URL:', !!supabaseUrl)
  console.error('SUPABASE_SERVICE_ROLE_KEY:', !!supabaseServiceKey)
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

async function addHanumanChalisaToSearch() {
  try {
    console.log('🔍 Adding Hanuman Chalisa page to Hindu search database...')

    // Define the Hanuman Chalisa search entry
    const hanumanChalisaEntry = {
      title: 'Shri Hanuman Chalisa',
      slug: 'hanuman-chalisa',
      content_type: 'scripture',
      description: 'Complete 40-verse prayer to Lord Hanuman with Hindi and English translations. Composed by Sant Tulsidas, this powerful hymn is recited for strength, protection, and devotion.',
      url_path: '/scriptures/hanuman-chalisa',
      difficulty_level: 'Beginner',
      time_commitment: '10-15 minutes',
      benefits: ['Spiritual strength', 'Protection from obstacles', 'Mental clarity', 'Devotional practice', 'Inner peace'],
      tags: [
        'hanuman chalisa',
        'hanuman',
        'chalisa', 
        'prayer',
        'verses',
        'tulsidas',
        'scripture',
        'devotion',
        'bhakti',
        'hanuman ji',
        'bajrangbali',
        'sankat mochan',
        '40 verses',
        'hindi',
        'english',
        'translation',
        'hymn',
        'chanting',
        'spiritual practice',
        'protection',
        'strength',
        'obstacles',
        'divine protection',
        'lord hanuman',
        'hanuman prayer',
        'sacred text'
      ],
      search_text: `hanuman chalisa shri hanuman chalisa complete 40 verse prayer lord hanuman hindi english translation tulsidas sant tulsidas powerful hymn strength protection devotion spiritual practice bajrangbali sankat mochan hanuman ji divine protection obstacles mental clarity inner peace devotional practice bhakti scripture sacred text chanting verses prayer hymn translation hanuman prayer lord hanuman`
    }

    // Check if the entry already exists
    const { data: existingEntry, error: checkError } = await supabase
      .schema('hindu')
      .from('search_content')
      .select('id')
      .eq('slug', 'hanuman-chalisa')
      .single()

    if (checkError && checkError.code !== 'PGRST116') {
      throw checkError
    }

    if (existingEntry) {
      console.log('⚠️  Hanuman Chalisa entry already exists. Updating...')
      
      const { data, error } = await supabase
        .schema('hindu')
        .from('search_content')
        .update(hanumanChalisaEntry)
        .eq('slug', 'hanuman-chalisa')
        .select()

      if (error) throw error

      console.log('✅ Successfully updated Hanuman Chalisa search entry!')
      console.log('📝 Updated entry:', JSON.stringify(data[0], null, 2))
    } else {
      console.log('➕ Adding new Hanuman Chalisa entry...')
      
      const { data, error } = await supabase
        .schema('hindu')
        .from('search_content')
        .insert([hanumanChalisaEntry])
        .select()

      if (error) throw error

      console.log('✅ Successfully added Hanuman Chalisa to search database!')
      console.log('📝 New entry:', JSON.stringify(data[0], null, 2))
    }

    // Verify the entry can be found through search
    console.log('\n🔍 Testing search functionality...')
    
    const searchTests = [
      'hanuman chalisa',
      'hanuman',
      'chalisa',
      'tulsidas',
      'prayer'
    ]

    for (const searchTerm of searchTests) {
      const { data: searchResults, error: searchError } = await supabase
        .schema('hindu')
        .from('search_content')
        .select('title, content_type, slug')
        .ilike('title', `%${searchTerm}%`)
        .or(`description.ilike.%${searchTerm}%,tags.cs.{${searchTerm}},search_text.ilike.%${searchTerm}%`)

      if (searchError) {
        console.log(`❌ Search test failed for "${searchTerm}":`, searchError.message)
      } else {
        const hanumanResult = searchResults.find(r => r.slug === 'hanuman-chalisa')
        if (hanumanResult) {
          console.log(`✅ "${searchTerm}" → Found Hanuman Chalisa`)
        } else {
          console.log(`⚠️  "${searchTerm}" → Hanuman Chalisa not found in results`)
        }
      }
    }

    console.log('\n🎉 Hanuman Chalisa successfully added to the Hindu search database!')
    console.log('🔍 Users can now search for:')
    console.log('   • "hanuman chalisa" - direct match')
    console.log('   • "hanuman" - deity name')
    console.log('   • "chalisa" - prayer type')
    console.log('   • "tulsidas" - author')
    console.log('   • "40 verses" - specific content')
    console.log('   • "prayer" - general category')
    console.log('   • "scripture" - content type')

  } catch (error) {
    console.error('❌ Error adding Hanuman Chalisa to search:', error)
    process.exit(1)
  }
}

// Run the script
addHanumanChalisaToSearch()