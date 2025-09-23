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
  Eye,
  Flame,
  CloudLightning,
  MessageCircle,
  UserCheck,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Arrival of Sage Vishwamitra | Bala Kanda | Complete Ramayana | PeacefulAnswers',
  description: 'The dramatic arrival of Sage Vishwamitra at Ayodhya - his request for Rama\'s help, Dasharatha\'s dilemma, and the beginning of Rama\'s divine mission to protect dharma.',
  keywords: 'Vishwamitra, sage arrival, Ayodhya, Rama mission, Dasharatha dilemma, Bala Kanda, Ramayana, dharma protection, spiritual calling',
  openGraph: {
    title: 'Arrival of Sage Vishwamitra | The Call to Divine Purpose',
    description: 'When the great sage arrives to request Rama\'s help, destiny begins to unfold',
    type: 'website',
  },
}

const vishwamitraArrival = {
  title: 'विश्वामित्र आगमन - Arrival of Sage Vishwamitra',
  subtitle: 'The Call to Divine Purpose',
  timeframe: 'When Rama is 16 years old',
  description: 'The arrival of Sage Vishwamitra at King Dasharatha\'s court marks a pivotal moment in the Ramayana. This powerful sage, who had transformed from a king to a brahmarishi through intense tapasya, comes with a specific divine mission - to request young Rama\'s help in protecting sacred yajnas from demonic forces. This event represents the first call of dharma that awakens Rama to his greater cosmic purpose.',
  spiritualSignificance: 'Vishwamitra\'s arrival represents the moment when spiritual destiny calls divine souls to their greater purpose. It shows how evolved spiritual masters serve as catalysts to awaken incarnations to their cosmic mission, even when it requires leaving comfort and facing unknown challenges.',
  importance: 'This episode establishes the principle that dharma\'s call must be answered, regardless of personal attachment or convenience, and marks the beginning of Rama\'s active role as a protector of righteousness.'
}

const vishwamitraBackground = {
  title: 'The Extraordinary Sage',
  transformation: 'From Kshatriya King to Brahmarishi',
  achievements: [
    'Originally King Kaushika, ruler of a powerful kingdom',
    'Transformed into Brahmarishi through intense spiritual practice',
    'Master of divine weapons and cosmic powers',
    'Creator of alternative cosmic system (Trishira constellation)',
    'Possessor of Kamdhenu cow and divine powers',
    'Discoverer of Gayatri Mantra (in some traditions)',
    'Guru who could grant brahminhood through spiritual power'
  ],
  reputation: 'Known for his fierce determination, spiritual power, and ability to accomplish seemingly impossible tasks through tapasya',
  currentSituation: 'Engaged in performing sacred yajnas that are being disrupted by demons Tataka, Subahu, and Maricha'
}

const arrivalSequence = [
  {
    phase: 'Arrival at the Palace Gates',
    description: 'Sage Vishwamitra arrives at Ayodhya\'s gates with divine radiance surrounding him. His very presence causes the palace guards and citizens to feel a mixture of awe and reverence.',
    details: [
      'Brilliant spiritual aura visible to all',
      'Natural command of respect from everyone',
      'Guards immediately recognizing his divine status',
      'News of his arrival spreading quickly through the palace',
      'Dasharatha receiving urgent summons about the sage\'s presence'
    ],
    significance: 'The sage\'s arrival demonstrates how spiritual power naturally commands recognition and respect, even from worldly authorities.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    phase: 'Reception in the Royal Court',
    description: 'King Dasharatha, along with his ministers and court sages including Vasishtha, receives Vishwamitra with full honors befitting his spiritual status.',
    details: [
      'Dasharatha personally welcoming the sage',
      'Offering of royal honors and appropriate worship',
      'Sage Vasishtha and other court sages paying respects',
      'The entire court assembly rising in reverence',
      'Traditional hospitality offered with finest arrangements'
    ],
    significance: 'Proper reception of spiritual masters is essential for receiving their grace and guidance.',
    color: 'from-blue-500 to-purple-500'
  },
  {
    phase: 'Vishwamitra\'s Specific Request',
    description: 'After pleasantries, Vishwamitra reveals his purpose - he needs Rama\'s help to protect his yajna from demons who have been disrupting sacred rituals.',
    details: [
      'Explanation of the ongoing demon interference',
      'Specific mention of Tataka, Subahu, and Maricha',
      'Request for Rama (not soldiers or other princes)',
      'Assurance about Rama\'s safety and capability',
      'Emphasis on this being a dharmic duty'
    ],
    significance: 'The request reveals that divine purpose often calls for specific individuals who are uniquely qualified for particular missions.',
    color: 'from-green-500 to-teal-500'
  },
  {
    phase: 'Dasharatha\'s Emotional Dilemma',
    description: 'King Dasharatha faces intense inner conflict between his duty to honor the sage\'s request and his paternal love and protective instincts for young Rama.',
    details: [
      'Shock at the request for his beloved 16-year-old son',
      'Concern about Rama\'s youth and inexperience with demons',
      'Offering alternatives including his entire army',
      'Emotional appeal about his attachment to Rama',
      'Struggle between royal duty and paternal love'
    ],
    significance: 'The conflict illustrates the human challenge of surrendering to divine will when it conflicts with personal attachments.',
    color: 'from-red-500 to-pink-500'
  },
  {
    phase: 'Sage Vasishtha\'s Counsel',
    description: 'The royal guru Vasishtha intervenes to explain Vishwamitra\'s true greatness and advises Dasharatha to fulfill the sage\'s request without hesitation.',
    details: [
      'Detailed explanation of Vishwamitra\'s spiritual achievements',
      'Emphasis on the sage\'s transformation from king to brahmarishi',
      'Warning about the consequences of refusing such a request',
      'Assurance about Rama\'s divine nature and protection',
      'Counsel to trust in divine providence and dharma'
    ],
    significance: 'Spiritual guidance helps overcome emotional resistance to divine calling.',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    phase: 'Dasharatha\'s Reluctant Consent',
    description: 'After much internal struggle and counseling, Dasharatha agrees to send Rama, though his heart remains heavy with concern.',
    details: [
      'Acceptance of dharmic duty over personal desire',
      'Emotional preparation for Rama\'s departure',
      'Request for Rama\'s safety and quick return',
      'Blessing and prayers for successful mission',
      'Arrangement for Rama\'s immediate departure'
    ],
    significance: 'Surrendering to divine will, even when difficult, opens the path for spiritual evolution.',
    color: 'from-orange-500 to-red-500'
  }
]

const keyDialogues = [
  {
    speaker: 'Sage Vishwamitra',
    context: 'Explaining his request to Dasharatha',
    dialogue: 'O King, I am engaged in a great yajna for the welfare of all beings. But demons led by Tataka constantly disrupt our sacred ceremonies. I need your son Rama to protect our yajna. Though young, he possesses divine strength and is destined for this purpose.',
    significance: 'Shows how spiritual masters recognize divine potential and cosmic purpose in their disciples.',
    sanskrit: 'राजन् महायज्ञे रत: सर्वभूतहिताय अहम्। ताटका प्रमुखा राक्षसा: नित्यं विघ्नं कुर्वन्ति। तव पुत्रं रामं रक्षार्थं याचे।'
  },
  {
    speaker: 'King Dasharatha',
    context: 'Expressing his paternal concern',
    dialogue: 'O revered sage, Rama is but sixteen years old and has never faced battle. Take my entire army, take me if needed, but how can I send my beloved child to face demons? My heart trembles at the very thought.',
    significance: 'Illustrates the natural human attachment and the difficulty of surrendering loved ones to divine purpose.',
    sanskrit: 'भगवन् षोडशवर्षीयो रामो न युद्धविज्ञ:। मम सैन्यं गृहीत्वा मामेव नयतु। कथं प्रियं पुत्रं राक्षसेभ्यो दास्यामि?'
  },
  {
    speaker: 'Sage Vasishtha',
    context: 'Counseling Dasharatha about Vishwamitra\'s greatness',
    dialogue: 'O King, know that Vishwamitra is no ordinary sage. He has achieved what few can - transformation from kshatriya to brahmarishi through tapasya. To refuse his request would bring great misfortune. Trust in Rama\'s divine nature.',
    significance: 'Demonstrates how spiritual wisdom guides us to surrender to higher purposes.',
    sanskrit: 'राजन् विश्वामित्र: साधारणो मुनि: न। क्षत्रियात् ब्रह्मर्षित्वं प्राप्तवान् तपसा। तस्य याचनां निराकर्तुं महापातकम्।'
  },
  {
    speaker: 'Rama',
    context: 'Accepting the mission with humility',
    dialogue: 'Revered father, if the great sage has requested my service, it must be for dharma\'s protection. I am ready to follow his guidance and serve the cause of righteousness. Please give me your blessings.',
    significance: 'Shows the ideal response to spiritual calling - immediate acceptance without ego or hesitation.',
    sanskrit: 'पूज्य पितर्, यदि महर्षि: मम सेवां याचते तर्हि धर्मरक्षार्थमेव। तस्य आज्ञानुसारेण धर्मसेवने तत्परो भवामि।'
  }
]

const characterReactions = [
  {
    character: 'King Dasharatha',
    initialReaction: 'Shock and protective concern',
    emotionalJourney: 'From immediate refusal to reluctant acceptance',
    keyMoments: [
      'Initial shock at the request for young Rama',
      'Offering alternatives including entire army',
      'Emotional appeal about his attachment',
      'Struggle between duty and love',
      'Final surrender to dharmic obligation'
    ],
    transformation: 'Learns to surrender personal desires to divine will',
    lesson: 'Even loving attachments must yield to dharmic calling'
  },
  {
    character: 'Rama',
    initialReaction: 'Quiet readiness and acceptance',
    emotionalJourney: 'From respectful listening to eager commitment',
    keyMoments: [
      'Respectful attention to the sage\'s words',
      'Understanding of the mission\'s importance',
      'Immediate willingness to serve',
      'Seeking father\'s blessing rather than permission',
      'Calm confidence in divine protection'
    ],
    transformation: 'Awakens to his role as dharma\'s protector',
    lesson: 'Divine souls naturally respond to calls for righteous service'
  },
  {
    character: 'Lakshmana',
    initialReaction: 'Determination to accompany Rama',
    emotionalJourney: 'From concern for Rama to insistence on service',
    keyMoments: [
      'Immediate concern for Rama\'s welfare',
      'Recognition of his duty to serve Rama',
      'Insistence on accompanying his brother',
      'Preparation for shared mission',
      'Joy at being included in dharmic service'
    ],
    transformation: 'Embraces his role as eternal companion and protector',
    lesson: 'True devotion seeks to share in beloved\'s dharmic duties'
  },
  {
    character: 'Sage Vasishtha',
    initialReaction: 'Immediate recognition of divine purpose',
    emotionalJourney: 'From understanding to guidance',
    keyMoments: [
      'Recognition of Vishwamitra\'s spiritual authority',
      'Understanding of the cosmic significance',
      'Counseling Dasharatha with wisdom',
      'Blessing the divine mission',
      'Preparation for Rama\'s spiritual growth'
    ],
    transformation: 'Acts as bridge between human emotion and divine purpose',
    lesson: 'Spiritual teachers guide the transition from attachment to surrender'
  }
]

const spiritualLessons = [
  {
    lesson: 'Response to Spiritual Calling',
    teaching: 'When dharma calls through spiritual authorities, the response must be immediate and wholehearted, regardless of personal convenience or attachment.',
    example: 'Rama\'s immediate acceptance of the mission without questioning or hesitation',
    application: 'In life, we must recognize and respond to opportunities for dharmic service',
    scriptureReference: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन (You have the right to action only, never to its fruits)'
  },
  {
    lesson: 'Surrendering Attachment',
    teaching: 'Even loving attachments must yield to dharmic duty. Personal preferences cannot override cosmic purpose.',
    example: 'Dasharatha\'s struggle and eventual surrender of his beloved son to divine mission',
    application: 'Learning to release attachment to outcomes and loved ones when dharma demands',
    scriptureReference: 'सर्वधर्मान् परित्यज्य मामेकं शरणं व्रज (Abandon all varieties of dharma and surrender unto Me alone)'
  },
  {
    lesson: 'Recognition of Spiritual Authority',
    teaching: 'True spiritual masters possess natural authority that commands respect and obedience from all levels of society.',
    example: 'Universal recognition of Vishwamitra\'s spiritual power and the necessity of honoring his request',
    application: 'Learning to recognize and honor authentic spiritual guidance',
    scriptureReference: 'गुरुर्ब्रह्मा गुरुर्विष्णु: गुरुर्देवो महेश्वर: (The Guru is Brahma, Vishnu, and Maheshwara)'
  },
  {
    lesson: 'Divine Preparation',
    teaching: 'Divine souls are prepared through education and experience for their eventual cosmic missions.',
    example: 'Rama\'s comprehensive education and character development preparing him for this first divine mission',
    application: 'Understanding that all life experiences prepare us for our ultimate purpose',
    scriptureReference: 'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत (Whenever dharma declines, O Bharata)'
  }
]

const cosmicSignificance = [
  {
    aspect: 'Beginning of Active Mission',
    description: 'This marks the transition from Rama\'s passive preparation phase to active dharmic engagement',
    implications: [
      'End of protected childhood and beginning of cosmic responsibility',
      'First step in Rama\'s role as world protector',
      'Establishment of the pattern of responding to dharmic calls',
      'Beginning of the relationship between guru and divine disciple'
    ]
  },
  {
    aspect: 'Divine-Human Collaboration',
    description: 'The episode demonstrates how divine incarnations work through human institutional frameworks',
    implications: [
      'Respect for parental authority even by divine incarnations',
      'Integration of spiritual calling with social obligations',
      'Demonstration of proper protocol in spiritual matters',
      'Balance between divine purpose and human relationships'
    ]
  },
  {
    aspect: 'Catalyst for Transformation',
    description: 'Vishwamitra serves as the catalyst who awakens Rama to his greater purpose',
    implications: [
      'Role of spiritual masters in awakening divine potential',
      'Timing of divine interventions in cosmic plan',
      'Preparation of divine souls for their missions',
      'Connection between individual awakening and universal dharma'
    ]
  }
]

export default function VishwamitraArrivalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/scriptures" className="text-gray-600 hover:text-green-600 transition-colors">
              Scriptures
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/scriptures/ramayana" className="text-gray-600 hover:text-green-600 transition-colors">
              Ramayana
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/scriptures/ramayana/bala-kanda" className="text-gray-600 hover:text-green-600 transition-colors">
              Bala Kanda
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-green-600 font-medium">Vishwamitra's Arrival</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Eye className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">🔮 Divine Calling</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sanskrit">
                विश्वामित्र आगमन
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-green-100">
                Arrival of Sage Vishwamitra
              </h2>
              <p className="text-lg text-teal-100 leading-relaxed mb-8">
                {vishwamitraArrival.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#arrival-sequence"
                  className="bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Explore the Arrival
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
              <div className="aspect-[4/3] bg-gradient-to-br from-green-500/20 to-blue-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1571115764595-644a1c79e753?w=600&h=450&fit=crop"
                  alt="Sage Vishwamitra in the Royal Court"
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
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Calendar className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Timing</h3>
                <p className="text-gray-700">{vishwamitraArrival.timeframe}</p>
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-700">Royal Court, Ayodhya</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Key Figures</h3>
                <p className="text-gray-700">Vishwamitra, Dasharatha, Rama</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Spiritual Significance</h3>
              <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
                {vishwamitraArrival.spiritualSignificance}
              </p>
            </div>
          </div>
        </section>

        {/* Vishwamitra Background */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Extraordinary Sage</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Understanding Vishwamitra\'s remarkable background and spiritual achievements
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">{vishwamitraBackground.transformation}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{vishwamitraBackground.reputation}</p>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-3">Current Situation:</h4>
                  <p className="text-green-700 text-sm">{vishwamitraBackground.currentSituation}</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Spiritual Achievements:</h4>
                <ul className="space-y-2">
                  {vishwamitraBackground.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Arrival Sequence */}
        <section id="arrival-sequence">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Arrival Sequence</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The dramatic unfolding of events as the great sage arrives with his divine mission
            </p>
          </div>

          <div className="space-y-8">
            {arrivalSequence.map((phase, index) => (
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
                            <span className="text-green-500 mr-2 text-sm">•</span>
                            <span className="text-gray-600 text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`bg-gradient-to-br ${phase.color} opacity-10 rounded-lg p-4`}>
                      <h4 className="font-semibold text-gray-800 mb-2">Spiritual Significance:</h4>
                      <p className="text-gray-700 text-sm">{phase.significance}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Dialogues */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Dialogues</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The crucial conversations that shaped this pivotal moment
            </p>
          </div>

          <div className="space-y-8">
            {keyDialogues.map((dialogue, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{dialogue.speaker}</h3>
                </div>

                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <p className="text-green-800 italic text-sm mb-2">Context: {dialogue.context}</p>
                  <blockquote className="text-gray-700 text-lg leading-relaxed border-l-4 border-green-500 pl-4">
                    "{dialogue.dialogue}"
                  </blockquote>
                </div>

                <div className="bg-teal-50 rounded-lg p-4 mb-4">
                  <p className="text-teal-800 font-sanskrit text-sm mb-2">{dialogue.sanskrit}</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Spiritual Significance:</h4>
                  <p className="text-blue-700 text-sm">{dialogue.significance}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Character Reactions */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Character Reactions & Transformations</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              How each character responds to this divine calling and what they learn
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {characterReactions.map((char, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <UserCheck className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{char.character}</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Initial Reaction:</h4>
                    <p className="text-gray-700 text-sm">{char.initialReaction}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Emotional Journey:</h4>
                    <p className="text-gray-700 text-sm">{char.emotionalJourney}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">Key Moments:</h4>
                    <ul className="space-y-1">
                      {char.keyMoments.map((moment, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-500 mr-2 text-xs mt-1">▸</span>
                          <span className="text-gray-600 text-xs">{moment}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-3">
                    <h4 className="font-semibold text-green-800 text-sm mb-1">Transformation:</h4>
                    <p className="text-green-700 text-sm mb-2">{char.transformation}</p>
                    <p className="text-green-600 text-xs italic">{char.lesson}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spiritual Lessons */}
        <section id="spiritual-lessons">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Profound Spiritual Lessons</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The timeless spiritual teachings embedded in this pivotal episode
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {spiritualLessons.map((lesson, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <Gem className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{lesson.lesson}</h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">{lesson.teaching}</p>

                <div className="bg-green-50 rounded-lg p-4 mb-4 border-l-4 border-green-500">
                  <p className="text-sm font-semibold text-green-800 mb-2">Example from the Episode:</p>
                  <p className="text-green-700 text-sm">{lesson.example}</p>
                </div>

                <div className="bg-teal-50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-teal-800 mb-2">Practical Application:</p>
                  <p className="text-teal-700 text-sm">{lesson.application}</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-blue-800 font-sanskrit text-sm">{lesson.scriptureReference}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cosmic Significance */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cosmic Significance</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The universal implications of this divine calling
            </p>
          </div>

          <div className="space-y-8">
            {cosmicSignificance.map((aspect, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{aspect.aspect}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{aspect.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Universal Implications:</h4>
                      <ul className="space-y-1">
                        {aspect.implications.map((implication, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-500 mr-2 text-sm">•</span>
                            <span className="text-gray-600 text-sm">{implication}</span>
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
        <section className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white rounded-3xl p-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">🔮 Continue the Divine Mission 🔮</h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              The sage has made his request and received consent. Now Rama begins his first divine mission with the slaying of Tataka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/scriptures/ramayana/bala-kanda/tataka-vadha"
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
              >
                Next: Slaying of Tataka
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