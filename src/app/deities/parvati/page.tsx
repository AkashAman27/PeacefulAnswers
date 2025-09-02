import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Crown, 
  Star, 
  Heart, 
  Calendar,
  MapPin,
  Mountain,
  ChevronLeft,
  Flower2,
  Gift,
  Scroll,
  ArrowLeft,
  Zap,
  Shield,
  BookOpen,
  Sun
} from 'lucide-react'
import { hinduSupabase } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Parvati - The Gentle Mother | Hindu Deity Guide | PeacefulAnswers',
  description: 'Discover the sacred teachings of Parvati, the Gentle Mother and beloved consort of Shiva. Learn about divine devotion, motherhood, stories, mantras, and spiritual significance.',
  keywords: 'Parvati, Uma, Shiva consort, mountain goddess, Hindu goddess, gentle mother, devotion, divine feminine',
  openGraph: {
    title: 'Parvati - The Gentle Mother | Hindu Deity Guide',
    description: 'The loving goddess who embodies perfect devotion and nurturing maternal energy.',
    type: 'website',
  }
}

// Function to get Parvati data from database
async function getParvati() {
  try {
    const { data, error } = await hinduSupabase
      .from('deities')
      .select('*')
      .eq('name', 'Parvati')
      .single()
    
    if (error) {
      console.error('Error fetching Parvati:', error)
      return null
    }
    
    return data
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export default async function ParvatiPage() {
  let deity = await getParvati()
  
  // Comprehensive fallback data - merge with database data or use as complete fallback
  const fallbackData = {
      name: 'Parvati',
      sanskrit_name: 'पार्वती',
      title: 'The Mountain Goddess',
      description: 'The gentle goddess of love, fertility, and devotion, beloved wife of Shiva and divine mother.',
      image_url: 'https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?w=600&h=600&fit=crop',
      story: 'Goddess Parvati, also known as Uma, Gauri, and Girija, is the gentle and nurturing form of the Divine Mother. As the daughter of the Himalayas (Himavan), she represents the earth\'s fertility, maternal love, and devoted companionship. Parvati is the beloved consort of Lord Shiva and the mother of Ganesha and Kartikeya. Through intense penance and unwavering devotion, she won Shiva\'s heart and became his eternal partner in the cosmic dance of creation.',
      sacred_iconography: [
        {
          name: 'Mountain Connection',
          sanskrit: 'गिरिजा (Girija)',
          meaning: 'Born of the mountain, daughter of Himavan',
          significance: 'Represents stability, strength, and the grounding force of nature'
        },
        {
          name: 'Lotus Hands',
          sanskrit: 'पद्महस्ता (Padmahasta)',
          meaning: 'Hands holding lotus flowers',
          significance: 'Symbolizes purity, beauty, and the unfolding of spiritual consciousness'
        },
        {
          name: 'Golden Complexion',
          sanskrit: 'गौरी (Gauri)',
          meaning: 'The fair one with golden radiance',
          significance: 'Represents the illuminating power of pure love and devotion'
        },
        {
          name: 'Maternal Aspect',
          sanskrit: 'जगन्माता (Jaganmata)',
          meaning: 'Mother of the universe',
          significance: 'Embodies the nurturing, protective, and loving aspect of the Divine Mother'
        }
      ],
      sacred_stories: [
        {
          title: 'The Devoted Wife',
          content: 'Parvati performed severe penance to win Lord Shiva\'s love after Sati\'s death. Her unwavering devotion and spiritual discipline eventually melted Shiva\'s heart, demonstrating that true love requires patience, dedication, and spiritual evolution.'
        },
        {
          title: 'Mother of Ganesha',
          content: 'Parvati created Ganesha from turmeric paste to guard her privacy while bathing. When Shiva unknowingly beheaded him, Parvati\'s maternal fury forced Shiva to restore him with an elephant head, showing a mother\'s protective power.'
        },
        {
          title: 'The Half of Shiva',
          content: 'As Ardhanarishvara, Parvati became the left half of Shiva\'s body, representing the inseparable unity of masculine and feminine principles in creation, and showing that the divine is both transcendent and immanent.'
        }
      ],
      divine_symbolism: [
        {
          aspect: 'Divine Feminine Power',
          meaning: 'Parvati represents Shakti in her gentle, nurturing form. She shows that spiritual power can be expressed through love, compassion, and devotion rather than only through fierce energy.'
        },
        {
          aspect: 'Perfect Devotion',
          meaning: 'Her love for Shiva exemplifies the highest form of bhakti (devotion). She teaches that through pure love and surrender, one can unite with the divine consciousness.'
        },
        {
          aspect: 'Mother Nature',
          meaning: 'As the daughter of mountains, Parvati embodies the fertile, life-giving aspect of nature. She represents the earth\'s capacity to nurture and sustain all life forms.'
        }
      ],
      festivals: [
        {
          name: 'Teej Festivals',
          date: 'July-September (Monsoon season)',
          description: 'Various Teej festivals celebrate Parvati\'s devotion to Shiva and her role as the ideal wife. Women observe fasts and pray for marital happiness and their husbands\' well-being.'
        },
        {
          name: 'Gauri Festival',
          date: 'August/September (Bhadrapada)',
          description: 'Celebrated especially in Maharashtra and Karnataka, honoring Parvati as Gauri. Married women invite the goddess into their homes for three days, seeking blessings for family welfare.'
        },
        {
          name: 'Navratri (Devi Paksha)',
          date: 'September/October',
          description: 'During the nine nights of Navratri, Parvati is worshipped in her various forms. She represents the divine mother who protects and blesses her devotees with love and prosperity.'
        }
      ],
      temples: [
        {
          name: 'Maa Vaishno Devi, Jammu',
          significance: 'Sacred cave shrine where Parvati is worshipped as the Divine Mother. Millions of pilgrims undertake the challenging journey to seek her blessings for family welfare and spiritual growth.'
        },
        {
          name: 'Kamakhya Temple, Assam',
          significance: 'One of the most important Shakti Pithas where Parvati is revered as the bleeding goddess. The temple celebrates the divine feminine creative power and fertility.'
        },
        {
          name: 'Meenakshi Temple, Madurai',
          significance: 'Dedicated to Parvati as Meenakshi (fish-eyed goddess), showcasing her as the divine consort of Shiva. Famous for its architectural beauty and elaborate festivals celebrating divine love.'
        }
      ],
      mantras: [
        {
          sanskrit: 'ॐ पार्वत्यै नमः',
          transliteration: 'Om Parvatyai Namah',
          meaning: 'Salutations to Goddess Parvati',
          benefits: 'Simple mantra for seeking blessings of love, fertility, family harmony, and devotional strength. Invokes the gentle, nurturing aspect of the Divine Mother.'
        },
        {
          sanskrit: 'ॐ गिरिजायै विद्महे शिवप्रियायै धीमहि तन्नो पार्वती प्रचोदयात्',
          transliteration: 'Om Girijayai Vidmahe Shivapriyayai Dhimahi Tanno Parvati Prachodayat',
          meaning: 'We meditate on the daughter of the mountain, beloved of Shiva. May Parvati inspire our consciousness',
          benefits: 'Parvati Gayatri Mantra for developing devotional qualities, patience in love, and spiritual steadfastness'
        }
      ],
      essential_facts: [
        {
          fact: 'Parvati is the daughter of the Himalayas and represents the gentle aspect of Shakti'
        },
        {
          fact: 'She is the devoted wife of Lord Shiva and mother of Ganesha and Kartikeya'
        },
        {
          fact: 'Her other names include Uma, Gauri, Girija, and Jagadamba'
        },
        {
          fact: 'She embodies the ideal of devoted wife and loving mother in Hindu tradition'
        },
        {
          fact: 'Teej festivals are primarily celebrated in her honor by married women'
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
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-pink-50">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/deities" 
            className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Deities
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-pink-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-white animate-[slideInFromLeft_1s_ease-out]">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Mountain className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Jaganmata</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sanskrit">
                {deity.sanskrit_name || 'पार्वती'}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-green-100">
                {deity.name || 'Goddess Parvati'}
              </h2>
              <p className="text-lg text-emerald-100 leading-relaxed mb-8">
                {deity.description || deity.title || 'The Mountain Goddess'}
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="relative animate-[slideInFromRight_1s_ease-out]">
              <div className="aspect-square bg-gradient-to-br from-pink-500/20 to-green-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src={deity.image_url || 'https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?w=600&h=600&fit=crop'}
                  alt={deity.name || 'Goddess Parvati'}
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
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-400/20 rounded-full blur-3xl"></div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Story Section */}
        {deity.story && (
          <section className="animate-fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Story</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-8"></div>
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
                  <div className="aspect-video bg-gradient-to-br from-green-50 to-pink-50 rounded-xl flex items-center justify-center">
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
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-pink-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {deity.sacred_iconography.map((item: any, index: number) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-sm text-green-600 mb-3">{item.sanskrit}</p>
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
                  <div className="aspect-video bg-gradient-to-br from-emerald-50 to-pink-50 rounded-xl flex items-center justify-center">
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
              <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-rose-600 mx-auto mb-8"></div>
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
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-green-600 mx-auto mb-8"></div>
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
                  <div className="aspect-video bg-gradient-to-br from-purple-50 to-green-50 rounded-xl flex items-center justify-center">
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
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deity.festivals.map((festival: any, index: number) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Calendar className="w-8 h-8 text-green-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{festival.name}</h3>
                  <p className="text-sm text-green-600 mb-3">{festival.date}</p>
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
                <div key={index} className="bg-gradient-to-br from-green-50 to-pink-50 rounded-xl p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-sanskrit text-gray-900 mb-3">{mantra.sanskrit}</h3>
                    <p className="text-green-600 font-medium mb-2">{mantra.transliteration}</p>
                    <p className="text-gray-700 italic">{mantra.meaning}</p>
                  </div>
                  <div className="border-t border-green-200 pt-4">
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
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
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