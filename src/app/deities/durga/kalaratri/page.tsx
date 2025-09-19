import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Kalaratri - Seventh Form of Maa Durga | Dark Destroyer | PeacefulAnswers',
  description: 'Discover Kalaratri, the seventh form of Navadurga worshipped on Day 7 of Navratri. Learn about her fierce dark energy, crown chakra connection, and power to destroy darkness.',
  keywords: 'Kalaratri, Navadurga, Seventh form of Durga, Dark Destroyer, Day 7 Navratri, Sahasrara Chakra, Crown Chakra, Fierce goddess, Destroyer of darkness',
  openGraph: {
    title: 'Kalaratri - Seventh Form of Maa Durga | Dark Destroyer',
    description: 'Explore Kalaratri, the most fierce form of Durga who destroys darkness, ignorance, and all negative forces.',
    type: 'website',
  }
}

export default function KalaratriPage() {
  const goddess = {
    name: "Kalaratri",
    sanskrit: "कालरात्रि",
    meaning: "Night of Death / Destroyer of Darkness",
    day: 7,
    color: "Royal Blue",
    chakra: "Sahasrara (Crown Chakra)",
    element: "Pure Consciousness/Void",
    mantra: "ॐ देवी कालरात्र्यै नमः",
    mantraTransliteration: "Om Devi Kalaratryai Namah",
    beejMantra: "ॐ क्रीं श्रीं कालरात्र्यै नमः",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop"
  }

  const iconography = [
    {
      element: "Dark Complexion",
      significance: "Her dark skin represents the cosmic void from which all creation emerges and into which it dissolves. Darkness here symbolizes the ultimate reality beyond all forms."
    },
    {
      element: "Disheveled Hair",
      significance: "Her wild, flowing hair represents the uncontrolled forces of nature and the raw power of divine energy when unleashed to destroy negativity."
    },
    {
      element: "Four Arms with Weapons",
      significance: "Her four arms hold deadly weapons including curved sword and iron hook, representing her power to cut through all forms of ignorance and spiritual bondage."
    },
    {
      element: "Donkey Mount",
      significance: "The humble donkey represents her accessibility to all beings, regardless of status. It also symbolizes the destruction of ego and pride."
    },
    {
      element: "Fearsome Expression",
      significance: "Her terrifying face with flaming breath destroys fear itself. She appears fearsome to negative forces but benevolent to sincere devotees."
    },
    {
      element: "Necklace of Severed Heads",
      significance: "Represents the destruction of ego-identities and false personas. Each head symbolizes a different aspect of ignorance being eliminated."
    }
  ]

  const mythology = [
    {
      title: "Destroyer of Demons",
      content: "Kalaratri manifested to destroy the most powerful demons including Raktabija, whose blood drops created new demons. She consumed his blood, preventing regeneration, demonstrating her power over life and death."
    },
    {
      title: "Night of Cosmic Dissolution",
      content: "She represents the cosmic night when the universe dissolves back into the primordial void. During this phase, all forms disappear, leaving only pure consciousness."
    },
    {
      title: "Protector from Evil",
      content: "Despite her fearsome appearance, she protects devotees from negative forces, evil spirits, and dark magic. Her very presence causes all forms of darkness to flee."
    },
    {
      title: "Guardian of Time",
      content: "As Kalaratri, she controls the flow of time itself. She can accelerate spiritual progress for devotees and delay negative karmic effects, showing mastery over temporal reality."
    }
  ]

  const spiritualSignificance = [
    {
      aspect: "Crown Chakra Activation",
      meaning: "Kalaratri governs Sahasrara chakra, the center of spiritual enlightenment and cosmic consciousness. Her worship facilitates the ultimate spiritual awakening."
    },
    {
      aspect: "Destruction of Ignorance",
      meaning: "She destroys the deepest forms of spiritual ignorance and delusion. Her dark energy burns away all false beliefs and limited identifications."
    },
    {
      aspect: "Transcendence of Fear",
      meaning: "By appearing fearsome, she teaches devotees to go beyond fear itself. True spiritual courage means facing the ultimate mystery of existence without fear."
    },
    {
      aspect: "Death and Transformation",
      meaning: "She represents the death of the old self and transformation into higher consciousness. Spiritual death leads to rebirth in divine awareness."
    },
    {
      aspect: "Protection from Negative Forces",
      meaning: "Her fierce energy creates an impenetrable shield against all forms of negativity, evil influences, and spiritual attacks from lower dimensions."
    },
    {
      aspect: "Mastery over Time and Death",
      meaning: "She grants liberation from the fear of death and the bondage of linear time. Through her grace, devotees experience timeless awareness."
    }
  ]

  const rituals = [
    {
      practice: "Royal Blue Worship",
      description: "Devotees wear dark blue or black clothes and offer blue lotus and dark flowers to connect with her profound, transformative energy."
    },
    {
      practice: "Midnight Meditation",
      description: "Special meditation practices performed at midnight when her energy is strongest, focusing on transcending fear and embracing the cosmic void."
    },
    {
      practice: "Protection Rituals",
      description: "Invoking her fierce protection against negative energies, evil eye, black magic, and psychic attacks through specific mantras and offerings."
    },
    {
      practice: "Crown Chakra Activation",
      description: "Advanced meditation focusing on the crown of the head, visualizing her dark light dissolving all mental constructs and opening cosmic consciousness."
    },
    {
      practice: "Fear Transformation Practice",
      description: "Consciously facing and embracing fears while chanting her mantras, using her energy to transform fear into spiritual courage and wisdom."
    }
  ]

  const mantras = [
    {
      mantra: "ॐ देवी कालरात्र्यै नमः",
      transliteration: "Om Devi Kalaratryai Namah",
      meaning: "Salutations to Goddess Kalaratri",
      benefits: "This fundamental mantra invokes the fierce goddess for protection from darkness, destruction of ignorance, and spiritual transformation."
    },
    {
      mantra: "ॐ क्रीं श्रीं कालरात्र्यै नमः",
      transliteration: "Om Kreem Shreem Kalaratryai Namah",
      meaning: "Om, with divine energy and prosperity seed sounds, salutations to Kalaratri",
      benefits: "This beej mantra activates crown chakra while invoking protection from negative forces and spiritual awakening."
    },
    {
      mantra: "एकवेणी जपाकर्णपूरा नग्ना खरास्थिता। लम्बोष्ठी कर्णिकाकर्णी तैलाभ्यक्तशरीरिणी॥",
      transliteration: "Ekaveni Japakarnapura Nagna Kharasthita, Lambosthi Karnikakarni Tailabhyaktasharirini",
      meaning: "Single-braided hair, naked, riding a donkey, with long lips and protruding ears, body smeared with oil",
      benefits: "This descriptive verse helps visualize her fearsome form for deep spiritual transformation and protection from evil."
    },
    {
      mantra: "या देवी सर्वभूतेषु माँ कालरात्रि रूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥",
      transliteration: "Ya Devi Sarvabhuteshu Ma Kalaratri Rupena Samsthita, Namastasyai Namastasyai Namastasyai Namo Namah",
      meaning: "The goddess who resides in all beings as Kalaratri, salutations to her again and again",
      benefits: "This universal mantra recognizes the destructive-transformative divine energy present in all existence."
    }
  ]

  const lessons = [
    {
      teaching: "Embrace the Dark Night of the Soul",
      application: "Accept and navigate through dark periods of spiritual growth. These challenging times often precede the greatest breakthroughs in consciousness."
    },
    {
      teaching: "Transcend Surface Appearances",
      application: "Look beyond external appearances to perceive deeper truth. What appears fearsome on the surface may actually be profoundly beneficial."
    },
    {
      teaching: "Transform Fear into Wisdom",
      application: "Use fear as a teacher rather than running from it. Face your deepest fears with courage and they transform into sources of strength and wisdom."
    },
    {
      teaching: "Die Before You Die",
      application: "Practice ego-death through spiritual discipline. Let go of false identities and limited self-concepts to discover your true divine nature."
    },
    {
      teaching: "Protection Through Fierce Love",
      application: "Sometimes love manifests as fierce protection. Be willing to be strong and even frightening when protecting what is sacred and innocent."
    },
    {
      teaching: "Embrace the Void",
      application: "Find peace in emptiness and silence. The void is not empty but full of infinite potential and pure consciousness."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/deities/durga"
              className="inline-flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to Maa Durga
            </Link>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <Link href="/deities/durga/katyayani" className="hover:text-indigo-600">← Katyayani</Link>
              <span>Day {goddess.day} of Navratri</span>
              <Link href="/deities/durga/mahagauri" className="hover:text-indigo-600">Mahagauri →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">Day {goddess.day} • {goddess.chakra}</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                {goddess.sanskrit}
              </h1>

              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-indigo-100">
                {goddess.name}
              </h2>

              <p className="text-xl text-purple-100 mb-8">
                {goddess.meaning} - The fierce destroyer who eliminates darkness and transforms through divine terror
              </p>

              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  🔵 {goddess.color}
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  🌌 {goddess.element}
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  👑 {goddess.chakra}
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-indigo-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
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
          <h2 className="text-4xl font-bold text-center text-indigo-800 mb-12">Sacred Iconography</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iconography.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-indigo-500">
                <h3 className="text-xl font-bold text-indigo-700 mb-3">{item.element}</h3>
                <p className="text-gray-700 leading-relaxed">{item.significance}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mythology */}
        <section className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-center text-indigo-800 mb-12">Sacred Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mythology.map((story, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-purple-700 mb-4">{story.title}</h3>
                <p className="text-gray-700 leading-relaxed">{story.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Spiritual Significance */}
        <section>
          <h2 className="text-4xl font-bold text-center text-indigo-800 mb-12">Spiritual Significance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {spiritualSignificance.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-purple-700 mb-3">{item.aspect}</h3>
                <p className="text-gray-700 leading-relaxed">{item.meaning}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Rituals and Practices */}
        <section className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-center text-indigo-800 mb-12">Rituals & Worship</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rituals.map((ritual, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-blue-700 mb-3">{ritual.practice}</h3>
                <p className="text-gray-700 leading-relaxed">{ritual.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sacred Mantras */}
        <section>
          <h2 className="text-4xl font-bold text-center text-indigo-800 mb-12">Sacred Mantras</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mantras.map((mantra, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-indigo-800 mb-3">{mantra.mantra}</h3>
                  <p className="text-purple-600 font-medium mb-2">{mantra.transliteration}</p>
                  <p className="text-gray-700 italic">{mantra.meaning}</p>
                </div>
                <div className="border-t border-indigo-200 pt-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{mantra.benefits}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spiritual Lessons */}
        <section className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-center text-indigo-800 mb-12">Spiritual Lessons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lessons.map((lesson, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-indigo-500">
                <h3 className="text-xl font-bold text-indigo-700 mb-3">{lesson.teaching}</h3>
                <p className="text-gray-700 leading-relaxed">{lesson.application}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center py-12">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Continue the Sacred Journey</h3>
            <p className="text-lg mb-6">
              Having faced the deepest darkness and emerged transformed, proceed to the eighth day of Navratri
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/deities/durga/katyayani"
                className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
              >
                ← Previous: Katyayani
              </Link>
              <Link
                href="/deities/durga/mahagauri"
                className="px-8 py-4 bg-purple-500 text-white font-bold rounded-xl hover:bg-purple-400 transition-colors"
              >
                Next: Mahagauri →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}