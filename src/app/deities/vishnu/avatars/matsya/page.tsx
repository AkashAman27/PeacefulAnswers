import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Matsya Avatar - The Fish Incarnation of Lord Vishnu | PeacefulAnswers',
  description: 'Discover Matsya, the first avatar of Lord Vishnu who saved the world from the great deluge. Learn about the divine fish incarnation, its significance, and the cosmic rescue of Vedas and humanity.',
  keywords: 'Matsya Avatar, fish incarnation, Vishnu avatar, great flood, Pralaya, cosmic deluge, Vedas rescue, Hindu mythology, first avatar, divine fish',
}
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Book, 
  Star,
  Waves,
  Ship,
  Scroll,
  Crown,
  Sparkles
} from 'lucide-react'

export default function MatsyaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-cyan-50 to-white">
      {/* Navigation */}
      <div className="bg-white border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/deities/vishnu"
              className="flex items-center gap-2 text-blue-900 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Back to Lord Vishnu</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Avatar 1 of 10</span>
              <Link
                href="/deities/vishnu/avatars/kurma"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span className="font-medium">Next: Kurma</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 via-cyan-900 to-teal-900">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer animate-[slideInFromLeft_0.8s_ease-out]">
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                <span className="text-sm font-medium">First Avatar of Dashavatar</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-[slideInFromLeft_1s_ease-out_0.2s_both]">
                मत्स्य अवतार
              </h1>
              <h2 className="text-3xl text-cyan-300 font-semibold mb-6 animate-[slideInFromLeft_1s_ease-out_0.4s_both]">
                Matsya
              </h2>
              <p className="text-xl text-cyan-100 leading-relaxed mb-8 max-w-3xl mx-auto animate-[slideInFromLeft_1s_ease-out_0.6s_both]">
                The Fish Avatar who saved all of creation from the great deluge. When the world was 
                threatened by cosmic dissolution, Lord Vishnu manifested as Matsya to preserve life, 
                knowledge, and dharma for future generations.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-cyan-300" />
                  <span className="text-cyan-200">Matsya Jayanti</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-300" />
                  <span className="text-cyan-200">Cosmic Ocean</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
                  alt="Matsya Avatar - The Divine Fish"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                <Waves className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100 text-center">
              <Waves className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-blue-900 mb-2">Form</h3>
              <p className="text-blue-700">Divine Fish</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100 text-center">
              <Star className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-blue-900 mb-2">Era</h3>
              <p className="text-blue-700">Satya Yuga</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100 text-center">
              <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-blue-900 mb-2">Festival</h3>
              <p className="text-blue-700">Matsya Jayanti</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100 text-center">
              <Crown className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-blue-900 mb-2">Purpose</h3>
              <p className="text-blue-700">Preservation</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                The Great Deluge
              </h2>
              <div className="space-y-6 text-blue-800 text-lg leading-relaxed">
                <p>
                  At the end of the previous cosmic cycle (Kalpa), the universe was destined for 
                  dissolution (Pralaya). The seven lokas (worlds) were to be submerged under the 
                  cosmic waters, threatening to destroy all life, knowledge, and the seeds of the 
                  next creation.
                </p>
                <p>
                  King Satyavrata (later known as Manu Vaivasvata), a devoted ruler and the progenitor 
                  of the current human race, was performing his morning ablutions in a river when a 
                  small fish appeared in the water he had cupped in his hands.
                </p>
                <p>
                  The tiny fish spoke to the king, requesting protection from larger fish. Moved by 
                  compassion, Satyavrata placed the fish in a small pot. But the fish grew rapidly, 
                  requiring larger and larger vessels, until finally even the ocean could barely 
                  contain its magnificent form.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=400&fit=crop"
                  alt="The cosmic ocean and divine fish"
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-600">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <Ship className="w-5 h-5" />
                  The Divine Boat
                </h3>
                <p className="text-blue-700 leading-relaxed">
                  Lord Matsya instructed Satyavrata to build a great boat and gather representatives 
                  of all species, along with the saptarishis (seven sages) and all varieties of 
                  seeds and medicinal herbs. The Vedas themselves were also preserved in this 
                  divine rescue mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Divine Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center">
            The Divine Rescue Mission
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Scroll className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Preservation of Vedas</h3>
              <p className="text-blue-700 text-center leading-relaxed">
                When the demon Hayagriva stole the Vedas during the deluge, Matsya pursued and 
                defeated the demon, recovering the sacred scriptures and preserving divine knowledge 
                for future generations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Ship className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Salvation of Life</h3>
              <p className="text-blue-700 text-center leading-relaxed">
                Matsya safely guided the boat containing all forms of life through the turbulent 
                cosmic waters, ensuring the continuity of creation into the new cosmic cycle.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Cosmic Order</h3>
              <p className="text-blue-700 text-center leading-relaxed">
                By saving Manu and establishing him as the progenitor of the new human race, 
                Matsya ensured the continuation of dharma and righteous governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Festival and Celebrations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Matsya Jayanti Festival
              </h2>
              <div className="space-y-6 text-blue-800">
                <p className="text-lg leading-relaxed">
                  Matsya Jayanti is celebrated on the Tritiya (third day) of the bright half of 
                  Chaitra month (March-April), marking the appearance of Lord Vishnu's first avatar. 
                  This festival is particularly significant in coastal regions and among fishing communities.
                </p>
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h3 className="font-bold text-blue-900 mb-4">Celebration Traditions</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-blue-600 mt-0.5" />
                      <span className="text-blue-700">Special prayers and pujas are offered to Lord Matsya</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-blue-600 mt-0.5" />
                      <span className="text-blue-700">Fish-shaped sweets and decorations are prepared</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-blue-600 mt-0.5" />
                      <span className="text-blue-700">Recitation of Matsya Purana stories</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-blue-600 mt-0.5" />
                      <span className="text-blue-700">Charitable giving, especially to the needy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-blue-900 mb-6 text-center">Regional Celebrations</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-bold text-blue-900 mb-2">Kerala</h4>
                  <p className="text-blue-700 text-sm">Special boat processions and water ceremonies</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-bold text-blue-900 mb-2">Odisha</h4>
                  <p className="text-blue-700 text-sm">Elaborate temple festivals and fish-shaped offerings</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-bold text-blue-900 mb-2">Bengal</h4>
                  <p className="text-blue-700 text-sm">Community feasts featuring fish preparations</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-bold text-blue-900 mb-2">Tamil Nadu</h4>
                  <p className="text-blue-700 text-sm">Coastal temple celebrations with morning prayers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Significance */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Spiritual Significance
          </h2>
          <p className="text-xl text-blue-700 mb-12 max-w-4xl mx-auto">
            The Matsya Avatar represents the beginning of life and consciousness, 
            symbolizing divine compassion and the eternal cycle of preservation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-blue-900 mb-3">Origin of Life</h3>
              <p className="text-blue-700 text-sm leading-relaxed">
                As the first avatar, Matsya represents the emergence of life from primordial waters, 
                symbolizing consciousness arising from the cosmic ocean of existence.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-blue-900 mb-3">Divine Protection</h3>
              <p className="text-blue-700 text-sm leading-relaxed">
                The story emphasizes how divine grace protects devotees and preserves dharma 
                even during cosmic dissolution and universal chaos.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-blue-900 mb-3">Knowledge Preservation</h3>
              <p className="text-blue-700 text-sm leading-relaxed">
                Matsya's rescue of the Vedas symbolizes the importance of preserving spiritual 
                knowledge through all difficulties and transitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Link
              href="/deities/vishnu"
              className="flex items-center gap-3 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <div>
                <div className="font-medium">Back to</div>
                <div className="text-sm text-gray-600">Lord Vishnu</div>
              </div>
            </Link>
            
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">Avatar 1 of 10</div>
              <div className="font-bold text-blue-900">Matsya - The Fish</div>
            </div>
            
            <Link
              href="/deities/vishnu/avatars/kurma"
              className="flex items-center gap-3 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <div className="text-right">
                <div className="font-medium">Next Avatar</div>
                <div className="text-sm text-gray-600">Kurma - The Tortoise</div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}