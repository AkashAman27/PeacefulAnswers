import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Calendar, MapPin, Sparkles, Heart, Crown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Vamana Avatar - The Dwarf Incarnation of Lord Vishnu | PeacefulAnswers',
  description: 'Discover Vamana, the dwarf brahmin avatar of Lord Vishnu who humbled King Bali with three cosmic steps. Learn about dharma, humility, and the power of divine justice.',
  keywords: 'Vamana Avatar, dwarf incarnation, Vishnu avatar, King Bali, three steps, cosmic stride, Trivikrama, humility, dharma, fifth avatar, Hindu mythology',
}

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

const currentAvatar = avatars.find(a => a.slug === 'vamana')!
const prevAvatar = avatars.find(a => a.order === currentAvatar.order - 1)
const nextAvatar = avatars.find(a => a.order === currentAvatar.order + 1)

export default function VamanaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-yellow-900 via-orange-900 to-amber-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer animate-[slideInFromLeft_0.8s_ease-out]">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              <span className="text-sm font-medium">Fifth Avatar of Dashavatar</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-200 to-orange-300 bg-clip-text text-transparent animate-[slideInFromLeft_1s_ease-out_0.2s_both]">
              वामन अवतार
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 animate-[slideInFromLeft_1s_ease-out_0.4s_both]">Vamana Avatar</h2>
            <p className="text-xl text-yellow-200 max-w-3xl mx-auto leading-relaxed animate-[slideInFromLeft_1s_ease-out_0.6s_both]">
              The divine dwarf Brahmin who measured the three worlds in three steps
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
              className="flex items-center text-yellow-600 hover:text-yellow-800 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back to Vishnu
            </Link>
            
            <div className="flex items-center space-x-4">
              {prevAvatar && (
                <Link 
                  href={`/deities/vishnu/avatars/${prevAvatar.slug}`}
                  className="flex items-center text-gray-600 hover:text-yellow-600 transition-colors text-sm"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  {prevAvatar.name}
                </Link>
              )}
              <span className="text-gray-400">|</span>
              {nextAvatar && (
                <Link 
                  href={`/deities/vishnu/avatars/${nextAvatar.slug}`}
                  className="flex items-center text-gray-600 hover:text-yellow-600 transition-colors text-sm"
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
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-r from-yellow-100 to-amber-100">
              <Image
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop"
                alt="Vamana Avatar - Lord Vishnu as the divine dwarf Brahmin"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm opacity-90">Vamana asking for three steps of land from King Bali</p>
              </div>
            </div>

            {/* Story Section */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Heart className="w-6 h-6 mr-3 text-red-500" />
                The Sacred Story
              </h3>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <h4 className="text-xl font-semibold text-yellow-900">The Mighty King Bali</h4>
                <p className="text-gray-700 leading-relaxed">
                  King Mahabali, grandson of the devotee Prahlada, was a noble and generous Asura king who ruled justly and compassionately. Under his rule, his kingdom prospered magnificently - there was no poverty, crime, or suffering. However, his growing power began to overshadow the gods, who felt threatened and approached Vishnu for help.
                </p>

                <h4 className="text-xl font-semibold text-yellow-900">The Divine Plan</h4>
                <p className="text-gray-700 leading-relaxed">
                  To restore cosmic balance without destroying the virtuous king, Vishnu incarnated as Vamana, a dwarf Brahmin. He appeared at King Bali's grand Ashvamedha sacrifice, where the king had vowed to grant any request from Brahmins. The sight of the radiant, diminutive Brahmin boy filled everyone with divine awe.
                </p>

                <h4 className="text-xl font-semibold text-yellow-900">The Humble Request</h4>
                <p className="text-gray-700 leading-relaxed">
                  When Bali asked what he desired, Vamana humbly requested just three steps of land measured by his own feet. The king's guru, Shukracharya, sensed divinity in the boy and warned Bali against granting the request. But the noble king, bound by his word and dharma, proceeded with the donation despite the warning.
                </p>

                <h4 className="text-xl font-semibold text-yellow-900">The Cosmic Transformation</h4>
                <p className="text-gray-700 leading-relaxed">
                  As Bali poured water to formalize the gift, Vamana began expanding into his cosmic form - Trivikrama. With his first gigantic step, he covered the entire earth. With his second step, he covered the heavens and all the upper worlds. When he asked where to place his third step, Bali realized he was in the presence of the Supreme Lord himself.
                </p>

                <h4 className="text-xl font-semibold text-yellow-900">The Ultimate Devotion</h4>
                <p className="text-gray-700 leading-relaxed">
                  Understanding the divine test, King Bali offered his own head for the third step, demonstrating complete surrender. Pleased with his devotion and dharmic conduct, Vishnu granted him the rulership of Patala (the netherworld) and promised to return his earthly kingdom during the next cosmic cycle. Bali also received the boon of immortality and Vishnu's eternal presence as his guardian.
                </p>

                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                  <h5 className="font-semibold text-yellow-900 mb-3">The Festival of Return</h5>
                  <p className="text-sm text-yellow-800 leading-relaxed">
                    Vishnu granted King Bali permission to visit his former subjects once every year. This annual visit is celebrated as Onam in Kerala, where people welcome their beloved king with flowers, feasts, and joy, remembering the golden age of his rule when truth, prosperity, and happiness prevailed everywhere.
                  </p>
                </div>
              </div>
            </section>

            {/* Spiritual Significance */}
            <section className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Spiritual Significance</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-yellow-900">Cosmic Balance</h4>
                    <p className="text-gray-700">Vamana teaches that even virtuous power must be balanced to maintain cosmic harmony, and true greatness lies in surrender to the divine will.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-yellow-900">Humility and Wisdom</h4>
                    <p className="text-gray-700">The dwarf form represents the power of humility and the wisdom that great things can come in small packages.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-yellow-900">Divine Deception for Good</h4>
                    <p className="text-gray-700">The avatar shows that divine deception (Maya) can be used for righteous purposes when it serves the greater cosmic good.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-yellow-900">Honor and Sacrifice</h4>
                    <p className="text-gray-700">Bali's story teaches the importance of keeping one's word and the spiritual merit in sacrificing personal interests for dharma.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-yellow-900">Cyclical Time</h4>
                    <p className="text-gray-700">The promise of Bali's return represents the Hindu concept of cyclical time and the eventual restoration of golden ages.</p>
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
                  <h4 className="font-semibold text-green-800 mb-2">Onam Festival</h4>
                  <p className="text-sm text-gray-600 mb-2">Major festival in Kerala celebrating King Bali's annual return</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">Ten-day celebration with flower carpets (Pookalam), traditional feasts (Sadhya), boat races, and cultural programs welcoming King Mahabali.</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Vamana Jayanti</h4>
                  <p className="text-sm text-gray-600 mb-2">Celebrated on Dwadashi of Shukla Paksha in Bhadrapada month</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">Special prayers to Vamana form of Vishnu, with emphasis on charity, humility, and dharmic values.</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Bali Paadyami</h4>
                  <p className="text-sm text-gray-600 mb-2">Celebrated in Karnataka and Andhra Pradesh</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">Festival honoring King Bali's devotion and Vamana's cosmic form, with traditional rangoli and special offerings.</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Govi-Ganesha</h4>
                  <p className="text-sm text-gray-600 mb-2">Maharashtra's celebration connecting to the Vamana story</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">Traditional celebrations include themes of humility, charity, and dharmic conduct inspired by Vamana and Bali.</p>
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
                  <h4 className="font-semibold text-purple-800">Thrikkakara Temple, Kerala</h4>
                  <p className="text-sm text-gray-600">Ancient temple believed to be where Vamana placed his foot, epicenter of Onam celebrations.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Ulagalantha Perumal, Kanchipuram</h4>
                  <p className="text-sm text-gray-600">Famous Tamil Nadu temple dedicated to Trivikrama (cosmic form of Vamana), one of the Divya Desams.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Vamana Temple, Khajuraho</h4>
                  <p className="text-sm text-gray-600">Magnificent temple in Madhya Pradesh with exquisite sculptures depicting the Vamana story.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Trivikrama Temple, Maharashtra</h4>
                  <p className="text-sm text-gray-600">Ancient temple celebrating the cosmic form, with special festivals during Bhadrapada month.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Vamanamoorthy Temple, Kerala</h4>
                  <p className="text-sm text-gray-600">Multiple temples across Kerala dedicated to different aspects of Vamana avatar and the Bali story.</p>
                </div>
              </div>
            </section>

            {/* Quick Facts */}
            <section className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Avatar Order:</span>
                  <span>5th of Dashavatar</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Yuga:</span>
                  <span>Treta Yuga</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Form:</span>
                  <span>Dwarf Brahmin</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Cosmic Form:</span>
                  <span>Trivikrama</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">King:</span>
                  <span>Mahabali</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Festival:</span>
                  <span>Onam</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Key Virtue:</span>
                  <span>Humility</span>
                </div>
              </div>
            </section>

            {/* Sacred Mantras */}
            <section className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sacred Mantras</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Vamana Mantra</h4>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-orange-800 font-medium text-center mb-2">
                      ॐ वामनाय नमः
                    </p>
                    <p className="text-sm text-gray-600 text-center italic">
                      "Om Vamanaya Namah"
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Salutations to the divine dwarf
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Trivikrama Mantra</h4>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-orange-800 font-medium text-center mb-2 text-sm">
                      ॐ त्रिविक्रमाय विष्णवे नमः
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Salutations to Vishnu as Trivikrama, who measured the three worlds
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Bali's Surrender Prayer</h4>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-orange-800 font-medium text-center mb-2 text-sm">
                      ॐ शरणागतदीनार्तपरित्राणपरायणे।
                      सर्वस्यार्तिहरे देव नारायण नमोऽस्तु ते॥
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      "O Narayana, protector of the surrendered and distressed, remover of all sufferings, salutations to you"
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Cultural Message */}
            <section className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Crown className="w-5 h-5 mr-2" />
                Eternal Teaching
              </h3>
              <p className="text-sm leading-relaxed">
                The Vamana avatar teaches that true greatness lies in humility, that keeping one's word is more 
                important than personal gain, and that even divine deception can serve righteous purposes. 
                King Bali's devoted surrender shows that spiritual evolution comes through accepting divine will 
                with grace and devotion.
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
                  avatar.slug === 'vamana'
                    ? 'bg-yellow-600 text-white shadow-lg scale-105'
                    : 'bg-gray-50 hover:bg-yellow-50 text-gray-700 hover:text-yellow-600'
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