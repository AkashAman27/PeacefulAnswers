'use client'

import { useState, useEffect, useRef } from 'react'
import { Star, Play, Search, ArrowRight } from 'lucide-react'

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const leftCardRef = useRef<HTMLDivElement>(null)
  const rightCardRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simple CSS-based animations with sequential timing
    const animateElements = () => {
      // Trust indicators
      setTimeout(() => {
        if (trustRef.current) {
          trustRef.current.classList.add('animate-fade-in-up')
        }
      }, 200)

      // Main title
      setTimeout(() => {
        if (titleRef.current) {
          titleRef.current.classList.add('animate-fade-in-up')
        }
      }, 400)

      // Subtitle
      setTimeout(() => {
        if (subtitleRef.current) {
          subtitleRef.current.classList.add('animate-fade-in-up')
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
      }, 1200)

      // Right card
      setTimeout(() => {
        if (rightCardRef.current) {
          rightCardRef.current.classList.add('animate-fade-in-right')
        }
      }, 1400)

      // Search bar
      setTimeout(() => {
        if (searchRef.current) {
          searchRef.current.classList.add('animate-fade-in-up')
        }
      }, 1600)
    }

    animateElements()
  }, [])

  return (
    <section ref={heroRef} className="relative bg-gradient-to-b from-orange-50 via-white to-blue-50 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Trust Indicators */}
        <div ref={trustRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-white shadow-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold">ॐ</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-900 border-2 border-white shadow-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold">🕉</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-red-700 border-2 border-white shadow-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold">🙏</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-green-800 border-2 border-white shadow-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold">+5K</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-sm text-blue-900 ml-2">Trusted by thousands of seekers</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1 ref={titleRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out max-w-4xl mx-auto text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-blue-900 mb-6">
            Find{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-orange-600 to-yellow-400 bg-clip-text text-transparent">
                peaceful answers
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-orange-200 to-yellow-200 opacity-30 rounded-full"></div>
            </span>{' '}
            to life's deepest questions
          </h1>
          
          <p ref={subtitleRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out max-w-2xl mx-auto text-lg sm:text-xl text-blue-800 mb-10 leading-relaxed">
            Explore the timeless wisdom of the Vedas, Upanishads, and Bhagavad Gita. 
            Discover practices, understand deities, and find guidance for modern spiritual living.
          </p>
        </div>

        {/* CTA Buttons */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="opacity-0 translate-y-8 transition-all duration-1000 ease-out group flex items-center gap-2 bg-gradient-to-r from-orange-600 to-yellow-400 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Start Your Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="opacity-0 translate-y-8 transition-all duration-1000 ease-out group flex items-center gap-2 bg-white border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50">
            <Play className="w-5 h-5" />
            Watch Introduction
          </button>
        </div>

        {/* Hero Image with Overlay Cards */}
        <div className="relative">
          <div ref={imageRef} className="opacity-0 translate-y-16 scale-95 transition-all duration-1200 ease-out relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=1200&q=80"
              alt="Ancient temple with spiritual ambiance"
              className="w-full h-[400px] sm:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
          </div>

          {/* Scripture Card - Left */}
          <div ref={leftCardRef} className="opacity-0 -translate-x-24 translate-y-12 rotate-[-5deg] transition-all duration-1000 ease-out absolute -left-4 sm:left-8 top-8 sm:top-16 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl w-[200px] sm:w-[240px] hover:rotate-0">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-600 to-yellow-400 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">📖</span>
              </div>
              <div>
                <h3 className="font-bold text-blue-900 text-sm sm:text-base">Bhagavad Gita</h3>
                <p className="text-xs text-blue-700">18 Chapters</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-blue-800 mb-3">
              Discover Krishna's timeless wisdom on duty, devotion, and liberation.
            </p>
            <div className="text-xs text-orange-600 font-medium">
              ✨ Available in 6 languages
            </div>
          </div>

          {/* Practice Card - Right */}
          <div ref={rightCardRef} className="opacity-0 translate-x-24 translate-y-12 rotate-[5deg] transition-all duration-1000 ease-out absolute -right-4 sm:right-8 top-16 sm:top-32 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl w-[180px] sm:w-[220px] hover:rotate-0">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase text-blue-700 font-semibold tracking-wider">Daily Practice</span>
              <span className="text-orange-600 text-lg">🧘‍♀️</span>
            </div>
            <h3 className="font-bold text-blue-900 text-sm sm:text-base mb-2">Morning Meditation</h3>
            <p className="text-xs text-blue-700 mb-3">Start with pranayama • 15 minutes</p>
            <div className="flex gap-1 mb-2">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-xs">🕯️</span>
              </div>
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-xs">📿</span>
              </div>
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-xs text-blue-800 font-medium">+3</span>
              </div>
            </div>
            <div className="text-xs text-green-800 font-medium">Everything you need included</div>
          </div>

          {/* Search Bar */}
          <div ref={searchRef} className="opacity-0 translate-y-8 scale-95 transition-all duration-1000 ease-out absolute left-1/2 -translate-x-1/2 -bottom-6 w-[90%] sm:w-[400px]">
            <div className="flex items-center bg-white shadow-2xl rounded-full px-6 py-4 border border-orange-100">
              <Search className="w-5 h-5 text-blue-700 mr-3" />
              <input
                type="text"
                placeholder="Search for mantras, practices, deities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 text-sm border-0 focus:ring-0 placeholder-blue-400 bg-transparent focus:outline-none"
              />
              <button className="bg-gradient-to-r from-orange-600 to-yellow-400 text-white p-2 rounded-full hover:shadow-md transition-all">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection