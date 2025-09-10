import { Metadata } from 'next'
import { Suspense } from 'react'
import SearchResultsContent from './SearchResultsContent'

export const metadata: Metadata = {
  title: 'Search Results - PeacefulAnswers',
  description: 'Search results for Hindu spiritual content, deities, practices, festivals, and wisdom.',
  robots: 'noindex', // Don't index search result pages
}

export default function SearchResultsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50">
      <Suspense fallback={
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="space-y-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg p-6">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }>
        <SearchResultsContent />
      </Suspense>
    </div>
  )
}