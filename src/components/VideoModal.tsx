'use client'

import { X } from 'lucide-react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoId?: string // YouTube video ID
  videoUrl?: string // Direct video URL (mp4, webm, etc.)
  videoType?: 'youtube' | 'direct' // Type of video
}

const VideoModal = ({
  isOpen,
  onClose,
  videoId = "dQw4w9WgXcQ",
  videoUrl,
  videoType = 'youtube'
}: VideoModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-blue-900">Welcome to PeacefulAnswers</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          <div className="aspect-video w-full">
            {videoType === 'youtube' ? (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="PeacefulAnswers Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            ) : (
              <video
                width="100%"
                height="100%"
                controls
                autoPlay
                className="rounded-lg"
                poster="/api/placeholder/800/450" // Optional: Add a poster image
              >
                <source src={videoUrl} type="video/mp4" />
                <source src={videoUrl} type="video/webm" />
                <source src={videoUrl} type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>

          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Learn about our mission to share timeless wisdom and spiritual guidance
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoModal