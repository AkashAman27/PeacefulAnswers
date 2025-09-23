import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Book,
  Crown,
  Heart,
  Star,
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Scroll,
  TreePine,
  Sword,
  Mountain,
  Sun,
  ChevronRight,
  ArrowLeft,
  Shield,
  Flower,
  Baby,
  Sparkles,
  Target,
  Zap,
  Globe,
  Home,
  Music,
  Gem,
  Eye,
  Sunrise
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'First Sight of Sita | Bala Kanda | Complete Ramayana | PeacefulAnswers',
  description: 'The cosmic moment when Rama and Sita first see each other - divine recognition, eternal love, and the soul-stirring meeting of Vishnu and Lakshmi in human form.',
  keywords: 'Sita first sight, divine recognition, eternal love, cosmic union, Vishnu Lakshmi, soul mates, divine love, Bala Kanda, Ramayana',
  openGraph: {
    title: 'First Sight of Sita | The Divine Recognition of Eternal Love',
    description: 'When divine souls recognize their eternal connection across incarnations',
    type: 'website',
  },
}

const sitaFirstSight = {
  title: 'सीता प्रथम दर्शन - First Sight of Sita',
  subtitle: 'The Divine Recognition of Eternal Love',
  timeframe: 'In King Janaka\'s palace gardens, Mithila',
  description: 'In the beautiful gardens of King Janaka\'s palace, the most cosmic moment in the Ramayana unfolds - the first meeting of Rama and Sita. This is not merely the meeting of two beautiful young people, but the recognition of Vishnu and Lakshmi, the eternal divine couple, finding each other once again in human form. Their eyes meet across the garden, and in that instant, both souls recognize their eternal connection that transcends this lifetime.',
  spiritualSignificance: 'This moment represents the recognition of eternal spiritual partnership that exists beyond physical incarnation. It demonstrates how divine souls connected at the cosmic level recognize each other instantly across lifetimes, and how true love is based on spiritual unity rather than mere physical attraction.',
  importance: 'This meeting establishes the divine foundation for the partnership that will serve the cosmic mission of world salvation, showing how personal union serves universal purpose.'
}

const gardenSetting = {
  location: 'Royal Garden of King Janaka\'s Palace',
  atmosphere: 'Paradisiacal beauty reflecting divine harmony',
  features: [
    'Lotus ponds with crystal-clear water',
    'Flowering trees in perfect bloom',
    'Peacocks dancing in courtyard',
    'Melodious birds singing celestial music',
    'Gentle breeze carrying floral fragrances',
    'Golden sunlight filtering through leaves',
    'Marble pavilions and artistic sculptures',
    'Sacred trees providing divine shade'
  ],
  spiritualQualities: [
    'Atmosphere of purity and divine presence',
    'Natural harmony reflecting cosmic order',
    'Beauty that elevates consciousness',
    'Peaceful energy conducive to spiritual recognition',
    'Divine artistry manifesting through nature',
    'Sacred geometry in garden design'
  ],
  symbolism: 'The garden represents the perfect setting where divine consciousness can recognize its eternal complement'
}

const theMoment = [
  {
    stage: 'Rama\'s Arrival in the Garden',
    description: 'Rama, accompanied by Lakshmana and Vishwamitra, enters the garden and is immediately struck by its extraordinary beauty',
    innerExperience: [
      'Heart opening spontaneously to beauty',
      'Sudden heightening of spiritual sensitivity',
      'Inexplicable anticipation of something significant',
      'Natural reverence for the sacred atmosphere',
      'Growing awareness of divine presence'
    ],
    cosmicSignificance: 'Divine consciousness preparing to recognize its eternal partner',
    symbolism: 'The soul approaching its moment of cosmic recognition',
    color: 'from-blue-500 to-purple-500'
  },
  {
    stage: 'Sita\'s Presence Among Her Companions',
    description: 'Sita moves gracefully through the garden with her friends, her divine radiance naturally illuminating the entire space',
    innerExperience: [
      'Natural grace and divine femininity',
      'Unconscious preparation for the cosmic meeting',
      'Heart becoming increasingly tender and open',
      'Subtle sensing of approaching destiny',
      'Growing spiritual receptivity'
    ],
    cosmicSignificance: 'Divine feminine energy radiating its natural magnetism',
    symbolism: 'Cosmic Shakti preparing to unite with cosmic consciousness',
    color: 'from-pink-500 to-rose-500'
  },
  {
    stage: 'The First Glance',
    description: 'Across the garden space, Rama and Sita\'s eyes meet for the first time, and the universe pauses in recognition',
    innerExperience: [
      'Instant recognition transcending physical sight',
      'Heart expanding beyond individual boundaries',
      'Time seeming to stop in the eternal moment',
      'Overwhelming sense of coming home',
      'Natural tears of joy and recognition'
    ],
    cosmicSignificance: 'Vishnu and Lakshmi recognizing each other across incarnations',
    symbolism: 'The moment when separated consciousness recognizes its unity',
    color: 'from-gold-500 to-amber-500'
  },
  {
    stage: 'Silent Communication',
    description: 'Without words, their souls communicate the eternal love and recognition that spans countless lifetimes',
    innerExperience: [
      'Telepathic understanding beyond verbal communication',
      'Exchange of divine love through consciousness',
      'Recognition of shared cosmic purpose',
      'Understanding of eternal partnership',
      'Wordless vows of devotion and service'
    ],
    cosmicSignificance: 'Divine souls establishing their earthly connection',
    symbolism: 'The language of the heart transcending physical expression',
    color: 'from-violet-500 to-purple-500'
  },
  {
    stage: 'Withdrawal and Contemplation',
    description: 'Both withdraw to process the overwhelming experience, carrying the divine recognition deep in their hearts',
    innerExperience: [
      'Need for solitude to process the cosmic experience',
      'Deep contemplation of what has occurred',
      'Growing certainty about spiritual destiny',
      'Sweet suffering of divine love',
      'Surrender to cosmic will and purpose'
    ],
    cosmicSignificance: 'Integration of divine recognition into human consciousness',
    symbolism: 'The soul storing the experience of divine union',
    color: 'from-teal-500 to-cyan-500'
  }
]

const divineQualities = [
  {
    aspect: 'Rama\'s Divine Masculine',
    qualities: [
      'Strength balanced with gentleness',
      'Nobility expressed through humility',
      'Courage tempered with compassion',
      'Leadership serving righteousness',
      'Power dedicated to protection'
    ],
    manifestation: 'Perfect embodiment of divine masculine consciousness',
    recognition: 'Sita sees the eternal protector and righteous king',
    cosmic_role: 'Consciousness that upholds cosmic order through dharmic action'
  },
  {
    aspect: 'Sita\'s Divine Feminine',
    qualities: [
      'Purity radiating spiritual luminosity',
      'Grace flowing from inner divinity',
      'Devotion expressing cosmic love',
      'Wisdom manifesting through intuition',
      'Strength dwelling in surrender'
    ],
    manifestation: 'Perfect embodiment of divine feminine energy',
    recognition: 'Rama sees the eternal beloved and spiritual companion',
    cosmic_role: 'Shakti that empowers consciousness for universal service'
  }
]

const levelsOfRecognition = [
  {
    level: 'Physical Beauty',
    description: 'The immediate attraction based on extraordinary physical beauty and grace',
    ramaExperience: 'Struck by Sita\'s unparalleled beauty and natural elegance',
    sitaExperience: 'Attracted to Rama\'s noble bearing and divine handsomeness',
    significance: 'Initial magnetic attraction that draws consciousness toward deeper recognition',
    transcendence: 'Beauty serving as gateway to spiritual recognition'
  },
  {
    level: 'Emotional Resonance',
    description: 'Heart-to-heart connection that transcends ordinary emotional attraction',
    ramaExperience: 'Heart opening spontaneously with overwhelming love and tenderness',
    sitaExperience: 'Natural flow of devotion and trust toward this divine being',
    significance: 'Emotional compatibility revealing deeper spiritual harmony',
    transcendence: 'Personal love expanding into cosmic devotion'
  },
  {
    level: 'Mental Compatibility',
    description: 'Recognition of shared values, purpose, and spiritual understanding',
    ramaExperience: 'Sensing a kindred spirit who shares his dharmic ideals',
    sitaExperience: 'Recognizing one who understands her spiritual nature',
    significance: 'Intellectual and moral alignment supporting spiritual partnership',
    transcendence: 'Individual understanding merging into cosmic wisdom'
  },
  {
    level: 'Soul Recognition',
    description: 'Deepest level where eternal souls recognize their cosmic connection',
    ramaExperience: 'Knowing this is his eternal companion across all lifetimes',
    sitaExperience: 'Remembering their eternal bond beyond this incarnation',
    significance: 'Spiritual partnership that enables cosmic mission',
    transcendence: 'Individual souls recognizing their universal purpose together'
  }
]

const cosmicDimensions = [
  {
    dimension: 'Vishnu-Lakshmi Union',
    description: 'The cosmic couple recognizing each other in human form',
    implications: [
      'Universal consciousness finding its complement',
      'Divine power united with divine grace',
      'Cosmic preservation force becoming complete',
      'Universal dharma receiving its supporting energy'
    ],
    purpose: 'Enabling the cosmic mission of world salvation through divine partnership'
  },
  {
    dimension: 'Purusha-Prakriti Harmony',
    description: 'Cosmic consciousness (Purusha) uniting with cosmic energy (Prakriti)',
    implications: [
      'Universal spirit recognizing its empowering force',
      'Cosmic consciousness becoming active through divine energy',
      'Static awareness becoming dynamic through loving partnership',
      'Universal principles manifesting through divine cooperation'
    ],
    purpose: 'Demonstrating the cosmic principle of consciousness-energy cooperation'
  },
  {
    dimension: 'Dharma-Dharini Partnership',
    description: 'The upholder of dharma finding the one who sustains dharma',
    implications: [
      'Righteous action receiving its sustaining support',
      'Divine law finding its nurturing complement',
      'Cosmic justice gaining its compassionate balance',
      'Universal order receiving its stabilizing force'
    ],
    purpose: 'Creating the perfect partnership for establishing dharmic civilization'
  }
]

const spiritualTeachings = [
  {
    teaching: 'Recognition of Eternal Partnership',
    principle: 'True love is recognition of eternal spiritual connection rather than temporary attraction',
    example: 'Rama and Sita knowing each other beyond this lifetime\'s first meeting',
    application: 'Seeking relationships based on spiritual compatibility and shared purpose',
    modernRelevance: 'Understanding that lasting relationships are built on soul connection'
  },
  {
    teaching: 'Divine Love Serves Universal Purpose',
    principle: 'Personal love between divine souls enables their service to cosmic welfare',
    example: 'Their union empowering their mission to establish dharmic kingdom',
    application: 'Using personal relationships to serve higher purposes and universal good',
    modernRelevance: 'Couples working together for social and spiritual betterment'
  },
  {
    teaching: 'Beauty as Gateway to Divinity',
    principle: 'Physical beauty can serve as a doorway to recognizing spiritual beauty',
    example: 'External beauty leading to recognition of inner divinity',
    application: 'Appreciating beauty while seeking the divine essence within',
    modernRelevance: 'Looking beyond surface attraction to spiritual qualities'
  },
  {
    teaching: 'Love Beyond Individual Desire',
    principle: 'Divine love transcends personal wanting to become cosmic service',
    example: 'Their love serving the welfare of all beings rather than personal happiness',
    application: 'Transforming personal love into universal compassion',
    modernRelevance: 'Relationships that contribute to collective wellbeing'
  },
  {
    teaching: 'Silent Heart Communication',
    principle: 'True souls communicate through consciousness beyond words',
    example: 'Instant understanding and connection without verbal communication',
    application: 'Developing intuitive connection and heart-based communication',
    modernRelevance: 'Deep listening and non-verbal understanding in relationships'
  }
]

const poeticExpressions = [
  {
    verse: 'नेत्र-संपर्क',
    translation: 'The Meeting of Eyes',
    description: 'When divine vision met divine beauty, time stood still in eternity',
    imagery: 'Like the sun recognizing its own reflection in a perfect mirror',
    emotion: 'Wonder transcending into recognition'
  },
  {
    verse: 'हृदय-स्पंदन',
    translation: 'The Heartbeat of Recognition',
    description: 'Two hearts beginning to beat in cosmic rhythm',
    imagery: 'Like separated notes of celestial music finding their harmony',
    emotion: 'Joy flowing from reunion with the eternal beloved'
  },
  {
    verse: 'मौन-संवाद',
    translation: 'Silent Conversation',
    description: 'Souls speaking in the language older than words',
    imagery: 'Like flowers communicating through fragrance across the garden',
    emotion: 'Understanding deeper than the mind can fathom'
  },
  {
    verse: 'दिव्य-प्रेम',
    translation: 'Divine Love',
    description: 'Love that serves the cosmos while fulfilling the heart',
    imagery: 'Like the river meeting the ocean - individual becoming universal',
    emotion: 'Love expanding from personal to cosmic service'
  }
]

export default function SitaFirstSightPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/scriptures" className="text-gray-600 hover:text-rose-600 transition-colors">
              Scriptures
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/scriptures/ramayana" className="text-gray-600 hover:text-rose-600 transition-colors">
              Ramayana
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/scriptures/ramayana/bala-kanda" className="text-gray-600 hover:text-rose-600 transition-colors">
              Bala Kanda
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-rose-600 font-medium">First Sight of Sita</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Heart className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">💕 Divine Recognition</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sanskrit">
                सीता प्रथम दर्शन
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-rose-100">
                First Sight of Sita
              </h2>
              <p className="text-lg text-pink-100 leading-relaxed mb-8">
                {sitaFirstSight.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#the-moment"
                  className="bg-white text-rose-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  The Divine Moment
                </Link>
                <Link
                  href="#cosmic-dimensions"
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Cosmic Significance
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-rose-500/20 to-purple-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=600&h=450&fit=crop"
                  alt="Divine Beauty in Palace Garden"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Overview */}
        <section>
          <div className="bg-gradient-to-br from-rose-50 to-purple-50 rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-rose-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-700">Royal Garden, Mithila</p>
              </div>
              <div className="text-center">
                <Heart className="w-12 h-12 text-rose-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Nature</h3>
                <p className="text-gray-700">Divine Recognition</p>
              </div>
              <div className="text-center">
                <Heart className="w-12 h-12 text-rose-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Significance</h3>
                <p className="text-gray-700">Eternal Union</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-rose-800 mb-4">Spiritual Significance</h3>
              <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
                {sitaFirstSight.spiritualSignificance}
              </p>
            </div>
          </div>
        </section>

        {/* Garden Setting */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Sacred Garden Setting</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The paradisiacal garden where divine consciousness prepares to meet its eternal complement
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-rose-800 mb-4">Divine Beauty Manifest</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{gardenSetting.atmosphere}</p>

                <h4 className="font-semibold text-gray-800 mb-3">Garden Features:</h4>
                <ul className="space-y-2">
                  {gardenSetting.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Flower className="w-4 h-4 text-rose-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Spiritual Qualities:</h4>
                <ul className="space-y-2 mb-6">
                  {gardenSetting.spiritualQualities.map((quality, index) => (
                    <li key={index} className="flex items-start">
                      <Sparkles className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{quality}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-rose-50 rounded-lg p-4">
                  <h4 className="font-semibold text-rose-800 mb-2">Symbolic Meaning:</h4>
                  <p className="text-rose-700 text-sm">{gardenSetting.symbolism}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Moment */}
        <section id="the-moment">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Divine Moment Unfolds</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The cosmic moment when eternal souls recognize each other across incarnations
            </p>
          </div>

          <div className="space-y-8">
            {theMoment.map((stage, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${stage.color} rounded-full flex items-center justify-center mr-6`}>
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{stage.stage}</h3>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">{stage.description}</p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Inner Experience:</h4>
                      <ul className="space-y-2">
                        {stage.innerExperience.map((experience, idx) => (
                          <li key={idx} className="flex items-start">
                            <Heart className="w-4 h-4 text-rose-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{experience}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-purple-50 rounded-lg p-4">
                        <h4 className="font-semibold text-purple-800 text-sm mb-2">Cosmic Significance:</h4>
                        <p className="text-purple-700 text-sm">{stage.cosmicSignificance}</p>
                      </div>

                      <div className="bg-rose-50 rounded-lg p-4">
                        <h4 className="font-semibold text-rose-800 text-sm mb-2">Symbolism:</h4>
                        <p className="text-rose-700 text-sm">{stage.symbolism}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divine Qualities */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Divine Qualities Recognized</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The divine masculine and feminine qualities that attract and complement each other
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {divineQualities.map((aspect, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${index === 0 ? 'bg-blue-500' : 'bg-rose-500'} rounded-full flex items-center justify-center mr-4`}>
                    {index === 0 ? <Sun className="w-6 h-6 text-white" /> : <Heart className="w-6 h-6 text-white" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{aspect.aspect}</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Divine Qualities:</h4>
                    <ul className="space-y-1">
                      {aspect.qualities.map((quality, idx) => (
                        <li key={idx} className="flex items-start">
                          <Star className="w-3 h-3 text-rose-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{quality}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-rose-50 rounded-lg p-4">
                    <h4 className="font-semibold text-rose-800 text-sm mb-1">Manifestation:</h4>
                    <p className="text-rose-700 text-sm mb-2">{aspect.manifestation}</p>
                    <h4 className="font-semibold text-rose-800 text-sm mb-1">Recognition:</h4>
                    <p className="text-rose-600 text-sm">{aspect.recognition}</p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 text-sm mb-1">Cosmic Role:</h4>
                    <p className="text-purple-700 text-sm">{aspect.cosmic_role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Levels of Recognition */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Levels of Divine Recognition</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The multiple dimensions through which divine souls recognize their eternal connection
            </p>
          </div>

          <div className="space-y-6">
            {levelsOfRecognition.map((level, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{level.level}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{level.description}</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                      <div className="bg-blue-50 rounded-lg p-3">
                        <h4 className="font-semibold text-blue-800 text-sm mb-1">Rama\'s Experience:</h4>
                        <p className="text-blue-700 text-sm">{level.ramaExperience}</p>
                      </div>

                      <div className="bg-rose-50 rounded-lg p-3">
                        <h4 className="font-semibold text-rose-800 text-sm mb-1">Sita\'s Experience:</h4>
                        <p className="text-rose-700 text-sm">{level.sitaExperience}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div className="bg-purple-50 rounded-lg p-3">
                        <h4 className="font-semibold text-purple-800 text-sm mb-1">Significance:</h4>
                        <p className="text-purple-700 text-sm">{level.significance}</p>
                      </div>

                      <div className="bg-green-50 rounded-lg p-3">
                        <h4 className="font-semibold text-green-800 text-sm mb-1">Transcendence:</h4>
                        <p className="text-green-700 text-sm">{level.transcendence}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cosmic Dimensions */}
        <section id="cosmic-dimensions">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cosmic Dimensions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The universal principles operating through this divine recognition
            </p>
          </div>

          <div className="space-y-8">
            {cosmicDimensions.map((dimension, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{dimension.dimension}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{dimension.description}</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Universal Implications:</h4>
                        <ul className="space-y-1">
                          {dimension.implications.map((implication, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-rose-500 mr-2 text-sm">•</span>
                              <span className="text-gray-600 text-sm">{implication}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-purple-50 rounded-lg p-4">
                        <h4 className="font-semibold text-purple-800 text-sm mb-2">Cosmic Purpose:</h4>
                        <p className="text-purple-700 text-sm">{dimension.purpose}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spiritual Teachings */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Eternal Spiritual Teachings</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The timeless lessons about divine love and spiritual partnership
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {spiritualTeachings.map((teaching, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <Gem className="w-8 h-8 text-rose-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{teaching.teaching}</h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">{teaching.principle}</p>

                <div className="space-y-4">
                  <div className="bg-rose-50 rounded-lg p-4 border-l-4 border-rose-500">
                    <p className="text-sm font-semibold text-rose-800 mb-2">Example from Episode:</p>
                    <p className="text-rose-700 text-sm">{teaching.example}</p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-purple-800 mb-2">Spiritual Application:</p>
                    <p className="text-purple-700 text-sm">{teaching.application}</p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-blue-800 mb-2">Modern Relevance:</p>
                    <p className="text-blue-700 text-sm">{teaching.modernRelevance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Poetic Expressions */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Poetic Expression of Divine Love</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The beauty of this cosmic moment expressed through poetic imagery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {poeticExpressions.map((expression, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-rose-800 font-sanskrit mb-2">{expression.verse}</h3>
                  <h4 className="text-gray-700 font-semibold">{expression.translation}</h4>
                </div>

                <div className="space-y-3">
                  <p className="text-gray-700 text-sm italic text-center">"{expression.description}"</p>

                  <div className="bg-rose-50 rounded-lg p-3">
                    <h5 className="font-semibold text-rose-800 text-xs mb-1">Imagery:</h5>
                    <p className="text-rose-700 text-xs">{expression.imagery}</p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-3">
                    <h5 className="font-semibold text-purple-800 text-xs mb-1">Emotion:</h5>
                    <p className="text-purple-700 text-xs">{expression.emotion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white rounded-3xl p-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">💕 Towards the Divine Test 💕</h2>
            <p className="text-xl text-rose-100 mb-8 max-w-3xl mx-auto">
              The cosmic recognition is complete. Now destiny calls for the ultimate test - the breaking of Lord Shiva\'s mighty bow to win Sita\'s hand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/scriptures/ramayana/bala-kanda/shiva-bow-ceremony"
                className="bg-white text-rose-600 px-8 py-4 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
              >
                Next: Shiva Bow Ceremony
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/scriptures/ramayana/bala-kanda"
                className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Bala Kanda
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}