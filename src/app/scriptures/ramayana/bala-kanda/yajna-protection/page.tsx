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
  Flame,
  CheckCircle,
  AlertTriangle,
  Crosshair,
  Eye,
  Wind
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Protection of Sacred Yajna | Bala Kanda | Complete Ramayana | PeacefulAnswers',
  description: 'Rama and Lakshmana protect Vishwamitra\'s sacred yajna from demons Subahu and Maricha. The epic battle showcasing divine weapons and dharmic protection.',
  keywords: 'yajna protection, Subahu, Maricha, sacred fire, dharmic duty, divine weapons, spiritual practices, Bala Kanda, Ramayana',
  openGraph: {
    title: 'Protection of Sacred Yajna | Divine Guardianship in Action',
    description: 'When divine consciousness protects sacred practices from forces of destruction',
    type: 'website',
  },
}

const yajnaProtection = {
  title: 'यज्ञ रक्षा - Protection of the Sacred Yajna',
  subtitle: 'Divine Guardianship of Spiritual Practices',
  timeframe: 'At Vishwamitra\'s ashram in the forest',
  description: 'This episode represents the climactic test of Rama and Lakshmana\'s training as they stand guard over Sage Vishwamitra\'s sacred yajna. The demons Subahu and Maricha, along with their army, launch a coordinated attack to pollute and destroy the ceremony. The brothers must use their divine weapons and spiritual training to protect the sacred fire and ensure the completion of this cosmic ritual.',
  spiritualSignificance: 'The protection of yajna symbolizes the eternal struggle between forces that preserve spiritual practices and those that seek to destroy them. It demonstrates how divine consciousness actively protects and maintains the channels through which cosmic grace flows to benefit all beings.',
  importance: 'This episode establishes the role of divine incarnations as protectors of spiritual practices and shows how dharmic duty extends to safeguarding the means of spiritual progress for all humanity.'
}

const yajnaSignificance = {
  purpose: 'Universal welfare and cosmic harmony',
  duration: '6 days and nights of continuous ritual',
  participants: 'Sage Vishwamitra and assembled rishis',
  benefits: [
    'Restoration of natural balance in the region',
    'Generation of positive cosmic energy',
    'Purification of atmosphere and environment',
    'Blessing of peace and prosperity',
    'Strengthening of dharmic forces',
    'Opening of divine channels for cosmic grace'
  ],
  vulnerability: 'Sacred fire must remain pure and uninterrupted',
  consequence: 'Pollution or interruption would negate all spiritual benefits'
}

const demonForces = [
  {
    demon: 'Subahu',
    role: 'Primary leader of the demonic attack',
    powers: [
      'Supernatural strength and size',
      'Command over lesser demons',
      'Ability to pollute sacred spaces',
      'Mastery of dark magic and illusions',
      'Resistance to conventional weapons'
    ],
    strategy: 'Direct frontal assault on the yajna',
    motivation: 'Destruction of spiritual practices that strengthen dharma',
    background: 'Powerful rakshasa dedicated to preventing spiritual progress',
    color: 'from-red-600 to-orange-600'
  },
  {
    demon: 'Maricha',
    role: 'Secondary leader and strategic planner',
    powers: [
      'Shape-shifting abilities',
      'Illusion and deception mastery',
      'Supernatural speed and agility',
      'Command over natural elements',
      'Advanced magical knowledge'
    ],
    strategy: 'Diversionary tactics and magical interference',
    motivation: 'Preventing cosmic rituals that benefit humanity',
    background: 'Cunning rakshasa skilled in supernatural warfare',
    color: 'from-purple-600 to-red-600'
  },
  {
    demon: 'Demon Army',
    role: 'Overwhelming force to disrupt the ceremony',
    powers: [
      'Numbers advantage with hundreds of demons',
      'Various supernatural abilities',
      'Coordination in group attacks',
      'Ability to create chaos and confusion',
      'Different types of demonic powers'
    ],
    strategy: 'Swarm tactics to overwhelm defenses',
    motivation: 'Following their leaders in destroying dharmic practices',
    background: 'Lesser rakshasas united in opposition to spiritual progress',
    color: 'from-gray-600 to-red-600'
  }
]

const battleSequence = [
  {
    phase: 'Preparation and Vigilance',
    timeframe: 'First 5 days of yajna',
    description: 'Rama and Lakshmana take positions around the sacred fire, maintaining constant vigilance while the yajna proceeds peacefully.',
    details: [
      'Strategic positioning around the yajna mandala',
      'Continuous meditation and spiritual alertness',
      'Coordination with Vishwamitra\'s instructions',
      'Monitoring of surroundings for any threats',
      'Maintaining spiritual purity and focus'
    ],
    outcome: 'Peaceful progress of the sacred ceremony',
    lesson: 'Vigilance and preparation are essential for protecting dharma',
    color: 'from-blue-500 to-green-500'
  },
  {
    phase: 'The Demonic Assault',
    timeframe: 'Sixth day, crucial moment of yajna',
    description: 'As the yajna reaches its climactic phase, Subahu leads a massive coordinated attack with his demon army to destroy the sacred ceremony.',
    details: [
      'Sudden appearance of Subahu with terrifying roar',
      'Coordinated attack from multiple directions',
      'Attempts to pollute the sacred fire with blood and filth',
      'Maricha creating illusions and diversions',
      'Lesser demons swarming from all sides'
    ],
    outcome: 'Direct threat to the sacred fire requiring immediate action',
    lesson: 'Negative forces attack spiritual practices at their most critical moments',
    color: 'from-red-500 to-orange-500'
  },
  {
    phase: 'Divine Weapon Deployment',
    timeframe: 'Immediate response to attack',
    description: 'Rama and Lakshmana unleash their divine weapons with precision and power, demonstrating perfect mastery over cosmic forces.',
    details: [
      'Rama invoking Manavastra against Subahu',
      'Lakshmana using Vayavastra against demon army',
      'Perfect coordination between the brothers',
      'Strategic use of different weapons for different threats',
      'Maintaining protection of the sacred fire throughout'
    ],
    outcome: 'Systematic elimination of demonic forces',
    lesson: 'Divine weapons serve the protection of righteousness',
    color: 'from-purple-500 to-blue-500'
  },
  {
    phase: 'Subahu\'s Destruction',
    timeframe: 'Climax of the battle',
    description: 'Rama\'s perfectly aimed arrow strikes Subahu\'s heart, destroying the primary threat to the yajna with divine precision.',
    details: [
      'Single arrow charged with divine power',
      'Perfect aim guided by dharmic purpose',
      'Instant destruction of the demon leader',
      'Immediate collapse of demon morale',
      'Restoration of protective energy around yajna'
    ],
    outcome: 'Primary threat eliminated with minimal force',
    lesson: 'Precision and purpose are more powerful than excessive force',
    color: 'from-yellow-500 to-red-500'
  },
  {
    phase: 'Maricha\'s Compassionate Exile',
    timeframe: 'Final phase of battle',
    description: 'Rather than destroying Maricha, Rama shows divine compassion by hurling him far across the ocean, sparing his life while removing the threat.',
    details: [
      'Decision to show mercy rather than destroy',
      'Powerful throw sending Maricha across the ocean',
      'Removal of threat without taking life unnecessarily',
      'Demonstration of divine compassion in warfare',
      'Setting precedent for proportional response'
    ],
    outcome: 'Threat neutralized through compassionate strength',
    lesson: 'True strength includes knowing when to show mercy',
    color: 'from-green-500 to-blue-500'
  },
  {
    phase: 'Yajna Completion',
    timeframe: 'After battle conclusion',
    description: 'With all threats eliminated, the sacred yajna proceeds to successful completion, fulfilling its cosmic purpose.',
    details: [
      'Restoration of perfect peace and sanctity',
      'Completion of all ritual procedures',
      'Distribution of blessed offerings',
      'Gratitude from all assembled sages',
      'Cosmic benefits manifesting throughout the region'
    ],
    outcome: 'Sacred mission accomplished successfully',
    lesson: 'Protection of dharma enables spiritual progress for all',
    color: 'from-orange-500 to-yellow-500'
  }
]

const strategicElements = [
  {
    aspect: 'Timing of Attack',
    description: 'Demons attack at the most crucial moment when the yajna cannot be interrupted',
    significance: 'Shows how negative forces target spiritual practices at their most vulnerable moments',
    counterStrategy: 'Constant vigilance and preparation for critical moments'
  },
  {
    aspect: 'Coordinated Assault',
    description: 'Multiple types of threats from different directions requiring diverse responses',
    significance: 'Demonstrates the organized nature of forces opposing spiritual progress',
    counterStrategy: 'Coordinated defense using complementary skills and weapons'
  },
  {
    aspect: 'Pollution Tactics',
    description: 'Attempts to corrupt the sacred fire rather than just destroy it',
    significance: 'Reveals how negative forces seek to pervert rather than simply eliminate dharma',
    counterStrategy: 'Maintaining purity of intention and spiritual focus'
  },
  {
    aspect: 'Overwhelming Numbers',
    description: 'Using superior numbers to create chaos and confusion',
    significance: 'Shows how quantity of negative forces tries to overcome quality of dharmic protection',
    counterStrategy: 'Superior skill, divine weapons, and spiritual authority'
  }
]

const spiritualLessons = [
  {
    lesson: 'Protection of Spiritual Practices',
    teaching: 'Spiritual practices require active protection from forces that seek to disrupt or corrupt them.',
    example: 'Rama and Lakshmana standing guard over the yajna throughout its duration',
    application: 'Creating and maintaining environments conducive to spiritual growth',
    modernRelevance: 'Protecting meditation spaces, spiritual communities, and sacred traditions'
  },
  {
    lesson: 'Proportional Spiritual Response',
    teaching: 'The response to threats should be proportional and purposeful, not excessive or vindictive.',
    example: 'Destroying Subahu who was irredeemably evil while sparing Maricha who could be reformed',
    application: 'Dealing with obstacles and negative influences with appropriate but not excessive force',
    modernRelevance: 'Responding to conflicts and challenges with measured but effective action'
  },
  {
    lesson: 'Vigilance in Spiritual Life',
    teaching: 'Spiritual progress requires constant alertness to subtle and gross threats to dharmic practice.',
    example: 'Maintaining continuous watch over the sacred fire for six days and nights',
    application: 'Developing awareness of influences that can disrupt spiritual practices',
    modernRelevance: 'Recognizing and countering distractions and negative influences in modern life'
  },
  {
    lesson: 'Divine Weapons as Spiritual Tools',
    teaching: 'Spiritual powers and abilities are tools for serving dharma, not for personal aggrandizement.',
    example: 'Using divine weapons specifically to protect the yajna and benefit all beings',
    application: 'Using talents and abilities in service of higher purposes',
    modernRelevance: 'Applying skills and resources for collective welfare rather than selfish gain'
  },
  {
    lesson: 'Cooperation in Dharmic Service',
    teaching: 'Spiritual missions often require coordinated effort and mutual support among dharmic practitioners.',
    example: 'Perfect coordination between Rama and Lakshmana in defending the yajna',
    application: 'Working together with like-minded individuals in spiritual and dharmic activities',
    modernRelevance: 'Building spiritual communities and collaborative approaches to social challenges'
  }
]

const cosmicDimensions = [
  {
    dimension: 'Micro-Cosmic Protection',
    description: 'Individual spiritual practices being protected from personal negative influences',
    examples: [
      'Protecting personal meditation from mental distractions',
      'Maintaining spiritual discipline against material temptations',
      'Safeguarding devotional practices from cynicism or doubt',
      'Preserving ethical standards against moral compromises'
    ]
  },
  {
    dimension: 'Community Spiritual Protection',
    description: 'Collective spiritual activities being safeguarded from social disruptions',
    examples: [
      'Protecting religious gatherings from external interference',
      'Maintaining spiritual institutions against corrupting influences',
      'Safeguarding traditional practices from cultural erosion',
      'Preserving sacred spaces from commercial exploitation'
    ]
  },
  {
    dimension: 'Universal Dharmic Protection',
    description: 'Cosmic-level protection of spiritual principles and universal dharma',
    examples: [
      'Divine incarnations protecting universal spiritual laws',
      'Cosmic forces maintaining balance between positive and negative energies',
      'Universal intelligence preserving spiritual evolution of consciousness',
      'Dharmic principles self-correcting when threatened by adharmic forces'
    ]
  }
]

export default function YajnaProtectionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/scriptures" className="text-gray-600 hover:text-orange-600 transition-colors">
              Scriptures
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/scriptures/ramayana" className="text-gray-600 hover:text-orange-600 transition-colors">
              Ramayana
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/scriptures/ramayana/bala-kanda" className="text-gray-600 hover:text-orange-600 transition-colors">
              Bala Kanda
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-orange-600 font-medium">Yajna Protection</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-yellow-600 to-green-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Flame className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">🔥 Sacred Protection</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sanskrit">
                यज्ञ रक्षा
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-orange-100">
                Protection of the Sacred Yajna
              </h2>
              <p className="text-lg text-yellow-100 leading-relaxed mb-8">
                {yajnaProtection.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#battle-sequence"
                  className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  The Epic Defense
                </Link>
                <Link
                  href="#spiritual-lessons"
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Spiritual Lessons
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-500/20 to-green-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=450&fit=crop"
                  alt="Sacred Fire Protection"
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
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Calendar className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Duration</h3>
                <p className="text-gray-700">6 Days & Nights</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Mission</h3>
                <p className="text-gray-700">Sacred Protection</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Result</h3>
                <p className="text-gray-700">Yajna Completed</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">Spiritual Significance</h3>
              <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
                {yajnaProtection.spiritualSignificance}
              </p>
            </div>
          </div>
        </section>

        {/* Yajna Significance */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Sacred Yajna</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-yellow-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Understanding the cosmic importance of the ritual being protected
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-orange-800 mb-4">Sacred Purpose</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Purpose:</h4>
                    <p className="text-gray-700">{yajnaSignificance.purpose}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Duration:</h4>
                    <p className="text-gray-700">{yajnaSignificance.duration}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Participants:</h4>
                    <p className="text-gray-700">{yajnaSignificance.participants}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Cosmic Benefits:</h4>
                <ul className="space-y-2">
                  {yajnaSignificance.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Sparkles className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">Critical Vulnerability:</h4>
                  <p className="text-red-700 text-sm mb-2">{yajnaSignificance.vulnerability}</p>
                  <p className="text-red-600 text-xs italic">{yajnaSignificance.consequence}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demon Forces */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Demonic Opposition</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The organized forces of destruction arrayed against spiritual progress
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {demonForces.map((force, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className={`h-2 bg-gradient-to-r ${force.color}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{force.demon}</h3>
                  <p className="text-gray-600 text-sm mb-4">{force.role}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-2">Supernatural Powers:</h4>
                      <ul className="space-y-1">
                        {force.powers.map((power, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-red-500 mr-2 text-xs mt-1">•</span>
                            <span className="text-gray-600 text-xs">{power}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3">
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Strategy:</h4>
                      <p className="text-gray-700 text-sm mb-2">{force.strategy}</p>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Motivation:</h4>
                      <p className="text-gray-600 text-xs">{force.motivation}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Battle Sequence */}
        <section id="battle-sequence">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Epic Defense</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-green-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The six-phase battle that determined the fate of the sacred ceremony
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
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{phase.phase}</h3>
                      <p className="text-gray-600">{phase.timeframe}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">{phase.description}</p>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Details:</h4>
                      <ul className="space-y-2">
                        {phase.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-semibold text-green-800 text-sm mb-2">Outcome:</h4>
                        <p className="text-green-700 text-sm">{phase.outcome}</p>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-800 text-sm mb-2">Spiritual Lesson:</h4>
                        <p className="text-blue-700 text-sm">{phase.lesson}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Strategic Elements */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Strategic Elements</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The tactical dimensions of protecting spiritual practices from destructive forces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategicElements.map((element, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{element.aspect}</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">Description:</h4>
                    <p className="text-gray-700 text-sm">{element.description}</p>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-3">
                    <h4 className="font-semibold text-orange-800 text-sm mb-1">Significance:</h4>
                    <p className="text-orange-700 text-sm">{element.significance}</p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-3">
                    <h4 className="font-semibold text-green-800 text-sm mb-1">Counter-Strategy:</h4>
                    <p className="text-green-700 text-sm">{element.counterStrategy}</p>
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
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-green-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The timeless principles revealed through this epic protection of sacred practices
            </p>
          </div>

          <div className="space-y-8">
            {spiritualLessons.map((lesson, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <Gem className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{lesson.lesson}</h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">{lesson.teaching}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                      <p className="text-sm font-semibold text-orange-800 mb-2">Example from Episode:</p>
                      <p className="text-orange-700 text-sm">{lesson.example}</p>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-blue-800 mb-2">Personal Application:</p>
                      <p className="text-blue-700 text-sm">{lesson.application}</p>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-green-800 mb-2">Modern Relevance:</p>
                    <p className="text-green-700 text-sm">{lesson.modernRelevance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cosmic Dimensions */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cosmic Dimensions of Protection</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-green-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The universal principle of protecting spiritual practices operates at all levels of existence
            </p>
          </div>

          <div className="space-y-8">
            {cosmicDimensions.map((dimension, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{dimension.dimension}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{dimension.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Practical Examples:</h4>
                      <ul className="space-y-1">
                        {dimension.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-orange-500 mr-2 text-sm">•</span>
                            <span className="text-gray-600 text-sm">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section className="bg-gradient-to-r from-orange-600 via-yellow-600 to-green-600 text-white rounded-3xl p-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">🔥 Journey Towards Destiny 🔥</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              With the yajna successfully protected and completed, Vishwamitra decides to take the brothers to Mithila, where destiny awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/scriptures/ramayana/bala-kanda/journey-to-mithila"
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
              >
                Next: Journey to Mithila
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