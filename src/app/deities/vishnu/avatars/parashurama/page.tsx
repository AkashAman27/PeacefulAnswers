import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Calendar, MapPin, Sparkles, Heart, Sword } from 'lucide-react'

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

const currentAvatar = avatars.find(a => a.slug === 'parashurama')!
const prevAvatar = avatars.find(a => a.order === currentAvatar.order - 1)
const nextAvatar = avatars.find(a => a.order === currentAvatar.order + 1)

export default function ParashuramaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-900 via-teal-900 to-emerald-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer animate-[slideInFromLeft_0.8s_ease-out]">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              <span className="text-sm font-medium">Sixth Avatar of Dashavatar</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-200 to-orange-300 bg-clip-text text-transparent animate-[slideInFromLeft_1s_ease-out_0.2s_both]">
              परशुराम अवतार
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 animate-[slideInFromLeft_1s_ease-out_0.4s_both]">Parashurama Avatar</h2>
            <p className="text-xl text-green-200 max-w-3xl mx-auto leading-relaxed animate-[slideInFromLeft_1s_ease-out_0.6s_both]">
              The immortal warrior-sage who wielded the divine axe to restore dharma
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
              className="flex items-center text-green-600 hover:text-green-800 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back to Vishnu
            </Link>
            
            <div className="flex items-center space-x-4">
              {prevAvatar && (
                <Link 
                  href={`/deities/vishnu/avatars/${prevAvatar.slug}`}
                  className="flex items-center text-gray-600 hover:text-green-600 transition-colors text-sm"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  {prevAvatar.name}
                </Link>
              )}
              <span className="text-gray-400">|</span>
              {nextAvatar && (
                <Link 
                  href={`/deities/vishnu/avatars/${nextAvatar.slug}`}
                  className="flex items-center text-gray-600 hover:text-green-600 transition-colors text-sm"
                >
                  {nextAvatar.name}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              )}
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
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-r from-green-100 to-teal-100">
              <Image
                src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=800&h=600&fit=crop"
                alt="Parashurama Avatar - Lord Vishnu as the divine warrior-sage"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm opacity-90">Parashurama, the immortal avatar with the divine axe</p>
              </div>
            </div>

            {/* Story Section */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Heart className="w-6 h-6 mr-3 text-red-500" />
                The Sacred Story
              </h3>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <h4 className="text-xl font-semibold text-green-900">The Birth of the Divine Warrior</h4>
                <p className="text-gray-700 leading-relaxed">
                  Parashurama was born as Rama to sage Jamadagni and Renuka in the Treta Yuga. Unlike previous avatars, he appeared in human form but retained divine consciousness throughout his life. From birth, he displayed extraordinary spiritual powers and was destined to be a bridge between the age of sages and the age of kings.
                </p>

                <h4 className="text-xl font-semibold text-green-900">The Divine Axe of Shiva</h4>
                <p className="text-gray-700 leading-relaxed">
                  Through intense penance, Parashurama pleased Lord Shiva, who granted him the invincible Parashu (divine axe), along with knowledge of all martial arts and warfare. This axe would never miss its target and would return to his hand after destroying evil. Shiva also blessed him with immortality until his mission was complete.
                </p>

                <h4 className="text-xl font-semibold text-green-900">The Trigger: Mother's Death</h4>
                <p className="text-gray-700 leading-relaxed">
                  The catalyst for Parashurama's mission came when the arrogant King Kartavirya Arjuna and his sons killed his father, Jamadagni, and stole their sacred cow. When Parashurama returned to find his father's mutilated body, his divine fury was awakened. He took a vow to eliminate the corrupt Kshatriya rulers who had abandoned dharma for tyranny.
                </p>

                <h4 className="text-xl font-semibold text-green-900">The Great Cleansing</h4>
                <p className="text-gray-700 leading-relaxed">
                  With his divine axe, Parashurama systematically eliminated corrupt Kshatriya dynasties across the earth, not once but twenty-one times over many generations. He didn't kill indiscriminately but targeted only those who had become tyrannical, corrupt, and oppressive to their subjects, particularly Brahmins and common people.
                </p>

                <h4 className="text-xl font-semibold text-green-900">The Restoration of Balance</h4>
                <p className="text-gray-700 leading-relaxed">
                  After accomplishing his mission, Parashurama donated all the lands he had conquered to the Brahmins in a great sacrifice, then retreated to perform penance. He established the Brahmin-Kshatriya balance and ensured that future rulers would remember their dharmic duties. His mission prepared the world for the advent of Lord Rama, the ideal king.
                </p>

                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                  <h5 className="font-semibold text-green-900 mb-3">The Immortal Guardian</h5>
                  <p className="text-sm text-green-800 leading-relaxed">
                    Unlike other avatars, Parashurama remains alive even today, serving as an immortal guardian (Chiranjivi) who appears whenever dharma needs protection. He is said to be waiting in the Mahendra mountains, ready to guide the Kalki Avatar in the final age. He also serves as a guru to worthy warriors and sages.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-green-900">The Meeting with Rama</h4>
                <p className="text-gray-700 leading-relaxed">
                  In a significant event, Parashurama encountered Lord Rama during the latter's return from Sita's swayamvara. Recognizing the divine nature of Rama, he presented his divine bow and tested Rama's strength. When Rama easily strung the bow, Parashurama acknowledged him as the perfect king and blessed his mission, symbolically passing the mantle of dharmic authority.
                </p>
              </div>
            </section>

            {/* Spiritual Significance */}
            <section className="bg-gradient-to-r from-teal-50 to-green-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Spiritual Significance</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-green-900">Divine Justice</h4>
                    <p className="text-gray-700">Parashurama represents divine justice that acts swiftly against corruption and tyranny, showing that even violence can be dharmic when used to protect the innocent.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-green-900">Balance of Power</h4>
                    <p className="text-gray-700">The avatar teaches the importance of checks and balances in society, ensuring no class becomes too powerful or corrupt at the expense of others.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-green-900">Warrior-Sage Ideal</h4>
                    <p className="text-gray-700">Parashurama embodies the perfect combination of spiritual wisdom and martial prowess, showing that true strength must be guided by dharmic knowledge.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-green-900">Righteous Anger</h4>
                    <p className="text-gray-700">The avatar demonstrates that anger, when channeled for righteous purposes and the protection of dharma, becomes a divine force for transformation.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-green-900">Eternal Vigilance</h4>
                    <p className="text-gray-700">As an immortal being, Parashurama represents the eternal vigilance needed to maintain dharma across the ages.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Festival Information */}
            <section className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-green-600" />
                Festival Celebrations
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Parashurama Jayanti</h4>
                  <p className="text-sm text-gray-600 mb-2">Celebrated on Tritiya of Shukla Paksha in Vaishakha month</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">Special prayers for justice, courage, and protection of dharma. Martial arts demonstrations and teachings of righteous conduct.</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Akshaya Tritiya</h4>
                  <p className="text-sm text-gray-600 mb-2">Parashurama Jayanti coincides with this auspicious day</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">Considered highly auspicious for beginning new ventures, especially those related to justice, learning martial arts, and spiritual practices.</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Guru Purnima</h4>
                  <p className="text-sm text-gray-600 mb-2">Parashurama honored as the eternal guru</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">Martial artists and spiritual seekers pay homage to Parashurama as the immortal teacher of both warfare and wisdom.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Regional Significance */}
            <section className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-purple-600" />
                Sacred Places & Temples
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-800">Parashurama Kshetra, Konkan</h4>
                  <p className="text-sm text-gray-600">The entire Konkan coast is believed to be created by Parashurama when he threw his axe from the Sahyadri mountains.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Mahendragiri, Odisha</h4>
                  <p className="text-sm text-gray-600">Sacred mountain where Parashurama is said to reside, performing penance and waiting for the Kalki Avatar.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Parashurama Temple, Kerala</h4>
                  <p className="text-sm text-gray-600">Multiple temples across Kerala, especially in coastal areas, dedicated to the avatar who created the land.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Renuka Temple, Maharashtra</h4>
                  <p className="text-sm text-gray-600">Temples dedicated to Parashurama's mother, where devotees pray for family harmony and dharmic living.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Kalari Training Centers</h4>
                  <p className="text-sm text-gray-600">Traditional martial arts schools, especially in Kerala, consider Parashurama as their founding guru and patron deity.</p>
                </div>
              </div>
            </section>

            {/* Quick Facts */}
            <section className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Avatar Order:</span>
                  <span>6th of Dashavatar</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Yuga:</span>
                  <span>Treta Yuga</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Form:</span>
                  <span>Warrior-Sage</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Weapon:</span>
                  <span>Divine Axe (Parashu)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Father:</span>
                  <span>Sage Jamadagni</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Mother:</span>
                  <span>Renuka</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Status:</span>
                  <span>Immortal (Chiranjivi)</span>
                </div>
              </div>
            </section>

            {/* Sacred Mantras */}
            <section className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sacred Mantras</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Parashurama Mantra</h4>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-orange-800 font-medium text-center mb-2">
                      ॐ परशुरामाय नमः
                    </p>
                    <p className="text-sm text-gray-600 text-center italic">
                      "Om Parashuramaaya Namah"
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Salutations to the divine warrior Parashurama
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Warrior's Protection Mantra</h4>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-orange-800 font-medium text-center mb-2 text-sm">
                      ॐ परशुधरं भृगुनन्दनं धर्मरक्षकं नमामि
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      "I bow to the axe-wielding son of Bhrigu, protector of dharma"
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Courage and Justice Mantra</h4>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-orange-800 font-medium text-center mb-2 text-sm">
                      ॐ क्षत्रियान्तकराय चिरञ्जीवाय नमः
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      "Salutations to the destroyer of corrupt warriors, the immortal one"
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Martial Arts Connection */}
            <section className="bg-gradient-to-r from-teal-500 to-green-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Sword className="w-5 h-5 mr-2" />
                Martial Arts Tradition
              </h3>
              <p className="text-sm leading-relaxed">
                Parashurama is considered the founder of martial arts in India, particularly Kalaripayattu in Kerala. 
                He established 64 different kalaris (training centers) and taught the complete science of warfare, 
                including the use of weapons, hand-to-hand combat, and the healing arts. His teachings emphasize 
                that martial skills must always serve dharma and never be used for personal aggrandizement.
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
                  avatar.slug === 'parashurama'
                    ? 'bg-green-600 text-white shadow-lg scale-105'
                    : 'bg-gray-50 hover:bg-green-50 text-gray-700 hover:text-green-600'
                }`}
              >
                <div className="text-lg font-semibold">{avatar.order}</div>
                <div className="text-sm">{avatar.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}