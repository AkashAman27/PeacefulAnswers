'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Book, Heart, Users, Calendar, MapPin, MessageCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const cards = cardsRef.current
    const cta = ctaRef.current

    if (!section || !title || !cards || !cta) return

    // Create timeline for the section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 75%',
        end: 'bottom 25%',
        toggleActions: 'play none none reverse'
      }
    })

    // Animate title first
    tl.fromTo(title, 
      { 
        opacity: 0, 
        y: 40,
        scale: 0.95
      }, 
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 0.7, 
        ease: 'power2.out' 
      }
    )

    // Animate cards with subtle stagger
    const featureCards = cards.children
    tl.fromTo(featureCards, 
      { 
        opacity: 0, 
        y: 30,
        scale: 0.95
      }, 
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 0.6, 
        stagger: 0.1,
        ease: 'power2.out'
      }, 
      '-=0.4'
    )

    // Animate CTA section
    tl.fromTo(cta, 
      { 
        opacity: 0, 
        y: 20 
      }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.5, 
        ease: 'power2.out' 
      }, 
      '-=0.2'
    )

    // Add subtle floating animation to cards (only after main animation completes)
    tl.call(() => {
      Array.from(featureCards).forEach((card, index) => {
        gsap.to(card, {
          y: Math.sin(index) * 3,
          duration: 3 + (index * 0.3),
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          delay: index * 0.2
        })
      })
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === section) {
          trigger.kill()
        }
      })
    }
  }, [])

  const features = [
    {
      icon: Book,
      title: 'Sacred Scriptures',
      description: 'Explore the Vedas, Upanishads, Bhagavad Gita, and Puranas with authentic translations and insightful commentary.',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Heart,
      title: 'Daily Practices',
      description: 'Learn meditation, pranayama, puja rituals, and vratas to deepen your spiritual journey.',
      gradient: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      icon: Users,
      title: 'Deities & Avatars',
      description: 'Understand the Trimurti, Devi, Ganesha, and the Dashavatara with their stories and significance.',
      gradient: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      icon: MessageCircle,
      title: 'Life Guidance',
      description: 'Get answers to questions about dharma, relationships, ethics, and modern spiritual living.',
      gradient: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Calendar,
      title: 'Festivals & Time',
      description: 'Discover the spiritual significance of festivals, panchang, and auspicious timings.',
      gradient: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      icon: MapPin,
      title: 'Sacred Places',
      description: 'Explore pilgrimage sites, temples, and the spiritual geography of Bharatvarsha.',
      gradient: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    }
  ]

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-3 sm:mb-4">
            Explore the{' '}
            <span className="bg-gradient-to-r from-orange-600 to-yellow-400 bg-clip-text text-transparent">
              eternal wisdom
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Dive deep into the rich spiritual heritage of Sanātana Dharma with comprehensive resources,
            practical guidance, and authentic teachings.
          </p>
        </div>

        {/* Features Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            
            return (
              <div
                key={feature.title}
                className="feature-card group relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-200 hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`feature-icon w-12 h-12 sm:w-14 sm:h-14 ${feature.bgColor} rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 transition-transform duration-200`}>
                    <IconComponent className={`h-6 w-6 sm:h-7 sm:w-7 ${feature.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="feature-title text-lg sm:text-xl font-bold text-blue-900 mb-3 sm:mb-4 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-blue-700 leading-relaxed mb-4 sm:mb-6">
                    {feature.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="feature-link flex items-center text-sm font-semibold text-orange-600 group-hover:text-orange-700">
                    <span>Explore now</span>
                    <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div ref={ctaRef} className="mt-10 sm:mt-12 md:mt-16 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button className="bg-gradient-to-r from-orange-600 to-yellow-400 text-white font-semibold rounded-full px-6 sm:px-8 py-3 sm:py-4 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base w-full sm:w-auto">
              Start exploring wisdom
            </button>
            <span className="text-blue-700 hidden sm:inline">or</span>
            <button className="text-blue-900 font-semibold hover:text-orange-600 transition-colors text-sm sm:text-base">
              Browse all sections →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection