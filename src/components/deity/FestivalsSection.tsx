'use client'

import { Calendar, MapPin, Star, Clock } from 'lucide-react'
import YouTubeEmbed from '@/components/ui/YouTubeEmbed'

interface Festival {
  name: string
  date: string
  description: string
  significance?: string
  location?: string
  duration?: string
  rituals?: string[]
}

interface FestivalsSectionProps {
  festivals: Festival[]
  colorScheme: string
  videoUrl?: string
}

export function FestivalsSection({ festivals, colorScheme, videoUrl }: FestivalsSectionProps) {
  return (
    <section className="mb-12 animate-fadeIn">
      <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Calendar className={`w-8 h-8 bg-gradient-to-r ${colorScheme} bg-clip-text text-transparent`} />
          Festivals & Celebrations
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {festivals.map((festival, index) => (
              <div key={index} className={`group p-6 rounded-xl bg-gradient-to-br ${colorScheme.replace('-600', '-50')} border border-white/30 hover:shadow-lg transition-all duration-300`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{festival.name}</h4>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                      <Clock className="w-4 h-4" />
                      <span>{festival.date}</span>
                    </div>
                    {festival.location && (
                      <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{festival.location}</span>
                      </div>
                    )}
                    {festival.duration && (
                      <div className="text-gray-600 text-sm">
                        Duration: {festival.duration}
                      </div>
                    )}
                  </div>
                  <Star className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">{festival.description}</p>

                {festival.significance && (
                  <div className="p-4 bg-white/60 rounded-lg mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Significance</h5>
                    <p className="text-gray-700 text-sm leading-relaxed">{festival.significance}</p>
                  </div>
                )}

                {festival.rituals && festival.rituals.length > 0 && (
                  <div className="p-4 bg-white/60 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-3">Key Rituals</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {festival.rituals.map((ritual, ritualIndex) => (
                        <div key={ritualIndex} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                          <span>{ritual}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {videoUrl && (
            <div className="lg:sticky lg:top-8">
              <YouTubeEmbed 
                url={videoUrl} 
                title="Festivals & Celebrations Video"
                className="rounded-lg overflow-hidden shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}