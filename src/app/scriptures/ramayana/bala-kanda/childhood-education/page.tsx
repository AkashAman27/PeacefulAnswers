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
  GraduationCap,
  Palette,
  Dumbbell,
  Brain,
  BookOpen,
  Trophy
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Childhood and Early Education of Rama | Bala Kanda | Complete Ramayana | PeacefulAnswers',
  description: 'Explore the divine childhood and comprehensive education of Lord Rama and his brothers - their training in 64 arts, martial skills, spiritual wisdom, and character formation in Ayodhya.',
  keywords: 'Rama childhood, education, 64 arts, martial training, Ayodhya, Bala Kanda, Ramayana, spiritual education, princely training',
  openGraph: {
    title: 'Childhood and Early Education of Rama | The Formation of Divine Character',
    description: 'The comprehensive education and divine childhood that shaped Lord Rama into Maryada Purushottama',
    type: 'website',
  },
}

const childEdu = {
  title: 'बाल्यकाल शिक्षा - Childhood and Early Education',
  subtitle: 'The Formation of Divine Character',
  timeframe: 'Ages 1-16 years',
  description: 'The childhood and early education of the four princes in Ayodhya represents the ideal development of human potential. Under the guidance of sage Vasishtha and other learned teachers, Rama and his brothers receive comprehensive education in all aspects of knowledge - physical, intellectual, emotional, and spiritual. This period establishes their character foundation and prepares them for their future roles as ideal rulers and dharmic exemplars.',
  spiritualSignificance: 'This phase demonstrates how divine souls, even in human form, must undergo proper education and character development. It shows the importance of holistic education that balances worldly knowledge with spiritual wisdom, preparing the individual for their divine mission while maintaining humility and dharmic values.',
  importance: 'The education phase is crucial as it establishes Rama as not just divinely gifted but also properly trained, making him relatable to humanity while maintaining his divine excellence.'
}

const educationalAreas = [
  {
    category: 'Traditional Arts & Sciences (64 Kalas)',
    icon: Palette,
    areas: [
      'Music (Vocal and Instrumental)',
      'Dance and Rhythmic Arts',
      'Painting and Sculpture',
      'Poetry and Literature',
      'Mathematics and Astronomy',
      'Architecture and Engineering',
      'Medicine and Healing Arts',
      'Agriculture and Animal Husbandry'
    ],
    significance: 'The 64 traditional arts represent complete cultural education, ensuring the princes become well-rounded individuals capable of appreciating and contributing to all aspects of civilization.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    category: 'Martial Arts & Warfare',
    icon: Sword,
    areas: [
      'Archery (Dhanurvidya)',
      'Sword Fighting (Khadgavidya)',
      'Mace Combat (Gadayuddha)',
      'Spear Fighting (Shakti Yuddha)',
      'Wrestling and Hand Combat',
      'Chariot Warfare',
      'Elephant and Horse Riding',
      'Military Strategy and Tactics'
    ],
    significance: 'Martial training prepares the princes for their kshatriya duties as protectors of dharma and defenders of the righteous, combining physical strength with mental strategy.',
    color: 'from-red-500 to-orange-500'
  },
  {
    category: 'Spiritual & Scriptural Studies',
    icon: BookOpen,
    areas: [
      'Vedas and Vedangas',
      'Upanishads and Philosophy',
      'Dharmashastra (Law and Ethics)',
      'Meditation and Yoga',
      'Rituals and Ceremonies',
      'Mantras and Sacred Sounds',
      'Astrology and Cosmic Knowledge',
      'Saints\' Biographies and Stories'
    ],
    significance: 'Spiritual education ensures the princes understand their divine nature and cosmic purpose, grounding their actions in dharmic principles and divine wisdom.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    category: 'Statecraft & Administration',
    icon: Crown,
    areas: [
      'Political Science (Rajniti)',
      'Economics and Trade',
      'Diplomacy and Foreign Relations',
      'Justice and Legal Principles',
      'Treasury Management',
      'Agriculture and Land Management',
      'Urban Planning',
      'Public Welfare Policies'
    ],
    significance: 'Administrative training prepares them to be ideal rulers who can govern with wisdom, justice, and compassion, ensuring the welfare of all subjects.',
    color: 'from-green-500 to-teal-500'
  }
]

const characterDevelopment = [
  {
    prince: 'Rama',
    qualities: 'Righteousness, Compassion, Leadership, Wisdom',
    specialization: 'Perfect balance of all virtues, exceptional in archery and diplomacy',
    uniqueTraits: [
      'Natural inclination toward justice and fairness',
      'Exceptional memory and quick learning ability',
      'Innate leadership qualities recognized by all',
      'Deep spiritual contemplation and devotion',
      'Perfect control over emotions and desires',
      'Magnetic personality that draws all beings'
    ],
    teachersNote: 'Sage Vasishtha often remarked that Rama seemed to remember rather than learn, suggesting his divine nature manifesting through education.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    color: 'from-orange-500 to-red-500'
  },
  {
    prince: 'Lakshmana',
    qualities: 'Devotion, Loyalty, Courage, Service',
    specialization: 'Martial arts and protective strategies, devoted service to Rama',
    uniqueTraits: [
      'Unwavering devotion to Rama from birth',
      'Exceptional skills in protective warfare',
      'Natural tendency to serve rather than lead',
      'Intuitive understanding of Rama\'s needs',
      'Fierce loyalty combined with gentle nature',
      'Perfect complement to Rama\'s personality'
    ],
    teachersNote: 'Teachers observed that Lakshmana learned fastest when training alongside Rama, showing his natural role as eternal companion.',
    image: 'https://images.unsplash.com/photo-1588402140747-6fb35f3fbbb6?w=400&h=400&fit=crop',
    color: 'from-blue-500 to-purple-500'
  },
  {
    prince: 'Bharata',
    qualities: 'Sacrifice, Righteousness, Administration, Humility',
    specialization: 'Administrative excellence and economic management',
    uniqueTraits: [
      'Natural talent for administrative affairs',
      'Deep understanding of justice and law',
      'Ability to sacrifice personal interests for greater good',
      'Excellent in managing resources and treasury',
      'Diplomatic skills and peaceful conflict resolution',
      'Strong moral compass and ethical decision-making'
    ],
    teachersNote: 'Bharata showed exceptional ability in statecraft and was often praised for putting dharma above personal desires.',
    image: 'https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?w=400&h=400&fit=crop',
    color: 'from-green-500 to-blue-500'
  },
  {
    prince: 'Shatrughna',
    qualities: 'Intelligence, Strategy, Protection, Analysis',
    specialization: 'Military strategy and elimination of threats to dharma',
    uniqueTraits: [
      'Exceptional strategic thinking and planning',
      'Natural ability to identify and neutralize threats',
      'Deep analytical mind and problem-solving skills',
      'Loyal protection of family and dharma',
      'Excellence in espionage and intelligence gathering',
      'Fearless in facing any challenge or enemy'
    ],
    teachersNote: 'Shatrughna was noted for his ability to see through deception and his talent for protecting others from hidden dangers.',
    image: 'https://images.unsplash.com/photo-1578528011634-50c02b2e6ce6?w=400&h=400&fit=crop',
    color: 'from-purple-500 to-pink-500'
  }
]

const dailyRoutine = [
  {
    time: 'Brahma Muhurta (4:00-6:00 AM)',
    activity: 'Meditation and Spiritual Practice',
    description: 'The princes wake before dawn for personal meditation, prayer, and contemplation. This sacred time helps them connect with their divine nature and set positive intentions for the day.',
    significance: 'Starting the day with spiritual practice establishes inner peace and divine connection as the foundation for all activities.'
  },
  {
    time: 'Sunrise (6:00-8:00 AM)',
    activity: 'Physical Training and Exercises',
    description: 'Comprehensive physical training including yoga, martial arts practice, weapon training, and physical fitness exercises to develop strength, agility, and endurance.',
    significance: 'Physical fitness is essential for kshatriyas to fulfill their duty as protectors and to maintain a healthy body as temple of the soul.'
  },
  {
    time: 'Morning (8:00-12:00 PM)',
    activity: 'Academic Studies',
    description: 'Intensive study sessions covering scriptures, philosophy, mathematics, astronomy, literature, and various sciences under the guidance of learned teachers.',
    significance: 'Intellectual development through diverse subjects creates well-rounded personalities capable of understanding complex issues and making wise decisions.'
  },
  {
    time: 'Midday (12:00-2:00 PM)',
    activity: 'Practical Arts and Skills',
    description: 'Hands-on learning of practical skills including music, painting, sculpture, crafts, and other traditional arts that refine sensitivity and creativity.',
    significance: 'Artistic education develops aesthetic sense, emotional intelligence, and appreciation for beauty, making rulers more humane and cultured.'
  },
  {
    time: 'Afternoon (2:00-5:00 PM)',
    activity: 'Statecraft and Administration',
    description: 'Training in governance, law, economics, diplomacy, and administrative skills through theoretical study and practical observation of court proceedings.',
    significance: 'Administrative training prepares future rulers to govern wisely and justly, ensuring the welfare and prosperity of their subjects.'
  },
  {
    time: 'Evening (5:00-7:00 PM)',
    activity: 'Recreation and Brotherhood',
    description: 'Time for recreational activities, games, friendly competitions, and bonding with brothers and friends, developing social skills and relationships.',
    significance: 'Recreation and social interaction develop emotional intelligence, teamwork, and healthy relationships essential for effective leadership.'
  },
  {
    time: 'Night (7:00-10:00 PM)',
    activity: 'Reflection and Rest',
    description: 'Evening prayers, reflection on the day\'s learning, discussion with teachers and family, followed by peaceful rest to rejuvenate body and mind.',
    significance: 'Daily reflection consolidates learning and spiritual growth, while adequate rest ensures physical and mental health for continued development.'
  }
]

const teachersAndMentors = [
  {
    name: 'Sage Vasishtha',
    title: 'Royal Guru and Chief Teacher',
    specialization: 'Spiritual wisdom, Vedic knowledge, Character formation',
    contribution: 'Primary spiritual guide who shaped the princes\' moral and ethical foundation',
    teaching: 'Emphasized that true education must develop both inner wisdom and outer capability',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=300&fit=crop'
  },
  {
    name: 'Acharya Vamadeva',
    title: 'Master of Martial Arts',
    specialization: 'Weapons training, Military strategy, Physical development',
    contribution: 'Developed the princes\' martial skills and warrior capabilities',
    teaching: 'Strength without dharma is destruction; dharma without strength is helplessness',
    image: 'https://images.unsplash.com/photo-1571115764595-644a1c79e753?w=300&h=300&fit=crop'
  },
  {
    name: 'Sage Jabali',
    title: 'Scholar of Sciences',
    specialization: 'Mathematics, Astronomy, Natural sciences, Logic',
    contribution: 'Taught the rational and scientific aspects of knowledge',
    teaching: 'Understanding the natural world deepens appreciation for divine creation',
    image: 'https://images.unsplash.com/photo-1578528011634-50c02b2e6ce6?w=300&h=300&fit=crop'
  },
  {
    name: 'Master Katyayana',
    title: 'Arts and Culture Teacher',
    specialization: 'Music, Dance, Poetry, Fine arts',
    contribution: 'Refined the princes\' aesthetic sense and cultural appreciation',
    teaching: 'Art is the language of the soul and the bridge between human and divine',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop'
  }
]

const spiritualFoundations = [
  {
    principle: 'Dharmic Character Formation',
    description: 'The education emphasizes that all knowledge and skills must be grounded in dharmic principles. Every subject is taught with its ethical implications and moral applications.',
    example: 'Learning archery includes understanding when and how to use weapons righteously, never for aggression but only for protection of the innocent.',
    modernRelevance: 'Character-based education that integrates moral values with academic and practical skills'
  },
  {
    principle: 'Holistic Development',
    description: 'Education addresses all aspects of human development - physical, intellectual, emotional, and spiritual - ensuring balanced growth of personality.',
    example: 'The princes learn music not just as entertainment but as a means of emotional expression and spiritual elevation.',
    modernRelevance: 'Comprehensive education systems that develop multiple intelligences and capabilities rather than focusing solely on academics'
  },
  {
    principle: 'Service Orientation',
    description: 'All education is oriented toward service to society and cosmic order, not personal aggrandizement or selfish gain.',
    example: 'Administrative training emphasizes the ruler as servant of the people, responsible for their welfare and spiritual progress.',
    modernRelevance: 'Leadership education that emphasizes responsibility, service, and stewardship rather than power and privilege'
  },
  {
    principle: 'Guru-Shishya Relationship',
    description: 'The sacred relationship between teacher and student is based on respect, devotion, and surrender, facilitating deep transmission of knowledge and wisdom.',
    example: 'The princes serve their teachers with humility and devotion, creating an atmosphere where profound learning can occur.',
    modernRelevance: 'Mentorship relationships that go beyond information transfer to include character development and wisdom transmission'
  }
]

const learningOutcomes = [
  {
    outcome: 'Mastery of All Knowledge Domains',
    description: 'By age 16, all four princes had achieved mastery in their respective areas while maintaining competence in all fields of knowledge.',
    evidence: 'Later events show their expertise: Rama\'s archery, Bharata\'s administration, Lakshmana\'s protection skills, Shatrughna\'s strategic thinking'
  },
  {
    outcome: 'Unshakeable Dharmic Foundation',
    description: 'Their education created an unshakeable commitment to dharma that guides all their future actions and decisions.',
    evidence: 'Throughout the epic, none of the brothers ever compromise on dharmic principles, even at great personal cost'
  },
  {
    outcome: 'Natural Leadership Qualities',
    description: 'The comprehensive education developed natural leadership abilities that inspire devotion and respect from all who encounter them.',
    evidence: 'People naturally follow and serve them, recognizing their divine nature expressed through perfect human development'
  },
  {
    outcome: 'Integrated Personality',
    description: 'The holistic education created integrated personalities where spiritual wisdom, practical skills, and emotional maturity work in perfect harmony.',
    evidence: 'Their ability to handle any situation with appropriate response - whether spiritual, political, military, or personal'
  }
]

export default function ChildhoodEducationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/scriptures" className="text-gray-600 hover:text-blue-600 transition-colors">
              Scriptures
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/scriptures/ramayana" className="text-gray-600 hover:text-blue-600 transition-colors">
              Ramayana
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/scriptures/ramayana/bala-kanda" className="text-gray-600 hover:text-blue-600 transition-colors">
              Bala Kanda
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-blue-600 font-medium">Childhood & Education</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <GraduationCap className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">🎓 Divine Education</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sanskrit">
                बाल्यकाल शिक्षा
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Childhood and Early Education
              </h2>
              <p className="text-lg text-purple-100 leading-relaxed mb-8">
                {childEdu.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#education-areas"
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Education
                </Link>
                <Link
                  href="#character-development"
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Character Development
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=450&fit=crop"
                  alt="Education in Ancient Gurukula"
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
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Duration</h3>
                <p className="text-gray-700">{childEdu.timeframe}</p>
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-700">Royal Palace, Ayodhya</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Students</h3>
                <p className="text-gray-700">Four Divine Princes</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Spiritual Significance</h3>
              <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
                {childEdu.spiritualSignificance}
              </p>
            </div>
          </div>
        </section>

        {/* Educational Areas */}
        <section id="education-areas">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Education System</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The princes received education in all aspects of human knowledge and development, creating perfectly balanced personalities
            </p>
          </div>

          <div className="space-y-8">
            {educationalAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-full flex items-center justify-center mr-6`}>
                      <area.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{area.category}</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-4">Areas of Study:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {area.areas.map((subject, idx) => (
                          <div key={idx} className="flex items-center">
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-gray-700 text-sm">{subject}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={`bg-gradient-to-br ${area.color} opacity-10 rounded-lg p-6`}>
                      <h4 className="font-semibold text-gray-800 mb-3">Educational Significance:</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{area.significance}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Character Development */}
        <section id="character-development">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Individual Character Development</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Each prince developed unique strengths while maintaining shared dharmic values
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {characterDevelopment.map((prince, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative">
                  <div className="aspect-[3/2] overflow-hidden">
                    <Image
                      src={prince.image}
                      alt={prince.prince}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${prince.color} opacity-70`}></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-2xl font-bold mb-2">{prince.prince}</h3>
                      <p className="text-white/90 text-sm">{prince.qualities}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Specialization:</h4>
                    <p className="text-gray-700 text-sm">{prince.specialization}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Unique Traits:</h4>
                    <ul className="space-y-1">
                      {prince.uniqueTraits.map((trait, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-500 mr-2 text-xs mt-1">▸</span>
                          <span className="text-gray-600 text-xs">{trait}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-3">
                    <h4 className="font-semibold text-blue-800 mb-1">Teacher's Observation:</h4>
                    <p className="text-blue-700 text-xs italic">{prince.teachersNote}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Daily Routine */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Daily Educational Routine</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              A perfectly balanced daily schedule that integrated all aspects of human development
            </p>
          </div>

          <div className="space-y-4">
            {dailyRoutine.map((routine, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-1/4">
                    <h3 className="font-bold text-blue-600 text-lg">{routine.time}</h3>
                    <h4 className="font-semibold text-gray-900">{routine.activity}</h4>
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-gray-700 leading-relaxed">{routine.description}</p>
                  </div>
                  <div className="md:w-1/4">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-blue-700 text-sm font-medium">{routine.significance}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Teachers and Mentors */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Distinguished Teachers & Mentors</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The greatest sages and scholars of the age guided the princes' education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teachersAndMentors.map((teacher, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex">
                  <div className="w-24 h-24 flex-shrink-0 m-4">
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{teacher.name}</h3>
                    <p className="text-blue-600 font-semibold text-sm mb-2">{teacher.title}</p>
                    <p className="text-gray-600 text-sm mb-3">{teacher.specialization}</p>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <div className="mb-3">
                    <p className="text-gray-700 text-sm leading-relaxed">{teacher.contribution}</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <p className="text-purple-800 text-sm font-medium italic">"{teacher.teaching}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spiritual Foundations */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Spiritual Foundations of Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The underlying spiritual principles that guided their comprehensive education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {spiritualFoundations.map((foundation, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <Gem className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{foundation.principle}</h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">{foundation.description}</p>

                <div className="bg-blue-50 rounded-lg p-4 mb-4 border-l-4 border-blue-500">
                  <p className="text-sm font-semibold text-blue-800 mb-2">Example:</p>
                  <p className="text-blue-700 text-sm">{foundation.example}</p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-purple-800 mb-2">Modern Relevance:</p>
                  <p className="text-purple-700 text-sm">{foundation.modernRelevance}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Outcomes */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Educational Outcomes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The remarkable achievements and character formation resulting from their comprehensive education
            </p>
          </div>

          <div className="space-y-6">
            {learningOutcomes.map((outcome, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{outcome.outcome}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{outcome.description}</p>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-sm font-semibold text-blue-800 mb-1">Evidence:</p>
                      <p className="text-blue-700 text-sm">{outcome.evidence}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-3xl p-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">🎓 Continue the Divine Journey 🎓</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              The princes' education is complete. Next, they will face their first spiritual test with the arrival of Sage Vishwamitra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/scriptures/ramayana/bala-kanda/vishwamitra-arrival"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
              >
                Next: Vishwamitra's Arrival
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