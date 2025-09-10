import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Maha Shivaratri - The Great Night of Shiva | Significance & Celebration | PeacefulAnswers',
  description: 'Discover the profound significance of Maha Shivaratri, the great night celebrating Lord Shiva\'s cosmic dance and meditation.',
  keywords: 'Maha Shivaratri, Lord Shiva, Shivaratri, Hindu festival, cosmic dance, meditation, night vigil, Shiva worship',
  openGraph: {
    title: 'Maha Shivaratri - The Great Night of Shiva | PeacefulAnswers',
    description: 'Explore the spiritual depth of Maha Shivaratri, celebrating the divine consciousness of Lord Shiva.',
    type: 'website',
  },
}

const shivaGreetings = [
  "हर हर महादेव! May Lord Shiva's divine blessings illuminate your spiritual path.",
  "On this sacred night of Shiva, may you find inner peace and cosmic consciousness.",
  "Wishing you a blessed Maha Shivaratri filled with devotion, meditation, and divine grace.",
  "May the cosmic dance of Lord Shiva bring rhythm and harmony to your life.",
  "महा शिवरात्रि की हार्दिक शुभकामनाएं! Om Namah Shivaya!"
]

const shivaRituals = [
  {
    ritual: "Night Vigil (Jaagran)",
    significance: "Staying awake in devotion to Lord Shiva",
    details: ["Remain awake throughout the night", "Chant Om Namah Shivaya", "Read Shiva Purana", "Meditate on Shiva's form"]
  },
  {
    ritual: "Abhisheka (Sacred Bath)",
    significance: "Bathing Shiva Linga with sacred offerings",
    details: ["Offer milk, honey, and water", "Pour curd and ghee", "Sprinkle sacred ash (vibhuti)", "Offer bilva leaves"]
  },
  {
    ritual: "Fasting (Vrata)",
    significance: "Purification of body and mind",
    details: ["Complete fast or fruit diet", "Avoid grains and salt", "Break fast next morning", "Drink only water or milk"]
  },
  {
    ritual: "Meditation & Chanting",
    significance: "Connecting with Shiva consciousness",
    details: ["Meditate in Shiva temples", "Recite Maha Mrityunjaya mantra", "Listen to Shiva bhajans", "Practice pranayama"]
  }
]

const shivaFacts = [
  {
    title: "Timing",
    description: "Celebrated on the 14th night of the dark fortnight in Phalguna month"
  },
  {
    title: "Significance",
    description: "Commemorates the cosmic dance of creation, preservation, and destruction"
  },
  {
    title: "Spiritual Meaning",
    description: "Represents the night when Shiva performed the Tandava dance"
  },
  {
    title: "Fasting Benefits",
    description: "Believed to wash away sins and grant moksha (liberation)"
  },
  {
    title: "Global Celebration",
    description: "Observed by millions of devotees worldwide in temples and homes"
  }
]

const shivaSymbols = [
  {
    symbol: "Shiva Linga",
    meaning: "Represents the infinite cosmic pillar of consciousness",
    significance: "Symbol of creation and divine energy"
  },
  {
    symbol: "Bilva Leaves",
    meaning: "Sacred three-leafed offering beloved by Lord Shiva",
    significance: "Represents the three gunas and trinity"
  },
  {
    symbol: "Vibhuti (Sacred Ash)",
    meaning: "Holy ash applied on forehead and body",
    significance: "Symbolizes the temporary nature of physical existence"
  },
  {
    symbol: "Rudraksha Beads",
    meaning: "Sacred beads from Rudraksha tree",
    significance: "Believed to be tears of compassion from Lord Shiva"
  }
]

export default function MahaShivaratriPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/festivals" 
            className="inline-flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
              <path d="m12 19-7-7 7-7"/>
              <path d="M19 12H5"/>
            </svg>
            Back to All Festivals
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-800 via-blue-800 to-purple-800 text-white py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">🌙 Sacred Night</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                महा शिवरात्रि
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Maha Shivaratri
              </h2>
              <p className="text-lg text-indigo-100 leading-relaxed mb-8">
                The great night of Shiva, celebrating the cosmic dance and meditation. 
                A sacred time for spiritual awakening and divine consciousness.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/deities/shiva" 
                  className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  About Lord Shiva
                </Link>
                <Link 
                  href="/practices" 
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Meditation Practices
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=600&fit=crop"
                  alt="Maha Shivaratri celebration"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Sacred Rituals */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sacred Rituals</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {shivaRituals.map((ritual, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-indigo-800 mb-4">{ritual.ritual}</h3>
                <p className="text-gray-700 mb-6 font-medium">{ritual.significance}</p>
                <ul className="space-y-2">
                  {ritual.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Sacred Symbols */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sacred Symbols</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {shivaSymbols.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-indigo-800 mb-4">{item.symbol}</h3>
                <p className="text-gray-700 mb-4 font-medium">{item.meaning}</p>
                <p className="text-gray-600">{item.significance}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Festival Facts */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Festival Facts</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shivaFacts.map((fact, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-indigo-800 mb-4">{fact.title}</h3>
                <p className="text-gray-700">{fact.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Festival Greetings */}
        <section className="bg-gradient-to-r from-indigo-800 via-blue-800 to-purple-800 text-white rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Festival Greetings</h2>
            <p className="text-xl text-indigo-100">Share these sacred blessings with your loved ones</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {shivaGreetings.map((greeting, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="text-lg leading-relaxed">{greeting}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}