import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Crown, 
  Star, 
  Heart, 
  Calendar,
  MapPin,
  Hammer,
  ChevronLeft,
  Flower2,
  Gift,
  Scroll,
  Mountain,
  ArrowLeft,
  Zap,
  Shield,
  BookOpen,
  Settings,
  Wrench
} from 'lucide-react'
import { hinduSupabase } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Vishwakarma - The Divine Architect | Hindu Deity Guide | PeacefulAnswers',
  description: 'Discover the sacred teachings of Vishwakarma, the Divine Architect and master craftsman. Learn about craftsmanship, tools, stories, mantras, and spiritual significance.',
  keywords: 'Vishwakarma, architect, craftsman, tools, Hindu deity, divine builder, engineering, construction',
  openGraph: {
    title: 'Vishwakarma - The Divine Architect | Hindu Deity Guide',
    description: 'The cosmic architect who designed celestial palaces and divine weapons with perfect skill.',
    type: 'website',
  }
}

// Function to get Vishwakarma data from database
async function getVishwakarma() {
  try {
    const { data, error } = await hinduSupabase
      .from('deities')
      .select('*')
      .eq('name', 'Vishwakarma')
      .single()
    
    if (error) {
      console.error('Error fetching Vishwakarma:', error)
      return null
    }
    
    return data
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export default async function VishwakarmaPage() {
  let deity = await getVishwakarma()
  
  // Comprehensive fallback data - merge with database data or use as complete fallback
  const fallbackData = {
      name: 'Vishwakarma',
      sanskrit_name: 'विश्वकर्मा',
      title: 'Divine Architect',
      description: 'The divine architect and craftsman who created celestial palaces, cities, and divine weapons.',
      image_url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop',
      story: 'Lord Vishwakarma is the divine architect, engineer, and craftsman of the gods, revered as the creator of magnificent structures and divine weapons. He is credited with building Lanka for Ravana, the golden city of Dwarka for Krishna, and Indraprastha for the Pandavas. As the patron deity of all craftsmen, architects, and engineers, Vishwakarma represents the perfect union of skill, creativity, and divine inspiration.',
      sacred_iconography: [
        {
          name: 'Four Arms',
          sanskrit: 'चतुर्भुज (Chaturbhuj)',
          meaning: 'Four arms holding divine tools',
          significance: 'Represents mastery over all four directions and complete skill'
        },
        {
          name: 'Golden Complexion',
          sanskrit: 'स्वर्ण वर्ण (Swarna Varna)',
          meaning: 'Radiant golden appearance',
          significance: 'Symbolizes purity, perfection, and divine craftsmanship'
        },
        {
          name: 'Tools and Instruments',
          sanskrit: 'यंत्र उपकरण (Yantra Upkarana)',
          meaning: 'Divine tools of creation',
          significance: 'Represents the power of skilled hands guided by divine wisdom'
        },
        {
          name: 'Crown of Creativity',
          sanskrit: 'सर्जना मुकुट (Sarjana Mukut)',
          meaning: 'Crown representing creative power',
          significance: 'Shows supremacy in all forms of artistic and architectural creation'
        }
      ],
      sacred_stories: [
        {
          title: 'Builder of Lanka',
          content: 'Vishwakarma constructed the magnificent golden city of Lanka for Ravana. Built entirely of gold and adorned with precious gems, it was considered the most beautiful city ever created, showcasing Vishwakarma\'s unparalleled architectural skills.'
        },
        {
          title: 'Creation of Dwarka',
          content: 'For Lord Krishna, Vishwakarma built the underwater city of Dwarka, a marvel of engineering that remained protected beneath the ocean. This divine city was perfectly planned with palaces, gardens, and defense systems.'
        },
        {
          title: 'Crafting Divine Weapons',
          content: 'Vishwakarma created powerful divine weapons including Indra\'s Vajra, Vishnu\'s Sudarshan Chakra, and Shiva\'s Trishul. Each weapon was crafted with perfect precision and embedded with divine powers.'
        }
      ],
      divine_symbolism: [
        {
          aspect: 'Divine Creativity',
          meaning: 'Vishwakarma represents the creative aspect of the divine that manifests beauty and functionality in perfect harmony. He teaches that true craftsmanship comes from combining skill with divine inspiration.'
        },
        {
          aspect: 'Patron of Craftsmanship',
          meaning: 'As the patron deity of all artisans, Vishwakarma symbolizes the dignity of labor and the spiritual value of skilled work. He shows that honest craftsmanship is a form of worship.'
        },
        {
          aspect: 'Architect of Universe',
          meaning: 'Vishwakarma represents the cosmic architect who designs and maintains the structure of the universe. He teaches that everything in creation follows perfect divine design and proportion.'
        }
      ],
      festivals: [
        {
          name: 'Vishwakarma Puja',
          date: 'September 17 (Kanya Sankranti)',
          description: 'The most important festival honoring Vishwakarma. Craftsmen, engineers, and factory workers worship their tools and machinery, seeking blessings for skill and prosperity.'
        },
        {
          name: 'Vishwakarma Jayanti',
          date: 'Bhadrapada Shukla Trayodashi',
          description: 'Celebrates the birth of Lord Vishwakarma. Architects and builders begin new projects on this auspicious day and offer prayers for successful completion of their work.'
        },
        {
          name: 'Karma Puja',
          date: 'Various regional dates',
          description: 'Regional festival celebrating skilled work and craftsmanship. Artisans display their finest work and seek Vishwakarma\'s blessings for continued excellence in their craft.'
        }
      ],
      temples: [
        {
          name: 'Vishwakarma Temples in Rajasthan',
          significance: 'Ancient temples in Rajasthan honor Vishwakarma as the divine architect. These temples themselves showcase exquisite craftsmanship and serve as centers for artisan communities.'
        },
        {
          name: 'Industrial Area Shrines',
          significance: 'Modern industrial areas and factories often have Vishwakarma shrines where workers pray for safety, skill, and success in their manufacturing and construction work.'
        },
        {
          name: 'Craftsmen Guild Temples',
          significance: 'Traditional craftsmen guilds across India maintain temples dedicated to Vishwakarma, where master craftsmen pass down their skills and seek divine guidance for their work.'
        }
      ],
      mantras: [
        {
          sanskrit: 'ॐ विश्वकर्माय नमः',
          transliteration: 'Om Vishwakarmaya Namah',
          meaning: 'Salutations to Lord Vishwakarma',
          benefits: 'Simple mantra for enhancing creativity, craftsmanship skills, and success in technical work. Invokes divine blessings for all forms of construction and creation.'
        },
        {
          sanskrit: 'ॐ विश्वकर्माय विद्महे हिरण्यगर्भाय धीमहि तन्नो विश्वकर्मा प्रचोदयात्',
          transliteration: 'Om Vishwakarmaya Vidmahe Hiranyagarbhaya Dheemahi Tanno Vishwakarma Prachodayat',
          meaning: 'We meditate on the divine architect, the golden creator. May Vishwakarma inspire our consciousness',
          benefits: 'Vishwakarma Gayatri Mantra for developing exceptional skills, creative vision, and mastery in all forms of craftsmanship'
        }
      ],
      essential_facts: [
        {
          fact: 'Vishwakarma is the divine architect and craftsman of the gods'
        },
        {
          fact: 'He created magnificent cities like Lanka, Dwarka, and Indraprastha'
        },
        {
          fact: 'Vishwakarma crafted divine weapons for gods including Vajra and Sudarshan Chakra'
        },
        {
          fact: 'He is the patron deity of all craftsmen, architects, and engineers'
        },
        {
          fact: 'Vishwakarma Puja on September 17 is celebrated by industrial workers across India'
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
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/deities" 
            className="inline-flex items-center text-gray-600 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Deities
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-yellow-600 to-amber-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-white animate-[slideInFromLeft_1s_ease-out]">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Hammer className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Divine Architect</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sanskrit">
                {deity.sanskrit_name || 'विश्वकर्मा'}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-orange-100">
                {deity.name || 'Lord Vishwakarma'}
              </h2>
              <p className="text-lg text-yellow-100 leading-relaxed mb-8">
                {deity.description || deity.title || 'Divine Architect'}
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="relative animate-[slideInFromRight_1s_ease-out]">
              <div className="aspect-square bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src={deity.image_url || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop'}
                  alt={deity.name || 'Lord Vishwakarma'}
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
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-400/20 rounded-full blur-3xl"></div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Story Section */}
        {deity.story && (
          <section className="animate-fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Story</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-yellow-600 mx-auto mb-8"></div>
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
                  <div className="aspect-video bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl flex items-center justify-center">
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
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-orange-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deity.sacred_iconography.map((item: any, index: number) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-sm text-orange-600 mb-3">{item.sanskrit}</p>
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
              <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-yellow-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deity.festivals.map((festival: any, index: number) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Calendar className="w-8 h-8 text-orange-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{festival.name}</h3>
                  <p className="text-sm text-orange-600 mb-3">{festival.date}</p>
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
                <div key={index} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-sanskrit text-gray-900 mb-3">{mantra.sanskrit}</h3>
                    <p className="text-orange-600 font-medium mb-2">{mantra.transliteration}</p>
                    <p className="text-gray-700 italic">{mantra.meaning}</p>
                  </div>
                  <div className="border-t border-orange-200 pt-4">
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
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
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