import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Hindu Deities - Explore the Divine Pantheon | PeacefulAnswers',
  description: 'Discover the divine pantheon of Hindu deities including the Trinity (Brahma, Vishnu, Shiva), major gods like Ganesha and Hanuman, cosmic forces, and the divine feminine principle. Learn about their stories, symbols, and significance.',
  keywords: 'Hindu deities, Hindu gods, Hindu goddesses, Trimurti, Brahma, Vishnu, Shiva, Ganesha, Hanuman, Krishna, Rama, Durga, Kali, divine pantheon, Hindu mythology',
}
import { 
  Crown, 
  Shield, 
  Heart, 
  Star, 
  Eye,
  Flame,
  Wind,
  Sun,
  Moon,
  Mountain,
  Flower2,
  BookOpen,
  Coins,
  Waves,
  ChevronRight,
  TreePine,
  Disc,
  Hammer
} from 'lucide-react'

// Icon mapping for CMS data
const iconMap: { [key: string]: any } = {
  Crown, Star, Heart, Shield, Eye, Mountain, BookOpen, Disc, 
  Hammer, Sun, Moon, Flower: Flower2, TreePine, Coins, Waves
}

async function getCMSData() {
  try {
    // For now, return empty CMS data to force fallback to static content
    // TODO: Fix schema access issue
    return {
      categories: [],
      totalDeities: 0,
      hasCMSData: false
    }
    
    // Fetch categories with their deities from CMS
    const { data: categories, error: categoriesError } = await supabase
      .from('hindu.deity_categories')
      .select('*')
      .eq('is_active', true)
      .order('sort_order')

    if (categoriesError) throw categoriesError

    // Fetch all published deities
    const { data: deities, error: deitiesError } = await supabase
      .from('deities')
      .select('*')
      .eq('status', 'published')
      .order('sort_order')

    if (deitiesError) throw deitiesError

    // Group deities by category
    const cmsCategories = categories?.map(category => ({
      ...category,
      deities: deities?.filter(deity => deity.category_id === category.id) || []
    })).filter(cat => cat.deities.length > 0) || []

    return {
      categories: cmsCategories,
      totalDeities: deities?.length || 0,
      hasCMSData: cmsCategories.length > 0
    }
  } catch (error) {
    console.error('Error fetching CMS data:', error)
    return {
      categories: [],
      totalDeities: 0,
      hasCMSData: false
    }
  }
}

const deityCategories = [
  {
    title: "The Trimurti (Trinity)",
    description: "The three primary aspects of the divine",
    deities: [
      {
        id: 'brahma',
        name: 'Brahma',
        sanskrit: 'ब्रह्मा',
        title: 'The Creator',
        domain: 'Creation',
        consort: 'Saraswati',
        vahana: 'Hamsa (Swan)',
        symbolism: 'Four heads representing four Vedas',
        image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop',
        color: 'from-yellow-500 to-orange-500',
        icon: Sun,
        description: 'Creator of the universe and all beings'
      },
      {
        id: 'vishnu',
        name: 'Vishnu',
        sanskrit: 'विष्णु',
        title: 'The Preserver',
        domain: 'Preservation',
        consort: 'Lakshmi',
        vahana: 'Garuda (Eagle)',
        symbolism: 'Four arms holding conch, discus, mace, lotus',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        color: 'from-blue-600 to-indigo-600',
        icon: Disc,
        description: 'Preserver and protector of the universe',
        hasSubPages: true
      },
      {
        id: 'shiva',
        name: 'Shiva',
        sanskrit: 'शिव',
        title: 'The Destroyer',
        domain: 'Destruction & Regeneration',
        consort: 'Parvati',
        vahana: 'Nandi (Bull)',
        symbolism: 'Third eye, trident, damaru drum',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
        color: 'from-purple-600 to-blue-600',
        icon: Eye,
        description: 'Destroyer of evil and ignorance',
        hasSubPages: true
      }
    ]
  },
  {
    title: "Major Gods",
    description: "Principal deities worshipped across the Hindu tradition",
    deities: [
      {
        id: 'ganesha',
        name: 'Ganesha',
        sanskrit: 'गणेश',
        title: 'Remover of Obstacles',
        domain: 'Wisdom & New Beginnings',
        consort: 'Riddhi & Siddhi',
        vahana: 'Mushak (Mouse)',
        symbolism: 'Elephant head, broken tusk, modak',
        image: 'https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?w=400&h=300&fit=crop',
        color: 'from-red-500 to-pink-500',
        icon: Crown,
        description: 'Son of Shiva, lord of beginnings and remover of obstacles'
      },
      {
        id: 'hanuman',
        name: 'Hanuman',
        sanskrit: 'हनुमान्',
        title: 'The Devoted Warrior',
        domain: 'Devotion & Courage',
        father: 'Vayu (Wind God)',
        devotedTo: 'Rama',
        symbolism: 'Mace, mountain, devotion',
        image: 'https://images.unsplash.com/photo-1582555188485-4f74bbadf20c?w=400&h=300&fit=crop',
        color: 'from-orange-500 to-red-600',
        icon: Mountain,
        description: 'Devoted follower of Rama, symbol of strength and devotion'
      },
      {
        id: 'krishna',
        name: 'Krishna',
        sanskrit: 'कृष्ण',
        title: 'The Divine Cowherd',
        domain: 'Love & Divine Play',
        consort: 'Rukmini, Radha',
        avatarOf: 'Vishnu (8th Avatar)',
        symbolism: 'Flute, peacock feather, butter',
        image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop',
        color: 'from-blue-500 to-purple-600',
        icon: Heart,
        description: 'Eighth avatar of Vishnu, teacher of the Bhagavad Gita'
      },
      {
        id: 'rama',
        name: 'Rama',
        sanskrit: 'राम',
        title: 'The Ideal King',
        domain: 'Righteousness & Honor',
        consort: 'Sita',
        avatarOf: 'Vishnu (7th Avatar)',
        symbolism: 'Bow and arrow, righteousness',
        image: 'https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?w=400&h=300&fit=crop',
        color: 'from-green-500 to-emerald-600',
        icon: Shield,
        description: 'Seventh avatar of Vishnu, hero of the Ramayana'
      }
    ]
  },
  {
    title: "Cosmic Forces",
    description: "Deities governing natural elements and cosmic principles",
    deities: [
      {
        id: 'indra',
        name: 'Indra',
        sanskrit: 'इन्द्र',
        title: 'King of the Gods',
        domain: 'Thunder & Rain',
        weapon: 'Vajra (Thunderbolt)',
        vahana: 'Airavata (White Elephant)',
        symbolism: 'Thunderbolt, thousand eyes, rain',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
        color: 'from-blue-600 to-cyan-600',
        icon: Star,
        description: 'King of gods and ruler of heavens'
      },
      {
        id: 'agni',
        name: 'Agni',
        sanskrit: 'अग्नि',
        title: 'God of Fire',
        domain: 'Fire & Purification',
        vahana: 'Ram',
        symbolism: 'Sacred fire, purification, sacrifice',
        image: 'https://images.unsplash.com/photo-1574483247392-d2ce116cd19a?w=400&h=300&fit=crop',
        color: 'from-red-600 to-orange-600',
        icon: Flame,
        description: 'God of fire, purifier and messenger to gods'
      },
      {
        id: 'vayu',
        name: 'Vayu',
        sanskrit: 'वायु',
        title: 'God of Wind',
        domain: 'Wind & Life Force',
        son: 'Hanuman',
        symbolism: 'Wind, breath, life force',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
        color: 'from-cyan-500 to-blue-500',
        icon: Wind,
        description: 'God of wind and father of Hanuman'
      },
      {
        id: 'surya',
        name: 'Surya',
        sanskrit: 'सूर्य',
        title: 'The Sun God',
        domain: 'Sun & Illumination',
        consort: 'Saranyu',
        vahana: 'Seven Horses',
        symbolism: 'Solar disc, seven horses, lotus',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
        color: 'from-yellow-500 to-orange-600',
        icon: Sun,
        description: 'God of the sun, source of light and energy'
      }
    ]
  },
  {
    title: "Divine Feminine (Shakti)",
    description: "Goddesses representing the divine feminine principle and cosmic power",
    deities: [
      {
        id: 'durga',
        name: 'Durga',
        sanskrit: 'दुर्गा',
        title: 'The Invincible Goddess',
        domain: 'Protection & Victory',
        vahana: 'Tiger/Lion',
        symbolism: 'Ten arms, weapons, fierce compassion',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        color: 'from-red-500 to-pink-600',
        icon: Shield,
        description: 'Fierce protector who destroys evil and protects devotees'
      },
      {
        id: 'kali',
        name: 'Kali',
        sanskrit: 'काली',
        title: 'The Dark Goddess',
        domain: 'Time & Destruction',
        consort: 'Shiva',
        symbolism: 'Dark complexion, sword, severed head',
        image: 'https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?w=400&h=300&fit=crop',
        color: 'from-purple-600 to-black',
        icon: Star,
        description: 'Fierce form of Divine Mother, destroyer of ego and evil'
      },
      {
        id: 'parvati',
        name: 'Parvati',
        sanskrit: 'पार्वती',
        title: 'The Mountain Goddess',
        domain: 'Love & Devotion',
        consort: 'Shiva',
        children: 'Ganesha, Kartikeya',
        symbolism: 'Lotus, mountains, maternal love',
        image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop',
        color: 'from-green-400 to-emerald-500',
        icon: Mountain,
        description: 'Gentle form of Shakti, devoted wife and loving mother'
      },
      {
        id: 'lakshmi',
        name: 'Lakshmi',
        sanskrit: 'लक्ष्मी',
        title: 'Goddess of Wealth',
        domain: 'Prosperity & Fortune',
        consort: 'Vishnu',
        symbolism: 'Lotus, gold coins, elephants',
        image: 'https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?w=400&h=300&fit=crop',
        color: 'from-yellow-400 to-amber-500',
        icon: Coins,
        description: 'Goddess of wealth, fortune and prosperity'
      },
      {
        id: 'saraswati',
        name: 'Saraswati',
        sanskrit: 'सरस्वती',
        title: 'Goddess of Knowledge',
        domain: 'Knowledge & Arts',
        consort: 'Brahma',
        vahana: 'Hamsa (Swan)',
        symbolism: 'Veena, lotus, swan, books',
        image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop',
        color: 'from-blue-400 to-indigo-500',
        icon: BookOpen,
        description: 'Goddess of knowledge, music and arts'
      }
    ]
  },
  {
    title: "Celestial & Guardian Deities",
    description: "Gods governing cosmic order, death, and celestial realms",
    deities: [
      {
        id: 'yama',
        name: 'Yama',
        sanskrit: 'यम',
        title: 'God of Death',
        domain: 'Death & Justice',
        vahana: 'Buffalo',
        symbolism: 'Staff, noose, justice scales',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
        color: 'from-gray-600 to-black',
        icon: Shield,
        description: 'Judge of the dead, maintainer of cosmic order'
      },
      {
        id: 'varuna',
        name: 'Varuna',
        sanskrit: 'वरुण',
        title: 'God of Water & Sky',
        domain: 'Water & Cosmic Order',
        vahana: 'Makara (Crocodile)',
        symbolism: 'Water, rope, cosmic law',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
        color: 'from-blue-500 to-cyan-600',
        icon: Waves,
        description: 'Guardian of cosmic law and god of waters'
      },
      {
        id: 'chandra',
        name: 'Chandra',
        sanskrit: 'चन्द्र',
        title: 'The Moon God',
        domain: 'Moon & Night',
        vahana: 'Deer-drawn Chariot',
        symbolism: 'Crescent moon, lotus, deer',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
        color: 'from-silver-400 to-blue-300',
        icon: Moon,
        description: 'God of the moon, controller of tides and emotions'
      }
    ]
  },
  {
    title: "Craftsmen & Prosperity Deities",
    description: "Gods of creation, craftsmanship, and material abundance",
    deities: [
      {
        id: 'vishwakarma',
        name: 'Vishwakarma',
        sanskrit: 'विश्वकर्मा',
        title: 'Divine Architect',
        domain: 'Architecture & Craftsmanship',
        creations: 'Lanka, Dwarka, Divine weapons',
        symbolism: 'Tools, blueprints, golden complexion',
        image: 'https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?w=400&h=300&fit=crop',
        color: 'from-orange-400 to-yellow-500',
        icon: Star,
        description: 'Divine architect who built celestial cities and weapons'
      },
      {
        id: 'kubera',
        name: 'Kubera',
        sanskrit: 'कुबेर',
        title: 'Lord of Wealth',
        domain: 'Wealth & Treasures',
        vahana: 'Pushpaka Vimana',
        symbolism: 'Pot belly, jewels, mace',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        color: 'from-gold-400 to-yellow-600',
        icon: Coins,
        description: 'Treasurer of gods, guardian of wealth and riches'
      }
    ]
  }
]

export default async function DeitiesPage() {
  const cmsData = await getCMSData()
  
  // Use CMS data if available, otherwise fallback to static data
  const categoriesToShow = cmsData.hasCMSData ? cmsData.categories : deityCategories
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 pt-2 sm:pt-4">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <Crown className="w-3 h-3 sm:w-4 sm:h-4" />
            Divine Pantheon
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-orange-200 via-yellow-300 to-red-200 bg-clip-text text-transparent">
            हिन्दू देवता
          </h1>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
            Hindu Deities
          </h2>

          <div>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 md:px-0">
              Explore the divine pantheon of Hindu deities, each representing different aspects of the supreme reality and guiding devotees on their spiritual journey.
            </p>
          </div>
        </div>

        {/* Deity Categories */}
        <div className="space-y-10 sm:space-y-12 md:space-y-16">
          {categoriesToShow.map((category, categoryIndex) => {
            // Handle both CMS data format and static data format
            const categoryTitle = category.title || category.name
            const categoryDesc = category.description
            const categoryDeities = category.deities || []
            
            return (
            <section key={categoryTitle}>
              <div className="text-center mb-6 sm:mb-8 md:mb-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2 sm:mb-3 md:mb-4">
                  {categoryTitle}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
                  {categoryDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {categoryDeities.map((deity: any, index: number) => {
                  // Handle both static and CMS data formats
                  const IconComponent = deity.icon || iconMap[deity.divine_attributes?.[0]?.icon] || Star
                  const deityImage = deity.image || deity.featured_image_url
                  const deityColor = deity.color || 'from-orange-500 to-red-500'
                  const deityDescription = deity.description
                  const linkPath = `/deities/${deity.slug || deity.id}`
                  
                  return (
                    <Link
                      key={deity.id}
                      href={linkPath}
                      className="group block bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-orange-100 overflow-hidden"
                    >
                      {/* Image Section */}
                      {deityImage ? (
                        <div className="relative h-36 sm:h-44 md:h-48 overflow-hidden">
                          <Image
                            src={deityImage}
                            alt={deity.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${deityColor} opacity-80`} />
                          <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>
                          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                            <h4 className="text-xl sm:text-2xl font-bold text-white mb-0.5 sm:mb-1">{deity.sanskrit || deity.sanskrit_name}</h4>
                            <p className="text-orange-100 text-xs sm:text-sm">{deity.title}</p>
                          </div>
                        </div>
                      ) : (
                        <div className={`relative h-36 sm:h-44 md:h-48 bg-gradient-to-br ${deityColor} flex items-center justify-center`}>
                          <IconComponent className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white opacity-50" />
                          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                            <h4 className="text-xl sm:text-2xl font-bold text-white mb-0.5 sm:mb-1">{deity.sanskrit || deity.sanskrit_name}</h4>
                            <p className="text-orange-100 text-xs sm:text-sm">{deity.title}</p>
                          </div>
                        </div>
                      )}

                      {/* Content Section */}
                      <div className="p-4 sm:p-5 md:p-6">
                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                          <h5 className="text-lg sm:text-xl font-bold text-gray-800">{deity.name}</h5>
                          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 group-hover:translate-x-1 transition-transform" />
                        </div>

                        <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                          {deityDescription}
                        </p>

                        <div className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs text-gray-500">
                          <div className="flex justify-between">
                            <span className="font-medium">Domain:</span>
                            <span className="text-right ml-2">{deity.domain}</span>
                          </div>
                          {deity.consort && (
                            <div className="flex justify-between">
                              <span className="font-medium">Consort:</span>
                              <span>{deity.consort}</span>
                            </div>
                          )}
                          {deity.avatarOf && (
                            <div className="flex justify-between">
                              <span className="font-medium">Avatar of:</span>
                              <span>{deity.avatarOf}</span>
                            </div>
                          )}
                          {deity.vahana && (
                            <div className="flex justify-between">
                              <span className="font-medium">Vahana:</span>
                              <span>{deity.vahana}</span>
                            </div>
                          )}
                        </div>

                        {deity.hasSubPages && (
                          <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-orange-100">
                            <span className="text-[10px] sm:text-xs text-orange-600 font-medium">
                              Explore Forms & Avatars →
                            </span>
                          </div>
                        )}
                      </div>
                    </Link>
                  )
                })}
              </div>
            </section>
          )})}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3 sm:mb-4">
              Journey into Divine Wisdom
            </h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 px-2 sm:px-0">
              Each deity represents a unique aspect of the divine consciousness, offering guidance, protection, and blessings to their devotees.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-orange-700">
              <span className="bg-orange-200 px-2 sm:px-3 py-1 rounded-full">🕉️ Sacred Mantras</span>
              <span className="bg-yellow-200 px-2 sm:px-3 py-1 rounded-full">🏛️ Temple Locations</span>
              <span className="bg-red-200 px-2 sm:px-3 py-1 rounded-full">🎭 Festival Celebrations</span>
              <span className="bg-pink-200 px-2 sm:px-3 py-1 rounded-full">📚 Mythological Stories</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}