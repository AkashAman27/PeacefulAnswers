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
  Crosshair,
  AlertTriangle,
  CheckCircle,
  Flame,
  Wind,
  Skull
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Slaying of Tataka | Bala Kanda | Complete Ramayana | PeacefulAnswers',
  description: 'The first demon conquest of Lord Rama - the slaying of demoness Tataka. Explore the moral dilemma, dharmic duty, and spiritual significance of this pivotal battle.',
  keywords: 'Tataka vadha, first demon slaying, Rama dharma, kshatriya duty, Bala Kanda, Ramayana, moral dilemma, dharmic warfare',
  openGraph: {
    title: 'Slaying of Tataka | Rama\'s First Divine Mission',
    description: 'When duty calls for difficult action - Rama\'s first test of dharmic warfare',
    type: 'website',
  },
}

const tatakaVadha = {
  title: 'ताड़का वध - Slaying of Tataka',
  subtitle: 'The First Test of Dharmic Duty',
  timeframe: 'During journey with Vishwamitra',
  description: 'The slaying of Tataka represents Rama\'s first major spiritual and moral test. This demoness had been terrorizing the region, preventing sages from performing their spiritual practices and destroying the natural order. Despite initial hesitation about fighting a woman, Rama learns the profound lesson that true compassion sometimes requires firm action to protect the innocent and preserve dharma.',
  spiritualSignificance: 'This episode teaches that dharmic duty transcends conventional social norms when the protection of righteousness is at stake. It demonstrates how divine consciousness must sometimes use force to eliminate negative influences that obstruct spiritual progress and harm the innocent.',
  importance: 'Marks Rama\'s transition from protected prince to active protector of dharma, establishing the principle that compassion must be balanced with strength.'
}

const tatakaBackground = {
  originalForm: 'Beautiful Yakshi (Nature Spirit)',
  transformation: 'Cursed to become a demoness',
  curse: 'Cursed by Sage Agastya for protecting her demon son Subahu',
  currentState: 'Terrorizing the region around Vishwamitra\'s ashram',
  powers: [
    'Immense physical strength equal to 1000 elephants',
    'Ability to change shape and size at will',
    'Control over natural elements and storms',
    'Invisibility and supernatural speed',
    'Destructive magical powers',
    'Resistance to conventional weapons'
  ],
  destructiveActions: [
    'Preventing sages from performing yajnas',
    'Destroying hermitages and sacred groves',
    'Killing innocent travelers and pilgrims',
    'Polluting water sources and sacred places',
    'Creating terror and instability in the region',
    'Blocking spiritual practices and dharmic activities'
  ]
}

const moralDilemma = {
  ramasInitialReaction: 'Reluctance to fight a woman',
  socialNorms: 'Traditional prohibition against harming women',
  dharamicConflict: 'Duty as protector vs. conventional morality',
  vishwamitraTeaching: 'Higher dharma transcends conventional rules',
  resolution: 'Understanding that protection of dharma is supreme duty',
  lesson: 'True compassion sometimes requires difficult action'
}

const battleSequence = [
  {
    phase: 'Vishwamitra\'s Instruction',
    description: 'Sage Vishwamitra explains Tataka\'s destructive nature and instructs Rama that eliminating her is essential for the welfare of all beings.',
    details: [
      'Explanation of Tataka\'s history and curse',
      'Description of her ongoing destructive activities',
      'Teaching about kshatriya dharma and duty',
      'Clarification that this is righteous action, not violence',
      'Emphasis on protecting the innocent and defenseless'
    ],
    spiritualAspect: 'Learning to see beyond surface appearances to essential nature',
    color: 'from-blue-500 to-purple-500'
  },
  {
    phase: 'Rama\'s Initial Hesitation',
    description: 'Rama expresses concern about fighting a woman, showing his natural compassion and adherence to traditional dharmic codes.',
    details: [
      'Expression of moral concern about harming a woman',
      'Reference to traditional teachings about protecting women',
      'Internal conflict between duty and conventional morality',
      'Seeking clarification from his spiritual guide',
      'Demonstration of thoughtful ethical consideration'
    ],
    spiritualAspect: 'The divine nature questioning conventional limitations',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    phase: 'Dharmic Clarification',
    description: 'Vishwamitra explains the higher principles of dharma, teaching that protection of righteousness transcends conventional social rules.',
    details: [
      'Teaching about contextual application of dharma',
      'Explanation of kshatriya duty to protect dharma',
      'Clarification that Tataka\'s actions have forfeited protection',
      'Emphasis on greater good over individual considerations',
      'Instruction on the nature of divine compassion'
    ],
    spiritualAspect: 'Understanding that true dharma adapts to circumstances',
    color: 'from-green-500 to-teal-500'
  },
  {
    phase: 'Tataka\'s Attack',
    description: 'Tataka, sensing the threat to her domain, attacks with tremendous fury, displaying her supernatural powers and demonic nature.',
    details: [
      'Appearance with terrifying roar and threatening gestures',
      'Display of supernatural size and demonic form',
      'Attack with boulders, trees, and supernatural weapons',
      'Creation of dust storms and natural disturbances',
      'Demonstration of her true destructive nature'
    ],
    spiritualAspect: 'Negative forces revealing their true destructive nature when confronted',
    color: 'from-red-500 to-orange-500'
  },
  {
    phase: 'The Divine Arrow',
    description: 'Rama, now understanding his dharmic duty clearly, releases a single arrow that strikes Tataka\'s heart, eliminating her instantly and mercifully.',
    details: [
      'Perfect aim guided by divine consciousness',
      'Single arrow striking the heart for instant death',
      'Merciful elimination without unnecessary suffering',
      'Immediate restoration of peace to the region',
      'Liberation of Tataka from her cursed existence'
    ],
    spiritualAspect: 'Divine precision that eliminates negativity while showing mercy',
    color: 'from-purple-500 to-pink-500'
  },
  {
    phase: 'Restoration and Celebration',
    description: 'With Tataka\'s elimination, peace returns to the region, sages can resume their practices, and nature itself celebrates the restoration of dharma.',
    details: [
      'Immediate calming of disturbed natural elements',
      'Return of birds, animals, and natural harmony',
      'Sages emerging to offer gratitude and blessings',
      'Restoration of sacred spaces and ashrams',
      'Celebration of dharma\'s victory over adharma'
    ],
    spiritualAspect: 'How elimination of negative forces restores natural spiritual order',
    color: 'from-green-500 to-blue-500'
  }
]

const dharamicLessons = [
  {
    principle: 'Contextual Application of Dharma',
    teaching: 'Dharma is not rigid adherence to rules but intelligent application of principles based on context and consequences.',
    example: 'While protecting women is dharmic, protecting a destructive force that harms innocents would be adharmic',
    application: 'Learning to evaluate situations based on their essential nature rather than superficial appearances',
    scripture: 'धर्मस्य तत्त्वं निहितं गुहायाम् (The essence of dharma is hidden in the cave of the heart)'
  },
  {
    principle: 'Protection of the Innocent',
    teaching: 'The highest dharma is protection of those who cannot protect themselves from forces of destruction.',
    example: 'Eliminating Tataka to protect sages, travelers, and all beings from her terror',
    application: 'Standing up against oppression and destructive forces in society',
    scripture: 'परित्राणाय साधूनाम् विनाशाय च दुष्कृताम् (For the protection of the good and destruction of evil)'
  },
  {
    principle: 'Compassionate Strength',
    teaching: 'True compassion sometimes requires the use of force to prevent greater harm and suffering.',
    example: 'Rama\'s merciful but decisive action that ended Tataka\'s suffering and others\' terror',
    application: 'Understanding when firmness and strength serve the greater good',
    scripture: 'अहिंसा परमो धर्मः धर्म हिंसा तथैव च (Non-violence is the highest dharma, but violence in service of dharma is equally valid)'
  },
  {
    principle: 'Spiritual Authority and Guidance',
    teaching: 'Accepting guidance from realized spiritual masters, even when it challenges conventional understanding.',
    example: 'Rama accepting Vishwamitra\'s teaching despite initial moral reservations',
    application: 'Surrendering to authentic spiritual guidance beyond personal preferences',
    scripture: 'गुरुर्ब्रह्मा गुरुर्विष्णुर्गुरुर्देवो महेश्वरः (The Guru is Brahma, Vishnu, and Maheshwara)'
  }
]

const characterTransformation = [
  {
    aspect: 'Rama\'s Growth',
    before: 'Protected prince with theoretical knowledge of dharma',
    process: 'Facing moral complexity and making difficult dharmic decisions',
    after: 'Active protector who understands practical application of righteousness',
    significance: 'Transition from passive goodness to active dharmic engagement'
  },
  {
    aspect: 'Understanding of Compassion',
    before: 'Conventional compassion based on external appearances',
    process: 'Learning that true compassion considers ultimate consequences',
    after: 'Divine compassion that acts for the highest good of all beings',
    significance: 'Evolution from emotional sympathy to spiritual wisdom'
  },
  {
    aspect: 'Kshatriya Dharma',
    before: 'Theoretical understanding of warrior duties',
    process: 'Practical application of protective responsibilities',
    after: 'Full embodiment of righteous warrior consciousness',
    significance: 'Actualizing the role of divine protector'
  },
  {
    aspect: 'Spiritual Confidence',
    before: 'Dependence on conventional moral guidelines',
    process: 'Learning to trust divine discrimination and spiritual guidance',
    after: 'Confidence in dharmic decision-making in complex situations',
    significance: 'Development of spiritual autonomy and divine wisdom'
  }
]

const cosmicSignificance = [
  {
    level: 'Personal Transformation',
    description: 'Rama\'s evolution from protected prince to active protector of dharma',
    implications: [
      'Development of practical dharmic wisdom',
      'Integration of compassion with strength',
      'Acceptance of difficult responsibilities',
      'Growth in spiritual confidence and authority'
    ]
  },
  {
    level: 'Social Order',
    description: 'Restoration of peace and safety for spiritual practitioners and innocent beings',
    implications: [
      'Protection of dharmic activities and spiritual practices',
      'Elimination of fear and terror from the region',
      'Restoration of natural harmony and balance',
      'Enabling of spiritual progress for all beings'
    ]
  },
  {
    level: 'Cosmic Balance',
    description: 'Reestablishment of divine order through elimination of destructive forces',
    implications: [
      'Victory of dharma over adharma',
      'Demonstration of divine intervention in worldly affairs',
      'Restoration of cosmic harmony and natural law',
      'Setting precedent for future dharmic battles'
    ]
  }
]

const modernRelevance = [
  {
    situation: 'Social Justice',
    application: 'Standing against oppression and injustice, even when it\'s difficult or unpopular',
    example: 'Protecting vulnerable communities from exploitation or abuse',
    guidance: 'Sometimes protecting the innocent requires confronting harmful systems or individuals'
  },
  {
    situation: 'Environmental Protection',
    application: 'Taking action against forces that destroy nature and harm ecosystem balance',
    example: 'Opposing industrial practices that pollute and destroy natural habitats',
    guidance: 'Environmental dharma may require firm action against destructive practices'
  },
  {
    situation: 'Personal Relationships',
    application: 'Setting boundaries with destructive individuals, even family members',
    example: 'Protecting oneself and others from abusive or manipulative behavior',
    guidance: 'True compassion sometimes requires saying no to harmful behavior'
  },
  {
    situation: 'Professional Ethics',
    application: 'Confronting unethical practices in workplace or business contexts',
    example: 'Whistleblowing or refusing to participate in corrupt practices',
    guidance: 'Professional dharma may require challenging authority for greater good'
  }
]

export default function TatakaVadhaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/scriptures" className="text-gray-600 hover:text-red-600 transition-colors">
              Scriptures
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/scriptures/ramayana" className="text-gray-600 hover:text-red-600 transition-colors">
              Ramayana
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/scriptures/ramayana/bala-kanda" className="text-gray-600 hover:text-red-600 transition-colors">
              Bala Kanda
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-red-600 font-medium">Tataka Vadha</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Target className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">⚔️ First Battle</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sanskrit">
                ताड़का वध
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-orange-100">
                Slaying of Tataka
              </h2>
              <p className="text-lg text-yellow-100 leading-relaxed mb-8">
                {tatakaVadha.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#battle-sequence"
                  className="bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  The Battle
                </Link>
                <Link
                  href="#dharmic-lessons"
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Dharmic Lessons
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-red-500/20 to-orange-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1578528011634-50c02b2e6ce6?w=600&h=450&fit=crop"
                  alt="The Battle with Tataka"
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
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Calendar className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">When</h3>
                <p className="text-gray-700">{tatakaVadha.timeframe}</p>
              </div>
              <div className="text-center">
                <Crosshair className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Challenge</h3>
                <p className="text-gray-700">First Dharmic Test</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Outcome</h3>
                <p className="text-gray-700">Dharma Preserved</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-red-800 mb-4">Spiritual Significance</h3>
              <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
                {tatakaVadha.spiritualSignificance}
              </p>
            </div>
          </div>
        </section>

        {/* Tataka Background */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Understanding Tataka</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              From beautiful nature spirit to destructive demoness - the tragic transformation that necessitated divine intervention
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Skull className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">The Curse and Transformation</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Original Form:</h4>
                  <p className="text-gray-700 text-sm">{tatakaBackground.originalForm}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">The Curse:</h4>
                  <p className="text-gray-700 text-sm">{tatakaBackground.curse}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Current State:</h4>
                  <p className="text-gray-700 text-sm">{tatakaBackground.currentState}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <Zap className="w-5 h-5 text-orange-600 mr-2" />
                  Supernatural Powers:
                </h4>
                <ul className="space-y-2">
                  {tatakaBackground.powers.map((power, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2 text-sm">•</span>
                      <span className="text-gray-700 text-sm">{power}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                  Destructive Activities:
                </h4>
                <ul className="space-y-2">
                  {tatakaBackground.destructiveActions.map((action, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2 text-sm">•</span>
                      <span className="text-gray-700 text-sm">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Moral Dilemma */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Moral Dilemma</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Rama\'s initial struggle between conventional morality and dharmic duty
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Initial Reaction</h3>
                <p className="text-gray-700 text-sm">{moralDilemma.ramasInitialReaction}</p>
              </div>
              <div className="text-center">
                <Book className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Social Norms</h3>
                <p className="text-gray-700 text-sm">{moralDilemma.socialNorms}</p>
              </div>
              <div className="text-center">
                <Crown className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Dharmic Conflict</h3>
                <p className="text-gray-700 text-sm">{moralDilemma.dharamicConflict}</p>
              </div>
            </div>

            <div className="mt-8 bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-800 mb-2">Vishwamitra\'s Teaching:</h4>
              <p className="text-yellow-700 text-sm mb-2">{moralDilemma.vishwamitraTeaching}</p>
              <p className="text-yellow-600 text-xs italic">Resolution: {moralDilemma.resolution}</p>
            </div>
          </div>
        </section>

        {/* Battle Sequence */}
        <section id="battle-sequence">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Battle Sequence</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The unfolding of Rama\'s first dharmic battle - from hesitation to decisive action
            </p>
          </div>

          <div className="space-y-8">
            {battleSequence.map((phase, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-full flex items-center justify-center mr-6`}>
                      <span className="text-white font-bold text-xl">{index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{phase.phase}</h3>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">{phase.description}</p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Details:</h4>
                      <ul className="space-y-2">
                        {phase.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-red-500 mr-2 text-sm">•</span>
                            <span className="text-gray-600 text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`bg-gradient-to-br ${phase.color} opacity-10 rounded-lg p-4`}>
                      <h4 className="font-semibold text-gray-800 mb-2">Spiritual Aspect:</h4>
                      <p className="text-gray-700 text-sm">{phase.spiritualAspect}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Character Transformation */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transformation Through Trial</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              How this first test transformed Rama\'s understanding and capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {characterTransformation.map((transformation, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Sparkles className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{transformation.aspect}</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-red-50 rounded-lg p-3">
                    <h4 className="font-semibold text-red-800 text-sm mb-1">Before:</h4>
                    <p className="text-red-700 text-sm">{transformation.before}</p>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-3">
                    <h4 className="font-semibold text-orange-800 text-sm mb-1">Process:</h4>
                    <p className="text-orange-700 text-sm">{transformation.process}</p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-3">
                    <h4 className="font-semibold text-green-800 text-sm mb-1">After:</h4>
                    <p className="text-green-700 text-sm">{transformation.after}</p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-3">
                    <h4 className="font-semibold text-blue-800 text-sm mb-1">Significance:</h4>
                    <p className="text-blue-700 text-sm">{transformation.significance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dharmic Lessons */}
        <section id="dharmic-lessons">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Profound Dharmic Lessons</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The timeless principles of righteous action taught through this episode
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {dharamicLessons.map((lesson, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <Gem className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{lesson.principle}</h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">{lesson.teaching}</p>

                <div className="bg-red-50 rounded-lg p-4 mb-4 border-l-4 border-red-500">
                  <p className="text-sm font-semibold text-red-800 mb-2">Example from Episode:</p>
                  <p className="text-red-700 text-sm">{lesson.example}</p>
                </div>

                <div className="bg-orange-50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-orange-800 mb-2">Modern Application:</p>
                  <p className="text-orange-700 text-sm">{lesson.application}</p>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4">
                  <p className="text-yellow-800 font-sanskrit text-sm">{lesson.scripture}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modern Relevance */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Modern Relevance</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              How Tataka Vadha\'s lessons apply to contemporary challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modernRelevance.map((relevance, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{relevance.situation}</h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Application:</h4>
                    <p className="text-gray-700 text-sm">{relevance.application}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Example:</h4>
                    <p className="text-gray-600 text-sm">{relevance.example}</p>
                  </div>

                  <div className="bg-red-50 rounded-lg p-3">
                    <h4 className="font-semibold text-red-800 text-sm mb-1">Guidance:</h4>
                    <p className="text-red-700 text-sm">{relevance.guidance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white rounded-3xl p-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">⚔️ Continue the Divine Mission ⚔️</h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              With dharmic duty now understood, Rama is ready to receive divine weapons from Sage Vishwamitra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/scriptures/ramayana/bala-kanda/divine-weapons"
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
              >
                Next: Divine Weapons
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