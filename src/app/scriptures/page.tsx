import { Metadata } from 'next'
import {
  Book,
  BookOpen,
  Star,
  Heart,
  Users,
  Globe
} from 'lucide-react'
import ScripturesClient from '@/components/ScripturesClient'

export const metadata: Metadata = {
  title: 'Hindu Scriptures - Sacred Texts and Ancient Wisdom | PeacefulAnswers',
  description: 'Explore the vast treasury of Hindu spiritual wisdom. From ancient Vedas to beloved devotional texts, discover the scriptures that have guided seekers for millennia.',
  keywords: 'Hindu scriptures, Vedas, Upanishads, Bhagavad Gita, Ramayana, Mahabharata, Puranas, sacred texts, spiritual wisdom, Hindu philosophy, ancient texts',
  openGraph: {
    title: 'Hindu Scriptures - Sacred Texts and Ancient Wisdom | PeacefulAnswers',
    description: 'Explore the vast treasury of Hindu spiritual wisdom. From ancient Vedas to beloved devotional texts.',
    type: 'website',
  }
}

const scripturesData = [
  {
    id: 'bhagavad-gita',
    title: 'Bhagavad Gita',
    sanskrit: 'श्रीमद् भगवद्गीता',
    description: 'The timeless dialogue between Prince Arjuna and Lord Krishna on the battlefield of Kurukshetra, containing profound spiritual wisdom.',
    href: '/scriptures/bhagavad-gita',
    category: 'epics' as const,
    chapters: 18,
    verses: 700,
    difficulty: 'beginner' as const,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    readingTime: '8 hours',
    popularity: 95,
    tags: ['Krishna', 'Arjuna', 'Dharma', 'Yoga', 'Philosophy']
  },
  {
    id: 'ramayana',
    title: 'Ramayana',
    sanskrit: 'रामायण',
    description: 'The epic tale of Lord Rama, his wife Sita, and the devoted Hanuman. A story of dharma, devotion, and triumph of good over evil.',
    href: '/scriptures/ramayana',
    category: 'epics' as const,
    chapters: 7,
    verses: 24000,
    difficulty: 'beginner' as const,
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop',
    readingTime: '40 hours',
    popularity: 92,
    tags: ['Rama', 'Sita', 'Hanuman', 'Devotion', 'Epic']
  },
  {
    id: 'mahabharata',
    title: 'Mahabharata',
    sanskrit: 'महाभारत',
    description: 'The great epic of ancient India, containing the Bhagavad Gita and countless stories of dharma, duty, and the human condition.',
    href: '/scriptures/mahabharata',
    category: 'epics' as const,
    chapters: 18,
    verses: 100000,
    difficulty: 'advanced' as const,
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop',
    readingTime: '200+ hours',
    popularity: 88,
    tags: ['Kurukshetra', 'Pandavas', 'Kauravas', 'Dharma', 'War']
  },
  {
    id: 'rig-veda',
    title: 'Rig Veda',
    sanskrit: 'ऋग्वेद',
    description: 'The oldest of the four Vedas, containing hymns of praise and worship to various deities and cosmic principles.',
    href: '/scriptures/rig-veda',
    category: 'vedas' as const,
    chapters: 10,
    verses: 1028,
    difficulty: 'advanced' as const,
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=300&fit=crop',
    readingTime: '60 hours',
    popularity: 75,
    tags: ['Hymns', 'Ancient', 'Deities', 'Ritual', 'Vedic']
  },
  {
    id: 'upanishads',
    title: 'Principal Upanishads',
    sanskrit: 'उपनिषद्',
    description: 'The philosophical treatises that form the theoretical foundation of Hindu philosophy and spirituality.',
    href: '/scriptures/upanishads',
    category: 'upanishads' as const,
    chapters: 108,
    verses: 5000,
    difficulty: 'advanced' as const,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    readingTime: '80 hours',
    popularity: 82,
    tags: ['Philosophy', 'Brahman', 'Atman', 'Meditation', 'Wisdom']
  },
  {
    id: 'bhagavata-purana',
    title: 'Bhagavata Purana',
    sanskrit: 'श्रीमद्भागवत पुराण',
    description: 'Stories of Lord Krishna and other avatars of Vishnu, emphasizing devotion and the glory of the Divine.',
    href: '/scriptures/bhagavata-purana',
    category: 'puranas' as const,
    chapters: 12,
    verses: 18000,
    difficulty: 'intermediate' as const,
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop',
    readingTime: '120 hours',
    popularity: 89,
    tags: ['Krishna', 'Vishnu', 'Devotion', 'Stories', 'Puranas']
  },
  {
    id: 'vishnu-purana',
    title: 'Vishnu Purana',
    sanskrit: 'विष्णु पुराण',
    description: 'Comprehensive text about Lord Vishnu, his avatars, and the cosmic order of creation, preservation, and destruction.',
    href: '/scriptures/vishnu-purana',
    category: 'puranas' as const,
    chapters: 6,
    verses: 7000,
    difficulty: 'intermediate' as const,
    image: 'https://images.unsplash.com/photo-1612198229691-ea47c624dd5a?w=400&h=300&fit=crop',
    readingTime: '50 hours',
    popularity: 78,
    tags: ['Vishnu', 'Avatars', 'Cosmology', 'Mythology', 'Dharma']
  },
  {
    id: 'shiva-purana',
    title: 'Shiva Purana',
    sanskrit: 'शिव पुराण',
    description: 'Sacred text dedicated to Lord Shiva, containing stories of his various forms, teachings, and cosmic significance.',
    href: '/scriptures/shiva-purana',
    category: 'puranas' as const,
    chapters: 7,
    verses: 24000,
    difficulty: 'intermediate' as const,
    image: 'https://images.unsplash.com/photo-1606041011872-596597976b25?w=400&h=300&fit=crop',
    readingTime: '100 hours',
    popularity: 85,
    tags: ['Shiva', 'Meditation', 'Yoga', 'Tantra', 'Destruction']
  },
  {
    id: 'manusmriti',
    title: 'Manusmriti',
    sanskrit: 'मनुस्मृति',
    description: 'Ancient legal and ethical code attributed to Manu, dealing with dharma, social order, and righteous living.',
    href: '/scriptures/manusmriti',
    category: 'dharma' as const,
    chapters: 12,
    verses: 2685,
    difficulty: 'advanced' as const,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    readingTime: '25 hours',
    popularity: 65,
    tags: ['Law', 'Ethics', 'Society', 'Dharma', 'Ancient']
  },
  {
    id: 'yoga-sutras',
    title: 'Yoga Sutras of Patanjali',
    sanskrit: 'पतञ्जलि योग सूत्र',
    description: 'The foundational text of classical yoga philosophy, outlining the eight-limbed path to spiritual realization.',
    href: '/scriptures/yoga-sutras',
    category: 'dharma' as const,
    chapters: 4,
    verses: 195,
    difficulty: 'advanced' as const,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    readingTime: '15 hours',
    popularity: 87,
    tags: ['Yoga', 'Meditation', 'Philosophy', 'Samadhi', 'Eight-limbs']
  },
  {
    id: 'hanuman-chalisa',
    title: 'Hanuman Chalisa',
    sanskrit: 'हनुमान चालीसा',
    description: 'The beloved 40-verse hymn in praise of Lord Hanuman, composed by saint Tulsidas.',
    href: '/scriptures/hanuman-chalisa',
    category: 'bhakti' as const,
    verses: 40,
    difficulty: 'beginner' as const,
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop',
    readingTime: '1 hour',
    popularity: 93,
    tags: ['Hanuman', 'Devotion', 'Prayer', 'Tulsidas', 'Bhakti']
  },
  {
    id: 'lalita-sahasranama',
    title: 'Lalita Sahasranama',
    sanskrit: 'ललिता सहस्रनाम',
    description: 'The thousand names of Goddess Lalita, a powerful hymn celebrating the Divine Mother.',
    href: '/scriptures/lalita-sahasranama',
    category: 'bhakti' as const,
    verses: 1000,
    difficulty: 'intermediate' as const,
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop',
    readingTime: '8 hours',
    popularity: 79,
    tags: ['Goddess', 'Divine Mother', 'Names', 'Shakti', 'Worship']
  }
]

const categories = [
  { id: 'all', name: 'All Scriptures', icon: BookOpen, count: scripturesData.length },
  { id: 'vedas', name: 'Vedas', icon: Book, count: scripturesData.filter(s => s.category === 'vedas').length },
  { id: 'upanishads', name: 'Upanishads', icon: Star, count: scripturesData.filter(s => s.category === 'upanishads').length },
  { id: 'epics', name: 'Epics', icon: Users, count: scripturesData.filter(s => s.category === 'epics').length },
  { id: 'puranas', name: 'Puranas', icon: Heart, count: scripturesData.filter(s => s.category === 'puranas').length },
  { id: 'dharma', name: 'Dharma Texts', icon: Globe, count: scripturesData.filter(s => s.category === 'dharma').length },
  { id: 'bhakti', name: 'Devotional', icon: Heart, count: scripturesData.filter(s => s.category === 'bhakti').length }
]

const difficulties = [
  { id: 'all', name: 'All Levels' },
  { id: 'beginner', name: 'Beginner' },
  { id: 'intermediate', name: 'Intermediate' },
  { id: 'advanced', name: 'Advanced' }
]

export default function ScripturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 via-purple-900 to-orange-900">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-orange-100 bg-opacity-20 text-orange-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Book className="w-3 h-3 sm:w-4 sm:h-4" />
            Sacred Knowledge
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Hindu Scriptures
            <div className="text-xl sm:text-2xl md:text-3xl text-orange-300 font-normal mt-1 sm:mt-2">
              हिन्दू शास्त्र
            </div>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Explore the vast treasury of Hindu spiritual wisdom. From ancient Vedas to beloved devotional texts,
            discover the scriptures that have guided seekers for millennia.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12">
            <div className="text-center p-4 sm:p-5 md:p-6 bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100">
              <Book className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-orange-600 mx-auto mb-1 sm:mb-2" />
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900">{scripturesData.length}</div>
              <div className="text-xs sm:text-sm text-blue-700">Sacred Texts</div>
            </div>
            <div className="text-center p-4 sm:p-5 md:p-6 bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100">
              <Star className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-orange-600 mx-auto mb-1 sm:mb-2" />
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900">5000+</div>
              <div className="text-xs sm:text-sm text-blue-700">Years Old</div>
            </div>
            <div className="text-center p-4 sm:p-5 md:p-6 bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100">
              <Globe className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-orange-600 mx-auto mb-1 sm:mb-2" />
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900">100+</div>
              <div className="text-xs sm:text-sm text-blue-700">Languages</div>
            </div>
            <div className="text-center p-4 sm:p-5 md:p-6 bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100">
              <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-orange-600 mx-auto mb-1 sm:mb-2" />
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900">∞</div>
              <div className="text-xs sm:text-sm text-blue-700">Lives Transformed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Client Component */}
      <ScripturesClient
        scripturesData={scripturesData}
        categories={categories}
        difficulties={difficulties}
      />

      {/* Call to Action */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-4 sm:mb-6">
            Begin Your Spiritual Journey
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-4 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Book className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">Start with Basics</h4>
              <p className="text-blue-700 text-xs sm:text-sm">
                Begin with beginner-friendly texts like Bhagavad Gita and Hanuman Chalisa.
              </p>
            </div>
            <div className="p-4 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">Find Your Path</h4>
              <p className="text-blue-700 text-xs sm:text-sm">
                Explore different categories to discover texts that resonate with your spiritual interests.
              </p>
            </div>
            <div className="p-4 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">Practice Daily</h4>
              <p className="text-blue-700 text-xs sm:text-sm">
                Make scripture reading a daily practice to deepen your understanding and peace.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}