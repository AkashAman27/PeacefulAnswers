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
  Flower2,
  Baby,
  Sparkles,
  Target,
  Zap,
  Globe,
  Home,
  Music,
  Gem,
  Trophy,
  Crosshair,
  Flame,
  Hammer,
  Crown as CrownIcon,
  Eye
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shiva Bow Ceremony | Bala Kanda | Complete Ramayana | PeacefulAnswers',
  description: 'The grand swayamvara ceremony - King Janaka\'s challenge to string Lord Shiva\'s mighty bow. The ultimate test of divine worthiness to win Sita\'s hand in marriage.',
  keywords: 'Shiva bow ceremony, swayamvara, Pinaka bow, divine test, cosmic challenge, worthiness, Sita marriage, Bala Kanda, Ramayana',
  openGraph: {
    title: 'Shiva Bow Ceremony | The Ultimate Test of Divine Worthiness',
    description: 'When only divine consciousness can overcome the ultimate spiritual challenge',
    type: 'website',
  },
}

const shivaBowCeremony = {
  title: 'शिव धनुष समारोह - The Shiva Bow Ceremony',
  subtitle: 'The Ultimate Test of Divine Worthiness',
  timeframe: 'In the grand assembly hall of King Janaka\'s palace',
  description: 'King Janaka has declared the ultimate challenge for his daughter Sita\'s hand in marriage - whoever can string the mighty bow of Lord Shiva will be deemed worthy of her. This divine weapon, known as Pinaka, has remained unmoved by any mortal force. Kings and princes from across the world have gathered, but none have even been able to lift this cosmic weapon. The ceremony represents not just a contest of strength, but the ultimate test of spiritual worthiness and divine authority.',
  spiritualSignificance: 'The Shiva bow represents the ultimate spiritual challenge that only divine consciousness can overcome. It symbolizes the breaking through of all limitations, the demonstration of cosmic authority, and the worthiness to receive divine grace in the form of the perfect spiritual partner.',
  importance: 'This ceremony establishes the cosmic principle that divine union requires divine worthiness, and that some challenges can only be met by those who possess the highest spiritual authority.'
}

const shivaBowHistory = {
  name: 'Pinaka (पिनाक)',
  origin: 'Created by Lord Shiva himself as his primary weapon',
  material: 'Forged from cosmic elements beyond earthly matter',
  power: 'Capable of destroying entire worlds with a single arrow',
  history: [
    'Originally wielded by Lord Shiva in cosmic battles',
    'Used to destroy the demon cities of Tripura',
    'Gifted to King Janaka\'s ancestors for their devotion',
    'Kept as a sacred treasure in Mithila palace',
    'Never moved by any mortal being since its placement'
  ],
  characteristics: [
    'Enormous size requiring hundreds to carry',
    'Weight beyond normal human strength',
    'Divine energy that repels unworthy beings',
    'Cosmic vibrations that test spiritual purity',
    'Self-protecting mechanism against improper handling'
  ],
  spiritualMeaning: 'Represents the ultimate barrier between ordinary consciousness and divine authority',
  testNature: 'Not merely physical strength but cosmic worthiness and spiritual authority'
}

const ceremonyDetails = {
  setting: 'Grand assembly hall decorated for royal swayamvara',
  participants: [
    'Kings and princes from across the known world',
    'Royal families and noble houses',
    'Learned sages and spiritual authorities',
    'Citizens of Mithila as witnesses',
    'Divine beings observing from celestial realms'
  ],
  atmosphere: [
    'Magnificent decorations befitting cosmic ceremony',
    'Sacred mantras and Vedic chanting',
    'Fragrant flowers and precious ornaments',
    'Royal music and ceremonial drums',
    'Electric anticipation of witnessing divine event'
  ],
  arrangement: [
    'Shiva\'s bow placed on sacred pedestal',
    'Royal throne for King Janaka\'s oversight',
    'Designated area for challengers',
    'Gallery for assembled royalty',
    'Sacred fire for ceremonial blessings'
  ]
}

const challengersAndFailures = [
  {
    challenger: 'King of Ayodhya\'s Allied Rulers',
    description: 'Powerful kings from kingdoms allied with Dasharatha',
    attempt: 'Confident approach based on political strength and military might',
    failure: 'Unable to even approach the bow due to its divine energy',
    reaction: 'Humbled recognition of spiritual inadequacy',
    lesson: 'Political power is meaningless before spiritual authority',
    spiritualSignificance: 'Worldly authority cannot overcome cosmic challenges'
  },
  {
    challenger: 'Renowned Warriors and Champions',
    description: 'Famous warriors known for extraordinary physical strength',
    attempt: 'Relying on physical power and martial accomplishments',
    failure: 'Bow remains immovable despite their greatest efforts',
    reaction: 'Exhaustion and defeat despite legendary strength',
    lesson: 'Physical strength alone cannot meet spiritual challenges',
    spiritualSignificance: 'Material capabilities are insufficient for divine tests'
  },
  {
    challenger: 'Learned Kings and Wise Rulers',
    description: 'Scholarly rulers known for wisdom and knowledge',
    attempt: 'Approaching with intellectual understanding and proper technique',
    failure: 'Knowledge without divine authority proves inadequate',
    reaction: 'Philosophical acceptance of their limitations',
    lesson: 'Even wisdom requires divine grace to be effective',
    spiritualSignificance: 'Intellectual knowledge alone cannot achieve spiritual goals'
  },
  {
    challenger: 'Proud and Ambitious Princes',
    description: 'Young royalty confident in their abilities and destiny',
    attempt: 'Aggressive approach fueled by ego and ambition',
    failure: 'Bow actively repels their impure motivations',
    reaction: 'Anger and frustration at their defeat',
    lesson: 'Ego and selfish desire disqualify from divine grace',
    spiritualSignificance: 'Spiritual purity is prerequisite for cosmic authority'
  },
  {
    challenger: 'Devout Kings with Spiritual Practice',
    description: 'Rulers known for their religious devotion and practice',
    attempt: 'Respectful approach with proper prayers and preparation',
    failure: 'Despite spiritual practice, lack the specific divine authority',
    reaction: 'Graceful acceptance and recognition of divine will',
    lesson: 'Even spiritual practice requires cosmic authorization',
    spiritualSignificance: 'Specific divine mission requires specific divine empowerment'
  }
]

const ramaPreparation = [
  {
    stage: 'Observing the Failures',
    description: 'Rama quietly watches as numerous challengers fail to move the bow',
    innerProcess: [
      'Compassionate observation of others\' struggles',
      'Understanding the true nature of the challenge',
      'Recognition of the bow\'s divine essence',
      'Growing certainty about his own capability',
      'Patience waiting for the appropriate moment'
    ],
    spiritualDimension: 'Divine consciousness recognizing its rightful authority',
    lesson: 'True power is demonstrated through quiet confidence, not boastful display'
  },
  {
    stage: 'Seeking Guru\'s Permission',
    description: 'Rama humbly approaches Sage Vishwamitra for permission to attempt the challenge',
    innerProcess: [
      'Maintaining humility despite inner certainty',
      'Honoring spiritual authority and protocol',
      'Seeking blessing rather than assuming right',
      'Demonstrating proper student-teacher relationship',
      'Preparing mentally and spiritually for the task'
    ],
    spiritualDimension: 'Divine incarnation maintaining proper spiritual conduct',
    lesson: 'Even divine authority must be exercised with proper humility and respect'
  },
  {
    stage: 'Receiving Divine Blessing',
    description: 'Vishwamitra grants permission with full confidence in Rama\'s success',
    innerProcess: [
      'Gratitude for guru\'s blessing and confidence',
      'Inner alignment with cosmic purpose',
      'Complete surrender to divine will',
      'Natural preparation for demonstrating divine power',
      'Readiness to fulfill cosmic destiny'
    ],
    spiritualDimension: 'Spiritual authority recognizing and empowering divine mission',
    lesson: 'Authentic spiritual guidance recognizes and supports divine purpose'
  },
  {
    stage: 'Approaching the Sacred Bow',
    description: 'Rama walks toward the bow with natural grace and divine confidence',
    innerProcess: [
      'Complete absence of doubt or hesitation',
      'Natural communion with the divine weapon',
      'Recognition of the bow\'s true spiritual nature',
      'Effortless integration of divine power',
      'Joy at reuniting with cosmic instruments'
    ],
    spiritualDimension: 'Divine consciousness claiming its rightful cosmic tools',
    lesson: 'Divine authority naturally attracts and commands cosmic forces'
  }
]

const atmosphereShift = [
  {
    moment: 'Rama\'s Rising',
    description: 'The moment Rama stands to approach the challenge',
    energyChange: 'Sudden shift from disappointment to electric anticipation',
    crowdReaction: 'Spontaneous recognition of something extraordinary',
    spiritualShift: 'Divine presence becoming palpable in the assembly',
    cosmicSignificance: 'Universe preparing to witness divine demonstration'
  },
  {
    moment: 'The Approach',
    description: 'Rama walking toward the bow with divine grace',
    energyChange: 'Atmosphere charging with cosmic power',
    crowdReaction: 'Collective breath-holding in anticipation',
    spiritualShift: 'Sacred space intensifying around the ceremony',
    cosmicSignificance: 'Convergence of earthly event with cosmic purpose'
  },
  {
    moment: 'First Touch',
    description: 'Rama\'s hand making contact with Shiva\'s bow',
    energyChange: 'Explosion of divine energy throughout the hall',
    crowdReaction: 'Gasps of awe and recognition of divine power',
    spiritualShift: 'Immediate recognition of authentic spiritual authority',
    cosmicSignificance: 'Divine weapon acknowledging its rightful master'
  },
  {
    moment: 'Effortless Lifting',
    description: 'The bow rising easily in Rama\'s hands',
    energyChange: 'Joy and wonder replacing doubt and disappointment',
    crowdReaction: 'Cheers and celebrations beginning spontaneously',
    spiritualShift: 'Divine validation visible to all present',
    cosmicSignificance: 'Cosmic order confirming spiritual worthiness'
  }
]

const witnessReactions = [
  {
    witness: 'King Janaka',
    initialState: 'Worried that no one would prove worthy of Sita',
    reactionToRama: 'Overwhelming joy and relief at finding divine son-in-law',
    recognition: 'Immediate understanding of Rama\'s divine nature',
    emotion: 'Paternal love combined with spiritual reverence',
    significance: 'Earthly father recognizing cosmic worthiness'
  },
  {
    witness: 'Sita Devi',
    initialState: 'Anxious about the outcome of the ceremony',
    reactionToRama: 'Heart overflowing with love and divine recognition',
    recognition: 'Confirmation of her inner knowing about their connection',
    emotion: 'Joy, love, and spiritual fulfillment',
    significance: 'Divine feminine acknowledging divine masculine authority'
  },
  {
    witness: 'Sage Vishwamitra',
    initialState: 'Confident in his disciple\'s capability',
    reactionToRama: 'Pride in spiritual guidance bearing fruit',
    recognition: 'Satisfaction of cosmic purpose being fulfilled',
    emotion: 'Guru\'s joy in disciple\'s success',
    significance: 'Spiritual teacher witnessing divine mission advancing'
  },
  {
    witness: 'Failed Challengers',
    initialState: 'Disappointed and humbled by their failures',
    reactionToRama: 'Awed recognition of superior spiritual authority',
    recognition: 'Understanding of why they could not succeed',
    emotion: 'Respect and acceptance of divine hierarchy',
    significance: 'Worldly power acknowledging spiritual supremacy'
  },
  {
    witness: 'Common People',
    initialState: 'Excited spectators hoping to witness historic event',
    reactionToRama: 'Spontaneous devotion and recognition of divinity',
    recognition: 'Intuitive understanding of witnessing divine incarnation',
    emotion: 'Awe, joy, and spiritual upliftment',
    significance: 'Humanity recognizing and celebrating divine presence'
  }
]

const spiritualLessons = [
  {
    lesson: 'Divine Worthiness Cannot Be Faked',
    teaching: 'Authentic spiritual authority is demonstrated through natural capability, not forced effort',
    example: 'Only Rama can lift the bow because he alone possesses the divine authority',
    application: 'Developing genuine spiritual qualities rather than pretending to possess them',
    modernRelevance: 'Authentic leadership emerges naturally from genuine development, not manipulation'
  },
  {
    lesson: 'Spiritual Tests Reveal True Nature',
    teaching: 'Divine challenges expose the actual spiritual level of aspirants',
    example: 'The bow ceremony reveals who has genuine divine authority versus worldly power',
    application: 'Using spiritual challenges as opportunities for honest self-assessment',
    modernRelevance: 'Difficult situations reveal true character and capability'
  },
  {
    lesson: 'Humility Accompanies True Power',
    teaching: 'Authentic divine authority is exercised with humility and proper respect',
    example: 'Rama seeking permission and blessing despite his certainty of success',
    application: 'Exercising capabilities with humility and respect for proper protocol',
    modernRelevance: 'True leadership combines competence with humility and respect'
  },
  {
    lesson: 'Divine Union Requires Divine Qualification',
    teaching: 'The highest spiritual partnerships require the highest spiritual development',
    example: 'Only one with cosmic authority is worthy of union with divine feminine',
    application: 'Preparing oneself spiritually for the highest relationships and opportunities',
    modernRelevance: 'Quality relationships require quality personal development'
  },
  {
    lesson: 'Cosmic Purpose Transcends Personal Desire',
    teaching: 'Divine tests serve universal purposes beyond individual wishes',
    example: 'The ceremony ensuring that Sita\'s partner can fulfill cosmic mission',
    application: 'Understanding that spiritual developments serve larger purposes',
    modernRelevance: 'Personal success contributing to collective welfare'
  }
]

const cosmicDimensions = [
  {
    dimension: 'Test of Divine Authority',
    description: 'The bow ceremony as cosmic validation of spiritual worthiness',
    universalPrinciple: 'Divine authority must be demonstrated through divine capability',
    implications: [
      'Spiritual claims must be backed by spiritual power',
      'Cosmic responsibilities require cosmic qualifications',
      'Divine partnerships need divine worthiness',
      'Universal mission requires universal authority'
    ]
  },
  {
    dimension: 'Demonstration of Cosmic Order',
    description: 'The ceremony revealing the natural hierarchy of spiritual development',
    universalPrinciple: 'Cosmic order manifests through natural demonstration of capability',
    implications: [
      'True hierarchy based on spiritual development, not worldly status',
      'Natural selection of worthy souls for cosmic missions',
      'Divine challenges ensuring proper cosmic alignment',
      'Universal intelligence maintaining spiritual standards'
    ]
  },
  {
    dimension: 'Preparation for World Mission',
    description: 'The test ensuring Rama is ready for his cosmic responsibilities',
    universalPrinciple: 'Divine incarnations must demonstrate their authority before beginning world service',
    implications: [
      'Cosmic missions require cosmic credentials',
      'World service needs demonstrated divine capability',
      'Universal welfare depends on spiritually qualified leadership',
      'Divine incarnations proving worthiness for cosmic responsibility'
    ]
  }
]

export default function ShivaBowCeremonyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/scriptures" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Scriptures
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/scriptures/ramayana" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Ramayana
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/scriptures/ramayana/bala-kanda" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Bala Kanda
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-indigo-600 font-medium">Shiva Bow Ceremony</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Trophy className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">🏆 Ultimate Test</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sanskrit">
                शिव धनुष समारोह
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-indigo-100">
                The Shiva Bow Ceremony
              </h2>
              <p className="text-lg text-purple-100 leading-relaxed mb-8">
                {shivaBowCeremony.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#ceremony-details"
                  className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  The Grand Ceremony
                </Link>
                <Link
                  href="#spiritual-lessons"
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Divine Lessons
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=450&fit=crop"
                  alt="Divine Bow and Royal Assembly"
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
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Crown className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Event</h3>
                <p className="text-gray-700">Royal Swayamvara</p>
              </div>
              <div className="text-center">
                <Target className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Challenge</h3>
                <p className="text-gray-700">String Shiva\'s Bow</p>
              </div>
              <div className="text-center">
                <Trophy className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Prize</h3>
                <p className="text-gray-700">Sita\'s Hand</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-indigo-800 mb-4">Spiritual Significance</h3>
              <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
                {shivaBowCeremony.spiritualSignificance}
              </p>
            </div>
          </div>
        </section>

        {/* Shiva Bow History */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Divine Weapon: Pinaka</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Understanding the cosmic significance of Lord Shiva\'s mighty bow
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-indigo-800 mb-4">Sacred History</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Origin:</h4>
                    <p className="text-gray-700 text-sm">{shivaBowHistory.origin}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Divine Purpose:</h4>
                    <p className="text-gray-700 text-sm">{shivaBowHistory.power}</p>
                  </div>
                </div>

                <h4 className="font-semibold text-gray-800 mb-3 mt-6">Historical Journey:</h4>
                <ul className="space-y-2">
                  {shivaBowHistory.history.map((event, index) => (
                    <li key={index} className="flex items-start">
                      <Sparkles className="w-4 h-4 text-indigo-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{event}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Divine Characteristics:</h4>
                <ul className="space-y-2 mb-6">
                  {shivaBowHistory.characteristics.map((characteristic, index) => (
                    <li key={index} className="flex items-start">
                      <Zap className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{characteristic}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-4">
                  <div className="bg-indigo-50 rounded-lg p-4">
                    <h4 className="font-semibold text-indigo-800 text-sm mb-2">Spiritual Meaning:</h4>
                    <p className="text-indigo-700 text-sm">{shivaBowHistory.spiritualMeaning}</p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 text-sm mb-2">Test Nature:</h4>
                    <p className="text-purple-700 text-sm">{shivaBowHistory.testNature}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ceremony Details */}
        <section id="ceremony-details">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Grand Assembly</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The magnificent setting for this cosmic test of divine worthiness
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Crown className="w-8 h-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Distinguished Participants</h3>
              </div>
              <ul className="space-y-2">
                {ceremonyDetails.participants.map((participant, index) => (
                  <li key={index} className="flex items-start">
                    <Users className="w-4 h-4 text-indigo-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{participant}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Music className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Sacred Atmosphere</h3>
              </div>
              <ul className="space-y-2">
                {ceremonyDetails.atmosphere.map((element, index) => (
                  <li key={index} className="flex items-start">
                    <Sparkles className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{element}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Home className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Hall Arrangement</h3>
              </div>
              <ul className="space-y-2">
                {ceremonyDetails.arrangement.map((arrangement, index) => (
                  <li key={index} className="flex items-start">
                    <MapPin className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{arrangement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Challengers and Failures */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Failed Challengers</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              How various types of worldly power prove inadequate before divine authority
            </p>
          </div>

          <div className="space-y-6">
            {challengersAndFailures.map((challenger, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{challenger.challenger}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{challenger.description}</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                      <div className="bg-red-50 rounded-lg p-3">
                        <h4 className="font-semibold text-red-800 text-sm mb-1">Attempt:</h4>
                        <p className="text-red-700 text-sm mb-2">{challenger.attempt}</p>
                        <h4 className="font-semibold text-red-800 text-sm mb-1">Failure:</h4>
                        <p className="text-red-600 text-sm">{challenger.failure}</p>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-3">
                        <h4 className="font-semibold text-blue-800 text-sm mb-1">Reaction:</h4>
                        <p className="text-blue-700 text-sm mb-2">{challenger.reaction}</p>
                        <h4 className="font-semibold text-blue-800 text-sm mb-1">Lesson:</h4>
                        <p className="text-blue-600 text-sm">{challenger.lesson}</p>
                      </div>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-3">
                      <h4 className="font-semibold text-purple-800 text-sm mb-1">Spiritual Significance:</h4>
                      <p className="text-purple-700 text-sm">{challenger.spiritualSignificance}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rama's Preparation */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Rama\'s Divine Preparation</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              How divine consciousness prepares for demonstrating cosmic authority
            </p>
          </div>

          <div className="space-y-8">
            {ramaPreparation.map((stage, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mr-6">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{stage.stage}</h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">{stage.description}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Inner Process:</h4>
                    <ul className="space-y-2">
                      {stage.innerProcess.map((process, idx) => (
                        <li key={idx} className="flex items-start">
                          <Eye className="w-4 h-4 text-indigo-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{process}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-indigo-50 rounded-lg p-4">
                      <h4 className="font-semibold text-indigo-800 text-sm mb-2">Spiritual Dimension:</h4>
                      <p className="text-indigo-700 text-sm">{stage.spiritualDimension}</p>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 text-sm mb-2">Universal Lesson:</h4>
                      <p className="text-purple-700 text-sm">{stage.lesson}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Atmosphere Shift */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Cosmic Shift</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              How the atmosphere transforms when divine consciousness prepares to act
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {atmosphereShift.map((moment, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-indigo-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{moment.moment}</h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">{moment.description}</p>

                <div className="space-y-3">
                  <div className="bg-yellow-50 rounded-lg p-3">
                    <h4 className="font-semibold text-yellow-800 text-sm mb-1">Energy Change:</h4>
                    <p className="text-yellow-700 text-sm">{moment.energyChange}</p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-3">
                    <h4 className="font-semibold text-green-800 text-sm mb-1">Crowd Reaction:</h4>
                    <p className="text-green-700 text-sm">{moment.crowdReaction}</p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-3">
                    <h4 className="font-semibold text-blue-800 text-sm mb-1">Spiritual Shift:</h4>
                    <p className="text-blue-700 text-sm">{moment.spiritualShift}</p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-3">
                    <h4 className="font-semibold text-purple-800 text-sm mb-1">Cosmic Significance:</h4>
                    <p className="text-purple-700 text-sm">{moment.cosmicSignificance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spiritual Lessons */}
        <section id="spiritual-lessons">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Eternal Spiritual Lessons</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The timeless principles revealed through this ultimate test of worthiness
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {spiritualLessons.map((lesson, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <Gem className="w-8 h-8 text-indigo-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{lesson.lesson}</h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">{lesson.teaching}</p>

                <div className="space-y-4">
                  <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
                    <p className="text-sm font-semibold text-indigo-800 mb-2">Example from Ceremony:</p>
                    <p className="text-indigo-700 text-sm">{lesson.example}</p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-purple-800 mb-2">Spiritual Application:</p>
                    <p className="text-purple-700 text-sm">{lesson.application}</p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-blue-800 mb-2">Modern Relevance:</p>
                    <p className="text-blue-700 text-sm">{lesson.modernRelevance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white rounded-3xl p-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">🏆 The Moment of Truth Arrives 🏆</h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              The stage is set, the challengers have failed, and now Rama approaches the divine bow. The cosmic moment of demonstration is at hand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/scriptures/ramayana/bala-kanda/bow-breaking"
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
              >
                Next: The Breaking of Shiva\'s Bow
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