import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import {
  MapPin,
  Mountain,
  Calendar,
  Clock,
  Star,
  ArrowLeft,
  Camera,
  Heart,
  BookOpen,
  Sun,
  Snowflake,
  Navigation,
  Phone,
  Home,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Badrinath Dham - Sacred Char Dham Pilgrimage | PeacefulAnswers',
  description: 'Discover Badrinath, one of the holiest Char Dham sites dedicated to Lord Vishnu. Learn about its spiritual significance, pilgrimage details, and divine stories.',
  keywords: 'Badrinath, Char Dham, Vishnu temple, Himalayan pilgrimage, Uttarakhand, sacred places, Hindu temples',
}

// This would typically come from Supabase
async function getBadrinathData() {
  try {
    const { data: place, error } = await supabase
      .schema('hindu')
      .from('sacred_places')
      .select('*')
      .eq('slug', 'badrinath')
      .eq('status', 'published')
      .single()

    if (error && error.code !== 'PGRST116') {
      console.error('Error fetching Badrinath data:', error)
    }

    // Return sample data if not found in database
    return place || getSampleBadrinathData()
  } catch (error) {
    console.error('Error:', error)
    return getSampleBadrinathData()
  }
}

function getSampleBadrinathData() {
  return {
    id: 'sample-badrinath',
    name: 'Badrinath',
    sanskrit_name: 'बदरीनाथ',
    title: 'Sacred Abode of Lord Vishnu',
    subtitle: 'The Northern Dham of Char Dham Yatra',
    description: 'Badrinath, nestled in the Garhwal Himalayas of Uttarakhand, is one of the most revered pilgrimage sites in Hinduism. This sacred temple, dedicated to Lord Vishnu in his form as Badrinarayan, stands majestically at an altitude of 3,133 meters.',
    hero_image_url: null, // Using gradient background instead
    hero_image_alt: 'Badrinath Temple in the Himalayas',
    location_details: {
      address: 'Badrinath, Chamoli District',
      city: 'Badrinath',
      state: 'Uttarakhand',
      country: 'India',
      coordinates: { lat: 30.7433, lng: 79.4938 },
      altitude: '3,133 meters (10,279 feet)'
    },
    content_sections: [
      {
        title: 'Spiritual Significance',
        content: 'Badrinath is one of the four sacred dhams (Char Dham) and holds immense spiritual significance in Hindu tradition. The temple is dedicated to Lord Vishnu as Badrinarayan, meaning "Lord of the Badri trees." According to Hindu beliefs, a pilgrimage to Badrinath cleanses sins and grants moksha (liberation).',
        type: 'text'
      },
      {
        title: 'Divine History',
        content: 'The temple\'s origins trace back thousands of years. It is believed that Adi Shankaracharya established the present temple in the 8th century CE, though the site has been revered much longer. The area is mentioned in ancient texts like the Vishnu Purana and Skanda Purana.',
        type: 'text'
      },
      {
        title: 'Architecture & Design',
        content: 'The temple showcases traditional North Indian architecture with its colorful facade and conical spire. The main sanctum houses a black stone idol of Lord Badrinarayan in a meditative posture. The temple\'s design reflects the harsh mountain climate, built to withstand heavy snowfall.',
        type: 'text'
      }
    ],
    interesting_facts: [
      {
        title: 'Ancient Origins',
        description: 'The temple is believed to be over 1,200 years old, established by Adi Shankaracharya.'
      },
      {
        title: 'Seasonal Closure',
        description: 'The temple remains closed for 6 months due to heavy snowfall, from November to April.'
      },
      {
        title: 'Hot Springs',
        description: 'Tapt Kund, a natural hot spring, provides warm water for ritual baths even in freezing temperatures.'
      },
      {
        title: 'Sacred Grove',
        description: 'The area was once filled with Badri (jujube) trees, giving the place its name.'
      },
      {
        title: 'Helicopter Service',
        description: 'Helicopter services make the pilgrimage accessible for elderly and physically challenged devotees.'
      }
    ],
    faqs: [
      {
        question: 'When is the best time to visit Badrinath?',
        answer: 'The best time to visit Badrinath is from May to October when the temple is open and weather conditions are favorable. The temple closes during winter months due to heavy snowfall.'
      },
      {
        question: 'How can I reach Badrinath?',
        answer: 'Badrinath can be reached by road from major cities. The nearest airport is Jolly Grant Airport in Dehradun (317 km), and the nearest railway station is Haridwar (324 km). Regular bus services and helicopter services are also available.'
      },
      {
        question: 'What are the temple timings?',
        answer: 'The temple is open from 4:30 AM to 1:00 PM and 4:00 PM to 9:00 PM. During peak season, timings may be extended. Special darshan timings are available for VIP devotees.'
      },
      {
        question: 'Is accommodation available near the temple?',
        answer: 'Yes, various accommodation options are available including dharamshalas, guest houses, and hotels. It\'s advisable to book in advance, especially during peak pilgrimage season.'
      },
      {
        question: 'What should I carry for the pilgrimage?',
        answer: 'Carry warm clothing, comfortable walking shoes, necessary medicines, identity proof, and rain gear. Due to the high altitude, it\'s important to acclimatize gradually.'
      }
    ],
    gallery_images: [
      {
        url: '/images/badrinath-temple-front.jpg',
        alt: 'Front view of Badrinath Temple',
        caption: 'The colorful facade of Badrinath Temple'
      },
      {
        url: '/images/badrinath-mountains.jpg',
        alt: 'Badrinath surrounded by mountains',
        caption: 'Majestic Himalayan peaks surrounding Badrinath'
      },
      {
        url: '/images/badrinath-alaknanda.jpg',
        alt: 'Alaknanda River near Badrinath',
        caption: 'The sacred Alaknanda River flowing near the temple'
      }
    ]
  }
}

export default async function BadrinathPage() {
  const badrinathData = await getBadrinathData()

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-blue-900/60"></div>
        {/* Mountain silhouette pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 1200 400" className="w-full h-full">
            <path d="M0,400 L0,200 L200,100 L400,180 L600,80 L800,160 L1000,60 L1200,140 L1200,400 Z" fill="currentColor" className="text-white"/>
          </svg>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Mountain className="w-4 h-4" />
              Char Dham Yatra
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl">
              {badrinathData.sanskrit_name}
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 drop-shadow-lg">
              {badrinathData.name}
            </h2>
            <p className="text-xl md:text-2xl mb-6 drop-shadow-lg">
              {badrinathData.subtitle}
            </p>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              {badrinathData.description}
            </p>
          </div>
        </div>

        {/* Back Navigation */}
        <div className="absolute top-6 left-6">
          <Link
            href="/sacred-places/char-dham"
            className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-blue-900 px-4 py-2 rounded-full hover:bg-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Char Dham</span>
          </Link>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-white border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Location</p>
                <p className="font-semibold text-blue-900">{badrinathData.location_details.state}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Mountain className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Altitude</p>
                <p className="font-semibold text-blue-900">{badrinathData.location_details.altitude}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <Calendar className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Best Time</p>
                <p className="font-semibold text-blue-900">May - October</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Significance</p>
                <p className="font-semibold text-blue-900">Char Dham</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {badrinathData.content_sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                </div>
                {section.title}
              </h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4 flex items-center justify-center gap-3">
              <Camera className="w-8 h-8" />
              Sacred Gallery
            </h2>
            <p className="text-xl text-blue-700">
              Experience the divine beauty of Badrinath through these sacred images
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {badrinathData.gallery_images.map((image, index) => (
              <div key={index} className="group relative">
                <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="mt-4 text-center text-blue-700 font-medium">
                  {image.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interesting Facts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4 flex items-center justify-center gap-3">
              <Star className="w-8 h-8" />
              Fascinating Facts
            </h2>
            <p className="text-xl text-blue-700">
              Discover amazing facts about this sacred pilgrimage site
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {badrinathData.interesting_facts.map((fact, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {fact.title}
                </h3>
                <p className="text-blue-700 leading-relaxed">
                  {fact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-blue-200">
              Everything you need to know for your pilgrimage to Badrinath
            </p>
          </div>

          <div className="space-y-4">
            {badrinathData.faqs.map((faq, index) => (
              <details key={index} className="group bg-white/10 backdrop-blur-sm rounded-2xl">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/5 transition-colors rounded-2xl">
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown className="w-5 h-5 text-white group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-blue-100 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Begin Your Sacred Journey
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Experience the divine blessings of Lord Badrinarayan in the holy Himalayas
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/sacred-places/char-dham"
              className="bg-white text-orange-600 font-semibold rounded-full px-8 py-3 hover:bg-orange-50 transition-colors"
            >
              Explore Other Char Dhams
            </Link>
            <Link
              href="/practices/pilgrimage"
              className="text-white border border-white rounded-full px-8 py-3 hover:bg-white hover:text-orange-600 transition-colors"
            >
              Pilgrimage Preparation
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}