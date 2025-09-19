import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Siddhidatri - Ninth Form of Maa Durga | Giver of Siddhis | PeacefulAnswers',
  description: 'Discover Siddhidatri, the ninth and final form of Navadurga worshipped on Day 9 of Navratri. Learn about her supernatural powers, cosmic consciousness, and the completion of spiritual journey.',
  keywords: 'Siddhidatri, Navadurga, Ninth form of Durga, Giver of Siddhis, Day 9 Navratri, All Chakras, Supernatural powers, Lotus mount, Final form',
  openGraph: {
    title: 'Siddhidatri - Ninth Form of Maa Durga | Giver of Siddhis',
    description: 'Explore Siddhidatri, the supreme goddess who grants all supernatural powers and completes the spiritual journey.',
    type: 'website',
  }
}

export default function SiddhidatriPage() {
  const goddess = {
    name: "Siddhidatri",
    sanskrit: "सिद्धिदात्री",
    meaning: "Giver of Supernatural Powers/Siddhis",
    day: 9,
    color: "Purple",
    chakra: "All Chakras (Complete Mastery)",
    element: "Pure Consciousness/Divine Perfection",
    mantra: "ॐ देवी सिद्धिदात्र्यै नमः",
    mantraTransliteration: "Om Devi Siddhidatryai Namah",
    beejMantra: "ॐ ह्रीं क्लीं ऐं सिद्धिदात्र्यै नमः",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop"
  }

  const iconography = [
    {
      element: "Lotus Throne",
      significance: "Seated on a fully bloomed lotus, representing the complete flowering of consciousness and spiritual perfection. The lotus symbolizes the journey from material to divine awareness."
    },
    {
      element: "Four Divine Arms",
      significance: "Her four arms hold symbols of cosmic power - conch shell, chakra, gada, and lotus - representing mastery over all four aspects of existence and divine authority."
    },
    {
      element: "Radiant Purple Aura",
      significance: "Her purple radiance represents the highest spiritual consciousness, combining the red of power with the blue of wisdom to create perfect spiritual mastery."
    },
    {
      element: "Divine Conch (Shankha)",
      significance: "The conch shell represents the primordial sound 'Om' and the call to spiritual awakening. Its sound purifies the environment and announces divine presence."
    },
    {
      element: "Chakra (Discus)",
      significance: "The divine discus represents the wheel of time and dharma, showing her mastery over cosmic law and the cycles of creation, preservation, and destruction."
    },
    {
      element: "Serene Expression",
      significance: "Her peaceful, blissful expression reflects the supreme contentment that comes from perfect spiritual realization and the ability to grant all desires."
    }
  ]

  const mythology = [
    {
      title: "Completion of Creation",
      content: "Siddhidatri represents the final stage of divine manifestation. After creating the universe through her other eight forms, she appears as the culmination of all divine powers, granting supernatural abilities to worthy devotees."
    },
    {
      title: "Bestower of Eight Siddhis",
      content: "She grants the eight classical supernatural powers: Anima (becoming minute), Mahima (becoming huge), Garima (becoming heavy), Laghima (becoming light), Prapti (reaching anywhere), Prakamya (obtaining anything), Ishitva (lordship), and Vashitva (control over all)."
    },
    {
      title: "Worship by Gods and Sages",
      content: "Even the gods, including Lord Shiva himself, worship Siddhidatri to obtain supernatural powers and spiritual perfection. She is revered by all celestial beings as the ultimate source of divine abilities."
    },
    {
      title: "Guardian of Sacred Knowledge",
      content: "She is the keeper of all sacred knowledge, mystical sciences, and esoteric wisdom. Through her grace, devotees gain access to the deepest secrets of the universe and cosmic consciousness."
    }
  ]

  const spiritualSignificance = [
    {
      aspect: "Complete Spiritual Mastery",
      meaning: "Siddhidatri represents the pinnacle of spiritual achievement where the devotee has mastered all aspects of consciousness and gained supernatural abilities through divine grace."
    },
    {
      aspect: "Fulfillment of Spiritual Journey",
      meaning: "She symbolizes the completion of the Navratri journey, representing the devotee who has successfully traversed all levels of consciousness and achieved spiritual perfection."
    },
    {
      aspect: "Divine Powers and Abilities",
      meaning: "Through her blessings, devotees can develop extraordinary capabilities including healing powers, psychic abilities, materialization powers, and mastery over natural elements."
    },
    {
      aspect: "Universal Cosmic Consciousness",
      meaning: "She embodies the highest state of awareness where individual consciousness merges with universal consciousness, experiencing unity with all existence."
    },
    {
      aspect: "Perfect Balance of All Energies",
      meaning: "Representing the harmonious integration of all divine qualities, she shows how to balance material success with spiritual growth, power with compassion."
    },
    {
      aspect: "Gateway to Liberation",
      meaning: "As the final form, she represents the ultimate liberation (moksha) where the soul transcends all limitations and achieves permanent union with the divine."
    }
  ]

  const rituals = [
    {
      practice: "Purple Color Worship",
      description: "Devotees wear purple or violet clothes and offer purple flowers, especially purple lotus if available, to connect with her supreme spiritual energy and cosmic consciousness."
    },
    {
      practice: "Complete Chakra Integration",
      description: "Advanced meditation involving all chakras simultaneously, visualizing divine light flowing through the entire energy system and integrating all spiritual centers."
    },
    {
      practice: "Gratitude and Completion Ceremony",
      description: "Special ceremonies expressing gratitude for the entire Navratri journey and requesting blessings for continued spiritual growth and divine grace."
    },
    {
      practice: "Siddhi Invocation Rituals",
      description: "Sacred practices for invoking specific supernatural powers, always performed with pure intention for spiritual service rather than personal gain."
    },
    {
      practice: "Cosmic Consciousness Meditation",
      description: "Deep meditation practices aimed at expanding awareness to cosmic levels, experiencing unity with all existence and divine consciousness."
    }
  ]

  const mantras = [
    {
      mantra: "ॐ देवी सिद्धिदात्र्यै नमः",
      transliteration: "Om Devi Siddhidatryai Namah",
      meaning: "Salutations to Goddess Siddhidatri",
      benefits: "This fundamental mantra invokes the supreme goddess for supernatural powers, spiritual perfection, and completion of the divine journey."
    },
    {
      mantra: "ॐ ह्रीं क्लीं ऐं सिद्धिदात्र्यै नमः",
      transliteration: "Om Hreem Kleem Aim Siddhidatryai Namah",
      meaning: "Om, with divine energy, desire-fulfillment, and knowledge seed sounds, salutations to Siddhidatri",
      benefits: "This powerful beej mantra integrates all chakras while invoking complete spiritual mastery and supernatural abilities."
    },
    {
      mantra: "सिद्ध गन्धर्व यक्षाद्यैरसुरैरमरैरपि। सेव्यमाना सदा भूयात् सिद्धिदा सिद्धिदायिनी॥",
      transliteration: "Siddha Gandharva Yakshadyair Asurair Amarair Api, Sevyamana Sada Bhuyat Siddhida Siddhidayini",
      meaning: "Served by Siddhas, Gandharvas, Yakshas, demons and gods alike, may the giver of supernatural powers always grant siddhis",
      benefits: "This verse invokes her universal worship and requests the blessing of spiritual powers and divine abilities."
    },
    {
      mantra: "या देवी सर्वभूतेषु माँ सिद्धिदात्री रूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥",
      transliteration: "Ya Devi Sarvabhuteshu Ma Siddhidatri Rupena Samsthita, Namastasyai Namastasyai Namastasyai Namo Namah",
      meaning: "The goddess who resides in all beings as Siddhidatri, salutations to her again and again",
      benefits: "This universal mantra recognizes the perfected divine consciousness present in all existence and awakens latent spiritual powers."
    }
  ]

  const lessons = [
    {
      teaching: "Use Powers for Service",
      application: "When supernatural abilities develop, use them for the benefit of others and spiritual service, never for personal aggrandizement or material gain."
    },
    {
      teaching: "Maintain Humility in Perfection",
      application: "Even with spiritual mastery and divine powers, remain humble and compassionate. True perfection includes the absence of spiritual pride."
    },
    {
      teaching: "Integration of All Experiences",
      application: "Integrate all spiritual experiences and learnings from the entire journey. Let every challenge and blessing contribute to your spiritual wisdom."
    },
    {
      teaching: "Responsibility of Spiritual Leadership",
      application: "With great spiritual powers comes great responsibility. Guide others on their spiritual path with patience, wisdom, and unconditional love."
    },
    {
      teaching: "Beyond Dualities",
      application: "Transcend all dualistic thinking - good/bad, success/failure, self/other. Realize the unity underlying all apparent opposites."
    },
    {
      teaching: "Eternal Spiritual Growth",
      application: "Even after achieving spiritual perfection, continue growing and serving. Spiritual evolution is an endless journey of expanding love and consciousness."
    }
  ]

  const eightSiddhis = [
    {
      name: "Anima",
      description: "The power to become as small as an atom, representing the ability to perceive the most subtle aspects of reality."
    },
    {
      name: "Mahima",
      description: "The power to become infinitely large, representing expanded consciousness that encompasses all existence."
    },
    {
      name: "Garima",
      description: "The power to become extremely heavy, representing spiritual gravity and the ability to remain grounded in truth."
    },
    {
      name: "Laghima",
      description: "The power to become weightless, representing freedom from material limitations and spiritual lightness."
    },
    {
      name: "Prapti",
      description: "The power to reach anywhere instantly, representing omnipresence and the ability to access any realm of existence."
    },
    {
      name: "Prakamya",
      description: "The power to obtain anything desired, representing the ability to manifest intentions through spiritual will."
    },
    {
      name: "Ishitva",
      description: "The power of supreme lordship, representing mastery over natural elements and cosmic forces."
    },
    {
      name: "Vashitva",
      description: "The power to control all beings and situations, representing the ability to influence reality through divine consciousness."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-violet-50">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/deities/durga"
              className="inline-flex items-center text-gray-600 hover:text-purple-600 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to Maa Durga
            </Link>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <Link href="/deities/durga/mahagauri" className="hover:text-purple-600">← Mahagauri</Link>
              <span>Day {goddess.day} of Navratri</span>
              <span className="text-purple-600 font-medium">Final Form</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-700 via-indigo-600 to-violet-700 text-white py-20">
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

              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-purple-100">
                {goddess.name}
              </h2>

              <p className="text-xl text-indigo-100 mb-8">
                {goddess.meaning} - The supreme goddess who grants supernatural powers and completes the spiritual journey
              </p>

              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  🟣 {goddess.color}
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  ✨ {goddess.element}
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  🌈 {goddess.chakra}
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
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
          <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">Sacred Iconography</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iconography.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-purple-700 mb-3">{item.element}</h3>
                <p className="text-gray-700 leading-relaxed">{item.significance}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Eight Siddhis */}
        <section className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">The Eight Supernatural Powers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eightSiddhis.map((siddhi, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <h3 className="text-lg font-bold text-indigo-700 mb-3">{siddhi.name}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{siddhi.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mythology */}
        <section>
          <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">Sacred Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mythology.map((story, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-indigo-500">
                <h3 className="text-xl font-bold text-indigo-700 mb-4">{story.title}</h3>
                <p className="text-gray-700 leading-relaxed">{story.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Spiritual Significance */}
        <section className="bg-gradient-to-r from-indigo-50 to-violet-50 rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">Spiritual Significance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {spiritualSignificance.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-violet-700 mb-3">{item.aspect}</h3>
                <p className="text-gray-700 leading-relaxed">{item.meaning}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Rituals and Practices */}
        <section>
          <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">Rituals & Worship</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rituals.map((ritual, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-purple-500">
                <h3 className="text-xl font-bold text-purple-700 mb-3">{ritual.practice}</h3>
                <p className="text-gray-700 leading-relaxed">{ritual.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sacred Mantras */}
        <section className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">Sacred Mantras</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mantras.map((mantra, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-purple-800 mb-3">{mantra.mantra}</h3>
                  <p className="text-indigo-600 font-medium mb-2">{mantra.transliteration}</p>
                  <p className="text-gray-700 italic">{mantra.meaning}</p>
                </div>
                <div className="border-t border-purple-200 pt-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{mantra.benefits}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spiritual Lessons */}
        <section>
          <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">Spiritual Lessons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lessons.map((lesson, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-violet-500">
                <h3 className="text-xl font-bold text-violet-700 mb-3">{lesson.teaching}</h3>
                <p className="text-gray-700 leading-relaxed">{lesson.application}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Completion of Journey */}
        <section className="text-center py-12">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Sacred Journey Complete</h3>
            <p className="text-xl mb-6">
              You have traversed the complete path from earthly foundation to divine perfection
            </p>
            <p className="text-lg mb-8 text-purple-100">
              Through the nine forms of Maa Durga, you have experienced the full spectrum of spiritual evolution -
              from grounding and discipline to fierce transformation and ultimate realization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/deities/durga/mahagauri"
                className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
              >
                ← Previous: Mahagauri
              </Link>
              <Link
                href="/festivals/navratri"
                className="px-8 py-4 bg-indigo-500 text-white font-bold rounded-xl hover:bg-indigo-400 transition-colors"
              >
                Return to Navratri Festival
              </Link>
              <Link
                href="/deities/durga/shailaputri"
                className="px-8 py-4 bg-violet-500 text-white font-bold rounded-xl hover:bg-violet-400 transition-colors"
              >
                Begin Again: Shailaputri →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}