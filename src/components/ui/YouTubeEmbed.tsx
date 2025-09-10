'use client'

import { useState } from 'react'
import { Play, ExternalLink } from 'lucide-react'

interface YouTubeEmbedProps {
  url?: string
  videoId?: string
  title?: string
  className?: string
}

function YouTubeEmbed({ url, videoId: providedVideoId, title = 'Video', className = '' }: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  
  // Extract video ID from YouTube URL
  const getVideoId = (url: string) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    const match = url.match(regex)
    return match ? match[1] : null
  }

  const videoId = providedVideoId || (url ? getVideoId(url) : null)
  const videoUrl = url || (videoId ? `https://www.youtube.com/watch?v=${videoId}` : null)
  
  if (!videoId) {
    return (
      <div className={`bg-gray-200 rounded-lg p-8 text-center ${className}`}>
        <p className="text-gray-600">Invalid YouTube URL or Video ID</p>
      </div>
    )
  }

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`

  const loadVideo = () => {
    setIsLoaded(true)
  }

  const openInNewTab = () => {
    window.open(videoUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className={`relative aspect-video bg-black rounded-lg overflow-hidden group ${className}`}>
      {!isLoaded ? (
        <div 
          className="relative w-full h-full cursor-pointer"
          onClick={loadVideo}
        >
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
            <div className="bg-red-600 hover:bg-red-700 rounded-full p-4 transition-colors shadow-lg">
              <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
            </div>
          </div>
          <div className="absolute top-4 right-4">
            <button
              onClick={(e) => {
                e.stopPropagation()
                openInNewTab()
              }}
              className="bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              title="Open in YouTube"
            >
              <ExternalLink className="w-4 h-4 text-white" />
            </button>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-black/70 rounded px-3 py-2">
              <p className="text-white text-sm font-medium truncate">{title}</p>
            </div>
          </div>
        </div>
      ) : (
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  )
}

export default YouTubeEmbed