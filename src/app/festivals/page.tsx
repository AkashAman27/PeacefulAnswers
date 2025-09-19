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
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">🎊</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-3 sm:mb-4">
              Hindu Festivals
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-orange-600 mb-4 sm:mb-6 font-hindi">
              पवित्र त्योहार
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              Celebrate the divine through sacred festivals that connect us to our spiritual heritage.
              Learn about rituals, significance, and the joy of community celebration.
            </p>
          </div>

          {/* Upcoming Festivals */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 mb-8 sm:mb-10 md:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 sm:mb-8 text-center">
              🗓️ Upcoming Festivals
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {upcomingFestivals.map((festival) => (
                <Link key={festival.id} href={`/festivals/${festival.id}`}>
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-orange-100">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <span className="text-2xl sm:text-3xl">{festival.icon}</span>
                      <div>
                        <span className={`px-2 py-1 rounded-full text-[10px] sm:text-xs font-medium ${
                          festival.status === 'upcoming'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {festival.status === 'upcoming' ? 'Upcoming' : 'Ongoing'}
                        </span>
                      </div>
                    </div>
                    
                    <h4 className="text-lg sm:text-xl font-bold text-blue-900 mb-1 sm:mb-2 line-clamp-1">{festival.name}</h4>
                    <h5 className="text-base sm:text-lg font-semibold text-orange-600 mb-2 sm:mb-3 font-hindi line-clamp-1">{festival.hindi}</h5>
                    <p className="text-xs sm:text-sm text-blue-600 mb-2 sm:mb-3 font-medium">{festival.date}</p>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">{festival.description}</p>

                    <div className="mt-3 sm:mt-4 flex items-center text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700">
                      <span>Learn More</span>
                      <svg className="ml-1 h-3 w-3 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Major Festivals Grid */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-10 md:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 sm:mb-8 text-center">
              🌟 Major Hindu Festivals
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {majorFestivals.map((festival, index) => (
                <div key={index} className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{festival.icon}</div>
                  <h4 className="text-sm sm:text-base md:text-lg font-bold text-blue-900 mb-1 line-clamp-1">{festival.name}</h4>
                  <h5 className="text-xs sm:text-sm md:text-base font-semibold text-orange-600 mb-1 sm:mb-2 font-hindi line-clamp-1">{festival.hindi}</h5>
                  <p className="text-xs sm:text-sm text-gray-600">{festival.season}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Festival Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6 flex items-center gap-2">
                🙏 Vrat & Fasting
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-orange-50 rounded-lg">
                  <span className="text-lg sm:text-xl">🪔</span>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-blue-900 text-sm sm:text-base">Ekadashi</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Monthly fasting days</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-orange-50 rounded-lg">
                  <span className="text-lg sm:text-xl">🌙</span>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-blue-900 text-sm sm:text-base">Karva Chauth</h4>
                    <p className="text-xs sm:text-sm text-gray-600">For marital bliss</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-orange-50 rounded-lg">
                  <span className="text-lg sm:text-xl">🪔</span>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-blue-900 text-sm sm:text-base">Jivit Putrika</h4>
                    <p className="text-xs sm:text-sm text-gray-600">For children's welfare</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6 flex items-center gap-2">
                🎭 Seasonal Celebrations
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-blue-50 rounded-lg">
                  <span className="text-lg sm:text-xl">🌸</span>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-blue-900 text-sm sm:text-base">Spring Festivals</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Holi, Basant Panchami</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-blue-50 rounded-lg">
                  <span className="text-lg sm:text-xl">🌾</span>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-blue-900 text-sm sm:text-base">Harvest Festivals</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Makar Sankranti, Baisakhi</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-blue-50 rounded-lg">
                  <span className="text-lg sm:text-xl">🍂</span>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-blue-900 text-sm sm:text-base">Autumn Festivals</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Diwali, Dussehra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 mt-8 sm:mt-10 md:mt-12 text-center text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">🎊 Never Miss a Festival</h3>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 px-2 sm:px-0">
              Get notified about upcoming festivals, their significance, and how to celebrate them authentically
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link href="/admin/festival-ticker" className="bg-white text-orange-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base">
                Manage Announcements
              </Link>
              <button className="bg-yellow-400 text-orange-800 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-sm sm:text-base">
                Subscribe to Calendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}