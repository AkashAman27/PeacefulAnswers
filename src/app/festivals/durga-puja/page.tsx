import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Durga Puja - Divine Mother Festival | Significance, Rituals & Celebration | PeacefulAnswers',
  description: 'Discover the magnificent celebration of Durga Puja, honoring the Divine Mother. Learn about the significance, rituals, traditions, and spiritual meaning of this powerful festival.',
  keywords: 'Durga Puja, Divine Mother, Goddess Durga, Navaratri, Shakti, Bengali festival, Dashain, Mahalaya, spiritual significance',
  openGraph: {
    title: 'Durga Puja - Divine Mother Festival | Significance, Rituals & Celebration | PeacefulAnswers',
    description: 'Explore the divine celebration of Durga Puja and discover the power of the Divine Feminine in Hindu tradition.',
    type: 'website',
  },
}

interface DurgaForm {
  name: string
  description: string
  significance: string
}

const durgaGreetings = [
  "दुर्गा पूजार शुभेच्छा! May Maa Durga bless you with strength, courage, and prosperity.",
  "May the divine blessings of Goddess Durga bring joy, peace, and success to your life.",
  "Wishing you a blessed Durga Puja filled with devotion, celebration, and divine grace.",
  "May Maa Durga remove all obstacles from your path and shower you with her divine blessings.",
  "On this auspicious occasion of Durga Puja, may the Divine Mother protect and guide you always.",
  "सर्वमङ्गल माङ्गल्ये शिवे सर्वार्थ साधिके शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते।"
]

const durgaAvatars: DurgaForm[] = [
  {
    name: "Shailaputri",
    description: "Daughter of the Mountains",
    significance: "Represents the power of Brahma, Vishnu, and Shiva combined"
  },
  {
    name: "Brahmacharini",
    description: "The Unmarried One",
    significance: "Symbolizes penance, devotion, and spiritual knowledge"
  },
  {
    name: "Chandraghanta",
    description: "Bearer of Moon Bell",
    significance: "Provides peace, courage, and protection from evil"
  },
  {
    name: "Kushmanda",
    description: "Creator of Universe",
    significance: "Brings health, wealth, and cosmic energy"
  },
  {
    name: "Skandamata",
    description: "Mother of Skanda (Kartikeya)",
    significance: "Grants wisdom, wealth, and spiritual liberation"
  },
  {
    name: "Katyayani",
    description: "Daughter of Sage Katyayan",
    significance: "Destroys evil and grants courage to devotees"
  },
  {
    name: "Kalaratri",
    description: "Night of Death",
    significance: "Destroys ignorance, fear, and negative energies"
  },
  {
    name: "Mahagauri",
    description: "Extremely Fair One",
    significance: "Purifies sins and grants peace and prosperity"
  },
  {
    name: "Siddhidatri",
    description: "Giver of Supernatural Powers",
    significance: "Bestows spiritual powers and divine knowledge"
  }
]

const pujaDays = [
  {
    day: "Mahalaya",
    significance: "Invocation of Goddess Durga",
    rituals: ["Recitation of Devi Mahatmya", "Pitru Paksha ends", "Chandi Path", "Preparation begins"]
  },
  {
    day: "Shashthi (Day 1)",
    significance: "Durga's descent to earth",
    rituals: ["Kalparambha ceremony", "Bodhon ritual", "Eyes of deity painted", "First offering"]
  },
  {
    day: "Saptami (Day 2)",
    significance: "Life enters the idol",
    rituals: ["Pran Pratishtha", "Saptami Puja", "Cultural programs begin", "Devotees visit pandals"]
  },
  {
    day: "Ashtami (Day 3)",
    significance: "Main worship day",
    rituals: ["Mahashtami Puja", "Kumari Puja", "Sandhi Puja", "Special bhog distribution"]
  },
  {
    day: "Navami (Day 4)",
    significance: "Victory celebration",
    rituals: ["Mahanavami Puja", "Homa ceremony", "Community feast", "Cultural performances"]
  },
  {
    day: "Dashami (Day 5)",
    significance: "Farewell to Goddess",
    rituals: ["Vijayadashami", "Sindoor Khela", "Visarjan procession", "Immersion ceremony"]
  }
]

const regionalCelebrations = [
  {
    region: "West Bengal",
    specialty: "Grand Pandal Culture",
    description: "Elaborate artistic pandals, cultural programs, and community celebrations lasting five days."
  },
  {
    region: "Assam",
    specialty: "Traditional Worship",
    description: "Focuses on religious rituals, traditional dances, and family gatherings in homes and temples."
  },
  {
    region: "Odisha",
    specialty: "Shakti Worship",
    description: "Celebrates as Dussehra with emphasis on Goddess worship and traditional rituals."
  },
  {
    region: "Nepal",
    specialty: "Dashain Festival",
    description: "15-day celebration honoring Durga, with family reunions and traditional ceremonies."
  },
  {
    region: "Bihar & Jharkhand",
    specialty: "Community Bonding",
    description: "Emphasis on social harmony, cultural exchange, and traditional folk performances."
  },
  {
    region: "Tripura",
    specialty: "Kali Focus",
    description: "Celebrates Goddess Kali alongside Durga with unique local traditions and rituals."
  }
]

const durgaQuotes = [
  {
    quote: "या देवी सर्वभूतेषु शक्ति रूपेण संस्थिता",
    translation: "The Goddess who resides in all beings in the form of power",
    source: "Devi Mahatmya"
  },
  {
    quote: "सर्वमङ्गल माङ्गल्ये शिवे सर्वार्थ साधिके",
    translation: "She who is the source of all auspiciousness and fulfills all desires",
    source: "Durga Chalisa"
  },
  {
    quote: "धर्मविरुद्ध धर्मार्थ गुरोराज्ञा सुशासनम्",
    translation: "Righteous rule comes from following dharma and obeying the guru",
    source: "Markandeya Purana"
  }
]

const durgaFacts = [
  {
    title: "Ancient Origins",
    description: "Durga Puja has been celebrated for over 400 years in Bengal, with roots in ancient Vedic traditions of Devi worship."
  },
  {
    title: "Mahishasura Legend",
    description: "The festival commemorates Goddess Durga's victory over the buffalo demon Mahishasura after a 10-day battle."
  },
  {
    title: "World's Largest Festival",
    description: "Durga Puja in West Bengal is one of the world's largest religious festivals, with over 50,000 pandals in Kolkata alone."
  },
  {
    title: "UNESCO Recognition",
    description: "Durga Puja was inscribed on UNESCO's Representative List of Intangible Cultural Heritage of Humanity in 2021."
  },
  {
    title: "Economic Impact",
    description: "The festival generates over $3 billion in economic activity across Bengal, involving millions of people in various capacities."
  },
  {
    title: "Artistic Excellence",
    description: "Durga Puja pandals showcase incredible artistic creativity, with themes ranging from classical to contemporary social issues."
  }
]

const faqs = [
  {
    question: "When is Durga Puja celebrated in 2024?",
    answer: "Durga Puja 2024 will be celebrated from October 9-13, with Mahalaya on October 2nd. The main celebration includes Shashthi (Oct 9), Saptami (Oct 10), Ashtami (Oct 11), Navami (Oct 12), and Dashami (Oct 13)."
  },
  {
    question: "What is the significance of Goddess Durga having ten hands?",
    answer: "Durga's ten hands represent the ten directions and symbolize her omnipresence and ability to protect devotees from all sides. Each hand holds a different weapon gifted by various gods, showing the combined power of all divine forces."
  },
  {
    question: "Why is Durga Puja celebrated for only five days?",
    answer: "The five days represent the time Goddess Durga spends on earth visiting her devotees. It's believed she returns to her celestial abode after Dashami. These days symbolize the temporary victory of good over evil that must be continuously renewed."
  },
  {
    question: "What is the difference between Durga Puja and Navaratri?",
    answer: "While both festivals honor Goddess Durga, Navaratri is a nine-day festival celebrated twice yearly focusing on different forms of the Divine Mother. Durga Puja is primarily a five-day Bengali celebration emphasizing community worship and cultural activities."
  },
  {
    question: "What is Sindoor Khela and its significance?",
    answer: "Sindoor Khela is the ritual on Dashami where married women apply sindoor (vermillion) to the Goddess and each other. It symbolizes the marital bond, prosperity, and the blessing of the Divine Mother for a happy married life."
  },
  {
    question: "How can one participate in Durga Puja celebrations?",
    answer: "Anyone can participate by visiting pandals, offering prayers, enjoying cultural programs, sharing in community feasts, and experiencing the spiritual atmosphere. The festival welcomes all devotees regardless of background, emphasizing universal love and acceptance."
  }
]

export default function DurgaPujaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-700/20 via-orange-500/20 to-yellow-400/20"></div>
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-700 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Durga Puja
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-red-700 mb-8 font-semibold">दुर्गा पूजा - Divine Mother Festival</h2>
          <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-4xl mx-auto">
            Celebrating the triumph of the Divine Feminine over evil, strength over weakness, and dharma over adharma
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-6 py-3 bg-red-700 text-white rounded-full font-semibold">September 21st - October 2nd, 2025</span>
            <span className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold">Ten Days</span>
            <span className="px-6 py-3 bg-gradient-to-r from-red-700 to-yellow-400 text-white rounded-full font-semibold">Ashwin Month</span>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-red-700 via-orange-500 to-yellow-400 mx-auto"></div>
        </div>
      </section>

      {/* Other Names */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-12">Known By Many Names</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-red-700 mb-2">Durgotsav</h3>
              <p className="text-gray-600">Festival of Durga (Bengali)</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-orange-600 mb-2">Dashain</h3>
              <p className="text-gray-600">Nepal's biggest festival</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-red-700 mb-2">Navaratri</h3>
              <p className="text-gray-600">Nine nights festival</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-yellow-600 mb-2">Sharadiya</h3>
              <p className="text-gray-600">Autumn celebration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Where Celebrated */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-700/10 via-orange-500/10 to-yellow-400/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-12">Global Celebrations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-red-700 mb-6">Primary Celebration Regions</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-lg shadow">
                  <div className="w-3 h-3 bg-red-700 rounded-full mr-4"></div>
                  <span className="text-gray-800"><strong>West Bengal:</strong> Grand pandal celebrations and cultural programs</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-4"></div>
                  <span className="text-gray-800"><strong>Assam:</strong> Traditional Durga Puja in homes and temples</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4"></div>
                  <span className="text-gray-800"><strong>Nepal:</strong> Dashain festival celebrated nationwide</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow">
                  <div className="w-3 h-3 bg-red-700 rounded-full mr-4"></div>
                  <span className="text-gray-800"><strong>Global Diaspora:</strong> Bengali communities worldwide</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-red-700 mb-6">Famous Celebration Places</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow">
                  <h4 className="font-bold text-red-600 mb-2">Kolkata, West Bengal</h4>
                  <p className="text-gray-700">World's largest Durga Puja with thousands of artistic pandals</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                  <h4 className="font-bold text-orange-600 mb-2">Guwahati, Assam</h4>
                  <p className="text-gray-700">Traditional celebrations at Kamakhya Temple</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                  <h4 className="font-bold text-yellow-600 mb-2">Kathmandu, Nepal</h4>
                  <p className="text-gray-700">Dashain celebrations at Durbar Squares</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                  <h4 className="font-bold text-red-600 mb-2">Delhi & Mumbai</h4>
                  <p className="text-gray-700">Bengali community celebrations in urban centers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Durga Puja */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-8">What is Durga Puja?</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              Durga Puja is the most significant festival celebrating the Divine Mother, Goddess Durga, who embodies 
              Shakti - the primordial cosmic energy. This festival commemorates her victory over the buffalo demon 
              Mahishasura, symbolizing the triumph of good over evil.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Beyond its religious significance, Durga Puja represents the homecoming of the Divine Mother to her 
              devotees. It's a time of spiritual renewal, community bonding, and cultural celebration that transcends 
              all social boundaries.
            </p>
            <div className="bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-800 mb-4">Etymology & Meaning</h3>
              <p className="text-gray-700">
                <strong>दुर्गा (Durga):</strong> The invincible one, difficult to approach by evil<br/>
                <strong>पूजा (Puja):</strong> Worship, reverence, and devotional service<br/>
                <strong>Combined:</strong> Worship of the Divine Mother who protects from all difficulties
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nine Forms of Durga */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-12">Nine Divine Forms - Navadurga</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {durgaAvatars.map((avatar, index) => {
              const formPaths = [
                '/festivals/durga-puja/shailaputri',
                '/festivals/durga-puja/brahmacharini', 
                '/festivals/durga-puja/chandraghanta',
                '/festivals/durga-puja/kushmanda',
                '/festivals/durga-puja/skandamata',
                '/festivals/durga-puja/katyayani',
                '/festivals/durga-puja/kalaratri',
                '/festivals/durga-puja/mahagauri',
                '/festivals/durga-puja/siddhidatri'
              ]
              
              return (
                <Link key={index} href={formPaths[index]} className="block">
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-red-700 to-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-red-700">{avatar.name}</h3>
                    </div>
                    <p className="text-orange-600 font-semibold mb-3">{avatar.description}</p>
                    <p className="text-gray-700 text-sm mb-4">{avatar.significance}</p>
                    <div className="text-blue-600 font-medium text-sm">
                      Learn more about {avatar.name} →
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Festival Days */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-12">The Sacred Journey - Six Days</h2>
          <div className="space-y-6">
            {pujaDays.map((day, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`p-6 bg-gradient-to-r ${index % 2 === 0 ? 'from-red-700 to-orange-500' : 'from-orange-500 to-yellow-400'} text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{day.day}</h3>
                  <p className="text-orange-100">{day.significance}</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {day.rituals.map((ritual, ritualIndex) => (
                      <div key={ritualIndex} className="flex items-center p-3 bg-red-50 rounded-lg">
                        <div className="w-2 h-2 bg-red-700 rounded-full mr-3"></div>
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
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-12">Spiritual Significance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-700 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-red-800 mb-4">Divine Feminine Power</h3>
              <p className="text-gray-700">
                Durga Puja celebrates Shakti - the divine feminine energy that creates, sustains, and destroys. 
                The Goddess represents the power within every being to overcome obstacles and achieve spiritual victory.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-red-800 mb-4">Community Unity</h3>
              <p className="text-gray-700">
                The festival brings together people of all backgrounds in collective worship and celebration. 
                It strengthens social bonds, promotes cultural harmony, and creates a sense of universal brotherhood.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-red-800 mb-4">Spiritual Awakening</h3>
              <p className="text-gray-700">
                The festival symbolizes the awakening of divine consciousness within. Through devotion, ritual, and 
                celebration, devotees connect with their inner divinity and experience spiritual transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Celebrations */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-12">Regional Celebrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionalCelebrations.map((celebration, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-red-700 mb-3">{celebration.region}</h3>
                <h4 className="text-lg font-semibold text-orange-600 mb-3">{celebration.specialty}</h4>
                <p className="text-gray-700">{celebration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-12">Fascinating Durga Puja Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {durgaFacts.map((fact, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-bold text-red-700 mb-3">{fact.title}</h3>
                <p className="text-gray-700">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wishes and Quotes */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-12">Durga Puja Wishes & Sacred Quotes</h2>
          
          {/* Greetings */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-red-700 mb-8 text-center">Divine Blessings</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {durgaGreetings.map((greeting, index) => (
                <div key={index} className="bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 rounded-xl p-6 shadow-lg">
                  <p className="text-gray-800 italic leading-relaxed">"{greeting}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sacred Quotes */}
          <div>
            <h3 className="text-2xl font-bold text-red-700 mb-8 text-center">Sacred Verses</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {durgaQuotes.map((quote, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-700">
                  <p className="text-lg font-semibold text-red-800 mb-3">{quote.quote}</p>
                  <p className="text-gray-700 mb-2 italic">{quote.translation}</p>
                  <p className="text-sm text-orange-600">— {quote.source}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-red-700 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-red-800 mb-8">Explore More Festivals</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/festivals/diwali" className="px-8 py-4 bg-gradient-to-r from-orange-600 to-yellow-400 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Discover Diwali
            </Link>
            <Link href="/festivals/holi" className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Experience Holi
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