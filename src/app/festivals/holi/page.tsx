import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Holi - Festival of Colors | Significance, Rituals & Celebration | PeacefulAnswers',
  description: 'Discover the joyous celebration of Holi, the Festival of Colors. Learn about its spiritual significance, rituals, traditions, and the beautiful message of love and unity.',
  keywords: 'Holi, Festival of Colors, Radha Krishna, Holika Dahan, spring festival, Hindu celebration, colors, unity, love',
  openGraph: {
    title: 'Holi - Festival of Colors | Significance, Rituals & Celebration | PeacefulAnswers',
    description: 'Experience the vibrant celebration of Holi and discover its deeper spiritual meaning of love, unity, and renewal.',
    type: 'website',
  },
}

interface HoliTradition {
  region: string
  specialty: string
  description: string
}

const holiGreetings = [
  "होली की हार्दिक शुभकामनाएं! May the colors of Holi bring joy, love, and prosperity to your life.",
  "May this Holi paint your life with the brightest colors of joy, happiness, and success.",
  "Let the colors of Holi spread the message of peace, love, and harmony in your life.",
  "Wishing you a Holi filled with sweet moments and colorful memories to cherish forever.",
  "May the festival of colors bring new beginnings and wash away all your sorrows.",
  "रंगों का त्यौहार आया है, खुशियों का संदेशा लाया है। Happy Holi!"
]

const holiColors = [
  {
    color: "Red (Lal)",
    significance: "Love, passion, and fertility",
    naturalSource: "Red sandalwood, rose petals"
  },
  {
    color: "Yellow (Peela)",
    significance: "Turmeric, prosperity, and knowledge",
    naturalSource: "Turmeric powder, marigold flowers"
  },
  {
    color: "Green (Hara)",
    significance: "New beginnings and nature",
    naturalSource: "Henna, mint leaves, spinach"
  },
  {
    color: "Blue (Nila)",
    significance: "Krishna's divine love",
    naturalSource: "Indigo, blue flowers"
  },
  {
    color: "Pink (Gulabi)",
    significance: "Compassion and care",
    naturalSource: "Rose water, beetroot"
  },
  {
    color: "Orange (Narangi)",
    significance: "Courage and strength",
    naturalSource: "Saffron, orange peels"
  }
]

const holiLegends = [
  {
    title: "Radha-Krishna's Divine Love",
    story: "The most beloved story connects Holi to the eternal love of Radha and Krishna. Young Krishna, with his dark complexion, was jealous of Radha's fair skin. His mother Yashoda playfully suggested he color Radha's face any way he liked. This playful act of coloring became the tradition of playing with colors, symbolizing the divine love that transcends physical appearances."
  },
  {
    title: "Holika's Defeat",
    story: "The demon king Hiranyakashipu tried to kill his devotee son Prahlad by making him sit in fire with his sister Holika, who had a boon of fire immunity. Due to Prahlad's devotion to Vishnu, Holika burned while Prahlad remained safe. Holika Dahan commemorates the victory of devotion over evil and good over evil."
  },
  {
    title: "Shiva's Cosmic Dance",
    story: "In South India, Holi is associated with the love story of Kamadeva (god of love) and Lord Shiva. When Kamadeva tried to awaken Shiva from meditation to save the world, Shiva's third eye burned him to ashes. Later, moved by Rati's (Kamadeva's wife) devotion, Shiva restored Kamadeva. This represents the triumph of divine love."
  }
]

const holiRituals = [
  {
    name: "Holika Dahan",
    timing: "Night before Holi",
    description: "Lighting bonfires to burn away evil and negativity",
    significance: "Purification and protection from evil forces"
  },
  {
    name: "Rangwali Holi",
    timing: "Main Holi day",
    description: "Playing with colors, water, and celebrating with loved ones",
    significance: "Unity, joy, and breaking social barriers"
  },
  {
    name: "Ganga Aarti",
    timing: "Evening of Holi",
    description: "Offering prayers to rivers and water bodies",
    significance: "Gratitude to nature and cleansing of sins"
  },
  {
    name: "Community Feast",
    timing: "Throughout the day",
    description: "Sharing traditional sweets and drinks like gujiya, thandai",
    significance: "Brotherhood and sharing happiness"
  }
]

const holiTraditions: HoliTradition[] = [
  {
    region: "Mathura & Vrindavan",
    specialty: "Lathmar Holi",
    description: "Women playfully beat men with sticks while men try to color them. Celebrates Radha-Krishna's love story."
  },
  {
    region: "Barsana",
    specialty: "Laddu Holi",
    description: "Throwing laddu (sweets) at each other before colors. Men from Nandgaon visit Barsana to play Holi."
  },
  {
    region: "Punjab",
    specialty: "Hola Mohalla",
    description: "Sikh celebration with martial arts displays, music, and poetry. Started by Guru Gobind Singh."
  },
  {
    region: "West Bengal",
    specialty: "Dol Jatra",
    description: "Celebrating with Radha-Krishna idols on swings, traditional songs, and dance."
  },
  {
    region: "Manipur",
    specialty: "Yaoshang",
    description: "Six-day celebration with traditional dances, sports, and community bonding."
  },
  {
    region: "Goa",
    specialty: "Shigmo",
    description: "Spring festival with elaborate floats, folk dances, and cultural performances."
  }
]

const holiQuotes = [
  {
    quote: "वसन्ते वासन्ती पुष्पाणि विकाशयन्ति युवतिषु",
    translation: "In spring, spring flowers bloom and develop in the young",
    source: "Sanskrit Verse"
  },
  {
    quote: "सर्वे भवन्तु सुखिन: सर्वे सन्तु निरामया:",
    translation: "May all beings be happy, may all beings be free from illness",
    source: "Universal Prayer"
  },
  {
    quote: "प्रेम रूपी राधा कृष्णा रंग भरे निराले",
    translation: "Radha and Krishna, embodiments of love, play with unique colors",
    source: "Devotional Song"
  }
]

const holiFactsData = [
  {
    title: "Ancient Festival",
    description: "Holi has been celebrated for over 3,000 years, with mentions in ancient texts like the Narada Purana and Bhavishya Purana."
  },
  {
    title: "Global Celebration",
    description: "Holi is celebrated in over 30 countries, including Nepal, Bangladesh, Pakistan, and by Hindu diaspora worldwide."
  },
  {
    title: "Astronomical Significance",
    description: "Holi marks the spring equinox and the end of winter, celebrating nature's renewal and fertility."
  },
  {
    title: "Natural Colors",
    description: "Traditional Holi colors were made from natural sources like turmeric, beetroot, indigo, and flowers."
  },
  {
    title: "Social Equality",
    description: "Holi breaks down social barriers as people from all castes, classes, and ages celebrate together equally."
  },
  {
    title: "Mathura-Vrindavan Special",
    description: "The birthplace of Krishna celebrates Holi for over a week with different themes each day."
  }
]

const faqs = [
  {
    question: "When is Holi celebrated in 2024?",
    answer: "Holi 2024 falls on March 25th (Monday), with Holika Dahan on March 24th (Sunday) evening. The festival is celebrated on the full moon day (Purnima) of the Hindu month of Phalguna."
  },
  {
    question: "What is the spiritual significance of playing with colors?",
    answer: "Playing with colors represents the unity of all beings beyond superficial differences. It symbolizes that all colors merge into the divine white light, teaching us that diversity is beautiful and all souls are equal in the eyes of God."
  },
  {
    question: "Why is Holi associated with Lord Krishna?",
    answer: "Krishna's childhood in Vrindavan is deeply connected to Holi. Stories tell of young Krishna playfully coloring the gopis (cowherd girls), especially Radha. This divine play (leela) represents the soul's loving relationship with the divine."
  },
  {
    question: "What is Holika Dahan and its significance?",
    answer: "Holika Dahan is the ritual burning of Holika effigies on the night before Holi. It symbolizes the victory of good over evil, devotion over malice, and the burning away of negative qualities like ego, jealousy, and hatred."
  },
  {
    question: "How can one celebrate an eco-friendly Holi?",
    answer: "Celebrate eco-friendly Holi by using natural colors made from flowers, turmeric, and herbs. Avoid synthetic colors, conserve water, use organic sweets, and focus on the spiritual aspects of love, forgiveness, and unity."
  },
  {
    question: "What foods are traditionally prepared for Holi?",
    answer: "Traditional Holi foods include gujiya (sweet dumplings), mathri, dahi bhalla, puran poli, and drinks like thandai (spiced milk), bhang, and lassi. Each region has its specialties prepared with love and shared with community."
  }
]

export default function HoliPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20"></div>
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Holi
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-purple-700 mb-8 font-semibold">होली - The Festival of Colors</h2>
          <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-4xl mx-auto">
            Celebrating the triumph of love over hatred, unity over division, and the vibrant colors of life
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-6 py-3 bg-pink-500 text-white rounded-full font-semibold">March 25, 2024</span>
            <span className="px-6 py-3 bg-purple-500 text-white rounded-full font-semibold">Monday</span>
            <span className="px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full font-semibold">Phalguna Purnima</span>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mx-auto"></div>
        </div>
      </section>

      {/* Other Names */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-12">Known By Many Names</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-pink-600 mb-2">Phagwah</h3>
              <p className="text-gray-600">Caribbean/Guyana</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-purple-600 mb-2">Dol Jatra</h3>
              <p className="text-gray-600">Bengal</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Yaoshang</h3>
              <p className="text-gray-600">Manipur</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-pink-600 mb-2">Shigmo</h3>
              <p className="text-gray-600">Goa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Where Celebrated */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-12">Global Celebrations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-purple-700 mb-6">Primary Celebration Regions</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-lg shadow">
                  <div className="w-3 h-3 bg-pink-500 rounded-full mr-4"></div>
                  <span className="text-gray-800"><strong>India:</strong> Nationwide celebration, especially North India</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-4"></div>
                  <span className="text-gray-800"><strong>Nepal:</strong> Major festival called Fagu Purnima</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-gray-800"><strong>Bangladesh:</strong> Celebrated by Hindu communities</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow">
                  <div className="w-3 h-3 bg-pink-500 rounded-full mr-4"></div>
                  <span className="text-gray-800"><strong>Global Diaspora:</strong> USA, UK, Canada, Australia</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-purple-700 mb-6">Famous Celebration Places</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow">
                  <h4 className="font-bold text-pink-600 mb-2">Mathura & Vrindavan</h4>
                  <p className="text-gray-700">Krishna's birthplace with week-long celebrations</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                  <h4 className="font-bold text-purple-600 mb-2">Barsana</h4>
                  <p className="text-gray-700">Radha's birthplace with unique Lathmar Holi</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                  <h4 className="font-bold text-blue-600 mb-2">Anandpur Sahib</h4>
                  <p className="text-gray-700">Sikh Hola Mohalla celebrations</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                  <h4 className="font-bold text-pink-600 mb-2">Shantiniketan</h4>
                  <p className="text-gray-700">Cultural celebrations started by Rabindranath Tagore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Holi */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-8">What is Holi?</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              Holi, known as the Festival of Colors, is a vibrant Hindu celebration that marks the arrival of spring 
              and the triumph of good over evil. It's a joyous occasion where people come together to play with colors, 
              share sweets, and celebrate the unity of all beings.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              This ancient festival embodies the spirit of love, forgiveness, and new beginnings. It breaks down social 
              barriers and brings people together in a celebration of life's colorful diversity.
            </p>
            <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Etymology & Meaning</h3>
              <p className="text-gray-700">
                <strong>Holi:</strong> Derived from "Holaka," referring to the demoness who was burned<br/>
                <strong>Phagwah:</strong> From "Phalguna," the lunar month when it's celebrated<br/>
                <strong>Colors:</strong> Represent the diversity and unity of creation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History and Origin */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-12">Sacred Stories & Origins</h2>
          <div className="space-y-8">
            {holiLegends.map((legend, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-pink-600 mb-4">{legend.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{legend.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Colors and Significance */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-12">Sacred Colors & Meanings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {holiColors.map((color, index) => {
              const bgColors = ['bg-red-500', 'bg-yellow-500', 'bg-green-500', 'bg-blue-500', 'bg-pink-500', 'bg-orange-500']
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className={`h-20 ${bgColors[index % bgColors.length]}`}></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{color.color}</h3>
                    <p className="text-purple-600 font-semibold mb-2">{color.significance}</p>
                    <p className="text-gray-600 text-sm">{color.naturalSource}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Rituals and Traditions */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-100/50 to-pink-100/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-12">Rituals & Traditions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {holiRituals.map((ritual, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-700">{ritual.name}</h3>
                    <p className="text-pink-600 text-sm">{ritual.timing}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">{ritual.description}</p>
                <p className="text-purple-600 font-semibold text-sm">{ritual.significance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Celebrations */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-12">Regional Celebrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {holiTraditions.map((tradition, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-pink-600 mb-3">{tradition.region}</h3>
                <h4 className="text-lg font-semibold text-purple-700 mb-3">{tradition.specialty}</h4>
                <p className="text-gray-700">{tradition.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Significance */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-12">Spiritual Significance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-4">Unity in Diversity</h3>
              <p className="text-gray-700">
                Holi teaches us that beneath different colors (appearances), we are all one. The festival breaks down 
                social barriers and promotes equality, reminding us that love transcends all differences.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-4">Renewal & Rebirth</h3>
              <p className="text-gray-700">
                Celebrated at the onset of spring, Holi represents the renewal of life and nature. It's a time to let go 
                of past grievances, forgive others, and start fresh with new energy and positive intentions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-4">Divine Love</h3>
              <p className="text-gray-700">
                Through the story of Radha-Krishna, Holi celebrates divine love that is pure, selfless, and transcendent. 
                It reminds us that the highest love is spiritual union with the divine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-12">Fascinating Holi Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {holiFactsData.map((fact, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-bold text-pink-600 mb-3">{fact.title}</h3>
                <p className="text-gray-700">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wishes and Quotes */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-12">Holi Wishes & Sacred Quotes</h2>
          
          {/* Greetings */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-purple-700 mb-8 text-center">Colorful Wishes</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {holiGreetings.map((greeting, index) => (
                <div key={index} className="bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 rounded-xl p-6 shadow-lg">
                  <p className="text-gray-800 italic leading-relaxed">"{greeting}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sacred Quotes */}
          <div>
            <h3 className="text-2xl font-bold text-purple-700 mb-8 text-center">Sacred Verses</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {holiQuotes.map((quote, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-600">
                  <p className="text-lg font-semibold text-purple-800 mb-3">{quote.quote}</p>
                  <p className="text-gray-700 mb-2 italic">{quote.translation}</p>
                  <p className="text-sm text-pink-600">— {quote.source}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-purple-700 mb-3">{faq.question}</h3>
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
          <h2 className="text-3xl font-bold text-purple-800 mb-8">Explore More Festivals</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/festivals/diwali" className="px-8 py-4 bg-gradient-to-r from-orange-600 to-yellow-400 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Discover Diwali
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