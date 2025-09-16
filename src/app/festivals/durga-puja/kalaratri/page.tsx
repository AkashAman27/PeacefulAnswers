import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kalaratri - Seventh Form of Navadurga | Night of Death | PeacefulAnswers',
  description: 'Discover Goddess Kalaratri, the seventh and most fierce form of Navadurga. Learn about her terrifying appearance, protective powers, and ability to destroy fear and negativity.',
  keywords: 'Kalaratri, Navadurga, seventh form Durga, fierce goddess, night of death, fear destroyer, protection, Navaratri Day 7, donkey vehicle, dark goddess',
  openGraph: {
    title: 'Kalaratri - Seventh Form of Navadurga | Night of Death',
    description: 'Explore the most terrifying yet protective form of Goddess Durga who destroys fear and negative forces.',
    type: 'website',
  },
}

const kalaratriMantras = [
  {
    sanskrit: "ॐ देवी कालरात्र्यै नमः",
    transliteration: "Om Devi Kalaratryai Namah",
    meaning: "Salutations to Goddess Kalaratri"
  },
  {
    sanskrit: "एकवेणी जपाकर्णपूरा नग्ना खरास्थिता। लम्बोष्ठी कर्णिकाकर्णी तैलाभ्यक्त शरीरिणी॥",
    transliteration: "Ekaveni Japakarnapura Nagna Kharasthita | Lambosthi Karnikakarni Tailabhyakta Sharirini ||",
    meaning: "With single braid, dark complexion, naked, riding a donkey, with long lips and large ears, body anointed with oil"
  },
  {
    sanskrit: "वरदान चतुर्हस्ता कालरात्रिर्भयङ्करी। धावन्सदा पापघ्नी शुभदास्तु सदा मम॥",
    transliteration: "Varadana Chaturtshasta Kalaratrir Bhayankari | Dhavan Sada Papaghni Shubhadastu Sada Mama ||",
    meaning: "Four-armed giver of boons, terrifying Kalaratri, always running and destroying sins, bestow auspiciousness upon me"
  }
]

const terrifyingAspects = [
  {
    aspect: "Dark Complexion",
    description: "Pitch black skin representing the void from which creation emerges and returns",
    symbolism: "The cosmic darkness that destroys ignorance and illuminates truth"
  },
  {
    aspect: "Disheveled Hair",
    description: "Untied, wild hair flowing freely without any ornaments or decorations",
    symbolism: "Freedom from social conventions and the raw power of uncontrolled nature"
  },
  {
    aspect: "Naked Form",
    description: "Completely unclothed, representing absolute truth without any coverings",
    symbolism: "The naked reality that strips away all illusions and pretenses"
  },
  {
    aspect: "Flaming Nostrils",
    description: "Fire emanating from her nostrils with each breath she takes",
    symbolism: "The life force (prana) that can both create and destroy"
  },
  {
    aspect: "Donkey Vehicle",
    description: "Rides a donkey instead of the usual lion or tiger",
    symbolism: "Humility and the ability to use even humble means for divine purposes"
  },
  {
    aspect: "Three Eyes",
    description: "Third eye blazing with destructive fire that burns away evil",
    symbolism: "Past, present, and future vision that sees through all deceptions"
  }
]

const protectivePowers = [
  {
    power: "Fear Destruction",
    description: "Eliminates all types of fears including death, darkness, and unknown terrors",
    benefit: "Grants fearlessness and courage in the face of any adversity"
  },
  {
    power: "Negative Energy Removal", 
    description: "Destroys black magic, evil spells, and psychic attacks directed at devotees",
    benefit: "Creates a protective shield against all forms of supernatural harm"
  },
  {
    power: "Nightmare Prevention",
    description: "Protects from bad dreams, night terrors, and sleep disturbances",
    benefit: "Ensures peaceful sleep and pleasant dreams"
  },
  {
    power: "Enemy Destruction",
    description: "Neutralizes hidden enemies, betrayers, and those who wish harm",
    benefit: "Reveals true intentions of people and provides protection from betrayal"
  },
  {
    power: "Obstacle Removal",
    description: "Clears all impediments and barriers blocking spiritual or material progress",
    benefit: "Opens pathways to success and removes stubborn blockages"
  },
  {
    power: "Karmic Cleansing",
    description: "Burns away negative karma and past life influences causing suffering",
    benefit: "Accelerates spiritual evolution and breaks karmic patterns"
  }
]

const lessKnownFacts = [
  {
    fact: "Time Goddess",
    detail: "Kalaratri is literally 'Night of Time' - she represents the destructive aspect of time (Kala) that eventually consumes everything. She controls time's power to dissolve and transform."
  },
  {
    fact: "Shiva's Recognition",
    detail: "Even Lord Shiva becomes corpse-like (Shava) beneath her feet, showing that she represents the ultimate reality beyond even destruction - the consciousness that witnesses all."
  },
  {
    fact: "Donkey's Wisdom",
    detail: "Her donkey vehicle represents patience, humility, and the ability to carry heavy burdens. Donkeys are also associated with Saturn (Shani), the planet of karma and justice."
  },
  {
    fact: "Lightning Powers",
    detail: "She controls lightning and thunderstorms. Ancient texts describe her as the source of lightning bolts that destroy evil forces hiding in darkness."
  },
  {
    fact: "Alcohol Offering",
    detail: "In some tantric traditions, alcohol is offered to Kalaratri as it represents the intoxication of maya (illusion) that she helps devotees overcome."
  },
  {
    fact: "Midnight Worship",
    detail: "She is most effectively worshipped at midnight when the veil between dimensions is thinnest and her power to transform consciousness is strongest."
  },
  {
    fact: "Left-Hand Path",
    detail: "Associated with Vamachara (left-hand tantric practices) where conventional taboos are transcended to reach higher spiritual states."
  },
  {
    fact: "Protective Paradox",
    detail: "Despite her terrifying appearance, she's called 'Shubhankari' (auspicious one) because she protects devotees by frightening away evil forces."
  },
  {
    fact: "Dream Appearances",
    detail: "Devotees often report her appearing in dreams during times of crisis to provide protection and guidance through difficult periods."
  },
  {
    fact: "Warrior Training",
    detail: "Ancient warriors would invoke her before battles to overcome fear of death and develop the psychological strength needed for warfare."
  }
]

const fearTypes = [
  "Death and mortality",
  "Darkness and unknown",
  "Supernatural entities",
  "Financial ruin", 
  "Social rejection",
  "Physical pain",
  "Mental illness",
  "Spiritual attacks",
  "Future uncertainty",
  "Past regrets",
  "Betrayal and abandonment",
  "Loss of loved ones"
]

const worshipGuidelines = [
  {
    practice: "Timing",
    details: ["Worship during midnight hours (11 PM - 1 AM)", "Saturday nights are especially powerful", "Dark moon nights (Amavasya) are ideal"]
  },
  {
    practice: "Offerings",
    details: ["Black sesame seeds", "Jaggery and coconut", "Mustard oil lamps", "Black flowers (if available)", "Red chili garlands"]
  },
  {
    practice: "Environment",
    details: ["Dimly lit room with single oil lamp", "Burn frankincense or myrrh", "Use black or dark red cloth", "Minimize distractions"]
  },
  {
    practice: "Mental State",
    details: ["Approach with reverence, not fear", "Surrender all anxieties to her", "Visualize her protection around you", "Maintain courage and devotion"]
  }
]

const transformationStages = [
  {
    stage: "Fear Acknowledgment",
    description: "Honestly recognizing and accepting all fears without denial or suppression",
    outcome: "Creates foundation for genuine spiritual growth"
  },
  {
    stage: "Surrender to Darkness",
    description: "Willingly entering the dark night of the soul under her protection",
    outcome: "Begins the process of ego dissolution and transformation"
  },
  {
    stage: "Death of Illusions",
    description: "Allowing false beliefs, attachments, and identities to be destroyed",
    outcome: "Clears space for authentic self to emerge"
  },
  {
    stage: "Rebirth in Light",
    description: "Emerging from the darkness with new wisdom and fearless spirit",
    outcome: "Attainment of genuine confidence and spiritual strength"
  }
]

export default function KalaratriPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/30 via-black/50 to-indigo-900/30"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-700 to-black rounded-full text-white font-bold text-2xl mb-6">
            7
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-white bg-clip-text text-transparent">
              Kalaratri
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-purple-300 mb-8 font-semibold">कालरात्रि - Night of Death</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-6 py-3 bg-purple-700 text-white rounded-full font-semibold">Seventh Form of Navadurga</span>
            <span className="px-6 py-3 bg-black text-white rounded-full font-semibold">Day 7 of Navaratri</span>
            <span className="px-6 py-3 bg-gradient-to-r from-purple-700 to-black text-white rounded-full font-semibold">Sahasrara Chakra</span>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            The most terrifying yet protective form who destroys fear, negativity, and ignorance through divine darkness
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 via-pink-300 to-white mx-auto"></div>
        </div>
      </section>

      {/* Warning & Reverence */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900 to-black rounded-2xl shadow-xl p-8 border border-purple-500">
            <h2 className="text-3xl font-bold text-purple-300 mb-6">Approach with Reverence</h2>
            <div className="prose prose-lg max-w-none text-gray-300">
              <p className="mb-4">
                Goddess Kalaratri is the most fierce and terrifying form among the Navadurga, yet she is supremely 
                protective of her devotees. Her frightening appearance serves a divine purpose - to destroy all fears 
                by embodying them completely. When we face our deepest terrors through her grace, we discover that 
                death and darkness are merely gateways to higher consciousness.
              </p>
              <p className="mb-4">
                Her name means 'Night of Time' or 'Night of Death' - representing the cosmic dissolution that precedes 
                every new creation. She appears when we need to let go of what no longer serves us, even if that 
                process appears destructive. Through her fierce compassion, she burns away illusions and reveals the 
                immortal truth within.
              </p>
              <div className="bg-purple-800/50 rounded-xl p-6 border border-purple-400">
                <h3 className="text-xl font-bold text-purple-200 mb-4">Sacred Truth</h3>
                <p className="text-purple-100">
                  "Those who worship Kalaratri with devotion and courage find that she is the most loving and 
                  protective mother. Her terrifying form exists only to terrify the forces that would harm her children."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terrifying Aspects */}
      <section className="py-16 px-4 bg-gradient-to-r from-black via-purple-900 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-300 mb-12">Divine Terrifying Aspects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {terrifyingAspects.map((aspect, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-800 to-black rounded-xl shadow-lg p-6 border border-purple-600">
                <h3 className="text-lg font-bold text-purple-300 mb-3">{aspect.aspect}</h3>
                <p className="text-gray-300 mb-3 text-sm">{aspect.description}</p>
                <div className="bg-purple-900/50 p-3 rounded-lg border border-purple-500">
                  <p className="text-purple-200 font-medium text-sm">{aspect.symbolism}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protective Powers */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-300 mb-12">Protective Powers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {protectivePowers.map((power, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-purple-900 rounded-xl shadow-lg p-6 border border-gray-600">
                <h3 className="text-lg font-bold text-white mb-3">{power.power}</h3>
                <p className="text-gray-300 mb-4 text-sm">{power.description}</p>
                <div className="bg-purple-800/50 p-3 rounded-lg border border-purple-400">
                  <h4 className="text-sm font-semibold text-purple-200 mb-1">Benefit:</h4>
                  <p className="text-purple-100 text-sm">{power.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fear Destroyer */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900 via-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-300 mb-12">Destroyer of All Fears</h2>
          <div className="bg-gradient-to-br from-purple-800 to-black rounded-2xl p-8 border border-purple-500">
            <p className="text-center text-purple-200 mb-8 text-lg">
              Kalaratri destroys every type of fear by showing us the ultimate truth - that consciousness itself is immortal and indestructible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {fearTypes.map((fear, index) => (
                <div key={index} className="bg-purple-900/50 rounded-lg p-4 border border-purple-600">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs mr-3">
                      ✓
                    </div>
                    <span className="text-purple-200 text-sm font-medium">{fear}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Mantras */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-300 mb-12">Sacred Mantras</h2>
          <div className="space-y-8">
            {kalaratriMantras.map((mantra, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-800 to-black rounded-xl shadow-lg p-8 border border-purple-500">
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-purple-300 mb-4">{mantra.sanskrit}</h3>
                  <p className="text-lg text-purple-200 italic mb-3">{mantra.transliteration}</p>
                  <p className="text-gray-300">{mantra.meaning}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worship Guidelines */}
      <section className="py-16 px-4 bg-gradient-to-r from-black via-purple-900 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-300 mb-12">Worship Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {worshipGuidelines.map((guideline, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-800 to-black rounded-xl shadow-lg p-6 border border-purple-600">
                <h3 className="text-lg font-bold text-purple-300 mb-4">{guideline.practice}</h3>
                <ul className="space-y-2">
                  {guideline.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Process */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-300 mb-12">The Dark Night Transformation</h2>
          <div className="space-y-6">
            {transformationStages.map((stage, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-800 to-black rounded-xl shadow-lg overflow-hidden border border-purple-500">
                <div className={`p-6 bg-gradient-to-r ${index % 2 === 0 ? 'from-purple-700 to-black' : 'from-black to-purple-700'} text-white`}>
                  <h3 className="text-xl font-bold mb-2">Stage {index + 1}: {stage.stage}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-3">{stage.description}</p>
                  <div className="bg-purple-900/50 p-3 rounded-lg border border-purple-600">
                    <p className="text-purple-200 font-medium">{stage.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lesser Known Facts */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900 via-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-300 mb-12">Lesser Known Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lessKnownFacts.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-purple-900 rounded-xl shadow-lg p-6 border border-gray-600">
                <h3 className="text-lg font-bold text-purple-300 mb-3">{item.fact}</h3>
                <p className="text-gray-300 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Significance */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-300 mb-8">Spiritual Significance</h2>
          <div className="bg-gradient-to-br from-purple-800 to-black rounded-2xl shadow-xl p-8 border border-purple-500">
            <p className="text-lg text-gray-300 mb-6">
              Kalaratri represents the necessary darkness that precedes every spiritual awakening. She teaches us that 
              transformation requires the courage to face our deepest fears and allow parts of ourselves to die so that 
              our true nature can be revealed. Her terrifying form is actually the most compassionate gift - showing us 
              that nothing external can truly harm our essential being.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Through her worship, we learn to embrace the unknown, trust the process of dissolution, and find peace in 
              the void. She is the cosmic mother who appears when we need to be stripped of everything false so that we 
              can discover what is eternally true within us.
            </p>
            <div className="bg-gradient-to-r from-purple-900 to-black rounded-xl p-6 border border-purple-400">
              <h3 className="text-xl font-bold text-purple-200 mb-4">The Ultimate Teaching</h3>
              <p className="text-purple-100">
                "When you have faced the darkness within and without, when you have stared into the abyss of your own 
                mortality, you discover the immortal light that no darkness can extinguish. This is Kalaratri's gift."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-300 mb-8">Continue the Journey</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/festivals/durga-puja/mahagauri" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-white text-black font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Next: Mahagauri →
            </Link>
            <Link href="/festivals/durga-puja/katyayani" className="px-8 py-4 bg-gradient-to-r from-gray-600 to-purple-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              ← Previous: Katyayani
            </Link>
            <Link href="/festivals/durga-puja" className="px-8 py-4 bg-gradient-to-r from-purple-700 to-black text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Back to Durga Puja
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}