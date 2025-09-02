'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Book, 
  BookOpen, 
  Calendar, 
  Clock, 
  Star, 
  ChevronRight, 
  Search,
  Filter,
  Grid3X3,
  List,
  Heart,
  Users,
  Globe
} from 'lucide-react'

interface Scripture {
  id: string;
  title: string;
  sanskrit: string;
  description: string;
  href: string;
  category: 'vedas' | 'upanishads' | 'puranas' | 'epics' | 'dharma' | 'bhakti';
  chapters?: number;
  verses?: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  image: string;
  readingTime?: string;
  popularity: number;
  tags: string[];
}

const scripturesData: Scripture[] = [
  {
    id: 'bhagavad-gita',
    title: 'Bhagavad Gita',
    sanskrit: 'श्रीमद् भगवद्गीता',
    description: 'The timeless dialogue between Prince Arjuna and Lord Krishna on the battlefield of Kurukshetra, containing profound spiritual wisdom.',
    href: '/scriptures/bhagavad-gita',
    category: 'epics',
    chapters: 18,
    verses: 700,
    difficulty: 'beginner',
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
    category: 'epics',
    chapters: 7,
    verses: 24000,
    difficulty: 'beginner',
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
    category: 'epics',
    chapters: 18,
    verses: 100000,
    difficulty: 'advanced',
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
    category: 'vedas',
    chapters: 10,
    verses: 1028,
    difficulty: 'advanced',
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
    category: 'upanishads',
    chapters: 108,
    verses: 5000,
    difficulty: 'advanced',
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
    category: 'puranas',
    chapters: 12,
    verses: 18000,
    difficulty: 'intermediate',
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
    category: 'puranas',
    chapters: 6,
    verses: 7000,
    difficulty: 'intermediate',
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
    category: 'puranas',
    chapters: 7,
    verses: 24000,
    difficulty: 'intermediate',
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
    category: 'dharma',
    chapters: 12,
    verses: 2685,
    difficulty: 'advanced',
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
    category: 'dharma',
    chapters: 4,
    verses: 195,
    difficulty: 'advanced',
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
    category: 'bhakti',
    verses: 40,
    difficulty: 'beginner',
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
    category: 'bhakti',
    verses: 1000,
    difficulty: 'intermediate',
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
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState<'popularity' | 'title' | 'difficulty'>('popularity')

  const filteredScriptures = scripturesData
    .filter(scripture => {
      const matchesCategory = selectedCategory === 'all' || scripture.category === selectedCategory
      const matchesDifficulty = selectedDifficulty === 'all' || scripture.difficulty === selectedDifficulty
      const matchesSearch = searchTerm === '' || 
        scripture.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scripture.sanskrit.includes(searchTerm) ||
        scripture.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      return matchesCategory && matchesDifficulty && matchesSearch
    })
    .sort((a, b) => {
      if (sortBy === 'popularity') return b.popularity - a.popularity
      if (sortBy === 'title') return a.title.localeCompare(b.title)
      if (sortBy === 'difficulty') {
        const order = { beginner: 1, intermediate: 2, advanced: 3 }
        return order[a.difficulty] - order[b.difficulty]
      }
      return 0
    })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800'
      case 'intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'vedas': return 'text-purple-600'
      case 'upanishads': return 'text-blue-600'
      case 'epics': return 'text-orange-600'
      case 'puranas': return 'text-green-600'
      case 'dharma': return 'text-indigo-600'
      case 'bhakti': return 'text-pink-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 via-purple-900 to-orange-900">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-orange-100 bg-opacity-20 text-orange-200 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Book className="w-4 h-4" />
            Sacred Knowledge
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hindu Scriptures
            <div className="text-2xl md:text-3xl text-orange-300 font-normal mt-2">
              हिन्दू शास्त्र
            </div>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Explore the vast treasury of Hindu spiritual wisdom. From ancient Vedas to beloved devotional texts, 
            discover the scriptures that have guided seekers for millennia.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <Book className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-900">{scripturesData.length}</div>
              <div className="text-sm text-blue-700">Sacred Texts</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <Star className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-900">5000+</div>
              <div className="text-sm text-blue-700">Years Old</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <Globe className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-900">100+</div>
              <div className="text-sm text-blue-700">Languages</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-900">∞</div>
              <div className="text-sm text-blue-700">Lives Transformed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search scriptures, deities, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map(category => {
                const IconComponent = category.icon
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-orange-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {category.name} ({category.count})
                  </button>
                )
              })}
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty.id} value={difficulty.id}>
                    {difficulty.name}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
              >
                <option value="popularity">Most Popular</option>
                <option value="title">Alphabetical</option>
                <option value="difficulty">By Difficulty</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">
                {filteredScriptures.length} scriptures found
              </span>
              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-orange-600 text-white' : 'text-gray-600'}`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-orange-600 text-white' : 'text-gray-600'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scriptures Grid/List */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredScriptures.map((scripture) => (
                <Link
                  key={scripture.id}
                  href={scripture.href}
                  className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative mb-4">
                    <Image
                      src={scripture.image}
                      alt={scripture.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                    <div className="absolute top-3 right-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(scripture.difficulty)}`}>
                        {scripture.difficulty}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg font-bold text-blue-900 group-hover:text-orange-600 transition-colors">
                        {scripture.title}
                      </h3>
                      <div className={`text-sm font-medium ${getCategoryColor(scripture.category)}`}>
                        {scripture.sanskrit}
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {scripture.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      {scripture.chapters && (
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          {scripture.chapters} chapters
                        </div>
                      )}
                      {scripture.readingTime && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {scripture.readingTime}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium text-gray-600">
                          {scripture.popularity}%
                        </span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-orange-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredScriptures.map((scripture) => (
                <Link
                  key={scripture.id}
                  href={scripture.href}
                  className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300"
                >
                  <div className="flex gap-6">
                    <Image
                      src={scripture.image}
                      alt={scripture.title}
                      width={200}
                      height={150}
                      className="w-48 h-36 object-cover rounded-xl flex-shrink-0"
                    />
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-blue-900 group-hover:text-orange-600 transition-colors">
                            {scripture.title}
                          </h3>
                          <div className={`text-sm font-medium ${getCategoryColor(scripture.category)} mt-1`}>
                            {scripture.sanskrit}
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(scripture.difficulty)}`}>
                          {scripture.difficulty}
                        </span>
                      </div>

                      <p className="text-gray-600 leading-relaxed">
                        {scripture.description}
                      </p>

                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        {scripture.chapters && (
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            {scripture.chapters} chapters
                          </div>
                        )}
                        {scripture.verses && (
                          <div className="flex items-center gap-2">
                            <Book className="w-4 h-4" />
                            {scripture.verses.toLocaleString()} verses
                          </div>
                        )}
                        {scripture.readingTime && (
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {scripture.readingTime}
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          {scripture.popularity}% popularity
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {scripture.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <ChevronRight className="w-5 h-5 text-orange-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
            Begin Your Spiritual Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Book className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-blue-900 mb-2">Start with Basics</h4>
              <p className="text-blue-700 text-sm">
                Begin with beginner-friendly texts like Bhagavad Gita and Hanuman Chalisa.
              </p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold text-blue-900 mb-2">Find Your Path</h4>
              <p className="text-blue-700 text-sm">
                Explore different categories to discover texts that resonate with your spiritual interests.
              </p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-blue-900 mb-2">Practice Daily</h4>
              <p className="text-blue-700 text-sm">
                Make scripture reading a daily practice to deepen your understanding and peace.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}