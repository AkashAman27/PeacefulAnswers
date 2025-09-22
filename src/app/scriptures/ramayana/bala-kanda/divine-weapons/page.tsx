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
  Bolt,
  Eye,
  Wand2,
  SunSnow,
  Waves
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Divine Weapons (Divyastras) | Bala Kanda | Complete Ramayana | PeacefulAnswers',
  description: 'Sage Vishwamitra bestows divine weapons upon Rama and Lakshmana - cosmic astras, their powers, sacred mantras, and the responsibility of wielding divine forces.',
  keywords: 'divine weapons, astras, Brahmastra, Varunastra, Agneyastra, Vishwamitra, cosmic powers, sacred mantras, Bala Kanda, Ramayana',
  openGraph: {
    title: 'Divine Weapons | The Arsenal of Cosmic Powers',
    description: 'When divine consciousness receives cosmic weapons - the ultimate spiritual armory',
    type: 'website',
  },
}

const divineWeapons = {
  title: 'दिव्यास्त्र प्राप्ति - Receiving Divine Weapons',
  subtitle: 'The Arsenal of Cosmic Powers',
  timeframe: 'After defeating Tataka',
  description: 'Following Rama\'s successful demonstration of dharmic duty in slaying Tataka, Sage Vishwamitra bestows upon him and Lakshmana the knowledge of divine weapons (astras) and their sacred mantras. These are not ordinary weapons but cosmic forces that can control elements, time, space, and reality itself. Each astra represents mastery over specific cosmic principles and can only be wielded by those pure in heart and aligned with dharma.',
  spiritualSignificance: 'The receiving of divine weapons represents the graduation from basic dharmic understanding to cosmic responsibility. It symbolizes how evolved consciousness gains access to universal forces while maintaining the wisdom to use them righteously. These weapons are external manifestations of internal spiritual powers.',
  importance: 'This episode establishes Rama\'s cosmic authority and prepares him for future battles against supernatural forces while teaching the responsibility that comes with divine power.'
}

const weaponCategories = [
  {
    category: 'Elemental Astras',
    description: 'Weapons that control the fundamental elements of creation',
    weapons: [
      {
        name: 'Agneyastra',
        element: 'Fire',
        power: 'Controls divine fire and can incinerate any target',
        deity: 'Agni (Fire God)',
        mantra: 'ॐ अग्नये अस्त्राय फट्',
        usage: 'Burning obstacles, destroying evil forces',
        restriction: 'Cannot be used against innocent beings'
      },
      {
        name: 'Varunastra',
        element: 'Water',
        power: 'Commands oceans, rivers, and cosmic waters',
        deity: 'Varuna (Water God)',
        mantra: 'ॐ वरुणाय अस्त्राय फट्',
        usage: 'Creating floods, quenching fires, purification',
        restriction: 'Must not cause unnecessary flooding'
      },
      {
        name: 'Vayavastra',
        element: 'Wind',
        power: 'Controls wind and atmospheric forces',
        deity: 'Vayu (Wind God)',
        mantra: 'ॐ वायवे अस्त्राय फट्',
        usage: 'Creating storms, flight, removing obstacles',
        restriction: 'Cannot harm flying beings needlessly'
      },
      {
        name: 'Bhaumastra',
        element: 'Earth',
        power: 'Commands earth and mountain forces',
        deity: 'Bhumi (Earth Goddess)',
        mantra: 'ॐ भूमये अस्त्राय फट्',
        usage: 'Creating earthquakes, moving mountains',
        restriction: 'Must preserve natural balance'
      }
    ],
    color: 'from-red-500 to-orange-500'
  },
  {
    category: 'Celestial Astras',
    description: 'Weapons powered by cosmic deities and celestial forces',
    weapons: [
      {
        name: 'Indrastra',
        element: 'Lightning',
        power: 'Thunderbolts and celestial lightning',
        deity: 'Indra (King of Gods)',
        mantra: 'ॐ इन्द्राय अस्त्राय फट्',
        usage: 'Destroying demons, breaking barriers',
        restriction: 'Only against enemies of dharma'
      },
      {
        name: 'Surya Astra',
        element: 'Solar Energy',
        power: 'Blinding light and solar fire',
        deity: 'Surya (Sun God)',
        mantra: 'ॐ सूर्याय अस्त्राय फट्',
        usage: 'Illumination, destroying darkness',
        restriction: 'Cannot be used during eclipse'
      },
      {
        name: 'Chandra Astra',
        element: 'Lunar Energy',
        power: 'Cooling energy and mental peace',
        deity: 'Chandra (Moon God)',
        mantra: 'ॐ चन्द्राय अस्त्राय फट्',
        usage: 'Healing, cooling fires, calming minds',
        restriction: 'Only for beneficial purposes'
      },
      {
        name: 'Vishnu Chakra',
        element: 'Preservation',
        power: 'Divine discus of Lord Vishnu',
        deity: 'Vishnu (Preserver)',
        mantra: 'ॐ विष्णवे चक्राय फट्',
        usage: 'Protecting dharma, destroying adharma',
        restriction: 'Ultimate weapon, rarely used'
      }
    ],
    color: 'from-blue-500 to-purple-500'
  },
  {
    category: 'Ultimate Astras',
    description: 'Weapons of ultimate destruction and cosmic transformation',
    weapons: [
      {
        name: 'Brahmastra',
        element: 'Creation/Destruction',
        power: 'Ultimate destructive force in universe',
        deity: 'Brahma (Creator)',
        mantra: 'ॐ ब्रह्मास्त्राय फट्',
        usage: 'Last resort against greatest evil',
        restriction: 'Can destroy entire worlds, extreme caution required'
      },
      {
        name: 'Brahmashirsha',
        element: 'Cosmic Dissolution',
        power: 'Four times more powerful than Brahmastra',
        deity: 'Brahma\'s Head',
        mantra: 'ॐ ब्रह्मशीर्षाय फट्',
        usage: 'Only against cosmic-level threats',
        restriction: 'Cannot be withdrawn once invoked'
      },
      {
        name: 'Pashupatastra',
        element: 'Transformation',
        power: 'Lord Shiva\'s ultimate weapon',
        deity: 'Shiva (Destroyer/Transformer)',
        mantra: 'ॐ पशुपतये अस्त्राय फट्',
        usage: 'Cosmic transformation and renewal',
        restriction: 'Only for those blessed by Shiva'
      },
      {
        name: 'Narayanastra',
        element: 'Divine Protection',
        power: 'Self-multiplying weapon of Vishnu',
        deity: 'Narayana (Vishnu)',
        mantra: 'ॐ नारायणास्त्राय फट्',
        usage: 'Protecting cosmic order',
        restriction: 'Becomes stronger if resisted'
      }
    ],
    color: 'from-purple-500 to-pink-500'
  }
]

const learningProcess = [
  {
    stage: 'Purification and Preparation',
    description: 'Before receiving divine weapons, the mind and heart must be purified through meditation and spiritual practices.',
    activities: [
      'Deep meditation to purify consciousness',
      'Fasting and spiritual austerities',
      'Recitation of sacred mantras for mental clarity',
      'Surrender of ego and personal desires',
      'Alignment with divine will and cosmic purpose'
    ],
    significance: 'Divine weapons can only be received by pure consciousness',
    duration: 'Several days of intensive preparation'
  },
  {
    stage: 'Mantra Transmission',
    description: 'Vishwamitra transmits the sacred mantras that invoke and control each divine weapon through oral tradition.',
    activities: [
      'Learning the precise pronunciation of each mantra',
      'Understanding the spiritual meaning and power',
      'Practicing mental concentration and visualization',
      'Developing connection with the governing deity',
      'Memorizing invocation and withdrawal procedures'
    ],
    significance: 'Mantras are the keys that unlock cosmic forces',
    duration: 'Intensive study over several weeks'
  },
  {
    stage: 'Ethical Instructions',
    description: 'Detailed teaching about the moral and ethical guidelines for using divine weapons responsibly.',
    activities: [
      'Learning when weapons may and may not be used',
      'Understanding consequences of misuse',
      'Developing discrimination between dharmic and adharmic targets',
      'Practicing restraint and proportional response',
      'Accepting responsibility for cosmic consequences'
    ],
    significance: 'With great power comes great responsibility',
    duration: 'Ongoing ethical guidance throughout training'
  },
  {
    stage: 'Practical Demonstration',
    description: 'Safe demonstration of weapon powers under Vishwamitra\'s supervision to ensure proper understanding.',
    activities: [
      'Invoking weapons in controlled environments',
      'Demonstrating proper targeting and control',
      'Practicing withdrawal and neutralization',
      'Testing different power levels and applications',
      'Building confidence in weapon mastery'
    ],
    significance: 'Practical experience under guidance prevents accidents',
    duration: 'Supervised practice until mastery achieved'
  },
  {
    stage: 'Final Empowerment',
    description: 'Vishwamitra formally empowers Rama and Lakshmana with full authority to use divine weapons.',
    activities: [
      'Receiving final blessings and authorization',
      'Formal transmission of complete knowledge',
      'Taking vows of responsible usage',
      'Accepting cosmic responsibility',
      'Integration of weapons into spiritual being'
    ],
    significance: 'Full cosmic authority to wield divine forces',
    duration: 'Sacred ceremony marking completion'
  }
]

const spiritualPrinciples = [
  {
    principle: 'Purity of Intention',
    teaching: 'Divine weapons can only be wielded by those whose intentions are pure and aligned with cosmic dharma.',
    example: 'Rama\'s complete absence of ego or personal ambition makes him worthy of cosmic weapons',
    application: 'Any power we receive must be used for service, not personal gain',
    consequence: 'Weapons become powerless or turn against those with impure motives'
  },
  {
    principle: 'Proportional Response',
    teaching: 'The power used must be proportional to the threat faced; excessive force violates cosmic balance.',
    example: 'Using appropriate weapons for each situation rather than always using maximum force',
    application: 'Responding to challenges with appropriate but not excessive effort',
    consequence: 'Misuse of power creates negative karma and cosmic imbalance'
  },
  {
    principle: 'Last Resort Usage',
    teaching: 'Divine weapons should only be used when all other means of resolution have been exhausted.',
    example: 'Attempting negotiation, reasoning, and minimal force before using cosmic weapons',
    application: 'Seeking peaceful solutions before resorting to forceful intervention',
    consequence: 'Premature use of force prevents learning and spiritual growth'
  },
  {
    principle: 'Protection of Innocents',
    teaching: 'Divine weapons must never harm innocent beings; they are for protecting dharma and the righteous.',
    example: 'Weapons automatically avoid harming those who are pure and innocent',
    application: 'Any action must consider its impact on innocent people',
    consequence: 'Weapons that harm innocents bring terrible karmic consequences'
  },
  {
    principle: 'Cosmic Responsibility',
    teaching: 'Wielding divine weapons makes one responsible for maintaining cosmic balance and universal dharma.',
    example: 'Rama accepts the burden of protecting the universe through proper weapon usage',
    application: 'With any capability comes responsibility to use it for universal welfare',
    consequence: 'Cosmic forces hold divine weapon wielders accountable for universal harmony'
  }
]

const cosmicImplications = [
  {
    aspect: 'Universal Balance',
    description: 'Divine weapons represent cosmic forces that maintain universal equilibrium',
    implications: [
      'Each weapon balances specific cosmic energies',
      'Proper usage maintains harmony between elements',
      'Misuse can disrupt cosmic order and natural laws',
      'Weapons serve the universe\'s self-regulation system'
    ]
  },
  {
    aspect: 'Evolutionary Preparation',
    description: 'Receiving weapons prepares Rama for his cosmic mission as world protector',
    implications: [
      'Training for future battles against cosmic-level threats',
      'Development of discrimination in use of power',
      'Building confidence in handling universal responsibilities',
      'Preparation for role as cosmic guardian'
    ]
  },
  {
    aspect: 'Spiritual Authority',
    description: 'Divine weapons represent recognition of spiritual authority and cosmic trust',
    implications: [
      'Universe acknowledging Rama\'s divine nature',
      'Granting of cosmic administrative powers',
      'Recognition as qualified divine representative',
      'Authorization to act on behalf of cosmic order'
    ]
  }
]

const modernApplications = [
  {
    area: 'Leadership and Power',
    principle: 'Those in positions of power must use authority responsibly',
    examples: [
      'Corporate leaders using resources for stakeholder benefit',
      'Politicians serving public interest over personal gain',
      'Teachers using knowledge to empower rather than control',
      'Parents using authority to guide rather than dominate'
    ],
    guidance: 'Power is a sacred trust that must serve higher purposes'
  },
  {
    area: 'Technology and Innovation',
    principle: 'Advanced capabilities must be developed and used ethically',
    examples: [
      'AI development with consideration for human welfare',
      'Nuclear technology used for energy, not destruction',
      'Genetic engineering for healing, not enhancement',
      'Social media platforms promoting truth and connection'
    ],
    guidance: 'Technological power requires spiritual wisdom and ethical restraint'
  },
  {
    area: 'Personal Abilities',
    principle: 'Individual talents and skills are divine gifts to be used for service',
    examples: [
      'Using artistic talents to inspire and uplift others',
      'Applying intellectual abilities to solve social problems',
      'Leveraging wealth and resources for charitable purposes',
      'Using physical strength to protect and help others'
    ],
    guidance: 'Personal abilities are cosmic loans to be used for universal benefit'
  },
  {
    area: 'Crisis Management',
    principle: 'In emergencies, powerful responses must be measured and purposeful',
    examples: [
      'Emergency responders using appropriate force and resources',
      'Medical professionals balancing intervention with natural healing',
      'Military forces using minimum necessary force for protection',
      'Environmental action proportional to ecological threats'
    ],
    guidance: 'Crisis response requires wisdom to balance urgency with restraint'
  }
]

export default function DivineWeaponsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/scriptures" className="text-gray-600 hover:text-purple-600 transition-colors">
              Scriptures
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/scriptures/ramayana" className="text-gray-600 hover:text-purple-600 transition-colors">
              Ramayana
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/scriptures/ramayana/bala-kanda" className="text-gray-600 hover:text-purple-600 transition-colors">
              Bala Kanda
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-purple-600 font-medium">Divine Weapons</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Wand2 className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">⚡ Cosmic Arsenal</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sanskrit">
                दिव्यास्त्र प्राप्ति
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-purple-100">
                Receiving Divine Weapons
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed mb-8">
                {divineWeapons.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#weapon-categories"
                  className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Weapons
                </Link>
                <Link
                  href="#spiritual-principles"
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Spiritual Principles
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=450&fit=crop"
                  alt="Divine Weapons and Cosmic Powers"
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
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Calendar className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">When</h3>
                <p className="text-gray-700">{divineWeapons.timeframe}</p>
              </div>
              <div className="text-center">
                <Wand2 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Achievement</h3>
                <p className="text-gray-700">Cosmic Authority</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Recipients</h3>
                <p className="text-gray-700">Rama & Lakshmana</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">Spiritual Significance</h3>
              <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
                {divineWeapons.spiritualSignificance}
              </p>
            </div>
          </div>
        </section>

        {/* Weapon Categories */}
        <section id="weapon-categories">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Divine Weapon Categories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The cosmic arsenal organized by elemental forces, celestial powers, and ultimate authorities
            </p>
          </div>

          <div className="space-y-12">
            {weaponCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mr-6`}>
                      <Bolt className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {category.weapons.map((weapon, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mr-4`}>
                            <Flame className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-900">{weapon.name}</h4>
                            <p className="text-sm text-gray-600">{weapon.element}</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-gray-800 text-sm">Power:</h5>
                            <p className="text-gray-700 text-sm">{weapon.power}</p>
                          </div>

                          <div>
                            <h5 className="font-semibold text-gray-800 text-sm">Governing Deity:</h5>
                            <p className="text-gray-700 text-sm">{weapon.deity}</p>
                          </div>

                          <div className="bg-blue-50 rounded-lg p-3">
                            <h5 className="font-semibold text-blue-800 text-sm mb-1">Sacred Mantra:</h5>
                            <p className="text-blue-700 font-sanskrit text-sm">{weapon.mantra}</p>
                          </div>

                          <div>
                            <h5 className="font-semibold text-gray-800 text-sm">Usage:</h5>
                            <p className="text-gray-700 text-sm">{weapon.usage}</p>
                          </div>

                          <div className="bg-red-50 rounded-lg p-3">
                            <h5 className="font-semibold text-red-800 text-sm mb-1">Restriction:</h5>
                            <p className="text-red-700 text-sm">{weapon.restriction}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Process */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Learning Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The systematic process of receiving and mastering divine weapons under Vishwamitra\'s guidance
            </p>
          </div>

          <div className="space-y-8">
            {learningProcess.map((stage, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{stage.stage}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">{stage.description}</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Key Activities:</h4>
                        <ul className="space-y-2">
                          {stage.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-purple-50 rounded-lg p-4">
                          <h4 className="font-semibold text-purple-800 text-sm mb-2">Significance:</h4>
                          <p className="text-purple-700 text-sm">{stage.significance}</p>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-4">
                          <h4 className="font-semibold text-blue-800 text-sm mb-2">Duration:</h4>
                          <p className="text-blue-700 text-sm">{stage.duration}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spiritual Principles */}
        <section id="spiritual-principles">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Spiritual Principles of Divine Power</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The eternal principles governing the responsible use of cosmic powers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {spiritualPrinciples.map((principle, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <Gem className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{principle.principle}</h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">{principle.teaching}</p>

                <div className="space-y-4">
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                    <p className="text-sm font-semibold text-purple-800 mb-2">Example from Episode:</p>
                    <p className="text-purple-700 text-sm">{principle.example}</p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-blue-800 mb-2">Modern Application:</p>
                    <p className="text-blue-700 text-sm">{principle.application}</p>
                  </div>

                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-red-800 mb-2">Consequence of Misuse:</p>
                    <p className="text-red-700 text-sm">{principle.consequence}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modern Applications */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Modern Applications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              How the principles of divine weapons apply to contemporary use of power and technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modernApplications.map((application, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{application.area}</h3>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Principle:</h4>
                  <p className="text-gray-700 text-sm">{application.principle}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {application.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-purple-500 mr-2 text-sm">•</span>
                        <span className="text-gray-600 text-sm">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-3">
                  <h4 className="font-semibold text-purple-800 text-sm mb-1">Guidance:</h4>
                  <p className="text-purple-700 text-sm">{application.guidance}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cosmic Implications */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cosmic Implications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The universal significance of divine weapon transmission
            </p>
          </div>

          <div className="space-y-8">
            {cosmicImplications.map((implication, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{implication.aspect}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{implication.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Universal Implications:</h4>
                      <ul className="space-y-1">
                        {implication.implications.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-purple-500 mr-2 text-sm">•</span>
                            <span className="text-gray-600 text-sm">{detail}</span>
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
        <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white rounded-3xl p-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">⚡ Continue the Sacred Mission ⚡</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Armed with divine weapons and cosmic authority, Rama is now ready to protect Vishwamitra\'s sacred yajna from demonic interference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/scriptures/ramayana/bala-kanda/yajna-protection"
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
              >
                Next: Yajna Protection
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