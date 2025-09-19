import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Katyayani - Sixth Form of Maa Durga | Warrior Slayer | PeacefulAnswers',
  description: 'Discover Katyayani, the sixth form of Navadurga worshipped on Day 6 of Navratri. Learn about her fierce warrior energy, third eye chakra connection, and power to remove obstacles.',
  keywords: 'Katyayani, Navadurga, Sixth form of Durga, Warrior Slayer, Day 6 Navratri, Ajna Chakra, Third Eye Chakra, Fierce goddess, Demon slayer',
  openGraph: {
    title: 'Katyayani - Sixth Form of Maa Durga | Warrior Slayer',
    description: 'Explore Katyayani, the fierce warrior goddess who destroys evil and grants strength to overcome all obstacles.',
    type: 'website',
  }
}

export default function KatyayaniPage() {
  const goddess = {
    name: "Katyayani",
    sanskrit: "कात्यायनी",
    meaning: "Born to Sage Katya / The Fierce Warrior",
    day: 6,
    color: "Red",
    chakra: "Ajna (Third Eye Chakra)",
    element: "Light/Divine Vision",
    mantra: "ॐ देवी कात्यायन्यै नमः",
    mantraTransliteration: "Om Devi Katyayanyai Namah",
    beejMantra: "ॐ ऐं श्रीं कात्यायन्यै नमः",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop"
  }

  const iconography = [
    {
      element: "Lion Mount",
      significance: "Her powerful lion represents courage, fearlessness, and royal authority. It symbolizes the inner strength needed to face and conquer spiritual and material challenges."
    },
    {
      element: "Four Divine Arms",
      significance: "Her four arms hold divine weapons representing her power to protect devotees from all directions and her ability to handle multiple cosmic responsibilities simultaneously."
    },
    {
      element: "Fierce Expression",
      significance: "Her intense, determined expression reflects the focused energy needed to destroy evil and ignorance. It represents divine anger against injustice and unrighteousness."
    },
    {
      element: "Divine Sword",
      significance: "The sword represents the sharp discrimination between truth and falsehood, right and wrong. It cuts through illusion and destroys negative tendencies."
    },
    {
      element: "Lotus Flower",
      significance: "Despite her fierce nature, the lotus represents her pure heart and the beauty that emerges from righteous action. It shows compassion underlying her strength."
    },
    {
      element: "Third Eye Radiance",
      significance: "Her awakened third eye represents divine wisdom, intuitive knowledge, and the ability to see beyond the physical realm into spiritual truth."
    }
  ]

  const mythology = [
    {
      title: "Birth from Divine Fire",
      content: "Katyayani was born from the combined divine energies of all gods to defeat the demon Mahishasura. Sage Katya performed intense penance to have the goddess born in his lineage, hence her name Katyayani."
    },
    {
      title: "Slayer of Mahishasura",
      content: "She manifested specifically to destroy the buffalo demon Mahishasura who had terrorized the three worlds. Her victory represents the triumph of divine righteousness over demonic forces and ego."
    },
    {
      title: "Gopis' Beloved Deity",
      content: "The young maidens of Vrindavan worshipped Katyayani to obtain Lord Krishna as their husband. She is thus revered as the goddess who grants desires, especially for ideal relationships and marriage."
    },
    {
      title: "Destroyer of Obstacles",
      content: "Known for her ability to remove all obstacles from the path of her devotees, she clears both external challenges and internal spiritual blockages that prevent growth and realization."
    }
  ]

  const spiritualSignificance = [
    {
      aspect: "Third Eye Chakra Activation",
      meaning: "Katyayani governs Ajna chakra, the center of wisdom, intuition, and spiritual insight. Her worship awakens inner vision and divine discrimination between truth and illusion."
    },
    {
      aspect: "Destruction of Ego",
      meaning: "Like her slaying of Mahishasura, she destroys the ego-mind that creates suffering. She represents the fierce aspect of consciousness that eliminates false identification."
    },
    {
      aspect: "Warrior Spirit",
      meaning: "She embodies the spiritual warrior who fights against injustice, both in the world and within consciousness. She grants courage to stand up for dharma and truth."
    },
    {
      aspect: "Divine Protection",
      meaning: "Her fierce energy creates a protective shield around devotees, warding off negative influences, evil intentions, and spiritual attacks from lower entities."
    },
    {
      aspect: "Fulfillment of Desires",
      meaning: "When desires are pure and aligned with dharma, she helps manifest them. She teaches proper desire - wanting what leads to spiritual evolution and collective good."
    },
    {
      aspect: "Transformation through Fire",
      meaning: "Her fiery energy burns away impurities, transforming the devotee through spiritual fire. This process purifies and strengthens spiritual resolve."
    }
  ]

  const rituals = [
    {
      practice: "Red Color Worship",
      description: "Devotees wear red clothes and offer red flowers, particularly red roses and hibiscus, to connect with her powerful, transformative energy and warrior spirit."
    },
    {
      practice: "Third Eye Meditation",
      description: "Focusing on the space between the eyebrows while chanting her mantras, visualizing divine light awakening inner wisdom and spiritual insight."
    },
    {
      practice: "Obstacle Removal Ritual",
      description: "Special prayers for removing obstacles in life, career, relationships, and spiritual practice. She is invoked before beginning any important endeavor."
    },
    {
      practice: "Warrior Courage Practice",
      description: "Cultivating inner strength and courage to face challenges, stand up for justice, and protect the innocent from harm or exploitation."
    },
    {
      practice: "Fire Ceremony (Havan)",
      description: "Performing fire rituals while chanting her mantras, offering ghee and sacred herbs to invoke her transformative and purifying energy."
    }
  ]

  const mantras = [
    {
      mantra: "ॐ देवी कात्यायन्यै नमः",
      transliteration: "Om Devi Katyayanyai Namah",
      meaning: "Salutations to Goddess Katyayani",
      benefits: "This fundamental mantra invokes the fierce goddess for protection, courage, and the power to overcome all obstacles and challenges."
    },
    {
      mantra: "ॐ ऐं श्रीं कात्यायन्यै नमः",
      transliteration: "Om Aim Shreem Katyayanyai Namah",
      meaning: "Om, with knowledge and prosperity seed sounds, salutations to Katyayani",
      benefits: "This beej mantra activates the third eye chakra while invoking divine wisdom, prosperity, and spiritual insight."
    },
    {
      mantra: "चन्द्रहासोज्ज्वलकरा शार्दूलवरवाहना। कात्यायनी शुभं दद्याद् देवी दानवघातिनी॥",
      transliteration: "Chandrahasojjwalakara Shardulavaravahana, Katyayani Shubham Dadyad Devi Danavaghitini",
      meaning: "With shining sword in hand, riding the excellent tiger, may Katyayani, the destroyer of demons, grant auspiciousness",
      benefits: "This verse invokes the complete warrior aspect of Katyayani for protection from evil forces and spiritual obstacles."
    },
    {
      mantra: "या देवी सर्वभूतेषु माँ कात्यायनी रूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥",
      transliteration: "Ya Devi Sarvabhuteshu Ma Katyayani Rupena Samsthita, Namastasyai Namastasyai Namastasyai Namo Namah",
      meaning: "The goddess who resides in all beings as Katyayani, salutations to her again and again",
      benefits: "This universal mantra recognizes the warrior divine energy present in all existence and awakens inner strength and courage."
    }
  ]

  const lessons = [
    {
      teaching: "Righteous Anger",
      application: "Learn to channel anger constructively against injustice and unrighteousness. Use fierce energy to protect the innocent and uphold dharma, not for personal vengeance."
    },
    {
      teaching: "Fearless Action",
      application: "Develop courage to take necessary action even when facing powerful opposition. Stand firm in truth and righteousness regardless of external pressure or threats."
    },
    {
      teaching: "Discrimination and Wisdom",
      application: "Cultivate the ability to discriminate between truth and falsehood, real and unreal. Use divine insight to make decisions that serve the highest good."
    },
    {
      teaching: "Protection of the Vulnerable",
      application: "Use your strength and resources to protect those who cannot protect themselves. Be a shield for the innocent and a voice for the voiceless."
    },
    {
      teaching: "Transformation through Challenge",
      application: "Embrace challenges as opportunities for growth and purification. Like fire that purifies gold, difficulties can burn away impurities and strengthen character."
    },
    {
      teaching: "Divine Warrior Spirit",
      application: "Develop the courage to fight spiritual battles against negative tendencies within yourself. Be vigilant against ego, greed, anger, and other spiritual enemies."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-pink-50">
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
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <Link href="/deities/durga/skandamata" className="hover:text-red-600">← Skandamata</Link>
              <span>Day {goddess.day} of Navratri</span>
              <Link href="/deities/durga/kalaratri" className="hover:text-red-600">Kalaratri →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-700 via-rose-600 to-pink-600 text-white py-20">
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

              <p className="text-xl text-rose-100 mb-8">
                {goddess.meaning} - The fierce warrior who destroys evil and grants divine strength
              </p>

              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  🔴 {goddess.color}
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  ✨ {goddess.element}
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  👁️ {goddess.chakra}
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-rose-500/20 to-red-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
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
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-700 mb-3">{item.element}</h3>
                <p className="text-gray-700 leading-relaxed">{item.significance}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mythology */}
        <section className="bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-12">Sacred Stories</h2>
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
          <h2 className="text-4xl font-bold text-center text-red-800 mb-12">Spiritual Significance</h2>
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
          <h2 className="text-4xl font-bold text-center text-red-800 mb-12">Rituals & Worship</h2>
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
          <h2 className="text-4xl font-bold text-center text-red-800 mb-12">Sacred Mantras</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mantras.map((mantra, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-red-800 mb-3">{mantra.mantra}</h3>
                  <p className="text-rose-600 font-medium mb-2">{mantra.transliteration}</p>
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
        <section className="bg-gradient-to-r from-red-100 to-rose-100 rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-12">Spiritual Lessons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lessons.map((lesson, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-red-500">
                <h3 className="text-xl font-bold text-red-700 mb-3">{lesson.teaching}</h3>
                <p className="text-gray-700 leading-relaxed">{lesson.application}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center py-12">
          <div className="bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Continue the Sacred Journey</h3>
            <p className="text-lg mb-6">
              Having awakened warrior spirit and divine discrimination, proceed to the seventh day of Navratri
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/deities/durga/skandamata"
                className="px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
              >
                ← Previous: Skandamata
              </Link>
              <Link
                href="/deities/durga/kalaratri"
                className="px-8 py-4 bg-rose-500 text-white font-bold rounded-xl hover:bg-rose-400 transition-colors"
              >
                Next: Kalaratri →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}