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

const currentAvatar = avatars.find(a => a.slug === 'narasimha')!
const prevAvatar = avatars.find(a => a.order === currentAvatar.order - 1)
const nextAvatar = avatars.find(a => a.order === currentAvatar.order + 1)

export default function NarasimhaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-900 via-rose-900 to-pink-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer animate-[slideInFromLeft_0.8s_ease-out]">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              <span className="text-sm font-medium">Fourth Avatar of Dashavatar</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-200 to-orange-300 bg-clip-text text-transparent animate-[slideInFromLeft_1s_ease-out_0.2s_both]">
              नरसिंह अवतार
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 animate-[slideInFromLeft_1s_ease-out_0.4s_both]">Narasimha Avatar</h2>
            <p className="text-xl text-red-200 max-w-3xl mx-auto leading-relaxed animate-[slideInFromLeft_1s_ease-out_0.6s_both]">
              The fierce Man-Lion who destroyed evil and protected his devoted child
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
              className="flex items-center text-red-600 hover:text-red-800 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back to Vishnu
            </Link>
            
            <div className="flex items-center space-x-4">
              {prevAvatar && (
                <Link 
                  href={`/deities/vishnu/avatars/${prevAvatar.slug}`}
                  className="flex items-center text-gray-600 hover:text-red-600 transition-colors text-sm"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  {prevAvatar.name}
                </Link>
              )}
              <span className="text-gray-400">|</span>
              {nextAvatar && (
                <Link 
                  href={`/deities/vishnu/avatars/${nextAvatar.slug}`}
                  className="flex items-center text-gray-600 hover:text-red-600 transition-colors text-sm"
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
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-r from-red-100 to-pink-100">
              <Image
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
                alt="Narasimha Avatar - Lord Vishnu as the fierce Man-Lion"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm opacity-90">Narasimha protecting Prahlada from Hiranyakashipu</p>
              </div>
            </div>

            {/* Story Section */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Heart className="w-6 h-6 mr-3 text-red-500" />
                The Sacred Story
              </h3>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <h4 className="text-xl font-semibold text-red-900">The Tyrannical Hiranyakashipu</h4>
                <p className="text-gray-700 leading-relaxed">
                  Hiranyakashipu, the brother of Hiranyaksha (slain by Varaha), obtained a powerful boon from Lord Brahma after severe penance. The boon protected him from death by man or beast, during day or night, inside or outside, on earth or sky, and by any weapon. Drunk with power, he declared himself God and demanded worship from all beings.
                </p>

                <h4 className="text-xl font-semibold text-red-900">The Devotion of Prahlada</h4>
                <p className="text-gray-700 leading-relaxed">
                  Hiranyakashipu's own son, Prahlada, was a pure devotee of Lord Vishnu from birth. Despite his father's threats, tortures, and attempts to kill him, young Prahlada never wavered in his devotion. He constantly chanted "Narayana" and saw Vishnu everywhere, enraging his demon father further.
                </p>

                <h4 className="text-xl font-semibold text-red-900">The Divine Challenge</h4>
                <p className="text-gray-700 leading-relaxed">
                  In a fit of rage, Hiranyakashipu kicked a pillar in his palace, mocking Prahlada's claim that Vishnu exists everywhere. "Is your Vishnu in this pillar too?" he roared. As the pillar cracked, the supreme moment had arrived for divine intervention to protect the innocent devotee.
                </p>

                <h4 className="text-xl font-semibold text-red-900">The Terrifying Manifestation</h4>
                <p className="text-gray-700 leading-relaxed">
                  From the shattered pillar emerged Narasimha - half man, half lion - a form that transcended Brahma's boon. Neither fully man nor beast, with eyes like molten gold and a mane like blazing fire, Narasimha was the embodiment of divine fury against injustice and protector of pure devotion.
                </p>

                <h4 className="text-xl font-semibold text-red-900">The Perfect Justice</h4>
                <p className="text-gray-700 leading-relaxed">
                  At twilight (neither day nor night), on the threshold (neither inside nor outside), Narasimha placed Hiranyakashipu on his lap (neither earth nor sky) and tore him apart with his claws (not a weapon), perfectly circumventing every condition of the boon. Justice was served while protecting the innocent.
                </p>

                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                  <h5 className="font-semibold text-red-900 mb-3">The Divine Promise</h5>
                  <p className="text-sm text-red-800 leading-relaxed">
                    After destroying the demon, Narasimha's fury was immense. Only when innocent Prahlada approached fearlessly and touched his feet with pure love did the Lord calm down. This incident established the eternal promise: "Wherever there is pure devotion under threat, divine protection will manifest instantaneously."
                  </p>
                </div>
              </div>
            </section>

            {/* Spiritual Significance */}
            <section className="bg-gradient-to-r from-rose-50 to-red-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Spiritual Significance</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-red-900">Divine Protection</h4>
                    <p className="text-gray-700">Narasimha represents the supreme promise that divine protection is always available to those who surrender with pure devotion.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-red-900">Destruction of Ego</h4>
                    <p className="text-gray-700">The fierce form symbolizes the divine power that destroys the ego-demon within every spiritual seeker.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-red-900">Transcendence of Duality</h4>
                    <p className="text-gray-700">The man-lion form represents the transcendence of all dualities and limitations in spiritual realization.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-red-900">Righteous Anger</h4>
                    <p className="text-gray-700">Narasimha teaches that divine anger against injustice and oppression is not only justified but necessary for cosmic balance.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-red-900">Fearlessness in Faith</h4>
                    <p className="text-gray-700">Prahlada's example shows that true devotees remain fearless even in the face of death, knowing divine protection is assured.</p>
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
                  <h4 className="font-semibold text-green-800 mb-2">Narasimha Jayanti</h4>
                  <p className="text-sm text-gray-600 mb-2">Celebrated on Chaturdashi of Shukla Paksha in Vaishakha month</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">Grand celebrations with recitations of Narasimha Kavacham, special abhishekams, and community prayers for protection from evil.</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Holika Dahan</h4>
                  <p className="text-sm text-gray-600 mb-2">Connected to Prahlada's story of divine protection</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">The festival celebrates Prahlada's escape from the fire through Narasimha's protection, symbolizing the triumph of devotion over evil.</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Narasimha Chaturdashi</h4>
                  <p className="text-sm text-gray-600 mb-2">Monthly observance on every Chaturdashi</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">Devotees observe fasts, chant protective mantras, and seek blessings for overcoming obstacles and fears.</p>
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
                  <h4 className="font-semibold text-purple-800">Ahobilam, Andhra Pradesh</h4>
                  <p className="text-sm text-gray-600">Nine temples dedicated to different forms of Narasimha, believed to be where the avatar manifested.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Narasimha Temple, Namakkal</h4>
                  <p className="text-sm text-gray-600">Famous Tamil Nadu temple where Narasimha is carved inside a single rock, representing emergence from the pillar.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Simhachalam Temple</h4>
                  <p className="text-sm text-gray-600">Ancient temple in Visakhapatnam where Narasimha is worshipped as Varaha Lakshmi Narasimha.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Melkote, Karnataka</h4>
                  <p className="text-sm text-gray-600">Cheluvanarayana Swamy temple features beautiful Narasimha processional deities and annual festivals.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Narasimha Temple, Hyderabad</h4>
                  <p className="text-sm text-gray-600">Ancient Yadagirigutta temple where Narasimha appeared to protect devotees, now a major pilgrimage center.</p>
                </div>
              </div>
            </section>

            {/* Quick Facts */}
            <section className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Avatar Order:</span>
                  <span>4th of Dashavatar</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Yuga:</span>
                  <span>Satya Yuga</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Form:</span>
                  <span>Half-man, Half-lion</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Devotee:</span>
                  <span>Prahlada</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Defeated:</span>
                  <span>Hiranyakashipu</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Time:</span>
                  <span>Twilight (Sandhya)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Weapon:</span>
                  <span>Divine Claws</span>
                </div>
              </div>
            </section>

            {/* Sacred Mantras */}
            <section className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sacred Mantras</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Narasimha Mantra</h4>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-orange-800 font-medium text-center mb-2">
                      ॐ नरसिंहाय नमः
                    </p>
                    <p className="text-sm text-gray-600 text-center italic">
                      "Om Narasimhaya Namah"
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Salutations to the Man-Lion avatar
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Protection Mantra</h4>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-orange-800 font-medium text-center mb-2 text-sm">
                      ॐ उग्रं वीरं महाविष्णुं ज्वलन्तं सर्वतो मुखम्।
                      नृसिंहं भीषणं भद्रं मृत्युमृत्युं नमाम्यहम्॥
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      "I bow to Narasimha, fierce and heroic, the great Vishnu, blazing with faces everywhere, terrifying yet auspicious, the death of death itself"
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Prahlada's Prayer</h4>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-orange-800 font-medium text-center mb-2 text-sm">
                      ॐ नमो भगवते वासुदेवाय
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      The eternal mantra chanted by Prahlada
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Devotional Teaching */}
            <section className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Divine Protection Promise
              </h3>
              <p className="text-sm leading-relaxed">
                "Wherever My devotee is in danger, wherever dharma is threatened, wherever the innocent cry for help - 
                there I manifest to protect. No power in the universe can harm one who has taken refuge in Me with pure love."
                <br/><br/>
                <em>- The eternal promise of Narasimha to all devotees</em>
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
                  avatar.slug === 'narasimha'
                    ? 'bg-red-600 text-white shadow-lg scale-105'
                    : 'bg-gray-50 hover:bg-red-50 text-gray-700 hover:text-red-600'
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