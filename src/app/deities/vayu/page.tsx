import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Crown, 
  Star, 
  Heart, 
  Calendar,
  MapPin,
  Wind,
  ChevronLeft,
  Flower2,
  Gift,
  Scroll,
  Mountain,
  ArrowLeft,
  Zap,
  Shield,
  BookOpen,
  Cloud
} from 'lucide-react'
import { hinduSupabase } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Vayu - The Wind God | Hindu Deity Guide | PeacefulAnswers',
  description: 'Discover the sacred teachings of Vayu, the Wind God and breath of life. Learn about Prana, Hanuman father, stories, mantras, and spiritual significance.',
  keywords: 'Vayu, wind god, breath, Hanuman father, Hindu deity, Prana, life force, air element',
  openGraph: {
    title: 'Vayu - The Wind God | Hindu Deity Guide',
    description: 'The mighty wind deity who controls the breath of life and cosmic air currents.',
    type: 'website',
  }
}

// Function to get Vayu data from database
async function getVayu() {
  try {
    const { data, error } = await hinduSupabase
      .from('deities')
      .select('*')
      .eq('name', 'Vayu')
      .single()
    
    if (error) {
      console.error('Error fetching Vayu:', error)
      return null
    }
    
    return data
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export default async function VayuPage() {
  let deity = await getVayu()
  
  // Comprehensive fallback data - merge with database data or use as complete fallback
  const fallbackData = {
      name: 'Vayu',
      sanskrit_name: 'वायु',
      title: 'God of Wind',
      description: 'The mighty wind god, breath of life, and father of the powerful Hanuman.',
      image_url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
      story: 'Vayu, also known as Pavan or Marut, is one of the most powerful Vedic deities, representing the wind and the vital life force (Prana) that sustains all living beings. He is one of the Pancha Mahabhuta (five great elements) and controls atmospheric movement, breath, and the life-giving force. Vayu is the father of Hanuman, who inherited his incredible strength, speed, and ability to fly.',
      sacred_iconography: [
        {
          name: 'Thousand Eyes',
          sanskrit: 'सहस्राक्ष (Sahasraksha)',
          meaning: 'All-seeing eyes representing omnipresence',
          significance: 'Wind is everywhere, seeing and touching everything in creation'
        },
        {
          name: 'Swift Movement',
          sanskrit: 'वेगवान् (Vegavan)',
          meaning: 'Incredible speed and agility',
          significance: 'Represents the swift movement of air and divine speed'
        },
        {
          name: 'White or Blue Form',
          sanskrit: 'श्वेत या नील रूप (Shvet ya Neel Roop)',
          meaning: 'Pure white or sky blue appearance',
          significance: 'Represents purity of air and connection to sky element'
        },
        {
          name: 'Deer Vehicle',
          sanskrit: 'हरिण वाहन (Harin Vahan)',
          meaning: 'Swift deer as vehicle',
          significance: 'Symbolizes speed, grace, and agility of wind'
        }
      ],
      sacred_stories: [
        {
          title: 'Father of Hanuman',
          content: 'Vayu blessed Anjana with the birth of Hanuman, his divine son. Hanuman inherited Vayu\'s incredible strength, power of flight, and ability to change size at will. This blessing made Hanuman one of the most powerful devotees of Lord Rama.'
        },
        {
          title: 'The Breath of Life',
          content: 'When all beings were created, Vayu was given the sacred duty of providing the breath of life (Prana). Without Vayu\'s divine breath, no creature can survive, making him essential for all existence on Earth.'
        },
        {
          title: 'Competition with Mountains',
          content: 'Once, Vayu competed with the mighty mountains to prove his power. He uprooted trees, moved boulders, and showed that even the mightiest peaks must bow before the power of wind, establishing his supremacy among natural forces.'
        }
      ],
      divine_symbolism: [
        {
          aspect: 'Life Force (Prana)',
          meaning: 'Vayu represents the vital breath that sustains all life. He teaches that just as wind is invisible yet powerful, the life force within us is the unseen power that animates our existence.'
        },
        {
          aspect: 'Purifier and Cleanser',
          meaning: 'As wind carries away dust and impurities, Vayu symbolizes the power of spiritual practice to cleanse the mind and soul of negative thoughts and emotions.'
        },
        {
          aspect: 'Divine Messenger',
          meaning: 'Wind carries sounds, fragrances, and messages across vast distances. Vayu represents the power of communication and the spreading of divine knowledge and wisdom.'
        }
      ],
      festivals: [
        {
          name: 'Vayu Jayanti',
          date: 'Pausha month (December/January)',
          description: 'Celebrates the birth of Lord Vayu. Devotees perform pranayama (breathing exercises) and offer prayers for good health and strong life force.'
        },
        {
          name: 'Hanuman Jayanti',
          date: 'Chaitra Purnima (March/April)',
          description: 'As father of Hanuman, Vayu is especially honored during Hanuman Jayanti. Devotees seek his blessings for strength, courage, and devotion.'
        },
        {
          name: 'Prana Pratishtha',
          date: 'Various occasions',
          description: 'Ritual invocation of life force into deities and sacred objects. Vayu is invoked as the divine breath that brings consciousness to sacred images.'
        }
      ],
      temples: [
        {
          name: 'Vayu Temples in Karnataka',
          significance: 'Several ancient temples dedicated to Vayu exist in Karnataka, where he is worshipped as the life-giving force and father of Hanuman.'
        },
        {
          name: 'Mountain Peak Shrines',
          significance: 'High altitude temples where wind is naturally strong are considered sacred to Vayu. Devotees visit these places to connect with the pure wind element.'
        },
        {
          name: 'Hanuman Temples',
          significance: 'All Hanuman temples honor Vayu as Hanuman\'s father. Tuesday worship at Hanuman temples includes prayers to Vayu for strength and protection.'
        }
      ],
      mantras: [
        {
          sanskrit: 'ॐ वायवे नमः',
          transliteration: 'Om Vayave Namah',
          meaning: 'Salutations to Lord Vayu',
          benefits: 'Simple mantra for improving breath, vitality, and life force. Helps with respiratory health and mental clarity.'
        },
        {
          sanskrit: 'ॐ प्राणाय विद्महे महाबलाय धीमहि तन्नो वायुः प्रचोदयात्',
          transliteration: 'Om Praanaya Vidmahe Mahaabalaya Dheemahi Tanno Vayuh Prachodayat',
          meaning: 'We meditate on the life force, the great strength. May Vayu inspire our consciousness',
          benefits: 'Vayu Gayatri Mantra for enhancing physical strength, mental power, and spiritual energy'
        }
      ],
      essential_facts: [
        {
          fact: 'Vayu is one of the Pancha Mahabhuta (five great elements) - the wind element'
        },
        {
          fact: 'He is the father of Hanuman, who inherited his divine powers'
        },
        {
          fact: 'Vayu controls all atmospheric movement and weather patterns'
        },
        {
          fact: 'He represents Prana, the vital life force that sustains all beings'
        },
        {
          fact: 'Vayu is invoked in pranayama (breathing exercises) for spiritual practice'
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
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/deities" 
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Deities
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-white animate-[slideInFromLeft_1s_ease-out]">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Wind className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Pavan</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sanskrit">
                {deity.sanskrit_name || 'वायु'}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-cyan-100">
                {deity.name || 'Lord Vayu'}
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed mb-8">
                {deity.description || deity.title || 'God of Wind'}
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="relative animate-[slideInFromRight_1s_ease-out]">
              <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src={deity.image_url || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop'}
                  alt={deity.name || 'Lord Vayu'}
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
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"></div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Story Section */}
        {deity.story && (
          <section className="animate-fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Story</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto mb-8"></div>
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
                  <div className="aspect-video bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl flex items-center justify-center">
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
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deity.sacred_iconography.map((item: any, index: number) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-sm text-blue-600 mb-3">{item.sanskrit}</p>
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
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
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
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deity.festivals.map((festival: any, index: number) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Calendar className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{festival.name}</h3>
                  <p className="text-sm text-blue-600 mb-3">{festival.date}</p>
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
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-orange-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {deity.temples.map((temple: any, index: number) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <MapPin className="w-8 h-8 text-yellow-600 mb-4" />
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
                <div key={index} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-sanskrit text-gray-900 mb-3">{mantra.sanskrit}</h3>
                    <p className="text-blue-600 font-medium mb-2">{mantra.transliteration}</p>
                    <p className="text-gray-700 italic">{mantra.meaning}</p>
                  </div>
                  <div className="border-t border-blue-200 pt-4">
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
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
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