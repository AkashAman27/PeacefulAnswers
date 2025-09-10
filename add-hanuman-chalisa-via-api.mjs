import fetch from 'node-fetch'

async function addHanumanChalisaViaAPI() {
  try {
    console.log('🔍 Adding Hanuman Chalisa to search database via API...')

    // Define the Hanuman Chalisa search entry
    const searchEntry = {
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
      search_text: 'hanuman chalisa shri hanuman chalisa complete 40 verse prayer lord hanuman hindi english translation tulsidas sant tulsidas powerful hymn strength protection devotion spiritual practice bajrangbali sankat mochan hanuman ji divine protection obstacles mental clarity inner peace devotional practice bhakti scripture sacred text chanting verses prayer hymn translation hanuman prayer lord hanuman'
    }

    // Make API request
    const response = await fetch('http://localhost:3000/api/admin/add-to-search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ searchEntry })
    })

    const result = await response.json()

    if (response.ok) {
      console.log('✅ Successfully added Hanuman Chalisa to search database!')
      console.log(`📝 Action: ${result.action}`)
      console.log(`🆔 Entry ID: ${result.data?.id}`)
      console.log(`📅 Updated: ${result.data?.updated_at}`)

      console.log('\n🎉 Hanuman Chalisa successfully added to the Hindu search database!')
      console.log('🔍 Users can now search for:')
      console.log('   • "hanuman chalisa" - direct match')
      console.log('   • "hanuman" - deity name')
      console.log('   • "chalisa" - prayer type')
      console.log('   • "tulsidas" - author')
      console.log('   • "40 verses" - specific content')
      console.log('   • "prayer" - general category')
      console.log('   • "scripture" - content type')
      
      // Test the search functionality
      console.log('\n🧪 Testing search functionality...')
      const searchResponse = await fetch('http://localhost:3000/api/search?q=hanuman+chalisa&limit=5')
      const searchResult = await searchResponse.json()
      
      if (searchResponse.ok && searchResult.results) {
        const hanumanResult = searchResult.results.find(r => r.slug === 'hanuman-chalisa')
        if (hanumanResult) {
          console.log('✅ Search test successful! Hanuman Chalisa found in search results')
          console.log(`   Title: ${hanumanResult.title}`)
          console.log(`   Type: ${hanumanResult.content_type}`)
          console.log(`   URL: ${hanumanResult.url_path}`)
        } else {
          console.log('⚠️  Search test: Hanuman Chalisa not found in search results')
        }
      } else {
        console.log('⚠️  Could not test search functionality')
      }
      
    } else {
      console.error('❌ Failed to add Hanuman Chalisa to search database')
      console.error('Response:', result)
    }

  } catch (error) {
    console.error('❌ Error adding Hanuman Chalisa via API:', error.message)
  }
}

// Run the script
addHanumanChalisaViaAPI()