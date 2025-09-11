'use client'

import { useState } from 'react'
import { Drama, Clock, Star } from 'lucide-react'
import YouTubeEmbed from '@/components/ui/YouTubeEmbed'

interface StoryItem {
  title: string
  story: string
  moral?: string
  characters?: string[]
  significance: string
}

interface SacredStoriesSectionProps {
  stories: StoryItem[]
  colorScheme: string
  videoUrl?: string
}

export function SacredStoriesSection({ stories, colorScheme, videoUrl }: SacredStoriesSectionProps) {
  const [selectedStory, setSelectedStory] = useState(0)

  return (
    <section className="mb-12 animate-fadeIn">
      <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Drama className={`w-8 h-8 bg-gradient-to-r ${colorScheme} bg-clip-text text-transparent`} />
          Sacred Stories
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            {/* Story Navigation */}
            <div className="flex flex-wrap gap-2 mb-6">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedStory(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedStory === index
                      ? `bg-gradient-to-r ${colorScheme} text-white shadow-lg`
                      : 'bg-white/50 text-gray-700 hover:bg-white/70'
                  }`}
                >
                  Story {index + 1}
                </button>
              ))}
            </div>

            {/* Selected Story Content */}
            <div className="space-y-6">
              <div className={`p-6 rounded-lg bg-gradient-to-r ${colorScheme.replace('-600', '-50')} border border-white/30`}>
                <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5 text-gray-600" />
                  {stories[selectedStory].title}
                </h4>
                
                <div className="prose text-gray-700 leading-relaxed">
                  {stories[selectedStory].story.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-3">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {stories[selectedStory].characters && (
                  <div className="mt-4 pt-4 border-t border-white/30">
                    <h5 className="font-semibold text-gray-800 mb-2">Characters:</h5>
                    <div className="flex flex-wrap gap-2">
                      {stories[selectedStory].characters!.map((character, index) => (
                        <span key={index} className="px-3 py-1 bg-white/50 rounded-full text-sm text-gray-700">
                          {character}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {stories[selectedStory].moral && (
                  <div className="mt-4 pt-4 border-t border-white/30">
                    <h5 className="font-semibold text-gray-800 mb-2">Moral Teaching:</h5>
                    <p className="text-gray-700 italic">{stories[selectedStory].moral}</p>
                  </div>
                )}

                <div className="mt-4 pt-4 border-t border-white/30">
                  <h5 className="font-semibold text-gray-800 mb-2">Significance:</h5>
                  <p className="text-gray-700">{stories[selectedStory].significance}</p>
                </div>
              </div>
            </div>
          </div>
          
          {videoUrl && (
            <div className="lg:sticky lg:top-8">
              <YouTubeEmbed 
                url={videoUrl} 
                title="Sacred Stories Video"
                className="rounded-lg overflow-hidden shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}