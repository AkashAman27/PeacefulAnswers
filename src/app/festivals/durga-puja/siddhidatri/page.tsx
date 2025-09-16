import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Siddhidatri - Ninth Form of Navadurga | Giver of Supernatural Powers | PeacefulAnswers',
  description: 'Discover Goddess Siddhidatri, the ninth and final form of Navadurga who grants supernatural powers and divine knowledge. Learn about the eight siddhis, mantras, and spiritual attainments.',
  keywords: 'Siddhidatri, Navadurga, ninth form Durga, supernatural powers, siddhis, divine knowledge, Navaratri Day 9, lotus seat, spiritual powers',
  openGraph: {
    title: 'Siddhidatri - Ninth Form of Navadurga | Giver of Supernatural Powers',
    description: 'Explore the final form of Navadurga who bestows spiritual powers and leads devotees to ultimate liberation.',
    type: 'website',
  },
}

const siddhidatriMantras = [
  {
    sanskrit: "ॐ देवी सिद्धिदात्र्यै नमः",
    transliteration: "Om Devi Siddhidatryai Namah",
    meaning: "Salutations to Goddess Siddhidatri"
  },
  {
    sanskrit: "सिद्ध गन्धर्व यक्षाद्यैरसुरैरमरैरपि। सेव्यमाना सदा भूयात् सिद्धिदा सिद्धिदायिनी॥",
    transliteration: "Siddha Gandharva Yakshadyair Asurair Amarair Api | Sevyamana Sada Bhuyat Siddhida Siddhidayini ||",
    meaning: "O Siddhidatri, giver of siddhis, served by Siddhas, Gandharvas, Yakshas, demons and gods alike, may you always bestow supernatural powers"
  },
  {
    sanskrit: "या देवी सर्वभूतेषु सिद्धिदात्री रूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥",
    transliteration: "Ya Devi Sarvabhuteshu Siddhidatri Rupena Samsthita | Namastasyai Namastasyai Namastasyai Namo Namah ||",
    meaning: "Salutations to the Goddess who resides in all beings in the form of Siddhidatri"
  }
]

const eightSiddhis = [
  {
    siddhi: "Anima",
    sanskrit: "अणिमा",
    description: "Power to become infinitely small, smaller than an atom",
    application: "Ability to enter any space, understand subtle realities",
    spiritual: "Understanding the interconnectedness of all existence"
  },
  {
    siddhi: "Mahima", 
    sanskrit: "महिमा",
    description: "Power to become infinitely large, expanding beyond physical limits",
    application: "Cosmic consciousness, perceiving vastness of universe",
    spiritual: "Realization of one's infinite divine nature"
  },
  {
    siddhi: "Garima",
    sanskrit: "गरिमा", 
    description: "Power to become infinitely heavy, immovable by any force",
    application: "Unshakeable determination, mental stability",
    spiritual: "Establishment in eternal truth beyond change"
  },
  {
    siddhi: "Laghima",
    sanskrit: "लघिमा",
    description: "Power to become weightless, lighter than air",
    application: "Levitation, freedom from physical limitations",
    spiritual: "Liberation from ego and material attachments"
  },
  {
    siddhi: "Prapti",
    sanskrit: "प्राप्ति",
    description: "Power to obtain anything desired instantaneously",
    application: "Manifesting needs, accessing distant objects",
    spiritual: "Understanding that all desires arise from the Self"
  },
  {
    siddhi: "Prakamya",
    sanskrit: "प्राकाम्य",
    description: "Power to fulfill any wish without obstruction",
    application: "Irresistible will, achieving impossible goals",
    spiritual: "Alignment of personal will with cosmic will"
  },
  {
    siddhi: "Ishitva",
    sanskrit: "ईशित्व",
    description: "Power to control and command all elements and beings",
    application: "Mastery over nature, leadership abilities",
    spiritual: "Recognition of divine authority within oneself"
  },
  {
    siddhi: "Vashitva",
    sanskrit: "वशित्व",
    description: "Power to attract and influence anyone or anything",
    application: "Magnetic personality, ability to inspire others",
    spiritual: "Understanding that all beings are expressions of one consciousness"
  }
]

const divineKnowledge = [
  {
    knowledge: "Brahma Vidya",
    description: "Knowledge of the ultimate reality and cosmic consciousness",
    attainment: "Direct experience of non-dual awareness"
  },
  {
    knowledge: "Atma Vidya",
    description: "Knowledge of the true Self beyond body and mind",
    attainment: "Self-realization and ego transcendence"
  },
  {
    knowledge: "Karma Vidya",
    description: "Understanding of the law of cause and effect",
    attainment: "Freedom from karmic bondage"
  },
  {
    knowledge: "Maya Vidya",
    description: "Knowledge of illusion and its transcendence",
    attainment: "Seeing through all appearances to truth"
  },
  {
    knowledge: "Yoga Vidya",
    description: "Complete knowledge of union with the divine",
    attainment: "Mastery of all spiritual practices"
  },
  {
    knowledge: "Tantra Vidya",
    description: "Knowledge of energy transformation and divine powers",
    attainment: "Ability to channel cosmic forces"
  }
]

const lessKnownFacts = [
  {
    fact: "Completion of Creation",
    detail: "Siddhidatri represents the completion of cosmic creation. After creating the universe through the first eight forms, she bestows the powers needed for spiritual evolution and ultimate liberation."
  },
  {
    fact: "Shiva's Worship",
    detail: "Even Lord Shiva worships Siddhidatri to maintain his cosmic powers. It's said that half of Shiva's body became Ardhanarishvara through her grace, representing the perfect balance of masculine and feminine energies."
  },
  {
    fact: "Lotus of Perfection",
    detail: "She sits on a fully bloomed thousand-petaled lotus, representing the complete awakening of consciousness and the flowering of all spiritual potentials."
  },
  {
    fact: "Kailash Residence",
    detail: "Among all Navadurga forms, she is the only one said to permanently reside on Mount Kailash with Lord Shiva, indicating her status as the supreme spiritual teacher."
  },
  {
    fact: "Cosmic Intelligence",
    detail: "She is considered the source of all intelligence in the universe - from the instinct of animals to the genius of great scientists and sages."
  },
  {
    fact: "Time Transcendence",
    detail: "Unlike other forms associated with specific times or planets, Siddhidatri exists beyond time and space, representing the eternal aspect of consciousness."
  },
  {
    fact: "Divine Scientists",
    detail: "Ancient texts describe her as the patron of divine scientists and inventors who receive knowledge directly from cosmic consciousness."
  },
  {
    fact: "Liberation Gateway",
    detail: "She is known as 'Moksha Dwara' - the gateway to liberation. Her worship is said to be the direct path to enlightenment without need for future births."
  },
  {
    fact: "Celestial Consultations",
    detail: "Devas (gods) consult her before undertaking any major cosmic task, as she possesses knowledge of all past, present, and future possibilities."
  },
  {
    fact: "Perfect Devotee",
    detail: "She represents the ideal devotee who has surrendered completely to the divine and thus receives all spiritual powers as natural expressions of that surrender."
  }
]

const spiritualAttainments = [
  {
    level: "Beginner",
    attainments: ["Inner peace", "Mental clarity", "Emotional stability", "Improved intuition"],
    practices: ["Daily meditation", "Mantra chanting", "Selfless service", "Study of scriptures"]
  },
  {
    level: "Intermediate", 
    attainments: ["Psychic abilities", "Healing powers", "Deep wisdom", "Compassionate action"],
    practices: ["Advanced meditation", "Pranayama", "Guru seva", "Intensive study"]
  },
  {
    level: "Advanced",
    attainments: ["Supernatural powers", "Cosmic consciousness", "Divine knowledge", "Miraculous abilities"],
    practices: ["Samadhi meditation", "Tantric practices", "Complete surrender", "Guru's grace"]
  },
  {
    level: "Perfected",
    attainments: ["Liberation", "Omniscience", "Divine embodiment", "Cosmic service"],
    practices: ["Natural state", "Spontaneous wisdom", "Effortless action", "Universal love"]
  }
]

const worshipForSiddhis = [
  {
    purpose: "For Knowledge",
    method: "Study and meditate on sacred texts while invoking her blessings",
    offering: "Books, writing materials, yellow flowers",
    result: "Enhanced learning ability and wisdom"
  },
  {
    purpose: "For Spiritual Powers",
    method: "Intensive meditation and pranayama with complete faith",
    offering: "Lotus flowers, sacred geometry, crystals",
    result: "Development of psychic abilities"
  },
  {
    purpose: "For Liberation",
    method: "Complete surrender and selfless service to all beings",
    offering: "Your ego and all desires to her",
    result: "Ultimate freedom and enlightenment"
  },
  {
    purpose: "For Healing Powers",
    method: "Compassionate meditation focusing on alleviating suffering",
    offering: "Medicinal herbs, pure water, healing intentions",
    result: "Ability to heal self and others"
  }
]

const completionQualities = [
  {
    quality: "Omniscience",
    description: "Complete knowledge of all that was, is, and will be",
    development: "Cultivate infinite curiosity and openness to truth"
  },
  {
    quality: "Omnipotence", 
    description: "Power to accomplish anything through divine will",
    development: "Align personal will with cosmic purpose"
  },
  {
    quality: "Omnipresence",
    description: "Awareness of being present everywhere simultaneously",
    development: "Expand consciousness beyond physical boundaries"
  },
  {
    quality: "Perfect Compassion",
    description: "Unlimited love and understanding for all beings",
    development: "See divinity in everyone and everything"
  },
  {
    quality: "Effortless Action",
    description: "Spontaneous right action without personal effort",
    development: "Surrender completely to divine guidance"
  },
  {
    quality: "Eternal Joy",
    description: "Unshakeable happiness independent of circumstances",
    development: "Find the source of joy within consciousness itself"
  }
]

const worshipBenefits = [
  "Attainment of all eight supernatural powers (Ashta Siddhis)",
  "Complete knowledge of past, present, and future",
  "Mastery over all elements and natural forces",
  "Ability to heal diseases and remove suffering",
  "Direct communication with divine beings",
  "Freedom from birth and death cycles",
  "Spontaneous fulfillment of all needs",
  "Perfect wisdom and understanding",
  "Miraculous powers for serving others",
  "Ultimate spiritual liberation (Moksha)",
  "Cosmic consciousness and unity awareness",
  "Eternal bliss and peace"
]

export default function SiddhidatriPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-purple-400/20"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-purple-600 rounded-full text-white font-bold text-2xl mb-6">
            9
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-600 via-orange-500 to-purple-600 bg-clip-text text-transparent">
              Siddhidatri
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-orange-700 mb-8 font-semibold">सिद्धिदात्री - Giver of Supernatural Powers</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-6 py-3 bg-yellow-600 text-white rounded-full font-semibold">Ninth Form of Navadurga</span>
            <span className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold">Day 9 of Navaratri</span>
            <span className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-purple-600 text-white rounded-full font-semibold">All Chakras</span>
          </div>
          <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-4xl mx-auto">
            The supreme form who grants all supernatural powers and leads devotees to ultimate spiritual liberation
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 via-orange-500 to-purple-600 mx-auto"></div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100">
            <h2 className="text-3xl font-bold text-orange-800 mb-6">Who is Siddhidatri?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Goddess Siddhidatri, the ninth and final manifestation of Navadurga, represents the culmination of 
                spiritual evolution and the bestower of all supernatural powers (Siddhis). Her name means "Giver of 
                Siddhis" - the eight primary supernatural abilities that advanced spiritual practitioners can attain. 
                She embodies the highest spiritual achievement possible and serves as the gateway to ultimate liberation.
              </p>
              <p className="mb-4">
                Unlike the previous eight forms that represent different aspects of the spiritual journey, Siddhidatri 
                represents its completion. She is depicted sitting on a fully bloomed lotus, symbolizing the complete 
                flowering of consciousness. With four arms holding various sacred objects including a lotus, conch, 
                mace, and disc, she grants both worldly powers and spiritual wisdom to her devotees.
              </p>
              <p>
                Remarkably, even Lord Shiva worships Siddhidatri to maintain his cosmic powers. It is said that through 
                her grace, half of Shiva's body became the feminine Ardhanarishvara form, representing the perfect 
                integration of Shiva (consciousness) and Shakti (energy). This makes her not just a form of the Divine 
                Mother, but the source from which even the highest gods derive their abilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eight Siddhis */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-100 via-yellow-100 to-purple-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">The Eight Supernatural Powers (Ashta Siddhis)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eightSiddhis.map((siddhi, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-orange-200">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-orange-700 mb-1">{siddhi.siddhi}</h3>
                  <p className="text-orange-600 text-sm font-medium">{siddhi.sanskrit}</p>
                </div>
                <p className="text-gray-700 mb-3 text-sm">{siddhi.description}</p>
                <div className="bg-yellow-50 p-3 rounded-lg mb-3 border border-yellow-200">
                  <h4 className="text-xs font-semibold text-yellow-800 mb-1">Practical Application:</h4>
                  <p className="text-yellow-700 text-xs">{siddhi.application}</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                  <h4 className="text-xs font-semibold text-purple-800 mb-1">Spiritual Meaning:</h4>
                  <p className="text-purple-700 text-xs">{siddhi.spiritual}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divine Knowledge */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Divine Knowledge Bestowed</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {divineKnowledge.map((knowledge, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
                <h3 className="text-lg font-bold text-orange-700 mb-3">{knowledge.knowledge}</h3>
                <p className="text-gray-700 mb-4 text-sm">{knowledge.description}</p>
                <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                  <h4 className="text-sm font-semibold text-orange-800 mb-1">Attainment:</h4>
                  <p className="text-orange-700 text-sm">{knowledge.attainment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Attainment Levels */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-100 via-orange-100 to-yellow-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Levels of Spiritual Attainment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {spiritualAttainments.map((level, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-orange-700">{level.level}</h3>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-orange-800 mb-2">Attainments:</h4>
                  <ul className="space-y-1">
                    {level.attainments.map((attainment, aIndex) => (
                      <li key={aIndex} className="flex items-center text-xs">
                        <div className="w-1 h-1 bg-orange-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">{attainment}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                  <h4 className="text-sm font-semibold text-purple-800 mb-1">Practices:</h4>
                  <ul className="space-y-1">
                    {level.practices.map((practice, pIndex) => (
                      <li key={pIndex} className="flex items-center text-xs">
                        <div className="w-1 h-1 bg-purple-500 rounded-full mr-2"></div>
                        <span className="text-purple-700">{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sacred Mantras */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Sacred Mantras</h2>
          <div className="space-y-8">
            {siddhidatriMantras.map((mantra, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-orange-100">
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-orange-700 mb-4">{mantra.sanskrit}</h3>
                  <p className="text-lg text-purple-600 italic mb-3">{mantra.transliteration}</p>
                  <p className="text-gray-700">{mantra.meaning}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worship for Siddhis */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-100 via-orange-100 to-purple-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Worship Methods for Specific Siddhis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {worshipForSiddhis.map((worship, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
                <h3 className="text-lg font-bold text-orange-700 mb-3">{worship.purpose}</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">Method:</h4>
                    <p className="text-gray-700 text-sm">{worship.method}</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                    <h4 className="text-sm font-semibold text-yellow-800 mb-1">Offerings:</h4>
                    <p className="text-yellow-700 text-sm">{worship.offering}</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                    <h4 className="text-sm font-semibold text-purple-800 mb-1">Result:</h4>
                    <p className="text-purple-700 text-sm">{worship.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Completion Qualities */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Qualities of Spiritual Completion</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completionQualities.map((quality, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
                <h3 className="text-lg font-bold text-orange-700 mb-3">{quality.quality}</h3>
                <p className="text-gray-700 mb-4 text-sm">{quality.description}</p>
                <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                  <h4 className="text-sm font-semibold text-orange-800 mb-1">Development:</h4>
                  <p className="text-orange-700 text-sm">{quality.development}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worship Benefits */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-100 via-orange-100 to-yellow-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Ultimate Benefits of Worship</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {worshipBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center border border-orange-100">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-gray-700 font-medium text-sm">{benefit}</p>
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
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
                <h3 className="text-lg font-bold text-orange-700 mb-3">{item.fact}</h3>
                <p className="text-gray-700 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Significance */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-50 via-orange-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-8">Ultimate Spiritual Significance</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-orange-200">
            <p className="text-lg text-gray-700 mb-6">
              Siddhidatri represents the ultimate destination of the spiritual journey - the state where the individual 
              consciousness merges completely with cosmic consciousness, gaining access to all divine powers naturally. 
              She teaches that supernatural abilities are not the goal of spiritual practice, but rather natural 
              expressions of our true divine nature when all limitations are transcended.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Her worship completes the ninefold journey of Navadurga, transforming the devotee from an ordinary 
              seeker into a divine being capable of serving the cosmic purpose. Through her grace, one realizes that 
              the ultimate siddhi (power) is the ability to remain established in one's true nature while serving 
              the divine will through apparent individual actions.
            </p>
            <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-purple-100 rounded-xl p-6 border border-orange-200">
              <h3 className="text-xl font-bold text-orange-800 mb-4">The Final Teaching</h3>
              <p className="text-gray-700">
                "When you have received all siddhis, surrender them back to the Divine Mother. For the greatest 
                supernatural power is the ability to remain naturally surrendered, allowing the cosmic intelligence 
                to work through you for the benefit of all existence. This is Siddhidatri's ultimate gift - not 
                power over others, but power to serve the divine purpose effortlessly."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-800 mb-8">Complete the Sacred Journey</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/festivals/durga-puja/shailaputri" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-yellow-400 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Begin Again: Shailaputri →
            </Link>
            <Link href="/festivals/durga-puja/mahagauri" className="px-8 py-4 bg-gradient-to-r from-gray-600 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              ← Previous: Mahagauri
            </Link>
            <Link href="/festivals/durga-puja" className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Back to Durga Puja
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}