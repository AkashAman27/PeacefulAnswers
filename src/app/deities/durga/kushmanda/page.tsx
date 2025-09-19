import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Kushmanda - Fourth Form of Maa Durga | Creator of Universe | PeacefulAnswers',
  description: 'Discover Kushmanda, the fourth form of Navadurga worshipped on Day 4 of Navratri. Learn about her cosmic powers, heart chakra connection, and role as creator of the universe.',
  keywords: 'Kushmanda, Navadurga, Fourth form of Durga, Creator of Universe, Day 4 Navratri, Anahata Chakra, Heart Chakra, Cosmic Energy, Tiger mount',
  openGraph: {
    title: 'Kushmanda - Fourth Form of Maa Durga | Creator of Universe',
    description: 'Explore Kushmanda, the radiant goddess who created the universe with her divine smile and illuminates the cosmic energy.',
    type: 'website',
  }
}

export default function KushmandaPage() {
  const goddess = {
    name: "Kushmanda",
    sanskrit: "कूष्माण्डा",
    meaning: "Creator of the Universe / The One who creates cosmic egg",
    day: 4,
    color: "Orange",
    chakra: "Anahata (Heart Chakra)",
    element: "Air/Space",
    mantra: "ॐ देवी कूष्माण्डायै नमः",
    mantraTransliteration: "Om Devi Kushmandayai Namah",
    beejMantra: "ॐ यं श्रीं कूष्माण्डायै नमः",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop"
  }

  const iconography = [
    {
      element: "Tiger (Tigress)",
      significance: "Her mount represents courage, power, and royal authority. The tiger symbolizes the fierce determination needed to create and sustain the universe."
    },
    {
      element: "Eight Arms (Ashta-bhuja)",
      significance: "Represents her control over all eight directions and cosmic forces. Each hand holds divine weapons showing her omnipotent creative power."
    },
    {
      element: "Radiant Smile",
      significance: "Her gentle smile created the universe. It represents the joy and bliss inherent in creation and the divine happiness that sustains all existence."
    },
    {
      element: "Kamandalu (Water Pot)",
      significance: "Contains the nectar of immortality and the primordial waters from which life emerges. Symbolizes the source of all creation."
    },
    {
      element: "Lotus Flowers",
      significance: "Multiple lotus flowers represent the blooming of consciousness in all beings and the beauty that emerges from divine creation."
    },
    {
      element: "Golden Aura",
      significance: "Her luminous golden radiance illuminates the entire cosmos, representing the divine light that sustains all life and consciousness."
    }
  ]

  const mythology = [
    {
      title: "Creator of the Cosmic Egg",
      content: "Kushmanda created the entire universe with her divine smile. When there was nothing but darkness, her gentle laughter produced the cosmic egg (Brahmanda) from which all creation emerged. She is the source of all energy and light in the universe."
    },
    {
      title: "Dweller in the Sun",
      content: "She resides in the core of the Sun and provides energy to the solar system. Her radiance gives the Sun its power to sustain life on Earth. She is the cosmic energy that powers all celestial bodies."
    },
    {
      title: "Provider of Cosmic Order",
      content: "After creating the universe, she established the cosmic laws and natural order. She ensures the proper functioning of time, space, and natural cycles that govern all existence."
    },
    {
      title: "Bestower of Health and Wealth",
      content: "Known for her ability to cure diseases and bestow prosperity, she removes all forms of suffering and grants both material and spiritual abundance to her devotees."
    }
  ]

  const spiritualSignificance = [
    {
      aspect: "Heart Chakra Activation",
      meaning: "Kushmanda governs Anahata chakra, the center of love, compassion, and emotional balance. Her worship opens the heart to universal love and cosmic consciousness."
    },
    {
      aspect: "Cosmic Consciousness",
      meaning: "She represents the expanded awareness that perceives the unity underlying all creation. Her energy helps devotees realize their connection to the cosmic whole."
    },
    {
      aspect: "Creative Power",
      meaning: "As the creator of universe, she embodies the divine creative force within all beings. She awakens the creative potential and innovative capabilities in devotees."
    },
    {
      aspect: "Inner Radiance",
      meaning: "Her luminous nature represents the inner light of consciousness that illuminates wisdom and dispels ignorance. She kindles the divine spark within."
    },
    {
      aspect: "Healing Energy",
      meaning: "Her benevolent nature provides healing on all levels - physical, emotional, and spiritual. She restores balance and harmony in life."
    },
    {
      aspect: "Abundance and Prosperity",
      meaning: "She governs the principle of divine abundance, teaching that the universe is inherently abundant and generous to all beings."
    }
  ]

  const rituals = [
    {
      practice: "Orange Color Worship",
      description: "Devotees wear orange clothes and offer orange flowers, marigolds, and saffron to connect with her vibrant creative energy and cosmic radiance."
    },
    {
      practice: "Sun Salutation",
      description: "Performing Surya Namaskara while chanting her mantras, acknowledging her presence in the Sun and receiving cosmic energy."
    },
    {
      practice: "Heart Chakra Meditation",
      description: "Focusing on the heart center while visualizing golden light expanding throughout the body and connecting with universal love."
    },
    {
      practice: "Creative Expression",
      description: "Engaging in artistic activities, music, or creative pursuits as a form of worship, honoring the creative force she represents."
    },
    {
      practice: "Pumpkin and Sweet Offerings",
      description: "Offering pumpkins (kushmanda), sweets, and fruits that represent abundance and the sweetness of divine creation."
    }
  ]

  const mantras = [
    {
      mantra: "ॐ देवी कूष्माण्डायै नमः",
      transliteration: "Om Devi Kushmandayai Namah",
      meaning: "Salutations to Goddess Kushmanda",
      benefits: "This fundamental mantra invokes the creator goddess for cosmic awareness, creative power, and divine illumination."
    },
    {
      mantra: "ॐ यं श्रीं कूष्माण्डायै नमः",
      transliteration: "Om Yam Shreem Kushmandayai Namah",
      meaning: "Om, with heart chakra seed sound and prosperity, salutations to Kushmanda",
      benefits: "This beej mantra activates the heart chakra while invoking abundance, creativity, and cosmic consciousness."
    },
    {
      mantra: "सुरासम्पूर्णकलशं रुधिराप्लुतमेव च। दधाना हस्तपद्माभ्यां कूष्माण्डा शुभदास्तु मे॥",
      transliteration: "Surasampurnakalsham Rudhiraplutameva Cha, Dadhana Hastapadmabhyam Kushmanda Shubhadastu Me",
      meaning: "Holding the nectar-filled pot in her lotus hands, may Kushmanda bestow auspiciousness upon me",
      benefits: "This verse invokes the complete blessings of Kushmanda for health, prosperity, and spiritual elevation."
    },
    {
      mantra: "या देवी सर्वभूतेषु माँ कूष्माण्डा रूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥",
      transliteration: "Ya Devi Sarvabhuteshu Ma Kushmanda Rupena Samsthita, Namastasyai Namastasyai Namastasyai Namo Namah",
      meaning: "The goddess who resides in all beings as Kushmanda, salutations to her again and again",
      benefits: "This universal mantra recognizes the creative cosmic energy present in all existence and invokes its awakening."
    }
  ]

  const lessons = [
    {
      teaching: "Create with Divine Joy",
      application: "Approach all creative endeavors with joy and enthusiasm. True creation emerges from a place of happiness and divine inspiration, not struggle or force."
    },
    {
      teaching: "Illuminate from Within",
      application: "Like Kushmanda's radiance, develop your inner light through spiritual practice. Let this inner illumination guide your actions and inspire others."
    },
    {
      teaching: "Embrace Cosmic Responsibility",
      application: "Recognize that your actions affect the entire cosmic web of existence. Take responsibility for contributing positively to the universal harmony."
    },
    {
      teaching: "Balance Power with Compassion",
      application: "True power lies in creation and nurturing, not destruction. Use your abilities to build, heal, and support rather than to dominate or harm."
    },
    {
      teaching: "Trust in Divine Abundance",
      application: "The universe is inherently abundant. Trust in this abundance and share generously, knowing that giving creates more flow of prosperity."
    },
    {
      teaching: "Maintain Cosmic Perspective",
      application: "In times of difficulty, remember your connection to the vast cosmos. This broader perspective helps maintain equanimity and wisdom."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/deities/durga"
              className="inline-flex items-center text-gray-600 hover:text-orange-600 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to Maa Durga
            </Link>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <Link href="/deities/durga/chandraghanta" className="hover:text-orange-600">← Chandraghanta</Link>
              <span>Day {goddess.day} of Navratri</span>
              <Link href="/deities/durga/skandamata" className="hover:text-orange-600">Skandamata →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white py-20">
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

              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-orange-100">
                {goddess.name}
              </h2>

              <p className="text-xl text-amber-100 mb-8">
                {goddess.meaning} - The radiant goddess who creates and sustains cosmic energy
              </p>

              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  🟠 {goddess.color}
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  🌌 {goddess.element}
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  💚 {goddess.chakra}
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
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
          <h2 className="text-4xl font-bold text-center text-orange-800 mb-12">Sacred Iconography</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iconography.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-700 mb-3">{item.element}</h3>
                <p className="text-gray-700 leading-relaxed">{item.significance}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mythology */}
        <section className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-center text-orange-800 mb-12">Sacred Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mythology.map((story, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-amber-700 mb-4">{story.title}</h3>
                <p className="text-gray-700 leading-relaxed">{story.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Spiritual Significance */}
        <section>
          <h2 className="text-4xl font-bold text-center text-orange-800 mb-12">Spiritual Significance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {spiritualSignificance.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-amber-500">
                <h3 className="text-xl font-bold text-amber-700 mb-3">{item.aspect}</h3>
                <p className="text-gray-700 leading-relaxed">{item.meaning}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Rituals and Practices */}
        <section className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-center text-orange-800 mb-12">Rituals & Worship</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rituals.map((ritual, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-yellow-700 mb-3">{ritual.practice}</h3>
                <p className="text-gray-700 leading-relaxed">{ritual.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sacred Mantras */}
        <section>
          <h2 className="text-4xl font-bold text-center text-orange-800 mb-12">Sacred Mantras</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mantras.map((mantra, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-orange-800 mb-3">{mantra.mantra}</h3>
                  <p className="text-amber-600 font-medium mb-2">{mantra.transliteration}</p>
                  <p className="text-gray-700 italic">{mantra.meaning}</p>
                </div>
                <div className="border-t border-orange-200 pt-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{mantra.benefits}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spiritual Lessons */}
        <section className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-center text-orange-800 mb-12">Spiritual Lessons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lessons.map((lesson, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-700 mb-3">{lesson.teaching}</h3>
                <p className="text-gray-700 leading-relaxed">{lesson.application}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center py-12">
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Continue the Sacred Journey</h3>
            <p className="text-lg mb-6">
              Having awakened cosmic consciousness and creative power, proceed to the fifth day of Navratri
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/deities/durga/chandraghanta"
                className="px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
              >
                ← Previous: Chandraghanta
              </Link>
              <Link
                href="/deities/durga/skandamata"
                className="px-8 py-4 bg-amber-500 text-white font-bold rounded-xl hover:bg-amber-400 transition-colors"
              >
                Next: Skandamata →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}