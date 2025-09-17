import { hinduSupabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowLeft, 
  Clock,
  MapPin,
  Users,
  Star,
  Heart,
  BookOpen,
  Lightbulb,
  Target,
  CheckCircle,
  AlertCircle,
  Sun,
  Moon,
  Flower2,
  Sparkles
} from 'lucide-react'
import { Metadata } from 'next'

// Icon mapping for practice elements
const iconMap: { [key: string]: any } = {
  Clock, MapPin, Users, Star, Heart, BookOpen, Lightbulb, 
  Target, CheckCircle, AlertCircle, Sun, Moon, Flower2, Sparkles
}

interface PracticePageProps {
  params: Promise<{
    slug: string
  }>
}

async function getPractice(slug: string) {
  try {
    const { data: practiceData, error: practiceError } = await hinduSupabase
      .from('practices')
      .select(`
        *,
        practice_categories (
          name,
          color_scheme
        )
      `)
      .eq('slug', slug)
      .eq('status', 'published')
      .single()

    if (practiceError) {
      console.error('Error fetching practice:', practiceError)
      return null
    }

    return practiceData
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export async function generateMetadata({ params }: PracticePageProps): Promise<Metadata> {
  const { slug } = await params
  const practice = await getPractice(slug)

  if (!practice) {
    return {
      title: 'Practice Not Found | PeacefulAnswers',
      description: 'The requested spiritual practice could not be found.'
    }
  }

  return {
    title: `${practice.name} - ${practice.title} | Hindu Practices | PeacefulAnswers`,
    description: practice.meta_description || practice.description,
    keywords: practice.meta_keywords || `${practice.name}, Hindu practice, ${practice.title}`,
    openGraph: {
      title: `${practice.name} - ${practice.title}`,
      description: practice.meta_description || practice.description,
      type: 'website',
      images: practice.featured_image_url ? [practice.featured_image_url] : [],
    }
  }
}

export default async function PracticePage({ params }: PracticePageProps) {
  const { slug } = await params
  const practice = await getPractice(slug)

  if (!practice) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-green-600 via-orange-400 to-yellow-500">
        <div className="absolute inset-0 bg-black/30" />
        {practice.hero_image_url && (
          <Image
            src={practice.hero_image_url}
            alt={practice.hero_image_alt || practice.name}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              {practice.name}
            </h1>
            <p className="text-xl md:text-2xl mb-6 drop-shadow-md">
              {practice.title}
            </p>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              {practice.subtitle}
            </p>
          </div>
        </div>
        
        {/* Back Button */}
        <Link 
          href="/practices"
          className="absolute top-6 left-6 z-20 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          All Practices
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Practice Quick Info */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border-l-4 border-green-500">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {practice.duration && (
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 text-green-600 mb-2" />
                <div className="text-sm text-gray-600">Duration</div>
                <div className="font-semibold">{practice.duration}</div>
              </div>
            )}
            {practice.difficulty_level && (
              <div className="flex flex-col items-center">
                <Target className="w-8 h-8 text-orange-600 mb-2" />
                <div className="text-sm text-gray-600">Difficulty</div>
                <div className="font-semibold">{practice.difficulty_level}</div>
              </div>
            )}
            {practice.best_time && (
              <div className="flex flex-col items-center">
                <Sun className="w-8 h-8 text-yellow-600 mb-2" />
                <div className="text-sm text-gray-600">Best Time</div>
                <div className="font-semibold">{practice.best_time}</div>
              </div>
            )}
            {practice.practice_type && (
              <div className="flex flex-col items-center">
                <Sparkles className="w-8 h-8 text-purple-600 mb-2" />
                <div className="text-sm text-gray-600">Type</div>
                <div className="font-semibold">{practice.practice_type}</div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            {practice.description && (
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-3">
                  About {practice.name}
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  {practice.description.split('\n').map((paragraph: string, index: number) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            )}

            {/* Purpose and Benefits */}
            {practice.purpose && (
              <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Heart className="w-8 h-8 text-green-600" />
                  Purpose & Benefits
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  {practice.purpose.split('\n').map((paragraph: string, index: number) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                {/* Benefits List */}
                {practice.benefits && practice.benefits.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Benefits</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {practice.benefits.map((benefit: string, index: number) => (
                        <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* Step-by-Step Instructions */}
            {practice.steps && practice.steps.length > 0 && (
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                  Step-by-Step Guide
                </h2>
                <div className="space-y-6">
                  {practice.steps.map((step: any, index: number) => (
                    <div key={index} className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                        <p className="text-gray-700 mb-3">{step.description}</p>
                        {step.duration && (
                          <div className="text-sm text-blue-600 font-medium flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {step.duration}
                          </div>
                        )}
                        {step.notes && (
                          <div className="mt-3 bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r-lg">
                            <div className="flex items-start gap-2">
                              <Lightbulb className="w-4 h-4 text-yellow-600 mt-0.5" />
                              <span className="text-sm text-yellow-800">{step.notes}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Materials and Preparation */}
            {practice.materials && practice.materials.length > 0 && (
              <section className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Flower2 className="w-8 h-8 text-orange-600" />
                  Materials & Preparation
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {practice.materials.map((material: any, index: number) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{material.name}</h3>
                      <p className="text-gray-600 mb-3">{material.description}</p>
                      {material.required && (
                        <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                          Required
                        </span>
                      )}
                      {!material.required && (
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Optional
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Variations and Adaptations */}
            {practice.variations && practice.variations.length > 0 && (
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Star className="w-8 h-8 text-purple-600" />
                  Variations & Adaptations
                </h2>
                <div className="space-y-6">
                  {practice.variations.map((variation: any, index: number) => (
                    <div key={index} className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-400">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{variation.name}</h3>
                      <p className="text-gray-700 mb-3">{variation.description}</p>
                      {variation.suitable_for && variation.suitable_for.length > 0 && (
                        <div className="mt-3">
                          <span className="text-sm font-medium text-gray-600">Suitable for: </span>
                          <span className="text-sm text-gray-700">{variation.suitable_for.join(', ')}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Precautions and Tips */}
            {practice.precautions && practice.precautions.length > 0 && (
              <section className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <AlertCircle className="w-8 h-8 text-red-600" />
                  Important Guidelines
                </h2>
                <div className="space-y-4">
                  {practice.precautions.map((precaution: string, index: number) => (
                    <div key={index} className="bg-white rounded-lg p-4 border-l-4 border-red-400 shadow-sm">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{precaution}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Featured Image */}
            {practice.featured_image_url && (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <Image
                  src={practice.featured_image_url}
                  alt={practice.featured_image_alt || practice.name}
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
                {practice.sanskrit_name && (
                  <div>
                    <span className="text-sm font-medium text-gray-600">Sanskrit Name:</span>
                    <div className="text-lg font-semibold text-orange-600">{practice.sanskrit_name}</div>
                  </div>
                )}
                {practice.practice_categories?.name && (
                  <div>
                    <span className="text-sm font-medium text-gray-600">Category:</span>
                    <div className="font-medium">{practice.practice_categories.name}</div>
                  </div>
                )}
                {practice.tradition && (
                  <div>
                    <span className="text-sm font-medium text-gray-600">Tradition:</span>
                    <div className="font-medium">{practice.tradition}</div>
                  </div>
                )}
                {practice.spiritual_level && (
                  <div>
                    <span className="text-sm font-medium text-gray-600">Spiritual Level:</span>
                    <div className="font-medium">{practice.spiritual_level}</div>
                  </div>
                )}
              </div>
            </div>

            {/* Prerequisites */}
            {practice.prerequisites && practice.prerequisites.length > 0 && (
              <div className="bg-gradient-to-b from-blue-50 to-green-50 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  Prerequisites
                </h3>
                <div className="space-y-2">
                  {practice.prerequisites.map((prereq: string, index: number) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{prereq}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Practices */}
            <div className="bg-gradient-to-b from-orange-50 to-yellow-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More Practices</h3>
              <Link
                href="/practices"
                className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                View All Practices
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}