import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mahagauri - Eighth Form of Navadurga | Extremely Fair One | PeacefulAnswers',
  description: 'Discover Goddess Mahagauri, the eighth form of Navadurga known for her pure white complexion. Learn about her purification powers, mantras, and blessings for peace and prosperity.',
  keywords: 'Mahagauri, Navadurga, eighth form Durga, white goddess, purification, peace, prosperity, Navaratri Day 8, bull vehicle, fair complexion',
  openGraph: {
    title: 'Mahagauri - Eighth Form of Navadurga | Extremely Fair One',
    description: 'Explore the pure and serene goddess Mahagauri who represents cleansing, peace, and spiritual purification.',
    type: 'website',
  },
}

const mahagauriMantras = [
  {
    sanskrit: "ॐ देवी महागौर्यै नमः",
    transliteration: "Om Devi Mahagauryai Namah",
    meaning: "Salutations to Goddess Mahagauri"
  },
  {
    sanskrit: "श्वेते वृषे समारूढा श्वेताम्बरधरा शुचिः। महागौरी शुभं दद्यान्महादेवप्रमोदिनी॥",
    transliteration: "Shvete Vrishe Samarudha Shvetambaradhara Shuchih | Mahagauri Shubham Dadyan Mahadevapamodini ||",
    meaning: "Mounted on white bull, wearing white clothes, pure Mahagauri who delights Mahadeva, bestow auspiciousness"
  },
  {
    sanskrit: "या देवी सर्वभूतेषु महागौरी रूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥",
    transliteration: "Ya Devi Sarvabhuteshu Mahagauri Rupena Samsthita | Namastasyai Namastasyai Namastasyai Namo Namah ||",
    meaning: "Salutations to the Goddess who resides in all beings in the form of Mahagauri"
  }
]

const purificationPowers = [
  {
    type: "Spiritual Purification",
    description: "Cleanses the soul of all sins, negative karma, and spiritual impurities",
    method: "Regular meditation on her white radiant form",
    result: "Spiritual evolution and divine grace"
  },
  {
    type: "Mental Purification",
    description: "Removes negative thoughts, doubts, and mental disturbances",
    method: "Chanting her mantras with pure intention",
    result: "Mental peace and clarity of thought"
  },
  {
    type: "Emotional Purification",
    description: "Heals emotional wounds and removes toxic feelings like hatred and jealousy",
    method: "Offering white flowers and seeking forgiveness",
    result: "Emotional balance and loving heart"
  },
  {
    type: "Physical Purification",
    description: "Cleanses the body of toxins and diseases, promoting health",
    method: "Drinking water blessed with her mantras",
    result: "Physical health and vitality"
  },
  {
    type: "Environmental Purification",
    description: "Sanctifies homes and spaces, removing negative energies",
    method: "Sprinkling blessed water and burning incense",
    result: "Harmonious and peaceful atmosphere"
  },
  {
    type: "Karmic Purification",
    description: "Burns away the effects of past negative actions and their consequences",
    method: "Performing selfless service in her name",
    result: "Liberation from karmic bondage"
  }
]

const whiteSymbolism = [
  {
    element: "White Complexion",
    meaning: "Purity of consciousness and freedom from all mental modifications",
    spiritual: "Represents the state of enlightenment and divine realization"
  },
  {
    element: "White Clothes",
    meaning: "Simplicity, renunciation, and detachment from material desires",
    spiritual: "Shows the path of spiritual discipline and contentment"
  },
  {
    element: "White Bull",
    meaning: "Controlled mind and disciplined spiritual practice",
    spiritual: "Symbolizes dharma that carries the soul to liberation"
  },
  {
    element: "White Lotus",
    meaning: "Unfolding of pure consciousness from the mud of worldly existence",
    spiritual: "Represents the blooming of spiritual awareness"
  },
  {
    element: "White Light",
    meaning: "Divine illumination that dispels the darkness of ignorance",
    spiritual: "The light of wisdom that reveals ultimate truth"
  }
]

const transformationStory = [
  {
    phase: "Kalaratri's Intensity",
    description: "After the fierce battle as Kalaratri, the goddess was covered in dust, ash, and the grime of cosmic warfare",
    lesson: "Sometimes we must go through darkness to appreciate light"
  },
  {
    phase: "Shiva's Love",
    description: "Lord Shiva, seeing his beloved in this state, poured the sacred waters of Ganga over her",
    lesson: "Divine love purifies and transforms even the fiercest energy"
  },
  {
    phase: "Sacred Bathing",
    description: "The holy water washed away all impurities, revealing her original fair and beautiful form",
    lesson: "Spiritual practices cleanse our true nature from accumulated negativity"
  },
  {
    phase: "Mahagauri Birth",
    description: "She emerged as Mahagauri - extremely fair, pure, and radiant with divine beauty",
    lesson: "Purification leads to the revelation of our inherent divine nature"
  },
  {
    phase: "Peaceful Form",
    description: "From the terrifying Kalaratri, she became the most peaceful and benevolent form",
    lesson: "True strength includes the ability to be gentle and compassionate"
  }
]

const lessKnownFacts = [
  {
    fact: "Age of Eight",
    detail: "Mahagauri is often depicted as an eight-year-old girl, representing the innocence and purity of childhood before the world's conditioning affects consciousness."
  },
  {
    fact: "Ganga Connection",
    detail: "She has a special relationship with River Ganga, as it was Ganga's waters that transformed her from Kalaratri to Mahagauri. Bathing in Ganga while remembering her grants extra purification."
  },
  {
    fact: "Four Arms Meaning",
    detail: "Her four arms represent the four types of devotees: Arta (distressed), Artharthi (seeker of prosperity), Jijnasu (seeker of knowledge), and Jnani (wise one)."
  },
  {
    fact: "Damaru Drum",
    detail: "She sometimes holds a damaru (small drum) which produces the cosmic sound 'Om' and represents the rhythm of creation and destruction."
  },
  {
    fact: "Healing Powers",
    detail: "Traditional healers invoke Mahagauri for treating skin diseases, as her pure white form is believed to restore skin's natural radiance and health."
  },
  {
    fact: "Peaceful Warrior",
    detail: "Despite her peaceful appearance, she retains the power of Kalaratri within her, showing that true peace comes from inner strength, not weakness."
  },
  {
    fact: "Wedding Blessings",
    detail: "Brides traditionally pray to Mahagauri before marriage for a pure and harmonious relationship, as she represents the ideal of purified love."
  },
  {
    fact: "Meditation Guide",
    detail: "Advanced yogis meditate on her form to achieve the state of 'Chitshudhi' - complete purification of consciousness."
  },
  {
    fact: "Cow Protection",
    detail: "She is particularly fond of cows and their protection. Serving cows is considered one of the most effective ways to please her."
  },
  {
    fact: "Moon Connection",
    detail: "Her radiance is compared to the full moon, and her worship on full moon nights is considered especially powerful for mental purification."
  }
]

const purificationRituals = [
  {
    ritual: "Sacred Bath",
    description: "Take bath in flowing water while chanting her mantras",
    items: ["White flowers", "Milk", "Honey", "Sandalwood paste"],
    benefit: "Physical and spiritual cleansing"
  },
  {
    ritual: "White Fast",
    description: "Eat only white foods like milk, rice, coconut for a day",
    items: ["Milk", "White rice", "Coconut", "White sweets"],
    benefit: "Internal purification and discipline"
  },
  {
    ritual: "Forgiveness Practice",
    description: "Seek forgiveness from those you've wronged and forgive others",
    items: ["White cloth", "Pure intentions", "Humble heart"],
    benefit: "Emotional healing and karma cleansing"
  },
  {
    ritual: "Service to Cows",
    description: "Feed and care for cows as expression of compassion",
    items: ["Green grass", "Clean water", "Gentle touch"],
    benefit: "Merit accumulation and heart purification"
  }
]

const peacefulQualities = [
  {
    quality: "Serenity",
    description: "Embodies perfect tranquility and inner peace",
    cultivation: "Practice mindfulness and meditation daily"
  },
  {
    quality: "Compassion", 
    description: "Shows unlimited love and understanding for all beings",
    cultivation: "Develop empathy and practice loving-kindness"
  },
  {
    quality: "Purity",
    description: "Represents complete freedom from mental and moral impurities",
    cultivation: "Maintain ethical conduct and pure intentions"
  },
  {
    quality: "Humility",
    description: "Despite her power, she remains humble and approachable",
    cultivation: "Practice selfless service and ego dissolution"
  },
  {
    quality: "Forgiveness",
    description: "Has the power to forgive any sin and grant fresh start",
    cultivation: "Let go of grudges and practice unconditional forgiveness"
  },
  {
    quality: "Grace",
    description: "Moves with divine elegance and bestows grace upon devotees",
    cultivation: "Develop refined behavior and spiritual etiquette"
  }
]

const worshipBenefits = [
  "Complete purification of sins and negative karma",
  "Mental peace and emotional stability",
  "Physical health and natural beauty enhancement",
  "Harmonious family relationships",
  "Success in spiritual practices",
  "Protection from negative influences",
  "Fulfillment of righteous desires",
  "Blessing for pure and happy marriage",
  "Prosperity with contentment",
  "Development of divine qualities",
  "Liberation from past mistakes",
  "Attainment of inner radiance"
]

export default function MahagauriPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-blue-100/50 to-purple-100/30"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-bold text-2xl mb-6">
            8
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-white bg-clip-text text-transparent">
              Mahagauri
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-700 mb-8 font-semibold">महागौरी - Extremely Fair One</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold">Eighth Form of Navadurga</span>
            <span className="px-6 py-3 bg-purple-500 text-white rounded-full font-semibold">Day 8 of Navaratri</span>
            <span className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-full font-semibold">Crown Chakra</span>
          </div>
          <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-4xl mx-auto">
            The supremely pure and peaceful goddess who cleanses all impurities and grants spiritual radiance
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-white mx-auto"></div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Who is Mahagauri?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Goddess Mahagauri, the eighth manifestation of Navadurga, represents the pinnacle of purity, peace, 
                and spiritual radiance. Her name means "Extremely Fair" or "Supremely White," referring not just to her 
                complexion but to the purity of consciousness she embodies. She is the transformed, peaceful version of 
                the fierce Kalaratri, showing how spiritual purification can completely transform our nature.
              </p>
              <p className="mb-4">
                According to the sacred story, after her intense battle as Kalaratri, the goddess was covered in dust 
                and ash. Lord Shiva, moved by love for his consort, poured the sacred waters of Ganga over her. The 
                holy water washed away all impurities, revealing her original form as Mahagauri - radiantly beautiful, 
                pure white, and serene. This transformation symbolizes how divine grace can purify and reveal our true nature.
              </p>
              <p>
                Mahagauri is depicted riding a white bull, wearing pure white garments, and holding various sacred 
                objects including a trident and drum. Her four arms represent her ability to bless devotees in all 
                four directions. She is associated with the Crown Chakra (Sahasrara), representing the highest spiritual 
                consciousness and connection with the divine. Her worship brings peace, prosperity, and complete purification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Story */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">The Divine Transformation</h2>
          <div className="space-y-6">
            {transformationStory.map((phase, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-200">
                <div className={`p-6 bg-gradient-to-r ${index % 2 === 0 ? 'from-blue-600 to-purple-500' : 'from-purple-500 to-blue-600'} text-white`}>
                  <h3 className="text-xl font-bold mb-2">{phase.phase}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-3">{phase.description}</p>
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <p className="text-blue-800 font-medium italic">Teaching: {phase.lesson}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White Symbolism */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">Sacred White Symbolism</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whiteSymbolism.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
                <h3 className="text-lg font-bold text-blue-700 mb-3">{item.element}</h3>
                <p className="text-gray-700 mb-3 text-sm">{item.meaning}</p>
                <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                  <p className="text-purple-800 font-medium text-sm">{item.spiritual}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purification Powers */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">Powers of Purification</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {purificationPowers.map((power, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
                <h3 className="text-lg font-bold text-blue-700 mb-3">{power.type}</h3>
                <p className="text-gray-700 mb-3 text-sm">{power.description}</p>
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 mb-3">
                  <h4 className="text-sm font-semibold text-blue-800 mb-1">Method:</h4>
                  <p className="text-blue-700 text-sm">{power.method}</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                  <h4 className="text-sm font-semibold text-purple-800 mb-1">Result:</h4>
                  <p className="text-purple-700 text-sm">{power.result}</p>
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
            {mahagauriMantras.map((mantra, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">{mantra.sanskrit}</h3>
                  <p className="text-lg text-purple-600 italic mb-3">{mantra.transliteration}</p>
                  <p className="text-gray-700">{mantra.meaning}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purification Rituals */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">Purification Rituals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {purificationRituals.map((ritual, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
                <h3 className="text-lg font-bold text-blue-700 mb-3">{ritual.ritual}</h3>
                <p className="text-gray-700 mb-4 text-sm">{ritual.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-800 mb-2">Required Items:</h4>
                  <ul className="space-y-1">
                    {ritual.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                  <h4 className="text-sm font-semibold text-purple-800 mb-1">Benefit:</h4>
                  <p className="text-purple-700 text-sm">{ritual.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Peaceful Qualities */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">Divine Peaceful Qualities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {peacefulQualities.map((quality, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
                <h3 className="text-lg font-bold text-blue-700 mb-3">{quality.quality}</h3>
                <p className="text-gray-700 mb-4 text-sm">{quality.description}</p>
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                  <h4 className="text-sm font-semibold text-blue-800 mb-1">How to Cultivate:</h4>
                  <p className="text-blue-700 text-sm">{quality.cultivation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worship Benefits */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">Benefits of Worship</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {worshipBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center border border-blue-100">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">Lesser Known Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lessKnownFacts.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
                <h3 className="text-lg font-bold text-blue-700 mb-3">{item.fact}</h3>
                <p className="text-gray-700 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Significance */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8">Spiritual Significance</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-200">
            <p className="text-lg text-gray-700 mb-6">
              Mahagauri represents the ultimate goal of spiritual practice - the purification and refinement of 
              consciousness until it reflects divine light perfectly. Her transformation from Kalaratri shows that 
              no matter how dark or difficult our circumstances, divine grace can restore our original purity and radiance.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              She teaches us that true beauty and peace come from inner purification, not external adornment. Her 
              white appearance symbolizes a mind that has been cleansed of all negative thoughts, desires, and 
              conditioning, reflecting only truth and love. Through her grace, we learn to maintain purity in thought, 
              word, and deed.
            </p>
            <div className="bg-gradient-to-r from-blue-100 via-white to-purple-100 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Daily Purification Practice</h3>
              <p className="text-gray-700">
                Begin each day by visualizing Mahagauri's radiant white light filling your entire being, washing away 
                all negativity from yesterday. Throughout the day, maintain awareness of this pure light within you, 
                ensuring your thoughts, words, and actions arise from this sacred space of inner cleanliness.
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
            <Link href="/festivals/durga-puja/siddhidatri" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-400 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Next: Siddhidatri →
            </Link>
            <Link href="/festivals/durga-puja/kalaratri" className="px-8 py-4 bg-gradient-to-r from-gray-600 to-blue-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              ← Previous: Kalaratri
            </Link>
            <Link href="/festivals/durga-puja" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Back to Durga Puja
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}