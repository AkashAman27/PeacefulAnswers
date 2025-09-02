import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Calendar, MapPin, Sparkles, Heart } from 'lucide-react'

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

const currentAvatar = avatars.find(a => a.slug === 'kurma')!
const prevAvatar = avatars.find(a => a.order === currentAvatar.order - 1)
const nextAvatar = avatars.find(a => a.order === currentAvatar.order + 1)

export default function KurmaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer animate-[slideInFromLeft_0.8s_ease-out]">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              <span className="text-sm font-medium">Second Avatar of Dashavatar</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-200 to-orange-300 bg-clip-text text-transparent animate-[slideInFromLeft_1s_ease-out_0.2s_both]">
              कूर्म अवतार
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 animate-[slideInFromLeft_1s_ease-out_0.4s_both]">Kurma Avatar</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed animate-[slideInFromLeft_1s_ease-out_0.6s_both]">
              The Great Tortoise who supported Mount Mandara during the churning of the cosmic ocean
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
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back to Vishnu
            </Link>
            
            <div className="flex items-center space-x-4">
              {prevAvatar && (
                <Link 
                  href={`/deities/vishnu/avatars/${prevAvatar.slug}`}
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  {prevAvatar.name}
                </Link>
              )}
              <span className="text-gray-400">|</span>
              {nextAvatar && (
                <Link 
                  href={`/deities/vishnu/avatars/${nextAvatar.slug}`}
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors text-sm"
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
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-r from-blue-100 to-indigo-100">
              <Image
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
                alt="Kurma Avatar - Lord Vishnu as the divine tortoise"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm opacity-90">Kurma Avatar supporting Mount Mandara</p>
              </div>
            </div>

            {/* Story Section */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Heart className="w-6 h-6 mr-3 text-red-500" />
                The Sacred Story
              </h3>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <h4 className="text-xl font-semibold text-blue-900">The Churning of the Ocean (Samudra Manthan)</h4>
                <p className="text-gray-700 leading-relaxed">
                  The Kurma Avatar manifested during one of the most significant events in Hindu cosmology - the Samudra Manthan or churning of the cosmic ocean. When the Devas (gods) and Asuras (demons) decided to churn the ocean of milk to obtain the nectar of immortality (Amrita), they needed a stable base for Mount Mandara, which served as the churning rod.
                </p>

                <h4 className="text-xl font-semibold text-blue-900">The Divine Intervention</h4>
                <p className="text-gray-700 leading-relaxed">
                  As the churning began, Mount Mandara started sinking into the ocean due to its immense weight. The entire cosmic operation was at risk of failure. At this critical moment, Lord Vishnu manifested as Kurma, a gigantic tortoise, and positioned himself beneath the mountain to provide unwavering support.
                </p>

                <h4 className="text-xl font-semibold text-blue-900">The Great Sacrifice</h4>
                <p className="text-gray-700 leading-relaxed">
                  For a thousand years, Kurma bore the weight of Mount Mandara on his shell, enduring the tremendous friction and pressure as the mountain rotated during the churning process. His sacrifice enabled the emergence of fourteen precious ratnas (treasures) including Goddess Lakshmi, the divine physician Dhanvantari, and ultimately, the nectar of immortality.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                  <h5 className="font-semibold text-blue-900 mb-2">The Fourteen Treasures (Ratnas)</h5>
                  <div className="grid grid-cols-2 gap-2 text-sm text-blue-800">
                    <span>• Halahala (poison)</span>
                    <span>• Kamadhenu (wish-fulfilling cow)</span>
                    <span>• Airavata (white elephant)</span>
                    <span>• Uchchaihshravas (seven-headed horse)</span>
                    <span>• Kaustubha (precious jewel)</span>
                    <span>• Kalpavriksha (wish-fulfilling tree)</span>
                    <span>• Rambha (celestial nymph)</span>
                    <span>• Goddess Lakshmi</span>
                    <span>• Shree Devi</span>
                    <span>• Varuni (goddess of wine)</span>
                    <span>• Chandra (moon)</span>
                    <span>• Parijata (celestial tree)</span>
                    <span>• Dhanvantari</span>
                    <span>• Amrita (nectar)</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Spiritual Significance */}
            <section className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Spiritual Significance</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-orange-900">Foundation of Stability</h4>
                    <p className="text-gray-700">Kurma represents the stable foundation necessary for any great spiritual endeavor, symbolizing patience, perseverance, and unwavering support.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-orange-900">Cosmic Balance</h4>
                    <p className="text-gray-700">The avatar demonstrates the divine principle of maintaining cosmic equilibrium and supporting the greater good, even at personal cost.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-orange-900">Inner Strength</h4>
                    <p className="text-gray-700">Like the tortoise that can withdraw into its shell, Kurma teaches the importance of inner strength and self-reliance in times of difficulty.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-orange-900">Slow but Steady Progress</h4>
                    <p className="text-gray-700">The tortoise symbolizes the virtue of steady, consistent progress in spiritual practice, emphasizing that endurance often triumphs over speed.</p>
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
                  <h4 className="font-semibold text-green-800 mb-2">Kurma Jayanti</h4>
                  <p className="text-sm text-gray-600 mb-2">Observed during the waxing moon in the month of Vaishakha</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">Devotees observe fasts, perform special pujas, and recite the Kurma Purana. Turtle-shaped lamps are lit and floated in water bodies.</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Samudra Manthan Celebrations</h4>
                  <p className="text-sm text-gray-600 mb-2">Various regional festivals commemorate the churning of the ocean</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">Temples dedicated to Kurma Avatar host special abhishekams and organize community readings of the Samudra Manthan story.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Regional Significance */}
            <section className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-purple-600" />
                Regional Significance
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-800">Tamil Nadu</h4>
                  <p className="text-sm text-gray-600">The famous Srirangam temple has a separate shrine for Kurma Avatar. The Kurma Purana is widely read during Vaishakha month.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Kerala</h4>
                  <p className="text-sm text-gray-600">Kurma Avatar is especially venerated in coastal temples. Fishermen communities consider the tortoise sacred and avoid harming them.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Odisha</h4>
                  <p className="text-sm text-gray-600">The Jagannath temple traditions include references to Kurma Avatar, and special rituals are performed during turtle nesting seasons.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Karnataka</h4>
                  <p className="text-sm text-gray-600">The Udupi Krishna temple has beautiful artwork depicting the Samudra Manthan with Kurma supporting Mount Mandara.</p>
                </div>
              </div>
            </section>

            {/* Quick Facts */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Avatar Order:</span>
                  <span>2nd of Dashavatar</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Yuga:</span>
                  <span>Satya Yuga</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Form:</span>
                  <span>Tortoise</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Purpose:</span>
                  <span>Support Mount Mandara</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Duration:</span>
                  <span>1000 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Key Scripture:</span>
                  <span>Kurma Purana</span>
                </div>
              </div>
            </section>

            {/* Sacred Mantras */}
            <section className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sacred Mantras</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Kurma Mantra</h4>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-orange-800 font-medium text-center mb-2">
                      ॐ कूर्माय नमः
                    </p>
                    <p className="text-sm text-gray-600 text-center italic">
                      "Om Kurmaya Namah"
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Salutations to the divine tortoise
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Samudra Manthan Mantra</h4>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-orange-800 font-medium text-center mb-2">
                      ॐ क्षीरसागर मंथनाय कूर्मरूपाय विष्णवे नमः
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Salutations to Vishnu who took the tortoise form for churning the ocean of milk
                    </p>
                  </div>
                </div>
              </div>
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
                  avatar.slug === 'kurma'
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600'
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