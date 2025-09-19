import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Compass, Star, ChevronRight, Play, Clock, Users, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Divine Journey - Evolution of Hindu Deities | PeacefulAnswers',
  description: 'Embark on a transformative journey through the evolution of Hindu deities. Discover how divine consciousness manifested through Vedic, Puranic, and modern traditions.',
  keywords: 'Hindu deity evolution, divine journey, Vedic gods, Puranic deities, Hindu cosmology, spiritual evolution, Trimurti, avatars, divine consciousness',
  openGraph: {
    title: 'The Divine Journey - Evolution of Hindu Deities | PeacefulAnswers',
    description: 'Embark on a transformative journey through the evolution of Hindu deities and divine consciousness.',
    type: 'website',
  }
}

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
    color: "from-green-600 to-emerald-600",
    icon: <Play className="w-6 h-6" />
  },
  {
    number: 5,
    title: "The Web of Divinity",
    subtitle: "Divine Relationships and Cosmic Order",
    description: "Marvel at the intricate connections between deities, their families, and roles in maintaining cosmic balance across multiple dimensions of reality.",
    keyTopics: ["Divine Families", "Cosmic Hierarchies", "Interdependent Roles", "Universal Harmony"],
    estimatedTime: "22 min read",
    href: "/journey/web-of-divinity",
    color: "from-teal-600 to-cyan-600",
    icon: <Compass className="w-6 h-6" />
  }
]

export default function JourneyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 opacity-90"></div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 text-purple-200 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            Spiritual Evolution
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            The Divine Journey
          </h1>
          <p className="text-xl sm:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Embark on a transformative exploration of how divine consciousness has manifested
            through the ages, from Vedic hymns to modern devotional practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#chapters"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              <Play className="w-5 h-5" />
              Begin Journey
            </Link>
            <div className="flex items-center gap-2 text-purple-200">
              <Clock className="w-5 h-5" />
              <span>Estimated 2-3 hours total</span>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              A Sacred Timeline
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Witness the magnificent evolution of divine consciousness as it unfolded through
              different eras, each revealing deeper truths about the nature of reality and our place within it.
            </p>
          </div>

          {/* Chapter Cards */}
          <div id="chapters" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {journeyChapters.map((chapter, index) => (
              <Link
                key={chapter.number}
                href={chapter.href}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${chapter.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${chapter.color} text-white`}>
                      {chapter.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-500">Chapter {chapter.number}</div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        {chapter.estimatedTime}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {chapter.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-4 font-medium">
                    {chapter.subtitle}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {chapter.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-sm font-medium text-gray-900">Key Topics:</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {chapter.keyTopics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                          {topic}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Chapter {chapter.number} of {journeyChapters.length}
                    </div>
                    <ChevronRight className="w-5 h-5 text-orange-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Begin?
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Each chapter builds upon the previous one, creating a comprehensive understanding
                of how divine consciousness has evolved and manifested throughout history.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/journey/foundations-of-the-divine"
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  <Sparkles className="w-5 h-5" />
                  Start with Chapter 1
                </Link>
                <Link
                  href="/deities"
                  className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
                >
                  <Star className="w-5 h-5" />
                  Explore All Deities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}