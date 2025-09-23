'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Quote } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, India",
    content: "Reading about Lord Ganesha's significance on PeacefulAnswers transformed my understanding of Hindu traditions. The detailed explanations of Ganapati Puja helped me establish a meaningful daily practice.",
    rating: 5,
    category: "Deity Studies",
    bgColor: "from-purple-100 to-pink-100",
    textColor: "text-purple-800"
  },
  {
    id: 2,
    name: "Rajesh Patel",
    location: "California, USA",
    content: "The Bhagavad Gita explanations here are incredible! As someone living abroad, this website helped me reconnect with Krishna's teachings and apply them to modern challenges. Truly life-changing.",
    rating: 5,
    category: "Bhagavad Gita",
    bgColor: "from-blue-100 to-indigo-100",
    textColor: "text-blue-800"
  },
  {
    id: 3,
    name: "Dr. Meera Iyer",
    location: "Bangalore, India",
    content: "The festival guides, especially Maha Shivaratri, enriched our family celebrations. My children now understand the deeper meaning behind our traditions, not just the rituals.",
    rating: 5,
    category: "Festival Wisdom",
    bgColor: "from-green-100 to-emerald-100",
    textColor: "text-green-800"
  },
  {
    id: 4,
    name: "Arjun Krishnan",
    location: "London, UK",
    content: "Living in the West, I was losing touch with my roots. The practices section, especially Surya Namaskara, brought back the spiritual discipline I was missing. The step-by-step guides are perfect.",
    rating: 5,
    category: "Daily Practices",
    bgColor: "from-orange-100 to-yellow-100",
    textColor: "text-orange-800"
  },
  {
    id: 5,
    name: "Sita Devi",
    location: "Delhi, India",
    content: "The way complex philosophical concepts are explained simply is remarkable. Reading about different avatars of Vishnu deepened my bhakti and understanding of divine love.",
    rating: 5,
    category: "Philosophy",
    bgColor: "from-red-100 to-pink-100",
    textColor: "text-red-800"
  },
  {
    id: 6,
    name: "Dev Sharma",
    location: "Toronto, Canada",
    content: "Started my spiritual journey here by learning about Lord Shiva. The meditation practices and mantras have brought peace to my busy corporate life. Grateful for this resource!",
    rating: 5,
    category: "Spiritual Growth",
    bgColor: "from-indigo-100 to-purple-100",
    textColor: "text-indigo-800"
  }
]

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const subtitle = subtitleRef.current
    const cards = cardsRef.current

    if (!section || !title || !subtitle || !cards) return

    // Create timeline for the section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })

    // Animate title and subtitle
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
      }
    )
    .fromTo(subtitle, 
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

    // Animate testimonial cards with stagger
    const testimonialCards = cards.children
    tl.fromTo(testimonialCards, 
      { 
        opacity: 0, 
        y: 80,
        scale: 0.8,
        rotateX: 45
      }, 
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 0.8, 
        stagger: 0.15,
        ease: 'back.out(1.7)'
      }, 
      '-=0.2'
    )

    // Create floating animation for cards
    gsap.set(testimonialCards, { perspective: 1000 })
    
    Array.from(testimonialCards).forEach((card, index) => {
      gsap.to(card, {
        y: Math.sin(index * 2) * 10,
        rotation: Math.sin(index) * 2,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: index * 0.2
      })

      // Hover animations
      const cardElement = card as HTMLElement
      cardElement.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.05,
          y: -10,
          rotateY: 5,
          duration: 0.3,
          ease: 'power2.out'
        })
      })

      cardElement.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          rotateY: 0,
          duration: 0.3,
          ease: 'power2.out'
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

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
          >
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Spiritual Journeys
            </span>{' '}
            <span className="text-blue-900">Transformed</span>
          </h2>
          <p
            ref={subtitleRef}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 md:px-0"
          >
            Discover how thousands have deepened their understanding of Hindu philosophy,
            deities, and sacred practices through our authentic spiritual content.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`relative bg-gradient-to-br ${testimonial.bgColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50 backdrop-blur-sm transform-gpu`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-20">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-600" />
              </div>

              {/* Category Badge */}
              <div className={`inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold ${testimonial.textColor} bg-white/70 mb-4 sm:mb-6`}>
                {testimonial.category}
              </div>

              {/* Content */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 relative z-10 line-clamp-4 sm:line-clamp-none">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex items-center mb-4 sm:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Author */}
              <div className="text-left">
                <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">{testimonial.name}</h4>
                <p className="text-gray-600 text-xs sm:text-sm">{testimonial.location}</p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-xl"></div>
              <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-tl from-orange-300/20 to-transparent rounded-full blur-2xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="text-center mt-10 sm:mt-12 md:mt-16 p-6 sm:p-8 bg-white/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/50">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-1 sm:mb-2">5,000+</div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">Spiritual Seekers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">50+</div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">Sacred Topics</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-1 sm:mb-2">4.9/5</div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}