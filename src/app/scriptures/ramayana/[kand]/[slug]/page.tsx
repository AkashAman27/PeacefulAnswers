import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'
import {
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Book,
  Star,
  Calendar,
  MapPin,
  Users,
  Gem,
  Clock,
  Heart
} from 'lucide-react'

interface ContentSection {
  title: string
  content: string
  image_url?: string
  image_alt?: string
}

interface RamayanaPageData {
  id: string
  title: string
  sanskrit_title: string
  kand: string
  episode_number: number
  slug: string
  subtitle: string
  description: string
  hero_image_url: string
  hero_image_alt: string
  content_sections: ContentSection[]
  key_characters: string[]
  key_locations: string[]
  spiritual_teachings: string
  modern_relevance: string
  meta_title: string
  meta_description: string
  keywords: string[]
  canonical_url: string
  status: string
  is_featured: boolean
  sort_order: number
  created_at: string
  updated_at: string
}

async function getRamayanaPage(kand: string, slug: string): Promise<RamayanaPageData | null> {
  try {
    const { data, error } = await supabase
      .schema('hindu')
      .from('ramayana_pages')
      .select('*')
      .eq('kand', kand)
      .eq('slug', slug)
      .eq('status', 'published')
      .single()

    if (error || !data) {
      return null
    }

    return data
  } catch (error) {
    console.error('Error fetching Ramayana page:', error)
    return null
  }
}

async function getAdjacentPages(kand: string, episodeNumber: number) {
  try {
    // Get previous page
    const { data: prevPage } = await supabase
      .schema('hindu')
      .from('ramayana_pages')
      .select('title, slug, kand')
      .eq('kand', kand)
      .lt('episode_number', episodeNumber)
      .eq('status', 'published')
      .order('episode_number', { ascending: false })
      .limit(1)
      .single()

    // Get next page
    const { data: nextPage } = await supabase
      .schema('hindu')
      .from('ramayana_pages')
      .select('title, slug, kand')
      .eq('kand', kand)
      .gt('episode_number', episodeNumber)
      .eq('status', 'published')
      .order('episode_number', { ascending: true })
      .limit(1)
      .single()

    return { prevPage, nextPage }
  } catch (error) {
    return { prevPage: null, nextPage: null }
  }
}

export async function generateMetadata({ params }: { params: Promise<{ kand: string, slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const page = await getRamayanaPage(resolvedParams.kand, resolvedParams.slug)

  if (!page) {
    return {
      title: 'Page Not Found | Ramayana | PeacefulAnswers',
      description: 'The requested Ramayana page could not be found.'
    }
  }

  return {
    title: page.meta_title || `${page.title} - ${page.kand} | Ramayana | PeacefulAnswers`,
    description: page.meta_description || page.description,
    keywords: page.keywords.join(', '),
    openGraph: {
      title: page.title,
      description: page.description,
      type: 'article',
      images: page.hero_image_url ? [{ url: page.hero_image_url, alt: page.hero_image_alt }] : [],
    },
    alternates: {
      canonical: page.canonical_url
    }
  }
}

const kandLabels: Record<string, string> = {
  'bala-kanda': 'Bala Kanda',
  'ayodhya-kanda': 'Ayodhya Kanda',
  'aranya-kanda': 'Aranya Kanda',
  'kishkindha-kanda': 'Kishkindha Kanda',
  'sundara-kanda': 'Sundara Kanda',
  'yuddha-kanda': 'Yuddha Kanda',
  'uttara-kanda': 'Uttara Kanda'
}

export default async function RamayanaPageTemplate({ params }: { params: Promise<{ kand: string, slug: string }> }) {
  const resolvedParams = await params
  const page = await getRamayanaPage(resolvedParams.kand, resolvedParams.slug)

  if (!page) {
    notFound()
  }

  const { prevPage, nextPage } = await getAdjacentPages(page.kand, page.episode_number)

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-pink-50">
      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/scriptures" className="text-gray-600 hover:text-orange-600 transition-colors">
              Scriptures
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/scriptures/ramayana" className="text-gray-600 hover:text-orange-600 transition-colors">
              Ramayana
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href={`/scriptures/ramayana/${page.kand}`} className="text-gray-600 hover:text-orange-600 transition-colors">
              {kandLabels[page.kand]}
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-orange-600 font-medium">{page.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-rose-600 to-pink-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Book className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">📖 Episode {page.episode_number} - {kandLabels[page.kand]}</span>
              </div>

              {page.sanskrit_title && (
                <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sanskrit">
                  {page.sanskrit_title}
                </h1>
              )}
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-rose-100">
                {page.title}
              </h2>
              {page.subtitle && (
                <p className="text-lg text-pink-100 leading-relaxed mb-8">
                  {page.subtitle}
                </p>
              )}

              {/* Episode metadata */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {page.key_characters.length > 0 && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <Users className="w-5 h-5 mb-2 text-pink-200" />
                    <p className="text-sm text-pink-200">Key Characters</p>
                    <p className="text-white font-semibold">{page.key_characters.slice(0, 3).join(', ')}</p>
                  </div>
                )}
                {page.key_locations.length > 0 && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <MapPin className="w-5 h-5 mb-2 text-pink-200" />
                    <p className="text-sm text-pink-200">Key Locations</p>
                    <p className="text-white font-semibold">{page.key_locations.slice(0, 2).join(', ')}</p>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#story-content"
                  className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Read Complete Story
                </a>
                {page.spiritual_teachings && (
                  <a
                    href="#spiritual-teachings"
                    className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Divine Teachings
                  </a>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-500/20 to-pink-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                {page.hero_image_url && (
                  <Image
                    src={page.hero_image_url}
                    alt={page.hero_image_alt || page.title}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              {page.is_featured && (
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-800 rounded-full p-3 shadow-lg">
                  <Star className="w-6 h-6" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Episode Overview */}
        {page.description && (
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Episode Overview</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-pink-600 mx-auto mb-8"></div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                {page.description}
              </p>
            </div>
          </section>
        )}

        {/* Story Content */}
        <section id="story-content">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Complete Story</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-pink-600 mx-auto mb-8"></div>
          </div>

          <div className="space-y-12">
            {page.content_sections.map((section, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className={section.image_url ? "md:flex" : ""}>
                  {section.image_url && (
                    <div className="md:w-1/3">
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src={section.image_url}
                          alt={section.image_alt || section.title}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/70 to-pink-600/70"></div>
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                          <span className="text-xs font-semibold text-gray-800">Section {index + 1}</span>
                        </div>
                        {section.title && (
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-white text-lg font-bold">{section.title}</h3>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  <div className={section.image_url ? "md:w-2/3 p-8" : "p-8"}>
                    {section.title && !section.image_url && (
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h3>
                    )}
                    <div
                      className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spiritual Teachings */}
        {page.spiritual_teachings && (
          <section id="spiritual-teachings">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Spiritual Teachings</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-pink-600 mx-auto mb-8"></div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <Gem className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Divine Wisdom</h3>
              </div>
              <div
                className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: page.spiritual_teachings }}
              />
            </div>
          </section>
        )}

        {/* Modern Relevance */}
        {page.modern_relevance && (
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Modern Relevance</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-pink-600 mx-auto mb-8"></div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Contemporary Applications</h3>
              </div>
              <div
                className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: page.modern_relevance }}
              />
            </div>
          </section>
        )}

        {/* Navigation */}
        <section className="bg-gradient-to-r from-orange-600 via-rose-600 to-pink-600 text-white rounded-3xl p-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">🌟 Continue the Sacred Journey 🌟</h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Explore more episodes from the eternal story of dharma, devotion, and divine love.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {nextPage ? (
              <Link
                href={`/scriptures/ramayana/${nextPage.kand}/${nextPage.slug}`}
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center"
              >
                Next: {nextPage.title}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            ) : (
              <Link
                href={`/scriptures/ramayana/${page.kand}`}
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center"
              >
                View All Episodes
                <Book className="w-5 h-5 ml-2" />
              </Link>
            )}

            {prevPage && (
              <Link
                href={`/scriptures/ramayana/${prevPage.kand}/${prevPage.slug}`}
                className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Previous: {prevPage.title}
              </Link>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}