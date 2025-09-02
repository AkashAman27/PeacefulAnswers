'use client'

import { Info, Hash, CheckCircle, Star, Lightbulb } from 'lucide-react'

interface Fact {
  category: string
  fact: string
  importance?: 'high' | 'medium' | 'low'
  source?: string
}

interface EssentialFactsSectionProps {
  facts: Fact[]
  colorScheme: string
}

export function EssentialFactsSection({ facts, colorScheme }: EssentialFactsSectionProps) {
  const getCategoryIcon = (category: string) => {
    const categoryLower = category.toLowerCase()
    if (categoryLower.includes('birth') || categoryLower.includes('origin')) return Star
    if (categoryLower.includes('attribute') || categoryLower.includes('power')) return CheckCircle
    if (categoryLower.includes('symbol') || categoryLower.includes('representation')) return Hash
    return Lightbulb
  }

  const getImportanceColor = (importance?: string) => {
    switch (importance) {
      case 'high': return 'border-red-300 bg-red-50'
      case 'medium': return 'border-yellow-300 bg-yellow-50'
      case 'low': return 'border-green-300 bg-green-50'
      default: return 'border-gray-300 bg-gray-50'
    }
  }

  const getImportanceBadge = (importance?: string) => {
    switch (importance) {
      case 'high': return { label: 'Essential', color: 'bg-red-100 text-red-800' }
      case 'medium': return { label: 'Important', color: 'bg-yellow-100 text-yellow-800' }
      case 'low': return { label: 'Good to Know', color: 'bg-green-100 text-green-800' }
      default: return null
    }
  }

  // Group facts by category
  const groupedFacts = facts.reduce((acc, fact) => {
    if (!acc[fact.category]) {
      acc[fact.category] = []
    }
    acc[fact.category].push(fact)
    return acc
  }, {} as Record<string, Fact[]>)

  return (
    <section className="mb-12 animate-fadeIn">
      <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Info className={`w-8 h-8 bg-gradient-to-r ${colorScheme} bg-clip-text text-transparent`} />
          Essential Facts
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(groupedFacts).map(([category, categoryFacts], categoryIndex) => {
            const CategoryIcon = getCategoryIcon(category)
            return (
              <div key={categoryIndex} className={`p-6 rounded-xl bg-gradient-to-br ${colorScheme.replace('-600', '-50')} border border-white/30`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${colorScheme.replace('-600', '-100')} shadow-lg`}>
                    <CategoryIcon className="w-5 h-5 text-gray-700" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">{category}</h4>
                </div>

                <div className="space-y-4">
                  {categoryFacts.map((fact, factIndex) => {
                    const importanceBadge = getImportanceBadge(fact.importance)
                    return (
                      <div
                        key={factIndex}
                        className={`p-4 rounded-lg border-l-4 ${getImportanceColor(fact.importance)} hover:shadow-md transition-shadow duration-200`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <p className="text-gray-800 leading-relaxed">{fact.fact}</p>
                          </div>
                          {importanceBadge && (
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ml-3 flex-shrink-0 ${importanceBadge.color}`}>
                              {importanceBadge.label}
                            </span>
                          )}
                        </div>
                        
                        {fact.source && (
                          <p className="text-xs text-gray-500 italic mt-2 border-t pt-2">
                            Source: {fact.source}
                          </p>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Summary Stats */}
        <div className="mt-8 pt-6 border-t border-white/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <div className="text-2xl font-bold text-gray-800">{facts.length}</div>
              <div className="text-sm text-gray-600">Total Facts</div>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <div className="text-2xl font-bold text-gray-800">{Object.keys(groupedFacts).length}</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <div className="text-2xl font-bold text-gray-800">{facts.filter(f => f.importance === 'high').length}</div>
              <div className="text-sm text-gray-600">Essential</div>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <div className="text-2xl font-bold text-gray-800">{facts.filter(f => f.source).length}</div>
              <div className="text-sm text-gray-600">Sourced</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}