import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Calendar, MapPin, Sparkles, Heart, Zap } from 'lucide-react'

const avatars = [
  { name: 'Matsya', slug: 'matsya', order: 1 },
  { name: 'Kurma', slug: 'kurma', order: 2 },
  { name: 'Varaha', slug: 'varaha', order: 3 },
  { name: 'Narasimha', slug: 'narasimha', order: 4 },
  { name: 'Vamana', slug: 'vamana', order: 5 },
  { name: 'Parashurama', slug: 'parashurama', order: 6 },
  { name: 'Rama', slug: 'rama', order: 7 },
  { name: 'Krishna', slug: 'krishna', order: 8 },
  { name: 'Buddha', slug: 'buddha', order: 9 },
  { name: 'Kalki', slug: 'kalki', order: 10 }
]

const currentAvatar = avatars.find(a => a.slug === 'kalki')!
const prevAvatar = avatars.find(a => a.order === currentAvatar.order - 1)
const nextAvatar = avatars.find(a => a.order === currentAvatar.order + 1)

export default function KalkiPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer animate-[slideInFromLeft_0.8s_ease-out]">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              <span className="text-sm font-medium">Tenth Avatar of Dashavatar</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-200 to-orange-300 bg-clip-text text-transparent animate-[slideInFromLeft_1s_ease-out_0.2s_both]">
              कल्कि अवतार
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 animate-[slideInFromLeft_1s_ease-out_0.4s_both]">Kalki Avatar</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed animate-[slideInFromLeft_1s_ease-out_0.6s_both]">
              The future avatar who will end the age of darkness and establish the golden age of truth
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-400/20 rounded-full blur-3xl"></div>
      </section>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/deities/vishnu" 
              className="flex items-center text-purple-600 hover:text-purple-800 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back to Vishnu
            </Link>
            
            <div className="flex items-center space-x-4">
              {prevAvatar && (
                <Link 
                  href={`/deities/vishnu/avatars/${prevAvatar.slug}`}
                  className="flex items-center text-gray-600 hover:text-purple-600 transition-colors text-sm"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  {prevAvatar.name}
                </Link>
              )}
              <span className="text-gray-400">|</span>
              <span className="text-purple-600 text-sm font-medium">Final Avatar</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Story Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Divine Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-r from-purple-100 to-indigo-100">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
                alt="Kalki Avatar - The future destroyer of evil and restorer of dharma"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm opacity-90">Kalki Avatar riding the white horse Devadatta</p>
              </div>
            </div>

            {/* Story Section */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Heart className="w-6 h-6 mr-3 text-red-500" />
                The Prophecy of the Final Avatar
              </h3>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <h4 className="text-xl font-semibold text-purple-900">The Divine Promise</h4>
                <p className="text-gray-700 leading-relaxed">
                  Kalki is the prophesied tenth and final avatar of Vishnu, destined to appear at the end of Kali Yuga when dharma will have almost completely disappeared from the world. Unlike previous avatars who appeared in response to immediate crises, Kalki represents the ultimate divine intervention that will conclude the current cosmic cycle and inaugurate a new golden age.
                </p>

                <h4 className="text-xl font-semibold text-purple-900">The Conditions for Manifestation</h4>
                <p className="text-gray-700 leading-relaxed">
                  According to the Puranas, Kalki will manifest when the world reaches unprecedented levels of spiritual degradation: when rulers become thieves, when teachers become ignorant, when sacred knowledge is commercialized, when family bonds dissolve, and when humanity loses all connection to dharma. At this darkest hour, divine intervention becomes necessary for cosmic restoration.
                </p>

                <h4 className="text-xl font-semibold text-purple-900">The Divine Birth and Appearance</h4>
                <p className="text-gray-700 leading-relaxed">
                  Kalki will be born in the village of Sambhala to a Brahmin family - his father Vishnuyashas and mother Sumati. He will appear as a divine warrior, radiant with spiritual power, riding a white horse named Devadatta and wielding a blazing sword (Ratnamaru). His very presence will strike terror into the hearts of the wicked and bring hope to the few righteous souls remaining.
                </p>

                <h4 className="text-xl font-semibold text-purple-900">The Great Destruction and Purification</h4>
                <p className="text-gray-700 leading-relaxed">
                  Kalki will systematically destroy all corrupt rulers, false teachers, and wicked people who have abandoned dharma. Unlike previous avatars who gave opportunities for redemption, Kalki's mission will be swift and decisive - the ultimate cleansing that removes all negative influences from the Earth. This destruction is not vengeful but cosmic necessity for renewal.
                </p>

                <h4 className="text-xl font-semibold text-purple-900">The Cosmic Reset</h4>
                <p className="text-gray-700 leading-relaxed">
                  After completing the destruction of adharma, Kalki will establish the conditions for the new Satya Yuga (Golden Age). The few righteous souls who survive will become the seeds of the new humanity. The Earth will be renewed, natural harmony restored, and divine consciousness will once again be accessible to all beings. Time itself will reset to begin a new cosmic cycle.
                </p>

                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
                  <h5 className="font-semibold text-purple-900 mb-3">The Eternal Cycle</h5>
                  <p className="text-sm text-purple-800 leading-relaxed">
                    Kalki's appearance marks both an end and a beginning. While he concludes the current cycle of four yugas (Satya, Treta, Dwapara, Kali), his victory establishes the foundation for the next cycle. This demonstrates the Hindu understanding of time as cyclical rather than linear - eternal renewal rather than final judgment.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-900">Preparation and Signs</h4>
                <p className="text-gray-700 leading-relaxed">
                  Various texts describe the signs that will precede Kalki's manifestation: extreme weather, social chaos, the failure of all institutions, and the complete inversion of values. However, there will also be positive signs - the birth of enlightened souls, the preservation of sacred knowledge in hidden places, and the gathering of the righteous who maintain faith despite overwhelming darkness.
                </p>
              </div>
            </section>

            {/* Spiritual Significance */}
            <section className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Spiritual Significance</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-purple-900">Ultimate Divine Justice</h4>
                    <p className="text-gray-700">Kalki represents the final expression of divine justice that ensures evil never permanently triumphs over good in the cosmic order.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-purple-900">Cosmic Renewal</h4>
                    <p className="text-gray-700">The avatar symbolizes the principle of eternal renewal - that consciousness and creation are constantly refreshed and purified.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-purple-900">Hope in Darkness</h4>
                    <p className="text-gray-700">Kalki provides eternal hope that no matter how dark the age becomes, divine intervention is assured for those who maintain faith.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-purple-900">Preparation for Enlightenment</h4>
                    <p className="text-gray-700">The prophecy encourages spiritual preparation and maintenance of dharma even in the most challenging times.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-purple-900">Completion of Divine Mission</h4>
                    <p className="text-gray-700">Kalki represents the completion of Vishnu's protective mission across all ages, demonstrating divine commitment to cosmic welfare.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Prophecy Information */}
            <section className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-green-600" />
                Prophetic Timeline
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Current Kali Yuga Status</h4>
                  <p className="text-sm text-gray-600 mb-2">We are currently 5,000+ years into Kali Yuga</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">Kali Yuga spans 432,000 years total. Many signs mentioned in the prophecies are increasingly visible in modern times.</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Signs of the Times</h4>
                  <p className="text-sm text-gray-600 mb-2">Progressive deterioration of dharmic values</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">Ancient texts describe remarkably accurate predictions of modern conditions: technology replacing wisdom, quantity over quality, and material focus over spiritual development.</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Sambhala Village</h4>
                  <p className="text-sm text-gray-600 mb-2">The prophesied birthplace of Kalki</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">Various locations have been suggested, but the exact place remains a divine mystery to be revealed at the appointed time.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Scriptural Sources */}
            <section className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-purple-600" />
                Scriptural Sources
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-800">Bhagavata Purana</h4>
                  <p className="text-sm text-gray-600">Primary source for Kalki prophecies, describing his appearance, mission, and the conditions of his manifestation.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Kalki Purana</h4>
                  <p className="text-sm text-gray-600">Detailed text exclusively focused on Kalki Avatar, describing his birth, education, marriage, and world-changing mission.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Vishnu Purana</h4>
                  <p className="text-sm text-gray-600">Contains prophecies about the end of Kali Yuga and the restoration of dharma through divine intervention.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Mahabharata</h4>
                  <p className="text-sm text-gray-600">Contains early references to the cyclical nature of time and the eventual restoration of the golden age.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Agni Purana</h4>
                  <p className="text-sm text-gray-600">Describes the cosmic dissolution and renewal process, placing Kalki in the context of universal cycles.</p>
                </div>
              </div>
            </section>

            {/* Quick Facts */}
            <section className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Avatar Order:</span>
                  <span>10th (Final) of Dashavatar</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Yuga:</span>
                  <span>End of Kali Yuga</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Status:</span>
                  <span>Future Avatar</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Father:</span>
                  <span>Vishnuyashas</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Mother:</span>
                  <span>Sumati</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Horse:</span>
                  <span>Devadatta</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sword:</span>
                  <span>Ratnamaru</span>
                </div>
              </div>
            </section>

            {/* Sacred Mantras */}
            <section className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sacred Mantras</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Kalki Mantra</h4>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-orange-800 font-medium text-center mb-2">
                      ॐ कल्कये नमः
                    </p>
                    <p className="text-sm text-gray-600 text-center italic">
                      "Om Kalkaye Namah"
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Salutations to the future avatar Kalki
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Protection Prayer</h4>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-orange-800 font-medium text-center mb-2 text-sm">
                      ॐ श्री कल्कि देवदत्तारूढाय धर्मसंस्थापकाय नमः
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      "Salutations to Lord Kalki, rider of Devadatta, establisher of dharma"
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Preparatory Mantra</h4>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-orange-800 font-medium text-center mb-2 text-sm">
                      यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।
                      अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Bhagavad Gita 4.7 - Krishna's promise that applies to all avatars including Kalki
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Divine Promise */}
            <section className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Divine Assurance
              </h3>
              <p className="text-sm leading-relaxed">
                "At the end of Kali Yuga, when virtue is lost and the world is ruled by thieves, 
                I will be born to destroy the wicked and protect the righteous. The golden age will return, 
                and dharma will be restored in its fullness." This divine promise ensures that darkness 
                is never permanent and that cosmic justice ultimately prevails.
              </p>
            </section>
          </div>
        </div>

        {/* Avatar Navigation */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8">Explore All Avatars</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {avatars.map((avatar) => (
              <Link
                key={avatar.slug}
                href={`/deities/vishnu/avatars/${avatar.slug}`}
                className={`p-4 rounded-xl text-center transition-all ${
                  avatar.slug === 'kalki'
                    ? 'bg-purple-600 text-white shadow-lg scale-105'
                    : 'bg-gray-50 hover:bg-purple-50 text-gray-700 hover:text-purple-600'
                }`}
              >
                <div className="text-lg font-semibold">{avatar.order}</div>
                <div className="text-sm">{avatar.name}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Completion Message */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">🕉️ Dashavatar Complete 🕉️</h3>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            You have explored all ten avatars of Lord Vishnu - from Matsya's preservation of creation 
            to Kalki's future restoration of dharma. Each avatar represents divine love, protection, 
            and guidance across all ages, demonstrating that the Supreme is always present to 
            maintain cosmic balance and guide humanity toward truth and liberation.
          </p>
          <div className="mt-6">
            <Link 
              href="/deities/vishnu"
              className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-colors"
            >
              Return to Lord Vishnu Overview
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}