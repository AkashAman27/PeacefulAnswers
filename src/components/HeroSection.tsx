'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Play, ArrowRight } from 'lucide-react'
import SearchComponent from './SearchComponent'
import VideoModal from './VideoModal'

const HeroSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const leftCardRef = useRef<HTMLDivElement>(null)
  const rightCardRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simple CSS-based animations with sequential timing
    const animateElements = () => {
      // Main title
      setTimeout(() => {
        if (titleRef.current) {
          titleRef.current.classList.add('animate-fade-in-up')
        }
      }, 200)

      // Subtitle
      setTimeout(() => {
        if (subtitleRef.current) {
          subtitleRef.current.classList.add('animate-fade-in-up')
        }
      }, 400)

      // Search bar (appears after subtitle)
      setTimeout(() => {
        if (searchRef.current) {
          searchRef.current.classList.add('animate-fade-in-up')
        }
      }, 600)

      // Buttons
      setTimeout(() => {
        if (buttonsRef.current) {
          const buttons = buttonsRef.current.children
          Array.from(buttons).forEach((button, index) => {
            setTimeout(() => {
              button.classList.add('animate-fade-in-up')
            }, index * 100)
          })
        }
      }, 800)

      // Hero image
      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.classList.add('animate-fade-in-up')
        }
      }, 1000)

      // Left card
      setTimeout(() => {
        if (leftCardRef.current) {
          leftCardRef.current.classList.add('animate-fade-in-left')
        }
      }, 1000)

      // Right card
      setTimeout(() => {
        if (rightCardRef.current) {
          rightCardRef.current.classList.add('animate-fade-in-right')
        }
      }, 1200)
    }

    animateElements()
  }, [])

  return (
    <section ref={heroRef} className="relative bg-gradient-to-b from-orange-50 via-white to-blue-50 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 md:py-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-2 sm:mb-3">
          <h1 ref={titleRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out max-w-4xl mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-blue-900 mb-2 sm:mb-3">
            Find{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-orange-600 to-yellow-400 bg-clip-text text-transparent">
                peaceful answers
              </span>
              <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-2 sm:h-3 bg-gradient-to-r from-orange-200 to-yellow-200 opacity-30 rounded-full"></div>
            </span>{' '}
            to life's deepest questions
          </h1>

          <p ref={subtitleRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-blue-800 mb-3 sm:mb-4 leading-relaxed px-4 sm:px-0">
            Explore the timeless wisdom of the Vedas, Upanishads, and Bhagavad Gita.
            Discover practices, understand deities, and find guidance for modern spiritual living.
          </p>
        </div>

        {/* Search Bar - Prominent Position */}
        <div ref={searchRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out max-w-2xl mx-auto mb-3 sm:mb-4 px-4 sm:px-0 relative z-50">
          <SearchComponent />
        </div>

        {/* CTA Buttons */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-4 sm:mb-6 md:mb-8 relative z-10">
          <Link href="/journey" className="opacity-0 translate-y-8 transition-all duration-1000 ease-out group flex items-center gap-2 bg-gradient-to-r from-orange-600 to-yellow-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg w-full sm:w-auto justify-center">
            Start Your Journey
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>

          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="opacity-0 translate-y-8 transition-all duration-1000 ease-out group flex items-center gap-2 bg-white border-2 border-blue-900 text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-50 w-full sm:w-auto justify-center"
          >
            <Play className="w-4 h-4 sm:w-5 sm:h-5" />
            Watch Introduction
          </button>
        </div>

        {/* Hero Image with Overlay Cards */}
        <div className="relative">
          <div ref={imageRef} className="opacity-0 translate-y-16 scale-95 transition-all duration-1200 ease-out relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl">
            <img
              src="https://wxprzwoylqjzozhezttc.supabase.co/storage/v1/object/public/website_images/hero-section.png"
              alt="Spiritual journey - Finding peaceful answers through ancient wisdom"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
          </div>

          {/* Scripture Card - Left */}
          <div ref={leftCardRef} className="opacity-0 -translate-x-24 translate-y-12 rotate-[-5deg] transition-all duration-1000 ease-out absolute left-2 sm:-left-4 md:left-8 top-4 sm:top-8 md:top-16 bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 shadow-xl w-[140px] sm:w-[200px] md:w-[240px] hover:rotate-0 hidden sm:block">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-600 to-yellow-400 rounded-lg sm:rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm">📖</span>
              </div>
              <div>
                <h3 className="font-bold text-blue-900 text-xs sm:text-sm md:text-base">Bhagavad Gita</h3>
                <p className="text-[10px] sm:text-xs text-blue-700">18 Chapters</p>
              </div>
            </div>
            <p className="text-[10px] sm:text-xs md:text-sm text-blue-800 mb-2 sm:mb-3 line-clamp-2">
              Discover Krishna's timeless wisdom on duty, devotion, and liberation.
            </p>
            <div className="text-[10px] sm:text-xs text-orange-600 font-medium">
              ✨ Available in 6 languages
            </div>
          </div>

          {/* Practice Card - Right */}
          <div ref={rightCardRef} className="opacity-0 translate-x-24 translate-y-12 rotate-[5deg] transition-all duration-1000 ease-out absolute right-2 sm:-right-4 md:right-8 top-8 sm:top-16 md:top-32 bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 shadow-xl w-[120px] sm:w-[180px] md:w-[220px] hover:rotate-0 hidden sm:block">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <span className="text-[10px] sm:text-xs uppercase text-blue-700 font-semibold tracking-wider">Daily Practice</span>
              <span className="text-orange-600 text-sm sm:text-lg">🧘‍♀️</span>
            </div>
            <h3 className="font-bold text-blue-900 text-xs sm:text-sm md:text-base mb-1 sm:mb-2">Morning Meditation</h3>
            <p className="text-[10px] sm:text-xs text-blue-700 mb-2 sm:mb-3">Start with pranayama • 15 min</p>
            <div className="flex gap-1 mb-1 sm:mb-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 rounded-md sm:rounded-lg flex items-center justify-center">
                <span className="text-[10px] sm:text-xs">🕯️</span>
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-md sm:rounded-lg flex items-center justify-center">
                <span className="text-[10px] sm:text-xs">📿</span>
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-md sm:rounded-lg flex items-center justify-center">
                <span className="text-[10px] sm:text-xs text-blue-800 font-medium">+3</span>
              </div>
            </div>
            <div className="text-[10px] sm:text-xs text-green-800 font-medium">All included</div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        // Option 1: YouTube Video
        videoType="youtube"
        videoId="dQw4w9WgXcQ" // Replace with your actual YouTube video ID

        // Option 2: Your own video file (uncomment and use instead)
        // videoType="direct"
        // videoUrl="/videos/introduction.mp4" // Path to your video file
      />
    </section>
  )
}

export default HeroSection