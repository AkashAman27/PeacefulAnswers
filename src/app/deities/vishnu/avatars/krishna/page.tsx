import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Calendar, MapPin, Sparkles, Heart, Music } from 'lucide-react'

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

const currentAvatar = avatars.find(a => a.slug === 'krishna')!
const prevAvatar = avatars.find(a => a.order === currentAvatar.order - 1)
const nextAvatar = avatars.find(a => a.order === currentAvatar.order + 1)

export default function KrishnaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer animate-[slideInFromLeft_0.8s_ease-out]">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              <span className="text-sm font-medium">Eighth Avatar of Dashavatar</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-200 to-orange-300 bg-clip-text text-transparent animate-[slideInFromLeft_1s_ease-out_0.2s_both]">
              कृष्ण अवतार
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 animate-[slideInFromLeft_1s_ease-out_0.4s_both]">Lord Krishna</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed animate-[slideInFromLeft_1s_ease-out_0.6s_both]">
              The divine cowherd, supreme teacher, and embodiment of love, wisdom, and cosmic consciousness
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
                alt="Lord Krishna - The divine cowherd and supreme teacher"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm opacity-90">Lord Krishna playing the divine flute in Vrindavan</p>
              </div>
            </div>

            {/* Story Section */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Heart className="w-6 h-6 mr-3 text-red-500" />
                The Divine Leela
              </h3>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <h4 className="text-xl font-semibold text-blue-900">The Divine Birth in Mathura</h4>
                <p className="text-gray-700 leading-relaxed">
                  Lord Krishna was born to Vasudeva and Devaki in the prison of the tyrant King Kamsa during the Dwapara Yuga. Born at midnight during a thunderstorm, the divine child appeared with four arms holding his eternal symbols, then transformed into a normal baby. His father carried him across the Yamuna River to safety in Gokul, where he was raised by Nanda and Yashoda.
                </p>

                <h4 className="text-xl font-semibold text-blue-900">The Enchanting Childhood - Bal Leela</h4>
                <p className="text-gray-700 leading-relaxed">
                  Krishna's childhood was filled with miraculous deeds and divine play. He lifted the mighty Govardhan Hill to protect the villagers from Indra's wrath, defeated numerous demons sent by Kamsa, and charmed everyone with his mischievous yet divine nature. His butter-stealing adventures, cow-herding, and playful activities revealed the joy and innocence of divine consciousness.
                </p>

                <h4 className="text-xl font-semibold text-blue-900">The Divine Lover - Radha Krishna</h4>
                <p className="text-gray-700 leading-relaxed">
                  In Vrindavan, Krishna's relationship with Radha and the Gopis represents the highest form of divine love (Prema Bhakti). The Raas Leela, his divine dance with the Gopis, symbolizes the soul's yearning for union with the divine. This cosmic love story transcends physical attraction to represent the eternal dance between the individual soul and supreme consciousness.
                </p>

                <h4 className="text-xl font-semibold text-blue-900">The Royal Prince and Divine Strategist</h4>
                <p className="text-gray-700 leading-relaxed">
                  After defeating Kamsa, Krishna established the kingdom of Dwaraka, a magnificent city built on reclaimed land from the sea. As a king, he displayed perfect governance while maintaining his divine nature. He became the friend, guide, and protector of the Pandavas, playing a crucial role in establishing dharma through divine diplomacy and strategic wisdom.
                </p>

                <h4 className="text-xl font-semibold text-blue-900">The Supreme Teacher - Bhagavad Gita</h4>
                <p className="text-gray-700 leading-relaxed">
                  On the battlefield of Kurukshetra, when Arjuna was paralyzed by moral confusion, Krishna revealed his divine nature and delivered the immortal teachings of the Bhagavad Gita. This supreme spiritual discourse covers the paths of knowledge (Jnana), action (Karma), and devotion (Bhakti), providing eternal guidance for spiritual liberation and righteous living.
                </p>

                <h4 className="text-xl font-semibold text-blue-900">The Cosmic Vision and Divine Departure</h4>
                <p className="text-gray-700 leading-relaxed">
                  Krishna showed Arjuna his Vishvarupa (cosmic form), revealing himself as the source and essence of all existence. After the Kurukshetra war and establishing dharma, Krishna departed from his earthly form while meditating under a tree, pierced by a hunter's arrow. His departure marked the end of Dwapara Yuga and the beginning of Kali Yuga.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                  <h5 className="font-semibold text-blue-900 mb-3">The Complete Avatar</h5>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    Krishna is considered the Purna Avatar - the complete incarnation of Vishnu. Unlike other avatars who appeared for specific purposes, Krishna displayed all divine qualities: child-like innocence, youthful charm, romantic love, royal majesty, supreme wisdom, and cosmic consciousness. He represents the fullness of divine personality accessible through love and devotion.
                  </p>
                </div>
              </div>
            </section>

            {/* Spiritual Significance */}
            <section className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Spiritual Significance</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Divine Love (Prema Bhakti)</h4>
                    <p className="text-gray-700">Krishna teaches that divine love is the highest spiritual path, accessible to all regardless of caste, creed, or social position.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Cosmic Consciousness</h4>
                    <p className="text-gray-700">Through the Bhagavad Gita, Krishna reveals the unity of all existence and the path to realizing one's true divine nature.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Divine Joy and Playfulness</h4>
                    <p className="text-gray-700">Krishna shows that spirituality includes joy, celebration, and divine play (Leela), not just serious austerity.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Integration of Life</h4>
                    <p className="text-gray-700">Unlike renunciant paths, Krishna teaches engagement with the world while maintaining divine consciousness and detachment.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Universal Accessibility</h4>
                    <p className="text-gray-700">Krishna made the highest spiritual teachings available to all, regardless of education, social status, or spiritual advancement.</p>
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
                  <h4 className="font-semibold text-green-800 mb-2">Krishna Janmashtami</h4>
                  <p className="text-sm text-gray-600 mb-2">Krishna's birthday on Ashtami of Krishna Paksha in Bhadrapada</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">Midnight celebrations with bhajan, dance, dramatic enactments of Krishna's childhood, and the breaking of earthen pots (Dahi Handi).</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Holi - Festival of Colors</h4>
                  <p className="text-sm text-gray-600 mb-2">Celebrates Krishna's playful nature and Radha-Krishna love</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">Especially vibrant in Vrindavan and Mathura, celebrating the eternal play of divine love with colors, music, and dance.</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Govardhan Puja</h4>
                  <p className="text-sm text-gray-600 mb-2">Celebrates Krishna lifting Mount Govardhan</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">Day after Diwali, devotees create food mountains and circumambulate Govardhan Hill, celebrating divine protection and humility.</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Gita Jayanti</h4>
                  <p className="text-sm text-gray-600 mb-2">Celebrates the teaching of Bhagavad Gita</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">On Ekadashi of Margashirsha Shukla Paksha, devotees recite and study the Gita, celebrating divine wisdom.</p>
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
                  <h4 className="font-semibold text-purple-800">Mathura-Vrindavan, Uttar Pradesh</h4>
                  <p className="text-sm text-gray-600">Krishna's birthplace and childhood playground, with countless temples and sites associated with his divine play.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Dwarka, Gujarat</h4>
                  <p className="text-sm text-gray-600">Krishna's royal capital, one of the Char Dham pilgrimage sites, where he ruled as a perfect king.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Kurukshetra, Haryana</h4>
                  <p className="text-gray-600 text-sm">The battlefield where Krishna delivered the Bhagavad Gita, now a major center for Krishna consciousness and Gita study.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Govardhan Hill, Uttar Pradesh</h4>
                  <p className="text-sm text-gray-600">Sacred hill lifted by Krishna, circumambulated by millions of devotees seeking divine blessings and protection.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Jagannath Puri, Odisha</h4>
                  <p className="text-sm text-gray-600">Where Krishna is worshipped as Jagannath with his siblings, famous for the grand Rath Yatra festival.</p>
                </div>
              </div>
            </section>

            {/* Quick Facts */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Avatar Order:</span>
                  <span>8th of Dashavatar</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Yuga:</span>
                  <span>Dwapara Yuga</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Birth Parents:</span>
                  <span>Vasudeva & Devaki</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Foster Parents:</span>
                  <span>Nanda & Yashoda</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Beloved:</span>
                  <span>Radha</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Kingdom:</span>
                  <span>Dwarka</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sacred Teaching:</span>
                  <span>Bhagavad Gita</span>
                </div>
              </div>
            </section>

            {/* Sacred Mantras */}
            <section className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sacred Mantras</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Hare Krishna Maha Mantra</h4>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-orange-800 font-medium text-center mb-2 text-sm">
                      हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे।
                      हरे राम हरे राम राम राम हरे हरे॥
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      The great mantra for the age of Kali, chanted for spiritual purification and Krishna consciousness
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Krishna Mantra</h4>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-orange-800 font-medium text-center mb-2">
                      ॐ श्री कृष्णाय नमः
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Simple yet powerful salutation to Lord Krishna
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Gita Mantra</h4>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-orange-800 font-medium text-center mb-2 text-sm">
                      सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।
                      अहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Krishna's promise in Bhagavad Gita 18.66 - "Surrender unto Me alone and I shall deliver you from all sins"
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Divine Love Teaching */}
            <section className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Music className="w-5 h-5 mr-2" />
                Divine Love & Joy
              </h3>
              <p className="text-sm leading-relaxed">
                "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु" - Always think of Me, be devoted to Me, worship Me, and bow to Me. 
                Krishna teaches that spiritual life should be filled with love, joy, and celebration. The divine flute calls all souls 
                to return to their eternal relationship with the Supreme, through pure love and devotion that transcends all barriers.
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
                  avatar.slug === 'krishna'
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