import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Crown, 
  Star, 
  Heart, 
  Calendar,
  MapPin,
  Wind,
  ChevronLeft,
  Mountain,
  ArrowLeft,
  Zap,
  Shield,
  BookOpen,
  Flame,
  Hammer,
  Sun
} from 'lucide-react'
import { hinduSupabase } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Hanuman - The Mighty Devotee | Hindu Deity Guide | PeacefulAnswers',
  description: 'Discover the sacred teachings of Hanuman, the Mighty Devotee of Rama. Learn about strength, devotion, Hanuman Chalisa, stories, mantras, and spiritual significance.',
  keywords: 'Hanuman, Bajrangbali, devotion, strength, Rama bhakta, Hindu deity, courage, protection',
  openGraph: {
    title: 'Hanuman - The Mighty Devotee | Hindu Deity Guide',
    description: 'The powerful devotee who embodies perfect devotion, strength, and service to the divine.',
    type: 'website',
  }
}

// Function to get Hanuman data from database
async function getHanuman() {
  try {
    const { data, error } = await hinduSupabase
      .from('deities')
      .select('*')
      .eq('name', 'Hanuman')
      .single()
    
    if (error) {
      console.error('Error fetching Hanuman:', error)
      return null
    }
    
    return data
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export default async function HanumanPage() {
  let deity = await getHanuman()
  
  // Comprehensive fallback data - merge with database data or use as complete fallback
  const fallbackData = {
      name: 'Hanuman',
      sanskrit_name: 'हनुमान्',
      title: 'The Mighty Devotee',
      description: 'The mighty devotee of Lord Rama, symbol of devotion, courage, strength, and selfless service to the divine.',
      image_url: 'https://images.unsplash.com/photo-1582555188485-4f74bbadf20c?w=600&h=600&fit=crop',
      story: 'Lord Hanuman, also known as Anjaneya, Maruti, or Pawanputra, is revered as the greatest devotee of Lord Rama and one of the most beloved deities in Hinduism. Born to Anjana and blessed by Vayu (the Wind God), Hanuman possesses extraordinary strength, courage, and unwavering devotion. As one of the seven immortals (Chiranjivi), he remains ever-present to help his devotees. His life is a perfect example of selfless service, showing that true devotion means dedicating oneself completely to the divine will.',
      sacred_iconography: [
        {
          name: 'Mace (Gada)',
          sanskrit: 'गदा (Gada)',
          meaning: 'Symbol of strength and protection from evil',
          significance: 'Represents the power to destroy negativity and protect devotees from harm'
        },
        {
          name: 'Flying Posture',
          sanskrit: 'उड्डयान मुद्रा (Uddayan Mudra)',
          meaning: 'Ability to transcend physical limitations through devotion',
          significance: 'Shows how devotion can help overcome any obstacle or distance'
        },
        {
          name: 'Muscular Physique',
          sanskrit: 'बलवान शरीर (Balwan Sharir)',
          meaning: 'Physical and spiritual strength combined',
          significance: 'Represents the strength that comes from pure devotion and righteous living'
        },
        {
          name: 'Long Tail',
          sanskrit: 'लम्बी पूंछ (Lambi Poonch)',
          meaning: 'Flexibility and adaptability in service',
          significance: 'Used as a weapon and tool, showing resourcefulness in divine service'
        }
      ],
      sacred_stories: [
        {
          title: 'The Birth of Hanuman',
          content: 'Born to the celestial nymph Anjana and blessed by Vayu, Hanuman was destined for greatness. As a child, mistaking the sun for a fruit, he leaped to catch it, demonstrating his incredible powers from birth.'
        },
        {
          title: 'Meeting Lord Rama',
          content: 'When Hanuman first met Rama and Lakshmana while searching for Sita, he immediately recognized his true purpose. This meeting marked the beginning of the most devoted relationship between a devotee and deity.'
        },
        {
          title: 'The Great Leap to Lanka',
          content: 'Hanuman\'s legendary leap across the ocean to Lanka to find Sita showcases his incredible strength and unwavering determination to serve Rama, overcoming all obstacles through devotion.'
        },
        {
          title: 'Lifting the Sanjeevani Mountain',
          content: 'When Lakshmana fell unconscious in battle, Hanuman flew to the Himalayas and brought the entire mountain containing life-saving herbs, showing how devotion knows no limits.'
        }
      ],
      divine_symbolism: [
        {
          aspect: 'Perfect Devotion (Bhakti)',
          meaning: 'Hanuman represents the ideal devotee who places service to God above all else, showing that true devotion involves complete surrender and selfless action.'
        },
        {
          aspect: 'Courage and Fearlessness',
          meaning: 'As a symbol of courage, Hanuman teaches that with faith and devotion, one can face any challenge. His fearlessness comes from complete trust in the divine.'
        },
        {
          aspect: 'Strength and Protection',
          meaning: 'Hanuman embodies both physical and spiritual strength. He protects his devotees from negative forces, evil spirits, and obstacles while granting them inner strength.'
        }
      ],
      festivals: [
        {
          name: 'Hanuman Jayanti',
          date: 'Chaitra Purnima (March/April)',
          description: 'The most important festival celebrating Hanuman\'s birth, observed with fasting, prayers, special puja, reading of Hanuman Chalisa, and community celebrations at temples.'
        },
        {
          name: 'Tuesday Worship',
          date: 'Every Tuesday',
          description: 'Tuesday is considered Hanuman\'s special day. Devotees visit temples, fast, offer prayers, and chant Hanuman Chalisa for strength, protection, and removal of obstacles.'
        },
        {
          name: 'Saturday Observance',
          date: 'Every Saturday',
          description: 'Many devotees observe Saturday as another sacred day for Hanuman worship, particularly for protection from negative influences and gaining courage.'
        }
      ],
      temples: [
        {
          name: 'Sankat Mochan Temple, Varanasi',
          significance: 'Famous temple where Tulsidas is said to have had a vision of Hanuman and composed the Hanuman Chalisa. Known for providing relief from troubles and obstacles.'
        },
        {
          name: 'Mehendipur Balaji Temple, Rajasthan',
          significance: 'Powerful temple renowned for healing and protection from evil spirits, negative energies, and black magic. Attracts devotees seeking spiritual cleansing and protection.'
        },
        {
          name: 'Panchmukhi Hanuman Temple',
          significance: 'Temples featuring five-faced Hanuman representing his ability to face all directions simultaneously, symbolizing omnipresence and complete protection of devotees.'
        }
      ],
      mantras: [
        {
          sanskrit: 'ॐ हं हनुमते नमः',
          transliteration: 'Om Ham Hanumate Namah',
          meaning: 'Salutations to Lord Hanuman',
          benefits: 'Simple and powerful mantra for strength, protection, and removal of obstacles. Grants courage and fearlessness.'
        },
        {
          sanskrit: 'ॐ श्री हनुमते नमः',
          transliteration: 'Om Shree Hanumate Namah',
          meaning: 'Salutations to the auspicious Lord Hanuman',
          benefits: 'For invoking Hanuman\'s blessings for success, protection from enemies, and overcoming fears and anxieties.'
        },
        {
          sanskrit: 'हनुमान चालीसा',
          transliteration: 'Hanuman Chalisa',
          meaning: '40-verse hymn by Tulsidas praising Hanuman\'s virtues',
          benefits: 'Most beloved prayer providing complete protection, strength, and spiritual upliftment. Removes negative influences and grants divine grace.'
        }
      ],
      essential_facts: [
        {
          fact: 'Hanuman is the son of Vayu (Wind God) and Anjana'
        },
        {
          fact: 'He is one of the seven immortals (Chiranjivi) who will live until the end of Kaliyuga'
        },
        {
          fact: 'Tuesday and Saturday are considered his sacred days'
        },
        {
          fact: 'He is the devoted disciple and servant of Lord Rama'
        },
        {
          fact: 'Orange and red colors are associated with him, symbolizing strength and devotion'
        },
        {
          fact: 'He possesses Ashta Siddhis (eight supernatural powers) and Nava Nidhis (nine treasures)'
        },
        {
          fact: 'Hanuman Chalisa is one of the most recited prayers in Hinduism'
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
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/deities" 
            className="inline-flex items-center text-gray-600 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Deities
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-white animate-[slideInFromLeft_1s_ease-out]">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Mountain className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Devoted Warrior</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sanskrit">
                {deity.sanskrit_name || 'हनुमान्'}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-orange-100">
                {deity.name || 'Lord Hanuman'}
              </h2>
              <p className="text-lg text-yellow-100 leading-relaxed mb-8">
                {deity.description || deity.title || 'The Mighty Devotee'}
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="relative animate-[slideInFromRight_1s_ease-out]">
              <div className="aspect-square bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src={deity.image_url || 'https://images.unsplash.com/photo-1582555188485-4f74bbadf20c?w=600&h=600&fit=crop'}
                  alt={deity.name || 'Lord Hanuman'}
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
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-400/20 rounded-full blur-3xl"></div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Story Section */}
        {deity.story && (
          <section className="animate-fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Story</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-yellow-600 mx-auto mb-8"></div>
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
                  <div className="aspect-video bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl flex items-center justify-center">
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
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-orange-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deity.sacred_iconography.map((item: any, index: number) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-sm text-orange-600 mb-3">{item.sanskrit}</p>
                  <p className="text-gray-700 text-sm mb-3">{item.meaning}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.significance}</p>
                </div>
              ))}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deity.divine_symbolism.map((symbol: any, index: number) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-3">{symbol.aspect}</h3>
                  <p className="text-gray-700 leading-relaxed">{symbol.meaning}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Festivals & Celebrations Section */}
        {deity.festivals && deity.festivals.length > 0 && (
          <section className="animate-fadeIn animate-delay-500">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Festivals & Celebrations</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-yellow-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deity.festivals.map((festival: any, index: number) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Calendar className="w-8 h-8 text-orange-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{festival.name}</h3>
                  <p className="text-sm text-orange-600 mb-3">{festival.date}</p>
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
                <div key={index} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-sanskrit text-gray-900 mb-3">{mantra.sanskrit}</h3>
                    <p className="text-orange-600 font-medium mb-2">{mantra.transliteration}</p>
                    <p className="text-gray-700 italic">{mantra.meaning}</p>
                  </div>
                  <div className="border-t border-orange-200 pt-4">
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
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
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