import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Ganesh Chaturthi - Festival of Lord Ganesha | Significance & Celebration | PeacefulAnswers',
  description: 'Discover the joyous celebration of Ganesh Chaturthi, honoring Lord Ganesha, the remover of obstacles and patron of new beginnings.',
  keywords: 'Ganesh Chaturthi, Lord Ganesha, Ganapati, Hindu festival, obstacle remover, new beginnings, modak, celebration',
  openGraph: {
    title: 'Ganesh Chaturthi - Festival of Lord Ganesha | PeacefulAnswers',
    description: 'Explore the spiritual significance of Ganesh Chaturthi, celebrating the beloved elephant-headed deity.',
    type: 'website',
  },
}

const ganeshGreetings = [
  "गणपति बप्पा मोरया! May Lord Ganesha remove all obstacles from your path.",
  "May the blessings of Lord Ganesha bring prosperity, wisdom, and happiness to your life.",
  "Wishing you a blessed Ganesh Chaturthi filled with joy, devotion, and new beginnings.",
  "May Vighnaharta Ganesha guide you towards success and fulfill all your wishes.",
  "गणेश चतुर्थी की हार्दिक शुभकामनाएं! Ganpati Bappa Morya!"
]

const ganeshRituals = [
  {
    ritual: "Ganesha Installation",
    significance: "Welcoming Lord Ganesha into homes",
    details: ["Choose auspicious time for installation", "Invoke Lord Ganesha with mantras", "Offer prayers and flowers", "Light incense and lamps"]
  },
  {
    ritual: "Daily Worship",
    significance: "Devotional service during festival",
    details: ["Morning and evening aarti", "Offer modak and laddu", "Recite Ganesha Atharvashirsha", "Sing bhajans and kirtans"]
  },
  {
    ritual: "Modak Offering",
    significance: "Lord Ganesha's favorite sweet",
    details: ["Prepare steamed modak", "Offer with devotion", "Share as prasadam", "Symbol of spiritual rewards"]
  },
  {
    ritual: "Visarjan (Immersion)",
    significance: "Farewell to Lord Ganesha",
    details: ["Procession with music and dance", "Immersion in water body", "Pray for early return next year", "Eco-friendly celebration encouraged"]
  }
]

const ganeshFacts = [
  {
    title: "Duration",
    description: "Celebrated for 1, 3, 5, 7, or 11 days depending on tradition and region"
  },
  {
    title: "Origin",
    description: "Revived by Lokmanya Tilak in 1893 to unite people during freedom struggle"
  },
  {
    title: "Significance",
    description: "Celebrates Lord Ganesha's birth and his role as remover of obstacles"
  },
  {
    title: "Regional Names",
    description: "Known as Vinayaka Chaturthi in South India and Ganeshotsav in Maharashtra"
  },
  {
    title: "Environmental Awareness",
    description: "Modern celebrations increasingly use eco-friendly clay idols"
  }
]

export default function GaneshChaturthiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/festivals" 
            className="inline-flex items-center text-gray-600 hover:text-orange-600 transition-colors"
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
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">🎊 Sacred Festival</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                गणेश चतुर्थी
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-orange-100">
                Ganesh Chaturthi
              </h2>
              <p className="text-lg text-red-100 leading-relaxed mb-8">
                The joyous celebration of Lord Ganesha's birth, removing obstacles for new beginnings. 
                This beloved festival brings communities together in devotion and celebration.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/practices/ganapati-puja" 
                  className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Learn Ganapati Puja
                </Link>
                <Link 
                  href="/deities/ganesha" 
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  About Lord Ganesha
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1630735431355-6b53c04e6be1?w=600&h=600&fit=crop"
                  alt="Ganesh Chaturthi celebration"
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
        
        {/* Festival Rituals */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sacred Rituals</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ganeshRituals.map((ritual, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-orange-800 mb-4">{ritual.ritual}</h3>
                <p className="text-gray-700 mb-6 font-medium">{ritual.significance}</p>
                <ul className="space-y-2">
                  {ritual.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-orange-600 mr-2">•</span>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Festival Facts */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Festival Facts</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ganeshFacts.map((fact, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-orange-800 mb-4">{fact.title}</h3>
                <p className="text-gray-700">{fact.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Video Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ganesh Chaturthi Celebration</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the joy and devotion of Ganesh Chaturthi celebrations through this beautiful video
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="aspect-video">
                <iframe 
                  src="https://www.youtube.com/embed/8JTKdhx4wJk"
                  title="Ganesh Chaturthi Special - T-Series"
                  className="w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
              <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ganesh Chaturthi Special Celebration</h3>
                <p className="text-gray-700 mb-4">
                  A beautiful devotional video celebrating the festival of Lord Ganesha with traditional prayers and celebrations.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.76.21 3.91.21 1.15 0 2.75 0 3.91-.21C23.16 17 22 12.55 22 7L12 2z"/>
                    </svg>
                    Video Credit: T-Series
                  </div>
                  <a 
                    href="https://www.youtube.com/channel/UCq-Fj5jknLsUf-MWSy4_brA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700 text-sm font-medium hover:underline"
                  >
                    Visit T-Series Channel →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Festival Greetings */}
        <section className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Festival Greetings</h2>
            <p className="text-xl text-orange-100">Share these blessed wishes with your loved ones</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ganeshGreetings.map((greeting, index) => (
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