'use client'

import { Sparkles, Layers, Info } from 'lucide-react'
import { YouTubeEmbed } from '@/components/ui/YouTubeEmbed'

interface SymbolismItem {
  aspect: string
  symbolism: string
  deeper_meaning: string
  dance_reference?: string
}

interface DivineSymbolismSectionProps {
  symbolism: SymbolismItem[]
  colorScheme: string
  videoUrl?: string
}

export function DivineSymbolismSection({ symbolism, colorScheme, videoUrl }: DivineSymbolismSectionProps) {
  return (
    <section className="mb-12 animate-fadeIn">
      <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Sparkles className={`w-8 h-8 bg-gradient-to-r ${colorScheme} bg-clip-text text-transparent`} />
          Divine Symbolism of the Dance
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {symbolism.map((item, index) => (
              <div key={index} className={`group relative overflow-hidden rounded-xl p-6 bg-gradient-to-br ${colorScheme.replace('-600', '-50')} border border-white/30 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12"></div>
                </div>
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${colorScheme.replace('-600', '-100')} shadow-lg`}>
                      <Layers className="w-5 h-5 text-gray-700" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800">{item.aspect}</h4>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-white/60 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-gray-600" />
                        Symbolism
                      </h5>
                      <p className="text-gray-700 leading-relaxed">{item.symbolism}</p>
                    </div>

                    <div className="p-4 bg-white/60 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                        <Info className="w-4 h-4 text-gray-600" />
                        Deeper Meaning
                      </h5>
                      <p className="text-gray-700 leading-relaxed">{item.deeper_meaning}</p>
                    </div>

                    {item.dance_reference && (
                      <div className={`p-4 bg-gradient-to-r ${colorScheme.replace('-600', '-100')} rounded-lg border-l-4 border-gray-600`}>
                        <h5 className="font-semibold text-gray-800 mb-2">Dance Reference</h5>
                        <p className="text-gray-700 leading-relaxed italic">{item.dance_reference}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {videoUrl && (
            <div className="lg:sticky lg:top-8">
              <YouTubeEmbed 
                url={videoUrl} 
                title="Divine Symbolism Video"
                className="rounded-lg overflow-hidden shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}