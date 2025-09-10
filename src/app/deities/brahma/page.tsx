import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Crown, 
  Star, 
  Heart, 
  Calendar,
  MapPin,
  Sun,
  ChevronLeft,
  Flower2,
  Gift,
  Scroll,
  Mountain,
  ArrowLeft,
  Zap,
  Shield,
  BookOpen,
  Bird
} from 'lucide-react'
import { hinduSupabase } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Brahma - The Supreme Creator | Hindu Deity Guide | PeacefulAnswers',
  description: 'Discover the sacred teachings of Brahma, the Supreme Creator of the universe. Learn about creation, Saraswati, four faces, stories, mantras, and spiritual significance.',
  keywords: 'Brahma, creator, Saraswati, four faces, Hindu deity, Trimurti, creation, cosmic architect',
  openGraph: {
    title: 'Brahma - The Supreme Creator | Hindu Deity Guide',
    description: 'The cosmic creator deity who brings forth the universe from divine consciousness.',
    type: 'website',
  }
}

// Function to get Brahma data from database
async function getBrahma() {
  try {
    const { data, error } = await hinduSupabase
      .from('deities')
      .select('*')
      .eq('name', 'Brahma')
      .single()
    
    if (error) {
      console.error('Error fetching Brahma:', error)
      return null
    }
    
    return data
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export default async function BrahmaPage() {
  let deity = await getBrahma()
  
  // Comprehensive fallback data - merge with database data or use as complete fallback
  const fallbackData = {
      name: 'Brahma',
      sanskrit_name: 'ब्रह्मा',
      title: 'The Creator',
      description: 'The creator deity of the Hindu Trinity, responsible for the creation of the universe and all living beings.',
      image_url: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&h=600&fit=crop',
      story: 'Lord Brahma, the creator god in Hinduism, is one of the principal deities of the Trimurti (Trinity) alongside Vishnu (the preserver) and Shiva (the destroyer). According to Puranic tradition, Brahma emerged from a lotus that grew from Vishnu\'s navel while he was in cosmic sleep. This lotus represents the creative potential that manifests the universe. Brahma is credited with creating the universe through his divine will and speaking the sacred sound "Om", from which the cosmos came into existence.',
      sacred_iconography: [
        {
          name: 'Four Faces',
          sanskrit: 'चतुर्मुख (Chaturmukha)',
          meaning: 'Four faces representing the four Vedas',
          significance: 'Represents knowledge of all directions and complete wisdom of creation'
        },
        {
          name: 'Four Arms',
          sanskrit: 'चतुर्भुज (Chaturbhuj)',
          meaning: 'Four arms holding sacred objects',
          significance: 'Represents the four directions and cosmic control over creation'
        },
        {
          name: 'Swan Vehicle',
          sanskrit: 'हंसवाहन (Hamsavahan)',
          meaning: 'Riding the divine swan Hamsa',
          significance: 'Symbolizes discrimination between good and evil, wisdom and purity'
        },
        {
          name: 'Sacred Thread',
          sanskrit: 'यज्ञोपवीत (Yagnopavit)',
          meaning: 'The sacred thread of spiritual knowledge',
          significance: 'Represents the connection between material and spiritual realms'
        }
      ],
      sacred_stories: [
        {
          title: 'Birth from Lotus',
          content: 'Brahma emerged from a golden lotus that grew from Vishnu\'s navel while he rested on the cosmic serpent Shesha. This lotus represents the unfolding of creation from the divine source, showing how the creative force manifests from pure consciousness.'
        },
        {
          title: 'Creation Through Sound',
          content: 'Brahma created the universe by speaking the sacred syllable "Om". From this primordial vibration, all of creation emerged - the elements, the planets, all living beings, and the cosmic order itself, demonstrating the power of divine word.'
        },
        {
          title: 'The Curse of Limited Worship',
          content: 'Due to his pride in a contest with Shiva, Brahma was cursed to have limited worship on Earth. This story teaches humility and explains why there are fewer temples dedicated to Brahma compared to other deities.'
        }
      ],
      divine_symbolism: [
        {
          aspect: 'Creator Principle',
          meaning: 'Brahma represents the creative aspect of the divine that brings forth the manifest universe from the unmanifest. He embodies the power of imagination and the will to create that exists within all consciousness.'
        },
        {
          aspect: 'Knowledge and Wisdom',
          meaning: 'With his four faces representing the four Vedas, Brahma symbolizes complete knowledge and the wisdom that guides righteous creation. He is the source of all learning and intellectual pursuit.'
        },
        {
          aspect: 'Cosmic Time Cycles',
          meaning: 'Brahma\'s lifespan represents cosmic time cycles. One day of Brahma equals 4.32 billion human years, teaching us about the vast scales of cosmic time and the cyclical nature of creation.'
        }
      ],
      festivals: [
        {
          name: 'Saraswati Puja',
          date: 'February (Vasant Panchami)',
          description: 'While dedicated to Saraswati, this festival also honors Brahma as her consort. Celebrated by students and scholars seeking blessings for knowledge and creative pursuits.'
        },
        {
          name: 'Brahma Pushkar Fair',
          date: 'November (Kartik Purnima)',
          description: 'Annual fair at Pushkar, Rajasthan, where the rare Brahma temple is located. Devotees gather to worship the creator deity and seek blessings for new ventures.'
        }
      ],
      temples: [
        {
          name: 'Brahma Temple, Pushkar',
          significance: 'One of the very few temples dedicated to Brahma worldwide. Located at the sacred Pushkar Lake in Rajasthan, it is considered the most important pilgrimage site for Brahma devotees.'
        },
        {
          name: 'Brahma Temple, Kumbakonam',
          significance: 'Ancient temple in Tamil Nadu where Brahma is worshipped alongside other deities. Known for its architectural beauty and spiritual significance in South Indian temple tradition.'
        },
        {
          name: 'Adi Brahma Temple, Khokhan',
          significance: 'Located in Himachal Pradesh, this temple is believed to be where Brahma first appeared. An important pilgrimage site in the Himalayan tradition.'
        }
      ],
      mantras: [
        {
          sanskrit: 'ॐ वेदात्मनाय विद्महे हिरण्यगर्भाय धीमहि तन्नो ब्रह्मा प्रचोदयात्',
          transliteration: 'Om Vedaatmaanaaya Vidmahe Hiranyagarbhaaya Dheemahi Tanno Brahmaa Prachodayaat',
          meaning: 'We meditate on the soul of the Vedas, the golden cosmic womb. May Brahma inspire our intellect',
          benefits: 'Brahma Gayatri Mantra for enhancing creativity, knowledge, and understanding of cosmic principles'
        },
        {
          sanskrit: 'ॐ ब्रह्मा देवाय नमः',
          transliteration: 'Om Brahmaa Devaaya Namah',
          meaning: 'Salutations to Lord Brahma, the creator deity',
          benefits: 'Simple mantra for invoking Brahma\'s blessings for new beginnings and creative endeavors'
        }
      ],
      essential_facts: [
        {
          fact: 'Brahma is the creator deity of the Hindu Trinity (Trimurti) along with Vishnu and Shiva'
        },
        {
          fact: 'He has four faces representing the four Vedas and four arms holding sacred objects'
        },
        {
          fact: 'His vehicle is Hamsa, the sacred swan symbolizing wisdom and discrimination'
        },
        {
          fact: 'Saraswati, the goddess of knowledge, is his divine consort'
        },
        {
          fact: 'There are very few temples dedicated to Brahma due to mythological curses'
        }
      ],
      youtube_videos: {
        story: 'dQw4w9WgXcQ',
        sacred_iconography: 'dQw4w9WgXcQ',
        divine_symbolism: 'dQw4w9WgXcQ'
      }
    } as any
  
  // Merge database data with fallback data, prioritizing database data when available
  if (deity) {
    deity = {
      ...fallbackData,
      ...deity,
      // Ensure arrays have fallback values if empty
      sacred_iconography: deity.sacred_iconography?.length ? deity.sacred_iconography : fallbackData.sacred_iconography,
      sacred_stories: deity.sacred_stories?.length ? deity.sacred_stories : fallbackData.sacred_stories,
      divine_symbolism: deity.divine_symbolism?.length ? deity.divine_symbolism : fallbackData.divine_symbolism,
      festivals: deity.festivals?.length ? deity.festivals : fallbackData.festivals,
      temples: deity.temples?.length ? deity.temples : fallbackData.temples,
      mantras: deity.mantras?.length ? deity.mantras : fallbackData.mantras,
      essential_facts: deity.essential_facts?.length ? deity.essential_facts : fallbackData.essential_facts,
      // Use fallback story if database story is null/empty
      story: deity.story || fallbackData.story,
      // Use fallback videos if database videos are empty
      youtube_videos: deity.youtube_videos && Object.keys(deity.youtube_videos).length ? deity.youtube_videos : fallbackData.youtube_videos
    }
  } else {
    // If no database data at all, use complete fallback
    deity = fallbackData
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/deities" 
            className="inline-flex items-center text-gray-600 hover:text-yellow-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Deities
          </Link>
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-yellow-600 via-orange-600 to-amber-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-white animate-[slideInFromLeft_1s_ease-out]">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Sun className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Hiranyagarbha</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sanskrit">
                {deity.sanskrit_name || 'ब्रह्मा'}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-yellow-100">
                {deity.name || 'Lord Brahma'}
              </h2>
              <p className="text-lg text-orange-100 leading-relaxed mb-8">
                {deity.description || deity.title || 'The Creator'}
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="relative animate-[slideInFromRight_1s_ease-out]">
              <div className="aspect-square bg-gradient-to-br from-amber-500/20 to-yellow-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src={deity.image_url || 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&h=600&fit=crop'}
                  alt={deity.name || 'Lord Brahma'}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl"></div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        
        {/* Story Section */}
        {deity.story && (
          <section className="animate-fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Story</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-orange-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {deity.story}
                </p>
              </div>
              <div className="relative">
                {deity.youtube_videos?.story ? (
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      src={`https://www.youtube.com/embed/${deity.youtube_videos.story}`}
                      title="Story Video"
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl flex items-center justify-center">
                    <p className="text-gray-500">Video content coming soon</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Sacred Iconography Section */}
        {deity.sacred_iconography && deity.sacred_iconography.length > 0 && (
          <section className="animate-fadeIn animate-delay-200">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Sacred Iconography</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-amber-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deity.sacred_iconography.map((item: any, index: number) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-sm text-yellow-600 mb-3">{item.sanskrit}</p>
                  <p className="text-gray-700 text-sm mb-3">{item.meaning}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.significance}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Sacred Stories Section */}
        {deity.sacred_stories && deity.sacred_stories.length > 0 && (
          <section className="animate-fadeIn animate-delay-300">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Sacred Stories</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deity.sacred_stories.map((story: any, index: number) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{story.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">{story.content}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Divine Symbolism Section */}
        {deity.divine_symbolism && deity.divine_symbolism.length > 0 && (
          <section className="animate-fadeIn animate-delay-400">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Divine Symbolism</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-orange-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deity.divine_symbolism.map((symbol: any, index: number) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-3">{symbol.aspect}</h3>
                  <p className="text-gray-700 leading-relaxed">{symbol.meaning}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Festivals & Celebrations Section */}
        {deity.festivals && deity.festivals.length > 0 && (
          <section className="animate-fadeIn animate-delay-500">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Festivals & Celebrations</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-orange-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deity.festivals.map((festival: any, index: number) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Calendar className="w-8 h-8 text-yellow-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{festival.name}</h3>
                  <p className="text-sm text-yellow-600 mb-3">{festival.date}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{festival.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Famous/Sacred Temples Section */}
        {deity.temples && deity.temples.length > 0 && (
          <section className="animate-fadeIn animate-delay-600">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Famous/Sacred Temples</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {deity.temples.map((temple: any, index: number) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <MapPin className="w-8 h-8 text-amber-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{temple.name}</h3>
                  <p className="text-gray-700 leading-relaxed">{temple.significance}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Sacred Mantras and Prayers Section */}
        {deity.mantras && deity.mantras.length > 0 && (
          <section className="animate-fadeIn animate-delay-700">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Sacred Mantras and Prayers</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {deity.mantras.map((mantra: any, index: number) => (
                <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-sanskrit text-gray-900 mb-3">{mantra.sanskrit}</h3>
                    <p className="text-yellow-600 font-medium mb-2">{mantra.transliteration}</p>
                    <p className="text-gray-700 italic">{mantra.meaning}</p>
                  </div>
                  <div className="border-t border-yellow-200 pt-4">
                    <p className="text-gray-600 text-sm leading-relaxed">{mantra.benefits}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Essential Facts Section */}
        {deity.essential_facts && deity.essential_facts.length > 0 && (
          <section className="animate-fadeIn animate-delay-800">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Essential Facts</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deity.essential_facts.map((item: any, index: number) => (
                <div key={index} className="flex items-start space-x-3 bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{item.fact}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}