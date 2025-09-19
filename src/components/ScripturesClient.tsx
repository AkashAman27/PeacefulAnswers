'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Book,
  BookOpen,
  Clock,
  Star,
  ChevronRight,
  Search,
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

interface ScripturesClientProps {
  scripturesData: Scripture[];
  categories: Array<{
    id: string;
    name: string;
    icon: any;
    count: number;
  }>;
  difficulties: Array<{
    id: string;
    name: string;
  }>;
}

export default function ScripturesClient({ scripturesData, categories, difficulties }: ScripturesClientProps) {
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
    <>
      {/* Filters and Search */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 sm:top-3 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search scriptures, deities, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
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
                    className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-orange-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">{category.name}</span>
                    <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                    <span className="hidden md:inline">({category.count})</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg text-xs sm:text-sm flex-1 sm:flex-none"
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
                className="px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg text-xs sm:text-sm flex-1 sm:flex-none"
              >
                <option value="popularity">Most Popular</option>
                <option value="title">Alphabetical</option>
                <option value="difficulty">By Difficulty</option>
              </select>
            </div>

            <div className="flex items-center justify-between sm:justify-start gap-2 sm:gap-3 w-full sm:w-auto">
              <span className="text-xs sm:text-sm text-gray-600">
                {filteredScriptures.length} found
              </span>
              <div className="flex border border-gray-300 rounded-md sm:rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 sm:p-2 ${viewMode === 'grid' ? 'bg-orange-600 text-white' : 'text-gray-600'}`}
                >
                  <Grid3X3 className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 sm:p-2 ${viewMode === 'list' ? 'bg-orange-600 text-white' : 'text-gray-600'}`}
                >
                  <List className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scriptures Grid/List */}
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {filteredScriptures.map((scripture) => (
                <Link
                  key={scripture.id}
                  href={scripture.href}
                  className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative mb-3 sm:mb-4">
                    <Image
                      src={scripture.image}
                      alt={scripture.title}
                      width={300}
                      height={200}
                      className="w-full h-36 sm:h-44 md:h-48 object-cover rounded-lg sm:rounded-xl"
                    />
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                      <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium ${getDifficultyColor(scripture.difficulty)}`}>
                        {scripture.difficulty}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-blue-900 group-hover:text-orange-600 transition-colors line-clamp-1">
                        {scripture.title}
                      </h3>
                      <div className={`text-xs sm:text-sm font-medium ${getCategoryColor(scripture.category)} line-clamp-1`}>
                        {scripture.sanskrit}
                      </div>
                    </div>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {scripture.description}
                    </p>

                    <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-500">
                      {scripture.chapters && (
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          <span className="hidden sm:inline">{scripture.chapters} chapters</span>
                          <span className="sm:hidden">{scripture.chapters}ch</span>
                        </div>
                      )}
                      {scripture.readingTime && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          <span className="truncate">{scripture.readingTime}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                        <span className="text-xs sm:text-sm font-medium text-gray-600">
                          {scripture.popularity}%
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="space-y-4 sm:space-y-6">
              {filteredScriptures.map((scripture) => (
                <Link
                  key={scripture.id}
                  href={scripture.href}
                  className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <Image
                      src={scripture.image}
                      alt={scripture.title}
                      width={200}
                      height={150}
                      className="w-full sm:w-40 md:w-48 h-32 sm:h-28 md:h-36 object-cover rounded-lg sm:rounded-xl flex-shrink-0"
                    />
                    <div className="flex-1 space-y-2 sm:space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg sm:text-xl font-bold text-blue-900 group-hover:text-orange-600 transition-colors line-clamp-1">
                            {scripture.title}
                          </h3>
                          <div className={`text-sm font-medium ${getCategoryColor(scripture.category)} mt-1 line-clamp-1`}>
                            {scripture.sanskrit}
                          </div>
                        </div>
                        <span className={`px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium ${getDifficultyColor(scripture.difficulty)} ml-2 flex-shrink-0`}>
                          {scripture.difficulty}
                        </span>
                      </div>

                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-2 sm:line-clamp-3">
                        {scripture.description}
                      </p>

                      <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-500 overflow-x-auto">
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
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {scripture.tags.slice(0, 2).map((tag, index) => (
                            <span
                              key={index}
                              className="bg-blue-50 text-blue-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}