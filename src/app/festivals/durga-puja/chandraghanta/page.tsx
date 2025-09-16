import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Chandraghanta - Third Form of Navadurga | Bearer of Moon Bell | PeacefulAnswers',
  description: 'Discover Goddess Chandraghanta, the third form of Navadurga worshipped on Day 3 of Navaratri. Learn about her protective powers, mantras, symbolism, and role in bringing peace and courage.',
  keywords: 'Chandraghanta, Navadurga, third form Durga, moon bell, protection, courage, peace, Navaratri Day 3, tiger vehicle, warrior goddess',
  openGraph: {
    title: 'Chandraghanta - Third Form of Navadurga | Bearer of Moon Bell',
    description: 'Explore the divine essence of Goddess Chandraghanta, who represents courage, protection, and the power to bring peace.',
    type: 'website',
  },
}

const chandraghantaMantras = [
  {
    sanskrit: "ॐ देवी चन्द्रघण्टायै नमः",
    transliteration: "Om Devi Chandraghantayai Namah",
    meaning: "Salutations to Goddess Chandraghanta"
  },
  {
    sanskrit: "पिण्डज प्रवरारूढा चण्डकोपास्त्रकैर्युता। प्रसादं तनुते मह्यं चन्द्रघण्टेति विश्रुता॥",
    transliteration: "Pindaja Pravararudha Chandakopastrakairyuta | Prasadam Tanute Mahyam Chandraghanteti Vishruta ||",
    meaning: "O renowned Chandraghanta, mounted on tiger, armed with fierce weapons, please bestow your grace upon me"
  },
  {
    sanskrit: "या देवी सर्वभूतेषु चन्द्रघण्टा रूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥",
    transliteration: "Ya Devi Sarvabhuteshu Chandraghanta Rupena Samsthita | Namastasyai Namastasyai Namastasyai Namo Namah ||",
    meaning: "Salutations to the Goddess who resides in all beings in the form of Chandraghanta"
  }
]

const chandraghantaQualities = [
  {
    title: "Divine Protection",
    description: "Ultimate protector who destroys evil forces and guards devotees from all harm",
    significance: "Shields devotees from negative energies, evil spirits, and harmful influences"
  },
  {
    title: "Courage & Bravery",
    description: "Bestows fearlessness and warrior-like courage to face life's challenges",
    significance: "Helps overcome fear, anxiety, and provides strength during difficult times"
  },
  {
    title: "Inner Peace",
    description: "Brings tranquility and serenity despite external chaos and conflicts",
    significance: "Calms the mind, reduces stress, and establishes emotional equilibrium"
  },
  {
    title: "Righteous Anger",
    description: "Represents controlled fury against injustice and unrighteousness",
    significance: "Inspires standing up against wrong and fighting for dharma"
  },
  {
    title: "Spiritual Warrior",
    description: "Embodies the divine warrior aspect necessary for spiritual progress",
    significance: "Helps fight inner demons, bad habits, and spiritual obstacles"
  },
  {
    title: "Golden Aura",
    description: "Radiates divine golden light that purifies and illuminates consciousness",
    significance: "Brings clarity of thought, wisdom, and spiritual enlightenment"
  }
]

const lessKnownFacts = [
  {
    fact: "Wedding Day Transformation",
    detail: "After marrying Lord Shiva, Parvati adorned her forehead with a half-moon in the shape of a bell (ghanta), earning the name Chandraghanta. This marked her transformation from ascetic to divine consort."
  },
  {
    fact: "Tiger Symbolism",
    detail: "Her vehicle, the tiger, represents power, will, and determination. Unlike lions associated with other deities, tigers are solitary hunters, symbolizing self-reliance and individual spiritual strength."
  },
  {
    fact: "Bell's Cosmic Sound",
    detail: "The bell on her forehead produces the sacred sound 'Om' when she moves, which reverberates throughout the cosmos, dispelling negative energies and invoking divine protection."
  },
  {
    fact: "Ten Arms Significance",
    detail: "Her ten arms represent mastery over the ten directions (dashdigpala), showing her omnipresent protective power. Each weapon symbolizes different aspects of divine authority."
  },
  {
    fact: "Golden Complexion Mystery",
    detail: "Her golden skin represents the divine radiance of knowledge and wisdom. This color transformation from the white of Brahmacharini shows the evolution of spiritual consciousness."
  },
  {
    fact: "Half-Moon Crown",
    detail: "The crescent moon on her forehead represents the controlled mind that has achieved balance between emotional and rational aspects of consciousness."
  },
  {
    fact: "Third Eye Symbolism",
    detail: "Though not always visible in depictions, she possesses the third eye of wisdom, which can destroy ignorance and illusion when opened."
  },
  {
    fact: "Warrior Queen Aspect",
    detail: "Historical texts describe her as the first female warrior deity to ride a tiger into battle, inspiring countless women warriors in Indian history."
  },
  {
    fact: "Sound Therapy Connection",
    detail: "Ancient practitioners used bell sounds during her worship for healing purposes, as the vibrations were believed to balance the chakras and cure ailments."
  },
  {
    fact: "Planetary Influence",
    detail: "Chandraghanta is associated with the planet Venus (Shukra), governing love, beauty, and artistic abilities. Her worship enhances creativity and aesthetic sense."
  }
]

const weapons = [
  {
    weapon: "Trishul (Trident)",
    hand: "Right hand",
    symbolism: "Control over creation, preservation, and destruction",
    power: "Eliminates the three types of suffering"
  },
  {
    weapon: "Gada (Mace)",
    hand: "Left hand",
    symbolism: "Strength and authority",
    power: "Crushes pride and ego"
  },
  {
    weapon: "Sword",
    hand: "Right hand",
    symbolism: "Sharp discrimination and wisdom",
    power: "Cuts through ignorance and delusion"
  },
  {
    weapon: "Bow & Arrow",
    hand: "Multiple hands",
    symbolism: "Focused intention and precise action",
    power: "Targets and destroys specific obstacles"
  },
  {
    weapon: "Lotus",
    hand: "Left hand",
    symbolism: "Purity and spiritual unfolding",
    power: "Grants spiritual enlightenment"
  },
  {
    weapon: "Kamandalu",
    hand: "Right hand",
    symbolism: "Simple living and self-sufficiency",
    power: "Provides spiritual nourishment"
  },
  {
    weapon: "Rosary",
    hand: "Left hand",
    symbolism: "Continuous remembrance of divine",
    power: "Maintains spiritual connection"
  },
  {
    weapon: "Ghanta (Bell)",
    hand: "Right hand",
    symbolism: "Divine sound and cosmic vibration",
    power: "Awakens consciousness and dispels evil"
  }
]

const protectionPowers = [
  {
    type: "Physical Protection",
    description: "Guards against accidents, injuries, and physical harm",
    method: "Visualize her golden aura surrounding you"
  },
  {
    type: "Psychic Protection",
    description: "Shields from negative thoughts, evil eye, and psychic attacks",
    method: "Chant her mantras while imagining protective light"
  },
  {
    type: "Emotional Protection",
    description: "Provides stability during emotional turmoil and relationship conflicts",
    method: "Meditate on her peaceful yet powerful form"
  },
  {
    type: "Spiritual Protection",
    description: "Safeguards spiritual practices from obstacles and distractions",
    method: "Begin meditation sessions by invoking her presence"
  },
  {
    type: "Environmental Protection",
    description: "Creates harmonious atmosphere in homes and workplaces",
    method: "Display her image and ring bells during prayer"
  },
  {
    type: "Karmic Protection",
    description: "Helps neutralize negative karma and past life influences",
    method: "Perform charity and service in her name"
  }
]

const worshipBenefits = [
  "Complete protection from all forms of evil",
  "Enhanced courage and fearlessness",
  "Mental peace and emotional stability",
  "Success in competitive examinations",
  "Protection during travel and adventures",
  "Improved leadership qualities",
  "Harmonious relationships and marriage",
  "Victory over enemies and opponents",
  "Enhanced self-confidence and charisma",
  "Protection of children and family",
  "Success in legal matters and disputes",
  "Spiritual growth and inner strength"
]

export default function ChandraghantaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 via-orange-500/20 to-red-500/20"></div>
        <div className="relative max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Chandraghanta
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-orange-700 mb-8 font-semibold">चन्द्रघण्टा - Bearer of the Moon Bell</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-6 py-3 bg-orange-600 text-white rounded-full font-semibold">Third Form of Navadurga</span>
            <span className="px-6 py-3 bg-red-500 text-white rounded-full font-semibold">Day 3 of Navaratri</span>
            <span className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-red-500 text-white rounded-full font-semibold">Manipura Chakra</span>
          </div>
          <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-4xl mx-auto">
            The divine warrior goddess who brings peace through strength and protects devotees with fierce compassion
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 via-orange-500 to-red-500 mx-auto"></div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-orange-800 mb-6">Who is Chandraghanta?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Goddess Chandraghanta, the third manifestation of Navadurga, represents the perfect balance between 
                peace and power, gentleness and strength. Her name comes from the half-moon (Chandra) shaped like a 
                bell (Ghanta) that adorns her forehead. This unique symbol emerged after her marriage to Lord Shiva, 
                marking her transformation from the ascetic Brahmacharini to the divine warrior queen.
              </p>
              <p className="mb-4">
                Following her intense penance and successful union with Lord Shiva, Parvati assumed this form to 
                demonstrate that true strength comes not from aggression, but from the ability to protect dharma while 
                maintaining inner peace. She embodies the warrior aspect of the Divine Mother - fierce when necessary 
                to protect the innocent, yet compassionate and nurturing to her devotees.
              </p>
              <p>
                Chandraghanta is depicted with a golden complexion, riding a powerful tiger, and possessing ten arms 
                that wield various divine weapons. The bell on her forehead produces a sacred sound that reverberates 
                throughout the cosmos, dispelling evil forces and negative energies. She is associated with the 
                Manipura (Solar Plexus) chakra, representing personal power, confidence, and the ability to transform challenges into opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divine Weapons */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-100 via-yellow-100 to-red-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Divine Arsenal - Ten Sacred Weapons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weapons.map((weapon, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-orange-700 mb-2">{weapon.weapon}</h3>
                <p className="text-sm text-gray-600 mb-2"><strong>Position:</strong> {weapon.hand}</p>
                <p className="text-sm text-gray-700 mb-3">{weapon.symbolism}</p>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-orange-800 font-medium text-sm">{weapon.power}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divine Qualities */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Divine Qualities & Powers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chandraghantaQualities.map((quality, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-orange-700 mb-3">{quality.title}</h3>
                <p className="text-gray-700 mb-3 text-sm">{quality.description}</p>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <p className="text-yellow-800 font-medium text-sm">{quality.significance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protection Powers */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Protective Powers & Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {protectionPowers.map((protection, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-orange-700 mb-3">{protection.type}</h3>
                <p className="text-gray-700 mb-4 text-sm">{protection.description}</p>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <h4 className="text-sm font-semibold text-orange-800 mb-1">Practice:</h4>
                  <p className="text-orange-700 text-sm">{protection.method}</p>
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
            {chandraghantaMantras.map((mantra, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-orange-700 mb-4">{mantra.sanskrit}</h3>
                  <p className="text-lg text-red-600 italic mb-3">{mantra.transliteration}</p>
                  <p className="text-gray-700">{mantra.meaning}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worship Benefits */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Benefits of Worship</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {worshipBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-orange-700 mb-3">{item.fact}</h3>
                <p className="text-gray-700 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Significance */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-50 via-yellow-50 to-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-8">Spiritual Significance</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <p className="text-lg text-gray-700 mb-6">
              Chandraghanta teaches us the profound lesson that true strength lies not in aggression or violence, but 
              in the ability to maintain inner peace while courageously facing life's challenges. Her bell-shaped moon 
              represents the harmonious integration of masculine (solar) and feminine (lunar) energies within consciousness.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              The sound emanating from her bell symbolizes the cosmic vibration 'Om' that pervades the universe. This 
              divine sound has the power to dispel ignorance, fear, and negative thoughts, replacing them with clarity, 
              courage, and divine protection. Her tiger represents the mind that has been tamed and directed toward 
              righteous purposes.
            </p>
            <div className="bg-gradient-to-r from-orange-100 via-yellow-100 to-red-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-800 mb-4">Daily Practice</h3>
              <p className="text-gray-700">
                Invoke Chandraghanta's energy by ringing a small bell during morning prayers, visualizing golden light 
                surrounding you for protection. Practice courage in small daily situations, standing up for what's right 
                while maintaining compassion for all beings. Her energy transforms fear into fearlessness and weakness into strength.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-800 mb-8">Continue the Journey</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/festivals/durga-puja/kushmanda" className="px-8 py-4 bg-gradient-to-r from-red-600 to-yellow-400 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Next: Kushmanda →
            </Link>
            <Link href="/festivals/durga-puja/brahmacharini" className="px-8 py-4 bg-gradient-to-r from-gray-600 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              ← Previous: Brahmacharini
            </Link>
            <Link href="/festivals/durga-puja" className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Back to Durga Puja
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}