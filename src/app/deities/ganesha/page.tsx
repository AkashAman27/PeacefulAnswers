import Image from 'next/image'
import Link from 'next/link'
import { 
  Crown, 
  Star, 
  Heart, 
  Calendar,
  MapPin,
  Mouse,
  ChevronLeft,
  Flower2,
  Gift,
  Scroll,
  Mountain,
  ArrowLeft,
  Zap,
  Shield,
  BookOpen
} from 'lucide-react'
import { hinduSupabase } from '@/lib/supabase'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lord Ganesha - The Remover of Obstacles | Hindu Deity Guide | PeacefulAnswers',
  description: 'Discover the sacred teachings of Lord Ganesha, the beloved elephant-headed deity and remover of obstacles. Learn about his stories, mantras, festivals, and spiritual significance in Hindu tradition.',
  keywords: 'Ganesha, Ganapati, Vinayaka, Hindu deity, remover of obstacles, elephant god, Ganesh Chaturthi, Hindu spirituality',
  openGraph: {
    title: 'Lord Ganesha - The Remover of Obstacles | Hindu Deity Guide',
    description: 'Explore the divine wisdom of Lord Ganesha, patron of arts and sciences, and the beloved remover of obstacles in Hindu tradition.',
    type: 'website',
  }
}

// Function to get Ganesha data from database
async function getGanesha() {
  try {
    const { data, error } = await hinduSupabase
      .from('deities')
      .select('*')
      .eq('name', 'Ganesha')
      .single()
    
    if (error) {
      console.error('Error fetching Ganesha:', error)
      return null
    }
    
    return data
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export default async function GaneshaPage() {
  let deity = await getGanesha()
  
  // Comprehensive fallback data - merge with database data or use as complete fallback
  const fallbackData = {
      name: 'Ganesha',
      sanskrit_name: 'गणेश',
      title: 'The Remover of Obstacles',
      description: 'The beloved elephant-headed deity, remover of obstacles, patron of arts and sciences, and lord of beginnings.',
      image_url: 'https://images.unsplash.com/photo-1609688669309-fc95c8c64193?w=600&h=600&fit=crop',
      story: 'Lord Ganesha, also known as Ganapati or Vinayaka, is one of the most beloved and widely worshipped deities in Hinduism. As the son of Lord Shiva and Goddess Parvati, he holds a special place as the remover of obstacles (Vighna Harta) and the patron of arts and sciences. Ganesha is invoked at the beginning of any new venture, ceremony, or important undertaking.',
      sacred_iconography: [
        {
          name: 'Elephant Head',
          sanskrit: 'गजानन (Gajanan)',
          meaning: 'Symbolizes wisdom, intelligence, and the removal of ego',
          significance: 'Represents the ability to overcome obstacles with wisdom'
        },
        {
          name: 'Broken Tusk',
          sanskrit: 'एकदंत (Ekadanta)',
          meaning: 'Represents sacrifice for the greater good and uniqueness',
          significance: 'Used as a pen to write the Mahabharata, symbolizing sacrifice for knowledge'
        },
        {
          name: 'Large Belly',
          sanskrit: 'लम्बोदर (Lambodara)',
          meaning: 'Ability to digest all experiences and contain the universe',
          significance: 'Represents acceptance and capacity to hold all experiences'
        },
        {
          name: 'Mouse Vehicle',
          sanskrit: 'मूषक वाहन (Mushak Vahan)',
          meaning: 'Humility and the ability to penetrate small spaces',
          significance: 'Shows that even the largest can work with the smallest harmoniously'
        }
      ],
      sacred_stories: [
        {
          title: 'The Birth of Ganesha',
          content: 'Created by Goddess Parvati from turmeric paste to guard her bath, Ganesha was beheaded by Shiva in ignorance and later given an elephant head, making him the most distinctive deity in Hindu mythology.'
        },
        {
          title: 'The Broken Tusk',
          content: 'Ganesha broke his own tusk to use as a pen when writing the Mahabharata as dictated by sage Vyasa, symbolizing the sacrifice of perfection for knowledge and the greater good.'
        },
        {
          title: 'The Mouse and the Modak',
          content: 'Once, Ganesha\'s mouse vehicle stumbled while carrying him to a feast, leading to a lesson about humility and moderation. This story explains why offerings should be made with devotion, not pride.'
        }
      ],
      divine_symbolism: [
        {
          aspect: 'Vighna Harta',
          meaning: 'As the remover of obstacles, Ganesha clears the path for spiritual and material progress, ensuring that devotees can pursue their goals without hindrance.'
        },
        {
          aspect: 'Patron of Arts and Learning',
          meaning: 'Ganesha is the patron deity of arts, sciences, commerce, and new beginnings. Students and artists seek his blessings for success in their endeavors.'
        },
        {
          aspect: 'Lord of Beginnings',
          meaning: 'No Hindu ritual or ceremony begins without invoking Ganesha first. He ensures that all new ventures start with divine blessings and proceed smoothly.'
        }
      ],
      festivals: [
        {
          name: 'Ganesh Chaturthi',
          date: 'August/September (Bhadrapada month)',
          description: 'The most important festival celebrating Ganesha\'s birth, lasting 11 days with elaborate celebrations, processions, and immersion ceremonies.'
        },
        {
          name: 'Sankashti Chaturthi',
          date: 'Monthly observance',
          description: 'Monthly fast observed on the fourth day after each full moon, dedicated to seeking Ganesha\'s blessings for overcoming difficulties.'
        },
        {
          name: 'Ganesh Jayanti',
          date: 'Magha Shukla Chaturthi',
          description: 'Alternative birth celebration observed in some regions, particularly in Maharashtra and Karnataka, marking Ganesha\'s divine appearance.'
        }
      ],
      temples: [
        {
          name: 'Siddhivinayak Temple, Mumbai',
          significance: 'Most famous Ganesha temple, visited by millions seeking blessings for success and removal of obstacles in their endeavors.'
        },
        {
          name: 'Dagdusheth Halwai Ganapati, Pune',
          significance: 'Historic temple known for its beautiful idol and elaborate Ganesh Chaturthi celebrations attracting devotees from across India.'
        },
        {
          name: 'Ashtavinayak Temples, Maharashtra',
          significance: 'Eight sacred temples dedicated to Ganesha, each with unique legends and considered highly auspicious for pilgrimage.'
        }
      ],
      mantras: [
        {
          sanskrit: 'ॐ गं गणपतये नमः',
          transliteration: 'Om Gam Ganapataye Namah',
          meaning: 'Salutations to Lord Ganesha',
          benefits: 'Simple and powerful mantra for removing obstacles and seeking blessings for new beginnings'
        },
        {
          sanskrit: 'ॐ एकदन्ताय विद्महे वक्रतुण्डाय धीमहि तन्नो दन्ती प्रचोदयात्',
          transliteration: 'Om Ekadantaya Vidmahe Vakratundaya Dheemahi Tanno Danti Prachodayat',
          meaning: 'We meditate on the one-tusked Lord, may the curved-trunk deity inspire our intellect',
          benefits: 'Ganesha Gayatri Mantra for enhancing wisdom and intelligence'
        }
      ],
      essential_facts: [
        {
          fact: 'Ganesha is the son of Lord Shiva and Goddess Parvati'
        },
        {
          fact: 'He is invoked before starting any new venture or ceremony'
        },
        {
          fact: 'His vehicle is Mushak (mouse), symbolizing humility'
        },
        {
          fact: 'Wednesday is considered his sacred day'
        },
        {
          fact: 'Modak (sweet dumpling) is his favorite offering'
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
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-orange-50">
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
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 via-pink-600 to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-white animate-[slideInFromLeft_1s_ease-out]">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Crown className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Vighna Harta</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sanskrit">
                {deity.sanskrit_name || 'गणेश'}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-orange-100">
                {deity.name || 'Lord Ganesha'}
              </h2>
              <p className="text-lg text-red-100 leading-relaxed mb-8">
                {deity.description || deity.title || 'The Remover of Obstacles'}
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="relative animate-[slideInFromRight_1s_ease-out]">
              <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src={deity.image_url || 'https://images.unsplash.com/photo-1609688669309-fc95c8c64193?w=600&h=600&fit=crop'}
                  alt={deity.name || 'Lord Ganesha'}
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