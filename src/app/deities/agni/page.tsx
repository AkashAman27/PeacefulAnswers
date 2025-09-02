import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Crown, 
  Star, 
  Heart, 
  Calendar,
  MapPin,
  Flame,
  ChevronLeft,
  Flower2,
  Gift,
  Scroll,
  Mountain,
  ArrowLeft,
  Zap,
  Shield,
  BookOpen,
  Sun
} from 'lucide-react'
import { hinduSupabase } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Agni - The Sacred Fire | Hindu Deity Guide | PeacefulAnswers',
  description: 'Discover the sacred teachings of Agni, the Sacred Fire god and divine messenger. Learn about purification, sacrifice, stories, mantras, and spiritual significance.',
  keywords: 'Agni, fire god, purification, sacrifice, Hindu deity, divine messenger, sacred fire, Vedic deity',
  openGraph: {
    title: 'Agni - The Sacred Fire | Hindu Deity Guide',
    description: 'The divine fire that purifies souls and carries offerings from earth to heaven.',
    type: 'website',
  }
}

// Function to get Agni data from database
async function getAgni() {
  try {
    const { data, error } = await hinduSupabase
      .from('deities')
      .select('*')
      .eq('name', 'Agni')
      .single()
    
    if (error) {
      console.error('Error fetching Agni:', error)
      return null
    }
    
    return data
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export default async function AgniPage() {
  let deity = await getAgni()
  
  // Comprehensive fallback data - merge with database data or use as complete fallback
  const fallbackData = {
      name: 'Agni',
      sanskrit_name: 'अग्नि',
      title: 'God of Fire',
      description: 'The sacred fire god, purifier of souls, and divine messenger between humans and gods.',
      image_url: 'https://images.unsplash.com/photo-1551854004-0ca2aa6b0ba8?w=600&h=600&fit=crop',
      story: 'Agni is one of the most important Vedic deities, representing the sacred fire that connects earth to heaven. As the divine messenger, Agni carries offerings from humans to the gods through sacrificial fire. He is present in three forms: terrestrial fire, atmospheric lightning, and celestial sun. Agni purifies everything he touches and is essential for all Vedic rituals and ceremonies.',
      sacred_iconography: [
        {
          name: 'Two Heads',
          sanskrit: 'द्विमुख (Dvimukh)',
          meaning: 'Two faces representing sacred and ordinary fire',
          significance: 'One face consumes offerings to gods, other sustains earthly life'
        },
        {
          name: 'Seven Tongues',
          sanskrit: 'सप्तजिह्व (Saptajihva)',
          meaning: 'Seven flames representing divine aspects',
          significance: 'Each tongue represents different purifying qualities of fire'
        },
        {
          name: 'Golden Body',
          sanskrit: 'हिरण्य वर्ण (Hiranya Varna)',
          meaning: 'Radiant golden complexion',
          significance: 'Represents the luminous nature of pure consciousness'
        },
        {
          name: 'Sacred Thread',
          sanskrit: 'यज्ञोपवीत (Yagnopavit)',
          meaning: 'Sacred thread of fire sacrifice',
          significance: 'Symbol of connection between material and spiritual realms'
        }
      ],
      sacred_stories: [
        {
          title: 'Birth from Brahma',
          content: 'Agni was born from the mouth of Brahma and given the responsibility of carrying offerings to the gods. This origin establishes his role as the divine messenger who bridges the gap between human devotion and divine grace.'
        },
        {
          title: 'The Churning of Ocean',
          content: 'During the churning of the cosmic ocean, Agni emerged as one of the divine treasures. His presence was essential for the gods to receive amrita (nectar of immortality), showing fire\'s role in transformation and purification.'
        },
        {
          title: 'Consuming the Khandava Forest',
          content: 'With Krishna and Arjuna\'s help, Agni consumed the entire Khandava forest to satisfy his hunger, demonstrating how divine fire can transform and renew, clearing the old to make way for new creation.'
        }
      ],
      divine_symbolism: [
        {
          aspect: 'Divine Purifier',
          meaning: 'Agni represents the purifying power of consciousness that burns away ignorance and impurities. He shows that spiritual progress requires the fire of discrimination to separate truth from falsehood.'
        },
        {
          aspect: 'Sacred Messenger',
          meaning: 'As the carrier of offerings to gods, Agni symbolizes the power of sincere devotion to reach the divine. He teaches that pure intention and sacred action can bridge any gap between human and divine.'
        },
        {
          aspect: 'Witness of Truth',
          meaning: 'Agni is invoked as witness in marriages and oaths because fire cannot be corrupted. He represents the unchanging truth that illuminates all darkness and witnesses all actions.'
        }
      ],
      festivals: [
        {
          name: 'Holika Dahan',
          date: 'March (Phalguna Purnima)',
          description: 'The bonfire before Holi celebrates Agni\'s power to destroy evil and purify devotees. People light fires and offer prayers to Agni for protection and spiritual purification.'
        },
        {
          name: 'Agni Puja',
          date: 'Daily in Vedic rituals',
          description: 'Daily fire sacrifices and havans invoke Agni as the divine messenger. Essential part of all Vedic ceremonies, from simple daily prayers to elaborate yajna rituals.'
        },
        {
          name: 'Kartik Deepdan',
          date: 'October/November (Kartik month)',
          description: 'Festival of lighting lamps to honor Agni. Devotees light oil lamps and make offerings to invoke Agni\'s blessings for prosperity and spiritual illumination.'
        }
      ],
      temples: [
        {
          name: 'Jwalamukhis across India',
          significance: 'Temples at natural fire springs where Agni manifests eternally. Most famous at Kangra, Himachal Pradesh, where eternal flames burn without fuel, demonstrating Agni\'s divine nature.'
        },
        {
          name: 'Agni Kund Temples',
          significance: 'Temples with sacred fire pits where continuous havans are performed. Found across India, these maintain the eternal sacred fire and serve as centers for fire worship.'
        },
        {
          name: 'Home Fire Altars',
          significance: 'Traditional Hindu homes maintain sacred fire for daily worship. The domestic hearth is considered Agni\'s primary dwelling place, making every home a temple of fire worship.'
        }
      ],
      mantras: [
        {
          sanskrit: 'ॐ अग्नये नमः',
          transliteration: 'Om Agnaye Namah',
          meaning: 'Salutations to Lord Agni',
          benefits: 'Simple mantra for purification, protection, and invoking divine fire energy. Helps in spiritual purification and removing negative influences.'
        },
        {
          sanskrit: 'ॐ वैश्वानराय विद्महे लालीलाय धीमहि तन्नोऽग्निः प्रचोदयात्',
          transliteration: 'Om Vaishvanaraaya Vidmahe Laaleelaaya Dheemahi Tanno Agniah Prachodayat',
          meaning: 'We meditate on the universal fire, the playful flame. May Agni inspire our consciousness',
          benefits: 'Agni Gayatri Mantra for developing inner fire, spiritual energy, and purifying consciousness'
        }
      ],
      essential_facts: [
        {
          fact: 'Agni is one of the most important Vedic deities, mentioned in numerous hymns'
        },
        {
          fact: 'He serves as the divine messenger carrying offerings from humans to gods'
        },
        {
          fact: 'Agni has three forms: terrestrial fire, atmospheric lightning, celestial sun'
        },
        {
          fact: 'He is essential witness in Hindu marriages and sacred oaths'
        },
        {
          fact: 'Every Hindu ritual begins with invoking Agni through fire sacrifice'
        }
      ],
      youtube_videos: {
        story: 'dQw4w9WgXcQ',
        sacred_iconography: 'dQw4w9WgXcQ',
        divine_symbolism: 'dQw4w9WgXcQ'
      }
    } as any
  
  // Merge database data with fallback data, prioritizing database data when available
  if (deity) {
    deity = {
      ...fallbackData,
      ...deity,
      // Ensure arrays have fallback values if empty
      sacred_iconography: deity.sacred_iconography?.length ? deity.sacred_iconography : fallbackData.sacred_iconography,
      sacred_stories: deity.sacred_stories?.length ? deity.sacred_stories : fallbackData.sacred_stories,
      divine_symbolism: deity.divine_symbolism?.length ? deity.divine_symbolism : fallbackData.divine_symbolism,
      festivals: deity.festivals?.length ? deity.festivals : fallbackData.festivals,
      temples: deity.temples?.length ? deity.temples : fallbackData.temples,
      mantras: deity.mantras?.length ? deity.mantras : fallbackData.mantras,
      essential_facts: deity.essential_facts?.length ? deity.essential_facts : fallbackData.essential_facts,
      // Use fallback story if database story is null/empty
      story: deity.story || fallbackData.story,
      // Use fallback videos if database videos are empty
      youtube_videos: deity.youtube_videos && Object.keys(deity.youtube_videos).length ? deity.youtube_videos : fallbackData.youtube_videos
    }
  } else {
    // If no database data at all, use complete fallback
    deity = fallbackData
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/deities" 
            className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Deities
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-white animate-[slideInFromLeft_1s_ease-out]">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Flame className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Vahni</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sanskrit">
                {deity.sanskrit_name || 'अग्नि'}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-orange-100">
                {deity.name || 'Lord Agni'}
              </h2>
              <p className="text-lg text-red-100 leading-relaxed mb-8">
                {deity.description || deity.title || 'God of Fire'}
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="relative animate-[slideInFromRight_1s_ease-out]">
              <div className="aspect-square bg-gradient-to-br from-yellow-500/20 to-red-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src={deity.image_url || 'https://images.unsplash.com/photo-1551854004-0ca2aa6b0ba8?w=600&h=600&fit=crop'}
                  alt={deity.name || 'Lord Agni'}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-red-400/20 rounded-full blur-3xl"></div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Story Section */}
        {deity.story && (
          <section className="animate-fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Story</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {deity.story}
                </p>
              </div>
              <div className="relative">
                {deity.youtube_videos?.story ? (
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      src={`https://www.youtube.com/embed/${deity.youtube_videos.story}`}
                      title="Story Video"
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-red-50 to-orange-50 rounded-xl flex items-center justify-center">
                    <p className="text-gray-500">Video content coming soon</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Sacred Iconography Section */}
        {deity.sacred_iconography && deity.sacred_iconography.length > 0 && (
          <section className="animate-fadeIn animate-delay-200">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Sacred Iconography</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {deity.sacred_iconography.map((item: any, index: number) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-sm text-red-600 mb-3">{item.sanskrit}</p>
                    <p className="text-gray-700 text-sm mb-3">{item.meaning}</p>
                    <p className="text-gray-600 text-xs leading-relaxed">{item.significance}</p>
                  </div>
                ))}
              </div>
              <div className="relative">
                {deity.youtube_videos?.sacred_iconography ? (
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      src={`https://www.youtube.com/embed/${deity.youtube_videos.sacred_iconography}`}
                      title="Sacred Iconography Video"
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-orange-50 to-red-50 rounded-xl flex items-center justify-center">
                    <p className="text-gray-500">Video content coming soon</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Sacred Stories Section */}
        {deity.sacred_stories && deity.sacred_stories.length > 0 && (
          <section className="animate-fadeIn animate-delay-300">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Sacred Stories</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deity.sacred_stories.map((story: any, index: number) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{story.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">{story.content}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Divine Symbolism Section */}
        {deity.divine_symbolism && deity.divine_symbolism.length > 0 && (
          <section className="animate-fadeIn animate-delay-400">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Divine Symbolism</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="grid grid-cols-1 gap-6">
                {deity.divine_symbolism.map((symbol: any, index: number) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="font-bold text-gray-900 mb-3">{symbol.aspect}</h3>
                    <p className="text-gray-700 leading-relaxed">{symbol.meaning}</p>
                  </div>
                ))}
              </div>
              <div className="relative">
                {deity.youtube_videos?.divine_symbolism ? (
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      src={`https://www.youtube.com/embed/${deity.youtube_videos.divine_symbolism}`}
                      title="Divine Symbolism Video"
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl flex items-center justify-center">
                    <p className="text-gray-500">Video content coming soon</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Festivals & Celebrations Section */}
        {deity.festivals && deity.festivals.length > 0 && (
          <section className="animate-fadeIn animate-delay-500">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Festivals & Celebrations</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deity.festivals.map((festival: any, index: number) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Calendar className="w-8 h-8 text-red-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{festival.name}</h3>
                  <p className="text-sm text-red-600 mb-3">{festival.date}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{festival.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Famous/Sacred Temples Section */}
        {deity.temples && deity.temples.length > 0 && (
          <section className="animate-fadeIn animate-delay-600">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Famous/Sacred Temples</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-orange-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {deity.temples.map((temple: any, index: number) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <MapPin className="w-8 h-8 text-yellow-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{temple.name}</h3>
                  <p className="text-gray-700 leading-relaxed">{temple.significance}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Sacred Mantras and Prayers Section */}
        {deity.mantras && deity.mantras.length > 0 && (
          <section className="animate-fadeIn animate-delay-700">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Sacred Mantras and Prayers</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {deity.mantras.map((mantra: any, index: number) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-sanskrit text-gray-900 mb-3">{mantra.sanskrit}</h3>
                    <p className="text-red-600 font-medium mb-2">{mantra.transliteration}</p>
                    <p className="text-gray-700 italic">{mantra.meaning}</p>
                  </div>
                  <div className="border-t border-red-200 pt-4">
                    <p className="text-gray-600 text-sm leading-relaxed">{mantra.benefits}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Essential Facts Section */}
        {deity.essential_facts && deity.essential_facts.length > 0 && (
          <section className="animate-fadeIn animate-delay-800">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Essential Facts</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deity.essential_facts.map((item: any, index: number) => (
                <div key={index} className="flex items-start space-x-3 bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{item.fact}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}