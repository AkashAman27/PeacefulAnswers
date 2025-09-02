'use client'

import { useState } from 'react'
import { Heart, Volume2, Copy, Check, Play, Pause } from 'lucide-react'
import { YouTubeEmbed } from '@/components/ui/YouTubeEmbed'

interface Mantra {
  sanskrit: string
  transliteration: string
  meaning?: string
  purpose?: string
  benefits?: string[]
  audio_url?: string
}

interface SacredMantrasSectionProps {
  mantras: Mantra[]
  colorScheme: string
  videoUrl?: string
}

export function SacredMantrasSection({ mantras, colorScheme, videoUrl }: SacredMantrasSectionProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [playingAudio, setPlayingAudio] = useState<number | null>(null)

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const toggleAudio = (index: number, audioUrl: string) => {
    if (playingAudio === index) {
      setPlayingAudio(null)
      // Stop audio logic here
    } else {
      setPlayingAudio(index)
      // Play audio logic here
    }
  }

  return (
    <section className="mb-12 animate-fadeIn">
      <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Heart className={`w-8 h-8 bg-gradient-to-r ${colorScheme} bg-clip-text text-transparent`} />
          Sacred Mantras & Prayers
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {mantras.map((mantra, index) => (
              <div key={index} className={`group relative overflow-hidden rounded-xl p-6 bg-gradient-to-br ${colorScheme.replace('-600', '-50')} border border-white/30 hover:shadow-lg transition-all duration-300`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="text-8xl font-hindi text-center pt-8 transform rotate-12">ॐ</div>
                </div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-gray-800">
                      {mantra.meaning ? `Mantra ${index + 1}` : 'Sacred Mantra'}
                    </h4>
                    <div className="flex items-center gap-2">
                      {mantra.audio_url && (
                        <button
                          onClick={() => toggleAudio(index, mantra.audio_url!)}
                          className="p-2 hover:bg-white/30 rounded-full transition-colors"
                          title="Play/Pause Audio"
                        >
                          {playingAudio === index ? (
                            <Pause className="w-5 h-5 text-gray-600" />
                          ) : (
                            <Play className="w-5 h-5 text-gray-600" />
                          )}
                        </button>
                      )}
                      <button
                        onClick={() => copyToClipboard(mantra.sanskrit, index)}
                        className="p-2 hover:bg-white/30 rounded-full transition-colors"
                        title="Copy Sanskrit Text"
                      >
                        {copiedIndex === index ? (
                          <Check className="w-5 h-5 text-green-600" />
                        ) : (
                          <Copy className="w-5 h-5 text-gray-600" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Sanskrit Text */}
                  <div className="p-4 bg-white/70 rounded-lg mb-4">
                    <p className="text-xl text-gray-800 font-medium font-hindi leading-relaxed text-center">
                      {mantra.sanskrit}
                    </p>
                  </div>

                  {/* Transliteration */}
                  <div className="p-4 bg-white/60 rounded-lg mb-4">
                    <h5 className="font-semibold text-gray-800 text-sm mb-2 flex items-center gap-2">
                      <Volume2 className="w-4 h-4" />
                      Transliteration
                    </h5>
                    <p className="text-gray-700 italic text-center leading-relaxed">
                      "{mantra.transliteration}"
                    </p>
                  </div>

                  {/* Meaning */}
                  {mantra.meaning && (
                    <div className="p-4 bg-white/60 rounded-lg mb-4">
                      <h5 className="font-semibold text-gray-800 text-sm mb-2">Meaning</h5>
                      <p className="text-gray-700 text-sm leading-relaxed">{mantra.meaning}</p>
                    </div>
                  )}

                  {/* Purpose */}
                  {mantra.purpose && (
                    <div className="p-4 bg-white/60 rounded-lg mb-4">
                      <h5 className="font-semibold text-gray-800 text-sm mb-2">Purpose</h5>
                      <p className="text-gray-700 text-sm leading-relaxed">{mantra.purpose}</p>
                    </div>
                  )}

                  {/* Benefits */}
                  {mantra.benefits && mantra.benefits.length > 0 && (
                    <div className="p-4 bg-white/60 rounded-lg">
                      <h5 className="font-semibold text-gray-800 text-sm mb-3">Benefits</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {mantra.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start gap-2 text-sm text-gray-700">
                            <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
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
                title="Sacred Mantras Video"
                className="rounded-lg overflow-hidden shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}