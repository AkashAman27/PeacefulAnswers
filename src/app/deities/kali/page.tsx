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
  Eye,
  Flame,
  Moon
} from 'lucide-react'
import { hinduSupabase } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Kali - The Fierce Protector | Hindu Deity Guide | PeacefulAnswers',
  description: 'Discover the sacred teachings of Kali, the Fierce Protector and goddess of time and transformation. Learn about liberation from fear, stories, mantras, and spiritual significance.',
  keywords: 'Kali, Mahakali, time, transformation, Hindu goddess, fierce protector, liberation, dark mother',
  openGraph: {
    title: 'Kali - The Fierce Protector | Hindu Deity Guide',
    description: 'The dark goddess who destroys ego and fear to liberate devotees from illusion.',
    type: 'website',
  }
}

// Function to get Kali data from database
async function getKali() {
  try {
    const { data, error } = await hinduSupabase
      .from('deities')
      .select('*')
      .eq('name', 'Kali')
      .single()
    
    if (error) {
      console.error('Error fetching Kali:', error)
      return null
    }
    
    return data
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export default async function KaliPage() {
  let deity = await getKali()
  
  // Comprehensive fallback data - merge with database data or use as complete fallback
  const fallbackData = {
      name: 'Kali',
      sanskrit_name: 'काली',
      title: 'The Dark Mother',
      description: 'The fierce goddess of time, change, and destruction who liberates devotees from ego and fear.',
      image_url: 'https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?w=600&h=600&fit=crop',
      story: 'Maa Kali is the fierce and terrifying form of the Divine Mother, born from Durga\'s forehead during the battle with demons. Her dark complexion represents the void from which all creation emerges and into which it dissolves. Despite her frightening appearance, she is the most compassionate mother who protects her devotees from all harm. Standing on Shiva\'s chest, she represents the dynamic aspect of consciousness activating the static pure consciousness.',
      sacred_iconography: [
        {
          name: 'Dark Complexion',
          sanskrit: 'कृष्ण वर्ण (Krishna Varna)',
          meaning: 'The void and infinite nature of time',
          significance: 'Represents the primordial darkness from which all creation emerges'
        },
        {
          name: 'Severed Head',
          sanskrit: 'मुण्डमाला (Mundmala)',
          meaning: 'Head of ego and ignorance',
          significance: 'Symbolizes the destruction of false identity and liberation from ego'
        },
        {
          name: 'Sword',
          sanskrit: 'खड्ग (Khadga)',
          meaning: 'Sharp weapon of discrimination',
          significance: 'Cuts through ignorance and destroys negative forces'
        },
        {
          name: 'Standing on Shiva',
          sanskrit: 'शिवस्थिता (Shivasthita)',
          meaning: 'Dynamic energy over static consciousness',
          significance: 'Represents Shakti activating and energizing Shiva consciousness'
        }
      ],
      sacred_stories: [
        {
          title: 'Birth from Durga\'s Forehead',
          content: 'During the battle with demons, when Durga\'s anger reached its peak, the fierce goddess Kali emerged from her forehead. This birth represents how extreme situations call forth the most powerful aspects of the Divine Mother to protect righteousness.'
        },
        {
          title: 'Destroyer of Raktabija',
          content: 'When the demon Raktabija\'s blood created new demons upon touching the ground, Kali drank all his blood before it could fall, ensuring his complete destruction. This shows her role in completely eliminating evil at its source.'
        },
        {
          title: 'The Dance on Shiva',
          content: 'After defeating the demons, Kali began her cosmic dance of destruction. When she stepped on Shiva lying beneath, she realized her action and stuck out her tongue in surprise, showing even the fierce mother has compassion and awareness.'
        }
      ],
      divine_symbolism: [
        {
          aspect: 'Destroyer of Time',
          meaning: 'As Maha Kali, she represents the ultimate destroyer of time itself. She teaches that everything in the material world is temporary and only the divine consciousness is eternal.'
        },
        {
          aspect: 'Liberation from Fear',
          meaning: 'Her fierce appearance destroys all fears by showing that the ultimate reality is beyond all dualities. Those who surrender to her transcend all worldly fears and anxieties.'
        },
        {
          aspect: 'Cosmic Mother',
          meaning: 'Despite her terrifying form, she is the most loving mother who protects her children from all dangers. Her fierce love burns away everything that prevents spiritual growth.'
        }
      ],
      festivals: [
        {
          name: 'Kali Puja',
          date: 'October/November (New Moon)',
          description: 'Major festival especially in Bengal, when Kali is worshipped with elaborate rituals, offerings, and midnight ceremonies. Celebrated with great devotion on the dark moon night when her energy is most powerful.'
        },
        {
          name: 'Kali Chaudas',
          date: 'Day before Diwali',
          description: 'Observed to ward off negative energies and evil spirits, especially popular in Gujarat and Maharashtra. Devotees seek protection from dark forces and spiritual obstacles.'
        },
        {
          name: 'Tuesday Worship',
          date: 'Every Tuesday',
          description: 'Special day for Kali worship when devotees visit temples and perform tantric rituals for protection and liberation. Her energy is considered most accessible on this day.'
        }
      ],
      temples: [
        {
          name: 'Kalighat Temple, Kolkata',
          significance: 'One of the 51 Shakti Pithas where Sati\'s toe fell. Most famous Kali temple and center of Kali worship in Bengal, where she is revered as the protective mother of the city.'
        },
        {
          name: 'Dakshineswar Temple, Kolkata',
          significance: 'Famous temple where Sri Ramakrishna worshipped Kali as Divine Mother. Site of profound spiritual experiences and teachings about the motherhood of God.'
        },
        {
          name: 'Kamakhya Temple, Assam',
          significance: 'Ancient Shakti Pitha where Kali is worshipped in her fierce form. Center for tantric worship and practices, famous for the annual Ambubachi Mela.'
        }
      ],
      mantras: [
        {
          sanskrit: 'ॐ क्रीं कालिकायै नमः',
          transliteration: 'Om Kreem Kalikayai Namah',
          meaning: 'Salutations to Goddess Kali',
          benefits: 'Powerful seed mantra for protection from all dangers and liberation from fear. Invokes the fierce protective energy of the Dark Mother.'
        },
        {
          sanskrit: 'ॐ काली काली महाकाली कालिके परमेश्वरि',
          transliteration: 'Om Kali Kali Mahakali Kalike Parameshwari',
          meaning: 'Om Kali, Great Kali, Supreme Goddess of Time',
          benefits: 'Invocation to the great goddess of time and transformation for spiritual awakening and liberation'
        }
      ],
      essential_facts: [
        {
          fact: 'Kali emerged from Durga\'s forehead during the battle with demons'
        },
        {
          fact: 'Her dark complexion represents the primordial void and infinite time'
        },
        {
          fact: 'She stands on Shiva, representing dynamic energy over static consciousness'
        },
        {
          fact: 'She is worshipped for liberation from fear, ego, and worldly attachments'
        },
        {
          fact: 'Kali Puja is celebrated on the new moon night when her power is strongest'
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
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-gray-50">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/deities" 
            className="inline-flex items-center text-gray-600 hover:text-purple-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Deities
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-gray-600 text-white py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-white animate-[slideInFromLeft_1s_ease-out]">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Star className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Maha Kali</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sanskrit">
                {deity.sanskrit_name || 'काली'}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-purple-100">
                {deity.name || 'Maa Kali'}
              </h2>
              <p className="text-lg text-indigo-100 leading-relaxed mb-8">
                {deity.description || deity.title || 'The Dark Mother'}
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="relative animate-[slideInFromRight_1s_ease-out]">
              <div className="aspect-square bg-gradient-to-br from-gray-500/20 to-purple-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src={deity.image_url || 'https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?w=600&h=600&fit=crop'}
                  alt={deity.name || 'Maa Kali'}
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
        <div className="absolute top-20 left-10 w-20 h-20 bg-indigo-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl"></div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Story Section */}
        {deity.story && (
          <section className="animate-fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Story</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-8"></div>
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
                  <div className="aspect-video bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl flex items-center justify-center">
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
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {deity.sacred_iconography.map((item: any, index: number) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-sm text-purple-600 mb-3">{item.sanskrit}</p>
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
                  <div className="aspect-video bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl flex items-center justify-center">
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
              <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-purple-600 mx-auto mb-8"></div>
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
                  <div className="aspect-video bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl flex items-center justify-center">
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
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deity.festivals.map((festival: any, index: number) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Calendar className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{festival.name}</h3>
                  <p className="text-sm text-purple-600 mb-3">{festival.date}</p>
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
                <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-sanskrit text-gray-900 mb-3">{mantra.sanskrit}</h3>
                    <p className="text-purple-600 font-medium mb-2">{mantra.transliteration}</p>
                    <p className="text-gray-700 italic">{mantra.meaning}</p>
                  </div>
                  <div className="border-t border-purple-200 pt-4">
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
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
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