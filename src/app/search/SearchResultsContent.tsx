'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Search, Book, Calendar, Users, Heart, Home, ArrowRight, Filter } from 'lucide-react'
import SearchComponent from '@/components/SearchComponent'

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

export default function SearchResultsContent() {
  const searchParams = useSearchParams()
  const query = searchParams?.get('q') || ''
  
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState<string>('all')
  const [hasSearched, setHasSearched] = useState(false)

  // Perform search when query changes
  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      setHasSearched(false)
      return
    }

    performSearch()
  }, [query, selectedFilter])

  const performSearch = async () => {
    setIsLoading(true)
    setHasSearched(true)
    try {
      const response = await fetch(
        `/api/search?q=${encodeURIComponent(query)}&limit=50${selectedFilter !== 'all' ? `&type=${selectedFilter}` : ''}`
      )
      const data: SearchResponse = await response.json()
      setResults(data.results || [])
    } catch (error) {
      console.error('Search error:', error)
      setResults([])
    } finally {
      setIsLoading(false)
    }
  }

  // Get icon for content type
  const getContentIcon = (contentType: string) => {
    switch (contentType) {
      case 'deity': return <Users className="w-5 h-5" />
      case 'festival': return <Calendar className="w-5 h-5" />
      case 'practice': return <Heart className="w-5 h-5" />
      case 'scripture': return <Book className="w-5 h-5" />
      case 'page': return <Home className="w-5 h-5" />
      default: return <Search className="w-5 h-5" />
    }
  }

  // Get color for content type
  const getContentColor = (contentType: string) => {
    switch (contentType) {
      case 'deity': return 'text-purple-600 bg-purple-100 border-purple-200'
      case 'festival': return 'text-green-600 bg-green-100 border-green-200'
      case 'practice': return 'text-orange-600 bg-orange-100 border-orange-200'
      case 'scripture': return 'text-blue-600 bg-blue-100 border-blue-200'
      case 'page': return 'text-gray-600 bg-gray-100 border-gray-200'
      default: return 'text-gray-600 bg-gray-100 border-gray-200'
    }
  }

  const filterOptions = [
    { value: 'all', label: 'All Results', count: results.length },
    { value: 'deity', label: 'Deities', count: results.filter(r => r.content_type === 'deity').length },
    { value: 'festival', label: 'Festivals', count: results.filter(r => r.content_type === 'festival').length },
    { value: 'practice', label: 'Practices', count: results.filter(r => r.content_type === 'practice').length },
    { value: 'scripture', label: 'Scriptures', count: results.filter(r => r.content_type === 'scripture').length },
    { value: 'page', label: 'Pages', count: results.filter(r => r.content_type === 'page').length },
  ]

  return (
    <>
      {/* Header with Search */}
      <div className="bg-white border-b border-orange-100">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Search Results</h1>
            {query && (
              <p className="text-lg text-gray-600">
                {hasSearched ? (
                  results.length > 0 ? (
                    <>Found {results.length} result{results.length !== 1 ? 's' : ''} for <span className="font-semibold text-orange-600">"{query}"</span></>
                  ) : (
                    <>No results found for <span className="font-semibold text-orange-600">"{query}"</span></>
                  )
                ) : (
                  <>Searching for <span className="font-semibold text-orange-600">"{query}"</span>...</>
                )}
              </p>
            )}
          </div>
          
          {/* New Search */}
          <div className="max-w-2xl mx-auto">
            <SearchComponent />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Filters */}
        {results.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-900">Filter by type:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedFilter(option.value)}
                  className={`px-4 py-2 rounded-full border-2 transition-all duration-200 ${
                    selectedFilter === option.value
                      ? 'bg-orange-600 text-white border-orange-600'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                  }`}
                >
                  {option.label} {option.count > 0 && `(${option.count})`}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {isLoading ? (
          <div className="space-y-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
                <div className="flex gap-2">
                  <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
                  <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        ) : results.length > 0 ? (
          <div className="space-y-6">
            {results.map((result) => (
              <Link
                key={result.id}
                href={result.url_path}
                className="group block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl border-2 ${getContentColor(result.content_type)} group-hover:scale-110 transition-transform`}>
                    {getContentIcon(result.content_type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {result.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {result.description}
                    </p>
                    
                    {/* Meta information */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${getContentColor(result.content_type)}`}>
                        {result.content_type}
                      </span>
                      {result.difficulty_level && (
                        <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {result.difficulty_level}
                        </span>
                      )}
                      {result.time_commitment && (
                        <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {result.time_commitment}
                        </span>
                      )}
                    </div>
                    
                    {/* Benefits */}
                    {result.benefits && result.benefits.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {result.benefits.slice(0, 3).map((benefit, idx) => (
                          <span key={idx} className="text-xs bg-orange-50 text-orange-700 px-2 py-1 rounded-full border border-orange-200">
                            {benefit}
                          </span>
                        ))}
                        {result.benefits.length > 3 && (
                          <span className="text-xs text-gray-500 px-2 py-1">
                            +{result.benefits.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                    
                    <div className="flex items-center text-orange-600 text-sm font-medium group-hover:text-orange-700">
                      <span>Read more</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : hasSearched ? (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl p-12 shadow-lg max-w-md mx-auto">
              <Search className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Results Found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any content matching "{query}". Try:
              </p>
              <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
                <li>• Different keywords or phrases</li>
                <li>• More general terms</li>
                <li>• Checking spelling</li>
                <li>• Searching for related concepts</li>
              </ul>
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700">Popular searches:</p>
                <div className="flex flex-wrap gap-2">
                  {['Ganesha', 'meditation', 'festivals', 'Krishna', 'yoga'].map((term) => (
                    <Link
                      key={term}
                      href={`/search?q=${term}`}
                      className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full hover:bg-orange-200 transition-colors"
                    >
                      {term}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl p-12 shadow-lg max-w-md mx-auto">
              <Search className="w-16 h-16 mx-auto mb-4 text-orange-400" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Start Your Search</h3>
              <p className="text-gray-600">
                Enter a search term above to find deities, practices, festivals, and spiritual wisdom.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}