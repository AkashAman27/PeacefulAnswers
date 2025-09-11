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

const ganeshOriginStory = {
  title: "Ancient Origins & Sacred Birth",
  content: [
    "Ganesh Chaturthi celebrates the birth of Lord Ganesha, the beloved elephant-headed deity who is revered as the remover of obstacles and patron of new beginnings. According to Hindu scriptures, particularly the Ganesha Purana, this festival commemorates the day when Goddess Parvati created Ganesha from the earth and clay.",
    "The Skanda Purana mentions that Lord Ganesha was born on the fourth day (Chaturthi) of the waxing moon (Shukla Paksha) in the month of Bhadrapada. This day is considered highly auspicious for invoking Ganesha's blessings for success in new endeavors.",
    "Ancient texts describe how Goddess Parvati, while preparing for her bath, created a child from the sandalwood paste on her body and breathed life into him. She appointed him as her guardian, which led to the famous encounter with Lord Shiva and Ganesha's subsequent transformation with an elephant head."
  ]
}

const modernHistory = {
  title: "Revival by Lokmanya Tilak (1893)",
  content: [
    "While Ganesh Chaturthi has ancient roots, its modern public celebration was brilliantly revived by freedom fighter Lokmanya Bal Gangadhar Tilak in 1893. During the British colonial period, public gatherings were restricted, making it difficult for Indians to unite for their independence struggle.",
    "Tilak recognized that religious festivals could serve as a powerful medium to bring people together. He transformed Ganesh Chaturthi from a private family celebration into a grand public festival. His vision was to use this beloved deity's festival to foster unity, nationalism, and cultural pride among Indians.",
    "The strategy was brilliant - since it was a religious celebration, the British authorities couldn't easily suppress it. Through Ganesha's festival, people could gather, discuss social issues, plan community activities, and subtly organize resistance against colonial rule. This made Ganesh Chaturthi not just a religious festival but also a vehicle for social and political awakening.",
    "Tilak's initiative was so successful that within a few years, public Ganesh Chaturthi celebrations spread across Maharashtra and eventually throughout India. The festival became a symbol of collective strength, community participation, and cultural identity."
  ]
}

const celebrationEvolution = {
  title: "How Celebrations Evolved",
  timeline: [
    {
      period: "Ancient Times (Pre-1893)",
      description: "Primarily private family celebrations with small clay idols, home pujas, and simple rituals focused on seeking Ganesha's blessings for household prosperity."
    },
    {
      period: "Tilak Era (1893-1920)",
      description: "Introduction of public celebrations with community-sponsored large idols, public pandals (temporary structures), group prayers, and cultural programs that brought neighborhoods together."
    },
    {
      period: "Independence Era (1920-1947)",
      description: "Festivals became platforms for freedom fighters to gather and organize. Themes of independence and nationalism were woven into celebrations through songs, speeches, and cultural performances."
    },
    {
      period: "Post-Independence (1947-1990)",
      description: "Celebrations became more elaborate with artistic idol-making, themed pandals, and competitions. Communities began creating increasingly magnificent decorations and organizing cultural events."
    },
    {
      period: "Modern Era (1990-Present)",
      description: "Technology integration with online streaming of aartis, eco-friendly awareness campaigns, celebrity involvement, and global celebrations by Indian diaspora communities worldwide."
    }
  ]
}

const regionalCelebrations = [
  {
    region: "Maharashtra",
    highlights: ["Lalbaugcha Raja - Mumbai's most famous Ganesha", "Elaborate pandals with themed decorations", "10-day grand celebrations with daily cultural programs", "Dhol-tasha pathak (drum ensembles) during processions"]
  },
  {
    region: "Karnataka",
    highlights: ["Called Ganesha Habba or Vinayaka Chaturthi", "Traditional clay idol making in Dharwad", "Special preparation of modaka and kadubu", "Processions with classical music and dance"]
  },
  {
    region: "Andhra Pradesh & Telangana",
    highlights: ["Known as Vinayaka Chavithi", "Khairatabad Ganesha in Hyderabad (often 50+ feet tall)", "Traditional preparation of kudumulu and modakam", "Unique immersion ceremonies in Hussain Sagar Lake"]
  },
  {
    region: "Tamil Nadu",
    highlights: ["Called Pillayar Chaturthi", "Special kozhukattai (Tamil modak) preparation", "Temple celebrations with elaborate decorations", "Cultural programs featuring Carnatic music"]
  },
  {
    region: "Gujarat",
    highlights: ["Community celebrations with garba and dandiya", "Special preparation of dhokla and fafda as offerings", "Artistic rangoli decorations around Ganesha idols", "Processions with traditional folk music"]
  }
]

const photographyGallery = [
  {
    url: "https://images.unsplash.com/photo-1630735431355-6b53c04e6be1?w=800&h=600&fit=crop",
    title: "Magnificent Ganesha Idol",
    description: "Beautifully decorated Lord Ganesha idol with traditional ornaments and flowers"
  },
  {
    url: "https://images.unsplash.com/photo-1599021930644-4ae4e1b1b5e8?w=800&h=600&fit=crop",
    title: "Ganesh Chaturthi Procession",
    description: "Devotees carrying Ganesha idol during the festival procession with music and dancing"
  },
  {
    url: "https://images.unsplash.com/photo-1598542017531-42d1e7fb2df1?w=800&h=600&fit=crop",
    title: "Traditional Modak Offering",
    description: "Steamed modak, Lord Ganesha's favorite sweet, prepared specially for the festival"
  },
  {
    url: "https://images.unsplash.com/photo-1591280063444-d3c514eb6e13?w=800&h=600&fit=crop",
    title: "Decorated Pandal",
    description: "Elaborate pandal (temporary shrine) decorated with lights and traditional motifs"
  },
  {
    url: "https://images.unsplash.com/photo-1628013826200-5a1c11d1eca4?w=800&h=600&fit=crop",
    title: "Evening Aarti Ceremony",
    description: "Devotees performing evening aarti with oil lamps and incense"
  },
  {
    url: "https://images.unsplash.com/photo-1600881333168-2ef49b341f30?w=800&h=600&fit=crop",
    title: "Visarjan (Immersion) Ceremony",
    description: "The emotional farewell as devotees immerse Ganesha idol in water"
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
        
        {/* Origins & History Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{ganeshOriginStory.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              {ganeshOriginStory.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=450&fit=crop"
                  alt="Ancient Ganesha sculpture representing the deity's timeless significance"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Modern Revival by Tilak */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-orange-800 mb-8 text-center">{modernHistory.title}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-[3/4] bg-white rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1588402140747-6fb35f3fbbb6?w=400&h=500&fit=crop"
                    alt="Portrait representing Lokmanya Tilak's era and freedom struggle"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                {modernHistory.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How Celebrations Evolved */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{celebrationEvolution.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              From intimate family celebrations to grand public festivals, see how Ganesh Chaturthi transformed over the centuries
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-0.5 top-8 bottom-8 w-1 bg-gradient-to-b from-orange-600 to-red-600 rounded-full"></div>
            
            <div className="space-y-12">
              {celebrationEvolution.timeline.map((era, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-orange-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} md:w-1/2`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-orange-600">
                      <h3 className="text-xl font-bold text-orange-800 mb-3">{era.period}</h3>
                      <p className="text-gray-700 leading-relaxed">{era.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regional Celebrations */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Regional Celebrations Across India</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Discover how different states celebrate Ganesh Chaturthi with their unique traditions and customs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regionalCelebrations.map((region, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-orange-600">
                <h3 className="text-2xl font-bold text-orange-800 mb-6 text-center">{region.region}</h3>
                <ul className="space-y-3">
                  {region.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-orange-600 mr-3 text-xl">🔹</span>
                      <span className="text-gray-700 leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Photo Gallery */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Festival Photo Gallery</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Experience the vibrant colors, devotion, and joy of Ganesh Chaturthi celebrations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photographyGallery.map((photo, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={photo.url}
                    alt={photo.description}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{photo.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
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

        {/* Modern Eco-Friendly Celebrations */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🌱 Eco-Friendly Celebrations</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Sustainable Traditions</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Modern celebrations increasingly embrace eco-friendly practices to protect our environment while maintaining the sanctity of traditions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">🌿</span>
                  <span className="text-gray-700"><strong>Clay Idols:</strong> Using natural, biodegradable clay instead of Plaster of Paris</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">🎨</span>
                  <span className="text-gray-700"><strong>Natural Colors:</strong> Eco-friendly paints and decorations made from organic materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">💧</span>
                  <span className="text-gray-700"><strong>Water Conservation:</strong> Artificial ponds and water recycling during immersion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">♻️</span>
                  <span className="text-gray-700"><strong>Waste Reduction:</strong> Minimal use of non-biodegradable decorations and offerings</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600&h=450&fit=crop"
                  alt="Eco-friendly Ganesha idol made from natural clay"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
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