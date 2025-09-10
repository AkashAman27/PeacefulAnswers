'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, Compass, Star, ChevronRight, Play, Clock, Users, Sparkles } from 'lucide-react'

export default function JourneyPage() {
  const [hoveredChapter, setHoveredChapter] = useState<number | null>(null)

  const journeyChapters = [
    {
      number: 1,
      title: "Foundations of the Divine",
      subtitle: "The Vedic and Upanishadic Cosmic Principles",
      description: "Discover the primordial reality of Brahman and the early pantheon of the Rigveda. Journey from the abstract, universal principle to the nature-based deities of ancient times.",
      keyTopics: ["Brahman: The Ultimate Reality", "Early Vedic Deities", "Indra and Agni's Dominance", "Seeds of Future Gods"],
      estimatedTime: "15 min read",
      href: "/journey/foundations-of-the-divine",
      color: "from-blue-600 to-indigo-700",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      number: 2,
      title: "The Great Synthesis",
      subtitle: "From Vedic Ritualism to Puranic Devotionalism",
      description: "Witness the dramatic transformation as ancient gods evolved, new deities emerged, and personal devotion replaced elaborate rituals in Hindu religious practice.",
      keyTopics: ["Decline of Vedic Gods", "Rise of Vishnu & Shiva", "Role of Epics & Puranas", "The Yuga Cycle"],
      estimatedTime: "20 min read",
      href: "/journey/great-synthesis",
      color: "from-orange-600 to-red-600",
      icon: <Users className="w-6 h-6" />
    },
    {
      number: 3,
      title: "The Supreme Trinity",
      subtitle: "Origins and Roles of the Trimurti",
      description: "Explore the theological masterpiece that unified creation, preservation, and destruction into three supreme deities: Brahma, Vishnu, and Shiva.",
      keyTopics: ["Trimurti Doctrine", "Brahma the Creator", "Vishnu the Preserver", "Shiva the Transformer"],
      estimatedTime: "25 min read",
      href: "/journey/supreme-trinity",
      color: "from-purple-600 to-pink-600",
      icon: <Star className="w-6 h-6" />
    },
    {
      number: 4,
      title: "The Descent of Divinity",
      subtitle: "The Doctrine of Avatara",
      description: "Understand how gods came to Earth through the revolutionary concept of divine incarnation, from Matsya to Kalki across the cosmic ages.",
      keyTopics: ["Philosophy of Avatars", "The Dashavatara", "Rama & Krishna", "Divine Intervention"],
      estimatedTime: "18 min read",
      href: "/journey/descent-of-divinity",
      color: "from-green-600 to-emerald-700",
      icon: <Play className="w-6 h-6" />
    },
    {
      number: 5,
      title: "The Web of Divinity",
      subtitle: "Genealogies, Consorts, and Sectarian Ontologies",
      description: "Navigate the intricate relationships between deities, divine genealogies, and the profound role of Shakti in the cosmic order.",
      keyTopics: ["Divine Genealogies", "Power of Shakti", "Divine Consorts", "Ontological Map"],
      estimatedTime: "22 min read",
      href: "/journey/web-of-divinity",
      color: "from-yellow-500 to-amber-600",
      icon: <Compass className="w-6 h-6" />
    }
  ]

  const totalReadingTime = journeyChapters.reduce((total, chapter) => {
    const time = parseInt(chapter.estimatedTime.split(' ')[0])
    return total + time
  }, 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 rounded-full px-6 py-3 text-sm font-medium mb-8">
            <BookOpen className="w-5 h-5" />
            Comprehensive Spiritual Journey
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-6">
            The Evolving <span className="text-orange-600">Pantheon</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-800 mb-6 font-medium">
            An Ontological and Genealogical Study of Hindu Deities
          </p>
          
          <p className="text-lg text-blue-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            Journey through millennia of divine evolution, from the abstract cosmic principles of the Vedas 
            to the beloved personal deities of the Puranas. Discover how gods transformed, why they came to Earth, 
            and how ancient wisdom shaped modern devotion.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <div className="flex items-center gap-2 text-blue-700">
              <Clock className="w-5 h-5" />
              <span className="font-medium">{totalReadingTime} minutes total</span>
            </div>
            <div className="flex items-center gap-2 text-blue-700">
              <Star className="w-5 h-5" />
              <span className="font-medium">5 Interactive Chapters</span>
            </div>
            <div className="flex items-center gap-2 text-blue-700">
              <Users className="w-5 h-5" />
              <span className="font-medium">Comprehensive Study</span>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Overview */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Your Spiritual Journey</h2>
            <p className="text-lg text-blue-700 max-w-3xl mx-auto">
              Follow the chronological evolution of Hindu divinity through five comprehensive chapters, 
              each building upon the previous to create a complete understanding of the divine pantheon.
            </p>
          </div>

          {/* Journey Timeline */}
          <div className="space-y-8">
            {journeyChapters.map((chapter, index) => (
              <div
                key={chapter.number}
                className={`relative group transition-all duration-500 ${
                  hoveredChapter === chapter.number ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredChapter(chapter.number)}
                onMouseLeave={() => setHoveredChapter(null)}
              >
                {/* Timeline Line */}
                {index < journeyChapters.length - 1 && (
                  <div className="absolute left-8 top-24 w-0.5 h-16 bg-gradient-to-b from-orange-300 to-blue-300 z-0"></div>
                )}
                
                <Link href={chapter.href} className="block">
                  <div className={`bg-gradient-to-r ${chapter.color} rounded-2xl p-1 shadow-xl hover:shadow-2xl transition-all duration-300`}>
                    <div className="bg-white rounded-xl p-8">
                      <div className="flex items-start gap-6">
                        {/* Chapter Number & Icon */}
                        <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${chapter.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                          {chapter.icon}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">
                              Chapter {chapter.number}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {chapter.estimatedTime}
                              </span>
                            </div>
                          </div>

                          <h3 className="text-2xl font-bold text-blue-900 mb-2">
                            {chapter.title}
                          </h3>
                          <p className="text-lg text-orange-600 font-medium mb-4">
                            {chapter.subtitle}
                          </p>
                          <p className="text-blue-700 leading-relaxed mb-6">
                            {chapter.description}
                          </p>

                          {/* Key Topics */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            {chapter.keyTopics.map((topic, topicIndex) => (
                              <div key={topicIndex} className="flex items-center gap-2">
                                <ChevronRight className="w-4 h-4 text-orange-600 flex-shrink-0" />
                                <span className="text-blue-800 font-medium">{topic}</span>
                              </div>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-600">
                              Continue your journey →
                            </div>
                            <div className={`px-4 py-2 bg-gradient-to-r ${chapter.color} text-white rounded-lg font-medium hover:shadow-lg transition-shadow`}>
                              Begin Chapter {chapter.number}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">What You'll Discover</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              This comprehensive study reveals the fascinating journey of Hindu divinity through time and culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Ancient Wisdom</h3>
              <p className="text-blue-100">
                Understand the philosophical foundations from Vedic abstractions to personal deities
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Divine Evolution</h3>
              <p className="text-blue-100">
                Trace how gods transformed from nature forces to beloved personal guides
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Sacred Connections</h3>
              <p className="text-blue-100">
                Explore the intricate web of divine relationships, genealogies, and cosmic principles
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}