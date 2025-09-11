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
  Sword,
  Shield,
  Zap,
  Mountain,
  Sun,
  ChevronRight,
  ArrowLeft,
  Flame,
  Eye
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mahabharata - The Great Epic of Dharma | Complete Story & Teachings | PeacefulAnswers',
  description: 'Explore the complete Mahabharata epic - the story of Krishna, Arjuna, the Pandavas, Bhagavad Gita, and the great war of Kurukshetra. Discover profound teachings and eternal wisdom.',
  keywords: 'Mahabharata, Krishna, Arjuna, Pandavas, Kauravas, Bhagavad Gita, Kurukshetra, Vyasa, dharma, Hindu epic',
  openGraph: {
    title: 'Mahabharata - The Great Epic of Dharma | Complete Story & Teachings',
    description: 'The world\'s longest epic that contains the essence of all knowledge and dharma',
    type: 'website',
  },
}

const mahabharataOverview = {
  title: 'The Mahabharata - महाभारत',
  subtitle: 'The Great Epic of the Bharata Dynasty',
  description: 'The Mahabharata, composed by sage Vyasa, is not just the world\'s longest epic poem but an encyclopedia of human knowledge, dharma, and spiritual wisdom. It chronicles the great war between the Pandavas and Kauravas, but more importantly, it explores the complex nature of dharma through the divine teachings of Lord Krishna, culminating in the immortal Bhagavad Gita.',
  author: 'Maharshi Vyasa',
  verses: '100,000 Shlokas (verses)',
  books: '18 Parvas (Books)',
  period: 'Approximately 400 BCE - 400 CE',
  significance: 'Contains the complete knowledge of dharma, artha, kama, and moksha through divine teachings and complex moral dilemmas',
  famous_quote: 'यद्यात्र अस्ति तत्त्वत्र यन्नेहास्ति न कुत्रचित् - What is here is found elsewhere, what is not here is found nowhere else'
}

const eighteenParvas = [
  {
    id: 'adi',
    name: 'Adi Parva',
    title: 'The Book of Beginning',
    description: 'Chronicles the origins of the Bharata dynasty, birth of the Pandavas and Kauravas, their childhood, and the burning of the lac house.',
    chapters: '236 chapters',
    keyEvents: [
      'Birth of Dhritarashtra, Pandu, and Vidura',
      'Birth of the Pandavas through divine intervention',
      'Birth of the Kauravas and the curse of hundred sons',
      'Training under Dronacharya and Kripacharya',
      'The tournament and Karna\'s entry'
    ],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 'sabha',
    name: 'Sabha Parva',
    title: 'The Book of the Assembly Hall',
    description: 'The game of dice, Draupadi\'s humiliation, and the exile of the Pandavas for thirteen years.',
    chapters: '81 chapters',
    keyEvents: [
      'Yudhishthira\'s Rajasuya sacrifice',
      'Building of Maya Sabha (Crystal Palace)',
      'The fateful game of dice with Shakuni',
      'Draupadi\'s disrobing and humiliation',
      'Thirteen years of exile pronounced'
    ],
    image: 'https://images.unsplash.com/photo-1571115764595-644a1c79e753?w=400&h=300&fit=crop',
    color: 'from-red-500 to-pink-500'
  },
  {
    id: 'vana',
    name: 'Vana Parva',
    title: 'The Book of the Forest',
    description: 'The twelve years of forest exile, spiritual teachings, and encounters with sages and divine beings.',
    chapters: '324 chapters',
    keyEvents: [
      'Life in the forests and encounters with sages',
      'Arjuna\'s penance and acquisition of divine weapons',
      'Bhima\'s encounter with Hanuman',
      'The Yaksha Prashna (Questions of the Yaksha)',
      'Various philosophical discourses and stories'
    ],
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 'virata',
    name: 'Virata Parva',
    title: 'The Book of Virata',
    description: 'The thirteenth year of exile spent incognito in the kingdom of Virata.',
    chapters: '72 chapters',
    keyEvents: [
      'Pandavas assume false identities in Virata\'s court',
      'Arjuna as Brihannala teaches dance and music',
      'Bhima as Ballava works in the kitchen',
      'Kichaka\'s death and near discovery',
      'Battle against the Kauravas and revelation'
    ],
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 'udyoga',
    name: 'Udyoga Parva',
    title: 'The Book of Preparation',
    description: 'Diplomatic efforts for peace, Krishna\'s embassy to Hastinapur, and preparations for war.',
    chapters: '199 chapters',
    keyEvents: [
      'Krishna\'s peace mission to Duryodhana',
      'Failure of negotiations and inevitability of war',
      'Formation of alliances and gathering of armies',
      'Bhishma appointed as commander of Kaurava forces',
      'Final preparations and omens of war'
    ],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'bhishma',
    name: 'Bhishma Parva',
    title: 'The Book of Bhishma',
    description: 'The first ten days of war under Bhishma\'s command, including the immortal Bhagavad Gita.',
    chapters: '124 chapters',
    keyEvents: [
      'The Bhagavad Gita - Krishna\'s divine discourse',
      'Arjuna\'s initial reluctance to fight',
      'First ten days of the great war',
      'Bhishma\'s incredible prowess in battle',
      'Shikhandi and Bhishma\'s fall'
    ],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'drona',
    name: 'Drona Parva',
    title: 'The Book of Drona',
    description: 'Five days of war under Dronacharya\'s command, Abhimanyu\'s death, and great heroic deeds.',
    chapters: '204 chapters',
    keyEvents: [
      'Dronacharya becomes supreme commander',
      'Formation of various military arrays (vyuhas)',
      'Abhimanyu\'s entry into Chakravyuha and heroic death',
      'Arjuna\'s vow to kill Jayadratha',
      'Death of Dronacharya through deception'
    ],
    image: 'https://images.unsplash.com/photo-1578528011634-50c02b2e6ce6?w=400&h=300&fit=crop',
    color: 'from-red-600 to-purple-600'
  },
  {
    id: 'karna',
    name: 'Karna Parva',
    title: 'The Book of Karna',
    description: 'Two days of war under Karna\'s leadership and his final battle with Arjuna.',
    chapters: '96 chapters',
    keyEvents: [
      'Karna becomes the supreme commander',
      'Revelation of Karna\'s true parentage',
      'Epic duel between Karna and Arjuna',
      'Karna\'s curses come to fruition',
      'Death of the great warrior Karna'
    ],
    image: 'https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?w=400&h=300&fit=crop',
    color: 'from-amber-500 to-red-500'
  },
  {
    id: 'shalya',
    name: 'Shalya Parva',
    title: 'The Book of Shalya',
    description: 'The final day of war, death of Duryodhana, and the end of the great battle.',
    chapters: '70 chapters',
    keyEvents: [
      'Shalya becomes the final commander',
      'Death of Shalya and collapse of Kaurava forces',
      'Duryodhana\'s final battle with Bhima',
      'Breaking of Duryodhana\'s thigh and his death',
      'End of the eighteen-day war'
    ],
    image: 'https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?w=400&h=300&fit=crop',
    color: 'from-gray-500 to-slate-600'
  }
]

const mainCharacters = [
  {
    name: 'Lord Krishna',
    title: 'Yogeshwar',
    description: 'The supreme divine incarnation, guide, philosopher, and charioteer who delivers the Bhagavad Gita',
    qualities: ['Divine', 'Wise', 'Strategic', 'Compassionate'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop'
  },
  {
    name: 'Arjuna',
    title: 'Partha',
    description: 'The greatest archer, Krishna\'s devotee, and recipient of the Bhagavad Gita teachings',
    qualities: ['Skilled', 'Devoted', 'Righteous', 'Disciplined'],
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=300&h=300&fit=crop'
  },
  {
    name: 'Yudhishthira',
    title: 'Dharmaraja',
    description: 'The eldest Pandava, king of righteousness, known for his unwavering commitment to dharma',
    qualities: ['Righteous', 'Truthful', 'Just', 'Wise'],
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=300&h=300&fit=crop'
  },
  {
    name: 'Bhima',
    title: 'Vrikodara',
    description: 'The mighty warrior with the strength of ten thousand elephants, protector of the family',
    qualities: ['Strong', 'Loyal', 'Brave', 'Protective'],
    image: 'https://images.unsplash.com/photo-1588402140747-6fb35f3fbbb6?w=300&h=300&fit=crop'
  },
  {
    name: 'Draupadi',
    title: 'Panchali',
    description: 'The fire-born princess, wife of the five Pandavas, symbol of strength and virtue',
    qualities: ['Virtuous', 'Strong', 'Devoted', 'Dignified'],
    image: 'https://images.unsplash.com/photo-1578528011634-50c02b2e6ce6?w=300&h=300&fit=crop'
  },
  {
    name: 'Karna',
    title: 'Suryaputra',
    description: 'The tragic hero, son of Surya, greatest warrior cursed by birth and circumstances',
    qualities: ['Generous', 'Loyal', 'Skilled', 'Tragic'],
    image: 'https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?w=300&h=300&fit=crop'
  },
  {
    name: 'Bhishma',
    title: 'Pitamaha',
    description: 'The grand uncle, greatest warrior bound by terrible vows, embodiment of sacrifice',
    qualities: ['Devoted', 'Sacrificing', 'Invincible', 'Wise'],
    image: 'https://images.unsplash.com/photo-1582905722825-8af5a0d7b2a8?w=300&h=300&fit=crop'
  },
  {
    name: 'Duryodhana',
    title: 'Suyodhana',
    description: 'The eldest Kaurava, skilled warrior blinded by jealousy and ambition',
    qualities: ['Ambitious', 'Jealous', 'Skilled', 'Prideful'],
    image: 'https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?w=300&h=300&fit=crop'
  }
]

const spiritualTeachings = [
  {
    teaching: 'Dharma (Righteous Duty)',
    description: 'The complex nature of dharma shown through various characters facing moral dilemmas in different situations.',
    example: 'Yudhishthira\'s struggles with truth vs. compassion, Krishna\'s guidance on contextual dharma'
  },
  {
    teaching: 'Karma (Action & Consequence)',
    description: 'Every action has consequences that manifest across lifetimes, as demonstrated by various characters\' fates.',
    example: 'Karna\'s curses manifesting at crucial moments, Duryodhana\'s actions leading to destruction'
  },
  {
    teaching: 'Devotion (Bhakti)',
    description: 'Complete surrender to the divine as shown through Arjuna\'s relationship with Krishna.',
    example: 'Arjuna\'s acceptance of Krishna as his guide and surrendering to divine will'
  },
  {
    teaching: 'Detachment (Vairagya)',
    description: 'Performing one\'s duty without attachment to results, as taught in the Bhagavad Gita.',
    example: 'Krishna\'s teaching to fight without attachment to victory or defeat'
  },
  {
    teaching: 'Sacrifice (Yajna)',
    description: 'Life itself as a sacrifice for the greater good, demonstrated by various characters.',
    example: 'Bhishma\'s lifelong sacrifice for the throne, Abhimanyu\'s sacrifice in battle'
  },
  {
    teaching: 'Knowledge (Jnana)',
    description: 'Different types of knowledge - material, spiritual, and divine - and their applications.',
    example: 'The Bhagavad Gita\'s discourse on various yogas and paths to liberation'
  }
]

const photographyGallery = [
  {
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    title: 'Lord Krishna and Arjuna',
    description: 'The divine charioteer delivering the eternal teachings of the Bhagavad Gita'
  },
  {
    url: 'https://images.unsplash.com/photo-1571115764595-644a1c79e753?w=800&h=600&fit=crop',
    title: 'The Pandava Brothers',
    description: 'The five brothers united in their quest for dharma and justice'
  },
  {
    url: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=600&fit=crop',
    title: 'Draupadi',
    description: 'The fire-born princess who suffered yet maintained her dignity and virtue'
  },
  {
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
    title: 'Forest Exile',
    description: 'The thirteen years of exile that transformed the Pandavas spiritually'
  },
  {
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    title: 'Battle of Kurukshetra',
    description: 'The great eighteen-day war that changed the course of history'
  },
  {
    url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
    title: 'Bhishma on Bed of Arrows',
    description: 'The grand patriarch choosing his time of death, teaching final wisdom'
  }
]

export default function MahabharataPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/scriptures" 
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Scriptures
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Scroll className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">📚 The Great Epic</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sanskrit">
                महाभारत
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                The Mahabharata
              </h2>
              <p className="text-lg text-indigo-100 leading-relaxed mb-6">
                {mahabharataOverview.description}
              </p>
              <blockquote className="text-sm text-blue-200 italic mb-8 border-l-4 border-blue-300 pl-4">
                "{mahabharataOverview.famous_quote}"
              </blockquote>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="#parvas" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Explore the 18 Parvas
                </Link>
                <Link 
                  href="#bhagavad-gita" 
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Read Bhagavad Gita
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=450&fit=crop"
                  alt="Lord Krishna delivering the Bhagavad Gita"
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
        
        {/* Epic Overview */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Epic Overview</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <Scroll className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Author</h3>
              <p className="text-gray-700">{mahabharataOverview.author}</p>
            </div>
            <div className="text-center">
              <Book className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Verses</h3>
              <p className="text-gray-700">{mahabharataOverview.verses}</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Books</h3>
              <p className="text-gray-700">{mahabharataOverview.books}</p>
            </div>
            <div className="text-center">
              <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Period</h3>
              <p className="text-gray-700">{mahabharataOverview.period}</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Universal Significance</h3>
            <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              {mahabharataOverview.significance}
            </p>
          </div>
        </section>

        {/* Eighteen Parvas */}
        <section id="parvas">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Eighteen Parvas (Books)</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Each Parva represents a different aspect of the great epic, from origins to the ultimate spiritual teachings
            </p>
          </div>
          
          <div className="space-y-8">
            {eighteenParvas.map((parva, index) => (
              <div key={parva.id} className="group">
                <div className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}>
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src={parva.image}
                          alt={parva.name}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${parva.color} opacity-70`}></div>
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                          <span className="text-xs font-semibold text-gray-800">Parva {index + 1}</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{parva.name}</h3>
                        <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {parva.chapters}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-blue-700 mb-4">{parva.title}</h4>
                      <p className="text-gray-700 leading-relaxed mb-6">{parva.description}</p>
                      
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-3">Key Events:</h5>
                        <ul className="space-y-2">
                          {parva.keyEvents.map((event, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-blue-500 mr-3 text-sm">•</span>
                              <span className="text-gray-600 text-sm">{event}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bhagavad Gita Highlight */}
        <section id="bhagavad-gita" className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-3xl p-12 text-white">
          <div className="text-center mb-8">
            <Eye className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-4xl font-bold mb-4">The Bhagavad Gita</h2>
            <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
              The crown jewel of the Mahabharata - Krishna's divine discourse to Arjuna on the battlefield of Kurukshetra, 
              containing the essence of all spiritual wisdom and the solution to all human dilemmas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Book className="w-12 h-12 mx-auto mb-4 text-yellow-200" />
              <h3 className="text-xl font-semibold mb-3">18 Chapters</h3>
              <p className="text-yellow-100 text-sm">Each chapter reveals different aspects of yoga and spiritual wisdom</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Star className="w-12 h-12 mx-auto mb-4 text-yellow-200" />
              <h3 className="text-xl font-semibold mb-3">700 Verses</h3>
              <p className="text-yellow-100 text-sm">Divine shlokas containing the complete spiritual philosophy</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-yellow-200" />
              <h3 className="text-xl font-semibold mb-3">Universal Truth</h3>
              <p className="text-yellow-100 text-sm">Timeless teachings applicable to all humanity across all ages</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/scriptures/bhagavad-gita"
              className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
            >
              Read the Bhagavad Gita
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>

        {/* Main Characters */}
        <section id="characters">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Immortal Characters</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Meet the complex characters whose struggles, victories, and wisdom continue to guide humanity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainCharacters.map((character, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={character.image}
                    alt={character.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">{character.name}</h3>
                    <p className="text-sm text-blue-200">{character.title}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-4 text-sm">{character.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {character.qualities.map((quality, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                        {quality}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spiritual Teachings */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Eternal Teachings</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The profound spiritual and philosophical teachings that emerge from the complex narrative
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {spiritualTeachings.map((teaching, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <Flame className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{teaching.teaching}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{teaching.description}</p>
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="text-sm font-semibold text-blue-800 mb-2">Example:</p>
                  <p className="text-blue-700 text-sm">{teaching.example}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Photo Gallery */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visual Epic</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Experience the grandeur and depth of the Mahabharata through visual representations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photographyGallery.map((photo, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={photo.url}
                    alt={photo.description}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{photo.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-3xl p-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">🏹 Begin Your Mahabharata Journey 🏹</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Dive into the world's greatest epic and discover eternal wisdom that transforms understanding of life, dharma, and spiritual purpose
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/scriptures/mahabharata/adi-parva"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
              >
                Start with Adi Parva
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/scriptures/bhagavad-gita"
                className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
              >
                Read Bhagavad Gita
                <Eye className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}