import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Brahmacharini - Second Form of Maa Durga | The Ascetic | PeacefulAnswers',
  description: 'Discover Brahmacharini, the second form of Navadurga worshipped on Day 2 of Navratri. Learn about her penance, spiritual discipline, and the path to divine knowledge.',
  keywords: 'Brahmacharini, Navadurga, Second form of Durga, The Ascetic, Day 2 Navratri, Svadhisthana Chakra, Spiritual discipline, Penance, Tapas',
  openGraph: {
    title: 'Brahmacharini - Second Form of Maa Durga | The Ascetic',
    description: 'Explore Brahmacharini, the goddess of penance and spiritual discipline who teaches the path of devotion.',
    type: 'website',
  }
}

export default function BrahmachariniPage() {
  const goddess = {
    name: "Brahmacharini",
    sanskrit: "ब्रह्मचारिणी",
    meaning: "The Ascetic / One who practices Brahmacharya",
    day: 2,
    color: "Royal Blue",
    chakra: "Svadhisthana (Sacral Chakra)",
    element: "Water",
    mantra: "ॐ देवी ब्रह्मचारिण्यै नमः",
    mantraTransliteration: "Om Devi Brahmacharyai Namah",
    beejMantra: "ॐ वं श्रीं ब्रह्मचारिण्यै नमः",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop"
  }

  const iconography = [
    {
      element: "Rudraksha Rosary (Japamala)",
      significance: "Represents continuous devotion and the practice of japa (repetitive prayer). Each bead signifies a step closer to divine realization."
    },
    {
      element: "Water Pot (Kamandalu)",
      significance: "Symbol of purification, simplicity, and the nectar of spiritual knowledge. Contains the elixir of wisdom gained through penance."
    },
    {
      element: "White Clothing",
      significance: "Represents purity of thought, word, and deed. White symbolizes the sattvic quality needed for spiritual advancement."
    },
    {
      element: "Bare Feet",
      significance: "Demonstrates renunciation of material comforts and direct connection with Mother Earth during spiritual practice."
    },
    {
      element: "Serene Expression",
      significance: "Reflects the inner peace and contentment that comes from spiritual discipline and surrender to the divine will."
    },
    {
      element: "Walking Posture",
      significance: "Shows the continuous journey of spiritual seeking and the dynamic nature of the spiritual path."
    }
  ]

  const mythology = [
    {
      title: "The Great Penance",
      content: "After being reborn as Shailaputri, Parvati undertook severe austerities to win Lord Shiva as her husband. She performed tapas for a thousand years, eating only fruits and vegetables, then leaves, and finally surviving only on air and water."
    },
    {
      title: "Test of Determination",
      content: "During her penance, the Saptarishis (seven sages) tested her resolve by describing the difficulties of marrying Shiva. Unmoved by their words, she demonstrated unwavering determination and single-pointed devotion."
    },
    {
      title: "Divine Recognition",
      content: "Her intense devotion and self-discipline impressed even Lord Shiva. The gods themselves praised her commitment, and she became known as Brahmacharini - the one who follows the path of Brahman through disciplined practice."
    },
    {
      title: "Symbol of Spiritual Discipline",
      content: "Her story teaches that the highest spiritual attainments require sustained effort, discipline, and unwavering faith. She embodies the principle that divine grace responds to sincere spiritual effort."
    }
  ]

  const spiritualSignificance = [
    {
      aspect: "Sacral Chakra Activation",
      meaning: "Brahmacharini governs Svadhisthana chakra, associated with creativity, relationships, and emotional balance. Her worship purifies desires and transforms them into spiritual aspiration."
    },
    {
      aspect: "Tapas (Spiritual Austerity)",
      meaning: "She represents the power of sustained spiritual practice. Her energy helps devotees develop the discipline needed for meditation, study, and self-transformation."
    },
    {
      aspect: "Brahmacharya (Celibacy/Self-Control)",
      meaning: "Not just physical celibacy, but the conservation and proper channeling of all energies toward spiritual goals. She teaches mastery over senses and desires."
    },
    {
      aspect: "Knowledge and Wisdom",
      meaning: "Through her penance, she gained supreme knowledge. She represents the path of knowledge (Jnana Yoga) and the wisdom that comes from direct spiritual experience."
    },
    {
      aspect: "Patience and Perseverance",
      meaning: "Her thousand years of penance teach the importance of patience in spiritual growth. She grants devotees the strength to persist through spiritual challenges."
    },
    {
      aspect: "Transformation of Desire",
      meaning: "She shows how worldly desires can be transformed into spiritual longing, demonstrating that even love and attachment can become vehicles for spiritual growth."
    }
  ]

  const rituals = [
    {
      practice: "Blue Color Worship",
      description: "Devotees wear royal blue and offer blue flowers, representing the depth of spiritual knowledge and the infinite nature of divine wisdom."
    },
    {
      practice: "Japa Meditation",
      description: "Continuous repetition of mantras using rudraksha beads, following Brahmacharini's example of sustained spiritual practice."
    },
    {
      practice: "Simple Fasting",
      description: "Observing simple fasts or eating sattvic (pure) food to purify the body and mind, emulating her disciplined lifestyle."
    },
    {
      practice: "Study of Scriptures",
      description: "Reading and contemplating sacred texts to gain spiritual knowledge and deepen understanding of dharma."
    },
    {
      practice: "Water Offerings",
      description: "Offering pure water to the goddess, symbolizing the offering of purified consciousness and the seeking of spiritual wisdom."
    }
  ]

  const mantras = [
    {
      mantra: "ॐ देवी ब्रह्मचारिण्यै नमः",
      transliteration: "Om Devi Brahmacharyai Namah",
      meaning: "Salutations to Goddess Brahmacharini",
      benefits: "This mantra invokes the goddess's blessings for spiritual discipline, knowledge, and the strength to pursue the spiritual path with dedication."
    },
    {
      mantra: "ॐ वं श्रीं ब्रह्मचारिण्यै नमः",
      transliteration: "Om Vam Shreem Brahmacharyai Namah",
      meaning: "Om, with the sacral chakra seed sound and prosperity, salutations to Brahmacharini",
      benefits: "This beej mantra activates the Svadhisthana chakra while invoking divine knowledge and spiritual prosperity."
    },
    {
      mantra: "दधाना करपद्माभ्यामक्षमालाकमण्डलू। देवी प्रसीदतु मयि ब्रह्मचारिण्यनुत्तमा॥",
      transliteration: "Dadhana Karapadmabhyam Akshamalakamandalu, Devi Prasidatu Mayi Brahmacharyanuuttama",
      meaning: "The supreme Brahmacharini holding rosary and water pot in her lotus hands, may the goddess be pleased with me",
      benefits: "This verse invokes the complete blessings of Brahmacharini for spiritual advancement and divine grace."
    },
    {
      mantra: "या देवी सर्वभूतेषु माँ ब्रह्मचारिणी रूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥",
      transliteration: "Ya Devi Sarvabhuteshu Ma Brahmacharini Rupena Samsthita, Namastasyai Namastasyai Namastasyai Namo Namah",
      meaning: "The goddess who resides in all beings as Brahmacharini, salutations to her again and again",
      benefits: "This mantra recognizes the universal presence of disciplined spiritual energy and seeks its awakening within oneself."
    }
  ]

  const lessons = [
    {
      teaching: "The Power of Sustained Effort",
      application: "Spiritual growth requires consistent, disciplined practice over long periods. Like Brahmacharini's thousand-year penance, transformation comes through persistent effort."
    },
    {
      teaching: "Purity of Purpose",
      application: "Having a clear spiritual goal and maintaining purity in thought, word, and action accelerates spiritual progress and attracts divine grace."
    },
    {
      teaching: "Transformation of Desire",
      application: "Rather than suppressing desires, learn to transform them into spiritual longing. Use the energy of desire as fuel for spiritual aspiration."
    },
    {
      teaching: "Inner and Outer Discipline",
      application: "Develop both external disciplines (regular practice, ethical conduct) and internal disciplines (mental control, emotional balance) for holistic spiritual development."
    },
    {
      teaching: "Knowledge Through Experience",
      application: "True spiritual knowledge comes not just from books but from direct experience gained through sincere practice and inner purification."
    },
    {
      teaching: "Patience in Progress",
      application: "Spiritual advancement takes time. Cultivate patience and trust in the process, knowing that sincere effort will eventually bear fruit."
    }
  ]

  const practices = [
    {
      title: "Daily Japa Practice",
      description: "Establish a regular practice of mantra repetition using a rudraksha mala, starting with 108 repetitions and gradually increasing.",
      duration: "20-30 minutes daily"
    },
    {
      title: "Scriptural Study",
      description: "Dedicate time daily to reading and contemplating sacred texts like the Bhagavad Gita, Upanishads, or Devi Mahatmya.",
      duration: "15-20 minutes daily"
    },
    {
      title: "Brahmacharya Practices",
      description: "Practice moderation in speech, food, sleep, and sensory pleasures. Channel energies toward spiritual growth rather than mere gratification.",
      duration: "Ongoing lifestyle"
    },
    {
      title: "Water Meditation",
      description: "Meditate on the flow of water while offering water to plants or in rivers, contemplating the purifying nature of spiritual practice.",
      duration: "10-15 minutes"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/deities/durga"
              className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to Maa Durga
            </Link>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <Link href="/deities/durga/shailaputri" className="hover:text-blue-600">← Shailaputri</Link>
              <span>Day {goddess.day} of Navratri</span>
              <Link href="/deities/durga/chandraghanta" className="hover:text-blue-600">Chandraghanta →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">Day {goddess.day} • {goddess.chakra}</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                {goddess.sanskrit}
              </h1>

              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                {goddess.name}
              </h2>

              <p className="text-xl text-indigo-100 mb-8">
                {goddess.meaning} - The goddess of spiritual discipline and divine knowledge
              </p>

              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  🔵 {goddess.color}
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  💧 {goddess.element}
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  ⚡ {goddess.chakra}
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-indigo-500/20 to-blue-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src={goddess.image}
                  alt={goddess.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Iconography */}
        <section>
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Sacred Iconography</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iconography.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-700 mb-3">{item.element}</h3>
                <p className="text-gray-700 leading-relaxed">{item.significance}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mythology */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Sacred Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mythology.map((story, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-indigo-700 mb-4">{story.title}</h3>
                <p className="text-gray-700 leading-relaxed">{story.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Spiritual Significance */}
        <section>
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Spiritual Significance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {spiritualSignificance.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-indigo-500">
                <h3 className="text-xl font-bold text-indigo-700 mb-3">{item.aspect}</h3>
                <p className="text-gray-700 leading-relaxed">{item.meaning}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Rituals and Practices */}
        <section className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Rituals & Worship</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rituals.map((ritual, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-purple-700 mb-3">{ritual.practice}</h3>
                <p className="text-gray-700 leading-relaxed">{ritual.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sacred Mantras */}
        <section>
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Sacred Mantras</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mantras.map((mantra, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">{mantra.mantra}</h3>
                  <p className="text-indigo-600 font-medium mb-2">{mantra.transliteration}</p>
                  <p className="text-gray-700 italic">{mantra.meaning}</p>
                </div>
                <div className="border-t border-blue-200 pt-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{mantra.benefits}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spiritual Practices */}
        <section className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Spiritual Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practices.map((practice, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-blue-700">{practice.title}</h3>
                  <span className="text-sm text-indigo-600 bg-indigo-100 px-2 py-1 rounded">{practice.duration}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{practice.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Spiritual Lessons */}
        <section>
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Spiritual Lessons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lessons.map((lesson, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-700 mb-3">{lesson.teaching}</h3>
                <p className="text-gray-700 leading-relaxed">{lesson.application}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center py-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Continue the Sacred Journey</h3>
            <p className="text-lg mb-6">
              Having cultivated discipline and knowledge, proceed to the third day of Navratri
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/deities/durga/shailaputri"
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
              >
                ← Previous: Shailaputri
              </Link>
              <Link
                href="/deities/durga/chandraghanta"
                className="px-8 py-4 bg-indigo-500 text-white font-bold rounded-xl hover:bg-indigo-400 transition-colors"
              >
                Next: Chandraghanta →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}