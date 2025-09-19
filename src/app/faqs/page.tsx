import { Metadata } from 'next'
import FAQsClient from '@/components/FAQsClient'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions about Sanātana Dharma | PeacefulAnswers',
  description: 'Find answers to common questions about Sanātana Dharma, spiritual practices, deities, scriptures, and Hindu philosophy. Searchable FAQ database with expert insights.',
  keywords: 'Hindu FAQ, Sanātana Dharma questions, Hindu philosophy answers, spiritual practices FAQ, Hindu deities questions, Hindu scriptures explained, dharma questions',
  openGraph: {
    title: 'Frequently Asked Questions about Sanātana Dharma | PeacefulAnswers',
    description: 'Find answers to common questions about Hindu philosophy, spiritual practices, and sacred traditions.',
    type: 'website',
  }
}

// Sample FAQs data for SSR (could be fetched from database)
const sampleFaqs = [
  {
    id: 1,
    question: "What is the meaning of 'Sanātana Dharma'?",
    answer: "Sanātana Dharma literally means 'eternal duty' or 'eternal way.' It refers to the timeless spiritual principles and practices that transcend specific cultural or historical contexts. Rather than being a religion in the conventional sense, Sanātana Dharma is a way of life based on universal spiritual truths that have been discovered and preserved by sages throughout history.",
    category: "General",
    difficulty_level: "beginner",
    tags: ["Sanātana Dharma", "meaning", "philosophy"],
    is_featured: true,
    view_count: 1250,
    helpful_count: 89,
    created_at: "2024-01-15T10:00:00Z",
    author: "Spiritual Guide"
  },
  {
    id: 2,
    question: "How do I start my spiritual practice in Hinduism?",
    answer: "Beginning a spiritual practice in Hinduism can start with simple daily rituals: 1) Morning prayers or meditation (even 5-10 minutes), 2) Reading sacred texts like the Bhagavad Gita, 3) Practicing gratitude and mindfulness, 4) Following ethical principles (ahimsa, truthfulness), 5) Finding a spiritual teacher or community. The key is consistency rather than intensity - start small and gradually deepen your practice.",
    category: "Spiritual Practices",
    difficulty_level: "beginner",
    tags: ["meditation", "practice", "beginner", "spiritual"],
    is_featured: true,
    view_count: 980,
    helpful_count: 76,
    created_at: "2024-01-20T14:30:00Z",
    author: "Spiritual Guide"
  },
  {
    id: 3,
    question: "What is the significance of Om (ॐ)?",
    answer: "Om (ॐ) is considered the primordial sound of the universe, representing the cosmic vibration from which all creation emerges. It consists of three sounds: 'A' (creation/Brahma), 'U' (preservation/Vishnu), and 'M' (destruction/Shiva), followed by silence representing pure consciousness. Chanting Om helps align personal consciousness with universal consciousness and is used to begin and end prayers, meditation, and sacred practices.",
    category: "Spiritual Practices",
    difficulty_level: "intermediate",
    tags: ["Om", "mantra", "cosmic sound", "meditation"],
    is_featured: false,
    view_count: 750,
    helpful_count: 62,
    created_at: "2024-01-25T09:15:00Z",
    author: "Spiritual Guide"
  }
]

const sampleCategories = [
  { name: "General", count: 25 },
  { name: "Spiritual Practices", count: 18 },
  { name: "Deities", count: 15 },
  { name: "Scriptures", count: 12 },
  { name: "Festivals", count: 8 }
]

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-3 sm:mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2 sm:px-0">
            Find answers to common questions about Sanātana Dharma, spiritual practices,
            deities, scriptures, and Hindu philosophy.
          </p>
        </div>

        {/* Interactive FAQ Component */}
        <FAQsClient initialFaqs={sampleFaqs} initialCategories={sampleCategories} />
      </div>
    </div>
  )
}