import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Skandamata - Fifth Form of Maa Durga | Mother of Skanda | PeacefulAnswers',
  description: 'Discover Skandamata, the fifth form of Navadurga worshipped on Day 5 of Navratri. Learn about her maternal love, throat chakra connection, and divine protection.',
  keywords: 'Skandamata, Navadurga, Fifth form of Durga, Mother of Skanda, Day 5 Navratri, Vishuddha Chakra, Throat Chakra, Maternal love, Lion mount',
  openGraph: {
    title: 'Skandamata - Fifth Form of Maa Durga | Mother of Skanda',
    description: 'Explore Skandamata, the loving mother goddess who embodies divine maternal energy and protection.',
    type: 'website',
  }
}

export default function SkandamataPage() {
  const goddess = {
    name: "Skandamata",
    sanskrit: "स्कन्दमाता",
    meaning: "Mother of Skanda (Kartikeya)",
    day: 5,
    color: "White",
    chakra: "Vishuddha (Throat Chakra)",
    element: "Space/Ether",
    mantra: "ॐ देवी स्कन्दमातायै नमः",
    mantraTransliteration: "Om Devi Skandamatayai Namah",
    beejMantra: "ॐ हं श्रीं स्कन्दमातायै नमः",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop"
  }

  const iconography = [
    {
      element: "Lion Mount",
      significance: "Represents courage, fearlessness, and royal power. The lion symbolizes the fierce protective instinct of motherhood and divine authority."
    },
    {
      element: "Baby Skanda (Kartikeya)",
      significance: "Holding her infant son represents divine motherhood, nurturing love, and the protective aspect of the feminine divine. Skanda represents spiritual warrior energy."
    },
    {
      element: "Four Arms",
      significance: "Her four arms represent the four directions and her ability to protect devotees from all sides. Each hand holds symbols of blessing and protection."
    },
    {
      element: "Lotus Flowers",
      significance: "The lotus in her hands represents purity, spiritual growth, and the blossoming of consciousness under divine maternal care."
    },
    {
      element: "White Attire",
      significance: "Pure white clothing symbolizes peace, purity, knowledge, and the sattvic quality of divine motherhood. White represents spiritual wisdom and compassion."
    },
    {
      element: "Serene Maternal Expression",
      significance: "Her peaceful, loving expression embodies unconditional maternal love, compassion, and the nurturing aspect of divine consciousness."
    }
  ]

  const mythology = [
    {
      title: "Birth of Kartikeya",
      content: "Skandamata gave birth to Kartikeya (Skanda), the commander of divine forces. Born to defeat the demon Tarakasura, Kartikeya represents the spiritual warrior who conquers evil and ignorance."
    },
    {
      title: "Divine Mother's Protection",
      content: "As Skandamata, she protected her divine son and guided him in his cosmic mission. Her maternal love provided Kartikeya with the strength and wisdom needed to fulfill his dharmic duty."
    },
    {
      title: "Bestower of Wisdom",
      content: "Through her throat chakra association, she grants the power of righteous speech, wisdom, and knowledge. She teaches devotees to speak truth with compassion and use words for healing."
    },
    {
      title: "Ocean of Maternal Love",
      content: "Her love is compared to an infinite ocean that never diminishes. She represents the unconditional, selfless love that seeks nothing in return but the welfare of all beings."
    }
  ]

  const spiritualSignificance = [
    {
      aspect: "Throat Chakra Activation",
      meaning: "Skandamata governs Vishuddha chakra, the center of communication, expression, and truth. Her worship purifies speech and enhances spiritual communication."
    },
    {
      aspect: "Divine Motherhood",
      meaning: "She embodies the highest form of maternal love - unconditional, selfless, and nurturing. She teaches the sacred art of loving without attachment to results."
    },
    {
      aspect: "Protective Energy",
      meaning: "Her fierce protective nature shields devotees from negative influences, harmful energies, and spiritual obstacles. She creates a safe space for spiritual growth."
    },
    {
      aspect: "Nurturing Wisdom",
      meaning: "She represents wisdom that comes through nurturing and caring. Her energy helps develop compassionate understanding and empathetic intelligence."
    },
    {
      aspect: "Purification of Expression",
      meaning: "Through throat chakra governance, she purifies speech, ensuring that words carry divine energy, truth, and healing power rather than harm or negativity."
    },
    {
      aspect: "Balance of Strength and Gentleness",
      meaning: "She demonstrates how to be both powerful and gentle, fierce in protection yet tender in love. This balance is essential for spiritual leadership."
    }
  ]

  const rituals = [
    {
      practice: "White Color Worship",
      description: "Devotees wear white clothes and offer white flowers, particularly jasmine and lilies, to connect with her pure, peaceful energy and maternal blessings."
    },
    {
      practice: "Throat Chakra Meditation",
      description: "Focusing on the throat center while chanting her mantras, visualizing blue light purifying speech and enhancing truthful communication."
    },
    {
      practice: "Maternal Compassion Practice",
      description: "Cultivating motherly love towards all beings, practicing forgiveness, and developing nurturing qualities in daily interactions."
    },
    {
      practice: "Sacred Chanting",
      description: "Engaging in melodious chanting of her mantras and devotional songs, using the purified throat chakra for spiritual expression."
    },
    {
      practice: "Child Blessing Ritual",
      description: "Special prayers for children's welfare, education, and spiritual growth, seeking her maternal protection and guidance for young ones."
    }
  ]

  const mantras = [
    {
      mantra: "ॐ देवी स्कन्दमातायै नमः",
      transliteration: "Om Devi Skandamatayai Namah",
      meaning: "Salutations to Goddess Skandamata",
      benefits: "This fundamental mantra invokes the divine mother's blessings for protection, nurturing love, and maternal guidance in spiritual growth."
    },
    {
      mantra: "ॐ हं श्रीं स्कन्दमातायै नमः",
      transliteration: "Om Ham Shreem Skandamatayai Namah",
      meaning: "Om, with throat chakra seed sound and prosperity, salutations to Skandamata",
      benefits: "This beej mantra activates the throat chakra while invoking divine speech, wisdom, and maternal prosperity."
    },
    {
      mantra: "सिंहासनगता नित्यं पद्माञ्चित करद्वया। शुभदास्तु सदा देवी स्कन्दमाता यशस्विनी॥",
      transliteration: "Simhasanagata Nityam Padmanchita Karadvaya, Shubhadastu Sada Devi Skandamata Yashasvini",
      meaning: "Eternally seated on the lion, lotus in both hands, may the glorious Skandamata always bestow auspiciousness",
      benefits: "This verse invokes the complete divine qualities of Skandamata for continuous blessings and spiritual protection."
    },
    {
      mantra: "या देवी सर्वभूतेषु माँ स्कन्दमाता रूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥",
      transliteration: "Ya Devi Sarvabhuteshu Ma Skandamata Rupena Samsthita, Namastasyai Namastasyai Namastasyai Namo Namah",
      meaning: "The goddess who resides in all beings as Skandamata, salutations to her again and again",
      benefits: "This universal mantra recognizes the maternal divine energy present in all existence and awakens compassionate love."
    }
  ]

  const lessons = [
    {
      teaching: "Unconditional Love",
      application: "Practice loving without conditions or expectations. True spiritual love, like a mother's love, seeks the highest good of others without seeking anything in return."
    },
    {
      teaching: "Protective Compassion",
      application: "Develop the strength to protect what is good and innocent while maintaining compassion even towards those who cause harm. Balance firmness with kindness."
    },
    {
      teaching: "Nurturing Growth",
      application: "Support the spiritual growth of others through patient guidance, encouragement, and creating safe spaces for learning and development."
    },
    {
      teaching: "Pure Communication",
      application: "Use speech as a tool for healing, teaching, and uplifting. Ensure that words carry divine energy and contribute to harmony rather than conflict."
    },
    {
      teaching: "Selfless Service",
      application: "Engage in service that expects no recognition or reward. Find joy in supporting others' success and well-being, especially those who are vulnerable."
    },
    {
      teaching: "Wisdom in Guidance",
      application: "When guiding others, speak from wisdom and love rather than ego or judgment. Help others discover their own inner strength and divine nature."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50">
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
              <Link href="/deities/durga/kushmanda" className="hover:text-blue-600">← Kushmanda</Link>
              <span>Day {goddess.day} of Navratri</span>
              <Link href="/deities/durga/katyayani" className="hover:text-blue-600">Katyayani →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 text-white py-20">
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
                {goddess.meaning} - The divine mother who embodies unconditional love and protection
              </p>

              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  ⚪ {goddess.color}
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  🌌 {goddess.element}
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  💙 {goddess.chakra}
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

        {/* Spiritual Lessons */}
        <section className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-8">
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
              Having embraced divine motherhood and pure communication, proceed to the sixth day of Navratri
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/deities/durga/kushmanda"
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
              >
                ← Previous: Kushmanda
              </Link>
              <Link
                href="/deities/durga/katyayani"
                className="px-8 py-4 bg-indigo-500 text-white font-bold rounded-xl hover:bg-indigo-400 transition-colors"
              >
                Next: Katyayani →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}