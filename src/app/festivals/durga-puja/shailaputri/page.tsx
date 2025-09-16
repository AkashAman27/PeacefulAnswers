import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Shailaputri - First Form of Navadurga | Daughter of the Mountains | PeacefulAnswers',
  description: 'Discover Goddess Shailaputri, the first form of Navadurga worshipped on Day 1 of Navaratri. Learn about her significance, mantras, worship methods, and profound spiritual symbolism.',
  keywords: 'Shailaputri, Navadurga, first form Durga, daughter of mountains, Himavan, Navaratri Day 1, Sati, Parvati, spiritual significance',
  openGraph: {
    title: 'Shailaputri - First Form of Navadurga | Daughter of the Mountains',
    description: 'Explore the divine essence of Goddess Shailaputri, the mountain daughter who represents pure divine energy and new beginnings.',
    type: 'website',
  },
}

const shailaputriMantras = [
  {
    sanskrit: "ॐ देवी शैलपुत्र्यै नमः",
    transliteration: "Om Devi Shailaputryai Namah",
    meaning: "Salutations to Goddess Shailaputri"
  },
  {
    sanskrit: "वन्दे वाञ्छितलाभाय चन्द्रार्धकृतशेखराम्। वृषारूढां शूलधरां शैलपुत्रीं यशस्विनीम्॥",
    transliteration: "Vande Vanchhitalabhaya Chandrardhakritashekharam | Vrisharudham Shuladharam Shailaputrim Yashasvinim ||",
    meaning: "I bow to the glorious Shailaputri who fulfills desires, wears a crescent moon as crown, rides a bull, and holds a trident"
  }
]

const shailaputriQualities = [
  {
    title: "Pure Consciousness",
    description: "Represents the primordial consciousness that exists before creation begins",
    significance: "Helps devotees connect with their pure, unmanifested divine nature"
  },
  {
    title: "Mountain Stability",
    description: "Embodies the unwavering strength and stability of mountains",
    significance: "Grants mental stability, determination, and unshakeable faith to devotees"
  },
  {
    title: "New Beginnings",
    description: "Symbolizes fresh starts and the beginning of spiritual journey",
    significance: "Blesses new ventures, spiritual practices, and life transformations"
  },
  {
    title: "Root Chakra Activation",
    description: "Associated with Muladhara chakra - the foundation of spiritual energy",
    significance: "Helps in grounding, survival instincts, and basic life force activation"
  }
]

const worshipBenefits = [
  "Removal of obstacles in new ventures",
  "Enhanced mental stability and focus",
  "Grounding of spiritual energy",
  "Protection from negative forces",
  "Blessing for marriage and relationships",
  "Increased determination and willpower",
  "Purification of mind and heart",
  "Connection with divine feminine energy"
]

const lessKnownFacts = [
  {
    fact: "Previous Life as Sati",
    detail: "Shailaputri is the reincarnation of Sati, who immolated herself due to Daksha's insult to Lord Shiva. She was reborn as daughter of King Himavan (Himalayas)."
  },
  {
    fact: "Bull Symbolism",
    detail: "Her vehicle, the bull (Nandi), represents dharma (righteousness) and justice. The bull's strength symbolizes the power to carry heavy spiritual responsibilities."
  },
  {
    fact: "Trident Significance",
    detail: "The trident (Trishul) represents control over the three gunas (Sattva, Rajas, Tamas) and mastery over the three states of consciousness (waking, dreaming, deep sleep)."
  },
  {
    fact: "Lunar Connection",
    detail: "The crescent moon on her forehead represents the mind that has been purified and brought under control, showing mastery over mental fluctuations."
  },
  {
    fact: "Geological Worship",
    detail: "In ancient times, mountains were worshipped as deities. Shailaputri represents this primal connection between divine feminine and the Earth's geological formations."
  },
  {
    fact: "Color Symbolism",
    detail: "She is often depicted wearing red and yellow clothes. Red represents power and passion, while yellow symbolizes knowledge and learning."
  },
  {
    fact: "Lotus Position",
    detail: "When depicted sitting, she often sits in lotus position (Padmasana), representing spiritual awakening and the blooming of consciousness."
  },
  {
    fact: "Historical Evolution",
    detail: "The worship of Shailaputri evolved from ancient mountain goddess traditions of the Himalayan regions, connecting indigenous practices with Vedic traditions."
  }
]

const worshipProcedure = [
  {
    step: "Purification",
    details: ["Take bath early morning", "Wear clean clothes (preferably red or yellow)", "Clean the puja area", "Light incense and diya"]
  },
  {
    step: "Invocation",
    details: ["Place Shailaputri image/idol", "Offer red flowers (especially hibiscus)", "Light ghee lamp", "Recite invocation mantras"]
  },
  {
    step: "Offerings",
    details: ["Offer fruits (especially apple and pomegranate)", "Present sweets and milk products", "Offer red cloth/chunari", "Present jasmine oil or perfume"]
  },
  {
    step: "Prayer and Meditation",
    details: ["Recite Shailaputri mantras 108 times", "Meditate on her form", "Pray for stability and new beginnings", "Seek blessings for family welfare"]
  }
]

export default function ShailaputriPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-700/20 via-orange-500/20 to-yellow-400/20"></div>
        <div className="relative max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-700 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Shailaputri
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-red-700 mb-8 font-semibold">शैलपुत्री - Daughter of the Mountains</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-6 py-3 bg-red-700 text-white rounded-full font-semibold">First Form of Navadurga</span>
            <span className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold">Day 1 of Navaratri</span>
            <span className="px-6 py-3 bg-gradient-to-r from-red-700 to-yellow-400 text-white rounded-full font-semibold">Muladhara Chakra</span>
          </div>
          <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-4xl mx-auto">
            The primordial form of Divine Mother, representing pure consciousness and the beginning of spiritual journey
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-red-700 via-orange-500 to-yellow-400 mx-auto"></div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-red-800 mb-6">Who is Shailaputri?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Goddess Shailaputri, literally meaning "Daughter of the Mountain," is the first manifestation of 
                Goddess Durga among the nine forms of Navadurga. She is the reincarnation of Sati, born as the 
                daughter of King Himavan (the Himalayas personified). This divine form represents the raw, 
                primordial energy of the universe - pure, unmanifested consciousness that serves as the foundation 
                for all creation.
              </p>
              <p className="mb-4">
                In her previous birth as Sati, she was the daughter of Prajapati Daksha. When Daksha insulted 
                Lord Shiva during a grand yajna, Sati couldn't bear the humiliation and immolated herself in the 
                sacrificial fire. She was later reborn as Shailaputri to King Himavan and Queen Minavati, destined 
                to marry Shiva again as Parvati.
              </p>
              <p>
                Shailaputri is depicted as a beautiful young woman riding a bull (Nandi), holding a trident 
                (Trishul) in her right hand and a lotus flower in her left. A crescent moon adorns her forehead, 
                symbolizing divine consciousness and time transcendence. She embodies the earth element and is 
                associated with the Muladhara (Root) chakra, representing stability, grounding, and survival instincts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Iconography */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-12">Divine Iconography</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🐂</span>
              </div>
              <h3 className="text-lg font-bold text-red-700 mb-2">Bull (Nandi)</h3>
              <p className="text-gray-600">Symbol of dharma, justice, and righteous power</p>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔱</span>
              </div>
              <h3 className="text-lg font-bold text-orange-600 mb-2">Trident (Trishul)</h3>
              <p className="text-gray-600">Control over three gunas and states of consciousness</p>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🪷</span>
              </div>
              <h3 className="text-lg font-bold text-yellow-600 mb-2">Lotus</h3>
              <p className="text-gray-600">Purity, spiritual awakening, and divine beauty</p>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌙</span>
              </div>
              <h3 className="text-lg font-bold text-blue-600 mb-2">Crescent Moon</h3>
              <p className="text-gray-600">Controlled mind and transcendence of time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divine Qualities */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-12">Divine Qualities & Powers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {shailaputriQualities.map((quality, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-red-700 mb-3">{quality.title}</h3>
                <p className="text-gray-700 mb-3">{quality.description}</p>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-orange-800 font-medium">{quality.significance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sacred Mantras */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-12">Sacred Mantras</h2>
          <div className="space-y-8">
            {shailaputriMantras.map((mantra, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-red-700 mb-4">{mantra.sanskrit}</h3>
                  <p className="text-lg text-orange-600 italic mb-3">{mantra.transliteration}</p>
                  <p className="text-gray-700">{mantra.meaning}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worship Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-12">Benefits of Worship</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {worshipBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-700 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worship Procedure */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-12">Worship Procedure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {worshipProcedure.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-700 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-red-700">{step.step}</h3>
                </div>
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lesser Known Facts */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-12">Lesser Known Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lessKnownFacts.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-red-700 mb-3">{item.fact}</h3>
                <p className="text-gray-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Significance */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-8">Spiritual Significance</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <p className="text-lg text-gray-700 mb-6">
              Shailaputri represents the beginning of spiritual transformation. Just as mountains are formed over millions 
              of years through immense pressure and patience, spiritual growth requires stability, patience, and unwavering 
              determination. Her worship marks the commencement of the devotee's journey toward self-realization.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              The bull she rides represents the mind that has been tamed and controlled. In spiritual practice, the mind 
              is often compared to a wild bull - powerful but difficult to control. Shailaputri's mastery over the bull 
              symbolizes the importance of mental discipline in spiritual advancement.
            </p>
            <div className="bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-800 mb-4">Meditation Practice</h3>
              <p className="text-gray-700">
                Meditate on Shailaputri while focusing on your root chakra. Visualize her divine form emanating stability 
                and strength. Feel your connection to the earth beneath you, drawing up divine energy through your spine. 
                This practice helps in grounding scattered energies and building a solid foundation for spiritual growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-red-800 mb-8">Continue the Journey</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/festivals/durga-puja/brahmacharini" className="px-8 py-4 bg-gradient-to-r from-orange-600 to-yellow-400 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Next: Brahmacharini →
            </Link>
            <Link href="/festivals/durga-puja" className="px-8 py-4 bg-gradient-to-r from-red-700 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              ← Back to Durga Puja
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}