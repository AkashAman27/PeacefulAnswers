
import { BookOpen, TreePine, Users, Eye, Crown, Sparkles, MapPin, Calendar, Scroll, GraduationCap, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function DakshinamurthyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-orange-900 to-red-800 text-white">
      {/* Navigation */}
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <Link 
          href="/deities/shiva/forms/neelkanth"
          className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Neelkanth
        </Link>
        
        <Link 
          href="/deities/shiva"
          className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
        >
          All Forms
        </Link>
        
        <Link 
          href="/deities/shiva/forms/nataraja"
          className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
        >
          Nataraja
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 bg-orange-500/20 rounded-full border border-orange-400/30 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer animate-[slideInFromLeft_0.8s_ease-out]">
            <BookOpen className="w-4 h-4 mr-2 animate-pulse" />
            <span className="text-sm font-medium">दक्षिणामूर्ति - The Divine Teacher</span>
          </div>
          
          <div className="min-h-[120px] md:min-h-[140px] flex flex-col justify-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-orange-200 via-amber-300 to-red-200 bg-clip-text text-transparent leading-tight typewriter whitespace-nowrap" style={{ '--duration': '2s', '--steps': '11', '--delay': '1s' } as any}>
              दक्षिणामूर्ति
            </h1>
          </div>
          <div className="min-h-[60px] md:min-h-[80px] flex flex-col justify-center mb-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-orange-200 typewriter-no-cursor whitespace-nowrap" style={{ '--duration': '2s', '--steps': '31', '--delay': '3s' } as any}>
              Dakshinamurthy - The Adi Guru
            </h2>
          </div>
          <p className="text-lg md:text-xl text-orange-100 max-w-4xl mx-auto leading-relaxed animate-[slideInFromLeft_1s_ease-out_5s_both]">
            The divine form of Lord Shiva as the ultimate teacher and guru, who imparts 
            the highest spiritual wisdom through silence, sitting facing south under 
            the sacred banyan tree with young disciples gathered around his feet.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Teaching & Wisdom */}
          <div className="lg:col-span-2 space-y-8">
            {/* The Silent Teacher */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-amber-400" />
                <h3 className="text-2xl font-bold">The Teaching of Silence</h3>
              </div>
              <div className="space-y-4 text-orange-100">
                <p>
                  Dakshinamurthy represents the unique form of Shiva where the divine 
                  teacher is young while the students are old sages. This paradox teaches 
                  that true wisdom is beyond age and experience - it comes from direct 
                  realization of one's essential nature as pure consciousness.
                </p>
                <p>
                  The teaching method of Dakshinamurthy is revolutionary - he imparts 
                  the highest knowledge through mauna (silence). This silence is not 
                  mere absence of words, but the pregnant silence of complete understanding. 
                  His very presence radiates the truth that cannot be captured in words.
                </p>
                <p>
                  The four elderly sages (Sanaka, Sanandana, Sanatana, and Sanatkumara) 
                  who sit at his feet represent the intellect that has exhausted itself 
                  in seeking truth through concepts and logic. Only in the presence 
                  of the silent guru do they attain direct realization.
                </p>
              </div>
            </div>

            {/* Sacred Iconography */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <TreePine className="w-6 h-6 text-green-400" />
                <h3 className="text-2xl font-bold">Sacred Iconography</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-amber-300 mb-2">Banyan Tree</h4>
                  <p className="text-sm text-orange-100">
                    Symbol of eternal knowledge and cosmic consciousness. Its aerial roots 
                    represent the infinite branches of wisdom descending from the source.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-300 mb-2">Facing South</h4>
                  <p className="text-sm text-orange-100">
                    South (Dakshina) traditionally associated with death and Yama, 
                    but here represents the death of ignorance and birth of wisdom.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-300 mb-2">Chin Mudra</h4>
                  <p className="text-sm text-orange-100">
                    The gesture of knowledge where thumb touches index finger, 
                    symbolizing the unity of individual and universal consciousness.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-300 mb-2">Right Foot on Demon</h4>
                  <p className="text-sm text-orange-100">
                    Apasmara, the demon of ignorance and forgetfulness, is kept under 
                    control but not destroyed, maintaining cosmic balance.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-300 mb-2">Sacred Thread</h4>
                  <p className="text-sm text-orange-100">
                    Serpent as sacred thread represents kundalini energy and the 
                    wisdom that comes from awakening inner spiritual power.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-300 mb-2">Attributes</h4>
                  <p className="text-sm text-orange-100">
                    Holds akshamala (rosary of knowledge), pustaka (scriptures), 
                    and displays abhaya mudra (fearlessness gesture).
                  </p>
                </div>
              </div>
            </div>

            {/* Forms of Knowledge */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-orange-400" />
                <h3 className="text-2xl font-bold">The Four Streams of Knowledge</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-amber-300 mb-2">Adhyatma Vidya</h4>
                  <p className="text-orange-100">
                    The knowledge of the Self - understanding one's true nature as 
                    pure consciousness beyond body, mind, and personality. This is 
                    the direct path to liberation through self-inquiry and meditation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-300 mb-2">Adhibhuta Vidya</h4>
                  <p className="text-orange-100">
                    Knowledge of the physical world and its underlying principles. 
                    Understanding the manifest universe as the play of consciousness, 
                    recognizing the divine in all material forms and phenomena.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-300 mb-2">Adhidaiva Vidya</h4>
                  <p className="text-orange-100">
                    The knowledge of subtle realms, cosmic principles, and divine 
                    hierarchies. Understanding the interplay between individual 
                    consciousness and cosmic intelligence in spiritual evolution.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-300 mb-2">Brahma Vidya</h4>
                  <p className="text-orange-100">
                    The supreme knowledge of Absolute Reality - the direct realization 
                    that individual self and universal Self are one. This transcends 
                    all other forms of knowledge and leads to permanent liberation.
                  </p>
                </div>
              </div>
            </div>

            {/* The Guru Tradition */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-red-400" />
                <h3 className="text-2xl font-bold">The Sacred Guru-Disciple Tradition</h3>
              </div>
              <div className="space-y-4 text-orange-100">
                <p>
                  Dakshinamurthy established the sacred tradition of guru-disciple 
                  relationship, where spiritual wisdom is transmitted not through books 
                  or lectures, but through direct energy transfer and awakening. 
                  This tradition forms the backbone of all authentic spiritual paths.
                </p>
                <p>
                  The guru serves as a mirror reflecting the disciple's true nature. 
                  In Dakshinamurthy's case, the reflection is so pure that the disciples 
                  immediately recognize their own infinite nature. The guru does not 
                  give anything new but simply removes the veils of ignorance.
                </p>
                <p>
                  This relationship transcends intellectual learning and enters the 
                  realm of heart-to-heart transmission. The presence of the realized 
                  guru creates a field of awakened consciousness that naturally 
                  catalyzes similar awakening in prepared disciples.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Temples, Festivals, etc. */}
          <div className="space-y-8">
            {/* Festivals */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-amber-400" />
                <h3 className="text-xl font-bold">Sacred Celebrations</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-amber-300">Guru Purnima</h4>
                  <p className="text-sm text-orange-100">Most important festival honoring Dakshinamurthy as the Adi Guru</p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-300">Dakshinamurthy Jayanti</h4>
                  <p className="text-sm text-orange-100">Special celebration of the divine teacher's manifestation</p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-300">Margashirsha Purnima</h4>
                  <p className="text-sm text-orange-100">Full moon day particularly sacred for Dakshinamurthy worship</p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-300">Vyasa Purnima</h4>
                  <p className="text-sm text-orange-100">Honoring all gurus in the lineage tracing back to Dakshinamurthy</p>
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
                  <h4 className="font-semibold text-amber-300">Thanjavur, Tamil Nadu</h4>
                  <p className="text-sm text-orange-100">Ancient Dakshinamurthy temple with magnificent sculptures</p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-300">Vaitheeswaran Koil</h4>
                  <p className="text-sm text-orange-100">Powerful Dakshinamurthy shrine known for healing and wisdom</p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-300">Alangudi, Tamil Nadu</h4>
                  <p className="text-sm text-orange-100">One of the Navagraha temples with Dakshinamurthy as main deity</p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-300">Kanchipuram Temples</h4>
                  <p className="text-sm text-orange-100">Multiple temples with beautiful Dakshinamurthy representations</p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-300">Kerala Temples</h4>
                  <p className="text-sm text-orange-100">Numerous temples with traditional Dakshinamurthy worship</p>
                </div>
              </div>
            </div>

            {/* Mantras */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Scroll className="w-5 h-5 text-orange-400" />
                <h3 className="text-xl font-bold">Sacred Mantras</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-amber-300">Dakshinamurthy Mantra</h4>
                  <p className="text-sm text-orange-100 font-mono">
                    ॐ दक्षिणामूर्तये नमः
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-300">Mula Mantra</h4>
                  <p className="text-sm text-orange-100 font-mono">
                    ॐ नमो भगवते दक्षिणामूर्तये <br />
                    महादेवाय नमः
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-300">Guru Stotra</h4>
                  <p className="text-sm text-orange-100 font-mono">
                    मौनव्याख्या प्रकटित परब्रह्मतत्त्वं <br />
                    तरुणं गुरुकुलवासं
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-300">Knowledge Invocation</h4>
                  <p className="text-sm text-orange-100 font-mono">
                    चित्रं वटतरोर्मूले वृद्धाः शिष्या गुरुर्युवा <br />
                    गुरोस्तु मौनं व्याख्यानं शिष्यास्तु छिन्नसंशयाः
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <h3 className="text-xl font-bold">Essential Facts</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-amber-300">Direction:</span>
                  <span className="text-orange-100">South (Dakshina)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-300">Tree:</span>
                  <span className="text-orange-100">Banyan (Vata)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-300">Teaching Method:</span>
                  <span className="text-orange-100">Silent Transmission</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-300">Students:</span>
                  <span className="text-orange-100">Four Kumaras (Sages)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-300">Represents:</span>
                  <span className="text-orange-100">Supreme Knowledge</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-300">Element:</span>
                  <span className="text-orange-100">Space (Consciousness)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-300">Teaching:</span>
                  <span className="text-orange-100">Self-Realization</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Relevance */}
        <div className="mt-12 bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-md rounded-2xl p-8 border border-amber-400/20">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-amber-400" />
            <h3 className="text-2xl font-bold">Teaching in the Modern World</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-amber-300 mb-4">Beyond Information</h4>
              <p className="text-orange-100 leading-relaxed">
                In our information-saturated age, Dakshinamurthy's teaching through 
                silence becomes even more relevant. True knowledge is not accumulation 
                of data but direct realization of truth. The silent presence of an 
                awakened being transmits more wisdom than countless words.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-amber-300 mb-4">The Inner Teacher</h4>
              <p className="text-orange-100 leading-relaxed">
                Dakshinamurthy represents the inner guru - the awakened consciousness 
                within each individual. While external teachers guide us, the ultimate 
                realization comes from connecting with this inner source of wisdom 
                that knows without learning and understands without thinking.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-amber-300 mb-4">Education Revolution</h4>
              <p className="text-orange-100 leading-relaxed">
                The Dakshinamurthy model suggests an educational approach that emphasizes 
                direct experience over rote learning, wisdom over information, and 
                character development over mere intellectual achievement. The teacher's 
                being and presence become more important than their words.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-amber-300 mb-4">Contemplative Practice</h4>
              <p className="text-orange-100 leading-relaxed">
                In meditation and spiritual practice, Dakshinamurthy reminds us that 
                sometimes the most profound insights come in moments of complete 
                stillness and silence. Regular practice of sitting in receptive 
                silence can awaken the inner teacher and access deeper levels of knowing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}