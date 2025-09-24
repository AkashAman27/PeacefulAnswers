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
  Zap,
  Eye,
  Flame,
  Home,
  Scale
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Uttara Kanda - The Final Book of Ramayana | Detailed Story & Teachings | PeacefulAnswers',
  description: 'Explore the complete Uttara Kanda (7th book) of Ramayana in detail - Rama\'s rule, Sita\'s second exile, birth of Luv-Kush, and the ultimate reunion. Deep spiritual insights and lessons.',
  keywords: 'Uttara Kanda, Ramayana, Rama Rajya, Luv Kush, Sita exile, Valmiki Ashram, horse sacrifice, Ashwamedha, final book',
  openGraph: {
    title: 'Uttara Kanda - The Final Book of Ramayana | Complete Story',
    description: 'The profound final chapter of Ramayana covering Rama\'s golden rule, Sita\'s second exile, and the divine teachings',
    type: 'website',
  },
}

const uttaraKandaOverview = {
  title: 'उत्तर काण्ड - Uttara Kanda',
  subtitle: 'The Final Book - The Epilogue of Dharma',
  description: 'The Uttara Kanda, the seventh and final book of the Ramayana, presents the most complex and profound spiritual teachings. It chronicles Rama\'s exemplary rule (Ram Rajya), the challenging period of Sita\'s second exile, the birth and upbringing of the divine twins Luv and Kush, and the ultimate transcendence. This kanda explores the deepest questions of dharma, duty, social responsibility, and the pain of separation in the path of righteousness.',
  chapters: '111 Chapters',
  verses: 'Approximately 3,000 Shlokas',
  themes: ['Righteous Governance', 'Social Duty vs Personal Desire', 'Divine Children', 'Ultimate Reunion', 'Transcendence'],
  significance: 'The most philosophically complex book that addresses the challenges of balancing personal happiness with societal duty'
}

const majorEvents = [
  {
    id: 'ram-rajya',
    title: 'राम राज्य - Ram Rajya (The Golden Rule)',
    subtitle: 'The Ideal Kingdom',
    timeframe: 'Years 1-10 after coronation',
    description: 'Rama establishes the most perfect kingdom in history, where dharma reigns supreme. Every citizen is happy, prosperous, and righteous. There is no crime, poverty, or injustice. Nature itself responds favorably - rains come on time, crops are abundant, and even animals live in harmony.',
    keyAspects: [
      'Perfect justice system with Rama as the ideal judge',
      'Economic prosperity and social welfare for all',
      'Religious harmony and spiritual growth of citizens',
      'Environmental balance and natural abundance',
      'Administrative efficiency and corruption-free governance',
      'Educational system promoting both material and spiritual knowledge'
    ],
    spiritualSignificance: 'Ram Rajya represents the state of consciousness where dharma governs all actions, leading to universal harmony and prosperity. It is the external manifestation of an internally balanced and righteous ruler.',
    image: 'https://images.unsplash.com/photo-1578528011634-50c02b2e6ce6?w=600&h=400&fit=crop',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'social-criticism',
    title: 'लोक निंदा - Loka Ninda (Social Criticism)',
    subtitle: 'The Painful Duty of a King',
    timeframe: 'Year 10 after coronation',
    description: 'Despite Sita having proven her purity through Agni Pariksha, some citizens begin to question her character due to her time in Ravana\'s captivity. When Rama learns of this social criticism, he faces the most agonizing decision of his life - between his personal love and his duty as a king to maintain social harmony.',
    keyAspects: [
      'The emergence of doubt among some citizens about Sita\'s purity',
      'Rama\'s internal conflict between personal happiness and royal duty',
      'The principle that a king must be above even the slightest suspicion',
      'The difference between individual truth and social perception',
      'The sacrifice of personal happiness for the greater good',
      'The exploration of dharma\'s complexity in leadership'
    ],
    spiritualSignificance: 'This episode teaches the highest level of sacrifice - giving up one\'s most precious possession for the welfare of society. It explores the conflict between personal dharma and raja dharma (royal duty).',
    image: 'https://images.unsplash.com/photo-1571115764595-644a1c79e753?w=600&h=400&fit=crop',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'second-exile',
    title: 'द्वितीय वनवास - Second Exile of Sita',
    subtitle: 'The Ultimate Test of Faith',
    timeframe: 'Years 10-22 after coronation',
    description: 'In the most heart-wrenching episode of the Ramayana, Rama, with tears in his eyes, asks Lakshmana to escort the pregnant Sita to the forest. Sita, despite her shock and pain, accepts this decision with grace and dignity, understanding Rama\'s position as king.',
    keyAspects: [
      'Lakshmana\'s anguish at having to escort Sita to exile',
      'Sita\'s graceful acceptance despite being pregnant',
      'Rama\'s internal suffering while maintaining royal composure',
      'The citizens\' realization of their role in this tragic decision',
      'Sita\'s shelter in Valmiki\'s ashram',
      'The sage Valmiki\'s compassion and protection'
    ],
    spiritualSignificance: 'This event represents the highest form of tapasya (austerity) - sacrificing one\'s greatest joy for dharma. It shows how evolved souls bear pain for the greater good while maintaining their inner purity.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
    color: 'from-purple-600 to-blue-600'
  },
  {
    id: 'birth-luv-kush',
    title: 'लव-कुश जन्म - Birth of Luv and Kush',
    subtitle: 'The Divine Twins',
    timeframe: 'Year 11 after coronation',
    description: 'In Valmiki\'s ashram, Sita gives birth to twin sons - Luv and Kush. These divine children, born from Rama\'s lineage and nurtured by Sita\'s love and Valmiki\'s wisdom, grow up to become extraordinary warriors and scholars, unaware of their true parentage.',
    keyAspects: [
      'The circumstances of their birth in the forest ashram',
      'Sage Valmiki as their teacher and guardian',
      'Their education in weapons, scriptures, and arts',
      'Growing up hearing the Ramayana (their own family story) as a tale',
      'Their development into powerful warriors and wise princes',
      'Their special bond with each other and with nature'
    ],
    spiritualSignificance: 'Luv and Kush represent the perfect blend of knowledge (Luv - from "Lau" meaning to cut/divide knowledge) and action (Kush - from "Kushalta" meaning skill). They embody the ideal that children of dharmic parents inherit both spiritual and material capabilities.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 'education-ashram',
    title: 'आश्रम शिक्षा - Education in the Ashram',
    subtitle: 'The Perfect Gurukula System',
    timeframe: 'Years 11-22 after coronation',
    description: 'Under the guidance of Maharshi Valmiki, Luv and Kush receive the most comprehensive education possible. They learn not just warfare and governance, but also music, poetry, philosophy, and most importantly, the Ramayana itself - their family\'s own story told as an epic tale.',
    keyAspects: [
      'Comprehensive education in 64 arts and sciences',
      'Training in all forms of warfare and weapons',
      'Deep study of scriptures and philosophical texts',
      'Learning the Ramayana through Valmiki\'s recitation',
      'Development of extraordinary musical and poetic abilities',
      'Understanding of statecraft and governance principles',
      'Cultivation of compassion and dharmic values',
      'Special powers inherited from their divine lineage'
    ],
    spiritualSignificance: 'This represents the ideal education system that develops all aspects of personality - physical, intellectual, emotional, and spiritual. It shows how great souls are prepared through proper education to fulfill their life\'s purpose.',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'ashwamedha-yajna',
    title: 'अश्वमेध यज्ञ - The Horse Sacrifice',
    subtitle: 'The Royal Ritual of Sovereignty',
    timeframe: 'Year 22 after coronation',
    description: 'Rama decides to perform the Ashwamedha Yajna, the most prestigious royal sacrifice that establishes universal sovereignty. However, this ritual traditionally requires the presence of the queen, creating a dilemma since Sita is in exile. A golden statue of Sita is created to fulfill the ritual requirements.',
    keyAspects: [
      'The significance of Ashwamedha as the ultimate royal sacrifice',
      'The requirement of the queen\'s presence in the ritual',
      'Creation of Sita\'s golden statue for the ceremony',
      'The sacrificial horse roaming freely across kingdoms',
      'Various kings either submitting or challenging Rama\'s sovereignty',
      'The elaborate preparations and spiritual significance',
      'Invitation to all sages and kings across the world'
    ],
    spiritualSignificance: 'The Ashwamedha represents the ruler\'s complete dedication to dharma and the welfare of all beings. The golden statue of Sita symbolizes how truth and purity remain eternal even when physically absent.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    color: 'from-red-500 to-pink-500'
  },
  {
    id: 'horse-capture',
    title: 'अश्व बंधन - Capture of the Sacrificial Horse',
    subtitle: 'The Fateful Encounter',
    timeframe: 'During Ashwamedha ceremony',
    description: 'The sacrificial horse, while roaming freely, enters the forest near Valmiki\'s ashram. Luv and Kush, now young warriors, capture the horse as part of their play, unaware that this act will lead to their first encounter with their father\'s army.',
    keyAspects: [
      'The horse entering Valmiki\'s ashram area',
      'Luv and Kush\'s playful capture of the horse',
      'Their reading of the proclamation attached to the horse',
      'Decision to challenge anyone who comes to reclaim it',
      'Preparation for battle despite their young age',
      'Valmiki\'s knowledge of the approaching confrontation',
      'The irony of sons preparing to fight their father\'s army'
    ],
    spiritualSignificance: 'This event represents how dharma often creates situations where individuals must act according to their understanding, even when it leads to conflict. It shows the courage required to stand for one\'s principles.',
    image: 'https://images.unsplash.com/photo-1578528011634-50c02b2e6ce6?w=600&h=400&fit=crop',
    color: 'from-yellow-600 to-orange-600'
  },
  {
    id: 'battle-with-army',
    title: 'सेना युद्ध - Battle with Rama\'s Army',
    subtitle: 'Sons vs Father\'s Forces',
    timeframe: 'During Ashwamedha ceremony',
    description: 'When Rama\'s army comes to reclaim the horse, they face two young warriors whose skill and power are extraordinary. Luv and Kush defeat many renowned warriors, including Bharata, Lakshmana, and others, creating amazement and concern in Rama\'s camp.',
    keyAspects: [
      'Initial underestimation of the young warriors by the army',
      'Luv and Kush\'s extraordinary fighting skills',
      'Defeat of multiple experienced warriors',
      'The army\'s growing amazement at their power',
      'Bharata and Lakshmana\'s unsuccessful attempts',
      'The twins\' use of various divine weapons',
      'Growing suspicion about their true identity',
      'The moral dilemma of fighting children'
    ],
    spiritualSignificance: 'This battle represents the power of dharmic education and divine heritage. It shows how truth and righteousness, when combined with proper training, can overcome seemingly impossible odds.',
    image: 'https://images.unsplash.com/photo-1578528011634-50c02b2e6ce6?w=600&h=400&fit=crop',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 'rama-meets-sons',
    title: 'राम पुत्र मिलन - Rama Meets His Sons',
    subtitle: 'The Recognition',
    timeframe: 'During Ashwamedha ceremony',
    description: 'When Rama himself comes to reclaim the horse, he is struck by the resemblance of the young warriors to himself. The boys challenge him as well, and though Rama recognizes them, they are still unaware of his identity as their father.',
    keyAspects: [
      'Rama\'s immediate recognition of his sons',
      'The boys\' respectful but firm challenge to Rama',
      'Rama\'s internal joy and pain at seeing his children',
      'The ironic situation of father and sons in opposition',
      'Rama\'s admiration for their skills and character',
      'His decision not to reveal his identity immediately',
      'The emotional turmoil hidden behind royal composure',
      'Setting the stage for the final revelation'
    ],
    spiritualSignificance: 'This meeting represents the complex nature of dharma where even the closest relationships can be tested. It shows how evolved souls can maintain equanimity even in the most emotionally challenging situations.',
    image: 'https://images.unsplash.com/photo-1571115764595-644a1c79e753?w=600&h=400&fit=crop',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    id: 'ramayana-recitation',
    title: 'रामायण गान - Recitation of the Ramayana',
    subtitle: 'The Epic Performance',
    timeframe: 'During Ashwamedha ceremony',
    description: 'Sage Valmiki arrives at the ceremony with Luv and Kush, who then recite the Ramayana - their own family\'s story - before the entire assembly. As they sing the beautiful verses, the audience realizes they are hearing about Rama\'s life from his own sons.',
    keyAspects: [
      'Valmiki\'s arrival at the ceremony with the twins',
      'The beautiful musical recitation of the Ramayana',
      'The audience\'s growing realization of the singers\' identity',
      'Emotional impact of hearing their own story',
      'Rama\'s overwhelming emotions hearing his story from his sons',
      'The artistic perfection of their performance',
      'The revelation of Sita\'s presence in Valmiki\'s ashram',
      'Setting up for the final reunion'
    ],
    spiritualSignificance: 'This recitation represents how spiritual truth transcends personal relationships. The boys unknowingly sing their father\'s glory, showing how dharma works through individuals for higher purposes.',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop',
    color: 'from-blue-500 to-purple-500'
  },
  {
    id: 'sita-return',
    title: 'सीता आगमन - Sita\'s Return',
    subtitle: 'The Final Reunion',
    timeframe: 'During Ashwamedha ceremony',
    description: 'Valmiki brings Sita to the assembly, declaring her purity and righteousness. However, Sita, hurt by the years of separation and the pain of unjust exile, makes the ultimate decision to return to her mother, Earth, rather than resume her role as queen.',
    keyAspects: [
      'Valmiki\'s testimony about Sita\'s purity and character',
      'Sita\'s composed but pained demeanor',
      'Her decision to call upon Mother Earth',
      'The earth opening to receive her divine daughter',
      'Rama\'s anguish at this final separation',
      'The assembly\'s shock and sorrow',
      'The recognition of Sita\'s supreme sacrifice',
      'The ultimate lesson about dharma\'s demands'
    ],
    spiritualSignificance: 'Sita\'s return to Earth represents the highest form of surrender and transcendence. She chooses spiritual liberation over worldly position, teaching that ultimate peace comes from union with the divine source.',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=600&h=400&fit=crop',
    color: 'from-green-600 to-teal-600'
  },
  {
    id: 'final-years',
    title: 'अंतिम वर्ष - Final Years and Transcendence',
    subtitle: 'The Ultimate Journey',
    timeframe: 'Years 22-30 after coronation',
    description: 'After Sita\'s departure, Rama rules for several more years, always maintaining dharma but carrying the deep sorrow of separation. Eventually, when Time (Kala) comes to remind him of his divine mission\'s completion, Rama prepares for his final journey back to Vaikuntha.',
    keyAspects: [
      'Rama\'s continued righteous rule despite personal sorrow',
      'The visit of Time (Kala) in the form of an ascetic',
      'Rama\'s recognition that his earthly mission is complete',
      'Preparation for leaving the mortal world',
      'Instructions to his brothers and sons',
      'The final walk into the Sarayu River',
      'Transformation back to his Vishnu form',
      'Return to Vaikuntha with all his devotees'
    ],
    spiritualSignificance: 'This represents the ultimate truth that even divine incarnations complete their earthly missions and return to their transcendent state. It teaches that attachment, even to righteous duties, must eventually be surrendered for final liberation.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    color: 'from-purple-600 to-pink-600'
  }
]

const characterDevelopment = [
  {
    character: 'Lord Rama',
    evolution: 'From Ideal Prince to Supreme Ruler to Divine Transcendence',
    keyMoments: [
      'Establishing Ram Rajya as the perfect kingdom',
      'Making the painful decision about Sita\'s exile',
      'Recognizing his sons and feeling paternal joy and pride',
      'Experiencing ultimate separation from Sita',
      'Accepting the completion of his divine mission'
    ],
    spiritualGrowth: 'Rama\'s character in Uttara Kanda shows the highest evolution - from personal fulfillment to complete self-sacrifice for societal welfare, ultimately transcending all earthly attachments while maintaining perfect dharma.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop'
  },
  {
    character: 'Sita Devi',
    evolution: 'From Queen to Exile to Mother to Divine Transcendence',
    keyMoments: [
      'Gracefully accepting the second exile despite being innocent',
      'Raising Luv and Kush with love and wisdom in the forest',
      'Maintaining her dignity and spiritual strength throughout separation',
      'Making the ultimate decision to return to Mother Earth',
      'Demonstrating the highest form of surrender and detachment'
    ],
    spiritualGrowth: 'Sita represents the pinnacle of spiritual evolution - complete surrender, forgiveness, and transcendence of personal hurt for higher spiritual realization.',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=300&h=300&fit=crop'
  },
  {
    character: 'Luv and Kush',
    evolution: 'From Forest Children to Mighty Warriors to Recognized Princes',
    keyMoments: [
      'Growing up in Valmiki\'s ashram with perfect education',
      'Developing extraordinary skills in all arts and warfare',
      'Challenging and defeating Rama\'s entire army',
      'Reciting the Ramayana beautifully before the royal assembly',
      'Being recognized as Rama\'s sons and heirs to the throne'
    ],
    spiritualGrowth: 'The twins represent the perfect synthesis of knowledge and action, showing how dharmic upbringing creates individuals capable of upholding righteousness in any situation.',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=300&h=300&fit=crop'
  },
  {
    character: 'Sage Valmiki',
    evolution: 'From Author to Guardian to Witness of Divine Drama',
    keyMoments: [
      'Providing shelter and protection to exiled Sita',
      'Becoming a father figure to Luv and Kush',
      'Educating the twins in all aspects of life',
      'Bearing witness to Sita\'s purity and devotion',
      'Facilitating the final recognition and reunion'
    ],
    spiritualGrowth: 'Valmiki represents the sage who not only records divine history but actively participates in facilitating dharma, showing the role of wisdom in supporting divine will.',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=300&fit=crop'
  },
  {
    character: 'Lakshmana',
    evolution: 'From Devoted Brother to Reluctant Executor of Royal Duty',
    keyMoments: [
      'Being tasked with escorting Sita to exile',
      'Experiencing the pain of separating from beloved sister-in-law',
      'Continuing to serve Rama despite personal anguish',
      'Fighting against Luv and Kush unknowingly',
      'Witnessing the final reunion and transcendence'
    ],
    spiritualGrowth: 'Lakshmana\'s character shows the evolution from personal devotion to understanding the demands of dharma, even when they conflict with personal feelings.',
    image: 'https://images.unsplash.com/photo-1588402140747-6fb35f3fbbb6?w=300&h=300&fit=crop'
  }
]

const spiritualTeachings = [
  {
    teaching: 'Raja Dharma vs Personal Dharma',
    description: 'The Uttara Kanda explores the complex relationship between personal desires and public duty. Rama\'s decision regarding Sita shows how a leader must sometimes sacrifice personal happiness for societal harmony.',
    verse: 'लोकधर्मो महाराज सर्वधर्मेषु मुख्यत: | (The duty to society, O great king, is supreme among all duties)',
    application: 'Leaders and individuals in positions of responsibility must consider the greater good, even when it conflicts with personal preferences.',
    symbolism: 'The balance between heart and duty'
  },
  {
    teaching: 'Parental Love and Divine Purpose',
    description: 'The relationship between Rama and his sons demonstrates how divine love operates even through separation. Parents must sometimes allow children to face challenges for their spiritual growth.',
    verse: 'पुत्रस्नेहो महाबाहो सर्वस्नेहेषु मुख्यत: | (Parental love, O mighty-armed one, is supreme among all forms of love)',
    application: 'True love sometimes requires difficult decisions that promote long-term spiritual welfare over immediate comfort.',
    symbolism: 'The divine parent\'s love that guides through trials'
  },
  {
    teaching: 'The Power of Proper Education',
    description: 'Luv and Kush\'s development under Valmiki\'s guidance shows how proper education creates individuals capable of upholding dharma in any situation.',
    verse: 'विद्याददाति विनयं विनयाद्याति पात्रताम् | (Education gives humility, humility leads to worthiness)',
    application: 'Comprehensive education that includes spiritual, intellectual, and practical training creates balanced individuals.',
    symbolism: 'The ideal educational system that develops all human potentials'
  },
  {
    teaching: 'Transcendence Through Surrender',
    description: 'Sita\'s final choice to return to Mother Earth represents the highest form of spiritual surrender - choosing liberation over worldly position.',
    verse: 'परं भवस्य तत्त्वं तु त्यागो नान्यत्र गम्यते | (The ultimate truth of existence is reached through surrender, not through any other means)',
    application: 'True spiritual progress requires letting go of even righteous attachments when called to higher realization.',
    symbolism: 'The soul\'s return to its divine source'
  },
  {
    teaching: 'The Completion of Divine Mission',
    description: 'Rama\'s eventual transcendence teaches that even divine incarnations complete their earthly purposes and return to their transcendent state.',
    verse: 'कृत्वा लोकहितं सर्वं स्वधाम गम्यते पुन: | (Having accomplished all that benefits the world, one returns to one\'s divine abode)',
    application: 'Understanding that all roles and relationships in life are temporary, meant to serve higher purposes.',
    symbolism: 'The eternal cycle of divine service and return'
  },
  {
    teaching: 'The Complexity of Dharma',
    description: 'The Uttara Kanda presents situations where dharma itself seems to create suffering, teaching that righteousness operates beyond simple moral categories.',
    verse: 'धर्मो हि परमो लोके धर्मे सर्वं प्रतिष्ठितम् | (Dharma is indeed supreme in the world; everything is established in dharma)',
    application: 'True dharma sometimes requires actions that appear harsh but serve the highest good of all beings.',
    symbolism: 'The hidden wisdom in apparent suffering'
  }
]

const culturalImpact = [
  {
    aspect: 'Ideal Governance',
    description: 'Ram Rajya has become the benchmark for perfect governance in Indian political thought',
    examples: [
      'Reference point for political leaders across centuries',
      'Model for justice, prosperity, and social harmony',
      'Standard for environmental and economic balance'
    ]
  },
  {
    aspect: 'Parenting and Education',
    description: 'The story of Luv and Kush has influenced educational philosophy and parenting approaches',
    examples: [
      'Emphasis on comprehensive education (gurukula system)',
      'Balance between knowledge and practical skills',
      'Importance of moral and spiritual development'
    ]
  },
  {
    aspect: 'Women\'s Spiritual Strength',
    description: 'Sita\'s character in Uttara Kanda has inspired discussions about women\'s autonomy and spiritual power',
    examples: [
      'Model of dignity in adversity',
      'Power of spiritual choice over social position',
      'Strength through faith and surrender'
    ]
  },
  {
    aspect: 'Art and Literature',
    description: 'Uttara Kanda has inspired countless artistic and literary works across cultures',
    examples: [
      'Classical dance and music performances',
      'Modern literary interpretations and retellings',
      'Visual arts depicting key scenes'
    ]
  }
]

export default function UttaraKandaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link
              href="/scriptures"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Scriptures
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link
              href="/scriptures/ramayana"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Ramayana
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-purple-600 font-medium">Uttara Kanda</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Crown className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">📚 Book 7 - The Final Chapter</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sanskrit">
                उत्तर काण्ड
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-purple-100">
                Uttara Kanda - The Final Book
              </h2>
              <p className="text-lg text-indigo-100 leading-relaxed mb-8">
                {uttaraKandaOverview.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#major-events"
                  className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Explore the Story
                </Link>
                <Link
                  href="#teachings"
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Spiritual Teachings
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1578528011634-50c02b2e6ce6?w=600&h=450&fit=crop"
                  alt="Ram Rajya - The Golden Rule"
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

        {/* Overview Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Overview</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Scroll className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Chapters</h3>
              <p className="text-gray-700">{uttaraKandaOverview.chapters}</p>
            </div>
            <div className="text-center">
              <Book className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Verses</h3>
              <p className="text-gray-700">{uttaraKandaOverview.verses}</p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Core Theme</h3>
              <p className="text-gray-700">Dharma vs Personal Desire</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {uttaraKandaOverview.themes.map((theme, index) => (
              <div key={index} className="bg-purple-50 rounded-lg p-4 text-center">
                <span className="text-purple-800 font-semibold text-sm">{theme}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-purple-800 mb-6 text-center">Spiritual Significance</h3>
            <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              {uttaraKandaOverview.significance}
            </p>
          </div>
        </section>

        {/* Major Events */}
        <section id="major-events">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Major Events & Episodes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The Uttara Kanda presents the most complex and profound episodes of the Ramayana, each teaching deep spiritual truths
            </p>
          </div>

          <div className="space-y-12">
            {majorEvents.map((event, index) => (
              <div key={event.id} className="group">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src={event.image}
                          alt={event.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-70`}></div>
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                          <span className="text-xs font-semibold text-gray-800">Episode {index + 1}</span>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white text-xl font-bold mb-2">{event.title.split(' - ')[0]}</h3>
                          <p className="text-white/90 text-sm">{event.timeframe}</p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-3/5 p-8 lg:p-12">
                      <div className="mb-6">
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">{event.subtitle}</h4>
                        <p className="text-gray-700 leading-relaxed">{event.description}</p>
                      </div>

                      <div className="mb-6">
                        <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <Star className="w-4 h-4 mr-2 text-purple-600" />
                          Key Aspects:
                        </h5>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                          {event.keyAspects.map((aspect, idx) => (
                            <div key={idx} className="flex items-start">
                              <span className="text-purple-500 mr-2 text-sm mt-1">•</span>
                              <span className="text-gray-600 text-sm">{aspect}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                        <h6 className="font-semibold text-purple-800 mb-2 flex items-center">
                          <Eye className="w-4 h-4 mr-2" />
                          Spiritual Significance:
                        </h6>
                        <p className="text-purple-700 text-sm leading-relaxed">{event.spiritualSignificance}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Character Development */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Character Evolution</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Witness the profound spiritual evolution of key characters through the challenges and triumphs of the final book
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {characterDevelopment.map((char, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex">
                  <div className="w-32 h-32 flex-shrink-0">
                    <Image
                      src={char.image}
                      alt={char.character}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{char.character}</h3>
                    <p className="text-purple-600 font-semibold text-sm mb-3">{char.evolution}</p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">{char.spiritualGrowth}</p>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Moments:</h4>
                  <ul className="space-y-1">
                    {char.keyMoments.map((moment, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-purple-500 mr-2 text-xs mt-1">▸</span>
                        <span className="text-gray-600 text-xs">{moment}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spiritual Teachings */}
        <section id="teachings">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Profound Spiritual Teachings</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The Uttara Kanda offers the deepest spiritual insights of the Ramayana, addressing complex questions of dharma, duty, and transcendence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {spiritualTeachings.map((teaching, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Scale className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{teaching.teaching}</h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">{teaching.description}</p>

                <div className="bg-purple-50 rounded-lg p-4 mb-4 border-l-4 border-purple-500">
                  <p className="text-purple-800 font-sanskrit text-sm mb-2">{teaching.verse}</p>
                  <p className="text-purple-700 text-xs italic">{teaching.symbolism}</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-blue-800 mb-2">Practical Application:</p>
                  <p className="text-blue-700 text-sm">{teaching.application}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cultural Impact */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cultural & Historical Impact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The influence of Uttara Kanda extends far beyond literature, shaping governance, education, and spiritual thought across centuries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {culturalImpact.map((impact, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Home className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{impact.aspect}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{impact.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {impact.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-purple-500 mr-2 text-sm">•</span>
                        <span className="text-gray-600 text-sm">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white rounded-3xl p-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">🌟 Complete Your Ramayana Journey 🌟</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              The Uttara Kanda completes the great epic with its profound teachings on dharma, sacrifice, and transcendence. Explore the full depth of this sacred text.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/scriptures/ramayana"
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to All Kandas
              </Link>
              <Link
                href="/scriptures/ramayana/characters"
                className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
              >
                Explore Characters
                <Users className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}