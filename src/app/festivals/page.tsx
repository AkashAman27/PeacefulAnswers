import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hindu Festivals - त्योहार | PeacefulAnswers.com',
  description: 'Discover the significance, rituals, and celebrations of major Hindu festivals. Learn about Diwali, Holi, Navaratri, Ganesh Chaturthi, and more.',
  keywords: 'Hindu festivals, Indian festivals, religious celebrations, festival calendar, Hindu traditions',
}

export default function FestivalsPage() {
  const upcomingFestivals = [
    {
      id: 'jivit-putrika',
      name: 'Jivit Putrika Vrat',
      hindi: 'जीवित पुत्रिका व्रत',
      date: 'September 14, 2025',
      icon: '🪔',
      description: 'A sacred fast observed by mothers for the long life and prosperity of their sons.',
      status: 'upcoming'
    },
    {
      id: 'ganesh-chaturthi',
      name: 'Ganesh Chaturthi',
      hindi: 'गणेश चतुर्थी',
      date: 'August 30, 2025',
      icon: '🐘',
      description: 'Celebrating the birth of Lord Ganesha, the remover of obstacles.',
      status: 'ongoing'
    },
    {
      id: 'navratri',
      name: 'Sharad Navratri',
      hindi: 'शरद नवरात्रि',
      date: 'October 3-11, 2025',
      icon: '🌺',
      description: 'Nine nights dedicated to the worship of Goddess Durga.',
      status: 'upcoming'
    }
  ]

  const majorFestivals = [
    { name: 'Diwali', hindi: 'दीवाली', icon: '🪔', season: 'Autumn' },
    { name: 'Holi', hindi: 'होली', icon: '🎨', season: 'Spring' },
    { name: 'Dussehra', hindi: 'दशहरा', icon: '🏹', season: 'Autumn' },
    { name: 'Krishna Janmashtami', hindi: 'कृष्ण जन्माष्टमी', icon: '🦚', season: 'Summer' },
    { name: 'Maha Shivratri', hindi: 'महा शिवरात्रि', icon: '🔱', season: 'Winter' },
    { name: 'Ram Navami', hindi: 'राम नवमी', icon: '🏹', season: 'Spring' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🎊</div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Hindu Festivals
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-600 mb-6 font-hindi">
              पवित्र त्योहार
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Celebrate the divine through sacred festivals that connect us to our spiritual heritage. 
              Learn about rituals, significance, and the joy of community celebration.
            </p>
          </div>

          {/* Upcoming Festivals */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              🗓️ Upcoming Festivals
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingFestivals.map((festival) => (
                <Link key={festival.id} href={`/festivals/${festival.id}`}>
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-orange-100">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{festival.icon}</span>
                      <div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          festival.status === 'upcoming' 
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {festival.status === 'upcoming' ? 'Upcoming' : 'Ongoing'}
                        </span>
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-blue-900 mb-2">{festival.name}</h4>
                    <h5 className="text-lg font-semibold text-orange-600 mb-3 font-hindi">{festival.hindi}</h5>
                    <p className="text-sm text-blue-600 mb-3 font-medium">{festival.date}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{festival.description}</p>
                    
                    <div className="mt-4 flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700">
                      <span>Learn More</span>
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Major Festivals Grid */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              🌟 Major Hindu Festivals
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {majorFestivals.map((festival, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-3">{festival.icon}</div>
                  <h4 className="text-lg font-bold text-blue-900 mb-1">{festival.name}</h4>
                  <h5 className="text-md font-semibold text-orange-600 mb-2 font-hindi">{festival.hindi}</h5>
                  <p className="text-sm text-gray-600">{festival.season}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Festival Categories */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                🙏 Vrat & Fasting
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                  <span className="text-xl">🪔</span>
                  <div>
                    <h4 className="font-semibold text-blue-900">Ekadashi</h4>
                    <p className="text-sm text-gray-600">Monthly fasting days</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                  <span className="text-xl">🌙</span>
                  <div>
                    <h4 className="font-semibold text-blue-900">Karva Chauth</h4>
                    <p className="text-sm text-gray-600">For marital bliss</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                  <span className="text-xl">🪔</span>
                  <div>
                    <h4 className="font-semibold text-blue-900">Jivit Putrika</h4>
                    <p className="text-sm text-gray-600">For children's welfare</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                🎭 Seasonal Celebrations
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <span className="text-xl">🌸</span>
                  <div>
                    <h4 className="font-semibold text-blue-900">Spring Festivals</h4>
                    <p className="text-sm text-gray-600">Holi, Basant Panchami</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <span className="text-xl">🌾</span>
                  <div>
                    <h4 className="font-semibold text-blue-900">Harvest Festivals</h4>
                    <p className="text-sm text-gray-600">Makar Sankranti, Baisakhi</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <span className="text-xl">🍂</span>
                  <div>
                    <h4 className="font-semibold text-blue-900">Autumn Festivals</h4>
                    <p className="text-sm text-gray-600">Diwali, Dussehra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 mt-12 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">🎊 Never Miss a Festival</h3>
            <p className="text-lg mb-6">
              Get notified about upcoming festivals, their significance, and how to celebrate them authentically
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/admin/festival-ticker" className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Manage Announcements
              </Link>
              <button className="bg-yellow-400 text-orange-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Subscribe to Calendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}