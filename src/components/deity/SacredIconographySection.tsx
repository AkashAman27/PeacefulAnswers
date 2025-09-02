'use client'

import { useState } from 'react'
import { Eye, ChevronDown, ChevronUp } from 'lucide-react'
import { YouTubeEmbed } from '@/components/ui/YouTubeEmbed'
import Image from 'next/image'

interface IconographyItem {
  symbol: string
  meaning: string
  description: string
  image_url?: string
}

interface SacredIconographySectionProps {
  iconography: IconographyItem[]
  colorScheme: string
  videoUrl?: string
}

export function SacredIconographySection({ iconography, colorScheme, videoUrl }: SacredIconographySectionProps) {
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="mb-12 animate-fadeIn">
      <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Eye className={`w-8 h-8 bg-gradient-to-r ${colorScheme} bg-clip-text text-transparent`} />
          Sacred Iconography
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {iconography.map((item, index) => (
              <div key={index} className={`p-6 rounded-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300 ${
                expandedItems.includes(index) ? `bg-gradient-to-r ${colorScheme.replace('-600', '-50')}` : 'bg-white/40'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    {item.image_url && (
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
                        <Image
                          src={item.image_url}
                          alt={item.symbol}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 text-lg">{item.symbol}</h4>
                      <p className="text-gray-600 font-medium">{item.meaning}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleItem(index)}
                    className="p-2 hover:bg-white/30 rounded-full transition-colors"
                  >
                    {expandedItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </button>
                </div>
                
                {expandedItems.includes(index) && (
                  <div className="mt-4 pt-4 border-t border-white/30 animate-fadeIn">
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {videoUrl && (
            <div className="lg:sticky lg:top-8">
              <YouTubeEmbed 
                url={videoUrl} 
                title="Sacred Iconography Video"
                className="rounded-lg overflow-hidden shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}