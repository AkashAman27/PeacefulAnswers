import Image from 'next/image'
import Link from 'next/link'
import { 
  Crown, 
  Star, 
  Heart, 
  Calendar,
  MapPin,
  Mouse,
  ChevronLeft,
  Flower2,
  Gift,
  Scroll,
  Mountain,
  ArrowLeft,
  Zap,
  Shield,
  BookOpen
} from 'lucide-react'
import { hinduSupabase } from '@/lib/supabase'
import { Metadata } from 'next'
import SmartRecommendations from '@/components/SmartRecommendations'
import ContextualNavigation, { QuickNavigation } from '@/components/ContextualNavigation'
import { peacefulAnswersContentDatabase, getContentById } from '@/data/contentDatabase'
import { ContentItem } from '@/lib/contentRecommendations'

export const metadata: Metadata = {
  title: 'Lord Ganesha - The Remover of Obstacles | Hindu Deity Guide | PeacefulAnswers',
  description: 'Discover the sacred teachings of Lord Ganesha, the beloved elephant-headed deity and remover of obstacles. Learn about his stories, mantras, festivals, and spiritual significance in Hindu tradition.',
  keywords: 'Ganesha, Ganapati, Vinayaka, Hindu deity, remover of obstacles, elephant god, Ganesh Chaturthi, Hindu spirituality',
  openGraph: {
    title: 'Lord Ganesha - The Remover of Obstacles | Hindu Deity Guide',
    description: 'Explore the divine wisdom of Lord Ganesha, patron of arts and sciences, and the beloved remover of obstacles in Hindu tradition.',
    type: 'website',
  }
}

// Function to get Ganesha data from database
async function getGanesha() {
  try {
    const { data, error } = await hinduSupabase
      .from('deities')
      .select('*')
      .eq('name', 'Ganesha')
      .single()
    
    if (error) {
      console.error('Error fetching Ganesha:', error)
      return null
    }
    
    return data
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export default async function GaneshaPage() {
  // Get current content for recommendations
  const ganeshaContent = getContentById('ganesha')!
  
  // Get related content for navigation
  const relatedContent = [
    getContentById('shiva')!,
    getContentById('durga')!,
    getContentById('ganesh-chaturthi')!,
    getContentById('ganapati-puja')!
  ].filter(Boolean)

  // Quick navigation sections
  const quickNavSections = [
    { id: 'overview', title: 'Overview' },
    { id: 'iconography', title: 'Sacred Iconography' },
    { id: 'stories', title: 'Divine Stories' },
    { id: 'festivals', title: 'Festivals' },
    { id: 'mantras', title: 'Sacred Mantras' },
    { id: 'temples', title: 'Sacred Temples' },
    { id: 'worship', title: 'Worship Practices' },
    { id: 'recommendations', title: 'Related Content' }
  ]

  let deity = await getGanesha()
  
  // Fallback data structure (same as original)
  const fallbackData = {
    id: 1,
    name: 'Ganesha',
    sanskrit_name: 'गणेश',
    other_names: ['Ganapati', 'Vinayaka', 'Vighneshvara', 'Vighnaharta', 'Ekadanta', 'Lambodara'],
    category: 'Major Deity',
    description: 'Lord Ganesha, the beloved elephant-headed deity, is revered as the remover of obstacles, patron of arts and sciences, and the lord of beginnings. Known for his wisdom, prosperity-bringing nature, and accessible divine presence, Ganesha is traditionally invoked before starting any new venture, ritual, or important endeavor.',
    story: "Ganesha's most famous origin story tells of how Goddess Parvati created him from turmeric paste while bathing. When Shiva returned and was blocked by Ganesha from entering, a confrontation ensued, resulting in Ganesha losing his human head. To console the grieving Parvati, Shiva replaced it with an elephant's head, granting Ganesha the status of 'first among gods' - ensuring he would be worshipped before all other deities. This story symbolizes the triumph of dharma over ego and the transformative power of divine grace.",
    significance: 'Ganesha represents the perfect balance between worldly wisdom and spiritual insight. As the remover of obstacles, he clears both external challenges and internal barriers to spiritual growth. His elephant head symbolizes wisdom, his large ears represent good listening, and his trunk shows adaptability. As the patron of arts, sciences, and commerce, he bridges material success with spiritual fulfillment.',
    // ... rest of your existing fallback data structure
    sacred_iconography: [
      {
        symbol: 'Elephant Head',
        meaning: 'Wisdom, intelligence, and the ability to overcome obstacles',
        spiritual_significance: 'The elephant head represents wisdom that can remove the ignorance that binds us'
      },
      {
        symbol: 'Large Ears',
        meaning: 'Good listening and learning from all sources of wisdom',
        spiritual_significance: 'Reminds us to listen more than we speak, and to be open to divine guidance'
      },
      {
        symbol: 'Curved Trunk',
        meaning: 'Adaptability and the ability to discriminate between good and evil',
        spiritual_significance: 'Shows the importance of flexibility in spiritual practice while maintaining discernment'
      },
      {
        symbol: 'Large Belly',
        meaning: 'Capacity to digest both good and bad experiences in life',
        spiritual_significance: 'Teaches us to accept all of life\'s experiences and transform them into wisdom'
      }
    ],
    sacred_stories: [
      {
        title: 'The Birth of Ganesha',
        summary: 'The divine creation by Parvati and transformation by Shiva',
        moral: 'Divine love can transform any situation, and apparent loss can lead to greater purpose'
      },
      {
        title: 'The Broken Tusk',
        summary: 'How Ganesha broke his tusk to write the Mahabharata for Sage Vyasa',
        moral: 'True devotion requires sacrifice, and wisdom is gained through selfless service'
      }
    ],
    festivals: [
      {
        name: 'Ganesh Chaturthi',
        date: 'Bhadrapada Shukla Chaturthi (August/September)',
        significance: 'Celebrates the birth of Lord Ganesha',
        celebration: 'Grand processions, clay idol worship, modak offerings, and community celebrations'
      }
    ],
    mantras: [
      {
        mantra: 'ॐ गं गणपतये नमः',
        transliteration: 'Om Gam Ganapataye Namaha',
        meaning: 'I bow to Lord Ganesha',
        benefits: 'Removes obstacles and brings success in new endeavors'
      }
    ],
    temples: [
      {
        name: 'Siddhivinayak Temple',
        location: 'Mumbai, Maharashtra',
        significance: 'One of the most famous Ganesha temples, known for fulfilling wishes'
      }
    ],
    youtube_videos: {
      story: 'dQw4w9WgXcQ',
      sacred_iconography: 'dQw4w9WgXcQ',
      divine_symbolism: 'dQw4w9WgXcQ'
    }
  } as any
  
  // Merge database data with fallback data
  if (deity) {
    deity = { ...fallbackData, ...deity }
  } else {
    deity = fallbackData
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-orange-50">
      {/* Contextual Navigation */}
      <ContextualNavigation 
        currentContent={ganeshaContent} 
        relatedContent={relatedContent} 
      />

      {/* Quick Navigation Sidebar */}
      <QuickNavigation 
        sections={quickNavSections}
        className="hidden lg:block"
      />

      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/deities" 
            className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Deities
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section id="overview" className="relative overflow-hidden bg-gradient-to-r from-red-600 via-pink-600 to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <span className="text-8xl mb-6 block">🐘</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-sanskrit">{deity.sanskrit_name}</h1>
          <h2 className="text-3xl md:text-4xl text-orange-100 mb-8 font-semibold">{deity.name}</h2>
          <p className="text-xl md:text-2xl text-pink-100 mb-8 max-w-4xl mx-auto">
            The Remover of Obstacles • Patron of Arts & Sciences • Lord of Beginnings
          </p>
          
          {/* Quick Engagement Metrics */}
          <div className="flex flex-wrap justify-center gap-6 text-sm bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              <span>Beginner Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              <span>Shaivism Tradition</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Festival: Ganesh Chaturthi</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with enhanced engagement sections */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Overview with engagement hooks */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <h3 className="text-3xl font-bold text-orange-800 mb-6">Divine Overview</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {deity.description}
            </p>
            
            {/* Engagement Hook */}
            <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-2xl p-6">
              <h4 className="font-bold text-orange-800 mb-3">🌟 Why Connect with Ganesha?</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Perfect for Beginners:</strong> Ganesha is approachable and loving</li>
                <li>• <strong>Practical Benefits:</strong> Removes obstacles in daily life</li>
                <li>• <strong>Spiritual Growth:</strong> Guides you through inner transformations</li>
                <li>• <strong>Creative Inspiration:</strong> Patron of arts, writing, and learning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Rest of your existing sections with IDs for navigation */}
        <section id="iconography" className="mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-3xl font-bold text-orange-800 mb-8">Sacred Iconography</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deity.sacred_iconography?.map((icon: any, index: number) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-6">
                  <h4 className="font-bold text-lg text-orange-800 mb-3">{icon.symbol}</h4>
                  <p className="text-gray-700 mb-3">{icon.meaning}</p>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-purple-700 italic">{icon.spiritual_significance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add similar structure for other sections... */}
        
        {/* Smart Recommendations Section */}
        <section id="recommendations">
          <SmartRecommendations 
            currentContent={ganeshaContent}
            contentDatabase={peacefulAnswersContentDatabase}
          />
        </section>

        {/* Engagement Call-to-Action */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 text-white rounded-3xl p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              🙏 Ready to Begin Your Journey with Ganesha?
            </h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Start with a simple daily practice and experience the transformative power of connecting with the beloved obstacle-remover.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/practices/ganapati-puja"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                🪔 Learn Ganapati Puja
              </Link>
              <Link
                href="/festivals/ganesh-chaturthi"
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                🎊 Explore Ganesh Chaturthi
              </Link>
              <Link
                href="/scriptures/ganesha-mantras"
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                🕉️ Sacred Mantras
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}