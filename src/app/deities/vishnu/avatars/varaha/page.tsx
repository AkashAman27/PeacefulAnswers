import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Calendar, MapPin, Sparkles, Heart, Mountain } from 'lucide-react'

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

const currentAvatar = avatars.find(a => a.slug === 'varaha')!
const prevAvatar = avatars.find(a => a.order === currentAvatar.order - 1)
const nextAvatar = avatars.find(a => a.order === currentAvatar.order + 1)

export default function VarahaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-amber-900 via-orange-900 to-red-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer animate-[slideInFromLeft_0.8s_ease-out]">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              <span className="text-sm font-medium">Third Avatar of Dashavatar</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-200 to-orange-300 bg-clip-text text-transparent animate-[slideInFromLeft_1s_ease-out_0.2s_both]">
              वराह अवतार
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 animate-[slideInFromLeft_1s_ease-out_0.4s_both]">Varaha Avatar</h2>
            <p className="text-xl text-amber-200 max-w-3xl mx-auto leading-relaxed animate-[slideInFromLeft_1s_ease-out_0.6s_both]">
              The Divine Boar who rescued Mother Earth from the cosmic depths
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
              className="flex items-center text-amber-600 hover:text-amber-800 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back to Vishnu
            </Link>
            
            <div className="flex items-center space-x-4">
              {prevAvatar && (
                <Link 
                  href={`/deities/vishnu/avatars/${prevAvatar.slug}`}
                  className="flex items-center text-gray-600 hover:text-amber-600 transition-colors text-sm"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  {prevAvatar.name}
                </Link>
              )}
              <span className="text-gray-400">|</span>
              {nextAvatar && (
                <Link 
                  href={`/deities/vishnu/avatars/${nextAvatar.slug}`}
                  className="flex items-center text-gray-600 hover:text-amber-600 transition-colors text-sm"
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
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-r from-amber-100 to-orange-100">
              <Image
                src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=600&fit=crop"
                alt="Varaha Avatar - Lord Vishnu as the divine boar rescuing Earth"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm opacity-90">Varaha lifting Earth (Bhudevi) from cosmic waters</p>
              </div>
            </div>

            {/* Story Section */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Heart className="w-6 h-6 mr-3 text-red-500" />
                The Sacred Story
              </h3>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <h4 className="text-xl font-semibold text-amber-900">The Crisis of Earth's Disappearance</h4>
                <p className="text-gray-700 leading-relaxed">
                  During the early cosmic ages, the demon king Hiranyaksha, blessed with immense power from Lord Brahma, grew arrogant and tyrannical. In his madness for domination, he dragged the entire Earth (Bhudevi) to the bottom of the cosmic ocean (Garbhodaka), plunging the universe into darkness and chaos.
                </p>

                <h4 className="text-xl font-semibold text-amber-900">The Divine Quest</h4>
                <p className="text-gray-700 leading-relaxed">
                  As all creation faced extinction, Lord Brahma meditated deeply to find a solution. From his nostril emerged a tiny boar, no bigger than a thumb. But as the divine being grew, it expanded to cosmic proportions, becoming Varaha - a magnificent boar with the strength to carry entire worlds.
                </p>

                <h4 className="text-xl font-semibold text-amber-900">The Heroic Rescue</h4>
                <p className="text-gray-700 leading-relaxed">
                  Varaha dove into the cosmic ocean, searching through the primordial waters for thousands of years. When he finally located Earth at the very bottom, he gently lifted her on his mighty tusks. As he rose to the surface, Hiranyaksha confronted him, leading to an epic battle that lasted for another thousand years.
                </p>

                <h4 className="text-xl font-semibold text-amber-900">Victory and Restoration</h4>
                <p className="text-gray-700 leading-relaxed">
                  After defeating Hiranyaksha with his divine mace, Varaha carefully placed Earth back in her cosmic position. The grateful Earth, in her form as Bhudevi, became his consort. Varaha then organized the continents, mountains, and oceans, restoring the natural order and making Earth habitable for all beings once again.
                </p>

                <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
                  <h5 className="font-semibold text-amber-900 mb-3">The Cosmic Significance</h5>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    Varaha's incarnation represents the divine principle of environmental protection and restoration. He symbolizes the cosmic force that maintains the stability of Earth and protects her from destructive elements. The avatar emphasizes the sacred relationship between divinity and nature, showing that the preservation of Earth is a divine responsibility.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-amber-900">The Marriage with Bhudevi</h4>
                <p className="text-gray-700 leading-relaxed">
                  After the rescue, Varaha and Bhudevi (Earth goddess) were united in cosmic marriage. From their union was born Narakasura (also called Bhauma), who initially ruled justly but later became corrupt. This story emphasizes the cyclical nature of creation, protection, and destruction in Hindu cosmology.
                </p>
              </div>
            </section>

            {/* Spiritual Significance */}
            <section className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Spiritual Significance</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-orange-900">Environmental Protector</h4>
                    <p className="text-gray-700">Varaha embodies the divine responsibility to protect and preserve the Earth, making him the original environmental protector deity.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-orange-900">Strength and Determination</h4>
                    <p className="text-gray-700">The boar symbolizes unwavering strength, determination, and the willingness to dive deep into difficulties to find solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-orange-900">Restoration of Dharma</h4>
                    <p className="text-gray-700">Varaha represents the cosmic principle that restores balance when natural order is disturbed by adharmic forces.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-orange-900">Divine Sacrifice</h4>
                    <p className="text-gray-700">The avatar teaches the importance of sacrificing personal comfort for the greater good and the protection of the innocent.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-orange-900">Divine-Nature Unity</h4>
                    <p className="text-gray-700">The marriage with Bhudevi symbolizes the inseparable connection between divine consciousness and material nature.</p>
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
                  <h4 className="font-semibold text-green-800 mb-2">Varaha Jayanti</h4>
                  <p className="text-sm text-gray-600 mb-2">Celebrated on the third day (Tritiya) of Shukla Paksha in Bhadrapada month</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">Devotees perform special abhishekam with mud, flowers, and fruits. Farmers especially honor Varaha for protecting their fields and crops.</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Bhoomi Puja</h4>
                  <p className="text-sm text-gray-600 mb-2">Earth worship ceremonies invoking Varaha's blessings</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">Performed before major construction, agriculture, or land-related activities. Includes offering prayers for environmental protection.</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Akshaya Tritiya</h4>
                  <p className="text-sm text-gray-600 mb-2">Auspicious day linked to Earth's abundance</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">Varaha is specially worshipped as the protector of Earth's treasures and agricultural prosperity.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Regional Significance */}
            <section className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-purple-600" />
                Sacred Temples
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-800">Varaha Temple, Pushkar</h4>
                  <p className="text-sm text-gray-600">Ancient temple in Rajasthan dedicated to Varaha Avatar, believed to be where Earth was first placed after rescue.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Tirumala Tirupati</h4>
                  <p className="text-sm text-gray-600">Lord Venkateshwara is considered a form of Varaha. The hill itself is said to represent the cosmic boar.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Varaha Cave, Mamallapuram</h4>
                  <p className="text-sm text-gray-600">Ancient rock-cut cave temple in Tamil Nadu featuring exquisite Varaha sculptures from the Pallava period.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Varaha Temple, Khajuraho</h4>
                  <p className="text-sm text-gray-600">Magnificent temple in Madhya Pradesh showcasing Varaha in various forms, representing different aspects of the avatar.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Bhumi Varaha Temple, Kerala</h4>
                  <p className="text-sm text-gray-600">Unique temple where Varaha and Bhudevi are worshipped together, emphasizing their cosmic union.</p>
                </div>
              </div>
            </section>

            {/* Quick Facts */}
            <section className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Avatar Order:</span>
                  <span>3rd of Dashavatar</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Yuga:</span>
                  <span>Satya Yuga</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Form:</span>
                  <span>Divine Boar</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Consort:</span>
                  <span>Bhudevi (Earth)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Son:</span>
                  <span>Narakasura</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Defeated:</span>
                  <span>Hiranyaksha</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Key Scripture:</span>
                  <span>Varaha Purana</span>
                </div>
              </div>
            </section>

            {/* Sacred Mantras */}
            <section className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sacred Mantras</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Varaha Mantra</h4>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-orange-800 font-medium text-center mb-2">
                      ॐ वराहाय नमः
                    </p>
                    <p className="text-sm text-gray-600 text-center italic">
                      "Om Varahaya Namah"
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Salutations to the divine boar
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Bhudevi Protection Mantra</h4>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-orange-800 font-medium text-center mb-2 text-sm">
                      ॐ भूदेवी रक्षकाय वराह रूपाय विष्णवे नमः
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Salutations to Vishnu in boar form, protector of Earth goddess
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Earth Blessing Mantra</h4>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-orange-800 font-medium text-center mb-2 text-sm">
                      ॐ पृथ्वी तुभ्यं शर्म अस्तु वराह संरक्षिते
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      May the Earth protected by Varaha bring you peace
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Environmental Message */}
            <section className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Mountain className="w-5 h-5 mr-2" />
                Environmental Teaching
              </h3>
              <p className="text-sm leading-relaxed">
                Varaha Avatar carries a powerful message for our times - the divine responsibility to protect Mother Earth. 
                As environmental challenges threaten our planet today, Varaha reminds us that safeguarding Earth is not 
                just human duty, but a sacred dharmic obligation that connects us to the divine cosmic order.
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
                  avatar.slug === 'varaha'
                    ? 'bg-amber-600 text-white shadow-lg scale-105'
                    : 'bg-gray-50 hover:bg-amber-50 text-gray-700 hover:text-amber-600'
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