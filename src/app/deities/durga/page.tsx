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
  Flame
} from 'lucide-react'
import { hinduSupabase } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Maa Durga - The Unassailable Divine Mother | Complete Guide | PeacefulAnswers',
  description: 'Comprehensive guide to Maa Durga, the invincible goddess. Explore her origins, nine forms (Navadurga), Das Mahavidyas, iconography, rituals, and profound philosophical significance.',
  keywords: 'Maa Durga, Divine Mother, Shakti, Navadurga, Nine Forms, Das Mahavidyas, Hindu Goddess, Durga Puja, Divine Feminine, Cosmic Energy, Mahishasuramardini',
  openGraph: {
    title: 'Maa Durga - The Unassailable Divine Mother | Complete Guide',
    description: 'Discover the profound significance of Maa Durga, her nine forms, mythology, and role as the supreme cosmic energy.',
    type: 'website',
  }
}

// Function to get Durga data from database
async function getDurga() {
  try {
    const { data, error } = await hinduSupabase
      .from('deities')
      .select('*')
      .eq('name', 'Durga')
      .single()
    
    if (error) {
      console.error('Error fetching Durga:', error)
      return null
    }
    
    return data
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export default async function DurgaPage() {
  let deity = await getDurga()
  
  // Comprehensive fallback data - merge with database data or use as complete fallback
  const fallbackData = {
      name: 'Maa Durga',
      sanskrit_name: 'दुर्गा माता',
      title: 'The Unassailable Divine Mother',
      description: 'The supreme cosmic energy manifested as the Divine Mother, representing the ultimate reality itself. Durga transcends being a mere deity to become Adi-Anant - without beginning or end - the source from which the entire pantheon of gods emerges.',
      image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop',
      story: 'In the cosmic narrative of Shaktism, Durga embodies the primordial Shakti - the active, manifested form of divine energy that enables creation, preservation, and destruction. When the buffalo-demon Mahishasura, representing chaos, ego, and ignorance, threatened the cosmic order with his boon of invincibility, the gods\' combined energies coalesced to create Durga. This central myth is a profound allegory: Mahishasura symbolizes insurmountable darkness, while Durga\'s serene expression during battle represents the triumph of composed wisdom over chaotic forces. Her victory demonstrates that no darkness can withstand the unified power of divine consciousness.',
      sacred_iconography: [
        {
          name: 'Trishul (Trident)',
          sanskrit: 'त्रिशूल',
          meaning: 'Gift from Lord Shiva - three-pointed divine weapon',
          significance: 'Symbolizes courage and the power to overcome the three obstacles of life: ignorance, desire, and ego'
        },
        {
          name: 'Chakra (Discus)',
          sanskrit: 'चक्र',
          meaning: 'Gift from Lord Vishnu - spinning divine weapon',
          significance: 'Represents dharma (righteous duty) and the wheel of cosmic order'
        },
        {
          name: 'Divine Sword',
          sanskrit: 'खड्ग',
          meaning: 'Sharp blade of divine wisdom',
          significance: 'Symbolizes the sharpness of human intellect needed to overcome negativity and sever attachments'
        },
        {
          name: 'Sacred Lotus',
          sanskrit: 'पद्म',
          meaning: 'Gift from Brahma - pure flower of enlightenment',
          significance: 'Represents detachment from the material world, blooming in muddy water without being tainted'
        },
        {
          name: 'Lion Mount',
          sanskrit: 'सिंह वाहन',
          meaning: 'The king of beasts as divine vehicle',
          significance: 'Represents fearlessness and mastery over unbridled, animalistic impulses and inner wild nature'
        },
        {
          name: 'Conch Shell',
          sanskrit: 'शंख',
          meaning: 'Sacred sound-producing instrument',
          significance: 'Symbolizes the necessity of performing duties with happiness and cheerfulness'
        },
        {
          name: 'Divine Mace',
          sanskrit: 'गदा',
          meaning: 'Gift from Kuvera - powerful club weapon',
          significance: 'Designed to inspire devotion and loyalty to the goddess'
        },
        {
          name: 'Thunderbolt',
          sanskrit: 'वज्र',
          meaning: 'Gift from Indra - indestructible weapon',
          significance: 'Symbolizes unshakability and instills confidence in followers'
        },
        {
          name: 'Multi-Armed Form',
          sanskrit: 'बहुभुजा',
          meaning: 'Eight to eighteen arms holding divine weapons',
          significance: 'Represents multifarious powers and ability to protect devotees from all directions simultaneously'
        }
      ],
      sacred_stories: [
        {
          title: 'Etymology: The Unassailable One',
          content: 'The name "Durga" derives from Sanskrit roots dur (difficult) and gam (to pass), meaning "impassable" or "invincible." This linguistic foundation establishes her as a formidable force that cannot be overcome, representing the ultimate protection against all forms of negativity and evil.'
        },
        {
          title: 'Ancient Origins: From Indus to Vedas',
          content: 'Evidence suggests Durga\'s worship dates back to the Indus Valley Civilization (3000 BCE), with a proto-Durga war goddess associated with tigers found on seals at Kalibangan. Her reverence continued through the Devi Suktam hymn in the Rig Veda, establishing continuity of the feminine divine principle for millennia.'
        },
        {
          title: 'The Mahishasura Myth: Cosmic Allegory',
          content: 'The central narrative of Durga slaying Mahishasura is a profound allegory. The buffalo-demon, with his boon of invincibility against any man or god, represents insurmountable chaos and ego. Durga\'s serene expression while piercing his heart shows that destruction of evil is not anger but composed wisdom - the triumph of conscious action over unconscious forces.'
        },
        {
          title: 'Shakti vs Durga: Philosophical Distinction',
          content: 'While often used synonymously, Shakti is the inherent, potential energy of the universe, while Durga is its external, manifested form. This can be understood as a still lake (Shakti) and the gentle breeze (Durga) that makes it ripple and come alive, transforming potential into purposeful, intelligent action.'
        },
        {
          title: 'The Navadurga Journey',
          content: 'The nine forms of Durga represent a sequential spiritual evolution from material existence to divine liberation. Each form - from Shailaputri\'s foundation to Siddhidatri\'s fulfillment - guides devotees through distinct stages of inner awakening and transformation, offering a tangible roadmap for spiritual seekers.'
        },
        {
          title: 'Sacred Rituals: Living Philosophy',
          content: 'Unique rituals like using soil from a courtesan\'s house in making Durga idols demonstrate her non-discriminatory nature. Akalbodhan (untimely invocation) by Lord Rama shows sincere devotion transcends rules. These practices embody profound philosophical principles that divinity is universal and responsive to pure devotion.'
        }
      ],
      divine_symbolism: [
        {
          aspect: 'Primordial Shakti - Ultimate Reality',
          meaning: 'In Shaktism, Durga transcends being a mere deity to become the ultimate reality itself - Adi-Anant (without beginning or end). She is the source from which Brahma, Vishnu, and Shiva are born, embodying maya (illusion), shakti (power), and prakriti (nature) - the fundamental components of the manifested universe.'
        },
        {
          aspect: 'Active Cosmic Energy',
          meaning: 'While Shakti represents potential energy like a still lake, Durga is the active force - the breeze that makes it ripple. She demonstrates that without this external manifestation, pure consciousness cannot create, protect, or destroy; it just "is." She transforms potential into purposeful, intelligent, compassionate action.'
        },
        {
          aspect: 'Compassionate Destruction',
          meaning: 'Durga\'s serene expression while destroying demons teaches that necessary destruction should come from wisdom, not anger. Her actions represent composed wisdom overcoming chaotic forces - showing that when confronting negativity, we should act with determined compassion rather than emotional reactivity.'
        },
        {
          aspect: 'Universal Non-Discrimination',
          meaning: 'Sacred rituals like using soil from socially marginalized spaces powerfully demonstrate that Durga\'s divine presence transcends all societal norms and judgments. Her philosophy teaches that divinity is all-encompassing, inclusive, and present in all places and people regardless of social standing.'
        },
        {
          aspect: 'Mastery Over Inner Nature',
          meaning: 'Her lion mount represents our inner wild nature and unbridled desires. Durga riding the lion symbolizes the spiritual mastery we must achieve over our inner beast - not by suppressing it, but by directing its immense power toward divine purposes and righteous action.'
        },
        {
          aspect: 'Divine Feminine in Every Woman',
          meaning: 'The Kumari Puja ritual of worshipping young girls as living goddesses demonstrates the philosophical belief that Shakti - divine feminine energy - resides within every woman. This practice actively connects abstract spiritual philosophy to lived reality, affirming the inherent sacredness of the feminine principle.'
        }
      ],
      festivals: [
        {
          name: 'Sharad Navratri',
          date: 'September/October (Nine Sacred Nights)',
          description: 'The most significant celebration honoring Durga\'s nine forms (Navadurga), representing a sequential spiritual journey from material existence to divine liberation. Each night is dedicated to a specific manifestation, with devotees wearing corresponding colors and performing prescribed rituals that guide the soul through stages of awakening.'
        },
        {
          name: 'Durga Puja (Bengal)',
          date: 'September/October (Last 4 days of Navratri)',
          description: 'Elaborate celebration especially in Bengal featuring artistic pandals, cultural programs, and community gatherings. UNESCO recognized as Intangible Cultural Heritage, this festival represents the perfect synthesis of art, devotion, and cultural unity in honoring the Divine Mother.'
        },
        {
          name: 'Vijayadashami (Dussehra)',
          date: 'Tenth day after Navratri',
          description: 'Celebrates Durga\'s ultimate victory over Mahishasura, symbolizing the triumph of good over evil. Marks the culmination of the nine-day spiritual journey with the celebration of dharma\'s victory over adharma through divine intervention.'
        },
        {
          name: 'Chaitra Navratri',
          date: 'March/April (Spring Festival)',
          description: 'Spring celebration of the nine forms of Durga, observed with fasting, prayers, and spiritual practices. This seasonal festival aligns with nature\'s renewal, invoking the goddess\'s blessings for new beginnings and spiritual growth.'
        },
        {
          name: 'Akalbodhan',
          date: 'Autumn (Untimely Invocation)',
          description: 'Special autumn worship initiated by Lord Rama when he invoked Durga outside the traditional spring season to gain power to defeat Ravana. This demonstrates that sincere devotion can invoke the divine at any time, transcending conventional rules and seasons.'
        }
      ],
      temples: [
        {
          name: 'Vaishno Devi Temple, Jammu',
          significance: 'Sacred cave shrine where Durga manifested as Vaishno Devi. One of the most visited pilgrimage sites in India, requiring a challenging trek that tests devotion.'
        },
        {
          name: 'Kamakhya Temple, Assam',
          significance: 'Ancient Shakti Pitha where Durga is worshipped in her primal form. Famous for tantric worship and the annual Ambubachi Mela celebrating divine feminine power.'
        },
        {
          name: 'Kalighat Temple, Kolkata',
          significance: 'One of the 51 Shakti Pithas where Sati\'s toe fell. Important center for Durga worship in Bengal, where she is revered as the protective mother of the city.'
        }
      ],
      mantras: [
        {
          sanskrit: 'ॐ दुं दुर्गायै नमः',
          transliteration: 'Om Dum Durgayai Namah',
          meaning: 'Om, salutations to Goddess Durga',
          benefits: 'Powerful seed mantra for protection from all dangers and negative forces. The bija mantra "Dum" activates the fierce protective energy of the Divine Mother, creating an impenetrable shield around the devotee.'
        },
        {
          sanskrit: 'ॐ गिरिजायै विद्महे शिवप्रियायै धीमहि तन्नो दुर्गा प्रचोदयात्',
          transliteration: 'Om Girijayai Vidmahe Shivapriyayai Dhimahi Tanno Durga Prachodayat',
          meaning: 'We meditate on the daughter of the mountain, beloved of Shiva. May Durga inspire our consciousness',
          benefits: 'Durga Gayatri Mantra for developing inner strength, courage, and spiritual protection. Regular recitation awakens the dormant Shakti within and establishes divine connection.'
        },
        {
          sanskrit: 'या देवी सर्वभूतेषु शक्ति रूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥',
          transliteration: 'Ya Devi Sarvabhuteshu Shakti Rupena Samsthita, Namastasyai Namastasyai Namastasyai Namo Namah',
          meaning: 'The Goddess who resides in all beings in the form of power, salutations to her, salutations to her, salutations to her',
          benefits: 'Sacred verse from Devi Mahatmya acknowledging the universal presence of divine feminine energy. Cultivates recognition of Shakti in all forms of existence and develops reverence for the cosmic mother.'
        },
        {
          sanskrit: 'सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके। शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते॥',
          transliteration: 'Sarva Mangala Mangalye Shive Sarvartha Sadhike, Sharanye Tryambake Gauri Narayani Namostute',
          meaning: 'O auspicious among all auspicious, O Shiva, O fulfiller of all purposes, O refuge, O three-eyed one, O Gauri, O Narayani, salutations to you',
          benefits: 'Comprehensive prayer recognizing Durga in her various forms and aspects. Invokes complete divine protection and fulfillment of both material and spiritual desires through surrender to the Divine Mother.'
        }
      ],
      essential_facts: [
        {
          fact: 'Etymology: "Durga" means "unassailable" from Sanskrit dur (difficult) + gam (to pass), establishing her as an invincible protective force'
        },
        {
          fact: 'Ancient Origins: Worship traces back to Indus Valley Civilization (3000 BCE) with proto-Durga seals found at Kalibangan'
        },
        {
          fact: 'Cosmic Role: In Shaktism, she represents the ultimate reality (Adi-Anant) - the source from which Brahma, Vishnu, and Shiva emerge'
        },
        {
          fact: 'Philosophical Distinction: While Shakti is potential energy (still lake), Durga is active manifestation (breeze that creates ripples)'
        },
        {
          fact: 'Navadurga Journey: Her nine forms represent sequential spiritual evolution from material existence to divine liberation'
        },
        {
          fact: 'Das Mahavidyas: She is the first of ten tantric wisdom goddesses, each representing different cosmic powers'
        },
        {
          fact: 'Multi-Armed Symbolism: 8-18 arms carrying divine weapons represent protection from all directions and multifarious divine powers'
        },
        {
          fact: 'Sacred Rituals: Unique practices like using soil from marginalized areas demonstrate her non-discriminatory universal presence'
        },
        {
          fact: 'Mahishasura Allegory: The demon represents ego and chaos; her serene victory shows composed wisdom triumphing over unconscious forces'
        },
        {
          fact: 'Living Philosophy: Kumari Puja worship of young girls as goddesses demonstrates Shakti residing within every woman'
        },
        {
          fact: 'Global Celebration: Durga Puja is UNESCO Intangible Cultural Heritage, celebrated in over 50 countries worldwide'
        },
        {
          fact: 'Cross-Sectional Reverence: Worshipped as Mahamaya in Vaishnavism and as a form of Lakshmi, showing her universal appeal'
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
                <Shield className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Mahishasura Mardini</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sanskrit">
                {deity.sanskrit_name || 'दुर्गा'}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-red-100">
                {deity.name || 'Maa Durga'}
              </h2>
              <p className="text-lg text-pink-100 leading-relaxed mb-8">
                {deity.description || deity.title || 'The Invincible Mother'}
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="relative animate-[slideInFromRight_1s_ease-out]">
              <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src={deity.image_url || 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop'}
                  alt={deity.name || 'Maa Durga'}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deity.sacred_iconography.map((item: any, index: number) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-sm text-red-600 mb-3">{item.sanskrit}</p>
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

        {/* Navadurga - Nine Forms Section */}
        <section className="animate-fadeIn animate-delay-900">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Navadurga - The Nine Sacred Forms</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-pink-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8">
              Experience the complete spiritual journey through the nine manifestations of Maa Durga,
              each representing a unique stage of inner transformation and divine awakening.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Shailaputri",
                sanskrit: "शैलपुत्री",
                day: 1,
                color: "Red",
                chakra: "Muladhara",
                meaning: "Daughter of Mountains",
                slug: "shailaputri",
                description: "Foundation of spiritual practice and divine grounding energy",
                colorClass: "from-red-600 to-red-500"
              },
              {
                name: "Brahmacharini",
                sanskrit: "ब्रह्मचारिणी",
                day: 2,
                color: "Royal Blue",
                chakra: "Svadhisthana",
                meaning: "The Ascetic",
                slug: "brahmacharini",
                description: "Goddess of spiritual discipline and divine knowledge",
                colorClass: "from-blue-800 to-blue-600"
              },
              {
                name: "Chandraghanta",
                sanskrit: "चन्द्रघण्टा",
                day: 3,
                color: "Yellow",
                chakra: "Manipura",
                meaning: "Bearer of Moon Bell",
                slug: "chandraghanta",
                description: "Serene warrior who brings peace through strength",
                colorClass: "from-yellow-500 to-yellow-400"
              },
              {
                name: "Kushmanda",
                sanskrit: "कूष्माण्डा",
                day: 4,
                color: "Orange",
                chakra: "Anahata",
                meaning: "Creator of Universe",
                slug: "kushmanda",
                description: "Cosmic creator who manifested the universe with her smile",
                colorClass: "from-orange-600 to-orange-500"
              },
              {
                name: "Skandamata",
                sanskrit: "स्कन्दमाता",
                day: 5,
                color: "White",
                chakra: "Vishuddha",
                meaning: "Mother of Skanda",
                slug: "skandamata",
                description: "Divine mother embodying nurturing protection and wisdom",
                colorClass: "from-gray-100 to-gray-50 text-gray-800 border-2 border-gray-300"
              },
              {
                name: "Katyayani",
                sanskrit: "कात्यायनी",
                day: 6,
                color: "Red",
                chakra: "Ajna",
                meaning: "Warrior Slayer",
                slug: "katyayani",
                description: "Fierce warrior who destroys evil and grants courage",
                colorClass: "from-red-700 to-red-600"
              },
              {
                name: "Kalaratri",
                sanskrit: "कालरात्रि",
                day: 7,
                color: "Royal Blue",
                chakra: "Sahasrara",
                meaning: "Night of Time",
                slug: "kalaratri",
                description: "Dark destroyer of ignorance and negative energies",
                colorClass: "from-blue-900 to-blue-700"
              },
              {
                name: "Mahagauri",
                sanskrit: "महागौरी",
                day: 8,
                color: "Pink",
                chakra: "All Chakras",
                meaning: "The Radiant One",
                slug: "mahagauri",
                description: "Pure radiant goddess bringing spiritual purification",
                colorClass: "from-pink-600 to-pink-500"
              },
              {
                name: "Siddhidatri",
                sanskrit: "सिद्धिदात्री",
                day: 9,
                color: "Purple",
                chakra: "All Chakras",
                meaning: "Giver of Siddhis",
                slug: "siddhidatri",
                description: "Bestower of supernatural powers and spiritual mastery",
                colorClass: "from-purple-600 to-purple-500"
              }
            ].map((form, index) => (
              <Link
                key={index}
                href={`/deities/durga/${form.slug}`}
                className="group block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-red-100 overflow-hidden"
              >
                <div className={`p-6 bg-gradient-to-r ${form.colorClass} ${form.color === 'White' ? 'text-gray-800' : 'text-white'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 ${form.color === 'White' ? 'bg-gray-800 text-white' : 'bg-white/20'} rounded-full flex items-center justify-center font-bold`}>
                      {form.day}
                    </div>
                    <div className={`text-sm font-medium px-3 py-1 rounded-full ${
                      form.color === 'White' ? 'bg-gray-800 text-white' : 'bg-white/20'
                    }`}>
                      Day {form.day}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{form.name}</h3>
                  <p className="text-lg font-semibold mb-1">{form.sanskrit}</p>
                  <p className={`text-sm ${form.color === 'White' ? 'text-gray-600' : 'text-white/80'}`}>{form.meaning}</p>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">{form.description}</p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-600">Color:</span>
                      <span className="text-gray-800">{form.color}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-600">Chakra:</span>
                      <span className="text-gray-800">{form.chakra}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-red-100 flex items-center justify-between">
                    <span className="text-sm text-red-600 font-medium">
                      Explore Full Details
                    </span>
                    <svg className="w-5 h-5 text-red-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-red-800 mb-4">🌺 Begin Your Spiritual Journey</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Follow the nine-day path of transformation, where each form of Maa Durga guides you
                through a unique stage of spiritual awakening and inner evolution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/deities/durga/shailaputri"
                  className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                >
                  Start with Shailaputri →
                </Link>
                <Link
                  href="/festivals/navratri"
                  className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors"
                >
                  Learn About Navratri
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}