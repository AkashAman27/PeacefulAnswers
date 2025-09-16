import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Katyayani - Sixth Form of Navadurga | Destroyer of Demons | PeacefulAnswers',
  description: 'Discover Goddess Katyayani, the sixth form of Navadurga and fierce warrior who destroyed demon Mahishasura. Learn about her powers, mantras, and blessings for love and marriage.',
  keywords: 'Katyayani, Navadurga, sixth form Durga, warrior goddess, Mahishasura slayer, marriage blessings, courage, Navaratri Day 6, lion vehicle',
  openGraph: {
    title: 'Katyayani - Sixth Form of Navadurga | Destroyer of Demons',
    description: 'Explore the fierce warrior goddess Katyayani who destroyed evil forces and grants courage to her devotees.',
    type: 'website',
  },
}

const katyayaniMantras = [
  {
    sanskrit: "ॐ देवी कात्यायन्यै नमः",
    transliteration: "Om Devi Katyayanyai Namah", 
    meaning: "Salutations to Goddess Katyayani"
  },
  {
    sanskrit: "चन्द्रहासोज्ज्वलकरा शार्दूलवरवाहना। कात्यायनी शुभं दद्याद्देवी दानवघातिनी॥",
    transliteration: "Chandrahasojjvalakara Shardulavaravahana | Katyayani Shubham Dadyad Devi Danavaghātini ||",
    meaning: "O Katyayani, with bright sword in hand, riding a magnificent lion, destroyer of demons, please bestow auspiciousness"
  },
  {
    sanskrit: "कात्यायनि महामाये महायोगिन्यधीश्वरि। नन्दगोपसुतं देवि पतिं मे कुरु ते नमः॥",
    transliteration: "Katyayani Mahamaye Mahayoginy Adhishvari | Nandagopasutuṃ Devi Patiṃ Me Kuru Te Namah ||",
    meaning: "O Katyayani, great illusion, supreme yogini and goddess, make the son of Nanda Gopa (Krishna) my husband"
  }
]

const warriorQualities = [
  {
    title: "Demon Destroyer",
    description: "The fierce warrior who destroyed Mahishasura and countless demons threatening dharma",
    significance: "Eliminates negative forces, evil influences, and obstacles from devotees' lives"
  },
  {
    title: "Fearless Courage",
    description: "Embodies supreme bravery and the warrior spirit necessary for spiritual battles",
    significance: "Grants fearlessness, confidence, and strength to face life's challenges"
  },
  {
    title: "Marriage Bestower",
    description: "Grants suitable life partners and blesses marriages with happiness and harmony",
    significance: "Helps find ideal spouses and strengthens marital relationships"
  },
  {
    title: "Justice Provider",
    description: "Ensures justice prevails and protects the innocent from oppression",
    significance: "Helps in legal matters, disputes, and situations requiring fair judgment"
  },
  {
    title: "Youth Energy",
    description: "Represents the vigor, passion, and dynamism of youth channeled for good",
    significance: "Provides vitality, enthusiasm, and youthful energy for righteous causes"
  },
  {
    title: "Divine Shakti",
    description: "Pure feminine power that creates, protects, and transforms the universe",
    significance: "Awakens inner strength and divine feminine energy in devotees"
  }
]

const mahishaSuraStory = [
  {
    phase: "Demon's Rise",
    description: "Mahishasura, the buffalo demon, performed severe penance and obtained a boon that no man or god could kill him",
    outcome: "He conquered the three worlds and displaced the gods from heaven"
  },
  {
    phase: "Gods' Desperation", 
    description: "The defeated gods approached Brahma, Vishnu, and Shiva for help against the invincible demon",
    outcome: "The trinity decided to create a supreme feminine power to destroy Mahishasura"
  },
  {
    phase: "Divine Creation",
    description: "From the combined energies of all gods emerged Goddess Katyayani, born in Sage Katyayana's hermitage",
    outcome: "She was armed with weapons from each god and radiated unbearable divine energy"
  },
  {
    phase: "Epic Battle",
    description: "Katyayani fought Mahishasura for nine days in various forms as he kept shape-shifting",
    outcome: "The battle raged across earth, sky, and underworld with cosmic implications"
  },
  {
    phase: "Final Victory",
    description: "On the tenth day, when Mahishasura appeared in his original buffalo form, Katyayani pierced him with her trident",
    outcome: "The demon was destroyed, dharma was restored, and the goddess became Mahishasuramardini"
  }
]

const lessKnownFacts = [
  {
    fact: "Gopi's Worship",
    detail: "The gopis of Vrindavan worshipped Katyayani to get Lord Krishna as their husband. This is why she's especially revered by unmarried girls seeking ideal partners."
  },
  {
    fact: "Sage Katyayana's Role",
    detail: "She was born in Sage Katyayana's ashram and was nurtured by him for three days before the battle. The sage's tapasya and blessings contributed to her divine power."
  },
  {
    fact: "Four Arms Symbolism",
    detail: "Her four arms represent the four goals of human life and her ability to multitask cosmic responsibilities while maintaining perfect balance and grace."
  },
  {
    fact: "Sword Significance",
    detail: "Her sword (Chandrahasa) was forged from the essence of time itself. It can cut through the bonds of karma and liberation souls from the cycle of rebirth."
  },
  {
    fact: "Autumn Connection",
    detail: "She manifests most powerfully during autumn (Sharad season) when the divine feminine energy is at its peak in nature's cycle."
  },
  {
    fact: "Ajna Chakra Link",
    detail: "Associated with the third eye chakra, she grants intuitive wisdom, psychic abilities, and the power to see through illusions and deceptions."
  },
  {
    fact: "Red Color Symbolism",
    detail: "Her red complexion represents the life force (rajas) energy that drives action, passion, and change. Red also symbolizes courage and determination."
  },
  {
    fact: "Lion's Divine Origin",
    detail: "Her lion vehicle was created from the fierce emotions of goddess Durga when she saw suffering caused by evil forces. It represents controlled divine anger."
  },
  {
    fact: "Wedding Rituals",
    detail: "Many Hindu wedding ceremonies include special prayers to Katyayani for the couple's protection and happiness, as she governs marital harmony."
  },
  {
    fact: "Tantric Practices",
    detail: "In Tantric traditions, she's invoked for overcoming enemies, winning legal battles, and gaining victory in competitive situations."
  }
]

const marriageBlessings = [
  {
    blessing: "Finding Ideal Partner",
    description: "Helps unmarried individuals find suitable life partners with compatible qualities",
    practice: "Observe fast on Fridays and chant her mantras 108 times"
  },
  {
    blessing: "Removing Marriage Obstacles", 
    description: "Eliminates delays and barriers preventing marriage unions",
    practice: "Offer red flowers and vermillion to her image for 16 consecutive days"
  },
  {
    blessing: "Marital Harmony",
    description: "Strengthens the bond between spouses and resolves relationship conflicts",
    practice: "Worship together as a couple and seek her blessings for unity"
  },
  {
    blessing: "Protection from Divorce",
    description: "Safeguards marriages from separation and external negative influences",
    practice: "Keep her picture in the bedroom and light ghee lamps daily"
  },
  {
    blessing: "Fertility Enhancement",
    description: "Blesses couples with healthy children and removes fertility issues",
    practice: "Offer bananas and pomegranates while praying for progeny"
  },
  {
    blessing: "Love Attraction",
    description: "Enhances attraction between partners and reignites romance in marriages",
    practice: "Wear red clothes during her worship and use rose water in offerings"
  }
]

const warriorWisdom = [
  "True strength comes from protecting dharma, not from personal gain",
  "Courage is not the absence of fear, but action despite fear",
  "Victory belongs to those who fight for justice, not power",
  "A warrior's greatest weapon is unwavering faith in righteousness",
  "Divine feminine power can overcome any evil force when awakened",
  "The fierce form serves compassion - anger against injustice protects the innocent",
  "Internal battles against ego and desire are harder than external wars",
  "Patience in preparation leads to swift victory in execution"
]

const worshipBenefits = [
  "Destruction of enemies and negative forces",
  "Victory in legal matters and disputes", 
  "Finding suitable marriage partner",
  "Protection from evil eye and black magic",
  "Enhanced courage and fearlessness",
  "Success in competitive examinations",
  "Resolution of family conflicts",
  "Blessings for progeny and fertility",
  "Spiritual strength and determination",
  "Protection during difficult times",
  "Justice in unfair situations",
  "Removal of marriage delays and obstacles"
]

export default function KatyayaniPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-pink-500/20 to-orange-500/20"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-pink-600 rounded-full text-white font-bold text-2xl mb-6">
            6
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Katyayani
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-red-700 mb-8 font-semibold">कात्यायनी - Destroyer of Demons</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-6 py-3 bg-red-600 text-white rounded-full font-semibold">Sixth Form of Navadurga</span>
            <span className="px-6 py-3 bg-pink-500 text-white rounded-full font-semibold">Day 6 of Navaratri</span>
            <span className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full font-semibold">Ajna Chakra</span>
          </div>
          <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-4xl mx-auto">
            The fierce warrior goddess who destroyed Mahishasura and grants courage, justice, and ideal marriage partnerships
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-red-600 via-pink-500 to-orange-500 mx-auto"></div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-red-800 mb-6">Who is Katyayani?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Goddess Katyayani, the sixth manifestation of Navadurga, is the fierce warrior form who destroyed the 
                mighty demon Mahishasura. Born from the collective energy of all gods in the hermitage of Sage Katyayana, 
                she represents divine justice, courage, and the protective power of the universal mother. Her very 
                existence proves that when evil becomes overwhelming, the divine feminine manifests in her most powerful 
                form to restore cosmic balance.
              </p>
              <p className="mb-4">
                Named after Sage Katyayana who nurtured her for three days before the great battle, she embodies the 
                perfect warrior - fierce toward evil yet compassionate toward devotees. She is particularly revered by 
                young women seeking ideal marriage partners, as the gopis of Vrindavan worshipped her to attain Lord 
                Krishna as their husband. This dual nature - destroyer of demons and bestower of love - makes her unique 
                among the Navadurga forms.
              </p>
              <p>
                Depicted with a radiant red complexion, riding a magnificent lion, and wielding divine weapons including 
                the famous sword Chandrahasa, Katyayani represents the peak of divine feminine power. She is associated 
                with the Ajna (Third Eye) chakra, granting intuitive wisdom, psychic abilities, and the power to see 
                through deception and illusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Mahishasura Battle */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-100 via-red-100 to-orange-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-12">The Epic Battle with Mahishasura</h2>
          <div className="space-y-6">
            {mahishaSuraStory.map((phase, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`p-6 bg-gradient-to-r ${index % 2 === 0 ? 'from-red-600 to-pink-500' : 'from-pink-500 to-orange-500'} text-white`}>
                  <h3 className="text-xl font-bold mb-2">{phase.phase}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-3">{phase.description}</p>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="text-red-800 font-medium">{phase.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warrior Qualities */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-12">Divine Warrior Qualities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {warriorQualities.map((quality, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-red-700 mb-3">{quality.title}</h3>
                <p className="text-gray-700 mb-3 text-sm">{quality.description}</p>
                <div className="bg-pink-50 p-3 rounded-lg">
                  <p className="text-pink-800 font-medium text-sm">{quality.significance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marriage Blessings */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-100 via-pink-100 to-red-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-12">Marriage & Relationship Blessings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marriageBlessings.map((blessing, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-red-700 mb-3">{blessing.blessing}</h3>
                <p className="text-gray-700 mb-4 text-sm">{blessing.description}</p>
                <div className="bg-red-50 p-3 rounded-lg">
                  <h4 className="text-sm font-semibold text-red-800 mb-1">Practice:</h4>
                  <p className="text-red-700 text-sm">{blessing.practice}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sacred Mantras */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-12">Sacred Mantras</h2>
          <div className="space-y-8">
            {katyayaniMantras.map((mantra, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-red-700 mb-4">{mantra.sanskrit}</h3>
                  <p className="text-lg text-pink-600 italic mb-3">{mantra.transliteration}</p>
                  <p className="text-gray-700">{mantra.meaning}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warrior Wisdom */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-100 via-pink-100 to-orange-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-12">Warrior Wisdom</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {warriorWisdom.map((wisdom, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 italic font-medium">"{wisdom}"</p>
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
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-gray-700 font-medium text-sm">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lesser Known Facts */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-50 via-red-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-12">Lesser Known Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lessKnownFacts.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-red-700 mb-3">{item.fact}</h3>
                <p className="text-gray-700 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Significance */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-8">Spiritual Significance</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <p className="text-lg text-gray-700 mb-6">
              Katyayani teaches us that divine feminine power is not passive or weak, but can be fiercely protective 
              when necessary. Her warrior nature demonstrates that true compassion sometimes requires the courage to 
              fight against injustice and evil. She embodies the principle that love and strength are not opposites, 
              but complementary forces.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Her role as both demon destroyer and marriage bestower shows that spiritual growth requires both the 
              elimination of negative tendencies and the cultivation of positive relationships. The sword she wields 
              cuts through ignorance and illusion, while her blessings unite souls in divine love.
            </p>
            <div className="bg-gradient-to-r from-red-100 via-pink-100 to-orange-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-800 mb-4">Practice of Courage</h3>
              <p className="text-gray-700">
                Invoke Katyayani's energy when facing difficult situations that require courage and determination. 
                Visualize her fierce form destroying your fears and obstacles while simultaneously blessing you with 
                the wisdom to choose righteous actions. Her energy transforms timidity into fearlessness.
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
            <Link href="/festivals/durga-puja/kalaratri" className="px-8 py-4 bg-gradient-to-r from-pink-600 to-orange-400 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Next: Kalaratri →
            </Link>
            <Link href="/festivals/durga-puja/skandamata" className="px-8 py-4 bg-gradient-to-r from-gray-600 to-red-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              ← Previous: Skandamata
            </Link>
            <Link href="/festivals/durga-puja" className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Back to Durga Puja
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}