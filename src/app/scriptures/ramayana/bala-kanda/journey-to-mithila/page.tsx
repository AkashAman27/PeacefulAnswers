import { Metadata } from 'next'
import Link from 'next/Link'
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
  Flower2,
  Baby,
  Sparkles,
  Target,
  Zap,
  Globe,
  Home,
  Music,
  Gem,
  Navigation,
  Compass,
  Route,
  Footprints,
  Sunrise
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Journey to Mithila | Bala Kanda | Complete Ramayana | PeacefulAnswers',
  description: 'The divine journey from forest to destiny - Sage Vishwamitra leads Rama and Lakshmana to Mithila where cosmic purpose awaits. Sacred places, divine synchronicity.',
  keywords: 'journey to Mithila, divine destiny, sacred places, Vishwamitra guidance, cosmic synchronicity, Bala Kanda, Ramayana, spiritual pilgrimage',
  openGraph: {
    title: 'Journey to Mithila | Towards Divine Destiny',
    description: 'When divine guidance leads souls toward their cosmic purpose and eternal union',
    type: 'website',
  },
}

const journeyToMithila = {
  title: 'मिथिला यात्रा - Journey to Mithila',
  subtitle: 'Towards Divine Destiny',
  timeframe: 'After successful completion of yajna protection',
  description: 'Following the successful protection of the yajna, Sage Vishwamitra makes a mysterious decision to journey to Mithila, the kingdom of King Janaka. This journey represents more than mere travel - it is a divinely orchestrated movement toward destiny, where Rama will encounter his eternal consort Sita. The path winds through sacred forests, ancient pilgrimage sites, and regions blessed by the presence of great sages.',
  spiritualSignificance: 'The journey to Mithila symbolizes how divine consciousness is guided toward its cosmic purpose through seemingly ordinary circumstances. It demonstrates how spiritual masters orchestrate encounters that appear coincidental but are actually part of the cosmic plan for universal welfare.',
  importance: 'This journey marks the transition from Rama\'s role as protector of spiritual practices to his preparation for the ultimate partnership that will enable his cosmic mission as world savior.'
}

const routeAndPlaces = [
  {
    place: 'Vishwamitra\'s Ashram',
    significance: 'Starting point of the divine journey',
    description: 'The forest hermitage where Rama proved his dharmic worthiness and received cosmic weapons',
    sacredAspects: [
      'Site of successful yajna completion',
      'Place of divine weapon transmission',
      'Location of spiritual graduation',
      'Starting point of destined journey'
    ],
    spiritualEnergy: 'Accomplishment and preparation for greater purpose',
    modernRelevance: 'Represents graduation points in spiritual development',
    color: 'from-green-500 to-teal-500'
  },
  {
    place: 'Sacred Ganga Crossing',
    significance: 'Purification and blessing for the journey ahead',
    description: 'The holy river that purifies all beings and blesses significant undertakings',
    sacredAspects: [
      'Divine purification before important events',
      'Blessing from Mother Ganga',
      'Spiritual preparation for cosmic purpose',
      'Sanctification of the journey'
    ],
    spiritualEnergy: 'Purification and divine grace',
    modernRelevance: 'Symbolic cleansing before major life transitions',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    place: 'Ancient Pilgrimage Sites',
    significance: 'Connection with timeless spiritual traditions',
    description: 'Sacred locations where great sages performed tapasya and received divine visions',
    sacredAspects: [
      'Sites of ancient spiritual practices',
      'Places of divine revelations',
      'Centers of cosmic energy',
      'Links to eternal spiritual lineage'
    ],
    spiritualEnergy: 'Connection with eternal dharmic traditions',
    modernRelevance: 'Importance of connecting with spiritual heritage',
    color: 'from-purple-500 to-blue-500'
  },
  {
    place: 'Hermitages of Great Sages',
    significance: 'Receiving blessings from realized souls',
    description: 'Forest dwellings of enlightened masters who bless the divine mission',
    sacredAspects: [
      'Blessings from realized masters',
      'Spiritual guidance and encouragement',
      'Recognition of divine nature',
      'Prophecies about future greatness'
    ],
    spiritualEnergy: 'Spiritual authority and cosmic recognition',
    modernRelevance: 'Seeking guidance from spiritual mentors',
    color: 'from-orange-500 to-red-500'
  },
  {
    place: 'Approach to Mithila',
    significance: 'Arrival at the land of destiny',
    description: 'The beautiful and prosperous kingdom where cosmic purpose will unfold',
    sacredAspects: [
      'Land blessed by King Janaka\'s righteousness',
      'Kingdom where dharma flourishes',
      'Place of divine feminine energy (Sita)',
      'Stage set for cosmic union'
    ],
    spiritualEnergy: 'Anticipation and cosmic alignment',
    modernRelevance: 'Approaching destined opportunities',
    color: 'from-pink-500 to-rose-500'
  }
]

const divineOrchestration = [
  {
    aspect: 'Vishwamitra\'s Mysterious Decision',
    description: 'The sage\'s sudden decision to visit Mithila appears casual but is divinely inspired',
    hiddenPurpose: 'Bringing Rama to meet his eternal consort Sita',
    spiritualPrinciple: 'Divine masters work beyond conventional understanding',
    evidence: [
      'No apparent reason given for the journey',
      'Perfect timing with Janaka\'s swayamvara',
      'Rama and Lakshmana readily agree without question',
      'Everything unfolds with supernatural synchronicity'
    ],
    lesson: 'Trust in divine guidance even when purposes are not immediately clear'
  },
  {
    aspect: 'Perfect Timing',
    description: 'The arrival coincides precisely with King Janaka\'s bow-breaking ceremony',
    hiddenPurpose: 'Ensuring Rama participates in the destined challenge',
    spiritualPrinciple: 'Cosmic timing orchestrates perfect synchronicity',
    evidence: [
      'Arrival just as preparations for swayamvara begin',
      'Optimal timing for Rama to hear about the challenge',
      'No delays or obstacles in the journey',
      'Natural flow of events leading to participation'
    ],
    lesson: 'Divine timing brings opportunities at the perfect moment'
  },
  {
    aspect: 'Growing Anticipation',
    description: 'Subtle signs and inner stirrings suggest something significant awaits',
    hiddenPurpose: 'Preparing Rama\'s consciousness for the cosmic meeting',
    spiritualPrinciple: 'Souls sense approaching spiritual destiny',
    evidence: [
      'Rama\'s unusual excitement about the journey',
      'Dreams and visions during the travel',
      'Natural phenomena pointing toward Mithila',
      'Inner knowing that something important approaches'
    ],
    lesson: 'Spiritual intuition recognizes approaching destiny'
  },
  {
    aspect: 'Universal Cooperation',
    description: 'All elements of nature seem to facilitate the journey',
    hiddenPurpose: 'Cosmic forces ensuring the divine meeting occurs',
    spiritualPrinciple: 'Universe supports dharmic purposes',
    evidence: [
      'Perfect weather throughout the journey',
      'Easy paths and favorable conditions',
      'Helpful encounters with local people',
      'No obstacles or difficulties encountered'
    ],
    lesson: 'When aligned with cosmic purpose, universal forces provide support'
  }
]

const characterDevelopment = [
  {
    character: 'Rama',
    innerJourney: 'From accomplished protector to soul approaching its complement',
    transformation: [
      'Growing sense of anticipation for something beyond yajna protection',
      'Deepening spiritual contemplation during travel',
      'Natural attraction toward Mithila even before seeing it',
      'Inner preparation for a cosmic meeting',
      'Expansion of consciousness beyond current mission'
    ],
    spiritualGrowth: 'Opening to receive his eternal spiritual partner',
    cosmicSignificance: 'Preparation for the union that will enable world salvation'
  },
  {
    character: 'Lakshmana',
    innerJourney: 'From devoted brother to witness of cosmic love',
    transformation: [
      'Sensing the special nature of this particular journey',
      'Deeper understanding of service to divine purpose',
      'Recognition of Rama\'s unique spiritual destiny',
      'Preparation for his role in the cosmic drama',
      'Growing awareness of greater purposes unfolding'
    ],
    spiritualGrowth: 'Understanding his eternal role as supporter of divine union',
    cosmicSignificance: 'Preparation to serve the cosmic couple\'s mission'
  },
  {
    character: 'Sage Vishwamitra',
    innerJourney: 'From accomplished guru to cosmic matchmaker',
    transformation: [
      'Acting on divine inspiration beyond logical reasoning',
      'Serving purposes greater than personal spiritual goals',
      'Facilitating cosmic unions through earthly means',
      'Demonstrating surrender to universal will',
      'Becoming instrument of cosmic choreography'
    ],
    spiritualGrowth: 'Complete alignment with universal dharmic purpose',
    cosmicSignificance: 'Serving as divine agent in cosmic plan'
  }
]

const sacredEncounters = [
  {
    encounter: 'Blessing of River Spirits',
    description: 'Divine beings residing in sacred waters offer protection and guidance',
    significance: 'Recognition of the cosmic importance of the journey',
    blessings: [
      'Safe passage through all territories',
      'Protection from negative influences',
      'Purification for the sacred meeting ahead',
      'Enhancement of spiritual receptivity'
    ],
    spiritualMessage: 'Divine consciousness receives support from all levels of existence'
  },
  {
    encounter: 'Guidance from Forest Sages',
    description: 'Enlightened hermits provide directions and prophetic insights',
    significance: 'Spiritual lineage supporting cosmic purpose',
    blessings: [
      'Confirmation of the righteous path',
      'Prophecies about future greatness',
      'Spiritual strength for challenges ahead',
      'Recognition of divine mission'
    ],
    spiritualMessage: 'Spiritual masters recognize and support divine incarnations'
  },
  {
    encounter: 'Signs from Nature',
    description: 'Auspicious omens and natural phenomena indicating divine favor',
    significance: 'Universe expressing approval of the cosmic journey',
    blessings: [
      'Favorable weather and conditions',
      'Auspicious bird calls and animal behavior',
      'Beautiful sunrises and peaceful evenings',
      'Fragrant flowers blooming along the path'
    ],
    spiritualMessage: 'Nature itself celebrates movements toward dharmic fulfillment'
  },
  {
    encounter: 'Inner Revelations',
    description: 'Deepening spiritual insights during contemplative travel',
    significance: 'Preparation of consciousness for cosmic meeting',
    blessings: [
      'Enhanced spiritual sensitivity',
      'Growing awareness of cosmic purpose',
      'Expansion of heart for divine love',
      'Preparation for spiritual partnership'
    ],
    spiritualMessage: 'Inner development prepares souls for their highest destiny'
  }
]

const anticipationBuilding = [
  {
    stage: 'Subtle Stirrings',
    description: 'Initial sense that this journey is unlike previous travels',
    manifestations: [
      'Unusual excitement without apparent cause',
      'Dreams filled with unknown but beautiful imagery',
      'Heart opening in inexplicable ways',
      'Sensing approach of something significant'
    ],
    spiritualDimension: 'Soul recognizing proximity to its complement'
  },
  {
    stage: 'Growing Awareness',
    description: 'Increasing certainty that destiny awaits in Mithila',
    manifestations: [
      'Natural magnetism toward the destination',
      'Conversations turning to topics of dharmic partnership',
      'Philosophical discussions about cosmic purpose',
      'Growing sensitivity to beauty and love'
    ],
    spiritualDimension: 'Consciousness preparing for divine union'
  },
  {
    stage: 'Heightened Sensitivity',
    description: 'Enhanced spiritual receptivity as Mithila approaches',
    manifestations: [
      'Increased awareness of divine presence everywhere',
      'Heart becoming more tender and open',
      'Natural appreciation for feminine divine energy',
      'Spontaneous expressions of devotion and reverence'
    ],
    spiritualDimension: 'Divine masculine preparing to meet divine feminine'
  },
  {
    stage: 'Arrival at Destiny',
    description: 'Reaching the threshold where cosmic purpose will unfold',
    manifestations: [
      'Overwhelming sense of rightness about being there',
      'Recognition of the sacred nature of the place',
      'Natural reverence for King Janaka\'s righteousness',
      'Anticipation reaching its peak before the meeting'
    ],
    spiritualDimension: 'Standing at the door of cosmic fulfillment'
  }
]

const modernRelevance = [
  {
    principle: 'Following Divine Guidance',
    teaching: 'Trusting guidance that comes through spiritual authority even when purposes are unclear',
    modernApplication: [
      'Following mentors and teachers who provide direction beyond logical understanding',
      'Trusting intuitive guidance that leads toward growth opportunities',
      'Accepting invitations and opportunities that feel spiritually significant',
      'Moving toward situations that promise spiritual development'
    ],
    practicalExample: 'Taking a job or moving to a place that feels right spiritually despite logical concerns'
  },
  {
    principle: 'Recognizing Divine Timing',
    teaching: 'Understanding that cosmic timing orchestrates perfect synchronicity for spiritual purpose',
    modernApplication: [
      'Recognizing when opportunities appear at perfect moments',
      'Trusting timing even when it seems inconvenient',
      'Preparing for destiny rather than forcing outcomes',
      'Allowing natural flow of events toward spiritual purpose'
    ],
    practicalExample: 'Meeting life partners or finding career paths through unexpected circumstances'
  },
  {
    principle: 'Spiritual Pilgrimage',
    teaching: 'Every significant journey contains opportunities for spiritual growth and divine encounter',
    modernApplication: [
      'Approaching travels and transitions as opportunities for growth',
      'Seeking spiritual meaning in geographical movements',
      'Using journeys as times for reflection and inner development',
      'Recognizing sacred aspects of all significant travels'
    ],
    practicalExample: 'Treating job relocations or educational pursuits as spiritual pilgrimages'
  },
  {
    principle: 'Preparation for Destiny',
    teaching: 'Souls must be spiritually prepared to receive their highest destiny and purpose',
    modernApplication: [
      'Continuous self-development to be worthy of life purpose',
      'Cultivating qualities needed for significant relationships',
      'Developing consciousness capable of receiving cosmic opportunities',
      'Preparing heart and mind for service to greater purposes'
    ],
    practicalExample: 'Personal development work that prepares for meaningful relationships and life missions'
  }
]

export default function JourneyToMithilaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/scriptures" className="text-gray-600 hover:text-teal-600 transition-colors">
              Scriptures
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/scriptures/ramayana" className="text-gray-600 hover:text-teal-600 transition-colors">
              Ramayana
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/scriptures/ramayana/bala-kanda" className="text-gray-600 hover:text-teal-600 transition-colors">
              Bala Kanda
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-teal-600 font-medium">Journey to Mithila</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Compass className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">🧭 Divine Journey</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sanskrit">
                मिथिला यात्रा
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-teal-100">
                Journey to Mithila
              </h2>
              <p className="text-lg text-cyan-100 leading-relaxed mb-8">
                {journeyToMithila.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#divine-orchestration"
                  className="bg-white text-teal-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Divine Plan
                </Link>
                <Link
                  href="#sacred-encounters"
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Sacred Encounters
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-teal-500/20 to-blue-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=450&fit=crop"
                  alt="Journey Through Sacred Landscapes"
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
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Calendar className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Timing</h3>
                <p className="text-gray-700">{journeyToMithila.timeframe}</p>
              </div>
              <div className="text-center">
                <Route className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Purpose</h3>
                <p className="text-gray-700">Divine Destiny</p>
              </div>
              <div className="text-center">
                <Heart className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Outcome</h3>
                <p className="text-gray-700">Cosmic Union</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-teal-800 mb-4">Spiritual Significance</h3>
              <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
                {journeyToMithila.spiritualSignificance}
              </p>
            </div>
          </div>
        </section>

        {/* Route and Sacred Places */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Sacred Route</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Each location on the journey carries spiritual significance and contributes to the cosmic purpose
            </p>
          </div>

          <div className="space-y-8">
            {routeAndPlaces.map((place, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${place.color} rounded-full flex items-center justify-center mr-6`}>
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{place.place}</h3>
                      <p className="text-gray-600">{place.significance}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">{place.description}</p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Sacred Aspects:</h4>
                      <ul className="space-y-2">
                        {place.sacredAspects.map((aspect, idx) => (
                          <li key={idx} className="flex items-start">
                            <Sparkles className="w-4 h-4 text-teal-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{aspect}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-teal-50 rounded-lg p-4">
                        <h4 className="font-semibold text-teal-800 text-sm mb-2">Spiritual Energy:</h4>
                        <p className="text-teal-700 text-sm">{place.spiritualEnergy}</p>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-800 text-sm mb-2">Modern Relevance:</h4>
                        <p className="text-blue-700 text-sm">{place.modernRelevance}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divine Orchestration */}
        <section id="divine-orchestration">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Divine Orchestration</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              How cosmic intelligence orchestrates seemingly casual events for profound spiritual purposes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {divineOrchestration.map((orchestration, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-teal-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{orchestration.aspect}</h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">{orchestration.description}</p>

                <div className="space-y-4">
                  <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-500">
                    <p className="text-sm font-semibold text-teal-800 mb-2">Hidden Purpose:</p>
                    <p className="text-teal-700 text-sm">{orchestration.hiddenPurpose}</p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-blue-800 mb-2">Spiritual Principle:</p>
                    <p className="text-blue-700 text-sm">{orchestration.spiritualPrinciple}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Evidence:</h4>
                    <ul className="space-y-1">
                      {orchestration.evidence.map((evidence, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-teal-500 mr-2 text-xs mt-1">•</span>
                          <span className="text-gray-600 text-xs">{evidence}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-sm font-semibold text-green-800 mb-1">Lesson:</p>
                    <p className="text-green-700 text-sm">{orchestration.lesson}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Character Development */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Inner Transformation During Travel</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              How each character undergoes subtle but profound changes during this sacred journey
            </p>
          </div>

          <div className="space-y-8">
            {characterDevelopment.map((char, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-teal-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{char.character}</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Inner Journey:</h4>
                    <p className="text-gray-700 text-sm mb-4">{char.innerJourney}</p>

                    <h4 className="font-semibold text-gray-800 mb-2">Transformation Process:</h4>
                    <ul className="space-y-1">
                      {char.transformation.map((change, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-teal-500 mr-2 text-xs mt-1">▸</span>
                          <span className="text-gray-600 text-xs">{change}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-teal-50 rounded-lg p-4">
                      <h4 className="font-semibold text-teal-800 text-sm mb-2">Spiritual Growth:</h4>
                      <p className="text-teal-700 text-sm">{char.spiritualGrowth}</p>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 text-sm mb-2">Cosmic Significance:</h4>
                      <p className="text-blue-700 text-sm">{char.cosmicSignificance}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sacred Encounters */}
        <section id="sacred-encounters">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sacred Encounters Along the Path</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Divine meetings and auspicious signs that mark this journey as cosmically significant
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sacredEncounters.map((encounter, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Star className="w-8 h-8 text-teal-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{encounter.encounter}</h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">{encounter.description}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">Blessings Received:</h4>
                    <ul className="space-y-1">
                      {encounter.blessings.map((blessing, idx) => (
                        <li key={idx} className="flex items-start">
                          <Sparkles className="w-3 h-3 text-teal-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 text-xs">{blessing}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-teal-50 rounded-lg p-3">
                    <h4 className="font-semibold text-teal-800 text-sm mb-1">Significance:</h4>
                    <p className="text-teal-700 text-sm mb-2">{encounter.significance}</p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-3">
                    <h4 className="font-semibold text-blue-800 text-sm mb-1">Spiritual Message:</h4>
                    <p className="text-blue-700 text-sm">{encounter.spiritualMessage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Anticipation Building */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Growing Anticipation</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The gradual building of cosmic anticipation as destiny approaches
            </p>
          </div>

          <div className="space-y-6">
            {anticipationBuilding.map((stage, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{stage.stage}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{stage.description}</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 text-sm">Manifestations:</h4>
                        <ul className="space-y-1">
                          {stage.manifestations.map((manifestation, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-teal-500 mr-2 text-xs mt-1">•</span>
                              <span className="text-gray-600 text-xs">{manifestation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-3">
                        <h4 className="font-semibold text-blue-800 text-sm mb-1">Spiritual Dimension:</h4>
                        <p className="text-blue-700 text-sm">{stage.spiritualDimension}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modern Relevance */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Modern Applications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              How the principles of divine journey apply to contemporary spiritual and life transitions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {modernRelevance.map((relevance, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <Gem className="w-8 h-8 text-teal-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{relevance.principle}</h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">{relevance.teaching}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Modern Applications:</h4>
                    <ul className="space-y-1">
                      {relevance.modernApplication.map((application, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-teal-500 mr-2 text-sm">•</span>
                          <span className="text-gray-600 text-sm">{application}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-teal-50 rounded-lg p-4">
                    <h4 className="font-semibold text-teal-800 text-sm mb-2">Practical Example:</h4>
                    <p className="text-teal-700 text-sm">{relevance.practicalExample}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white rounded-3xl p-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">🧭 Arrival at Destiny 🧭</h2>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              The journey is complete. In the beautiful gardens of Mithila, the cosmic moment of first sight between Rama and Sita awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/scriptures/ramayana/bala-kanda/sita-first-sight"
                className="bg-white text-teal-600 px-8 py-4 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
              >
                Next: First Sight of Sita
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