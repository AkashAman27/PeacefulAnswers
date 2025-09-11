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

const ancientOrigins = {
  title: "Ancient Origins & Scriptural Significance",
  content: [
    "Maha Shivaratri, literally meaning 'The Great Night of Shiva,' is one of the most sacred festivals in Hinduism, deeply rooted in ancient scriptures and cosmic significance. The Shiva Purana describes this night as the time when Lord Shiva performed the cosmic Tandava dance, representing the eternal cycle of creation, preservation, and destruction.",
    "According to the Linga Purana, this is the night when Shiva manifested as an infinite column of light (Jyotirlinga) to establish his supremacy among the gods. The festival falls on the 14th night of the dark fortnight in the month of Phalguna, when the moon is at its darkest, symbolizing the victory of consciousness over ignorance.",
    "The Skanda Purana mentions that this night holds special spiritual significance as the planetary positions create an ideal environment for raising one's spiritual energy. Ancient sages recognized this as the most auspicious time for meditation, fasting, and connecting with the divine consciousness of Shiva."
  ]
}

const samudraManathanLegend = {
  title: "The Legend of Samudra Manthan - Shiva's Cosmic Sacrifice",
  content: [
    "One of the most celebrated legends associated with Maha Shivaratri is the story of Samudra Manthan (churning of the cosmic ocean). When the gods (Devas) and demons (Asuras) churned the cosmic ocean to obtain the nectar of immortality (Amrita), the first thing that emerged was Halahala - a deadly poison that could destroy the entire universe.",
    "Seeing the cosmos in danger, Lord Shiva, in his infinite compassion, consumed the poison to save all creation. However, Goddess Parvati, fearing for her husband's safety, pressed his throat to prevent the poison from reaching his stomach. This turned Shiva's throat blue, earning him the name 'Neelkanth' (the blue-throated one).",
    "To keep Shiva awake through the night and prevent the poison from spreading, all the gods and devotees stayed awake, chanting his name, offering prayers, and performing abhisheka (sacred bath) to the Shiva Linga. This night of devotion and vigilance became the tradition of Maha Shivaratri.",
    "This legend symbolizes the ultimate sacrifice of the divine for the welfare of all beings, teaching us that true spirituality lies in selfless service and protection of others, even at personal cost."
  ]
}

const shivaCosmicSignificance = {
  title: "Cosmic & Spiritual Significance",
  aspects: [
    {
      aspect: "Astronomical Alignment",
      description: "The night occurs when planetary positions naturally push spiritual energy upward in the human system, making meditation and spiritual practices more powerful."
    },
    {
      aspect: "Consciousness Over Ignorance",
      description: "The darkest night symbolizes the victory of divine consciousness (Shiva) over the darkness of ignorance and material attachment."
    },
    {
      aspect: "Cosmic Dance (Tandava)",
      description: "Represents Shiva's cosmic dance of creation, preservation, and destruction - the eternal rhythm of the universe."
    },
    {
      aspect: "Union of Shiva-Shakti",
      description: "Symbolizes the perfect union of consciousness (Shiva) and energy (Shakti), representing the ultimate goal of yoga."
    }
  ]
}

const fastingAndVigilRituals = {
  title: "Sacred Fasting & Night Vigil Traditions",
  practices: [
    {
      practice: "Complete Fasting (Nirjala Vrata)",
      description: "Abstaining from food and water for 24 hours, breaking fast only after sunrise next day",
      benefits: "Complete purification of body, mind, and spirit; heightened spiritual awareness"
    },
    {
      practice: "Fruit & Milk Fasting (Phalahar)",
      description: "Consuming only fruits, milk, and water throughout the day and night",
      benefits: "Gentle cleansing while maintaining energy for spiritual practices"
    },
    {
      practice: "Night Vigil (Shivaratri Jagaran)",
      description: "Staying awake throughout the night in devotion, meditation, and prayer",
      benefits: "Transcendence of ordinary consciousness; direct experience of divine presence"
    },
    {
      practice: "Four Prahara Worship",
      description: "Performing special puja four times during the night, once every three hours",
      benefits: "Maintaining continuous divine connection; structured spiritual discipline"
    }
  ]
}

const regionalCelebrations = [
  {
    region: "Kashmir",
    specialName: "Herath",
    highlights: [
      "13-day celebration culminating on Shivaratri",
      "Special walnut and fish preparations",
      "Traditional brass lamps (diyas) lit throughout the night",
      "Unique rituals at Amarnath Cave and Shankaracharya Temple"
    ]
  },
  {
    region: "South India",
    specialName: "Shivaratri Utsav",
    highlights: [
      "Grand celebrations at Chidambaram and Madurai temples",
      "Classical Bharatanatyam and Odissi dance performances",
      "Continuous abhisheka with panchamrita (five sacred substances)",
      "Special Carnatic music concerts throughout the night"
    ]
  },
  {
    region: "Uttarakhand",
    specialName: "Dev Bhoomi Shivaratri",
    highlights: [
      "Massive gatherings at Kedarnath and Badrinath",
      "Pilgrims trek through snow-covered paths",
      "Sacred Ganga aarti at Rishikesh and Haridwar",
      "Meditation camps in Himalayan ashrams"
    ]
  },
  {
    region: "Rajasthan",
    specialName: "Shiv Ratri Mela",
    highlights: [
      "Colorful processions with decorated chariots",
      "Folk music and traditional Rajasthani dances",
      "Special offerings of dhatura and cannabis leaves",
      "Desert camping under starlit sky for meditation"
    ]
  },
  {
    region: "West Bengal",
    specialName: "Shib Ratri",
    highlights: [
      "Cultural programs with Rabindra Sangeet",
      "Special Bengali sweets offered to Shiva",
      "Night-long kirtans and bhajan singing",
      "Beautiful pandal decorations in Kolkata"
    ]
  }
]

const famousShivaTemples = [
  {
    name: "Kedarnath Temple",
    location: "Uttarakhand",
    significance: "One of the 12 Jyotirlingas; highest Shiva temple in the world",
    celebration: "Special puja despite harsh winter conditions; devotees trek through snow"
  },
  {
    name: "Kashi Vishwanath",
    location: "Varanasi, Uttar Pradesh",
    significance: "Most sacred Jyotirlinga; Lord Shiva's eternal abode",
    celebration: "Continuous abhisheka; lakhs of devotees gather for darshan"
  },
  {
    name: "Nataraja Temple",
    location: "Chidambaram, Tamil Nadu",
    significance: "Cosmic dancer form of Shiva; represents space element",
    celebration: "Classical dance performances; special Tandava celebrations"
  },
  {
    name: "Lingaraj Temple",
    location: "Bhubaneswar, Odisha",
    significance: "Ancient 11th-century temple; represents earth element",
    celebration: "Grand processions; traditional Odissi dance and music"
  },
  {
    name: "Amarnath Cave",
    location: "Jammu & Kashmir",
    significance: "Natural ice Shiva Linga; site where Shiva revealed immortality secrets",
    celebration: "Special winter puja; pilgrimage despite extreme weather"
  },
  {
    name: "Somnath Temple",
    location: "Gujarat",
    significance: "First among 12 Jyotirlingas; symbol of resilience",
    celebration: "Magnificent light and sound show; coastal aarti ceremonies"
  }
]

const photographyGallery = [
  {
    url: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop",
    title: "Sacred Shiva Linga with Bilva Leaves",
    description: "Traditional worship setup with Shiva Linga adorned with sacred bilva leaves and flowers"
  },
  {
    url: "https://images.unsplash.com/photo-1571115764595-644a1c79e753?w=800&h=600&fit=crop",
    title: "Night Vigil at Temple",
    description: "Devotees maintaining night vigil with oil lamps and incense during Shivaratri"
  },
  {
    url: "https://images.unsplash.com/photo-1571115764595-644a1c79e753?w=800&h=600&fit=crop",
    title: "Abhisheka Ceremony",
    description: "Sacred bath of Shiva Linga with milk, honey, and holy water during the festival"
  },
  {
    url: "https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?w=800&h=600&fit=crop",
    title: "Himalayan Temple Celebration",
    description: "Snow-covered Shiva temple in the Himalayas during Maha Shivaratri"
  },
  {
    url: "https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?w=800&h=600&fit=crop",
    title: "Classical Dance Performance",
    description: "Bharatanatyam dancer performing Shiva's cosmic dance during night celebrations"
  },
  {
    url: "https://images.unsplash.com/photo-1582905722825-8af5a0d7b2a8?w=800&h=600&fit=crop",
    title: "Devotees in Meditation",
    description: "Groups of devotees engaged in meditation and chanting throughout the sacred night"
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
        
        {/* Ancient Origins & Scriptural Significance */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{ancientOrigins.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              {ancientOrigins.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2ac0?w=600&h=450&fit=crop"
                  alt="Ancient Shiva temple representing timeless spiritual significance"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Legend of Samudra Manthan */}
        <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-indigo-900 mb-4">{samudraManathanLegend.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[3/4] bg-white rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=500&fit=crop"
                  alt="Artistic representation of Samudra Manthan and Lord Shiva's sacrifice"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              {samudraManathanLegend.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Cosmic & Spiritual Significance */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{shivaCosmicSignificance.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Understanding the profound cosmic and spiritual dimensions of this sacred night
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {shivaCosmicSignificance.aspects.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-indigo-600">
                <h3 className="text-2xl font-bold text-indigo-800 mb-4">{item.aspect}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sacred Fasting & Night Vigil Traditions */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{fastingAndVigilRituals.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Traditional practices for spiritual purification and divine connection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fastingAndVigilRituals.practices.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-indigo-800 mb-4">{item.practice}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-indigo-500">
                  <p className="text-sm font-semibold text-indigo-700 mb-2">Spiritual Benefits:</p>
                  <p className="text-gray-600 text-sm">{item.benefits}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Regional Celebrations */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Regional Celebrations Across India</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Discover unique regional traditions and customs celebrating Maha Shivaratri
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regionalCelebrations.map((region, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-indigo-600">
                <h3 className="text-2xl font-bold text-indigo-800 mb-2">{region.region}</h3>
                <h4 className="text-lg font-semibold text-purple-700 mb-6">({region.specialName})</h4>
                <ul className="space-y-3">
                  {region.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-indigo-600 mr-3 text-xl">🔹</span>
                      <span className="text-gray-700 leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Famous Shiva Temples */}
        <section className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sacred Shiva Temples & Their Celebrations</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Explore the most revered Shiva temples and their unique Shivaratri traditions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {famousShivaTemples.map((temple, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-indigo-800 mb-2">{temple.name}</h3>
                <p className="text-purple-600 font-semibold mb-4">{temple.location}</p>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{temple.significance}</p>
                <div className="bg-indigo-50 rounded-lg p-3 border-l-4 border-indigo-500">
                  <p className="text-xs font-semibold text-indigo-700 mb-1">Shivaratri Celebration:</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{temple.celebration}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Photo Gallery */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Festival Photo Gallery</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Experience the divine atmosphere and spiritual devotion of Maha Shivaratri
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