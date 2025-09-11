'use client'

import { Church, MapPin, Clock, Star, Camera } from 'lucide-react'
import YouTubeEmbed from '@/components/ui/YouTubeEmbed'
import Image from 'next/image'

interface Temple {
  name: string
  location: string
  description: string
  significance?: string
  architecture_style?: string
  best_time_to_visit?: string
  image_url?: string
  special_features?: string[]
}

interface SacredTemplesSectionProps {
  temples: Temple[]
  colorScheme: string
  videoUrl?: string
}

export function SacredTemplesSection({ temples, colorScheme, videoUrl }: SacredTemplesSectionProps) {
  return (
    <section className="mb-12 animate-fadeIn">
      <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Church className={`w-8 h-8 bg-gradient-to-r ${colorScheme} bg-clip-text text-transparent`} />
          Famous Sacred Temples
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {temples.map((temple, index) => (
              <div key={index} className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${colorScheme.replace('-600', '-50')} border border-white/30 hover:shadow-xl transition-all duration-300`}>
                {/* Temple Image */}
                {temple.image_url && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={temple.image_url}
                      alt={temple.name}
                      width={600}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{temple.name}</h4>
                      <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                        <MapPin className="w-4 h-4" />
                        <span>{temple.location}</span>
                      </div>
                    </div>
                    <Star className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">{temple.description}</p>

                  {temple.architecture_style && (
                    <div className="mb-4 p-3 bg-white/60 rounded-lg">
                      <h5 className="font-semibold text-gray-800 text-sm mb-1">Architecture Style</h5>
                      <p className="text-gray-700 text-sm">{temple.architecture_style}</p>
                    </div>
                  )}

                  {temple.best_time_to_visit && (
                    <div className="mb-4 p-3 bg-white/60 rounded-lg">
                      <h5 className="font-semibold text-gray-800 text-sm mb-1 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Best Time to Visit
                      </h5>
                      <p className="text-gray-700 text-sm">{temple.best_time_to_visit}</p>
                    </div>
                  )}

                  {temple.special_features && temple.special_features.length > 0 && (
                    <div className="mb-4 p-3 bg-white/60 rounded-lg">
                      <h5 className="font-semibold text-gray-800 text-sm mb-2">Special Features</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                        {temple.special_features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {temple.significance && (
                    <div className="p-3 bg-white/60 rounded-lg">
                      <h5 className="font-semibold text-gray-800 text-sm mb-1">Significance</h5>
                      <p className="text-gray-700 text-sm leading-relaxed">{temple.significance}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {videoUrl && (
            <div className="lg:sticky lg:top-8">
              <YouTubeEmbed 
                url={videoUrl} 
                title="Sacred Temples Video"
                className="rounded-lg overflow-hidden shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}