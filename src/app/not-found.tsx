'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Home, Search, BookOpen, Heart } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const messageRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const mandalaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const title = titleRef.current
    const message = messageRef.current
    const buttons = buttonsRef.current
    const mandala = mandalaRef.current

    if (!container || !title || !message || !buttons || !mandala) return

    // Create entrance animation timeline
    const tl = gsap.timeline()

    // Animate mandala first
    tl.fromTo(mandala, 
      { 
        opacity: 0, 
        scale: 0.5, 
        rotation: -45 
      }, 
      { 
        opacity: 1, 
        scale: 1, 
        rotation: 0,
        duration: 1.2, 
        ease: 'back.out(1.7)' 
      }
    )

    // Animate title
    tl.fromTo(title, 
      { 
        opacity: 0, 
        y: 50,
        scale: 0.9
      }, 
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 0.8, 
        ease: 'power3.out' 
      }, 
      '-=0.6'
    )

    // Animate message
    tl.fromTo(message, 
      { 
        opacity: 0, 
        y: 30 
      }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        ease: 'power2.out' 
      }, 
      '-=0.4'
    )

    // Animate buttons
    const buttonElements = buttons.children
    tl.fromTo(buttonElements, 
      { 
        opacity: 0, 
        y: 20,
        scale: 0.9
      }, 
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 0.5, 
        stagger: 0.1,
        ease: 'back.out(1.7)' 
      }, 
      '-=0.2'
    )

    // Continuous floating animation for mandala
    gsap.to(mandala, {
      y: -15,
      rotation: 15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    })

    // Subtle breathing effect for the entire container
    gsap.to(container, {
      scale: 1.02,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    })

  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 flex items-center justify-center px-4 py-8">
      <div ref={containerRef} className="max-w-2xl mx-auto text-center">
        
        {/* Spiritual Mandala/Symbol */}
        <div ref={mandalaRef} className="relative mb-12 mx-auto w-32 h-32 flex items-center justify-center">
          {/* Outer circle with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-pink-300 rounded-full opacity-30 blur-lg"></div>
          
          {/* Main circle */}
          <div className="relative w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl">
            {/* OM symbol */}
            <span className="text-4xl font-bold text-white drop-shadow-lg">ॐ</span>
          </div>
          
          {/* Decorative petals */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                style={{
                  transform: `rotate(${i * 45}deg) translateY(-40px)`,
                  transformOrigin: '50% 40px'
                }}
              />
            ))}
          </div>
        </div>

        {/* 404 Title */}
        <div ref={titleRef} className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
            Page Not Found
          </h2>
          <div className="text-lg text-orange-600 font-semibold">
            मार्गं न प्राप्तम् | Path Not Found
          </div>
        </div>

        {/* Spiritual Message */}
        <div ref={messageRef} className="mb-12 p-8 bg-white/70 backdrop-blur-sm rounded-3xl border border-orange-200 shadow-lg">
          <div className="space-y-4">
            <p className="text-xl text-gray-700 leading-relaxed">
              Just as in our spiritual journey, sometimes we take wrong turns that lead us to unexpected places.
            </p>
            <p className="text-lg text-blue-800 font-medium italic">
              "न हि कल्याणकृत्कश्चिद्दुर्गतिं तात गच्छति"
            </p>
            <p className="text-gray-600">
              <em>"No one who does good work will ever come to a bad end"</em> - Bhagavad Gita 6.40
            </p>
            <p className="text-gray-700">
              This detour is part of your journey. Let us guide you back to the path of wisdom and peace.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div ref={buttonsRef} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Home Button */}
            <Link href="/" className="group">
              <button className="flex items-center gap-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-full px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <Home className="w-5 h-5" />
                <span>Return to Sacred Home</span>
              </button>
            </Link>

            {/* Search Button */}
            <Link href="/" className="group">
              <button 
                className="flex items-center gap-3 bg-white text-orange-600 font-bold rounded-full px-8 py-4 shadow-lg border-2 border-orange-600 hover:bg-orange-600 hover:text-white transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => {
                  // Focus on search when returning to homepage
                  setTimeout(() => {
                    const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement
                    if (searchInput) searchInput.focus()
                  }, 500)
                }}
              >
                <Search className="w-5 h-5" />
                <span>Search Wisdom</span>
              </button>
            </Link>
          </div>

          {/* Quick Navigation Links */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Link href="/scriptures" className="group p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-200 hover:border-blue-400 hover:bg-white/80 transition-all duration-300">
              <BookOpen className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <span className="text-sm font-semibold text-blue-800">Scriptures</span>
            </Link>
            
            <Link href="/practices" className="group p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-green-200 hover:border-green-400 hover:bg-white/80 transition-all duration-300">
              <Heart className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <span className="text-sm font-semibold text-green-800">Practices</span>
            </Link>
            
            <Link href="/deities" className="group p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-purple-200 hover:border-purple-400 hover:bg-white/80 transition-all duration-300">
              <div className="text-2xl mx-auto mb-2">🕉️</div>
              <span className="text-sm font-semibold text-purple-800">Deities</span>
            </Link>
            
            <Link href="/festivals" className="group p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-yellow-200 hover:border-yellow-400 hover:bg-white/80 transition-all duration-300">
              <div className="text-2xl mx-auto mb-2">🎉</div>
              <span className="text-sm font-semibold text-yellow-800">Festivals</span>
            </Link>
          </div>

          {/* Inspirational Quote */}
          <div className="mt-12 p-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl border border-blue-200">
            <p className="text-blue-800 font-medium text-lg italic">
              "The path may wind, but every step is sacred"
            </p>
            <p className="text-blue-600 text-sm mt-2">
              - Ancient Sanskrit Wisdom
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 opacity-20 text-6xl animate-pulse">🕉️</div>
        <div className="absolute top-20 right-10 opacity-20 text-4xl animate-pulse delay-1000">🙏</div>
        <div className="absolute bottom-20 left-20 opacity-20 text-5xl animate-pulse delay-2000">🌸</div>
        <div className="absolute bottom-10 right-16 opacity-20 text-4xl animate-pulse delay-3000">✨</div>
      </div>
    </div>
  )
}