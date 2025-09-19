import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Navratri - Nine Nights of Divine Celebration | Significance, Rituals & Celebration | PeacefulAnswers',
  description: 'Discover the magnificent celebration of Navratri, honoring the Divine Mother in her nine forms. Learn about the significance, rituals, colors, and spiritual meaning of this powerful festival.',
  keywords: 'Navratri, Navaratri, Divine Mother, Goddess Durga, Nine Nights, Garba, Dandiya, Shakti, festival colors, spiritual significance',
  openGraph: {
    title: 'Navratri - Nine Nights of Divine Celebration | Significance, Rituals & Celebration | PeacefulAnswers',
    description: 'Explore the divine celebration of Navratri and discover the power of the Divine Feminine in nine sacred nights.',
    type: 'website',
  },
}

interface NavratriGoddess {
  name: string
  description: string
  significance: string
  color: string
  day: number
}

const navratriGreetings = [
  "नवरात्रि की शुभकामनाएं! May Maa Durga bless you with strength, wisdom, and prosperity in all nine forms.",
  "May the divine blessings of the nine goddesses bring joy, peace, and success to your life during Navratri.",
  "Wishing you a blessed Navratri filled with devotion, celebration, and divine grace from all nine forms of Durga.",
  "May Maa Durga remove all obstacles from your path and shower you with her divine blessings for nine sacred nights.",
  "On this auspicious occasion of Navratri, may the Divine Mother protect and guide you always through her nine manifestations.",
  "या देवी सर्वभूतेषु शक्ति रूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥"
]

const navratriGoddesses: NavratriGoddess[] = [
  {
    name: "Shailaputri",
    description: "Daughter of the Mountain",
    significance: "The reincarnation of Goddess Sati, daughter of King Himavat. Symbolizes strength, stability, and the foundation of spiritual practice. She represents the awakening of the Muladhara Chakra and the beginning of the devotee's journey toward enlightenment.",
    color: "Red",
    day: 1
  },
  {
    name: "Brahmacharini",
    description: "The Ascetic",
    significance: "Parvati's form during her penance to win Lord Shiva. After performing arduous asceticism for a hundred years, she embodies discipline, austerity, devotion, and spiritual knowledge. Represents the cultivation of inner strength through spiritual discipline.",
    color: "Royal Blue",
    day: 2
  },
  {
    name: "Chandraghanta",
    description: "The Warrior Goddess",
    significance: "The married form of Parvati with an ever-open third eye. Her crescent moon shaped like a bell symbolizes serenity and divine grace. She signifies the courage and fearlessness required to face life's obstacles.",
    color: "Yellow",
    day: 3
  },
  {
    name: "Kushmanda",
    description: "The Cosmic Creator",
    significance: "Her name combines ku (little), ushma (warmth), and anda (cosmic egg). She created the universe with her radiant smile and resides within the core of the Sun, providing it with luminosity and energy. Represents creation and life-sustaining energy.",
    color: "Orange",
    day: 4
  },
  {
    name: "Skandamata",
    description: "Mother of Kartikeya",
    significance: "Depicted holding her son Skanda (Kartikeya) in her lap. She embodies the perfect balance of nurturing motherhood and divine protection, demonstrating that true strength comes from love. Symbolizes fierce maternal protection and wisdom.",
    color: "White",
    day: 5
  },
  {
    name: "Katyayani",
    description: "The Slayer of Demons",
    significance: "Born from the combined anger of the gods to destroy Mahishasura. She represents the universe's response to overwhelming evil and the fierce warrior manifestation needed to destroy demonic forces. In Vaishnava tradition, cowherd-maids worshipped her to be blessed with Krishna as husband.",
    color: "Red",
    day: 6
  },
  {
    name: "Kalaratri",
    description: "The Dark One",
    significance: "Her most famous myth involves slaying the demon Raktabeej by drinking his blood to prevent his multiplication. Despite her terrifying form with dark complexion and disheveled hair, she is known as Shubhankari (the auspicious one) because she destroys ignorance and negativity.",
    color: "White",
    day: 7
  },
  {
    name: "Mahagauri",
    description: "The Radiant One",
    significance: "Her skin became dark from rigorous penance to marry Shiva. When pleased with her devotion, Shiva cleansed her, transforming her into brilliant white form. Her transformation represents the soul's journey from ignorance to enlightenment, symbolizing purity and spiritual clarity.",
    color: "Pink",
    day: 8
  },
  {
    name: "Siddhidatri",
    description: "Giver of Siddhis",
    significance: "The culmination of the spiritual journey, blessing devotees with realization and fulfillment. Even Lord Shiva attained his miraculous powers by worshipping her, which is why he is revered as Ardhanarishwara (half male, half female). Represents the final stage of spiritual mastery.",
    color: "Sky Blue",
    day: 9
  }
]

const navratriDays = [
  {
    day: "Day 1 - Pratipada",
    significance: "Invocation of Goddess Shailaputri",
    rituals: ["Ghatasthapana ceremony", "Kalash installation", "Red color worship", "Mountain energy invocation"]
  },
  {
    day: "Day 2 - Dwitiya",
    significance: "Worship of Brahmacharini",
    rituals: ["Penance and meditation", "Royal blue offerings", "Knowledge seeking prayers", "Spiritual discipline"]
  },
  {
    day: "Day 3 - Tritiya",
    significance: "Chandraghanta veneration",
    rituals: ["Yellow color celebration", "Peace prayers", "Protection rituals", "Moon energy worship"]
  },
  {
    day: "Day 4 - Chaturthi",
    significance: "Kushmanda cosmic worship",
    rituals: ["Orange offerings", "Universe creation prayers", "Energy invocation", "Cosmic meditation"]
  },
  {
    day: "Day 5 - Panchami",
    significance: "Skandamata maternal love",
    rituals: ["White purity worship", "Maternal blessings", "Child welfare prayers", "Nurturing energy"]
  },
  {
    day: "Day 6 - Shashthi",
    significance: "Katyayani warrior worship",
    rituals: ["Red warrior prayers", "Courage invocation", "Evil destruction rituals", "Strength seeking"]
  },
  {
    day: "Day 7 - Saptami",
    significance: "Kalaratri powerful worship",
    rituals: ["White protection prayers", "Fear removal rituals", "Darkness destruction", "Divine protection"]
  },
  {
    day: "Day 8 - Ashtami",
    significance: "Mahagauri grace worship",
    rituals: ["Pink beauty prayers", "Kanya Puja ceremony", "Purity rituals", "Sin removal worship"]
  },
  {
    day: "Day 9 - Navami",
    significance: "Siddhidatri fulfillment",
    rituals: ["Sky blue offerings", "Siddhi prayers", "Final blessings", "Spiritual completion"]
  }
]

const regionalCelebrations = [
  {
    region: "Gujarat & Maharashtra",
    specialty: "Garba & Dandiya Nights",
    description: "Famous for vibrant dance nights with traditional garba and dandiya raas performed in colorful attire around decorated pots."
  },
  {
    region: "West Bengal",
    specialty: "Durga Puja Celebration",
    description: "Celebrated as Durga Puja with elaborate pandals, artistic decorations, and cultural programs during the last four days."
  },
  {
    region: "North India",
    specialty: "Ram Leela & Dussehra",
    description: "Features Ram Leela performances leading to Vijayadashami, celebrating Lord Rama's victory over Ravana."
  },
  {
    region: "South India",
    specialty: "Golu/Kolu Displays",
    description: "Traditional doll displays (Golu in Tamil Nadu, Kolu in Karnataka) with elaborate arrangements and storytelling."
  },
  {
    region: "Karnataka",
    specialty: "Mysore Dasara",
    description: "Grand royal celebration at Mysore Palace with processions, cultural events, and traditional ceremonies."
  },
  {
    region: "Assam",
    specialty: "Traditional Durga Puja",
    description: "Focuses on religious rituals, traditional dances, and community gatherings in homes and temples."
  }
]

const navratriQuotes = [
  {
    quote: "या देवी सर्वभूतेषु शक्ति रूपेण संस्थिता",
    translation: "The Goddess who resides in all beings in the form of power",
    source: "Devi Mahatmya"
  },
  {
    quote: "नवरात्रे महोत्सवे देवी दुर्गा जगन्माता",
    translation: "In the great festival of nine nights, Goddess Durga, the mother of the universe",
    source: "Durga Saptashati"
  },
  {
    quote: "शक्ति शक्तिमता च्छन्दो देवता दुर्गा गायत्री",
    translation: "Power, energy, sacred verse - Goddess Durga is the divine Gayatri",
    source: "Tantric Texts"
  }
]

const navratriFacts = [
  {
    title: "Ancient Vedic Origins",
    description: "Navratri has been celebrated for over 3000 years, with roots in ancient Vedic traditions of Devi worship and seasonal changes."
  },
  {
    title: "Four Seasonal Celebrations",
    description: "Navratri is celebrated four times a year - Chaitra, Ashadha, Sharad, and Magha Navratri, each marking seasonal transitions."
  },
  {
    title: "World's Largest Dance Festival",
    description: "Gujarat's Navratri garba celebrations involve millions of dancers, making it one of the world's largest participatory dance festivals."
  },
  {
    title: "Scientific Color Therapy",
    description: "The nine colors of Navratri correspond to chakras and energy centers, providing psychological and spiritual benefits to devotees."
  },
  {
    title: "Global Celebration",
    description: "Navratri is celebrated in over 50 countries worldwide, with major celebrations in USA, UK, Canada, and Australia."
  },
  {
    title: "Economic Impact",
    description: "Navratri generates over $2 billion in economic activity across India, involving textiles, jewelry, food, and entertainment industries."
  }
]

const faqs = [
  {
    question: "When is Navratri celebrated in 2025?",
    answer: "Sharad Navratri 2025 will be celebrated from September 22 to October 2, concluding with Vijayadashami (Dussehra) on October 2nd. This is the most prominent Navratri celebration of the year."
  },
  {
    question: "What is the significance of the nine colors in Navratri?",
    answer: "Each day of Navratri is associated with a specific color that represents the energy and qualities of that day's goddess. The colors enhance spiritual vibrations and connect devotees with the divine feminine energy of each form."
  },
  {
    question: "What is the difference between Garba and Dandiya?",
    answer: "Garba is performed in circular formations around a lamp or deity, representing the circle of life. Dandiya Raas is performed with colorful sticks representing swords, re-enacting the battle between Goddess Durga and demons."
  },
  {
    question: "Can non-Hindus participate in Navratri celebrations?",
    answer: "Yes, Navratri celebrations welcome people of all backgrounds. The festival promotes universal values of good over evil, and anyone can participate in cultural events, dances, and community celebrations."
  },
  {
    question: "What foods are eaten during Navratri fasting?",
    answer: "Navratri fasting includes fruits, milk, nuts, special grains like buckwheat and water chestnut flour, and vegetables like potatoes and sweet potatoes. Regular grains, onions, and garlic are avoided."
  },
  {
    question: "What is Kanya Puja and when is it performed?",
    answer: "Kanya Puja is the worship of young girls as embodiments of the Divine Mother. It is typically performed on Ashtami (8th day) or Navami (9th day), where girls are honored with food, gifts, and prayers."
  }
]

export default function NavratriPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-700/20 via-pink-500/20 to-purple-400/20"></div>
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-700 via-pink-500 to-purple-400 bg-clip-text text-transparent">
              Navratri
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-orange-700 mb-8 font-semibold">नवरात्रि - Nine Sacred Nights</h2>
          <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-4xl mx-auto">
            Celebrating the Divine Feminine through nine magnificent forms of Goddess Durga
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-6 py-3 bg-orange-700 text-white rounded-full font-semibold">September 22 - October 2, 2025</span>
            <span className="px-6 py-3 bg-pink-500 text-white rounded-full font-semibold">Nine Sacred Nights</span>
            <span className="px-6 py-3 bg-gradient-to-r from-orange-700 to-purple-400 text-white rounded-full font-semibold">Ashwin Month</span>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-700 via-pink-500 to-purple-400 mx-auto"></div>
        </div>
      </section>

      {/* Other Names */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Known By Many Names</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-orange-700 mb-2">Navaratri</h3>
              <p className="text-gray-600">Nine Nights (Sanskrit)</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-pink-600 mb-2">Durga Puja</h3>
              <p className="text-gray-600">In Bengal & Eastern India</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-purple-600 mb-2">Mysore Dasara</h3>
              <p className="text-gray-600">Karnataka's royal celebration</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-orange-600 mb-2">Sharadiya</h3>
              <p className="text-gray-600">Autumn celebration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Where Celebrated */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-700/10 via-pink-500/10 to-purple-400/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Global Celebrations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-orange-700 mb-6">Primary Celebration Regions</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-lg shadow">
                  <div className="w-3 h-3 bg-orange-700 rounded-full mr-4"></div>
                  <span className="text-gray-800"><strong>Gujarat:</strong> World-famous Garba and Dandiya celebrations</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow">
                  <div className="w-3 h-3 bg-pink-500 rounded-full mr-4"></div>
                  <span className="text-gray-800"><strong>West Bengal:</strong> Elaborate Durga Puja celebrations</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-4"></div>
                  <span className="text-gray-800"><strong>Karnataka:</strong> Royal Mysore Dasara festivities</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow">
                  <div className="w-3 h-3 bg-orange-700 rounded-full mr-4"></div>
                  <span className="text-gray-800"><strong>Global Diaspora:</strong> Hindu communities worldwide</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-orange-700 mb-6">Famous Celebration Places</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow">
                  <h4 className="font-bold text-orange-600 mb-2">Ahmedabad, Gujarat</h4>
                  <p className="text-gray-700">World's largest Garba celebrations with millions of participants</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                  <h4 className="font-bold text-pink-600 mb-2">Kolkata, West Bengal</h4>
                  <p className="text-gray-700">Magnificent Durga Puja with artistic pandals</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                  <h4 className="font-bold text-purple-600 mb-2">Mysore, Karnataka</h4>
                  <p className="text-gray-700">Royal Dasara celebrations at Mysore Palace</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                  <h4 className="font-bold text-orange-600 mb-2">Varanasi, UP</h4>
                  <p className="text-gray-700">Ancient spiritual celebrations on the ghats</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Navratri */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-8">What is Navratri?</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              Navratri, meaning "nine nights" in Sanskrit, is a sacred Hindu festival celebrating the Divine Feminine
              through nine manifestations of Goddess Durga. This profound festival represents a sequential journey of
              spiritual evolution, guiding devotees from material existence to divine liberation through distinct stages
              of inner awakening and transformation.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Each night is dedicated to a specific form of the Goddess, representing different aspects of cosmic power
              and spiritual development. The festival honors Shakti - the primordial cosmic energy that creates, sustains,
              and transforms the universe - in her most dynamic and accessible forms. The progressive nature of the Navadurga
              provides a tangible roadmap for spiritual seekers, demonstrating that the journey requires cultivation of
              distinct qualities from inner strength and discipline to fearlessness and divine grace.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              The festival culminates on Vijayadashami (Dussehra), celebrating Durga's victory over Mahishasura -
              a profound allegory representing the triumph of composed wisdom over chaotic forces, consciousness over ignorance,
              and dharma over adharma through divine intervention.
            </p>
            <div className="bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-800 mb-4">Etymology & Cosmic Significance</h3>
              <p className="text-gray-700 mb-4">
                <strong>नव (Nav):</strong> Nine, representing completeness, cosmic cycles, and spiritual wholeness<br/>
                <strong>रात्रि (Ratri):</strong> Night, symbolizing the divine feminine energy and the receptive, transformative power of darkness<br/>
                <strong>Combined:</strong> Nine sacred nights of worshipping the Divine Mother in her manifested forms
              </p>
              <p className="text-gray-700 text-sm italic">
                "The nine nights represent the progressive journey of the soul, with each form of Durga offering
                specific guidance for overcoming obstacles and developing higher consciousness."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nine Forms of Durga */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-50 via-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Nine Divine Forms - Navadurga</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {navratriGoddesses.map((goddess, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-700 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {goddess.day}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-orange-700">{goddess.name}</h3>
                    <div className={`w-4 h-4 rounded-full mt-1 ${
                      goddess.color === 'Red' ? 'bg-red-500' :
                      goddess.color === 'Royal Blue' ? 'bg-blue-700' :
                      goddess.color === 'Yellow' ? 'bg-yellow-500' :
                      goddess.color === 'Orange' ? 'bg-orange-500' :
                      goddess.color === 'White' ? 'bg-gray-100 border-2 border-gray-400' :
                      goddess.color === 'Pink' ? 'bg-pink-500' :
                      goddess.color === 'Sky Blue' ? 'bg-sky-400' : 'bg-gray-400'
                    }`}></div>
                  </div>
                </div>
                <p className="text-pink-600 font-semibold mb-3">{goddess.description}</p>
                <p className="text-gray-700 text-sm mb-4">{goddess.significance}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-orange-600">Color: {goddess.color}</span>
                  <span className="text-sm text-gray-500">Day {goddess.day}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Days */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">The Sacred Journey - Nine Days</h2>
          <div className="space-y-6">
            {navratriDays.map((day, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`p-6 bg-gradient-to-r ${
                  index % 3 === 0 ? 'from-orange-700 to-pink-500' :
                  index % 3 === 1 ? 'from-pink-500 to-purple-400' :
                  'from-purple-400 to-orange-500'
                } text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{day.day}</h3>
                  <p className="text-orange-100">{day.significance}</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {day.rituals.map((ritual, ritualIndex) => (
                      <div key={ritualIndex} className="flex items-center p-3 bg-orange-50 rounded-lg">
                        <div className="w-2 h-2 bg-orange-700 rounded-full mr-3"></div>
                        <span className="text-gray-700 text-sm">{ritual}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Significance */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Spiritual Significance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-700 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-orange-800 mb-4">Divine Feminine Power</h3>
              <p className="text-gray-700">
                Navratri celebrates Shakti - the divine feminine energy that creates and sustains the universe.
                The nine forms represent different aspects of cosmic power and spiritual transformation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-orange-800 mb-4">Cultural Unity</h3>
              <p className="text-gray-700">
                The festival brings together millions in collective celebration through dance, music, and worship.
                It transcends social boundaries and promotes cultural harmony across communities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-orange-800 mb-4">Spiritual Transformation</h3>
              <p className="text-gray-700">
                Through nine nights of devotion, fasting, and celebration, devotees experience inner purification
                and spiritual awakening, connecting with their divine nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Celebrations */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Regional Celebrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionalCelebrations.map((celebration, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-orange-700 mb-3">{celebration.region}</h3>
                <h4 className="text-lg font-semibold text-pink-600 mb-3">{celebration.specialty}</h4>
                <p className="text-gray-700">{celebration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sacred Rituals */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Sacred Rituals & Hidden Meanings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-red-700 mb-3">Akalbodhan</h3>
              <p className="text-lg font-semibold text-orange-600 mb-3">"Untimely Invocation"</p>
              <p className="text-gray-700 mb-4">Autumn worship of Durga, traditionally a spring festival, initiated by Lord Rama to gain power to defeat Ravana.</p>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-pink-700 mb-2">Deeper Significance:</h4>
                <p className="text-sm text-gray-600">Demonstrates that sincere devotion can invoke the divine at any time, transcending traditional rules and conventional seasons.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-red-700 mb-3">Kola Bou</h3>
              <p className="text-lg font-semibold text-orange-600 mb-3">"Banana Bride"</p>
              <p className="text-gray-700 mb-4">Banana plant dressed in white sari with red border, placed beside Lord Ganesha on the seventh day.</p>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-pink-700 mb-2">Deeper Significance:</h4>
                <p className="text-sm text-gray-600">Represents Nabapatrika - nine plants symbolizing goddess's vegetative form, linking formal worship to primordial agrarian traditions.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-red-700 mb-3">Sandhi Puja</h3>
              <p className="text-lg font-semibold text-orange-600 mb-3">"Junction Worship"</p>
              <p className="text-gray-700 mb-4">Sacred 48-minute ritual at the exact juncture between eighth and ninth days, offering 108 lamps and lotus flowers.</p>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-pink-700 mb-2">Deeper Significance:</h4>
                <p className="text-sm text-gray-600">Marks emergence of Chamunda to slay demons, representing the climax of good vs evil and powerful transformation in moments of stillness.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-red-700 mb-3">Kumari Puja</h3>
              <p className="text-lg font-semibold text-orange-600 mb-3">"Virgin Worship"</p>
              <p className="text-gray-700 mb-4">Worship of young, pre-pubescent girls as living embodiments of the goddess, typically on Ashtami or Navami.</p>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-pink-700 mb-2">Deeper Significance:</h4>
                <p className="text-sm text-gray-600">Affirms that Shakti resides within every woman, connecting abstract spiritual philosophy to lived reality and reinforcing the sacredness of feminine principle.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-red-700 mb-3">Nishiddho Palli Soil</h3>
              <p className="text-lg font-semibold text-orange-600 mb-3">"Forbidden Area Soil"</p>
              <p className="text-gray-700 mb-4">Soil from courtesan's house traditionally used in making Durga idols, incorporating earth from socially marginalized spaces.</p>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-pink-700 mb-2">Deeper Significance:</h4>
                <p className="text-sm text-gray-600">Demonstrates goddess's non-discriminatory nature - that divine blessings transcend all societal norms, judgments, and castes.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-red-700 mb-3">Nine Sacred Colors</h3>
              <p className="text-lg font-semibold text-orange-600 mb-3">"Chakra Alignment"</p>
              <p className="text-gray-700 mb-4">Each day's specific color corresponds to energy centers and provides psychological and spiritual benefits to devotees.</p>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-pink-700 mb-2">Deeper Significance:</h4>
                <p className="text-sm text-gray-600">Scientific color therapy that enhances spiritual vibrations and connects devotees with divine feminine energy of each form through chromatic resonance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Fascinating Navratri Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {navratriFacts.map((fact, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-bold text-orange-700 mb-3">{fact.title}</h3>
                <p className="text-gray-700">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wishes and Quotes */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Navratri Wishes & Sacred Quotes</h2>

          {/* Greetings */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-orange-700 mb-8 text-center">Divine Blessings</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {navratriGreetings.map((greeting, index) => (
                <div key={index} className="bg-gradient-to-r from-orange-50 via-pink-50 to-purple-50 rounded-xl p-6 shadow-lg">
                  <p className="text-gray-800 italic leading-relaxed">"{greeting}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sacred Quotes */}
          <div>
            <h3 className="text-2xl font-bold text-orange-700 mb-8 text-center">Sacred Verses</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {navratriQuotes.map((quote, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-700">
                  <p className="text-lg font-semibold text-orange-800 mb-3">{quote.quote}</p>
                  <p className="text-gray-700 mb-2 italic">{quote.translation}</p>
                  <p className="text-sm text-pink-600">— {quote.source}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-orange-700 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eternal Message */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 via-orange-500 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">🙏 The Eternal Message of Navratri</h2>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <p className="text-xl mb-6 leading-relaxed">
              "The comprehensive study of Navratri reveals a festival of unparalleled spiritual depth,
              whose significance extends far beyond cultural celebration to become a living practice
              of profound philosophical principles."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-bold mb-4 text-orange-100">🌟 Spiritual Evolution</h3>
                <p className="text-white/90">
                  The nine forms of Durga serve as a spiritual lexicon, offering a progressive path
                  for the human soul to achieve self-realization by cultivating inner virtues and
                  overcoming obstacles through divine guidance.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-pink-100">🕉️ Living Philosophy</h3>
                <p className="text-white/90">
                  Sacred rituals demonstrate that Navratri worship is not merely ceremonial but
                  embodies profound truths: the divine transcends social norms, responds to sincere
                  devotion, and is intrinsically linked to nature's cycles.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/10 rounded-xl">
              <p className="text-lg italic text-orange-100">
                "Through inner strength and fierce compassion, the Divine Mother reassures us that
                good will always prevail over evil. Her enduring message is one of courage, wisdom,
                and unwavering commitment to righteous action."
              </p>
            </div>
          </div>

          <div className="text-lg">
            <p className="mb-6">
              May the nine sacred nights of Navratri awaken the Shakti within each devotee,
              guiding all seekers from darkness to light, from ignorance to wisdom,
              and from separation to divine unity.
            </p>
            <p className="text-2xl font-bold text-yellow-200">
              🌺 जय माता दी 🌺
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-800 mb-8">Explore More Divine Celebrations</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/deities/durga" className="px-8 py-4 bg-gradient-to-r from-red-700 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Learn About Maa Durga
            </Link>
            <Link href="/festivals/durga-puja" className="px-8 py-4 bg-gradient-to-r from-orange-600 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Discover Durga Puja
            </Link>
            <Link href="/festivals/diwali" className="px-8 py-4 bg-gradient-to-r from-orange-600 to-yellow-400 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Experience Diwali
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