import fetch from 'node-fetch'

async function addLakshmiPujaViaAPI() {
  try {
    console.log('🔍 Adding Lakshmi Puja to search database via API...')

    const searchEntry = {
      title: 'Lakshmi Ganesh Puja on Diwali - Complete Expert Guide',
      slug: 'lakshmi-puja',
      content_type: 'festival',
      description: 'Comprehensive guide to Lakshmi Ganesh Puja on Diwali. Learn the authentic 16-step ritual, auspicious timings (Muhurat), altar setup, mantras, and business worship practices for prosperity and blessings.',
      url_path: '/festivals/lakshmi-puja',
      difficulty_level: 'Intermediate',
      time_commitment: '2-3 hours',
      benefits: ['Spiritual prosperity', 'Wealth and abundance', 'Obstacle removal', 'Family harmony', 'Business success', 'Divine blessings'],
      tags: [
        'lakshmi puja',
        'lakshmi',
        'laxmi',
        'ganesh puja',
        'ganesha',
        'diwali',
        'deepavali',
        'diwali puja',
        'muhurat',
        'shodashopachara',
        '16 steps',
        'chopda pujan',
        'bahi khata puja',
        'lakshmi ganesh',
        'goddess lakshmi',
        'lord ganesha',
        'prosperity',
        'wealth',
        'abundance',
        'business worship',
        'vastu',
        'altar setup',
        'mantras',
        'shubh labh',
        'sthir lagna',
        'vrishabha lagna',
        'pradosh kaal',
        'amavasya',
        'festival ritual',
        'puja vidhi',
        'sacred rituals',
        'mahalakshmi',
        'shri suktam',
        'ashta lakshmi',
        'kuber',
        'saraswati',
        'panchamrit',
        'aarti',
        'naivedya',
        'prasad',
        'account books',
        'new year',
        'financial prosperity'
      ],
      search_text: 'lakshmi puja laxmi ganesh ganesha diwali deepavali puja vidhi complete guide expert protocol 16 step shodashopachara muhurat timing auspicious pradosh kaal vrishabha lagna sthir lagna vastu guidelines altar setup chowki deity placement seated idols samagri checklist panchamrit mantras vakratunda mahalakshmi moola mantra shri suktam ashta lakshmi stotram chopda pujan bahi khata puja business worship account books shubh labh ethical prosperity goddess lakshmi lord ganesha wealth abundance prosperity obstacle removal family harmony business success divine blessings kuber saraswati naivedya prasad aarti visarjan dana charity spiritual wealth material prosperity knowledge wisdom sacred bath snana dhoop deep incense flowers kumkum roli chandan akshat gangajal kalash coconut mango leaves financial year new beginning amavasya new moon kartik month festival rituals hindu puja diwali celebration'
    }

    const response = await fetch('http://localhost:3000/api/admin/add-to-search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ searchEntry })
    })

    const result = await response.json()

    if (response.ok) {
      console.log('✅ Successfully added Lakshmi Puja to search database!')
      console.log(`📝 Action: ${result.action}`)
      console.log(`🆔 Entry ID: ${result.data?.id}`)
      console.log(`📅 Updated: ${result.data?.updated_at}`)

      console.log('\n🎉 Lakshmi Puja successfully added to the Hindu search database!')
      console.log('🔍 Users can now search for:')
      console.log('   • "lakshmi puja" - direct match')
      console.log('   • "lakshmi" or "laxmi" - deity name')
      console.log('   • "ganesh puja" - combined worship')
      console.log('   • "diwali puja" - festival context')
      console.log('   • "chopda pujan" - business worship')
      console.log('   • "muhurat" - auspicious timing')
      console.log('   • "16 step puja" - ritual method')

      // Test the search functionality
      console.log('\n🧪 Testing search functionality...')
      const searchResponse = await fetch('http://localhost:3000/api/search?q=lakshmi&limit=5')
      const searchResult = await searchResponse.json()

      if (searchResponse.ok && searchResult.results) {
        const lakshmiResult = searchResult.results.find(r => r.slug === 'lakshmi-puja')
        if (lakshmiResult) {
          console.log('✅ Search test successful! Lakshmi Puja found in search results')
          console.log(`   Title: ${lakshmiResult.title}`)
          console.log(`   Type: ${lakshmiResult.content_type}`)
          console.log(`   URL: ${lakshmiResult.url_path}`)
        } else {
          console.log('⚠️  Search test: Lakshmi Puja not found in search results yet (may need indexing)')
        }
      } else {
        console.log('⚠️  Could not test search functionality')
      }

    } else {
      console.error('❌ Failed to add Lakshmi Puja to search database')
      console.error('Response:', result)
    }

  } catch (error) {
    console.error('❌ Error adding Lakshmi Puja via API:', error.message)
  }
}

// Run the script
addLakshmiPujaViaAPI()
