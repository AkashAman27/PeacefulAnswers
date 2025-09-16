import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Brahmacharini - Second Form of Navadurga | The Unmarried Devotee | PeacefulAnswers',
  description: 'Discover Goddess Brahmacharini, the second form of Navadurga worshipped on Day 2 of Navaratri. Learn about her penance, spiritual practices, mantras, and profound devotional symbolism.',
  keywords: 'Brahmacharini, Navadurga, second form Durga, unmarried devotee, tapasya, penance, spiritual practices, Navaratri Day 2, devotion, self-discipline',
  openGraph: {
    title: 'Brahmacharini - Second Form of Navadurga | The Unmarried Devotee',
    description: 'Explore the divine essence of Goddess Brahmacharini, who represents supreme devotion, penance, and spiritual knowledge.',
    type: 'website',
  },
}

const brahmachariniMantras = [
  {
    sanskrit: "ॐ देवी ब्रह्मचारिण्यै नमः",
    transliteration: "Om Devi Brahmacharinyai Namah",
    meaning: "Salutations to Goddess Brahmacharini"
  },
  {
    sanskrit: "दधाना करपद्माभ्यामक्षमाला कमण्डलु। देवी प्रसीदतु मयि ब्रह्मचारिण्यनुत्तमा॥",
    transliteration: "Dadhana Karapadmabhyam Akshamala Kamandalu | Devi Prasidatu Mayi Brahmachariny Anuttama ||",
    meaning: "O Supreme Brahmacharini, who holds rosary and water pot in her lotus hands, please be gracious to me"
  },
  {
    sanskrit: "या देवी सर्वभूतेषु ब्रह्मचारिणी रूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥",
    transliteration: "Ya Devi Sarvabhuteshu Brahmacharini Rupena Samsthita | Namastasyai Namastasyai Namastasyai Namo Namah ||",
    meaning: "Salutations to the Goddess who resides in all beings in the form of Brahmacharini"
  }
]

const brahmachariniQualities = [
  {
    title: "Supreme Devotion",
    description: "Embodies the highest form of devotional practice and spiritual dedication",
    significance: "Inspires unwavering devotion and commitment to spiritual goals"
  },
  {
    title: "Self-Discipline",
    description: "Represents mastery over senses and control of desires",
    significance: "Grants strength to practice self-control and maintain spiritual disciplines"
  },
  {
    title: "Tapasya (Penance)",
    description: "Symbolizes the power of sustained spiritual practice and austerity",
    significance: "Blesses devotees with the ability to perform rigorous spiritual practices"
  },
  {
    title: "Knowledge Acquisition",
    description: "Associated with gaining spiritual wisdom through study and meditation",
    significance: "Enhances learning capacity, memory, and spiritual understanding"
  },
  {
    title: "Celibacy & Purity",
    description: "Represents the conservation of vital energy for spiritual advancement",
    significance: "Helps in maintaining mental clarity and spiritual focus"
  },
  {
    title: "Patience & Perseverance",
    description: "Embodies the virtue of sustained effort over long periods",
    significance: "Grants patience and persistence in spiritual and worldly endeavors"
  }
]

const worshipBenefits = [
  "Enhanced self-discipline and willpower",
  "Success in education and learning",
  "Spiritual growth and inner purification",
  "Control over senses and desires",
  "Blessings for students and scholars",
  "Removal of obstacles in tapasya",
  "Mental peace and emotional stability",
  "Development of devotional qualities",
  "Success in meditation and yoga",
  "Blessing for unmarried seeking partners"
]

const lessKnownFacts = [
  {
    fact: "1000 Years of Penance",
    detail: "Brahmacharini performed severe penance for 1000 years, eating only fruits and vegetables. For the next 100 years, she survived only on leafy vegetables, and then gave up food entirely."
  },
  {
    fact: "Eating Only Bilva Leaves",
    detail: "During her intense tapasya, she survived for thousands of years eating only Bilva (Bael) leaves. This is why she's also called 'Aparna' (one who doesn't even eat leaves)."
  },
  {
    fact: "Bare Foot Walking",
    detail: "She walked barefoot on thorns, stones, and hot sand during her penance, developing calluses that became symbols of her dedication to spiritual practice."
  },
  {
    fact: "Cosmic Tremors",
    detail: "Her intense penance created vibrations throughout the cosmos, causing concern among the gods who feared the universe might collapse from her spiritual energy."
  },
  {
    fact: "White Attire Significance",
    detail: "She's depicted in white clothes symbolizing purity, simplicity, and renunciation of worldly pleasures. White also represents knowledge and wisdom."
  },
  {
    fact: "Rosary with 108 Beads",
    detail: "The rosary (Akshmala) she holds traditionally has 108 beads, representing the 108 Upanishads and the cosmic significance of this sacred number."
  },
  {
    fact: "Kamandalu Symbolism",
    detail: "Her water pot (Kamandalu) represents the mind that should be kept pure like water, and the need for simple living with minimal possessions."
  },
  {
    fact: "Solar Connection",
    detail: "Brahmacharini is associated with the planet Sun and is believed to control solar energy. Her worship can help overcome problems related to father, authority figures, and leadership."
  },
  {
    fact: "Ancient Ashrams",
    detail: "Historical records show that ancient ashrams had special shrines for Brahmacharini where students would pray before beginning their studies."
  },
  {
    fact: "Seasonal Worship",
    detail: "Traditional practitioners worship her specifically during Chaitra Navaratri (spring) as this season is considered ideal for beginning new spiritual practices."
  }
]

const penanceStory = [
  {
    phase: "Initial Determination",
    description: "After being reborn as Shailaputri, she decided to win Lord Shiva through intense penance rather than worldly attractions",
    duration: "Preparation phase"
  },
  {
    phase: "Fruits and Vegetables",
    description: "Began her tapasya by eating only fruits and vegetables, gradually reducing even this minimal intake",
    duration: "First 1000 years"
  },
  {
    phase: "Only Leaves",
    description: "Survived only on fallen leaves from trees, without plucking or harming any plant life",
    duration: "Next 100 years"
  },
  {
    phase: "Complete Fasting",
    description: "Gave up all food and water, surviving only on air and cosmic energy, earning the name 'Aparna'",
    duration: "Final phase"
  },
  {
    phase: "Divine Recognition",
    description: "The intensity of her penance pleased Lord Shiva, who appeared before her and accepted her as his consort",
    duration: "Achievement"
  }
]

const spiritualPractices = [
  {
    practice: "Meditation (Dhyana)",
    method: "Sit in lotus position, visualize Brahmacharini's form, focus on her rosary and water pot",
    benefits: "Enhanced concentration, mental clarity, spiritual insight"
  },
  {
    practice: "Japa (Chanting)",
    method: "Recite 'Om Brahmacharinyai Namah' 108 times daily using a rudraksha rosary",
    benefits: "Purification of mind, spiritual energy accumulation, divine connection"
  },
  {
    practice: "Fasting (Upavasa)",
    method: "Observe partial or complete fasts on Tuesdays, eat only sattvic food during Navaratri",
    benefits: "Self-discipline development, body purification, spiritual merit"
  },
  {
    practice: "Study (Svadhyaya)",
    method: "Daily study of spiritual texts, particularly Devi Mahatmya and Upanishads",
    benefits: "Knowledge expansion, wisdom development, spiritual understanding"
  },
  {
    practice: "Brahmacharya",
    method: "Practice celibacy in thought, word, and deed; conserve vital energy for spiritual growth",
    benefits: "Mental clarity, spiritual power, focused energy"
  },
  {
    practice: "Seva (Service)",
    method: "Serve guru, parents, and needy without expectation; offer water to students",
    benefits: "Ego dissolution, karma purification, devotional development"
  }
]

export default function BrahmachariniPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 via-indigo-500/20 to-purple-400/20"></div>
        <div className="relative max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-700 via-indigo-500 to-purple-400 bg-clip-text text-transparent">
              Brahmacharini
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-700 mb-8 font-semibold">ब्रह्मचारिणी - The Unmarried Devotee</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-6 py-3 bg-blue-700 text-white rounded-full font-semibold">Second Form of Navadurga</span>
            <span className="px-6 py-3 bg-indigo-500 text-white rounded-full font-semibold">Day 2 of Navaratri</span>
            <span className="px-6 py-3 bg-gradient-to-r from-blue-700 to-purple-400 text-white rounded-full font-semibold">Swadhisthana Chakra</span>
          </div>
          <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-4xl mx-auto">
            The embodiment of supreme devotion, self-discipline, and unwavering commitment to spiritual growth
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-700 via-indigo-500 to-purple-400 mx-auto"></div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Who is Brahmacharini?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Goddess Brahmacharini, the second manifestation of Navadurga, represents the ultimate form of devotion, 
                penance, and spiritual discipline. The name "Brahmacharini" literally means "one who practices Brahmacharya" 
                - the path of celibacy, self-discipline, and dedicated pursuit of spiritual knowledge. She is the embodiment 
                of supreme tapasya (penance) and unwavering devotion to achieve divine union.
              </p>
              <p className="mb-4">
                In her previous life as Sati, after immolating herself due to Daksha's insult to Lord Shiva, she was reborn 
                as Parvati, daughter of King Himavan. Determined to win Lord Shiva as her consort through spiritual merit 
                rather than worldly beauty, she undertook the most severe penance recorded in Hindu scriptures. Her 
                extraordinary tapasya lasted for thousands of years and is considered the epitome of spiritual dedication.
              </p>
              <p>
                Brahmacharini is depicted as a young ascetic woman dressed in white clothes, walking barefoot, holding a 
                rosary (akshmala) in her right hand and a water pot (kamandalu) in her left. Her simple attire and 
                possessions represent the renunciation of worldly pleasures in pursuit of higher spiritual goals. She is 
                associated with the Swadhisthana chakra, representing creativity, emotional balance, and spiritual discipline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Great Penance */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">The Great Penance (Tapasya)</h2>
          <div className="space-y-6">
            {penanceStory.map((phase, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`p-6 bg-gradient-to-r ${index % 2 === 0 ? 'from-blue-700 to-indigo-500' : 'from-indigo-500 to-purple-400'} text-white`}>
                  <h3 className="text-xl font-bold mb-2">{phase.phase}</h3>
                  <span className="text-blue-100 text-sm">{phase.duration}</span>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Iconography */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">Divine Iconography</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📿</span>
              </div>
              <h3 className="text-lg font-bold text-blue-700 mb-2">Rosary (Akshmala)</h3>
              <p className="text-gray-600">Symbol of spiritual practice and devotion</p>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏺</span>
              </div>
              <h3 className="text-lg font-bold text-indigo-600 mb-2">Water Pot (Kamandalu)</h3>
              <p className="text-gray-600">Represents simple living and purity of mind</p>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤍</span>
              </div>
              <h3 className="text-lg font-bold text-purple-600 mb-2">White Attire</h3>
              <p className="text-gray-600">Symbol of purity, knowledge, and renunciation</p>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🦶</span>
              </div>
              <h3 className="text-lg font-bold text-blue-600 mb-2">Bare Feet</h3>
              <p className="text-gray-600">Represents humility and connection to earth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divine Qualities */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">Divine Qualities & Powers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brahmachariniQualities.map((quality, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-blue-700 mb-3">{quality.title}</h3>
                <p className="text-gray-700 mb-3 text-sm">{quality.description}</p>
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <p className="text-indigo-800 font-medium text-sm">{quality.significance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sacred Mantras */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">Sacred Mantras</h2>
          <div className="space-y-8">
            {brahmachariniMantras.map((mantra, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">{mantra.sanskrit}</h3>
                  <p className="text-lg text-indigo-600 italic mb-3">{mantra.transliteration}</p>
                  <p className="text-gray-700">{mantra.meaning}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Practices */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">Spiritual Practices Inspired by Brahmacharini</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spiritualPractices.map((practice, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-blue-700 mb-3">{practice.practice}</h3>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-indigo-600 mb-2">Method:</h4>
                  <p className="text-gray-700 text-sm">{practice.method}</p>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <h4 className="text-sm font-semibold text-indigo-800 mb-1">Benefits:</h4>
                  <p className="text-indigo-700 text-sm">{practice.benefits}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worship Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">Benefits of Worship</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {worshipBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-gray-700 font-medium text-sm">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lesser Known Facts */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">Lesser Known Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lessKnownFacts.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-blue-700 mb-3">{item.fact}</h3>
                <p className="text-gray-700 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Significance */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8">Spiritual Significance</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <p className="text-lg text-gray-700 mb-6">
              Brahmacharini represents the transformative power of spiritual discipline and unwavering devotion. Her story 
              teaches us that true spiritual achievement comes not through shortcuts or external rituals alone, but through 
              sustained inner practice, self-discipline, and complete surrender to the divine will.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Her practice of tapasya demonstrates that spiritual growth requires patience, persistence, and the willingness 
              to sacrifice immediate pleasures for long-term spiritual gains. The rosary she carries represents the 
              continuous remembrance of the divine, while the water pot symbolizes the pure heart that should be the 
              vessel for divine grace.
            </p>
            <div className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Modern Application</h3>
              <p className="text-gray-700">
                In today's world, Brahmacharini's qualities of self-discipline, focused study, and dedication to higher 
                goals are particularly relevant. Students can invoke her blessings for academic success, while spiritual 
                seekers can draw inspiration from her example of unwavering commitment to spiritual practice despite all obstacles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-800 mb-8">Continue the Journey</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/festivals/durga-puja/chandraghanta" className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-400 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Next: Chandraghanta →
            </Link>
            <Link href="/festivals/durga-puja/shailaputri" className="px-8 py-4 bg-gradient-to-r from-gray-600 to-blue-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              ← Previous: Shailaputri
            </Link>
            <Link href="/festivals/durga-puja" className="px-8 py-4 bg-gradient-to-r from-blue-700 to-indigo-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Back to Durga Puja
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}