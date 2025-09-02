import { Badge } from '@/components/ui/badge';
import { Flame, Sword, Skull, Eye, Crown, Sparkles, MapPin, Calendar, Scroll, Users, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function BhairavaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-orange-900 to-yellow-800 text-white">
      {/* Navigation */}
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <Link 
          href="/deities/shiva/forms/nataraja"
          className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Nataraja
        </Link>
        
        <Link 
          href="/deities/shiva"
          className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
        >
          All Forms
        </Link>
        
        <Link 
          href="/deities/shiva/forms/ardhanarishvara"
          className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
        >
          Ardhanarishvara
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 bg-red-500/20 rounded-full border border-red-400/30 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer animate-[slideInFromLeft_0.8s_ease-out]">
            <Flame className="w-4 h-4 mr-2 animate-pulse" />
            <span className="text-sm font-medium">भैरव - The Fierce Protector</span>
          </div>
          
          <div className="min-h-[120px] md:min-h-[140px] flex flex-col justify-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-red-200 via-orange-300 to-yellow-200 bg-clip-text text-transparent leading-tight typewriter" style={{'--duration': '2s', '--steps': '8', '--delay': '1s'} as any}>
              भैरव
            </h1>
          </div>
          <div className="min-h-[60px] md:min-h-[80px] flex flex-col justify-center mb-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-orange-200 typewriter-no-cursor" style={{'--duration': '3s', '--steps': '35', '--delay': '3s'} as any}>
              Bhairava - The Terrifying Guardian
            </h2>
          </div>
          <p className="text-lg md:text-xl text-orange-100 max-w-4xl mx-auto leading-relaxed animate-[slideInFromLeft_1s_ease-out_5s_both]">
            The fierce and terrifying form of Lord Shiva who manifests as the supreme protector, 
            destroyer of ego, and guardian of cosmic law. Bhairava represents the power that 
            annihilates ignorance and protects devotees from negative forces.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Story & Mythology */}
          <div className="lg:col-span-2 space-y-8">
            {/* Origin Story */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Skull className="w-6 h-6 text-red-400" />
                <h3 className="text-2xl font-bold">The Sacred Origin</h3>
              </div>
              <div className="space-y-4 text-orange-100">
                <p>
                  Bhairava emerged from the fierce anger of Lord Shiva when Brahma falsely claimed 
                  superiority by growing a fifth head. Unable to tolerate this cosmic imbalance 
                  and disrespect, Shiva's wrath manifested as Bhairava, who severed Brahma's 
                  fifth head with his nail, restoring cosmic order.
                </p>
                <p>
                  This divine act established Bhairava as the supreme protector of dharma, 
                  the one who maintains cosmic balance by destroying arrogance and ego. 
                  The severed head stuck to Bhairava's palm, symbolizing that destruction 
                  leads to ultimate liberation.
                </p>
                <p>
                  Bhairava then wandered as Bhikshatana, the divine mendicant, seeking 
                  liberation from the sin of killing Brahma. This journey represents the 
                  path of penance, surrender, and ultimate realization that all actions 
                  are part of the cosmic play.
                </p>
              </div>
            </div>

            {/* Symbolism */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-orange-400" />
                <h3 className="text-2xl font-bold">Sacred Symbolism</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-red-300 mb-2">Fierce Appearance</h4>
                  <p className="text-sm text-orange-100">
                    Dark complexion, bloodshot eyes, and terrifying expression represent 
                    the power to destroy ignorance and negative tendencies within devotees.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-300 mb-2">Naked Form</h4>
                  <p className="text-sm text-orange-100">
                    The naked appearance symbolizes the stripping away of all illusions, 
                    ego, and material attachments to reveal pure consciousness.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-300 mb-2">Dog Companion</h4>
                  <p className="text-sm text-orange-100">
                    The faithful dog represents loyalty, dharma, and the devoted soul 
                    that follows the spiritual path despite worldly distractions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-300 mb-2">Trident & Damaru</h4>
                  <p className="text-sm text-orange-100">
                    The trident destroys the three gunas (qualities), while the damaru 
                    creates the primordial sound that manifests creation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-300 mb-2">Skull Crown</h4>
                  <p className="text-sm text-orange-100">
                    The crown of skulls represents victory over death and the ego, 
                    showing mastery over the cycle of birth and death.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-300 mb-2">Garland of Heads</h4>
                  <p className="text-sm text-orange-100">
                    The garland of severed heads symbolizes the destruction of various 
                    aspects of ego and the liberation of souls from ignorance.
                  </p>
                </div>
              </div>
            </div>

            {/* Eight Forms of Bhairava */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Crown className="w-6 h-6 text-yellow-400" />
                <h3 className="text-2xl font-bold">Ashta Bhairava - Eight Sacred Forms</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-500/10 rounded-lg p-4">
                  <h4 className="font-semibold text-red-300">1. Asitanga Bhairava</h4>
                  <p className="text-sm text-orange-100">Ruler of the East direction, grants knowledge and wisdom</p>
                </div>
                <div className="bg-red-500/10 rounded-lg p-4">
                  <h4 className="font-semibold text-red-300">2. Ruru Bhairava</h4>
                  <p className="text-sm text-orange-100">Guardian of Southeast, destroyer of diseases</p>
                </div>
                <div className="bg-red-500/10 rounded-lg p-4">
                  <h4 className="font-semibold text-red-300">3. Chanda Bhairava</h4>
                  <p className="text-sm text-orange-100">Protector of South, fierce destroyer of enemies</p>
                </div>
                <div className="bg-red-500/10 rounded-lg p-4">
                  <h4 className="font-semibold text-red-300">4. Krodha Bhairava</h4>
                  <p className="text-sm text-orange-100">Lord of Southwest, embodiment of righteous anger</p>
                </div>
                <div className="bg-red-500/10 rounded-lg p-4">
                  <h4 className="font-semibold text-red-300">5. Unmatta Bhairava</h4>
                  <p className="text-sm text-orange-100">Master of West, grants spiritual intoxication</p>
                </div>
                <div className="bg-red-500/10 rounded-lg p-4">
                  <h4 className="font-semibold text-red-300">6. Kapala Bhairava</h4>
                  <p className="text-sm text-orange-100">Guardian of Northwest, holds the skull of wisdom</p>
                </div>
                <div className="bg-red-500/10 rounded-lg p-4">
                  <h4 className="font-semibold text-red-300">7. Bhishana Bhairava</h4>
                  <p className="text-sm text-orange-100">Ruler of North, the most terrifying form</p>
                </div>
                <div className="bg-red-500/10 rounded-lg p-4">
                  <h4 className="font-semibold text-red-300">8. Samhara Bhairava</h4>
                  <p className="text-sm text-orange-100">Lord of Northeast, the great destroyer and transformer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Festivals, Temples, etc. */}
          <div className="space-y-8">
            {/* Festivals */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-red-400" />
                <h3 className="text-xl font-bold">Sacred Observances</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-300">Bhairava Jayanti</h4>
                  <p className="text-sm text-orange-100">Krishna Paksha Ashtami - Birth anniversary celebration with special pujas</p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-300">Kala Bhairava Ashtami</h4>
                  <p className="text-sm text-orange-100">Monthly observance on Krishna Ashtami for protection and blessings</p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-300">Bhairava Ratri</h4>
                  <p className="text-sm text-orange-100">Night-long vigil with tantric rituals and meditation</p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-300">Margashirsha Purnima</h4>
                  <p className="text-sm text-orange-100">Special worship day in many Bhairava temples across India</p>
                </div>
              </div>
            </div>

            {/* Temples */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-orange-400" />
                <h3 className="text-xl font-bold">Sacred Abodes</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-300">Kala Bhairava Temple, Varanasi</h4>
                  <p className="text-sm text-orange-100">Most famous Bhairava temple, guardian of the holy city</p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-300">Bhairavnath Temple, Ujjain</h4>
                  <p className="text-sm text-orange-100">One of the 12 Jyotirlingas with powerful Bhairava presence</p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-300">Kal Bhairav Temple, Delhi</h4>
                  <p className="text-sm text-orange-100">Ancient temple known for instant justice and protection</p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-300">Bhairava Temple, Kathmandu</h4>
                  <p className="text-sm text-orange-100">Historic temple complex with elaborate tantric traditions</p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-300">Batuk Bhairav, Himachal</h4>
                  <p className="text-sm text-orange-100">Mountain temple with child form of Bhairava worship</p>
                </div>
              </div>
            </div>

            {/* Mantras */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Scroll className="w-5 h-5 text-yellow-400" />
                <h3 className="text-xl font-bold">Sacred Mantras</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-300">Bhairava Mula Mantra</h4>
                  <p className="text-sm text-orange-100 font-mono">
                    ॐ हं हनुमते रुद्रावतारायआपदु <br />
                    ध्वंस शत्रू हं फट् स्वाहा
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-300">Kala Bhairava Mantra</h4>
                  <p className="text-sm text-orange-100 font-mono">
                    ॐ कालभैरवाय नमः
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-300">Bhairava Gayatri</h4>
                  <p className="text-sm text-orange-100 font-mono">
                    ॐ भैरवायै विद्महे <br />
                    महाकालाय धीमहि <br />
                    तन्नो भैरव प्रचोदयात्
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <h3 className="text-xl font-bold">Essential Facts</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-orange-300">Forms:</span>
                  <span className="text-orange-100">64 total, 8 main (Ashta Bhairava)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-300">Vehicle:</span>
                  <span className="text-orange-100">Dog (Shvana)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-300">Direction:</span>
                  <span className="text-orange-100">Guards all eight directions</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-300">Element:</span>
                  <span className="text-orange-100">Fire (Agni)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-300">Consort:</span>
                  <span className="text-orange-100">Bhairavi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-300">Color:</span>
                  <span className="text-orange-100">Dark, Black, Fierce Red</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-300">Day:</span>
                  <span className="text-orange-100">Tuesday, Ashtami</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spiritual Teachings */}
        <div className="mt-12 bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-md rounded-2xl p-8 border border-red-400/20">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-red-400" />
            <h3 className="text-2xl font-bold">Spiritual Teachings</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-red-300 mb-4">The Path of Destruction</h4>
              <p className="text-orange-100 leading-relaxed">
                Bhairava teaches that spiritual progress requires the destruction of ego, 
                false identification, and limiting beliefs. His fierce form represents 
                the inner fire of discrimination that burns away illusions, revealing 
                the true Self beyond all appearances.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-red-300 mb-4">Divine Protection</h4>
              <p className="text-orange-100 leading-relaxed">
                As the cosmic protector, Bhairava shields devotees from negative influences, 
                black magic, and psychic attacks. His worship creates a protective aura 
                that repels harmful energies while attracting divine grace and spiritual 
                strength for the devotee's evolution.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-red-300 mb-4">Tantric Wisdom</h4>
              <p className="text-orange-100 leading-relaxed">
                In Tantric traditions, Bhairava represents the active principle of 
                consciousness that penetrates and illuminates all experience. His worship 
                involves embracing the totality of existence, including its fierce and 
                terrifying aspects, as expressions of divine consciousness.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-red-300 mb-4">Time & Death Mastery</h4>
              <p className="text-orange-100 leading-relaxed">
                Kala Bhairava, as the lord of time, teaches mastery over temporal 
                existence and the fear of death. Through his worship, devotees develop 
                the understanding that time and death are illusions within the eternal 
                play of consciousness, leading to fearlessness and liberation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}