import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Skandamata - Fifth Form of Navadurga | Mother of Skanda | PeacefulAnswers',
  description: 'Discover Goddess Skandamata, the fifth form of Navadurga and mother of Lord Kartikeya. Learn about her maternal powers, divine wisdom, and blessings for knowledge and prosperity.',
  keywords: 'Skandamata, Navadurga, fifth form Durga, mother Kartikeya, Skanda, maternal love, wisdom, Navaratri Day 5, lotus seat, divine mother',
  openGraph: {
    title: 'Skandamata - Fifth Form of Navadurga | Mother of Skanda',
    description: 'Explore the divine mother Skandamata who embodies pure maternal love and grants wisdom to her devotees.',
    type: 'website',
  },
}

const skandamataMantras = [
  {
    sanskrit: "ॐ देवी स्कन्दमातायै नमः",
    transliteration: "Om Devi Skandamatayai Namah",
    meaning: "Salutations to Goddess Skandamata"
  },
  {
    sanskrit: "सिंहासनगता नित्यं पद्माञ्चित करद्वया। शुभदास्तु सदा देवी स्कन्दमाता यशस्विनी॥",
    transliteration: "Simhasanagata Nityam Padmanchita Karadvaya | Shubhadastu Sada Devi Skandamata Yashasvini ||",
    meaning: "O glorious Skandamata, seated on lotus throne with lotus in your hands, always bestow auspiciousness upon us"
  },
  {
    sanskrit: "या देवी सर्वभूतेषु स्कन्दमाता रूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥",
    transliteration: "Ya Devi Sarvabhuteshu Skandamata Rupena Samsthita | Namastasyai Namastasyai Namastasyai Namo Namah ||",
    meaning: "Salutations to the Goddess who resides in all beings in the form of Skandamata"
  }
]

const maternalQualities = [
  {
    title: "Pure Maternal Love",
    description: "Embodies the highest form of unconditional motherly affection and care",
    significance: "Grants protection, nurturing, and emotional healing to all devotees"
  },
  {
    title: "Divine Wisdom",
    description: "Source of all knowledge, learning, and intellectual advancement",
    significance: "Enhances learning capacity, memory, and academic success"
  },
  {
    title: "Prosperity & Abundance",
    description: "Bestows material wealth, success, and all forms of abundance",
    significance: "Removes poverty and grants financial stability and growth"
  },
  {
    title: "Spiritual Enlightenment",
    description: "Guides devotees toward spiritual awakening and self-realization",
    significance: "Opens the path to higher consciousness and divine wisdom"
  },
  {
    title: "Child Protection",
    description: "Special guardian of children, ensuring their safety and development",
    significance: "Protects children from illness, harm, and negative influences"
  },
  {
    title: "Emotional Healing",
    description: "Heals emotional wounds, trauma, and psychological disturbances",
    significance: "Provides mental peace, emotional stability, and inner strength"
  }
]

const lessKnownFacts = [
  {
    fact: "Skanda's Birth Story",
    detail: "Lord Skanda (Kartikeya) was born to destroy the demon Tarakasura who could only be killed by Shiva's son. Skandamata's love and care enabled Skanda to fulfill his cosmic purpose of protecting dharma."
  },
  {
    fact: "Four-Armed Symbolism",
    detail: "Her four arms represent the four goals of human life (Purusharthas): Dharma (righteousness), Artha (prosperity), Kama (desires), and Moksha (liberation). She helps balance all aspects of life."
  },
  {
    fact: "Lotus Throne Significance",
    detail: "She sits on a fully bloomed lotus (Kamalasana), symbolizing the flowering of consciousness and spiritual awakening. The lotus represents purity emerging from the mud of worldly existence."
  },
  {
    fact: "Three-Eyed Vision",
    detail: "Her third eye represents divine insight and the ability to see past, present, and future simultaneously. This grants her devotees prophetic abilities and spiritual foresight."
  },
  {
    fact: "Lion Vehicle Power",
    detail: "Her lion represents courage, strength, and the tamed ego. Unlike wild lions, her vehicle shows how maternal love can transform even the fiercest nature into a gentle, protective force."
  },
  {
    fact: "Dual Motherhood",
    detail: "She simultaneously mothers both Skanda and Ganesha (who appears in some depictions), representing her universal motherhood extending to all children of the cosmos."
  },
  {
    fact: "Throat Chakra Connection",
    detail: "Associated with Vishuddha chakra, governing communication, creativity, and truth. Her worship enhances speaking abilities, artistic talents, and authentic self-expression."
  },
  {
    fact: "Academic Patroness",
    detail: "Traditional gurukulas (schools) had special shrines for Skandamata where students would pray before exams and important academic endeavors."
  },
  {
    fact: "Healing Powers",
    detail: "Ancient Ayurvedic texts mention specific healing mantras of Skandamata for childhood diseases, learning disabilities, and developmental disorders."
  },
  {
    fact: "Cosmic Nurturer",
    detail: "In Tantric traditions, she's seen as the cosmic mother who nurtures the entire universe, feeding all beings with divine nectar from her celestial breasts."
  }
]

const childProtectionPowers = [
  {
    aspect: "Physical Health",
    description: "Protects children from diseases, accidents, and physical harm",
    method: "Place her picture in children's rooms and chant her name daily"
  },
  {
    aspect: "Mental Development",
    description: "Enhances intelligence, memory, and learning abilities in children",
    method: "Offer yellow flowers and pray for children's academic success"
  },
  {
    aspect: "Emotional Well-being",
    description: "Provides emotional stability and protection from trauma",
    method: "Light ghee lamps and seek her blessings for emotional healing"
  },
  {
    aspect: "Spiritual Growth",
    description: "Guides children toward moral values and spiritual understanding",
    method: "Tell children stories of her divine love and compassion"
  },
  {
    aspect: "Protection from Evil",
    description: "Shields children from negative energies and harmful influences",
    method: "Tie protective threads blessed with her mantras around children's wrists"
  },
  {
    aspect: "Educational Success",
    description: "Grants success in studies, examinations, and skill development",
    method: "Worship her before starting new educational endeavors"
  }
]

const worshipBenefits = [
  "Unconditional divine protection and care",
  "Enhanced learning and intellectual abilities", 
  "Success in education and knowledge acquisition",
  "Material prosperity and financial stability",
  "Protection and well-being of children",
  "Emotional healing and mental peace",
  "Development of maternal qualities",
  "Spiritual wisdom and enlightenment",
  "Success in creative and artistic endeavors",
  "Harmonious family relationships",
  "Protection during pregnancy and childbirth",
  "Blessings for fertility and conception"
]

const sacredOfferings = [
  "White lotus flowers",
  "Yellow marigolds", 
  "Pure cow's milk",
  "Banana fruits",
  "Yellow rice (turmeric rice)",
  "Kheer (sweet rice pudding)",
  "White and yellow cloth",
  "Pearls and white gemstones",
  "Sandalwood paste",
  "Honey and ghee"
]

export default function SkandamataPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-rose-400/20 to-yellow-400/20"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full text-white font-bold text-2xl mb-6">
            5
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-yellow-500 bg-clip-text text-transparent">
              Skandamata
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-rose-700 mb-8 font-semibold">स्कन्दमाता - Mother of Lord Skanda</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-6 py-3 bg-pink-600 text-white rounded-full font-semibold">Fifth Form of Navadurga</span>
            <span className="px-6 py-3 bg-rose-500 text-white rounded-full font-semibold">Day 5 of Navaratri</span>
            <span className="px-6 py-3 bg-gradient-to-r from-pink-600 to-yellow-500 text-white rounded-full font-semibold">Vishuddha Chakra</span>
          </div>
          <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-4xl mx-auto">
            The divine mother who embodies pure maternal love, wisdom, and the nurturing power that protects all children
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-600 via-rose-500 to-yellow-500 mx-auto"></div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-rose-800 mb-6">Who is Skandamata?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Goddess Skandamata, the fifth manifestation of Navadurga, represents the embodiment of divine motherhood 
                and unconditional love. Her name literally means "Mother of Skanda" (Lord Kartikeya), the six-faced war 
                god who destroyed the demon Tarakasura. She is depicted holding baby Skanda in her lap while seated on 
                a lotus throne, symbolizing the nurturing aspect of the Divine Mother.
              </p>
              <p className="mb-4">
                In this form, Goddess Parvati showcases her maternal qualities - protective, nurturing, and infinitely 
                compassionate. She has four arms: two hold lotuses, one carries baby Skanda, and one is in the blessing 
                position (Varada Mudra). Her complexion is radiant like molten gold, representing the illuminating power 
                of maternal love that brightens even the darkest corners of existence.
              </p>
              <p>
                Skandamata is also known as Padmasana Devi because she sits on a lotus. Her worship is particularly 
                beneficial for mothers, children, students, and those seeking wisdom and prosperity. She is associated 
                with the Vishuddha (Throat) chakra, representing communication, creativity, and the power of truth. 
                Her grace enhances learning abilities and grants success in educational pursuits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maternal Qualities */}
      <section className="py-16 px-4 bg-gradient-to-r from-rose-100 via-pink-100 to-yellow-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-800 mb-12">Divine Maternal Qualities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {maternalQualities.map((quality, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-rose-700 mb-3">{quality.title}</h3>
                <p className="text-gray-700 mb-3 text-sm">{quality.description}</p>
                <div className="bg-pink-50 p-3 rounded-lg">
                  <p className="text-pink-800 font-medium text-sm">{quality.significance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Child Protection Powers */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-800 mb-12">Child Protection Powers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {childProtectionPowers.map((protection, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-rose-700 mb-3">{protection.aspect}</h3>
                <p className="text-gray-700 mb-4 text-sm">{protection.description}</p>
                <div className="bg-rose-50 p-3 rounded-lg">
                  <h4 className="text-sm font-semibold text-rose-800 mb-1">Practice:</h4>
                  <p className="text-rose-700 text-sm">{protection.method}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sacred Mantras */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-100 via-pink-100 to-rose-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-800 mb-12">Sacred Mantras</h2>
          <div className="space-y-8">
            {skandamataMantras.map((mantra, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-rose-700 mb-4">{mantra.sanskrit}</h3>
                  <p className="text-lg text-pink-600 italic mb-3">{mantra.transliteration}</p>
                  <p className="text-gray-700">{mantra.meaning}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worship Benefits & Offerings */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Worship Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-rose-800 mb-8">Benefits of Worship</h2>
              <div className="space-y-4">
                {worshipBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-lg">
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sacred Offerings */}
            <div>
              <h2 className="text-3xl font-bold text-rose-800 mb-8">Sacred Offerings</h2>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sacredOfferings.map((offering, index) => (
                    <div key={index} className="flex items-center p-3 bg-pink-50 rounded-lg">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">{offering}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-pink-100 to-rose-100 rounded-lg">
                  <h3 className="text-lg font-bold text-rose-800 mb-2">Special Offering</h3>
                  <p className="text-gray-700 text-sm">
                    Offer banana to baby Skanda and place a small cradle with baby items near her image. 
                    This brings special blessings for children and fertility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lesser Known Facts */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-50 via-rose-50 to-yellow-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-800 mb-12">Lesser Known Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lessKnownFacts.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-rose-700 mb-3">{item.fact}</h3>
                <p className="text-gray-700 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Significance */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-rose-800 mb-8">Spiritual Significance</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <p className="text-lg text-gray-700 mb-6">
              Skandamata represents the transformative power of maternal love that shapes consciousness and character. 
              Her worship awakens the nurturing qualities within us, teaching that true strength lies not in dominance 
              but in the ability to protect, nurture, and guide others toward their highest potential.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              The image of her holding baby Skanda symbolizes how divine consciousness nurtures our spiritual growth 
              from infancy to maturity. Just as a mother patiently teaches her child, Skandamata guides our spiritual 
              evolution with infinite patience and love, never abandoning us regardless of our mistakes or failures.
            </p>
            <div className="bg-gradient-to-r from-pink-100 via-rose-100 to-yellow-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-rose-800 mb-4">Meditation Practice</h3>
              <p className="text-gray-700">
                Visualize Skandamata's golden form radiating infinite love and compassion. Feel her maternal energy 
                embracing you like a protective cocoon. This practice awakens your own nurturing qualities and 
                connects you with the universal mother principle that sustains all life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-rose-800 mb-8">Continue the Journey</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/festivals/durga-puja/katyayani" className="px-8 py-4 bg-gradient-to-r from-rose-600 to-yellow-400 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Next: Katyayani →
            </Link>
            <Link href="/festivals/durga-puja/kushmanda" className="px-8 py-4 bg-gradient-to-r from-gray-600 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              ← Previous: Kushmanda
            </Link>
            <Link href="/festivals/durga-puja" className="px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Back to Durga Puja
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}