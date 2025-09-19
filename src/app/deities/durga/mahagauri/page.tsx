import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Mahagauri - Eighth Form of Maa Durga | Pure Radiant One | PeacefulAnswers',
  description: 'Discover Mahagauri, the eighth form of Navadurga worshipped on Day 8 of Navratri. Learn about her pure radiance, complete chakra alignment, and power of spiritual purification.',
  keywords: 'Mahagauri, Navadurga, Eighth form of Durga, Pure Radiant One, Day 8 Navratri, All Chakras, Spiritual purification, White goddess, Bull mount',
  openGraph: {
    title: 'Mahagauri - Eighth Form of Maa Durga | Pure Radiant One',
    description: 'Explore Mahagauri, the supremely pure goddess who radiates divine light and grants complete spiritual purification.',
    type: 'website',
  }
}

export default function MahagauriPage() {
  const goddess = {
    name: "Mahagauri",
    sanskrit: "महागौरी",
    meaning: "The Extremely Fair/Pure One",
    day: 8,
    color: "Pink",
    chakra: "All Chakras (Complete Alignment)",
    element: "Pure Light/Divine Radiance",
    mantra: "ॐ देवी महागौर्यै नमः",
    mantraTransliteration: "Om Devi Mahagauryai Namah",
    beejMantra: "ॐ श्रीं क्लीं महागौर्यै नमः",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop"
  }

  const iconography = [
    {
      element: "Brilliant White Complexion",
      significance: "Her radiant white skin represents absolute purity, spiritual cleanliness, and the light of divine consciousness that illuminates all existence."
    },
    {
      element: "White Bull (Vrishabha)",
      significance: "Her mount, the white bull, represents dharma, righteousness, and the strength that comes from pure living. It symbolizes controlled power and spiritual authority."
    },
    {
      element: "Four Divine Arms",
      significance: "Her four arms represent mastery over all four directions and aspects of existence - physical, mental, emotional, and spiritual realms."
    },
    {
      element: "Abhaya Mudra",
      significance: "Her right hand in the gesture of fearlessness grants protection and courage to devotees, assuring them of safety under her divine grace."
    },
    {
      element: "Trishul (Trident)",
      significance: "The trident represents the three gunas (qualities of nature) and the three aspects of time - past, present, and future - over which she has complete mastery."
    },
    {
      element: "Damaru (Drum)",
      significance: "The sacred drum represents the primordial sound of creation and the rhythm of cosmic life. Its beats regulate the heartbeat of the universe."
    }
  ]

  const mythology = [
    {
      title: "Transformation from Kalaratri",
      content: "After the fierce darkness of Kalaratri, Mahagauri emerges as the embodiment of purification and radiance. She represents the dawn after the darkest night, showing that divine light always follows spiritual trials."
    },
    {
      title: "The Great Penance Purification",
      content: "Legend tells that Parvati performed such intense penance that her body became dark from the accumulated heat. When Shiva poured the sacred Ganges water over her, she became Mahagauri - radiantly white and pure."
    },
    {
      title: "Bestower of Infinite Grace",
      content: "Mahagauri is known for her boundless compassion and grace. She fulfills the righteous desires of devotees and grants them spiritual prosperity, health, and happiness."
    },
    {
      title: "Cleanser of Sins",
      content: "Her pure radiance has the power to cleanse all sins and negative karma. Devotees who worship her with sincere devotion are freed from the bondage of past actions and spiritual impurities."
    }
  ]

  const spiritualSignificance = [
    {
      aspect: "Complete Chakra Alignment",
      meaning: "Mahagauri represents the perfect alignment of all seven chakras, creating a clear channel for divine energy to flow throughout the spiritual system."
    },
    {
      aspect: "Spiritual Purification",
      meaning: "She embodies the highest form of spiritual cleansing, removing all impurities from consciousness and establishing the devotee in pristine spiritual awareness."
    },
    {
      aspect: "Divine Radiance",
      meaning: "Her luminous presence represents the inner light of awakened consciousness that shines forth when the spiritual heart is completely purified."
    },
    {
      aspect: "Compassionate Grace",
      meaning: "She represents divine grace that flows unconditionally to those who seek spiritual elevation, regardless of their past mistakes or limitations."
    },
    {
      aspect: "Restoration of Innocence",
      meaning: "Through her blessings, devotees regain the spiritual innocence and purity that is their true nature, returning to their original divine state."
    },
    {
      aspect: "Integration of Polarities",
      meaning: "After experiencing the extreme darkness of Kalaratri, she represents the integration of all dualities into unified spiritual consciousness."
    }
  ]

  const rituals = [
    {
      practice: "Pink Color Worship",
      description: "Devotees wear pink or white clothes and offer pink lotus, white jasmine, and rose flowers to connect with her pure, loving energy."
    },
    {
      practice: "Full Chakra Meditation",
      description: "Complete chakra alignment meditation, visualizing pure white light flowing through all energy centers, harmonizing the entire spiritual system."
    },
    {
      practice: "Purification Rituals",
      description: "Special ceremonies for spiritual cleansing including sacred baths, mantra repetition, and offerings of pure substances like milk, honey, and white sweets."
    },
    {
      practice: "Gratitude and Surrender",
      description: "Expressing deep gratitude for spiritual progress and completely surrendering to divine will, acknowledging her grace in the transformation process."
    },
    {
      practice: "Service to Pure Hearts",
      description: "Serving those who are pure of heart, especially children, elderly, and spiritually inclined persons, as a way of honoring her pure nature."
    }
  ]

  const mantras = [
    {
      mantra: "ॐ देवी महागौर्यै नमः",
      transliteration: "Om Devi Mahagauryai Namah",
      meaning: "Salutations to Goddess Mahagauri",
      benefits: "This fundamental mantra invokes the pure goddess for spiritual cleansing, divine grace, and complete purification of consciousness."
    },
    {
      mantra: "ॐ श्रीं क्लीं महागौर्यै नमः",
      transliteration: "Om Shreem Kleem Mahagauryai Namah",
      meaning: "Om, with prosperity and desire-fulfilling seed sounds, salutations to Mahagauri",
      benefits: "This beej mantra aligns all chakras while invoking divine grace, prosperity, and the fulfillment of pure desires."
    },
    {
      mantra: "श्वेते वृषे समारुढा श्वेताम्बरधरा शुचिः। महागौरी शुभं दद्यान्महादेव प्रमोदिनी॥",
      transliteration: "Shwete Vrishe Samarudha Shwetambaradhara Shuchih, Mahagauri Shubham Dadyan Mahadeva Pramodini",
      meaning: "Riding the white bull, wearing white garments, pure one, may Mahagauri who delights Mahadeva grant auspiciousness",
      benefits: "This verse invokes her complete divine qualities for blessings, purity, and spiritual auspiciousness in all endeavors."
    },
    {
      mantra: "या देवी सर्वभूतेषु माँ महागौरी रूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥",
      transliteration: "Ya Devi Sarvabhuteshu Ma Mahagauri Rupena Samsthita, Namastasyai Namastasyai Namastasyai Namo Namah",
      meaning: "The goddess who resides in all beings as Mahagauri, salutations to her again and again",
      benefits: "This universal mantra recognizes the pure divine light present in all existence and awakens inner radiance."
    }
  ]

  const lessons = [
    {
      teaching: "Embrace Spiritual Purification",
      application: "Welcome the process of spiritual cleansing, even when it requires releasing attachments or comfortable habits. Purification leads to divine radiance."
    },
    {
      teaching: "Maintain Inner Purity",
      application: "Cultivate purity in thoughts, words, and actions. Keep your inner sanctuary clean and sacred, allowing divine light to shine through unobstructed."
    },
    {
      teaching: "Radiate Compassionate Love",
      application: "Like Mahagauri's radiant white light, let your love and compassion shine forth to illuminate the darkness in others' lives."
    },
    {
      teaching: "Trust in Divine Grace",
      application: "Have faith that divine grace is always available to those who sincerely seek spiritual growth. Grace can transform even the darkest situations into light."
    },
    {
      teaching: "Practice Unconditional Forgiveness",
      application: "Forgive yourself and others completely. True spiritual purity comes from releasing all resentment and embracing universal love."
    },
    {
      teaching: "Integrate Spiritual Experiences",
      application: "After intense spiritual experiences or dark nights of the soul, integrate the lessons learned and allow them to transform you into a more radiant being."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-white">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/deities/durga"
              className="inline-flex items-center text-gray-600 hover:text-pink-600 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to Maa Durga
            </Link>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <Link href="/deities/durga/kalaratri" className="hover:text-pink-600">← Kalaratri</Link>
              <span>Day {goddess.day} of Navratri</span>
              <Link href="/deities/durga/siddhidatri" className="hover:text-pink-600">Siddhidatri →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-600 via-rose-500 to-white text-gray-800 py-20">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium text-gray-700">Day {goddess.day} • {goddess.chakra}</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800">
                {goddess.sanskrit}
              </h1>

              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-pink-700">
                {goddess.name}
              </h2>

              <p className="text-xl text-gray-700 mb-8">
                {goddess.meaning} - The supremely pure goddess who radiates divine light and grants spiritual purification
              </p>

              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white/30 rounded-full text-sm font-medium text-gray-700">
                  🌸 {goddess.color}
                </span>
                <span className="px-4 py-2 bg-white/30 rounded-full text-sm font-medium text-gray-700">
                  ✨ {goddess.element}
                </span>
                <span className="px-4 py-2 bg-white/30 rounded-full text-sm font-medium text-gray-700">
                  🌈 {goddess.chakra}
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-pink-200/50 to-white/50 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/30">
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
          <h2 className="text-4xl font-bold text-center text-pink-800 mb-12">Sacred Iconography</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iconography.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-pink-500">
                <h3 className="text-xl font-bold text-pink-700 mb-3">{item.element}</h3>
                <p className="text-gray-700 leading-relaxed">{item.significance}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mythology */}
        <section className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-center text-pink-800 mb-12">Sacred Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mythology.map((story, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-rose-700 mb-4">{story.title}</h3>
                <p className="text-gray-700 leading-relaxed">{story.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Spiritual Significance */}
        <section>
          <h2 className="text-4xl font-bold text-center text-pink-800 mb-12">Spiritual Significance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {spiritualSignificance.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-rose-500">
                <h3 className="text-xl font-bold text-rose-700 mb-3">{item.aspect}</h3>
                <p className="text-gray-700 leading-relaxed">{item.meaning}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Rituals and Practices */}
        <section className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-center text-pink-800 mb-12">Rituals & Worship</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rituals.map((ritual, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-3">{ritual.practice}</h3>
                <p className="text-gray-700 leading-relaxed">{ritual.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sacred Mantras */}
        <section>
          <h2 className="text-4xl font-bold text-center text-pink-800 mb-12">Sacred Mantras</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mantras.map((mantra, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-pink-800 mb-3">{mantra.mantra}</h3>
                  <p className="text-rose-600 font-medium mb-2">{mantra.transliteration}</p>
                  <p className="text-gray-700 italic">{mantra.meaning}</p>
                </div>
                <div className="border-t border-pink-200 pt-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{mantra.benefits}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spiritual Lessons */}
        <section className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-center text-pink-800 mb-12">Spiritual Lessons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lessons.map((lesson, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-pink-500">
                <h3 className="text-xl font-bold text-pink-700 mb-3">{lesson.teaching}</h3>
                <p className="text-gray-700 leading-relaxed">{lesson.application}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center py-12">
          <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Continue the Sacred Journey</h3>
            <p className="text-lg mb-6">
              Having achieved spiritual purification and divine radiance, proceed to the final day of Navratri
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/deities/durga/kalaratri"
                className="px-8 py-4 bg-white text-pink-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
              >
                ← Previous: Kalaratri
              </Link>
              <Link
                href="/deities/durga/siddhidatri"
                className="px-8 py-4 bg-rose-500 text-white font-bold rounded-xl hover:bg-rose-400 transition-colors"
              >
                Next: Siddhidatri →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}