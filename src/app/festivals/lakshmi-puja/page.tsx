import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lakshmi Ganesh Puja on Diwali - Complete Expert Guide | Rituals, Timing & Mantras | PeacefulAnswers',
  description: 'Comprehensive guide to Lakshmi Ganesh Puja on Diwali. Learn the authentic 16-step ritual, auspicious timings (Muhurat), altar setup, mantras, and business worship practices for prosperity and blessings.',
  keywords: 'Lakshmi Puja, Ganesh Puja, Diwali Puja, Muhurat, Shodashopachara, Chopda Pujan, Lakshmi mantras, Diwali rituals, prosperity puja, wealth worship',
  openGraph: {
    title: 'Lakshmi Ganesh Puja - Expert Protocol for Diwali | PeacefulAnswers',
    description: 'Master the sacred art of Lakshmi Ganesh Puja with expert guidance on timing, rituals, mantras, and practices for lasting prosperity.',
    type: 'website',
  },
}

const muhuratTimings = [
  {
    lagna: "Vrishchika (Scorpio)",
    time: "Early Morning",
    suitedFor: "Institutions (Temples, Hospitals, Schools), Public Affairs, Insurance Agents",
    purpose: "Collective worship and organizational well-being, leveraging Scorpio's energy for profound impact"
  },
  {
    lagna: "Vrishabha (Taurus) ⭐ Most Recommended",
    time: "Evening (Pradosh Kaal)",
    suitedFor: "Families, Salaried Individuals, Farmers, Business Owners",
    purpose: "Ideal Sthir Lagna for achieving stable domestic and material wealth, as Taurus symbolizes stability and material accumulation"
  },
  {
    lagna: "Simha (Leo)",
    time: "Midnight",
    suitedFor: "Hermits, Saints, World Renouncers, Tantric Community",
    purpose: "Powerful Sthir Lagna for deep spiritual practice, specific siddhis, and profound non-material acquisition"
  }
]

const shodashopachara = [
  { step: 1, name: "Achaman", sanskrit: "आचमन", description: "Self-purification through sipping holy water" },
  { step: 2, name: "Sankalpa", sanskrit: "संकल्प", description: "Solemn vow declaring the intention of the Puja" },
  { step: 3, name: "Dhyana", sanskrit: "ध्यान", description: "Meditation on the form of Goddess Lakshmi" },
  { step: 4, name: "Avahana", sanskrit: "आवाहन", description: "Formal invocation of the deities" },
  { step: 5, name: "Asana Samarpan", sanskrit: "आसन समर्पण", description: "Offering a sacred seat to the deities" },
  { step: 6, name: "Snana", sanskrit: "स्नान", description: "Sacred bath with water and Panchamrit" },
  { step: 7, name: "Vastra", sanskrit: "वस्त्र", description: "Offering new clothes and sacred thread" },
  { step: 8, name: "Deep Samarpan", sanskrit: "दीप समर्पण", description: "Lighting the first oil lamps and incense" },
  { step: 9, name: "Gandha", sanskrit: "गंध", description: "Offering fragrant sandalwood paste and kumkum" },
  { step: 10, name: "Akshata", sanskrit: "अक्षत", description: "Offering unbroken rice grains" },
  { step: 11, name: "Pushpa Mala", sanskrit: "पुष्प माला", description: "Offering fresh flowers and garlands" },
  { step: 12, name: "Dhoop", sanskrit: "धूप", description: "Offering incense to purify the environment" },
  { step: 13, name: "Naivedya", sanskrit: "नैवेद्य", description: "Offering consecrated food (sweets and fruits)" },
  { step: 14, name: "Tambulam", sanskrit: "ताम्बूलम", description: "Offering betel leaves and nuts" },
  { step: 15, name: "Dakshina", sanskrit: "दक्षिणा", description: "Offering coins, currency, and wealth symbols" },
  { step: 16, name: "Aarti & Pranama", sanskrit: "आरती प्रणाम", description: "Waving the lamp and final obeisance" }
]

const samagriList = [
  {
    category: "Deities & Altar",
    items: ["Seated idols of Lakshmi and Ganesha", "Wooden Chowki (platform)", "Red cloth for covering", "Kalash (copper/silver pot)", "Coconut with red cloth"]
  },
  {
    category: "Illumination",
    items: ["21+ earthen diyas (oil lamps)", "Pure Ghee (1/4 lb) or oil", "Cotton wicks", "Camphor (Kapur)", "Incense sticks (Dhoop)"]
  },
  {
    category: "Sacred Anointments",
    items: ["Roli (red powder)", "Kumkum (vermillion)", "Haldi (turmeric)", "Chandan (sandalwood paste)", "Akshat (unbroken rice)", "Gangajal (holy water)"]
  },
  {
    category: "Panchamrit Ingredients",
    items: ["Milk", "Curd (yogurt)", "Ghee", "Honey", "Sugar"]
  },
  {
    category: "Botanicals",
    items: ["Fresh lotus flowers", "Marigold flowers", "3 fresh garlands", "Tulsi leaves", "Bilva leaves", "5 mango leaves"]
  },
  {
    category: "Naivedya (Food Offerings)",
    items: ["Modak (for Ganesha)", "Assorted sweets", "5 varieties of fruits", "Jaggery", "Sugarcane", "Betel leaves & nuts", "Lava (parched rice)"]
  },
  {
    category: "Wealth Symbols",
    items: ["Silver coins", "Gold/silver jewelry", "Currency notes", "New account books (for business)", "Professional tools (calculator, pen, etc.)"]
  },
  {
    category: "Advanced Items (Optional)",
    items: ["Sapt-Mritika (seven sacred soils)", "Sarvoshadhi (ten sacred herbs)", "Lotus seeds (Kamal Gatta)", "Coriander seeds", "Cotton seeds"]
  }
]

const mantras = [
  {
    deity: "Lord Ganesha",
    name: "Vakratunda Mahakaya Mantra",
    sanskrit: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
    transliteration: "Vakratunda Mahakaya Suryakoti Samaprabha, Nirvighnam Kuru Me Deva, Sarva Karyeshu Sarvada",
    meaning: "O Lord with the curved trunk and massive body, whose brilliance equals a million suns, please remove all obstacles from all my endeavors, always."
  },
  {
    deity: "Goddess Lakshmi",
    name: "Mahalakshmi Moola Mantra",
    sanskrit: "ॐ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद। ॐ श्रीं ह्रीं श्रीं महालक्ष्म्यै नमः॥",
    transliteration: "Om Shrim Hreem Shrim Kamale Kamlalaye Prasid Prasidh, Om Shrim Hreem Shrim Mahalakshmayai Namah",
    meaning: "Salutations to Goddess Mahalakshmi, the one who resides in the lotus, please be pleased and grant your blessings."
  },
  {
    deity: "Combined",
    name: "Lakshmi Vinayaka Mantra",
    sanskrit: "ॐ श्रीं गं सौम्याय गणपतये वर वरद। सर्वजनं मे वशमानय स्वाहा॥",
    transliteration: "Om Shreem Gam Saumyaya Ganpataye Vara Varada, Sarvajanam Me Vashamanaya Svaha",
    meaning: "Combined invocation of both Lakshmi and Ganesha for removing obstacles and attracting prosperity."
  }
]

const vastuGuidelines = [
  {
    aspect: "Direction",
    guideline: "Altar should face Northeast (Ishan corner)",
    significance: "Attracts positive divine energy"
  },
  {
    aspect: "Deity Posture",
    guideline: "Both Lakshmi and Ganesha must be SEATED",
    significance: "Standing idols symbolize transient wealth; seated ensures stability"
  },
  {
    aspect: "Deity Placement",
    guideline: "Ganesha on the left of Lakshmi (from worshipper's view, Ganesha is right)",
    significance: "Shubh (auspiciousness) must precede Labh (profit)"
  },
  {
    aspect: "Platform Color",
    guideline: "Red cloth covering",
    significance: "Symbolizes Shakti, divine energy, and good fortune"
  },
  {
    aspect: "Kalash Position",
    guideline: "Placed to the left side of Ganesha on rice bed",
    significance: "Represents universal energy and abundance"
  },
  {
    aspect: "Ganesha's Trunk",
    guideline: "Left-curving trunk for home, straight for office",
    significance: "Left trunk for domestic harmony, straight for balanced pursuits"
  }
]

const chopdaPujanSteps = [
  {
    step: "Setup",
    description: "Place new account ledgers, books, calculators, and office tools before the altar alongside deities"
  },
  {
    step: "Triple Deity Worship",
    description: "Worship Saraswati FIRST (for wisdom), then Ganesha (obstacles removal), then Lakshmi (prosperity)"
  },
  {
    step: "Shubh Labh Inscription",
    description: "Write Swastika symbol and words 'Shubh' and 'Labh' on first page of new books using Kumkum/Roli"
  },
  {
    step: "Decoration",
    description: "Adorn the books with vermillion, flowers, and Akshat"
  },
  {
    step: "Ethical Pledge",
    description: "Recite a solemn vow to uphold righteous and ethical business practices in the coming year"
  },
  {
    step: "Kuber Worship",
    description: "Draw Swastika on safe/vault and offer prayers to Lord Kuber for wealth preservation"
  }
]

const faqs = [
  {
    question: "What is the most important factor for Lakshmi Puja success?",
    answer: "The auspicious timing (Muhurat) during Sthir Lagna is paramount. For most families and businesses, the Vrishabha (Taurus) Lagna during evening Pradosh Kaal is ideal. This fixed ascendant ensures that prosperity becomes stable and permanent (Sthir Lakshmi) rather than transient."
  },
  {
    question: "Why must Ganesha and Lakshmi idols be seated, not standing?",
    answer: "Seated idols represent stable, permanent wealth (Sthir Lakshmi). Standing idols symbolize transient or unstable prosperity, which contradicts the entire purpose of the ritual - to anchor divine blessings permanently in your home or business."
  },
  {
    question: "What if I cannot find the advanced items like Sapt-Mritika or Sarvoshadhi?",
    answer: "Hindu ritual tradition provides a substitution protocol: offer a small amount of Akshata (unbroken rice) in place of the missing item while mentally acknowledging and chanting the relevant mantra. Devotional intention overrides material availability."
  },
  {
    question: "Why is Ganesha placed on the left side of Lakshmi?",
    answer: "This arrangement embodies the principle that Shubh (auspiciousness and wisdom, represented by Ganesha) must always precede and guide Labh (profit and prosperity, represented by Lakshmi). Wealth acquired without wisdom is unsustainable."
  },
  {
    question: "What is Chopda Pujan and who should perform it?",
    answer: "Chopda Pujan (also called Bahi-Khata Puja) is the worship of account books and business tools, performed by business owners, merchants, and offices. It marks the start of the new financial year and includes worshipping Saraswati for wisdom, inscribing 'Shubh Labh' on new ledgers, and taking an ethical pledge for righteous business practices."
  },
  {
    question: "What is Panchamrit and how is it used?",
    answer: "Panchamrit is a sacred mixture of five nectars: milk, curd, ghee, honey, and sugar. It is used to give a ritualistic bath (Abhishek) to the deity idols during the Snana step of the 16-step worship, symbolizing purification and sanctification."
  },
  {
    question: "Can I perform the puja at any time on Diwali?",
    answer: "No. The timing is crucial. For domestic worship, the evening Pradosh Kaal during Vrishabha (Taurus) Lagna is most recommended. Different Lagnas suit different purposes - Scorpio for institutions, Leo for spiritual practitioners. Check the local Panchang for exact timings in your area."
  },
  {
    question: "What sacred texts should be recited during the puja?",
    answer: "The Shri Suktam (16 Vedic verses) is foundational and highly recommended for attracting sustained prosperity. The Ashta Lakshmi Stotram invokes all eight forms of Lakshmi (wealth, knowledge, success, courage, etc.), acknowledging that true prosperity is holistic."
  },
  {
    question: "What happens after the puja is complete?",
    answer: "Perform the final Aarti by waving the camphor lamp, distribute Prasad (consecrated offerings) to family and community, practice Dana (charity) to share abundance, and perform Visarjan (formal conclusion) to respectfully release the invoked divine energy."
  },
  {
    question: "Why is cleanliness emphasized before Lakshmi Puja?",
    answer: "Goddess Lakshmi is said to reside only in clean, pure, and well-maintained spaces. The ritualistic cleansing of the home and self (Atma-Shodhan) weeks before Diwali is not just physical but spiritual, creating a worthy dwelling for divine energy."
  }
]

const spiritualPrinciples = [
  {
    principle: "Balance of Wisdom and Wealth",
    description: "Ganesha (wisdom) and Lakshmi (wealth) are worshipped together because true prosperity requires intellect to guide the acquisition and management of material resources."
  },
  {
    principle: "Light Over Darkness",
    description: "The lighting of diyas represents the triumph of consciousness and knowledge over ignorance and spiritual darkness, transforming the home into a beacon of divine light."
  },
  {
    principle: "Ethical Prosperity",
    description: "The ritual emphasizes that wealth must be acquired through righteous means (Dharma). The Chopda Pujan's ethical pledge ensures profit (Labh) originates from auspiciousness (Shubh)."
  },
  {
    principle: "Holistic Abundance",
    description: "True prosperity encompasses not just money but health, knowledge, peace, devotion, and family harmony - all aspects sought through the eight forms of Lakshmi."
  }
]

export default function LakshmiPujaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-yellow-400/20 to-red-500/20"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="mb-6">
            <span className="text-6xl">🪔</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-600 via-yellow-500 to-red-600 bg-clip-text text-transparent">
              Lakshmi Ganesh Puja
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-orange-700 mb-4 font-semibold">लक्ष्मी गणेश पूजा</h2>
          <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-4xl mx-auto">
            Expert Protocol for Diwali's Most Sacred Ritual - The Complete 16-Step Shodashopachara Method
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-6 py-3 bg-orange-600 text-white rounded-full font-semibold">Diwali Amavasya</span>
            <span className="px-6 py-3 bg-yellow-400 text-orange-900 rounded-full font-semibold">Pradosh Kaal (Evening)</span>
            <span className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-semibold">Vrishabha Lagna</span>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-600 via-yellow-400 to-red-600 mx-auto"></div>
        </div>
      </section>

      {/* Foundational Principles */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Foundational Principles</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              Lakshmi Ganesh Puja is the central ritual of Diwali, performed on the Amavasya Tithi (New Moon day) of Kartik month.
              This worship is dualistic: <strong>Lord Ganesha</strong> is invoked as the remover of obstacles (Vighnaharta) and the
              embodiment of wisdom (Shubh), while <strong>Goddess Lakshmi</strong> is the bestower of wealth, fortune, and material
              abundance (Labh).
            </p>
            <p className="text-lg text-gray-700 mb-6">
              The ritual emphasizes that <strong>true prosperity requires balance</strong>: the wisdom and intellect represented by
              Ganesha must guide the acquisition and management of wealth bestowed by Lakshmi. Wealth acquired without the guiding
              force of intellect is deemed unsustainable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
              {spiritualPrinciples.map((principle, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border-l-4 border-orange-600">
                  <h3 className="text-lg font-bold text-orange-800 mb-3">{principle.principle}</h3>
                  <p className="text-gray-700 text-sm">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Auspicious Timing (Muhurat) */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-100/50 to-yellow-100/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-6">Auspicious Timing - The Critical Factor</h2>
          <p className="text-center text-lg text-gray-700 mb-12 max-w-4xl mx-auto">
            The timing of Lakshmi Puja is the <strong>most critical element</strong>, transforming the ritual from mere prayer into
            a potent mechanism for securing stable prosperity. The puja must be performed during <strong>Sthir Lagna (Fixed Ascendant)</strong>
            to anchor divine blessings and convert temporary gains into sustained fortune.
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-orange-700 mb-6 text-center">Understanding Sthir Lagna</h3>
            <p className="text-gray-700 mb-6">
              Goddess Lakshmi is inherently <em>Chanchala</em> (volatile or transient). To counteract this potential for fleeting wealth
              and ensure prosperity takes a permanent seat (Sthapana) in your home or business, the puja must be conducted during a
              <strong> Sthir Lagna</strong> - a Fixed Ascendant. This is astrological engineering where the stability of fixed zodiac
              signs anchors divine blessings.
            </p>
          </div>

          <div className="space-y-6">
            {muhuratTimings.map((timing, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden ${timing.lagna.includes('Most Recommended') ? 'ring-4 ring-orange-500' : ''}`}>
                <div className={`p-6 ${
                  timing.lagna.includes('Most Recommended')
                    ? 'bg-gradient-to-r from-orange-600 to-yellow-400'
                    : index % 2 === 0
                      ? 'bg-gradient-to-r from-orange-500 to-red-500'
                      : 'bg-gradient-to-r from-yellow-400 to-orange-400'
                } text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{timing.lagna}</h3>
                  <p className="text-orange-100 text-lg">{timing.time}</p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-bold text-orange-700 mb-2">Suited For:</h4>
                    <p className="text-gray-700">{timing.suitedFor}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-700 mb-2">Purpose:</h4>
                    <p className="text-gray-700">{timing.purpose}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg">
            <p className="text-gray-800">
              <strong>📌 Note:</strong> For general domestic worship and small businesses, the <strong>Vrishabha (Taurus) Lagna
              during evening Pradosh Kaal</strong> is universally acknowledged as the most appropriate and powerful time.
              Check your local Panchang for exact timings.
            </p>
          </div>
        </div>
      </section>

      {/* Vastu Guidelines */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Vastu Guidelines for Altar Setup</h2>
          <p className="text-center text-lg text-gray-700 mb-12 max-w-4xl mx-auto">
            Proper altar arrangement according to Vastu Shastra sanctifies the space, making it worthy of divine presence (Pratishthapana).
            These guidelines ensure harmonious energy flow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vastuGuidelines.map((guide, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-orange-700 mb-3">{guide.aspect}</h3>
                <p className="text-gray-800 font-semibold mb-2">{guide.guideline}</p>
                <p className="text-gray-600 text-sm italic">{guide.significance}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 mb-3">⚠️ Critical Requirement</h3>
            <p className="text-gray-800">
              It is <strong>imperative</strong> that both Lakshmi and Ganesha idols are in a <strong>SEATED position</strong>.
              Standing idols are considered inauspicious for Diwali Puja as they symbolize transient or unstable wealth,
              completely undermining the objective of attracting Sthir Lakshmi (stable prosperity).
            </p>
          </div>
        </div>
      </section>

      {/* Samagri Checklist */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Complete Samagri Checklist</h2>
          <p className="text-center text-lg text-gray-700 mb-12 max-w-4xl mx-auto">
            A successful Lakshmi Ganesh Puja requires meticulous preparation of ritual materials. This comprehensive list covers
            everything from essential items to advanced esoteric components.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {samagriList.map((section, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-orange-600 to-yellow-500 p-4">
                  <h3 className="text-xl font-bold text-white">{section.category}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-orange-600 mr-3 mt-1">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-3">💡 Substitution Protocol</h3>
            <p className="text-gray-800">
              If advanced items like <strong>Sapt-Mritika</strong> (seven sacred soils) or <strong>Sarvoshadhi</strong> (ten herbs)
              are difficult to procure, Hindu tradition provides a solution: offer a small amount of <strong>Akshata</strong> (unbroken rice)
              in its place while mentally acknowledging the item and chanting the relevant mantra. Devotional intention overrides material availability.
            </p>
          </div>
        </div>
      </section>

      {/* 16-Step Shodashopachara */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-6">The 16-Step Shodashopachara Method</h2>
          <p className="text-center text-lg text-gray-700 mb-12 max-w-4xl mx-auto">
            The traditional Lakshmi Ganesh Puja follows the <strong>Shodashopachara Vidhi</strong> - a comprehensive 16-step process
            that treats the deities as supreme, honored guests. Each step is sacred and essential.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shodashopachara.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-4">
                  <div className="text-3xl font-bold mb-2">{step.step}</div>
                  <div className="text-sm font-semibold">{step.name}</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl text-orange-600 mb-2 font-semibold">{step.sanskrit}</div>
                  <p className="text-gray-700 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-orange-700 mb-6">Detailed Achaman Protocol</h3>
            <p className="text-gray-700 mb-6">
              The first step, <strong>Achaman</strong>, is crucial for self-purification. Sitting facing East or North,
              the devotee sips holy water three times while reciting Vishnu's names, removing physical and mental impurities.
            </p>
            <div className="bg-orange-50 rounded-lg p-6">
              <h4 className="font-bold text-orange-800 mb-4">Purification Sequence:</h4>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="font-bold text-orange-600 mr-3">1.</span>
                  <div>
                    <p className="font-semibold">Water Purification Mantra:</p>
                    <p className="text-sm text-gray-700 italic">"Gange ca Yamune caiva Godavari Sarasvati, Narmade Sindho Kaveri jale'smin sannidhim kuru"</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-orange-600 mr-3">2.</span>
                  <div>
                    <p className="font-semibold">First Sip:</p>
                    <p className="text-sm text-gray-700">"Om Keshavaya Svaha" - Sip water once from right palm</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-orange-600 mr-3">3.</span>
                  <div>
                    <p className="font-semibold">Second Sip:</p>
                    <p className="text-sm text-gray-700">"Om Narayanaya Svaha" - Sip water once</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-orange-600 mr-3">4.</span>
                  <div>
                    <p className="font-semibold">Third Sip:</p>
                    <p className="text-sm text-gray-700">"Om Madhavaya Svaha" - Sip water once</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-orange-600 mr-3">5.</span>
                  <div>
                    <p className="font-semibold">External Cleansing:</p>
                    <p className="text-sm text-gray-700">"Om Govindaya Namaha, Om Vishnave Namaha" - Wash or touch hands</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Mantras */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Sacred Mantras for Invocation</h2>
          <p className="text-center text-lg text-gray-700 mb-12 max-w-4xl mx-auto">
            Mantra recitation infuses the ritual with divine energy. Ganesha is invoked first to remove obstacles,
            followed by Lakshmi mantras for wealth and prosperity.
          </p>

          <div className="space-y-8">
            {mantras.map((mantra, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{mantra.name}</h3>
                  <p className="text-orange-100">For {mantra.deity}</p>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="font-bold text-orange-700 mb-3">Sanskrit:</h4>
                    <p className="text-2xl text-gray-800 leading-relaxed">{mantra.sanskrit}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-bold text-orange-700 mb-3">Transliteration:</h4>
                    <p className="text-lg text-gray-700 italic">{mantra.transliteration}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-700 mb-3">Meaning:</h4>
                    <p className="text-gray-700">{mantra.meaning}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-orange-700 mb-4">🕉️ Shri Suktam</h3>
              <p className="text-gray-700 mb-3">
                This ancient Vedic hymn of 16 verses specifically addresses Goddess Lakshmi and is highly revered for
                attracting prosperity and abundance.
              </p>
              <p className="text-sm text-gray-600 italic">
                Sustained recitation during puja is foundational for inviting spiritualized wealth.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-orange-700 mb-4">🌸 Ashta Lakshmi Stotram</h3>
              <p className="text-gray-700 mb-3">
                This hymn invokes all eight forms of Lakshmi - not just wealth (Dhana), but also knowledge (Vidya),
                success (Jaya), courage (Dhairya), and more.
              </p>
              <p className="text-sm text-gray-600 italic">
                Acknowledges that true prosperity is holistic and encompasses all aspects of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chopda Pujan (Business Worship) */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-6">Chopda Pujan - Business & Commerce Ritual</h2>
          <p className="text-center text-lg text-gray-700 mb-12 max-w-4xl mx-auto">
            For business owners, shops, and offices, Diwali marks the commencement of the new financial year.
            The ritual adapts into <strong>Chopda Pujan</strong> (Worship of Account Books), predominantly practiced
            in Gujarat, Rajasthan, and Maharashtra.
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-orange-700 mb-6">What Makes Chopda Pujan Special?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="font-bold text-orange-600 mb-3">Triple Deity Worship</h4>
                <p className="text-gray-700">
                  Unlike home puja, business worship includes <strong>Goddess Saraswati</strong> (worshipped FIRST)
                  for wisdom and accurate accounting, alongside Ganesha and Lakshmi.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-orange-600 mb-3">Ethical Foundation</h4>
                <p className="text-gray-700">
                  The ritual includes a <strong>solemn pledge</strong> to uphold righteous business practices,
                  transforming it into a spiritual contract for ethical wealth generation.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {chopdaPujanSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="flex items-center p-6 bg-gradient-to-r from-yellow-400 to-orange-500">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-6">
                    <span className="text-2xl font-bold text-orange-600">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{step.step}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-8 border-l-4 border-orange-600">
            <h3 className="text-2xl font-bold text-orange-800 mb-4">🕉️ The Meaning of "Shubh Labh"</h3>
            <p className="text-gray-800 text-lg mb-4">
              <strong>Shubh</strong> = Auspiciousness, Wisdom, Ethics<br/>
              <strong>Labh</strong> = Profit, Gain, Prosperity
            </p>
            <p className="text-gray-700">
              The symbolic combination structurally demands that any profit (Labh) derived in the new year must
              originate from an <strong>auspicious and ethical source</strong> (Shubh). This is the spiritual foundation
              of righteous business in Hindu tradition.
            </p>
          </div>
        </div>
      </section>

      {/* Post-Puja Practices */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Post-Puja Practices</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4 text-center">🪔</div>
              <h3 className="text-xl font-bold text-orange-700 mb-4 text-center">Aarti</h3>
              <p className="text-gray-700 text-center">
                Wave the camphor lamp in circular motions before the deities, symbolizing the final removal of
                darkness and acceptance of divine light. Sing or recite the Lakshmi-Ganesha Aarti.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4 text-center">🍬</div>
              <h3 className="text-xl font-bold text-orange-700 mb-4 text-center">Prasad Distribution</h3>
              <p className="text-gray-700 text-center">
                Share the consecrated offerings (Prasad) with family, staff, neighbors, and friends.
                The sharing of abundance is integral to Diwali's spirit.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4 text-center">🤲</div>
              <h3 className="text-xl font-bold text-orange-700 mb-4 text-center">Dana (Charity)</h3>
              <p className="text-gray-700 text-center">
                Practice charity and help the needy, reflecting universal prosperity. True wealth is that
                which is shared and circulated, not hoarded.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-orange-700 mb-6 text-center">Visarjan - Formal Conclusion</h3>
            <p className="text-gray-700 mb-6">
              <strong>Visarjan</strong> is the formal concluding ceremony that symbolizes the deities' return to their
              divine realm after temporary invocation. This step is vital when new or temporary idols have been consecrated,
              as it formally releases the divine energy.
            </p>
            <div className="bg-orange-50 rounded-lg p-6">
              <h4 className="font-bold text-orange-800 mb-3">Visarjan Process:</h4>
              <ol className="space-y-2 text-gray-700">
                <li>1. Take Akshata (unbroken rice) and a flower in the right hand</li>
                <li>2. Chant the appropriate Visarjan Mantra</li>
                <li>3. If using temporary clay idols, immerse them in water</li>
                <li>4. For Ganesha, chant: <em>"Ganpati Bappa Morya, Pudhchya Varshi Lavkar Ya"</em> (O Father Ganesha, come back quickly next year)</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-orange-700 mb-3 flex items-start">
                    <span className="text-orange-500 mr-3">Q.</span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-6">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Key Takeaways</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-2xl mr-4">🕐</span>
                <p className="text-gray-800"><strong>Timing is paramount:</strong> Perform puja during Sthir Lagna (Fixed Ascendant), ideally Vrishabha (Taurus) during evening Pradosh Kaal</p>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4">🪑</span>
                <p className="text-gray-800"><strong>Seated idols only:</strong> Both Lakshmi and Ganesha must be in seated position for stable, permanent prosperity</p>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4">⚖️</span>
                <p className="text-gray-800"><strong>Wisdom guides wealth:</strong> Ganesha (left side) must precede Lakshmi - Shubh before Labh</p>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4">📿</span>
                <p className="text-gray-800"><strong>Follow 16 steps:</strong> Complete the Shodashopachara method systematically for maximum spiritual efficacy</p>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4">🕉️</span>
                <p className="text-gray-800"><strong>Chant sacred texts:</strong> Recite Shri Suktam and Ashta Lakshmi Stotram for holistic prosperity</p>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4">💼</span>
                <p className="text-gray-800"><strong>Business worship:</strong> Perform Chopda Pujan with ethical pledge and "Shubh Labh" inscription</p>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4">🤝</span>
                <p className="text-gray-800"><strong>Share abundance:</strong> Distribute Prasad and practice Dana (charity) to complete the cycle of prosperity</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-800 mb-8">Explore More</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/festivals/diwali" className="px-8 py-4 bg-gradient-to-r from-orange-600 to-yellow-400 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              About Diwali Festival
            </Link>
            <Link href="/festivals/durga-puja" className="px-8 py-4 bg-gradient-to-r from-red-700 to-yellow-400 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Durga Puja Guide
            </Link>
            <Link href="/festivals" className="px-8 py-4 bg-gradient-to-r from-blue-900 to-indigo-700 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              All Festivals
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
