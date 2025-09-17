import { hinduSupabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowLeft, 
  Calendar,
  MapPin,
  Clock,
  Users,
  Star,
  Heart,
  Sparkles,
  Gift,
  Flower2,
  Sun,
  Moon,
  Crown,
  Flame
} from 'lucide-react'
import { Metadata } from 'next'

// Icon mapping for festival elements
const iconMap: { [key: string]: any } = {
  Calendar, MapPin, Clock, Users, Star, Heart, Sparkles, 
  Gift, Flower2, Sun, Moon, Crown, Flame
}

interface FestivalPageProps {
  params: Promise<{
    slug: string
  }>
}

async function getFestival(slug: string) {
  try {
    const { data: festivalData, error: festivalError } = await hinduSupabase
      .from('festivals')
      .select(`
        *,
        festival_categories (
          name,
          color_scheme
        )
      `)
      .eq('slug', slug)
      .eq('status', 'published')
      .single()

    if (festivalError) {
      console.error('Error fetching festival:', festivalError)
      return null
    }

    return festivalData
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export async function generateMetadata({ params }: FestivalPageProps): Promise<Metadata> {
  const { slug } = await params
  const festival = await getFestival(slug)

  if (!festival) {
    return {
      title: 'Festival Not Found | PeacefulAnswers',
      description: 'The requested festival page could not be found.'
    }
  }

  return {
    title: `${festival.name} - ${festival.title} | Hindu Festivals | PeacefulAnswers`,
    description: festival.meta_description || festival.description,
    keywords: festival.meta_keywords || `${festival.name}, Hindu festival, ${festival.title}`,
    openGraph: {
      title: `${festival.name} - ${festival.title}`,
      description: festival.meta_description || festival.description,
      type: 'website',
      images: festival.featured_image_url ? [festival.featured_image_url] : [],
    }
  }
}

export default async function FestivalPage({ params }: FestivalPageProps) {
  const { slug } = await params
  const festival = await getFestival(slug)

  if (!festival) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-orange-600 via-yellow-400 to-red-600">
        <div className="absolute inset-0 bg-black/30" />
        {festival.hero_image_url && (
          <Image
            src={festival.hero_image_url}
            alt={festival.hero_image_alt || festival.name}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              {festival.name}
            </h1>
            <p className="text-xl md:text-2xl mb-6 drop-shadow-md">
              {festival.title}
            </p>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              {festival.subtitle}
            </p>
          </div>
        </div>
        
        {/* Back Button */}
        <Link 
          href="/festivals"
          className="absolute top-6 left-6 z-20 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          All Festivals
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Festival Quick Info */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border-l-4 border-orange-500">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {festival.date_type && (
              <div className="flex flex-col items-center">
                <Calendar className="w-8 h-8 text-orange-600 mb-2" />
                <div className="text-sm text-gray-600">When</div>
                <div className="font-semibold">{festival.date_type}</div>
              </div>
            )}
            {festival.duration && (
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 text-blue-600 mb-2" />
                <div className="text-sm text-gray-600">Duration</div>
                <div className="font-semibold">{festival.duration}</div>
              </div>
            )}
            {festival.primary_deity && (
              <div className="flex flex-col items-center">
                <Crown className="w-8 h-8 text-yellow-600 mb-2" />
                <div className="text-sm text-gray-600">Primary Deity</div>
                <div className="font-semibold">{festival.primary_deity}</div>
              </div>
            )}
            {festival.significance_type && (
              <div className="flex flex-col items-center">
                <Star className="w-8 h-8 text-purple-600 mb-2" />
                <div className="text-sm text-gray-600">Significance</div>
                <div className="font-semibold">{festival.significance_type}</div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            {festival.description && (
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-orange-200 pb-3">
                  About {festival.name}
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  {festival.description.split('\n').map((paragraph: string, index: number) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            )}

            {/* Historical Significance */}
            {festival.historical_significance && (
              <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Sparkles className="w-8 h-8 text-blue-600" />
                  Historical Significance
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  {festival.historical_significance.split('\n').map((paragraph: string, index: number) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            )}

            {/* Rituals and Practices */}
            {festival.rituals && festival.rituals.length > 0 && (
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Flame className="w-8 h-8 text-red-600" />
                  Rituals & Practices
                </h2>
                <div className="grid gap-6">
                  {festival.rituals.map((ritual: any, index: number) => (
                    <div key={index} className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-400">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{ritual.name}</h3>
                      <p className="text-gray-700 mb-3">{ritual.description}</p>
                      {ritual.timing && (
                        <div className="text-sm text-orange-600 font-medium">
                          🕒 {ritual.timing}
                        </div>
                      )}
                      {ritual.materials && ritual.materials.length > 0 && (
                        <div className="mt-3">
                          <span className="text-sm font-medium text-gray-600">Materials needed: </span>
                          <span className="text-sm text-gray-700">{ritual.materials.join(', ')}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Regional Variations */}
            {festival.regional_variations && festival.regional_variations.length > 0 && (
              <section className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-green-600" />
                  Regional Celebrations
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {festival.regional_variations.map((variation: any, index: number) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{variation.region}</h3>
                      <p className="text-gray-700 mb-3">{variation.description}</p>
                      {variation.special_features && variation.special_features.length > 0 && (
                        <div className="space-y-1">
                          {variation.special_features.map((feature: string, idx: number) => (
                            <div key={idx} className="text-sm text-green-600 flex items-center gap-2">
                              <Star className="w-3 h-3" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Stories and Legends */}
            {festival.stories && festival.stories.length > 0 && (
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Heart className="w-8 h-8 text-pink-600" />
                  Sacred Stories
                </h2>
                <div className="space-y-8">
                  {festival.stories.map((story: any, index: number) => (
                    <div key={index} className="bg-pink-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{story.title}</h3>
                      <p className="text-gray-700 mb-4">{story.story}</p>
                      {story.moral && (
                        <div className="bg-pink-100 rounded-lg p-4 border-l-4 border-pink-400">
                          <span className="font-medium text-pink-800">Spiritual Message: </span>
                          <span className="text-pink-700">{story.moral}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Featured Image */}
            {festival.featured_image_url && (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <Image
                  src={festival.featured_image_url}
                  alt={festival.featured_image_alt || festival.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </div>
            )}

            {/* Quick Facts */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Facts</h3>
              <div className="space-y-3">
                {festival.sanskrit_name && (
                  <div>
                    <span className="text-sm font-medium text-gray-600">Sanskrit Name:</span>
                    <div className="text-lg font-semibold text-orange-600">{festival.sanskrit_name}</div>
                  </div>
                )}
                {festival.festival_categories?.name && (
                  <div>
                    <span className="text-sm font-medium text-gray-600">Category:</span>
                    <div className="font-medium">{festival.festival_categories.name}</div>
                  </div>
                )}
                {festival.lunar_calendar_date && (
                  <div>
                    <span className="text-sm font-medium text-gray-600">Lunar Date:</span>
                    <div className="font-medium">{festival.lunar_calendar_date}</div>
                  </div>
                )}
                {festival.gregorian_date_range && (
                  <div>
                    <span className="text-sm font-medium text-gray-600">Gregorian Date:</span>
                    <div className="font-medium">{festival.gregorian_date_range}</div>
                  </div>
                )}
              </div>
            </div>

            {/* Related Festivals */}
            <div className="bg-gradient-to-b from-blue-50 to-purple-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More Festivals</h3>
              <Link
                href="/festivals"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                View All Festivals
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}