
import { Music, Flame, Sparkles, Crown, Eye, Zap, MapPin, Calendar, Scroll, Users, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function NatarajaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-950 via-red-900 to-pink-800 text-white">
      {/* Navigation */}
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <Link 
          href="/deities/shiva/forms/dakshinamurthy"
          className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Dakshinamurthy
        </Link>
        
        <Link 
          href="/deities/shiva"
          className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
        >
          All Forms
        </Link>
        
        <Link 
          href="/deities/shiva/forms/bhairava"
          className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
        >
          Bhairava
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 bg-orange-500/20 rounded-full border border-orange-400/30 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer animate-[slideInFromLeft_0.8s_ease-out]">
            <Music className="w-4 h-4 mr-2 animate-pulse" />
            <span className="text-sm font-medium">नटराज - Lord of the Cosmic Dance</span>
          </div>
          
          <div className="min-h-[120px] md:min-h-[140px] flex flex-col justify-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-orange-200 via-yellow-300 to-red-200 bg-clip-text text-transparent typewriter whitespace-nowrap leading-tight" style={{ '--duration': '2s', '--steps': '9', '--delay': '1s' } as any}>
              नटराज
            </h1>
          </div>
          
          <div className="min-h-[60px] md:min-h-[80px] flex flex-col justify-center mb-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-orange-200 typewriter-no-cursor whitespace-nowrap" style={{ '--duration': '2s', '--steps': '36', '--delay': '3s' } as any}>
              Nataraja - The Lord of Cosmic Dance
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-orange-100 max-w-4xl mx-auto leading-relaxed animate-[slideInFromLeft_1s_ease-out_5s_both]">
            The divine dancer who performs the eternal cosmic dance of creation, 
            preservation, and destruction, representing the rhythmic movement of 
            the entire universe in his magnificent Tandava dance.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Story & Dance */}
          <div className="lg:col-span-2 space-y-8">
            {/* The Cosmic Dance */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Music className="w-6 h-6 text-orange-400" />
                <h3 className="text-2xl font-bold">The Sacred Tandava Dance</h3>
              </div>
              <div className="space-y-4 text-orange-100">
                <p>
                  In the sacred forest of Taraka, where ten thousand sages had gathered 
                  to perform intense penance, Lord Shiva appeared as a wandering ascetic. 
                  The sages, consumed by ego and false pride, refused to recognize the 
                  divine presence and attempted to destroy him through their tantric powers.
                </p>
                <p>
                  They created a fierce tiger to attack Shiva, but he merely smiled and 
                  skinned it with his nail, wearing its hide as a garment. They then 
                  conjured a serpent, which Shiva adorned around his neck as an ornament. 
                  Finally, they created Apasmara, the demon of ignorance and forgetfulness.
                </p>
                <p>
                  It was then that Shiva began his cosmic dance - the Ananda Tandava. 
                  He placed one foot upon the demon Apasmara, not to destroy but to 
                  control ignorance, for without it, there would be no learning. 
                  His dance of bliss revealed the ultimate truth of existence.
                </p>
              </div>
            </div>

            {/* Sacred Symbolism */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Crown className="w-6 h-6 text-yellow-400" />
                <h3 className="text-2xl font-bold">Divine Symbolism of the Dance</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-orange-300 mb-2">Damaru (Drum)</h4>
                  <p className="text-sm text-orange-100">
                    The hourglass drum in his upper right hand creates the primordial 
                    sound of creation, the cosmic rhythm that brings the universe into existence.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-300 mb-2">Fire (Agni)</h4>
                  <p className="text-sm text-orange-100">
                    The flame in his upper left hand represents destruction and transformation, 
                    the purifying fire that dissolves the old to make way for the new.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-300 mb-2">Abhaya Mudra</h4>
                  <p className="text-sm text-orange-100">
                    His lower right hand in blessing gesture grants fearlessness to devotees, 
                    assuring them of protection and divine grace through all life's changes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-300 mb-2">Pointing Gesture</h4>
                  <p className="text-sm text-orange-100">
                    His lower left hand points to the raised foot, indicating the path of 
                    liberation and the uplifting power of devotion and spiritual practice.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-300 mb-2">Dancing Posture</h4>
                  <p className="text-sm text-orange-100">
                    The balanced yet dynamic pose represents perfect equilibrium between 
                    creation and destruction, movement and stillness, form and formlessness.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-300 mb-2">Circle of Fire</h4>
                  <p className="text-sm text-orange-100">
                    The ring of flames surrounding Nataraja represents the cosmic energy, 
                    the eternal cycle of time, and the boundary of the manifest universe.
                  </p>
                </div>
              </div>
            </div>

            {/* The Five Activities */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-red-400" />
                <h3 className="text-2xl font-bold">The Five Cosmic Activities</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-orange-300 mb-2">1. Srishti (Creation)</h4>
                  <p className="text-orange-100">
                    The drum beat brings forth the cosmic sound OM, from which all 
                    creation emerges. This represents the divine creative power manifesting 
                    the universe from pure consciousness.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-300 mb-2">2. Sthiti (Preservation)</h4>
                  <p className="text-orange-100">
                    The dancing maintains the cosmic order and balance, sustaining 
                    all life forms and ensuring the continuous flow of divine energy 
                    throughout creation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-300 mb-2">3. Samhara (Destruction)</h4>
                  <p className="text-orange-100">
                    The fire represents the dissolution of forms that have served their 
                    purpose, clearing the way for new creation in the eternal cosmic cycle.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-300 mb-2">4. Tirobhava (Veiling)</h4>
                  <p className="text-orange-100">
                    The dance creates maya (illusion) that veils the true nature of reality, 
                    allowing souls to experience individualized existence and learn through experience.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-300 mb-2">5. Anugraha (Grace)</h4>
                  <p className="text-orange-100">
                    The blessing hand and uplifted foot offer divine grace and liberation 
                    to those who recognize the true nature of the cosmic dance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Festivals, Temples, etc. */}
          <div className="space-y-8">
            {/* Festivals */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-orange-400" />
                <h3 className="text-xl font-bold">Sacred Celebrations</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-300">Natyanjali Festival</h4>
                  <p className="text-sm text-orange-100">Annual dance festival at Chidambaram celebrating Nataraja</p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-300">Maha Shivaratri</h4>
                  <p className="text-sm text-orange-100">Night-long celebration of Shiva's cosmic dance</p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-300">Arudra Darshan</h4>
                  <p className="text-sm text-orange-100">Special viewing of Nataraja during the Arudra constellation</p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-300">Margazhi Festival</h4>
                  <p className="text-sm text-orange-100">Month-long celebrations in South Indian temples</p>
                </div>
              </div>
            </div>

            {/* Temples */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-red-400" />
                <h3 className="text-xl font-bold">Sacred Temples</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-300">Chidambaram Nataraja Temple</h4>
                  <p className="text-sm text-orange-100">The cosmic center where Nataraja performs his eternal dance</p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-300">Thanjavur Brihadeeswarar</h4>
                  <p className="text-sm text-orange-100">Magnificent temple with exquisite Nataraja sculptures</p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-300">Kumbakonam Temples</h4>
                  <p className="text-sm text-orange-100">Multiple temples with beautiful Nataraja representations</p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-300">Madurai Meenakshi Temple</h4>
                  <p className="text-sm text-orange-100">Famous for its Nataraja sculptures and dance hall</p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-300">Cidambaram Temple, France</h4>
                  <p className="text-sm text-orange-100">Modern temple bringing Nataraja worship to the West</p>
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
                  <h4 className="font-semibold text-orange-300">Nataraja Mantra</h4>
                  <p className="text-sm text-orange-100 font-mono">
                    ॐ नटराजाय नमः
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-300">Tandava Stotra</h4>
                  <p className="text-sm text-orange-100 font-mono">
                    जटाटवीगलज्जलप्रवाहपावितस्थले <br />
                    गलेअवलम्ब्यलम्बितां भुजंगतुंगमालिकाम्
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-300">Cosmic Dance Invocation</h4>
                  <p className="text-sm text-orange-100 font-mono">
                    ॐ आनंदतांडवं कुर्वन् <br />
                    नटराज नमोस्तुते
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-300">Chidambaram Mantra</h4>
                  <p className="text-sm text-orange-100 font-mono">
                    ॐ चिदम्बरेश्वराय नमः <br />
                    नटराज गुरवे नमः
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-orange-400" />
                <h3 className="text-xl font-bold">Essential Facts</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-orange-300">Dance:</span>
                  <span className="text-orange-100">Ananda Tandava (Cosmic Dance)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-300">Location:</span>
                  <span className="text-orange-100">Chidambaram (Cosmic Center)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-300">Symbolizes:</span>
                  <span className="text-orange-100">Cosmic Energy & Rhythm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-300">Activities:</span>
                  <span className="text-orange-100">Five Cosmic Functions</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-300">Art Form:</span>
                  <span className="text-orange-100">Classical Indian Dance</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-300">Element:</span>
                  <span className="text-orange-100">Space (Akasha)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-300">Teaching:</span>
                  <span className="text-orange-100">Cosmic Consciousness</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spiritual Significance */}
        <div className="mt-12 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-md rounded-2xl p-8 border border-orange-400/20">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-orange-400" />
            <h3 className="text-2xl font-bold">Spiritual & Cultural Impact</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-orange-300 mb-4">Dance as Spiritual Practice</h4>
              <p className="text-orange-100 leading-relaxed">
                Nataraja's dance form became the foundation for classical Indian dance 
                traditions like Bharatanatyam, Odissi, and Kathak. These art forms 
                transform physical movement into spiritual expression, allowing dancers 
                to embody divine consciousness through rhythm and grace.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-orange-300 mb-4">Modern Physics Connection</h4>
              <p className="text-orange-100 leading-relaxed">
                Remarkably, modern physics echoes the cosmic dance concept. The 
                subatomic world reveals particles in constant motion, creating and 
                destroying in rhythmic patterns that mirror Nataraja's eternal dance. 
                Even CERN has a Nataraja statue, honoring this cosmic vision.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-orange-300 mb-4">Universal Rhythm</h4>
              <p className="text-orange-100 leading-relaxed">
                The Tandava represents the fundamental rhythm underlying all existence - 
                from heartbeats to planetary orbits, from atomic vibrations to galactic 
                rotations. Meditating on this dance reveals the interconnected nature 
                of all cosmic phenomena.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-orange-300 mb-4">Artistic Inspiration</h4>
              <p className="text-orange-100 leading-relaxed">
                Nataraja's image has inspired countless artists, musicians, and poets 
                across cultures. The dynamic balance of creation and destruction, 
                expressed through perfect artistic form, continues to influence 
                contemporary art and spiritual movements worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}