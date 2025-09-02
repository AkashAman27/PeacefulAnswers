import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Diwali - Festival of Lights | Significance, Rituals & Celebration | PeacefulAnswers',
  description: 'Discover the profound significance of Diwali, the Festival of Lights. Learn about its history, rituals, traditions, and spiritual meaning in Hindu culture.',
  keywords: 'Diwali, Festival of Lights, Deepavali, Hindu festival, Lakshmi Puja, spiritual significance, rituals, traditions',
  openGraph: {
    title: 'Diwali - Festival of Lights | Significance, Rituals & Celebration | PeacefulAnswers',
    description: 'Explore the spiritual depth and cultural richness of Diwali, celebrating the victory of light over darkness.',
    type: 'website',
  },
}

interface FestivalFact {
  title: string
  description: string
}

const diwaliGreetings = [
  "दीपावली की हार्दिक शुभकामनाएं! May this Diwali illuminate your path to prosperity and happiness.",
  "May the divine light of Diwali spread peace, prosperity, happiness, and good health in your life.",
  "Wishing you a sparkling Diwali filled with joy, love, and the warmth of family and friends.",
  "May Goddess Lakshmi bless you with wealth, Lord Ganesha remove all obstacles, and this Diwali bring you endless joy.",
  "दीपों का त्यौहार आया है, खुशियों का संदेशा लाया है। Happy Diwali!"
]

const diwaliRituals = [
  {
    day: "Dhanteras (Day 1)",
    significance: "Worship of wealth and prosperity",
    rituals: ["Purchase gold, silver, or utensils", "Light diyas at entrance", "Worship Lord Dhanvantari", "Clean and decorate homes"]
  },
  {
    day: "Choti Diwali (Day 2)",
    significance: "Defeating negative energies",
    rituals: ["Early morning oil bath", "Light small diyas", "Prepare traditional sweets", "Visit temples"]
  },
  {
    day: "Main Diwali (Day 3)",
    significance: "Worship of Goddess Lakshmi",
    rituals: ["Lakshmi Puja in evening", "Light diyas throughout home", "Exchange gifts and sweets", "Fireworks celebration"]
  },
  {
    day: "Govardhan Puja (Day 4)",
    significance: "Gratitude to nature and Krishna",
    rituals: ["Prepare Annakut offering", "Create cow dung Govardhan hill", "Worship Lord Krishna", "Community feasts"]
  },
  {
    day: "Bhai Dooj (Day 5)",
    significance: "Sister-brother bond",
    rituals: ["Sisters apply tilaka to brothers", "Exchange gifts", "Special meals together", "Prayers for long life"]
  }
]

const diwaliQuotes = [
  {
    quote: "तमसो मा ज्योतिर्गमय",
    translation: "Lead me from darkness to light",
    source: "Brihadaranyaka Upanishad"
  },
  {
    quote: "दीपो ज्योति: परं ब्रह्म दीपो ज्योति: जनार्दन:",
    translation: "The lamp is the supreme light, the lamp is Janardan (Vishnu) himself",
    source: "Diwali Prayer"
  },
  {
    quote: "सर्वे भवन्तु सुखिन: सर्वे सन्तु निरामया:",
    translation: "May all beings be happy, may all beings be free from illness",
    source: "Sanskrit Prayer"
  }
]

const diwaliFactsData: FestivalFact[] = [
  {
    title: "Ancient Origins",
    description: "Diwali celebrations date back over 2,500 years, mentioned in ancient Sanskrit texts and inscriptions."
  },
  {
    title: "Global Celebration",
    description: "Diwali is celebrated in over 40 countries and is an official holiday in 14 nations including India, Nepal, Sri Lanka, and Singapore."
  },
  {
    title: "Economic Impact",
    description: "Diwali season generates approximately $20 billion in economic activity in India alone through shopping, gifts, and celebrations."
  },
  {
    title: "Environmental Awareness",
    description: "Modern Diwali celebrations increasingly focus on eco-friendly practices, promoting clay diyas over electric lights and reducing firecracker usage."
  },
  {
    title: "Five-Day Festival",
    description: "Traditional Diwali spans five days, each with unique significance and rituals, creating a complete spiritual and cultural experience."
  },
  {
    title: "Multiple Traditions",
    description: "Different regions celebrate Diwali for various reasons - Ram's return, Krishna defeating Narakasura, or Goddess Lakshmi's birthday."
  }
]

const stateWiseCelebrations = [
  {
    state: "North India",
    tradition: "Celebrates Lord Rama's return to Ayodhya after 14 years of exile, emphasizing victory of good over evil."
  },
  {
    state: "South India",
    tradition: "Focuses on Lord Krishna's victory over demon Narakasura, celebrated as Naraka Chaturdashi."
  },
  {
    state: "West India",
    tradition: "Celebrates Goddess Lakshmi's emergence from the ocean during churning (Samudra Manthan)."
  },
  {
    state: "East India",
    tradition: "Worships Goddess Kali and celebrates her victory over evil forces, especially in Bengal."
  },
  {
    state: "Nepal",
    tradition: "Called Tihar, includes worship of crows, dogs, cows, and celebrates the bond between brothers and sisters."
  }
]

const faqs = [
  {
    question: "When is Diwali celebrated in 2024?",
    answer: "Diwali 2024 falls on November 1st (Friday). The five-day celebration begins with Dhanteras on October 29th and concludes with Bhai Dooj on November 3rd. Dates vary each year as they follow the lunar calendar."
  },
  {
    question: "Why is Diwali called the Festival of Lights?",
    answer: "Diwali is called the Festival of Lights because millions of diyas (oil lamps) and lights are lit to symbolize the victory of light over darkness, good over evil, and knowledge over ignorance. The lights are believed to welcome Goddess Lakshmi and drive away negative energies."
  },
  {
    question: "What is the spiritual significance of lighting diyas?",
    answer: "Lighting diyas represents the inner light that protects from spiritual darkness. Each diya symbolizes removing ignorance, awakening divine consciousness, and inviting prosperity and peace. The light also honors the divine presence within ourselves and our homes."
  },
  {
    question: "How do different communities celebrate Diwali?",
    answer: "While core elements remain same, celebrations vary: North Indians focus on Rama's return, South Indians on Krishna's victory over Narakasura, Gujaratis celebrate Lakshmi Puja extensively, Bengalis worship Goddess Kali, and Jains celebrate Lord Mahavira's liberation."
  },
  {
    question: "What foods are traditionally prepared for Diwali?",
    answer: "Traditional Diwali foods include sweets like gulab jamun, kheer, ladoo, barfi, and halwa. Savory items include samosas, chakli, and mathri. Each region has specialties like Bengali sandesh, Gujarati dhokla, and South Indian murukku."
  },
  {
    question: "How can one celebrate an eco-friendly Diwali?",
    answer: "Celebrate eco-friendly Diwali by using clay diyas instead of electric lights, avoiding firecrackers, making homemade sweets, gifting plants or eco-friendly items, using natural rangoli colors, and focusing on the spiritual aspects rather than material excess."
  }
]

export default function DiwaliPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-yellow-400/20 to-orange-300/20"></div>
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Diwali
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-orange-700 mb-8 font-semibold">दीपावली - The Festival of Lights</h2>
          <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-4xl mx-auto">
            Celebrating the eternal victory of light over darkness, good over evil, and knowledge over ignorance
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-6 py-3 bg-orange-600 text-white rounded-full font-semibold">October 20, 2025</span>
            <span className="px-6 py-3 bg-yellow-400 text-orange-900 rounded-full font-semibold">Monday</span>
            <span className="px-6 py-3 bg-gradient-to-r from-orange-600 to-yellow-400 text-white rounded-full font-semibold">Amavasya Tithi</span>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-600 via-yellow-400 to-orange-600 mx-auto"></div>
        </div>
      </section>

      {/* Other Names */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Known By Many Names</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-orange-700 mb-2">Deepavali</h3>
              <p className="text-gray-600">Row of Lights (Sanskrit)</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-orange-700 mb-2">Deepotsava</h3>
              <p className="text-gray-600">Festival of Lights</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-orange-700 mb-2">Sukh Raat</h3>
              <p className="text-gray-600">Night of Happiness</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-orange-700 mb-2">Bandi Chhor Divas</h3>
              <p className="text-gray-600">Liberation Day (Sikh)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Where Celebrated */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600/10 via-yellow-400/10 to-orange-300/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Global Celebrations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-orange-700 mb-6">Primary Celebration Regions</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-lg shadow">
                  <div className="w-3 h-3 bg-orange-600 rounded-full mr-4"></div>
                  <span className="text-gray-800"><strong>India:</strong> Nationwide celebration with regional variations</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4"></div>
                  <span className="text-gray-800"><strong>Nepal:</strong> Called Tihar, five-day celebration</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow">
                  <div className="w-3 h-3 bg-orange-600 rounded-full mr-4"></div>
                  <span className="text-gray-800"><strong>Sri Lanka:</strong> Celebrated by Tamil and Sinhalese communities</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4"></div>
                  <span className="text-gray-800"><strong>Singapore:</strong> Public holiday with grand celebrations</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-orange-700 mb-6">Famous Celebration Places</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow">
                  <h4 className="font-bold text-orange-600 mb-2">Ayodhya, Uttar Pradesh</h4>
                  <p className="text-gray-700">Birthplace of Lord Rama, world record for most diyas lit</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                  <h4 className="font-bold text-orange-600 mb-2">Varanasi, Uttar Pradesh</h4>
                  <p className="text-gray-700">Ganga Aarti and millions of diyas on ghats</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                  <h4 className="font-bold text-orange-600 mb-2">Golden Temple, Amritsar</h4>
                  <p className="text-gray-700">Spectacular illumination of the holy shrine</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                  <h4 className="font-bold text-orange-600 mb-2">Mumbai, Maharashtra</h4>
                  <p className="text-gray-700">Grand firework displays and community celebrations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Diwali */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-8">What is Diwali?</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              Diwali, derived from the Sanskrit word "Deepavali" meaning "row of lights," is one of the most significant 
              festivals in Hinduism. It celebrates the triumph of light over darkness, good over evil, and knowledge over ignorance.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              This five-day festival honors various deities and commemorates multiple mythological events, making it a 
              celebration that encompasses diverse traditions while maintaining its core spiritual essence.
            </p>
            <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-800 mb-4">Etymology & Meaning</h3>
              <p className="text-gray-700">
                <strong>दीप (Deepa):</strong> Lamp or Light<br/>
                <strong>आवली (Avali):</strong> Row or Series<br/>
                <strong>Combined:</strong> A row of lights that illuminates both the external world and inner consciousness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History and Origin */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">History & Origins</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-orange-700 mb-4">Ramayana Connection</h3>
                <p className="text-gray-700">
                  The most popular origin story connects Diwali to Lord Rama's return to Ayodhya after his 14-year exile 
                  and victory over the demon king Ravana. The people of Ayodhya lit thousands of diyas to welcome their 
                  beloved prince home, establishing the tradition of lighting lamps.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-orange-700 mb-4">Krishna & Narakasura</h3>
                <p className="text-gray-700">
                  In South India, Diwali commemorates Lord Krishna's victory over the demon Narakasura, who had terrorized 
                  the heavens and earth. Krishna's triumph freed 16,000 captive princesses and restored cosmic order.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-orange-700 mb-4">Lakshmi's Emergence</h3>
                <p className="text-gray-700">
                  Another tradition links Diwali to Goddess Lakshmi's emergence from the cosmic ocean during the churning 
                  of the sea (Samudra Manthan). She chose Lord Vishnu as her consort on this auspicious day, making it 
                  sacred for wealth and prosperity.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-orange-700 mb-4">Historical Evidence</h3>
                <p className="text-gray-700">
                  Ancient Sanskrit texts like the Skanda Purana mention Diwali celebrations. Archaeological evidence 
                  from Harappan civilization shows oil lamps, suggesting light festivals have been celebrated for 
                  over 4,000 years in the Indian subcontinent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rituals and Traditions */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Five Days of Celebration</h2>
          <div className="space-y-6">
            {diwaliRituals.map((day, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`p-6 bg-gradient-to-r ${index % 2 === 0 ? 'from-orange-600 to-yellow-400' : 'from-yellow-400 to-orange-600'} text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{day.day}</h3>
                  <p className="text-orange-100">{day.significance}</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {day.rituals.map((ritual, ritualIndex) => (
                      <div key={ritualIndex} className="flex items-center p-3 bg-orange-50 rounded-lg">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
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
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Spiritual Significance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-orange-800 mb-4">Spiritual Awakening</h3>
              <p className="text-gray-700">
                Diwali represents the awakening of inner light and consciousness. The lighting of diyas symbolizes 
                dispelling the darkness of ignorance and ego, leading to spiritual enlightenment and self-realization.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-orange-800 mb-4">Unity & Love</h3>
              <p className="text-gray-700">
                The festival strengthens family bonds and community relationships. Sharing sweets, exchanging gifts, 
                and celebrating together reinforces the values of love, compassion, and unity that are central to dharma.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-orange-800 mb-4">Prosperity & Abundance</h3>
              <p className="text-gray-700">
                Worshipping Goddess Lakshmi invites not just material prosperity but spiritual abundance. True wealth 
                includes health, knowledge, peace, and devotion - all aspects of a fulfilled dharmic life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* State-wise Celebrations */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Regional Celebrations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {stateWiseCelebrations.map((celebration, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-orange-700 mb-4">{celebration.state}</h3>
                <p className="text-gray-700">{celebration.tradition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-100 to-yellow-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Fascinating Diwali Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diwaliFactsData.map((fact, index) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Diwali Wishes & Sacred Quotes</h2>
          
          {/* Greetings */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-orange-700 mb-8 text-center">Heartfelt Wishes</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {diwaliGreetings.map((greeting, index) => (
                <div key={index} className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6 shadow-lg">
                  <p className="text-gray-800 italic leading-relaxed">"{greeting}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sacred Quotes */}
          <div>
            <h3 className="text-2xl font-bold text-orange-700 mb-8 text-center">Sacred Verses</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {diwaliQuotes.map((quote, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-600">
                  <p className="text-lg font-semibold text-orange-800 mb-3">{quote.quote}</p>
                  <p className="text-gray-700 mb-2 italic">{quote.translation}</p>
                  <p className="text-sm text-orange-600">— {quote.source}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-50 to-orange-50">
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

      {/* Navigation */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-800 mb-8">Explore More Festivals</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/festivals/holi" className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Discover Holi
            </Link>
            <Link href="/festivals/durga-puja" className="px-8 py-4 bg-gradient-to-r from-red-700 to-yellow-400 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Learn Durga Puja
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