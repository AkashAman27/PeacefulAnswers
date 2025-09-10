import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { peacefulAnswersContentDatabase } from '@/data/contentDatabase'
import { ContentItem } from '@/lib/contentRecommendations'

export const metadata: Metadata = {
  title: 'Hindu Practices - Sacred Rituals & Daily Practices | PeacefulAnswers',
  description: 'Discover authentic Hindu practices including pujas, meditation, sun salutations, and spiritual studies. Learn traditional methods for daily spiritual growth.',
  keywords: 'Hindu practices, puja methods, meditation, spiritual practices, daily rituals, yoga practices, mantra chanting, devotional practices',
  openGraph: {
    title: 'Hindu Practices - Sacred Rituals & Daily Practices | PeacefulAnswers',
    description: 'Explore traditional Hindu practices for spiritual growth and daily devotion.',
    type: 'website',
  },
}

export default function PracticesPage() {
  // Filter and organize practices from database
  const practices = peacefulAnswersContentDatabase.filter(item => item.type === 'practice')
  
  // Categorize practices by type and difficulty
  const beginnerPractices = practices.filter(p => p.ontologicalProperties.difficulty === 'beginner')
  const intermediatePractices = practices.filter(p => p.ontologicalProperties.difficulty === 'intermediate')
  const advancedPractices = practices.filter(p => p.ontologicalProperties.difficulty === 'advanced')
  
  // Get practice type icons
  const getPracticeIcon = (practice: ContentItem) => {
    if (practice.tags.includes('ganesha-worship')) return '🙏'
    if (practice.tags.includes('sun-worship')) return '☀️'
    if (practice.tags.includes('scripture-study')) return '📖'
    if (practice.tags.includes('meditation')) return '🧘'
    return '✨'
  }
  
  // Get difficulty badge color
  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800'
      case 'intermediate': return 'bg-yellow-100 text-yellow-800' 
      case 'advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }
  
  // Get time commitment display
  const getTimeDisplay = (timeCommitment: string) => {
    switch(timeCommitment) {
      case 'short': return '15-30 min'
      case 'medium': return '30-60 min'
      case 'long': return '60+ min'
      default: return '15-30 min'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">🕉️ Sacred Practices</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                आध्यात्मिक अभ्यास
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-orange-100">
                Hindu Practices
              </h2>
              <p className="text-lg text-orange-100 leading-relaxed mb-8">
                Discover authentic Hindu practices that nurture spiritual growth through daily devotion, 
                meditation, and sacred rituals. Transform your life through time-tested spiritual methods.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="#beginner" 
                  className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Start Here
                </Link>
                <Link 
                  href="#all-practices" 
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  View All Practices
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=600&h=600&fit=crop"
                  alt="Hindu spiritual practices"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Practice Categories Overview */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Practice Categories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore different types of Hindu practices organized by tradition, purpose, and spiritual focus
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="text-xl font-bold text-orange-800 mb-3">Devotional Practices</h3>
              <p className="text-gray-600 text-sm mb-4">Pujas, arti, and worship methods to connect with divine energies</p>
              <div className="text-xs text-orange-600 font-medium">Bhakti Yoga Path</div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">Meditation & Yoga</h3>
              <p className="text-gray-600 text-sm mb-4">Physical and mental practices for spiritual awakening</p>
              <div className="text-xs text-purple-600 font-medium">Raja Yoga Path</div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">Scripture Study</h3>
              <p className="text-gray-600 text-sm mb-4">Daily contemplation of sacred texts and wisdom literature</p>
              <div className="text-xs text-blue-600 font-medium">Jnana Yoga Path</div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🕯️</div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Ritual Practices</h3>
              <p className="text-gray-600 text-sm mb-4">Sacred ceremonies, vratas, and traditional observances</p>
              <div className="text-xs text-green-600 font-medium">Karma Yoga Path</div>
            </div>
          </div>
        </section>

        {/* Beginner Practices */}
        <section id="beginner">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Start Your Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Perfect practices for beginners to establish a daily spiritual routine
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beginnerPractices.map((practice, index) => (
              <Link 
                key={practice.id}
                href={`/practices/${practice.slug}`}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{getPracticeIcon(practice)}</div>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor(practice.ontologicalProperties.difficulty || 'beginner')}`}>
                    Beginner
                  </span>
                  <span className="text-xs text-gray-500">
                    {getTimeDisplay(practice.ontologicalProperties.timeCommitment || 'short')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {practice.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {practice.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {practice.ontologicalProperties.benefits?.slice(0, 2).map((benefit, idx) => (
                    <span key={idx} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                      {benefit}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-orange-600 text-sm font-medium group-hover:text-orange-700">
                  Learn Practice
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
                    <path d="M7 17L17 7"/>
                    <path d="M7 7h10v10"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* All Practices */}
        <section id="all-practices">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">All Practices</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete collection of Hindu spiritual practices for all levels of practitioners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practices.map((practice, index) => (
              <Link 
                key={practice.id}
                href={`/practices/${practice.slug}`}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{getPracticeIcon(practice)}</div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor(practice.ontologicalProperties.difficulty || 'beginner')}`}>
                    {(practice.ontologicalProperties.difficulty || 'beginner').charAt(0).toUpperCase() + (practice.ontologicalProperties.difficulty || 'beginner').slice(1)}
                  </span>
                  <span className="text-xs text-gray-500">
                    {getTimeDisplay(practice.ontologicalProperties.timeCommitment || 'short')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {practice.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {practice.description}
                </p>
                
                {/* Yoga Path */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {practice.ontologicalProperties.yogaPaths?.slice(0, 2).map((path, idx) => (
                      <span key={idx} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                        {path} yoga
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Benefits */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {practice.ontologicalProperties.benefits?.slice(0, 2).map((benefit, idx) => (
                    <span key={idx} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                      {benefit}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-orange-600 text-sm font-medium group-hover:text-orange-700">
                  Learn Practice
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
                    <path d="M7 17L17 7"/>
                    <path d="M7 7h10v10"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Practice Guidelines */}
        <section>
          <div className="bg-gradient-to-br from-orange-100 via-yellow-100 to-pink-100 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-orange-800 mb-4">Practice Guidelines</h2>
              <p className="text-xl text-orange-700 max-w-3xl mx-auto">
                Essential principles for establishing and maintaining your spiritual practice
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl mb-4">⏰</div>
                <h3 className="font-bold text-orange-800 mb-3">Consistency</h3>
                <p className="text-gray-700 text-sm">
                  Practice regularly, even if for just 10 minutes daily. Consistency is more important than duration.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🌅</div>
                <h3 className="font-bold text-orange-800 mb-3">Sacred Time</h3>
                <p className="text-gray-700 text-sm">
                  Early morning (Brahma Muhurta) is considered the most auspicious time for spiritual practices.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🧘</div>
                <h3 className="font-bold text-orange-800 mb-3">Sacred Space</h3>
                <p className="text-gray-700 text-sm">
                  Create a clean, peaceful space dedicated to your practice. Keep it free from distractions.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl mb-4">💚</div>
                <h3 className="font-bold text-orange-800 mb-3">Pure Intent</h3>
                <p className="text-gray-700 text-sm">
                  Approach each practice with devotion, humility, and sincere intention for spiritual growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white rounded-3xl p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              🕉️ Begin Your Spiritual Journey Today
            </h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Choose a practice that resonates with your heart and start with just 10-15 minutes daily. 
              The journey of a thousand miles begins with a single step.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/practices/ganapati-puja"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                🙏 Start with Ganapati Puja
              </Link>
              <Link
                href="/practices/surya-namaskara"
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                ☀️ Try Sun Salutation
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}