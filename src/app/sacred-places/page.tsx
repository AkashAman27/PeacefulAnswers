import { Metadata } from 'next'
import { MapPin, Mountain, Waves, Sun, Heart } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sacred Places - PeacefulAnswers',
  description: 'Explore the sacred geography of Bharatvarsha. Discover holy pilgrimage sites, temples, and spiritual destinations across India.',
  keywords: 'sacred places, pilgrimage, temples, holy sites, Char Dham, Jyotirlingas, Shakti Peethas, spiritual destinations',
}

export default function SacredPlacesPage() {
  const categories = [
    {
      title: 'Char Dham',
      description: 'The four sacred abodes representing the four directions of spiritual pilgrimage',
      icon: Mountain,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      places: ['Badrinath', 'Dwarka', 'Jagannath Puri', 'Rameswaram'],
      href: '/sacred-places/char-dham'
    },
    {
      title: 'Jyotirlingas',
      description: 'The twelve sacred sites where Lord Shiva manifested as pillars of light',
      icon: Sun,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      places: ['Somnath', 'Mallikarjuna', 'Mahakaleshwar', 'Omkareshwar', 'Kedarnath', 'Bhimashankar'],
      href: '/sacred-places/jyotirlingas'
    },
    {
      title: 'Shakti Peethas',
      description: 'Sacred sites where parts of Goddess Sati fell, representing divine feminine energy',
      icon: Heart,
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600',
      places: ['Kamakhya', 'Vaishno Devi', 'Kalighat', 'Ambaji'],
      href: '/sacred-places/shakti-peethas'
    }
  ]

  const importantPlaces = [
    {
      name: 'Vrindavan',
      description: 'The sacred land where Lord Krishna spent his childhood',
      icon: Heart,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      href: '/sacred-places/vrindavan'
    },
    {
      name: 'Varanasi',
      description: 'The eternal city of Lord Shiva, one of the oldest living cities',
      icon: Waves,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      href: '/sacred-places/varanasi'
    },
    {
      name: 'Haridwar',
      description: 'Gateway to the gods where the Ganges enters the plains',
      icon: Mountain,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      href: '/sacred-places/haridwar'
    },
    {
      name: 'Rishikesh',
      description: 'The yoga capital of the world nestled in the Himalayas',
      icon: Heart,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      href: '/sacred-places/rishikesh'
    },
    {
      name: 'Tirupati',
      description: 'The abode of Lord Venkateswara, one of the richest temples',
      icon: Mountain,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      href: '/sacred-places/tirupati'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">
              Sacred Places
            </h1>
            <p className="text-lg sm:text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
              Explore the divine geography of Bharatvarsha, where every mountain, river, and temple
              resonates with spiritual energy and ancient wisdom.
            </p>
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Sacred Categories
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const IconComponent = category.icon

              return (
                <Link
                  key={category.title}
                  href={category.href}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-orange-200 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <div className={`w-16 h-16 ${category.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                      <IconComponent className={`w-8 h-8 ${category.iconColor}`} />
                    </div>

                    <h3 className="text-2xl font-bold text-blue-900 mb-4">
                      {category.title}
                    </h3>

                    <p className="text-blue-700 mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <p className="text-sm font-semibold text-gray-600 mb-2">Featured Places:</p>
                      {category.places.slice(0, 4).map((place, index) => (
                        <div key={place} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                          {place}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700">
                      <span>Explore {category.title}</span>
                      <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Important Individual Places */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Important Sacred Destinations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {importantPlaces.map((place) => {
              const IconComponent = place.icon

              return (
                <Link
                  key={place.name}
                  href={place.href}
                  className="group bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:border-orange-200 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-12 h-12 ${place.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-6 h-6 ${place.color}`} />
                  </div>

                  <h3 className="text-lg font-bold text-blue-900 mb-2">
                    {place.name}
                  </h3>

                  <p className="text-sm text-blue-700 leading-relaxed">
                    {place.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Begin Your Spiritual Journey
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Discover the profound spiritual significance of each sacred place and plan your pilgrimage
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/sacred-places/char-dham"
              className="bg-white text-blue-900 font-semibold rounded-full px-8 py-3 hover:bg-blue-50 transition-colors"
            >
              Start with Char Dham
            </Link>
            <Link
              href="/practices"
              className="text-white border border-white rounded-full px-8 py-3 hover:bg-white hover:text-blue-900 transition-colors"
            >
              Learn Pilgrimage Practices
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}