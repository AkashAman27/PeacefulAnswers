import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Chandraghanta - Third Form of Maa Durga | Bearer of Moon Bell | PeacefulAnswers',
  description: 'Discover Chandraghanta, the third form of Navadurga worshipped on Day 3 of Navratri. Learn about her courage, protection, and the balance between serenity and strength.',
  keywords: 'Chandraghanta, Navadurga, Third form of Durga, Moon Bell, Day 3 Navratri, Manipura Chakra, Courage, Protection, Warrior Goddess',
  openGraph: {
    title: 'Chandraghanta - Third Form of Maa Durga | Bearer of Moon Bell',
    description: 'Explore Chandraghanta, the warrior goddess who brings peace and courage with her moon bell.',
    type: 'website',
  }
}

export default function ChandraghantaPage() {
  const goddess = {
    name: "Chandraghanta",
    sanskrit: "चन्द्रघण्टा",
    meaning: "One who bears the Moon Bell",
    day: 3,
    color: "Yellow",
    chakra: "Manipura (Solar Plexus Chakra)",
    element: "Fire",
    mantra: "ॐ देवी चन्द्रघण्टायै नमः",
    mantraTransliteration: "Om Devi Chandraghantayai Namah",
    beejMantra: "ॐ रं श्रीं चन्द्रघण्टायै नमः",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop"
  }

  const iconography = [
    {
      element: "Crescent Moon Bell",
      significance: "A unique half-moon shaped like a bell adorns her forehead, symbolizing the divine sound that destroys evil and brings peace. The bell represents the cosmic sound 'Om'."
    },
    {
      element: "Ten Arms",
      significance: "Each arm carries divine weapons gifted by gods, representing her readiness to protect devotees from all directions and her multifarious divine powers."
    },
    {
      element: "Tiger Mount",
      significance: "Rides a ferocious tiger, symbolizing her courage and fearlessness. The tiger represents controlled power and mastery over aggressive instincts."
    },
    {
      element: "Golden Complexion",
      significance: "Her radiant golden skin represents the solar energy and inner fire that burns away ignorance and illuminates the path to wisdom."
    },
    {
      element: "Third Eye",
      significance: "Her ever-open third eye represents constant vigilance against evil and the inner eye of wisdom that sees beyond material illusions."
    },
    {
      element: "Serene Expression",
      significance: "Despite being a warrior, her calm face shows that true strength comes from inner peace and controlled power rather than anger or aggression."
    }
  ]

  const mythology = [
    {
      title: "Transformation from Parvati",
      content: "After her marriage to Lord Shiva, Parvati transformed into this magnificent form. The crescent moon bell appeared on her forehead as a symbol of her divine marriage and her role as the cosmic protector."
    },
    {
      title: "The Ready Warrior",
      content: "Chandraghanta is always prepared for battle against evil forces. Her form represents the divine feminine in its protective aspect, ready to defend dharma and her devotees at a moment's notice."
    },
    {
      title: "The Peaceful Warrior",
      content: "Unlike fierce goddesses who destroy in anger, Chandraghanta fights with serenity. Her calm demeanor during battle teaches that righteous action should come from wisdom, not emotion."
    },
    {
      title: "Destroyer of Demons",
      content: "She is particularly known for destroying demons and negative forces that disturb the peace of the cosmos. Her bell sound is said to make demons flee in terror while bringing peace to devotees."
    }
  ]

  const spiritualSignificance = [
    {
      aspect: "Solar Plexus Activation",
      meaning: "Chandraghanta governs the Manipura chakra, center of personal power, confidence, and self-esteem. Her worship strengthens willpower and inner fire."
    },
    {
      aspect: "Courage and Fearlessness",
      meaning: "She grants courage to face life's challenges and removes fear from the hearts of devotees. Her energy helps overcome phobias and develop inner strength."
    },
    {
      aspect: "Balance of Power",
      meaning: "She teaches the perfect balance between gentleness and strength, showing that true power lies in controlled force rather than uncontrolled aggression."
    },
    {
      aspect: "Protection from Negativity",
      meaning: "Her bell sound creates protective vibrations that ward off negative energies, evil influences, and psychic attacks from the devotee's auric field."
    },
    {
      aspect: "Divine Vigilance",
      meaning: "Her third eye represents constant awareness and the ability to see through deception. She grants devotees discernment and spiritual insight."
    },
    {
      aspect: "Peaceful Strength",
      meaning: "She demonstrates that true spiritual strength manifests as peace and serenity, not as aggression or violence. Power with peace is her unique teaching."
    }
  ]

  const rituals = [
    {
      practice: "Yellow Color Worship",
      description: "Devotees wear yellow clothes and offer yellow flowers like marigolds, symbolizing the solar energy and auspiciousness of the goddess."
    },
    {
      practice: "Bell Ringing",
      description: "Ringing bells during worship creates sound vibrations that purify the environment and attract the goddess's protective energy."
    },
    {
      practice: "Solar Meditation",
      description: "Meditating on the solar plexus chakra while visualizing golden light helps activate personal power and confidence."
    },
    {
      practice: "Tiger Imagery Meditation",
      description: "Visualizing oneself riding a tiger helps develop courage and fearlessness in facing life's challenges."
    },
    {
      practice: "Third Eye Activation",
      description: "Focusing on the space between eyebrows while chanting her mantras helps develop intuition and spiritual insight."
    }
  ]

  const mantras = [
    {
      mantra: "ॐ देवी चन्द्रघण्टायै नमः",
      transliteration: "Om Devi Chandraghantayai Namah",
      meaning: "Salutations to Goddess Chandraghanta",
      benefits: "This mantra invokes courage, protection, and the power to overcome all obstacles with divine grace and serenity."
    },
    {
      mantra: "ॐ रं श्रीं चन्द्रघण्टायै नमः",
      transliteration: "Om Ram Shreem Chandraghantayai Namah",
      meaning: "Om, with fire seed sound and prosperity, salutations to Chandraghanta",
      benefits: "This beej mantra activates the solar plexus chakra and brings material and spiritual prosperity through courage."
    },
    {
      mantra: "पिण्डज प्रवरारूढा चण्डकोपास्त्रकैर्युता। प्रसादं तनुते महयं चन्द्रघण्टेति विश्रुता॥",
      transliteration: "Pindaja Pravararudha Chandakopastrakairyuta, Prasadam Tanute Mahyam Chandraghanteti Vishruta",
      meaning: "Riding the excellent bull, equipped with terrible weapons, grant me your grace, O renowned Chandraghanta",
      benefits: "This verse invokes the complete protection and blessings of Chandraghanta for courage and victory over difficulties."
    }
  ]

  const lessons = [
    {
      teaching: "Strength in Serenity",
      application: "True power comes not from anger or aggression but from inner peace and controlled action. Remain calm while taking decisive action."
    },
    {
      teaching: "Constant Vigilance",
      application: "Stay alert and aware of your surroundings and inner state. Develop spiritual discernment to distinguish between truth and illusion."
    },
    {
      teaching: "Protective Compassion",
      application: "Use your strength and abilities to protect others, especially the weak and innocent. Channel power toward service and protection."
    },
    {
      teaching: "Sound as Power",
      application: "Understand the power of sound, words, and vibrations. Use speech consciously and practice sacred sounds for spiritual elevation."
    },
    {
      teaching: "Fearless Service",
      application: "Serve dharma and truth without fear of consequences. Stand up for what is right with courage and conviction."
    },
    {
      teaching: "Balanced Warrior",
      application: "Develop both gentle and strong qualities within yourself. Know when to be soft and when to be firm in different situations."
    }
  ]

  const powers = [
    {
      title: "Bhaya Nashak (Fear Destroyer)",
      description: "Chandraghanta has the power to destroy all types of fears - physical, mental, emotional, and spiritual fears that limit human potential."
    },
    {
      title: "Raksha Shakti (Protective Power)",
      description: "She provides divine protection from negative forces, evil influences, and harmful energies through her bell's sacred vibrations."
    },
    {
      title: "Tej Shakti (Radiant Power)",
      description: "Her golden radiance grants inner luminosity, confidence, and the ability to shine one's inner light in the world."
    },
    {
      title: "Yuddha Kaushal (Combat Skills)",
      description: "She grants the ability to fight life's battles with wisdom, strategy, and divine guidance rather than mere physical force."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/deities/durga"
              className="inline-flex items-center text-gray-600 hover:text-yellow-600 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to Maa Durga
            </Link>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <Link href="/deities/durga/brahmacharini" className="hover:text-yellow-600">← Brahmacharini</Link>
              <span>Day {goddess.day} of Navratri</span>
              <Link href="/deities/durga/kushmanda" className="hover:text-yellow-600">Kushmanda →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-yellow-600 via-orange-600 to-amber-600 text-white py-20">
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

              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-yellow-100">
                {goddess.name}
              </h2>

              <p className="text-xl text-orange-100 mb-8">
                {goddess.meaning} - The serene warrior who brings peace through strength
              </p>

              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  🟡 {goddess.color}
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  🔥 {goddess.element}
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  ⚡ {goddess.chakra}
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-yellow-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
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
          <h2 className="text-4xl font-bold text-center text-yellow-800 mb-12">Sacred Iconography</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iconography.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-yellow-500">
                <h3 className="text-xl font-bold text-yellow-700 mb-3">{item.element}</h3>
                <p className="text-gray-700 leading-relaxed">{item.significance}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Divine Powers */}
        <section className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-center text-yellow-800 mb-12">Divine Powers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {powers.map((power, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-700 mb-3">{power.title}</h3>
                <p className="text-gray-700 leading-relaxed">{power.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mythology */}
        <section>
          <h2 className="text-4xl font-bold text-center text-yellow-800 mb-12">Sacred Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mythology.map((story, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-amber-700 mb-4">{story.title}</h3>
                <p className="text-gray-700 leading-relaxed">{story.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Spiritual Significance */}
        <section className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-center text-yellow-800 mb-12">Spiritual Significance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spiritualSignificance.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-amber-500">
                <h3 className="text-xl font-bold text-amber-700 mb-3">{item.aspect}</h3>
                <p className="text-gray-700 leading-relaxed">{item.meaning}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Rituals */}
        <section>
          <h2 className="text-4xl font-bold text-center text-yellow-800 mb-12">Rituals & Worship</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rituals.map((ritual, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-yellow-700 mb-3">{ritual.practice}</h3>
                <p className="text-gray-700 leading-relaxed">{ritual.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sacred Mantras */}
        <section className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-center text-yellow-800 mb-12">Sacred Mantras</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mantras.map((mantra, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold text-yellow-800 mb-3">{mantra.mantra}</h3>
                  <p className="text-orange-600 font-medium mb-2">{mantra.transliteration}</p>
                  <p className="text-gray-700 italic text-sm">{mantra.meaning}</p>
                </div>
                <div className="border-t border-yellow-200 pt-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{mantra.benefits}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spiritual Lessons */}
        <section>
          <h2 className="text-4xl font-bold text-center text-yellow-800 mb-12">Spiritual Lessons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lessons.map((lesson, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-yellow-500">
                <h3 className="text-xl font-bold text-yellow-700 mb-3">{lesson.teaching}</h3>
                <p className="text-gray-700 leading-relaxed">{lesson.application}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center py-12">
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Continue the Sacred Journey</h3>
            <p className="text-lg mb-6">
              Having gained courage and confidence, proceed to the fourth day of Navratri
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/deities/durga/brahmacharini"
                className="px-8 py-4 bg-white text-yellow-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
              >
                ← Previous: Brahmacharini
              </Link>
              <Link
                href="/deities/durga/kushmanda"
                className="px-8 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-400 transition-colors"
              >
                Next: Kushmanda →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}