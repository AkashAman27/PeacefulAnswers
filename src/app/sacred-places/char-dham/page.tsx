import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'
import {
  MapPin,
  Mountain,
  ArrowLeft,
  Star,
  Navigation,
  Clock,
  Users,
  ChevronRight
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Char Dham - Four Sacred Abodes | PeacefulAnswers',
  description: 'Explore the four sacred Char Dhams - Badrinath, Dwarka, Jagannath Puri, and Rameswaram. Complete pilgrimage guide with significance, travel information, and spiritual insights.',
  keywords: 'Char Dham, Badrinath, Dwarka, Jagannath Puri, Rameswaram, Hindu pilgrimage, sacred places, spiritual journey',
}

// Fetch char dham places from database
async function getCharDhamPlaces() {
  try {
    const { data: category } = await supabase
      .schema('hindu')
      .from('sacred_place_categories')
      .select('id')
      .eq('slug', 'char-dham')
      .single()

    if (category) {
      const { data: places, error } = await supabase
        .schema('hindu')
        .from('sacred_places')
        .select('*')
        .eq('category_id', category.id)
        .eq('status', 'published')
        .order('sort_order')

      if (error) throw error
      return places || []
    }

    return []
  } catch (error) {
    console.error('Error fetching Char Dham places:', error)
    return []
  }
}

// Default char dham data in case database is empty
const defaultCharDhams = [
  {
    id: '1',
    name: 'Badrinath',
    sanskrit_name: 'बदरीनाथ',
    slug: 'badrinath',
    title: 'Sacred Abode of Lord Vishnu',
    subtitle: 'The Northern Dham',
    description: 'Located in the Garhwal Himalayas, Badrinath is dedicated to Lord Vishnu and represents the spiritual journey towards moksha.',
    featured_image_url: '/images/badrinath-featured.jpg',
    location_details: { state: 'Uttarakhand', altitude: '3,133m' },
    is_featured: true,
    sort_order: 1
  },
  {
    id: '2',
    name: 'Dwarka',
    sanskrit_name: 'द्वारका',
    slug: 'dwarka',
    title: 'Krishna\'s Divine City',
    subtitle: 'The Western Dham',
    description: 'Located in Gujarat, Dwarka is the ancient city of Lord Krishna and represents prosperity and divine grace.',
    featured_image_url: '/images/dwarka-featured.jpg',
    location_details: { state: 'Gujarat', altitude: 'Sea level' },
    is_featured: true,
    sort_order: 2
  },
  {
    id: '3',
    name: 'Jagannath Puri',
    sanskrit_name: 'जगन्नाथ पुरी',
    slug: 'jagannath-puri',
    title: 'Lord of the Universe',
    subtitle: 'The Eastern Dham',
    description: 'Located in Odisha, Jagannath Puri is famous for its annual Rath Yatra and represents universal love and devotion.',
    featured_image_url: '/images/puri-featured.jpg',
    location_details: { state: 'Odisha', altitude: 'Sea level' },
    is_featured: true,
    sort_order: 3
  },
  {
    id: '4',
    name: 'Rameswaram',
    sanskrit_name: 'रामेश्वरम्',
    slug: 'rameswaram',
    title: 'Sacred Island of Lord Rama',
    subtitle: 'The Southern Dham',
    description: 'Located in Tamil Nadu, Rameswaram is connected to the Ramayana epic and represents devotion and righteousness.',
    featured_image_url: '/images/rameswaram-featured.jpg',
    location_details: { state: 'Tamil Nadu', altitude: 'Sea level' },
    is_featured: true,
    sort_order: 4
  }
]

export default async function CharDhamPage() {
  const dbPlaces = await getCharDhamPlaces()
  const charDhams = dbPlaces.length > 0 ? dbPlaces : defaultCharDhams

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-orange-900/10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/sacred-places"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Sacred Places
            </Link>
          </div>

          {/* Hero Content */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mb-6">
              <Mountain className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-900 via-orange-600 to-red-600 bg-clip-text text-transparent">
              चार धाम
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Char Dham Yatra
            </h2>
            <p className="text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Embark on the most sacred pilgrimage in Hinduism - the Char Dham Yatra.
              These four divine abodes represent the four directions of spiritual enlightenment
              and offer the ultimate path to moksha.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">4</div>
                <div className="text-sm text-gray-600">Sacred Dhams</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">4</div>
                <div className="text-sm text-gray-600">Directions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">Ancient</div>
                <div className="text-sm text-gray-600">Traditions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">Moksha</div>
                <div className="text-sm text-gray-600">Liberation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              The Sacred Journey
            </h2>
            <p className="text-lg text-blue-700 leading-relaxed">
              The Char Dham Yatra is considered the ultimate spiritual journey in Hinduism.
              These four sacred sites - Badrinath in the north, Dwarka in the west,
              Jagannath Puri in the east, and Rameswaram in the south - form a divine quadrilateral
              that encompasses the entire spiritual geography of Bharat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-orange-500" />
                Spiritual Significance
              </h3>
              <p className="text-blue-800 leading-relaxed">
                Completing the Char Dham Yatra is believed to cleanse all sins and grant moksha (liberation).
                Each dham represents a different aspect of the divine and offers unique spiritual experiences.
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-blue-500" />
                Sacred Geography
              </h3>
              <p className="text-blue-800 leading-relaxed">
                The four dhams are strategically located in the four cardinal directions,
                creating a divine mandala that encompasses the sacred geography of India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Char Dhams Grid */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              The Four Sacred Abodes
            </h2>
            <p className="text-xl text-blue-700">
              Explore each of the divine dhams and plan your sacred pilgrimage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {charDhams.map((dham, index) => (
              <div key={dham.id} className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                {/* Image */}
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative overflow-hidden">
                  {dham.featured_image_url ? (
                    <Image
                      src={dham.featured_image_url}
                      alt={`${dham.name} temple`}
                      width={600}
                      height={300}
                      className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-64 bg-gradient-to-br from-blue-100 to-orange-100">
                      <Mountain className="w-16 h-16 text-blue-500" />
                    </div>
                  )}

                  {/* Direction Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                      index === 0 ? 'bg-blue-600' :
                      index === 1 ? 'bg-orange-600' :
                      index === 2 ? 'bg-green-600' : 'bg-purple-600'
                    }`}>
                      {index === 0 ? 'North' : index === 1 ? 'West' : index === 2 ? 'East' : 'South'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">
                      {dham.name}
                    </h3>
                    {dham.sanskrit_name && (
                      <p className="text-lg text-gray-600 font-devanagari">
                        {dham.sanskrit_name}
                      </p>
                    )}
                    <p className="text-orange-600 font-medium">
                      {dham.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    {dham.description}
                  </p>

                  {/* Location Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {dham.location_details?.state}
                    </span>
                    {dham.location_details?.altitude && (
                      <span className="flex items-center gap-1">
                        <Mountain className="w-4 h-4" />
                        {dham.location_details.altitude}
                      </span>
                    )}
                  </div>

                  {/* Action Button */}
                  <Link
                    href={`/sacred-places/char-dham/${dham.slug}`}
                    className="w-full bg-gradient-to-r from-blue-600 to-orange-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    Explore {dham.name}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilgrimage Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Pilgrimage Planning
            </h2>
            <p className="text-lg text-blue-700">
              Essential information for your Char Dham Yatra
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center bg-blue-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Best Time</h3>
              <p className="text-blue-800">
                April to October for most dhams. Check individual dham pages for specific timings and weather conditions.
              </p>
            </div>

            <div className="text-center bg-orange-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Navigation className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Route Planning</h3>
              <p className="text-blue-800">
                Plan your route based on seasonal accessibility. Some dhams may be closed during monsoon or winter months.
              </p>
            </div>

            <div className="text-center bg-green-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Preparation</h3>
              <p className="text-blue-800">
                Prepare physically and spiritually. Carry necessary documents, medicines, and suitable clothing for all climates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-orange-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Begin Your Sacred Journey
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start exploring the divine dhams and plan your life-changing pilgrimage
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/sacred-places/char-dham/badrinath"
              className="bg-white text-blue-900 font-semibold rounded-full px-8 py-3 hover:bg-blue-50 transition-colors"
            >
              Start with Badrinath
            </Link>
            <Link
              href="/practices/pilgrimage"
              className="text-white border border-white rounded-full px-8 py-3 hover:bg-white hover:text-blue-900 transition-colors"
            >
              Pilgrimage Guide
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}