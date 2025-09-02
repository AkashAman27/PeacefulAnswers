import { hinduSupabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
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

async function getVishnu() {
  try {
    const { data: deityData, error: deityError } = await hinduSupabase
      .from('deities')
      .select('*')
      .eq('slug', 'vishnu')
      .eq('status', 'published')
      .single()

    if (deityError || !deityData) {
      console.error('Error fetching Vishnu:', deityError)
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
    console.error('Error fetching Vishnu:', error)
    return null
  }
}

export const metadata: Metadata = {
  title: 'Vishnu - The Supreme Protector | Hindu Deity Guide | PeacefulAnswers',
  description: 'Discover the sacred teachings of Vishnu, the Supreme Protector and Preserver of the universe. Learn about Dashavatara, stories, mantras, festivals, and spiritual significance.',
  keywords: 'Vishnu, Narayana, preserver, Dashavatara, Hindu deity, Hindu spirituality, avatar, Bhagavad Gita',
  openGraph: {
    title: 'Vishnu - The Supreme Protector | Hindu Deity Guide',
    description: 'The Supreme Protector and Preserver who maintains cosmic order through divine avatars.',
    type: 'website',
  }
}

export default async function VishnuPage() {
  let deity = await getVishnu()

  if (!deity) {
    // Fallback static data if database fails
    deity = {
      name: 'Lord Vishnu',
      sanskrit_name: 'श्री विष्णु भगवान्',
      title: 'The Supreme Preserver',
      description: 'The Supreme Preserver and Sustainer of the Universe. Lord Vishnu maintains cosmic order, protects dharma, and manifests through divine avatars to restore balance when evil threatens creation.',
      featured_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      category: { name: 'Trimurti', color_scheme: 'from-blue-600 to-indigo-600', icon: 'Crown' }
    } as any
  }

  // Extract color scheme for gradients
  const colorScheme = deity.category?.color_scheme || 'from-blue-600 to-indigo-600'

  return (
    <div className={`min-h-screen bg-gradient-to-br ${colorScheme.replace('from-', 'from-').replace('to-', 'to-').replace('-600', '-50')}`}>
      {/* Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Link 
          href="/deities" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-700 transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Deities
        </Link>
      </div>

      <div className="container mx-auto px-4 pb-12">
        {/* Hero Section with square image on right, text on left */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-gray-900 animate-[slideInFromLeft_1s_ease-out]">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-6 border border-gray-200">
                  {deity.category?.icon && iconMap[deity.category.icon] ? 
                    React.createElement(iconMap[deity.category.icon], { className: "w-4 h-4" }) : 
                    <Crown className="w-4 h-4" />
                  }
                  {deity.category?.name || 'Hindu Deity'}
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                  {deity.name}
                </h1>
                {deity.sanskrit_name && (
                  <div className="text-3xl text-blue-600 font-sanskrit mb-6">
                    {deity.sanskrit_name}
                  </div>
                )}
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  {deity.description}
                </p>
                {deity.title && (
                  <div className="flex items-center gap-4">
                    <Shield className="w-6 h-6 text-blue-500" />
                    <span className="text-gray-600">{deity.title}</span>
                  </div>
                )}
              </div>
              <div className="relative animate-[slideInFromRight_1s_ease-out]">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-200 rounded-3xl overflow-hidden shadow-2xl">
                  {deity.featured_image_url ? (
                    <Image
                      src={deity.featured_image_url}
                      alt={deity.name}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-8xl opacity-50">🕉</span>
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-4xl">🕉</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        {deity.story && (
          <section className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20 mb-12 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-gray-600" />
                  Story
                </h3>
                <div className="prose prose-lg max-w-none text-gray-700">
                  {deity.story.split('\n').map((paragraph: string, index: number) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
              {deity.youtube_videos?.story && (
                <div className="bg-gray-100 rounded-xl p-4 h-fit">
                  <h4 className="font-semibold text-gray-800 mb-4">Watch the Story</h4>
                  <div className="aspect-video bg-gray-200 rounded-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${deity.youtube_videos.story}`}
                      title="Story Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Sacred Iconography Section */}
        {deity.sacred_iconography && deity.sacred_iconography.length > 0 && (
          <section className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20 mb-12 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Star className="w-6 h-6 text-gray-600" />
                  Sacred Iconography
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {deity.sacred_iconography.map((item: any, index: number) => {
                    const IconComponent = iconMap[item.icon] || Star
                    return (
                      <div key={index} className="flex items-start gap-3 p-4 hover:bg-white/30 rounded-lg transition-colors">
                        <IconComponent className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-800">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              {deity.youtube_videos?.iconography && (
                <div className="bg-gray-100 rounded-xl p-4 h-fit">
                  <h4 className="font-semibold text-gray-800 mb-4">Iconography Explained</h4>
                  <div className="aspect-video bg-gray-200 rounded-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${deity.youtube_videos.iconography}`}
                      title="Iconography Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Sacred Stories Section */}
        {deity.sacred_stories && deity.sacred_stories.length > 0 && (
          <section className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20 mb-12 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Scroll className="w-6 h-6 text-gray-600" />
                  Sacred Stories
                </h3>
                <div className="space-y-6">
                  {deity.sacred_stories.map((story: any, index: number) => (
                    <div key={index} className="p-4 bg-white/50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">{story.title}</h4>
                      <p className="text-gray-700 text-sm">{story.content}</p>
                    </div>
                  ))}
                </div>
              </div>
              {deity.youtube_videos?.stories && (
                <div className="bg-gray-100 rounded-xl p-4 h-fit">
                  <h4 className="font-semibold text-gray-800 mb-4">Sacred Stories</h4>
                  <div className="aspect-video bg-gray-200 rounded-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${deity.youtube_videos.stories}`}
                      title="Stories Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Festivals & Celebrations */}
        {deity.festivals && deity.festivals.length > 0 && (
          <section className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20 mb-12 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-gray-600" />
                  Festivals & Celebrations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {deity.festivals.map((festival: any, index: number) => (
                    <div key={index} className="p-4 bg-white/50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">{festival.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{festival.date}</p>
                      <p className="text-gray-700 text-sm">{festival.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              {deity.youtube_videos?.festivals && (
                <div className="bg-gray-100 rounded-xl p-4 h-fit">
                  <h4 className="font-semibold text-gray-800 mb-4">Festival Celebrations</h4>
                  <div className="aspect-video bg-gray-200 rounded-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${deity.youtube_videos.festivals}`}
                      title="Festivals Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Famous/Sacred Temples */}
        {deity.sacred_places && deity.sacred_places.length > 0 && (
          <section className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20 mb-12 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Church className="w-6 h-6 text-gray-600" />
                  Famous/Sacred Temples
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {deity.sacred_places.map((place: any, index: number) => (
                    <div key={index} className="p-4 bg-white/50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">{place.name}</h4>
                      <p className="text-sm text-gray-600 mb-2 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {place.location}
                      </p>
                      <p className="text-gray-700 text-sm">{place.significance}</p>
                    </div>
                  ))}
                </div>
              </div>
              {deity.youtube_videos?.temples && (
                <div className="bg-gray-100 rounded-xl p-4 h-fit">
                  <h4 className="font-semibold text-gray-800 mb-4">Sacred Temples</h4>
                  <div className="aspect-video bg-gray-200 rounded-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${deity.youtube_videos.temples}`}
                      title="Temples Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Sacred Mantras and Prayers */}
        {deity.mantras && deity.mantras.length > 0 && (
          <section className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20 mb-12 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Music className="w-6 h-6 text-gray-600" />
                  Sacred Mantras and Prayers
                </h3>
                <div className="space-y-6">
                  {deity.mantras.map((mantra: any, index: number) => (
                    <div key={index} className="p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-200">
                      <h4 className="font-semibold text-orange-900 mb-2">{mantra.title}</h4>
                      <div className="bg-white p-4 rounded-lg border mb-3">
                        <p className="text-orange-800 font-medium text-center mb-2">{mantra.sanskrit}</p>
                        {mantra.transliteration && (
                          <p className="text-sm text-gray-600 text-center italic mb-2">{mantra.transliteration}</p>
                        )}
                        {mantra.meaning && (
                          <p className="text-xs text-gray-500 text-center">{mantra.meaning}</p>
                        )}
                      </div>
                      {mantra.benefits && (
                        <p className="text-sm text-orange-800">{mantra.benefits}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {deity.youtube_videos?.mantras && (
                <div className="bg-gray-100 rounded-xl p-4 h-fit">
                  <h4 className="font-semibold text-gray-800 mb-4">Mantra Chanting</h4>
                  <div className="aspect-video bg-gray-200 rounded-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${deity.youtube_videos.mantras}`}
                      title="Mantras Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Essential Facts */}
        {deity.essential_facts && deity.essential_facts.length > 0 && (
          <section className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20 mb-12 animate-fadeIn">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Info className="w-6 h-6 text-gray-600" />
              Essential Facts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deity.essential_facts.map((fact: any, index: number) => (
                <div key={index} className="p-4 bg-white/50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">{fact.title}</h4>
                  <p className="text-gray-700 text-sm">{fact.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Dashavatar Section - Keep the existing avatars grid */}
        <section className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20 mb-12 animate-fadeIn">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            The Ten Divine Avatars (Dashavatar)
          </h3>
          <div className="text-center mb-8">
            <div className="text-xl text-blue-600 font-sanskrit mb-4">
              दशावतार
            </div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              When dharma declines and adharma rises, Lord Vishnu manifests in various forms to restore 
              cosmic balance. These ten principal incarnations represent the evolution of consciousness.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: 'Matsya', url: 'matsya', order: 1 },
              { name: 'Kurma', url: 'kurma', order: 2 },
              { name: 'Varaha', url: 'varaha', order: 3 },
              { name: 'Narasimha', url: 'narasimha', order: 4 },
              { name: 'Vamana', url: 'vamana', order: 5 },
              { name: 'Parashurama', url: 'parashurama', order: 6 },
              { name: 'Rama', url: 'rama', order: 7 },
              { name: 'Krishna', url: 'krishna', order: 8 },
              { name: 'Buddha', url: 'buddha', order: 9 },
              { name: 'Kalki', url: 'kalki', order: 10 }
            ].map((avatar) => (
              <Link
                key={avatar.url}
                href={`/deities/vishnu/avatars/${avatar.url}`}
                className="p-4 bg-white/50 hover:bg-white/80 rounded-xl text-center transition-all hover:scale-105"
              >
                <div className="text-lg font-semibold text-blue-800">{avatar.order}</div>
                <div className="text-sm text-gray-600">{avatar.name}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}