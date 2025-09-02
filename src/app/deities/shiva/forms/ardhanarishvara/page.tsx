import { Heart, Circle, Sparkles, Crown, Flower, Eye, MapPin, Calendar, Scroll, Users, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ArdhanarishvaraPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-pink-900 to-blue-800 text-white">
      {/* Navigation */}
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <Link 
          href="/deities/shiva/forms/bhairava"
          className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Bhairava
        </Link>
        
        <Link 
          href="/deities/shiva"
          className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
        >
          All Forms
        </Link>
        
        <Link 
          href="/deities/shiva/forms/adiyogi"
          className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
        >
          Adiyogi
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 bg-purple-500/20 rounded-full border border-purple-400/30 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer animate-[slideInFromLeft_0.8s_ease-out]">
            <Circle className="w-4 h-4 mr-2 animate-pulse" />
            <span className="text-sm font-medium">अर्धनारीश्वर - The Divine Unity</span>
          </div>
          
          <div className="min-h-[120px] md:min-h-[140px] flex flex-col justify-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-200 via-pink-300 to-blue-200 bg-clip-text text-transparent typewriter whitespace-nowrap leading-tight" style={{ '--duration': '2s', '--steps': '12', '--delay': '1s' } as any}>
              अर्धनारीश्वर
            </h1>
          </div>
          
          <div className="min-h-[60px] md:min-h-[80px] flex flex-col justify-center mb-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-purple-200 typewriter-no-cursor whitespace-nowrap" style={{ '--duration': '2s', '--steps': '42', '--delay': '3s' } as any}>
              Ardhanarishvara - The Half-Male Half-Female
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed animate-[slideInFromLeft_1s_ease-out_5s_both]">
            The magnificent form where Lord Shiva and Goddess Parvati unite as one being, 
            representing the inseparable unity of masculine and feminine principles, 
            consciousness and energy, spirit and matter in the cosmos.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Story & Philosophy */}
          <div className="lg:col-span-2 space-y-8">
            {/* Origin Story */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-pink-400" />
                <h3 className="text-2xl font-bold">The Sacred Origin</h3>
              </div>
              <div className="space-y-4 text-purple-100">
                <p>
                  The form of Ardhanarishvara emerged when Goddess Parvati, after intense 
                  penance, requested Lord Shiva to share half of his body with her. This 
                  divine union represents the fundamental truth that creation is impossible 
                  without both Shiva (consciousness) and Shakti (energy) working in perfect harmony.
                </p>
                <p>
                  Another legend tells of sage Bhringi, who refused to worship Goddess Parvati 
                  and only honored Shiva. To teach him the importance of both divine principles, 
                  Shiva manifested as Ardhanarishvara, making it impossible to worship one 
                  without the other.
                </p>
                <p>
                  This form also appeared when the gods requested Shiva to create, but he 
                  could not do so alone. By uniting with his Shakti as Ardhanarishvara, 
                  the process of creation began, demonstrating that neither masculine nor 
                  feminine principle can function independently in the cosmic dance.
                </p>
              </div>
            </div>

            {/* Symbolism */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Crown className="w-6 h-6 text-purple-400" />
                <h3 className="text-2xl font-bold">Divine Symbolism</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-500/10 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-300 mb-2">Right Side - Shiva</h4>
                  <ul className="text-sm text-purple-100 space-y-1">
                    <li>• Ash-covered white skin</li>
                    <li>• Matted hair with crescent moon</li>
                    <li>• Tiger skin garment</li>
                    <li>• Trident (consciousness)</li>
                    <li>• Serpent ornaments</li>
                    <li>• Third eye of wisdom</li>
                  </ul>
                </div>
                <div className="bg-pink-500/10 rounded-lg p-4">
                  <h4 className="font-semibold text-pink-300 mb-2">Left Side - Parvati</h4>
                  <ul className="text-sm text-purple-100 space-y-1">
                    <li>• Golden, lustrous skin</li>
                    <li>• Ornately braided hair</li>
                    <li>• Silk saree and jewels</li>
                    <li>• Lotus flower (creation)</li>
                    <li>• Traditional makeup</li>
                    <li>• Graceful feminine posture</li>
                  </ul>
                </div>
                <div className="bg-purple-500/10 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">Unity Symbolism</h4>
                  <p className="text-sm text-purple-100">
                    The perfect vertical division represents the balance of opposites - 
                    static and dynamic, consciousness and energy, transcendent and immanent, 
                    destruction and creation unified in divine harmony.
                  </p>
                </div>
                <div className="bg-purple-500/10 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">Cosmic Principle</h4>
                  <p className="text-sm text-purple-100">
                    Demonstrates that reality emerges from the interplay of complementary 
                    forces, and that true spiritual realization requires integration of 
                    all aspects of existence, not rejection of the feminine principle.
                  </p>
                </div>
              </div>
            </div>

            {/* Philosophical Significance */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-pink-400" />
                <h3 className="text-2xl font-bold">Philosophical Teachings</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">Gender Transcendence</h4>
                  <p className="text-purple-100">
                    Ardhanarishvara teaches that the ultimate reality transcends gender distinctions. 
                    The divine contains both masculine and feminine qualities, and true spiritual 
                    evolution requires embracing and integrating both aspects within ourselves.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">Equality of Principles</h4>
                  <p className="text-purple-100">
                    This form establishes the absolute equality and interdependence of Shiva and Shakti. 
                    Neither is superior; both are necessary for existence. It challenges patriarchal 
                    interpretations and affirms the divine feminine as equally important.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">Tantric Philosophy</h4>
                  <p className="text-purple-100">
                    In Tantra, Ardhanarishvara represents the union of Shiva (pure consciousness) 
                    and Shakti (dynamic power). This union within the individual leads to self-realization 
                    and the experience of non-dual awareness.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">Psychological Integration</h4>
                  <p className="text-purple-100">
                    Psychologically, this form represents the integration of anima and animus, 
                    the feminine and masculine aspects within every individual. Spiritual maturity 
                    requires harmonizing these internal polarities.
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
                <Calendar className="w-5 h-5 text-pink-400" />
                <h3 className="text-xl font-bold">Sacred Celebrations</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-300">Ardhanarishvara Jayanti</h4>
                  <p className="text-sm text-purple-100">Celebrated on Vaisakha Purnima with unity rituals and couple blessings</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300">Shiva-Parvati Vivah</h4>
                  <p className="text-sm text-purple-100">Divine marriage celebration emphasizing sacred union principles</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300">Gangaur Festival</h4>
                  <p className="text-sm text-purple-100">Rajasthani festival celebrating marital harmony and divine union</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300">Teej Celebrations</h4>
                  <p className="text-sm text-purple-100">Monsoon festivals honoring Shiva-Parvati's eternal love and unity</p>
                </div>
              </div>
            </div>

            {/* Temples */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-purple-400" />
                <h3 className="text-xl font-bold">Sacred Temples</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-300">Tiruchengode, Tamil Nadu</h4>
                  <p className="text-sm text-purple-100">Famous hilltop Ardhanarishvara temple with ancient traditions</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300">Kalahasti, Andhra Pradesh</h4>
                  <p className="text-sm text-purple-100">One of the Pancha Bhoota Stalams with Ardhanarishvara shrine</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300">Elephanta Caves, Mumbai</h4>
                  <p className="text-sm text-purple-100">Magnificent carved Ardhanarishvara sculpture, UNESCO World Heritage</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300">Chidambaram, Tamil Nadu</h4>
                  <p className="text-sm text-purple-100">Sacred Nataraja temple complex with Ardhanarishvara worship</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300">Kanchipuram, Tamil Nadu</h4>
                  <p className="text-sm text-purple-100">Multiple temples with beautiful Ardhanarishvara representations</p>
                </div>
              </div>
            </div>

            {/* Mantras */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Scroll className="w-5 h-5 text-pink-400" />
                <h3 className="text-xl font-bold">Sacred Mantras</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-300">Ardhanarishvara Mantra</h4>
                  <p className="text-sm text-purple-100 font-mono">
                    ॐ अर्धनारीश्वराय नमः
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300">Unity Mantra</h4>
                  <p className="text-sm text-purple-100 font-mono">
                    ॐ शिवशक्त्यैक्यरूपिणे <br />
                    अर्धनारीश्वराय नमः
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300">Ardhanarishvara Gayatri</h4>
                  <p className="text-sm text-purple-100 font-mono">
                    ॐ अर्धनारीश्वराय विद्महे <br />
                    शिवशक्त्यैक्याय धीमहि <br />
                    तन्नो अर्धनारीश्वर प्रचोदयात्
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300">Balance Invocation</h4>
                  <p className="text-sm text-purple-100 font-mono">
                    शिवः शक्तिः शिव एव <br />
                    एको देवो महेश्वरः
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <h3 className="text-xl font-bold">Essential Facts</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-purple-300">Other Names:</span>
                  <span className="text-purple-100">Ardhanari, Ardhanaranari</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-300">Represents:</span>
                  <span className="text-purple-100">Unity of opposites</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-300">Philosophy:</span>
                  <span className="text-purple-100">Non-dualistic harmony</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-300">Symbolism:</span>
                  <span className="text-purple-100">Consciousness & Energy</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-300">Art Style:</span>
                  <span className="text-purple-100">Perfect vertical division</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-300">Worship:</span>
                  <span className="text-purple-100">Couples, Unity seekers</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-300">Teaching:</span>
                  <span className="text-purple-100">Gender transcendence</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spiritual Significance */}
        <div className="mt-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-md rounded-2xl p-8 border border-purple-400/20">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-purple-400" />
            <h3 className="text-2xl font-bold">Modern Relevance</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-purple-300 mb-4">Gender Equality</h4>
              <p className="text-purple-100 leading-relaxed">
                Ardhanarishvara stands as one of the most powerful symbols of gender equality 
                in world religions. This ancient concept recognizes that both masculine and 
                feminine energies are divine, necessary, and equal, challenging gender-based 
                discrimination and promoting inclusive spirituality.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-300 mb-4">Psychological Wholeness</h4>
              <p className="text-purple-100 leading-relaxed">
                Modern psychology recognizes the importance of integrating masculine and 
                feminine aspects within personality for mental health and wholeness. 
                Ardhanarishvara provides a spiritual framework for this integration, 
                promoting balanced human development.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-300 mb-4">Relationship Harmony</h4>
              <p className="text-purple-100 leading-relaxed">
                For couples, Ardhanarishvara represents the ideal of perfect partnership 
                where both individuals maintain their uniqueness while creating unity. 
                It teaches mutual respect, complementarity, and the sacred nature of 
                committed relationships based on spiritual love.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-300 mb-4">Environmental Balance</h4>
              <p className="text-purple-100 leading-relaxed">
                The principle of balanced opposites extends to environmental consciousness, 
                teaching that nature thrives on the interplay of complementary forces. 
                This form inspires ecological thinking that values both preservation 
                (feminine) and responsible use (masculine) of natural resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}