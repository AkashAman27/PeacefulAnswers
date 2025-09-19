import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Shailaputri - First Form of Maa Durga | Daughter of Mountains | PeacefulAnswers',
  description: 'Discover Shailaputri, the first form of Navadurga worshipped on Day 1 of Navratri. Learn about her significance, iconography, mantras, and spiritual teachings as the foundation of spiritual practice.',
  keywords: 'Shailaputri, Navadurga, First form of Durga, Daughter of Mountains, Day 1 Navratri, Muladhara Chakra, Spiritual foundation, Hindu Goddess',
  openGraph: {
    title: 'Shailaputri - First Form of Maa Durga | Daughter of Mountains',
    description: 'Explore the profound significance of Shailaputri, the mountain goddess who begins the sacred Navratri journey.',
    type: 'website',
  }
}

export default function ShailaputriPage() {
  const goddess = {
    name: "Shailaputri",
    sanskrit: "शैलपुत्री",
    meaning: "Daughter of the Mountain",
    day: 1,
    color: "Red",
    chakra: "Muladhara (Root Chakra)",
    element: "Earth",
    mantra: "ॐ देवी शैलपुत्र्यै नमः",
    mantraTransliteration: "Om Devi Shailaputryai Namah",
    beejMantra: "ॐ लं श्रीं शैलपुत्र्यै नमः",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop"
  }

  const iconography = [
    {
      element: "Bull (Nandi)",
      significance: "Her mount represents righteousness, strength, and determination. Nandi symbolizes the disciplined mind needed for spiritual progress."
    },
    {
      element: "Trident (Trishul)",
      significance: "Represents the three fundamental forces - creation, preservation, destruction - and control over the three gunas (qualities of nature)."
    },
    {
      element: "Lotus Flower",
      significance: "Symbol of purity, spiritual awakening, and the blooming of consciousness despite being rooted in earthly existence."
    },
    {
      element: "Red Attire",
      significance: "Represents passion, energy, and the life force. Red is the color of the root chakra, grounding spiritual energy."
    },
    {
      element: "Young Appearance",
      significance: "Symbolizes the fresh beginning of spiritual journey and the innocence required to start the path of self-realization."
    }
  ]

  const mythology = [
    {
      title: "Reincarnation of Sati",
      content: "Shailaputri is the reincarnation of Goddess Sati, who immolated herself due to her father Daksha's insult to Lord Shiva. She was reborn as the daughter of Himavat (the Mountain King), hence the name Shailaputri - daughter of the mountain."
    },
    {
      title: "Marriage to Shiva",
      content: "In her previous life as Sati, she had chosen Shiva as her husband against her father's wishes. As Shailaputri, she was destined to marry Shiva again, demonstrating the eternal bond between Shiva and Shakti that transcends birth and death."
    },
    {
      title: "Foundation of Spiritual Journey",
      content: "Shailaputri represents the very beginning of spiritual consciousness. Just as mountains are the foundation of the earth, she provides the stable foundation upon which the entire spiritual journey of the nine days is built."
    }
  ]

  const spiritualSignificance = [
    {
      aspect: "Root Chakra Activation",
      meaning: "Shailaputri governs the Muladhara chakra, the foundation of the subtle energy system. Her worship awakens the kundalini energy and establishes a strong spiritual foundation."
    },
    {
      aspect: "Grounding Energy",
      meaning: "As the daughter of mountains, she provides stability and grounding. She teaches devotees to be rooted in their spiritual practice while aspiring for higher consciousness."
    },
    {
      aspect: "Natural Connection",
      meaning: "She represents the divine feminine energy inherent in nature, particularly mountains. Her worship connects devotees with the primordial earth energy and natural wisdom."
    },
    {
      aspect: "Innocence and Purity",
      meaning: "Shailaputri embodies the innocent, pure love that is essential for spiritual growth. She teaches that spiritual journey begins with childlike devotion and trust."
    },
    {
      aspect: "Strength and Stability",
      meaning: "Like mountains that remain unmoved by storms, she grants inner strength and stability to face life's challenges with equanimity and determination."
    }
  ]

  const rituals = [
    {
      practice: "Red Color Worship",
      description: "Devotees wear red clothes and offer red flowers, symbolizing the life force energy and passion for spiritual growth."
    },
    {
      practice: "Ghatasthapana",
      description: "The sacred pot installation ceremony begins on this day, marking the formal invocation of the goddess for the nine-day journey."
    },
    {
      practice: "Mountain Meditation",
      description: "Meditating on mountain imagery helps devotees connect with Shailaputri's stable, grounding energy and develop inner strength."
    },
    {
      practice: "Root Chakra Activation",
      description: "Special prayers and visualizations focused on the base of the spine help activate the Muladhara chakra and awaken dormant spiritual energy."
    }
  ]

  const mantras = [
    {
      mantra: "ॐ देवी शैलपुत्र्यै नमः",
      transliteration: "Om Devi Shailaputryai Namah",
      meaning: "Salutations to Goddess Shailaputri",
      benefits: "This simple yet powerful mantra invokes the blessings of the mountain goddess for strength, stability, and spiritual foundation."
    },
    {
      mantra: "ॐ लं श्रीं शैलपुत्र्यै नमः",
      transliteration: "Om Lam Shreem Shailaputryai Namah",
      meaning: "Om, with the root chakra seed sound and prosperity, salutations to Shailaputri",
      benefits: "This beej mantra specifically activates the root chakra while invoking prosperity and spiritual growth."
    },
    {
      mantra: "वन्दे वाञ्छितलाभाय चन्द्रार्धकृतशेखराम्। वृषारूढां शूलधरां शैलपुत्रीं यशस्विनीम्॥",
      transliteration: "Vande Vaanchitalabhaya Chandrardhakritashekharam, Vrisharudham Shuladharam Shailaputreem Yashasvineem",
      meaning: "I bow to the glorious Shailaputri, fulfiller of desires, adorned with crescent moon, riding the bull, holding the trident",
      benefits: "This complete verse invokes all aspects of Shailaputri for fulfillment of righteous desires and spiritual progress."
    }
  ]

  const lessons = [
    {
      teaching: "Begin with Strong Foundation",
      application: "Just as a mountain provides unshakeable foundation, spiritual journey must begin with establishing strong roots in ethical conduct and devotion."
    },
    {
      teaching: "Embrace Natural Simplicity",
      application: "Shailaputri teaches the beauty of natural, uncomplicated devotion. Spiritual growth flourishes in simplicity, not complexity."
    },
    {
      teaching: "Develop Inner Stability",
      application: "Like mountains that remain unmoved by external changes, cultivate inner stability that remains constant through life's ups and downs."
    },
    {
      teaching: "Honor the Feminine Principle",
      application: "She embodies the nurturing, grounding aspect of divine feminine energy that supports all spiritual growth and manifestation."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-pink-50">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/deities/durga"
              className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to Maa Durga
            </Link>
            <div className="text-sm text-gray-500">
              Day {goddess.day} of Navratri
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 via-orange-600 to-pink-600 text-white py-20">
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

              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-red-100">
                {goddess.name}
              </h2>

              <p className="text-xl text-orange-100 mb-8">
                {goddess.meaning} - The foundation of spiritual practice and divine grounding energy
              </p>

              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  🔴 {goddess.color}
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  🌍 {goddess.element}
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  ⚡ {goddess.chakra}
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
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
          <h2 className="text-4xl font-bold text-center text-red-800 mb-12">Sacred Iconography</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iconography.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-red-700 mb-3">{item.element}</h3>
                <p className="text-gray-700 leading-relaxed">{item.significance}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mythology */}
        <section className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-12">Sacred Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mythology.map((story, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-orange-700 mb-4">{story.title}</h3>
                <p className="text-gray-700 leading-relaxed">{story.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Spiritual Significance */}
        <section>
          <h2 className="text-4xl font-bold text-center text-red-800 mb-12">Spiritual Significance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {spiritualSignificance.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-700 mb-3">{item.aspect}</h3>
                <p className="text-gray-700 leading-relaxed">{item.meaning}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Rituals and Practices */}
        <section className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-12">Rituals & Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rituals.map((ritual, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-orange-700 mb-3">{ritual.practice}</h3>
                <p className="text-gray-700 leading-relaxed">{ritual.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sacred Mantras */}
        <section>
          <h2 className="text-4xl font-bold text-center text-red-800 mb-12">Sacred Mantras</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mantras.map((mantra, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-red-800 mb-3">{mantra.mantra}</h3>
                  <p className="text-orange-600 font-medium mb-2">{mantra.transliteration}</p>
                  <p className="text-gray-700 italic">{mantra.meaning}</p>
                </div>
                <div className="border-t border-red-200 pt-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{mantra.benefits}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spiritual Lessons */}
        <section className="bg-gradient-to-r from-red-100 to-pink-100 rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-12">Spiritual Lessons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lessons.map((lesson, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-red-700 mb-3">{lesson.teaching}</h3>
                <p className="text-gray-700 leading-relaxed">{lesson.application}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation to Next Form */}
        <section className="text-center py-12">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Continue the Sacred Journey</h3>
            <p className="text-lg mb-6">
              Having established the foundation with Shailaputri, proceed to the second day of Navratri
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/deities/durga/brahmacharini"
                className="px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
              >
                Next: Brahmacharini →
              </Link>
              <Link
                href="/festivals/navratri"
                className="px-8 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-400 transition-colors"
              >
                Navratri Festival Guide
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}