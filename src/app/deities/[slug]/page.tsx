import { hinduSupabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { 
  ArrowLeft, 
  BookOpen, 
  Star, 
  Crown, 
  Calendar,
  MapPin,
  Heart,
  Shield,
  Eye,
  Mountain,
  Music,
  Disc,
  Shell,
  Hammer,
  Feather,
  Sun,
  Moon,
  Flower,
  Sparkles,
  Drama,
  Zap,
  Church,
  Scroll,
  Info
} from 'lucide-react'
import Image from 'next/image'
import React from 'react'

// Icon mapping
const iconMap: { [key: string]: any } = {
  Crown, Star, Heart, Shield, Eye, Mountain, Music, Disc, 
  Shell, Hammer, Feather, Sun, Moon, Flower, BookOpen,
  Sparkles, Drama, Zap, Church, Scroll, Info
}

interface DeityPageProps {
  params: Promise<{
    slug: string
  }>
}

async function getDeity(slug: string) {
  try {
    // Use hinduSupabase to query the hindu schema
    const { data: deityData, error: deityError } = await hinduSupabase
      .from('deities')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single()

    if (deityError || !deityData) {
      console.error('Error fetching deity:', deityError)
      return null
    }

    // Get category separately if category_id exists
    let categoryData = null
    if (deityData.category_id) {
      const { data: catData, error: catError } = await hinduSupabase
        .from('deity_categories')
        .select('*')
        .eq('id', deityData.category_id)
        .single()
      
      if (!catError && catData) {
        categoryData = catData
      }
    }

    return {
      ...deityData,
      category: categoryData
    }
  } catch (error) {
    console.error('Error fetching deity:', error)
    return null
  }
}

// Comprehensive fallback data function for any deity
function getDeityFallbackData(slug: string, name?: string) {
  return {
    name: name || 'Divine Deity',
    sanskrit_name: 'दिव्य देव',
    title: 'Divine Protector',
    description: 'A revered deity in Hindu tradition, embodying divine qualities and spiritual wisdom.',
    story: `This divine deity holds a significant place in Hindu tradition, representing various aspects of the divine consciousness. Through countless stories and teachings, devotees have found guidance, protection, and spiritual inspiration. The deity's presence in Hindu culture spans centuries, with devotees seeking blessings for various aspects of life including prosperity, knowledge, and spiritual growth.`,
    sacred_iconography: [
      {
        title: 'Divine Form',
        description: 'The divine form represents the transcendent nature of consciousness',
        icon: 'Crown'
      },
      {
        title: 'Sacred Symbols',
        description: 'Various symbols representing divine qualities and powers',
        icon: 'Star'
      },
      {
        title: 'Divine Attributes',
        description: 'Specific attributes that convey spiritual meanings',
        icon: 'Shield'
      },
      {
        title: 'Sacred Elements',
        description: 'Elements that connect the divine to cosmic principles',
        icon: 'Sparkles'
      }
    ],
    sacred_stories: [
      {
        title: 'Divine Manifestation',
        content: 'The story of how this deity manifested to help devotees and establish dharma in the world.'
      },
      {
        title: 'Teachings and Wisdom',
        content: 'Sacred teachings that have guided countless devotees on their spiritual journey.'
      },
      {
        title: 'Miraculous Events',
        content: 'Divine interventions and miracles that demonstrate the deity\'s compassionate nature.'
      }
    ],
    divine_symbolism: [
      {
        title: 'Spiritual Protection',
        meaning: 'The deity provides spiritual protection and guidance to devotees on their path.'
      },
      {
        title: 'Divine Wisdom',
        meaning: 'Represents the eternal wisdom that guides spiritual seekers toward enlightenment.'
      },
      {
        title: 'Cosmic Harmony',
        meaning: 'Embodies the principle of cosmic harmony and balance in the universe.'
      }
    ],
    festivals: [
      {
        name: 'Annual Celebration',
        date: 'Varies by tradition',
        description: 'A sacred time when devotees gather to honor and celebrate the deity with prayers, rituals, and community festivities.'
      },
      {
        name: 'Monthly Observance',
        date: 'Monthly',
        description: 'Regular monthly observance with special prayers and offerings to maintain spiritual connection.'
      }
    ],
    sacred_places: [
      {
        name: 'Sacred Temple',
        location: 'Various locations across India',
        significance: 'Ancient temples dedicated to this deity serve as centers of devotion and spiritual practice.'
      },
      {
        name: 'Pilgrimage Sites',
        location: 'Holy places of significance',
        significance: 'Sacred locations where devotees undertake spiritual journeys and seek divine blessings.'
      }
    ],
    mantras: [
      {
        title: 'Primary Mantra',
        sanskrit: 'ॐ नमः शिवाय',
        transliteration: 'Om Namah Shivaya',
        meaning: 'Salutations to the Divine',
        benefits: 'Brings peace, protection, and spiritual elevation'
      },
      {
        title: 'Devotional Chant',
        sanskrit: 'जय जय देव',
        transliteration: 'Jai Jai Dev',
        meaning: 'Victory to the Divine',
        benefits: 'Invokes divine blessings and positive energy'
      }
    ],
    essential_facts: [
      {
        title: 'Divine Nature',
        description: 'Represents fundamental aspects of divine consciousness'
      },
      {
        title: 'Spiritual Significance',
        description: 'Holds deep spiritual meaning for devotees and practitioners'
      },
      {
        title: 'Cultural Importance',
        description: 'Plays an important role in Hindu culture and traditions'
      },
      {
        title: 'Universal Appeal',
        description: 'Transcends regional boundaries with universal spiritual appeal'
      }
    ],
    youtube_videos: {
      story: 'dQw4w9WgXcQ',
      iconography: 'dQw4w9WgXcQ',
      stories: 'dQw4w9WgXcQ',
      symbolism: 'dQw4w9WgXcQ',
      festivals: 'dQw4w9WgXcQ',
      temples: 'dQw4w9WgXcQ',
      mantras: 'dQw4w9WgXcQ'
    }
  }
}

export async function generateMetadata({ params }: DeityPageProps) {
  const resolvedParams = await params
  const { slug } = resolvedParams
  const deity = await getDeity(slug)
  
  if (!deity) {
    return {
      title: 'Deity Not Found',
    }
  }

  return {
    title: deity.meta_title || `${deity.name} - ${deity.title} | Hindu Deity`,
    description: deity.meta_description || deity.description,
    openGraph: {
      title: deity.meta_title || `${deity.name} - ${deity.title}`,
      description: deity.meta_description || deity.description,
      images: deity.featured_image_url ? [deity.featured_image_url] : [],
    },
  }
}

export default async function DeityPage({ params }: DeityPageProps) {
  const resolvedParams = await params
  const { slug } = resolvedParams
  let deity = await getDeity(slug)

  // Get fallback data based on slug
  const fallbackData = getDeityFallbackData(slug, deity?.name)
  
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
      sacred_places: deity.sacred_places?.length ? deity.sacred_places : fallbackData.sacred_places,
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

  // Extract color scheme for gradients
  const colorScheme = deity.category?.color_scheme || 'from-orange-600 to-red-600'

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
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
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-white animate-[slideInFromLeft_1s_ease-out]">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                {deity.category?.icon && iconMap[deity.category.icon] ? 
                  React.createElement(iconMap[deity.category.icon], { className: "w-4 h-4 mr-2" }) : 
                  <Crown className="w-4 h-4 mr-2" />
                }
                <span className="text-sm font-medium">{deity.category?.name || 'Hindu Deity'}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sanskrit">
                {deity.sanskrit_name || 'दिव्य देव'}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-orange-100">
                {deity.name || 'Divine Deity'}
              </h2>
              <p className="text-lg text-red-100 leading-relaxed mb-8">
                {deity.description || deity.title || 'A revered deity in Hindu tradition'}
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="relative animate-[slideInFromRight_1s_ease-out]">
              <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                {deity.featured_image_url ? (
                  <Image
                    src={deity.featured_image_url}
                    alt={deity.name}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-8xl opacity-50">🕉</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-red-400/20 rounded-full blur-3xl"></div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Story Section */}
        {deity.story && (
          <section className="animate-fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Story</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mb-8"></div>
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
                  <div className="aspect-video bg-gradient-to-br from-red-50 to-orange-50 rounded-xl flex items-center justify-center">
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
              <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {deity.sacred_iconography.map((item: any, index: number) => {
                  const IconComponent = iconMap[item.icon] || Star
                  return (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <IconComponent className="w-8 h-8 text-orange-600 mb-4" />
                      <h3 className="font-bold text-gray-900 mb-2">{item.title || item.name}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{item.description || item.meaning}</p>
                      {item.significance && (
                        <p className="text-gray-600 text-xs mt-2">{item.significance}</p>
                      )}
                    </div>
                  )
                })}
              </div>
              <div className="relative">
                {deity.youtube_videos?.iconography ? (
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      src={`https://www.youtube.com/embed/${deity.youtube_videos.iconography}`}
                      title="Sacred Iconography Video"
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-orange-50 to-red-50 rounded-xl flex items-center justify-center">
                    <p className="text-gray-500">Video content coming soon</p>
                  </div>
                )}
              </div>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="grid grid-cols-1 gap-6">
                {deity.divine_symbolism.map((symbol: any, index: number) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="font-bold text-gray-900 mb-3">{symbol.title || symbol.aspect}</h3>
                    <p className="text-gray-700 leading-relaxed">{symbol.meaning}</p>
                  </div>
                ))}
              </div>
              <div className="relative">
                {deity.youtube_videos?.symbolism ? (
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      src={`https://www.youtube.com/embed/${deity.youtube_videos.symbolism}`}
                      title="Divine Symbolism Video"
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl flex items-center justify-center">
                    <p className="text-gray-500">Video content coming soon</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Festivals & Celebrations Section */}
        {deity.festivals && deity.festivals.length > 0 && (
          <section className="animate-fadeIn animate-delay-500">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Festivals & Celebrations</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deity.festivals.map((festival: any, index: number) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Calendar className="w-8 h-8 text-red-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{festival.name}</h3>
                  <p className="text-sm text-red-600 mb-3">{festival.date}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{festival.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Famous/Sacred Temples Section */}
        {deity.sacred_places && deity.sacred_places.length > 0 && (
          <section className="animate-fadeIn animate-delay-600">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Famous/Sacred Temples</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-orange-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {deity.sacred_places.map((temple: any, index: number) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <MapPin className="w-8 h-8 text-yellow-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{temple.name}</h3>
                  {temple.location && (
                    <p className="text-sm text-yellow-600 mb-3">{temple.location}</p>
                  )}
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
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 shadow-lg">
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
                  <div>
                    {item.title && <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>}
                    <p className="text-gray-700 leading-relaxed">{item.description || item.fact}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </main>
  )
}