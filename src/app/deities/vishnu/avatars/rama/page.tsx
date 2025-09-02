import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Calendar, MapPin, Sparkles, Heart, Shield } from 'lucide-react'

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

const currentAvatar = avatars.find(a => a.slug === 'rama')!
const prevAvatar = avatars.find(a => a.order === currentAvatar.order - 1)
const nextAvatar = avatars.find(a => a.order === currentAvatar.order + 1)

export default function RamaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-900 via-red-900 to-pink-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer animate-[slideInFromLeft_0.8s_ease-out]">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              <span className="text-sm font-medium">Seventh Avatar of Dashavatar</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-200 to-orange-300 bg-clip-text text-transparent animate-[slideInFromLeft_1s_ease-out_0.2s_both]">
              राम अवतार
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 animate-[slideInFromLeft_1s_ease-out_0.4s_both]">Lord Rama</h2>
            <p className="text-xl text-orange-200 max-w-3xl mx-auto leading-relaxed animate-[slideInFromLeft_1s_ease-out_0.6s_both]">
              Maryada Purushottama - The ideal man, perfect king, and embodiment of dharma
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
              className="flex items-center text-orange-600 hover:text-orange-800 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back to Vishnu
            </Link>
            
            <div className="flex items-center space-x-4">
              {prevAvatar && (
                <Link 
                  href={`/deities/vishnu/avatars/${prevAvatar.slug}`}
                  className="flex items-center text-gray-600 hover:text-orange-600 transition-colors text-sm"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  {prevAvatar.name}
                </Link>
              )}
              <span className="text-gray-400">|</span>
              {nextAvatar && (
                <Link 
                  href={`/deities/vishnu/avatars/${nextAvatar.slug}`}
                  className="flex items-center text-gray-600 hover:text-orange-600 transition-colors text-sm"
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
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-r from-orange-100 to-red-100">
              <Image
                src="https://images.unsplash.com/photo-1578528011634-50c02b2e6ce6?w=800&h=600&fit=crop"
                alt="Lord Rama - The ideal king and perfect human"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm opacity-90">Lord Rama with Sita, Lakshmana, and Hanuman</p>
              </div>
            </div>

            {/* Story Section */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Heart className="w-6 h-6 mr-3 text-red-500" />
                The Sacred Ramayana
              </h3>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <h4 className="text-xl font-semibold text-orange-900">The Divine Birth in Ayodhya</h4>
                <p className="text-gray-700 leading-relaxed">
                  Lord Rama was born to King Dasharatha and Queen Kausalya in Ayodhya during the Treta Yuga. His birth was the result of the Putrakameshti Yajna performed to obtain a son. Rama was born with all divine qualities, destined to be Maryada Purushottama - the perfect follower of dharma and the ideal human being.
                </p>

                <h4 className="text-xl font-semibold text-orange-900">The Ideal Prince and Son</h4>
                <p className="text-gray-700 leading-relaxed">
                  From childhood, Rama displayed perfect virtues - obedience to parents, respect for teachers, love for brothers, and compassion for all beings. Under the guidance of sage Vasishtha and later Sage Vishwamitra, he mastered all arts of war and statecraft while maintaining spiritual wisdom and moral purity.
                </p>

                <h4 className="text-xl font-semibold text-orange-900">The Perfect Marriage</h4>
                <p className="text-gray-700 leading-relaxed">
                  In Sita's swayamvara, Rama lifted and strung the mighty bow of Lord Shiva, winning the hand of Sita, who was the incarnation of Goddess Lakshmi. Their marriage represented the divine union of Vishnu and Lakshmi, establishing the ideal of love, devotion, and mutual respect in matrimony.
                </p>

                <h4 className="text-xl font-semibold text-orange-900">The Great Sacrifice - Fourteen Years of Exile</h4>
                <p className="text-gray-700 leading-relaxed">
                  When Queen Kaikeyi demanded that Rama be exiled for fourteen years to fulfill two boons granted by Dasharatha, Rama accepted without question, demonstrating perfect obedience to his father's word. Accompanied by Sita and Lakshmana, he willingly gave up the throne to live as an ascetic in the forest.
                </p>

                <h4 className="text-xl font-semibold text-orange-900">The Abduction of Sita and the Great War</h4>
                <p className="text-gray-700 leading-relaxed">
                  The demon king Ravana, driven by desire and pride, abducted Sita from their forest hermitage. This act of adharma led to the great war between Rama's forces (including the devoted Hanuman and the mighty Sugriva's monkey army) and Ravana's demons in Lanka. The war represented the eternal battle between good and evil.
                </p>

                <h4 className="text-xl font-semibold text-orange-900">Victory and Return - Ram Rajya</h4>
                <p className="text-gray-700 leading-relaxed">
                  After defeating Ravana and rescuing Sita, Rama returned to Ayodhya to establish Ram Rajya (Rama's rule), considered the golden age of dharmic governance. His kingdom was characterized by justice, prosperity, peace, and the welfare of all beings, becoming the ideal model for righteous leadership.
                </p>

                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
                  <h5 className="font-semibold text-orange-900 mb-3">The Eternal Ideals</h5>
                  <p className="text-sm text-orange-800 leading-relaxed">
                    Lord Rama established eternal ideals for human conduct: as a son (perfect obedience), as a brother (loving sacrifice), as a husband (devoted protection), as a king (dharmic governance), and as a human being (moral excellence). His life serves as the ultimate guide for righteous living in all relationships and circumstances.
                  </p>
                </div>
              </div>
            </section>

            {/* Spiritual Significance */}
            <section className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Spiritual Significance</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-orange-900">Maryada Purushottama</h4>
                    <p className="text-gray-700">Rama represents the perfect human who never transgresses dharmic boundaries, showing how to live with moral excellence in all circumstances.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-orange-900">Divine Leadership</h4>
                    <p className="text-gray-700">Ram Rajya establishes the ideal of righteous governance where the ruler serves as a father to subjects, ensuring justice and welfare for all.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-orange-900">Devotion and Surrender</h4>
                    <p className="text-gray-700">Rama's complete surrender to dharma and divine will teaches the highest spiritual principle of surrendering ego to cosmic order.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-orange-900">Universal Brotherhood</h4>
                    <p className="text-gray-700">Rama's friendship with Sugriva, devotion from Hanuman, and respect for all beings regardless of species shows universal love and acceptance.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-orange-900">Triumph of Good</h4>
                    <p className="text-gray-700">The victory over Ravana symbolizes the inevitable triumph of dharma over adharma, righteousness over ego-driven desires.</p>
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
                  <h4 className="font-semibold text-green-800 mb-2">Ram Navami</h4>
                  <p className="text-sm text-gray-600 mb-2">Rama's birthday on Navami of Chaitra Shukla Paksha</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">Grand celebrations with bhajan, kirtan, processions, and readings from Ramayana. Temples organize special abhishekam and community feasts.</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Diwali - Rama's Return</h4>
                  <p className="text-sm text-gray-600 mb-2">Celebration of Rama's victorious return to Ayodhya</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">The festival of lights celebrates Rama's return after 14 years of exile, symbolizing the victory of light over darkness, good over evil.</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Dussehra - Victory over Ravana</h4>
                  <p className="text-sm text-gray-600 mb-2">Celebrates Rama's victory over the demon king</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">Ten-day celebration culminating in burning Ravana's effigy, representing the destruction of ego and evil tendencies.</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Vivaha Panchami</h4>
                  <p className="text-sm text-gray-600 mb-2">Celebrates the marriage of Rama and Sita</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">Special celebrations in Ayodhya and Janakpur with ceremonial wedding rituals, symbolizing divine union and marital ideals.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Regional Significance */}
            <section className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-purple-600" />
                Sacred Places
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-800">Ayodhya, Uttar Pradesh</h4>
                  <p className="text-sm text-gray-600">Rama's birthplace and capital, home to Ram Janmabhoomi temple and numerous ancient sites from the Ramayana.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Janakpur, Nepal</h4>
                  <p className="text-sm text-gray-600">Birthplace of Sita, where the divine marriage took place. Major pilgrimage site with beautiful temples and cultural traditions.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Rameshwaram, Tamil Nadu</h4>
                  <p className="text-sm text-gray-600">Where Rama prayed to Shiva before crossing to Lanka. One of the Char Dham, sacred to both Shaivites and Vaishnavites.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Chitrakoot, Madhya Pradesh</h4>
                  <p className="text-sm text-gray-600">Where Rama, Sita, and Lakshmana spent significant time during exile. Numerous temples and sites mark their presence.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Panchavati, Maharashtra</h4>
                  <p className="text-sm text-gray-600">Location of Rama's exile hermitage near Nashik, where Sita was abducted. Sacred to the Ramayana narrative.</p>
                </div>
              </div>
            </section>

            {/* Quick Facts */}
            <section className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Avatar Order:</span>
                  <span>7th of Dashavatar</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Yuga:</span>
                  <span>Treta Yuga</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Father:</span>
                  <span>King Dasharatha</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Mother:</span>
                  <span>Queen Kausalya</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Consort:</span>
                  <span>Sita Devi</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Brothers:</span>
                  <span>Lakshmana, Bharata, Shatrughna</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Weapon:</span>
                  <span>Divine Bow (Kodanda)</span>
                </div>
              </div>
            </section>

            {/* Sacred Mantras */}
            <section className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sacred Mantras</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Rama Mantra</h4>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-orange-800 font-medium text-center mb-2">
                      ॐ श्री राम जय राम जय जय राम
                    </p>
                    <p className="text-sm text-gray-600 text-center italic">
                      "Om Shree Ram Jai Ram Jai Jai Ram"
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Victory to Lord Rama - the most popular rama mantra
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Maha Mantra</h4>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-orange-800 font-medium text-center mb-2 text-sm">
                      ॐ श्री रामाय रामभद्राय रामचन्द्राय वेधसे।
                      रघुनाथाय नाथाय सीतायाः पतये नमः॥
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Comprehensive prayer honoring all aspects of Lord Rama
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Taraka Mantra</h4>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-orange-800 font-medium text-center mb-2">
                      राम राम राम
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      The liberating name - said to free the soul when chanted with devotion
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Dharmic Teaching */}
            <section className="bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Eternal Dharmic Ideals
              </h3>
              <p className="text-sm leading-relaxed">
                "धर्म एव हतो हन्ति धर्मो रक्षति रक्षितः" - Dharma destroys those who destroy it, and protects those who protect it. 
                Lord Rama's life exemplifies this principle, showing that unwavering adherence to righteousness, even through personal 
                sacrifice, ultimately leads to victory and establishes lasting peace and prosperity for all.
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
                  avatar.slug === 'rama'
                    ? 'bg-orange-600 text-white shadow-lg scale-105'
                    : 'bg-gray-50 hover:bg-orange-50 text-gray-700 hover:text-orange-600'
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