'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Search, ArrowRight, Book, Calendar, Users, Heart, Home } from 'lucide-react'

interface SearchResult {
  id: number
  title: string
  slug: string
  content_type: string
  description: string
  url_path: string
  difficulty_level: string
  time_commitment: string
  benefits: string[]
  tags: string[]
}

interface SearchResponse {
  results: SearchResult[]
  query: string
  total: number
}

export default function SearchComponent() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const router = useRouter()
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Debounced search
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([])
      setShowResults(false)
      return
    }

    const searchTimeout = setTimeout(async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}&limit=8`)
        const data: SearchResponse = await response.json()
        setResults(data.results || [])
        setShowResults(true)
        setSelectedIndex(-1)
      } catch (error) {
        console.error('Search error:', error)
        setResults([])
      } finally {
        setIsLoading(false)
      }
    }, 300)

    return () => clearTimeout(searchTimeout)
  }, [query])

  // Handle click outside to close results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Get icon for content type
  const getContentIcon = (contentType: string) => {
    switch (contentType) {
      case 'deity': return <Users className="w-4 h-4" />
      case 'festival': return <Calendar className="w-4 h-4" />
      case 'practice': return <Heart className="w-4 h-4" />
      case 'scripture': return <Book className="w-4 h-4" />
      case 'page': return <Home className="w-4 h-4" />
      default: return <Search className="w-4 h-4" />
    }
  }

  // Get color for content type
  const getContentColor = (contentType: string) => {
    switch (contentType) {
      case 'deity': return 'text-purple-600 bg-purple-100'
      case 'festival': return 'text-green-600 bg-green-100'
      case 'practice': return 'text-orange-600 bg-orange-100'
      case 'scripture': return 'text-blue-600 bg-blue-100'
      case 'page': return 'text-gray-600 bg-gray-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showResults) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : prev
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1)
        break
      case 'Enter':
        e.preventDefault()
        if (selectedIndex >= 0 && results[selectedIndex]) {
          navigateToResult(results[selectedIndex])
        } else if (query.trim()) {
          // Navigate to search results page
          router.push(`/search?q=${encodeURIComponent(query)}`)
          setShowResults(false)
        }
        break
      case 'Escape':
        setShowResults(false)
        inputRef.current?.blur()
        break
    }
  }

  // Navigate to selected result
  const navigateToResult = (result: SearchResult) => {
    router.push(result.url_path)
    setShowResults(false)
    setQuery('')
  }

  // Handle search submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedIndex >= 0 && results[selectedIndex]) {
      navigateToResult(results[selectedIndex])
    } else if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
      setShowResults(false)
    }
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto z-[9998]">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => query.length >= 2 && setShowResults(true)}
            placeholder="Search for mantras, practices, deities..."
            className="search-input-visible w-full pl-12 pr-12 py-4 text-lg rounded-full border-2 border-gray-200 focus:border-orange-500 focus:outline-none bg-white shadow-lg transition-all duration-300"
          />
          {isLoading && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="w-5 h-5 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      {/* Search Results Dropdown */}
      {showResults && (results.length > 0 || isLoading) && (
        <div className="search-results-overlay absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[9999] max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <>
              {results.map((result, index) => (
                <button
                  key={result.id}
                  onClick={() => navigateToResult(result)}
                  className={`w-full px-6 py-4 text-left hover:bg-orange-50 transition-colors border-b border-gray-100 last:border-b-0 ${
                    selectedIndex === index ? 'bg-orange-50' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg ${getContentColor(result.content_type)}`}>
                      {getContentIcon(result.content_type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 truncate">
                        {result.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                        {result.description}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${getContentColor(result.content_type)}`}>
                          {result.content_type}
                        </span>
                        {result.difficulty_level && (
                          <span className="text-xs text-gray-500">
                            {result.difficulty_level}
                          </span>
                        )}
                        {result.time_commitment && (
                          <span className="text-xs text-gray-500">
                            • {result.time_commitment}
                          </span>
                        )}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" />
                  </div>
                </button>
              ))}
              <div className="px-6 py-3 bg-gray-50 text-center">
                <button
                  onClick={() => {
                    router.push(`/search?q=${encodeURIComponent(query)}`)
                    setShowResults(false)
                  }}
                  className="text-sm text-orange-600 hover:text-orange-700 font-medium"
                >
                  See all results for "{query}" →
                </button>
              </div>
            </>
          ) : (
            <div className="px-6 py-8 text-center text-gray-500">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>No results found for "{query}"</p>
              <p className="text-sm mt-1">Try searching for deities, festivals, or practices</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}