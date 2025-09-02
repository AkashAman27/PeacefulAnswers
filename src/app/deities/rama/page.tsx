import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Crown, 
  Star, 
  Heart, 
  Calendar,
  MapPin,
  Sword,
  ChevronLeft,
  Flower2,
  Gift,
  Scroll,
  Mountain,
  ArrowLeft,
  Zap,
  Shield,
  BookOpen,
  Target
} from 'lucide-react'
import { hinduSupabase } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Rama - The Ideal King | Hindu Deity Guide | PeacefulAnswers',
  description: 'Discover the sacred teachings of Rama, the Ideal King and embodiment of dharma. Learn about Ramayana, righteousness, stories, mantras, and spiritual significance.',
  keywords: 'Rama, Raghunatha, dharma, Ramayana, Hindu deity, ideal king, righteousness, avatar',
  openGraph: {
    title: 'Rama - The Ideal King | Hindu Deity Guide',
    description: 'The perfect incarnation who exemplifies dharma, duty, and righteous living.',
    type: 'website',
  }
}

// Function to get Rama data from database
async function getRama() {
  try {
    const { data, error } = await hinduSupabase
      .from('deities')
      .select('*')
      .eq('name', 'Rama')
      .single()
    
    if (error) {
      console.error('Error fetching Rama:', error)
      return null
    }
    
    return data
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export default async function RamaPage() {
  let deity = await getRama()
  
  // Comprehensive fallback data - merge with database data or use as complete fallback
  const fallbackData = {
      name: 'Rama',
      sanskrit_name: 'राम',
      title: 'The Ideal King',
      description: 'The seventh avatar of Vishnu, embodiment of righteousness, dharma, and the perfect human being.',
      image_url: 'https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?w=600&h=600&fit=crop',
      story: 'Lord Rama, the seventh avatar of Vishnu, is revered as Maryada Purushottama - the perfect man who never transgressed the bounds of righteousness. Born as the eldest son of King Dasharatha of Ayodhya, Rama\'s life exemplifies the highest ideals of duty, honor, and moral conduct. The epic Ramayana narrates his heroic journey of rescuing his beloved wife Sita from the demon king Ravana, demonstrating unwavering devotion, courage, and adherence to dharma even in the face of great personal sacrifice.',
      sacred_iconography: [
        {
          name: 'Divine Bow',
          sanskrit: 'धनुष (Dhanush)',
          meaning: 'Symbol of righteousness and dharmic warfare',
          significance: 'Represents the focused mind that aims only at truth and justice'
        },
        {
          name: 'Blue Complexion',
          sanskrit: 'नीलवर्ण (Neelvarna)',
          meaning: 'Infinite nature like the sky and ocean',
          significance: 'Represents the all-pervading consciousness of Vishnu'
        },
        {
          name: 'Royal Crown',
          sanskrit: 'राजमुकुट (Rajmukut)',
          meaning: 'Righteous kingship and dharmic rule',
          significance: 'Symbolizes Ram Rajya, the ideal governance based on dharma'
        },
        {
          name: 'Gentle Smile',
          sanskrit: 'मृदु स्मित (Mridu Smit)',
          meaning: 'Compassionate and loving nature',
          significance: 'Shows the gentle strength of righteousness and divine love'
        }
      ],
      sacred_stories: [
        {
          title: 'The Exile to Forest',
          content: 'When Queen Kaikeyi demanded that Rama be exiled for 14 years to fulfill her boons, Rama immediately accepted without question, showing perfect obedience to his father\'s word and the importance of keeping promises, even at great personal cost.'
        },
        {
          title: 'Building the Bridge to Lanka',
          content: 'With the help of Hanuman and the monkey army, Rama built a bridge across the ocean to Lanka. This represents how dharma, when supported by devotion and righteous allies, can overcome any obstacle, no matter how impossible it seems.'
        },
        {
          title: 'The Golden Deer',
          content: 'When Sita desired the golden deer (actually the demon Mareech in disguise), Rama went to capture it despite sensing danger. This shows how even perfect beings must face the consequences of maya (illusion) in the material world.'
        }
      ],
      divine_symbolism: [
        {
          aspect: 'Maryada Purushottama',
          meaning: 'As the ideal man who never crossed the bounds of dharma, Rama shows that true strength lies in self-restraint and adherence to righteous principles, even when it causes personal suffering.'
        },
        {
          aspect: 'Perfect Son and King',
          meaning: 'Rama\'s absolute obedience to his father and his just rule represent the ideal balance between duty to family and responsibility to society, showing how personal dharma serves the greater good.'
        },
        {
          aspect: 'Divine Protector',
          meaning: 'His mission to eliminate Ravana represents the cosmic principle that divine incarnations appear whenever dharma declines, to restore righteousness and protect the innocent from adharmic forces.'
        }
      ],
      festivals: [
        {
          name: 'Ram Navami',
          date: 'March/April (Chaitra Shukla Navami)',
          description: 'Celebrates the birth of Lord Rama with prayers, bhajans, readings from Ramayana, and processions. Devotees observe fasts and visit temples to seek his blessings for righteous living.'
        },
        {
          name: 'Dussehra (Vijayadashami)',
          date: 'September/October',
          description: 'Commemorates Rama\'s victory over Ravana, symbolizing the triumph of good over evil. Celebrated with burning of Ravana\'s effigies and performances of Ramlila across India.'
        },
        {
          name: 'Diwali',
          date: 'October/November',
          description: 'Celebrates Rama\'s return to Ayodhya after 14 years of exile. The festival of lights represents the joy of the people welcoming their righteous king back home.'
        }
      ],
      temples: [
        {
          name: 'Ram Janmabhoomi, Ayodhya',
          significance: 'The birthplace of Lord Rama, considered the most sacred site for Rama devotees. The new Ram Mandir stands as a magnificent tribute to the beloved deity.'
        },
        {
          name: 'Ramanathaswamy Temple, Rameswaram',
          significance: 'Built at the place where Rama worshipped Shiva before crossing to Lanka. One of the most important pilgrimage sites, combining Rama and Shiva worship.'
        },
        {
          name: 'Hanuman Garhi, Ayodhya',
          significance: 'Dedicated to Hanuman, Rama\'s greatest devotee. Believed to be the place where Hanuman resided to guard Ayodhya and serve Lord Rama.'
        }
      ],
      mantras: [
        {
          sanskrit: 'श्री राम जय राम जय जय राम',
          transliteration: 'Shri Rama Jaya Rama Jaya Jaya Rama',
          meaning: 'Victory to Lord Rama, Victory Victory to Rama',
          benefits: 'Most powerful mantra for protection, purification, and liberation. Regular chanting removes all sins and grants fearlessness.'
        },
        {
          sanskrit: 'ॐ दाशरथये विद्महे सीतावल्लभाय धीमहि तन्नो रामः प्रचोदयात्',
          transliteration: 'Om Dasharathaye Vidmahe Sitavallabhaya Dhimahi Tanno Ramah Prachodayat',
          meaning: 'We meditate on the son of Dasharatha, beloved of Sita. May Lord Rama inspire our consciousness',
          benefits: 'Rama Gayatri Mantra for developing righteousness, dharmic thinking, and divine protection'
        }
      ],
      essential_facts: [
        {
          fact: 'Rama is the seventh avatar of Lord Vishnu, born to eliminate adharma'
        },
        {
          fact: 'He is married to Sita, who is the incarnation of Goddess Lakshmi'
        },
        {
          fact: 'His devoted brother Lakshmana accompanied him throughout the exile'
        },
        {
          fact: 'Hanuman is his greatest devotee and played a crucial role in his victory'
        },
        {
          fact: 'Ram Rajya represents the golden age of perfect governance and justice'
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
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/deities" 
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Deities
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-white animate-[slideInFromLeft_1s_ease-out]">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Crown className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Maryada Purushottama</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sanskrit">
                {deity.sanskrit_name || 'राम'}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                {deity.name || 'Lord Rama'}
              </h2>
              <p className="text-lg text-green-100 leading-relaxed mb-8">
                {deity.description || deity.title || 'The Ideal King'}
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="relative animate-[slideInFromRight_1s_ease-out]">
              <div className="aspect-square bg-gradient-to-br from-yellow-500/20 to-blue-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src={deity.image_url || 'https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?w=600&h=600&fit=crop'}
                  alt={deity.name || 'Lord Rama'}
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
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"></div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Story Section */}
        {deity.story && (
          <section className="animate-fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Story</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
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
                  <div className="aspect-video bg-gradient-to-br from-blue-50 to-green-50 rounded-xl flex items-center justify-center">
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
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-yellow-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {deity.sacred_iconography.map((item: any, index: number) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-sm text-blue-600 mb-3">{item.sanskrit}</p>
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
                  <div className="aspect-video bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl flex items-center justify-center">
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
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-orange-600 mx-auto mb-8"></div>
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
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
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
                  <div className="aspect-video bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl flex items-center justify-center">
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
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deity.festivals.map((festival: any, index: number) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Calendar className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{festival.name}</h3>
                  <p className="text-sm text-blue-600 mb-3">{festival.date}</p>
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
                <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-sanskrit text-gray-900 mb-3">{mantra.sanskrit}</h3>
                    <p className="text-blue-600 font-medium mb-2">{mantra.transliteration}</p>
                    <p className="text-gray-700 italic">{mantra.meaning}</p>
                  </div>
                  <div className="border-t border-blue-200 pt-4">
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
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
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