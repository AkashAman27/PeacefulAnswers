import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kushmanda - Fourth Form of Navadurga | Creator of Universe | PeacefulAnswers',
  description: 'Discover Goddess Kushmanda, the fourth form of Navadurga who created the universe with her divine smile. Learn about her cosmic powers, mantras, and significance in bringing health and prosperity.',
  keywords: 'Kushmanda, Navadurga, fourth form Durga, creator universe, cosmic energy, lion vehicle, Navaratri Day 4, divine smile, health wealth',
  openGraph: {
    title: 'Kushmanda - Fourth Form of Navadurga | Creator of Universe',
    description: 'Explore the cosmic creator Goddess Kushmanda who illuminated the universe with her radiant smile.',
    type: 'website',
  },
}

const kushmandaMantras = [
  {
    sanskrit: "ॐ देवी कूष्माण्डायै नमः",
    transliteration: "Om Devi Kushmanday Namah",
    meaning: "Salutations to Goddess Kushmanda"
  },
  {
    sanskrit: "सुरासम्पूर्ण कलशं रुधिराप्लुतमेव च। दधाना हस्तपद्माभ्यां कूष्माण्डा शुभदास्तु मे॥",
    transliteration: "Surasampurna Kalasham Rudhiraplutameva Cha | Dadhana Hastapadmabhyam Kushmanda Shubhadastu Me ||",
    meaning: "O Kushmanda, holding a pot of nectar and blood-filled vessel in your lotus hands, bestow auspiciousness upon me"
  }
]

const cosmicPowers = [
  {
    title: "Universe Creation",
    description: "Created the entire universe with her divine smile, bringing light to the cosmic darkness",
    significance: "Grants creative power and ability to manifest new beginnings"
  },
  {
    title: "Solar Energy",
    description: "Resides in the core of the Sun, controlling solar energy and cosmic illumination",
    significance: "Provides vitality, energy, and removes darkness from life"
  },
  {
    title: "Health & Healing",
    description: "Bestows perfect health, longevity, and cures all diseases through cosmic energy",
    significance: "Grants physical strength, immunity, and healing powers"
  },
  {
    title: "Wealth & Prosperity",
    description: "Brings material abundance, success in business, and financial stability",
    significance: "Removes poverty and grants material security"
  }
]

const lessKnownFacts = [
  {
    fact: "Cosmic Smile Origin",
    detail: "When the universe was dark and formless, Kushmanda's smile created the first ray of light, illuminating the cosmos and enabling creation to begin. This is why she's called 'Adi Shakti' - the primordial energy."
  },
  {
    fact: "Eight Arms Symbolism",
    detail: "Her eight arms represent the eight directions and eight forms of wealth (Ashta Lakshmi). Each hand holds objects that symbolize different aspects of cosmic creation and maintenance."
  },
  {
    fact: "Pumpkin Connection",
    detail: "The name 'Kushmanda' comes from 'Kushma' (pumpkin) + 'Anda' (cosmic egg). She is believed to have created the universe from a cosmic pumpkin, symbolizing abundance and fertility."
  },
  {
    fact: "Lion Vehicle Significance",
    detail: "Her lion represents dharma, justice, and royal power. Unlike other forms that ride tigers, the lion symbolizes the established cosmic order that she maintains after creation."
  },
  {
    fact: "Anahata Chakra Connection",
    detail: "Associated with the heart chakra, she represents unconditional love and the emotional center from which all creation emerges. Her worship opens the heart to divine love."
  },
  {
    fact: "Siddhis Granter",
    detail: "She is said to grant the eight supernatural powers (Ashta Siddhis) to advanced practitioners, including the ability to become infinitely small or large, and to travel anywhere instantly."
  }
]

const eightWeapons = [
  "Chakra (Discus) - Destroys ignorance and maintains cosmic order",
  "Gada (Mace) - Removes obstacles and grants strength",
  "Sword - Cuts through illusion and grants discrimination",
  "Trident - Controls the three gunas and time dimensions",
  "Lotus - Grants purity and spiritual awakening",
  "Bow & Arrow - Provides focus and achievement of goals",
  "Kalash (Pot) - Contains the nectar of immortality",
  "Rosary - Maintains connection with the divine"
]

export default function KushmandaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-orange-400/20 to-amber-400/20"></div>
        <div className="relative max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Kushmanda
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-orange-700 mb-8 font-semibold">कूष्माण्डा - Creator of the Universe</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-6 py-3 bg-yellow-600 text-white rounded-full font-semibold">Fourth Form of Navadurga</span>
            <span className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold">Day 4 of Navaratri</span>
            <span className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-amber-500 text-white rounded-full font-semibold">Anahata Chakra</span>
          </div>
          <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-4xl mx-auto">
            The cosmic creator who illuminated the universe with her divine smile and brings health, wealth, and prosperity
          </p>
        </div>
      </section>

      {/* Cosmic Powers */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-100 via-yellow-100 to-amber-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Cosmic Powers & Abilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cosmicPowers.map((power, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-orange-700 mb-3">{power.title}</h3>
                <p className="text-gray-700 mb-3">{power.description}</p>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <p className="text-yellow-800 font-medium">{power.significance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eight Sacred Weapons */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Eight Sacred Weapons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eightWeapons.map((weapon, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-700 font-medium text-sm">{weapon}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sacred Mantras */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-100 via-yellow-100 to-orange-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Sacred Mantras</h2>
          <div className="space-y-8">
            {kushmandaMantras.map((mantra, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-orange-700 mb-4">{mantra.sanskrit}</h3>
                  <p className="text-lg text-yellow-600 italic mb-3">{mantra.transliteration}</p>
                  <p className="text-gray-700">{mantra.meaning}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lesser Known Facts */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Lesser Known Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lessKnownFacts.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-orange-700 mb-3">{item.fact}</h3>
                <p className="text-gray-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/festivals/durga-puja/skandamata" className="px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-400 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Next: Skandamata →
            </Link>
            <Link href="/festivals/durga-puja/chandraghanta" className="px-8 py-4 bg-gradient-to-r from-gray-600 to-yellow-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              ← Previous: Chandraghanta
            </Link>
            <Link href="/festivals/durga-puja" className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Back to Durga Puja
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}