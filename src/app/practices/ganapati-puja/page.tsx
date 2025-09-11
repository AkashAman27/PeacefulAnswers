import Link from 'next/link'
import { 
  ArrowLeft,
  Clock,
  Users,
  Flower2,
  Flame,
  Star,
  BookOpen,
  Heart,
  Sparkles
} from 'lucide-react'
import { Metadata } from 'next'
import SmartRecommendationsSimple from '@/components/SmartRecommendationsSimple'
import { peacefulAnswersContentDatabase, getContentById } from '@/data/contentDatabase'

export const metadata: Metadata = {
  title: 'Ganapati Puja - Complete Guide & Methods | Hindu Practice | PeacefulAnswers',
  description: 'Learn the complete Ganapati Puja methods, procedures, and Ganesha Arti. Step-by-step guide for performing Ganesha worship with mantras, offerings, and rituals.',
  keywords: 'Ganapati Puja, Ganesha worship, Hindu rituals, Ganesha Arti, puja methods, Lord Ganesha, Hindu practices',
  openGraph: {
    title: 'Ganapati Puja - Complete Guide & Methods | Hindu Practice',
    description: 'Complete guide to Ganapati Puja with step-by-step methods, mantras, and the sacred Ganesha Arti.',
    type: 'website',
  }
}

export default function GanapatiPujaPage() {
  // Get current content for recommendations
  const currentContent = getContentById('ganapati-puja')!
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/practices" 
            className="inline-flex items-center text-gray-600 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Practices
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6">
            <span className="text-6xl mb-4 block">🙏</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Ganapati Puja</h1>
          <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-4xl mx-auto">
            Complete Guide to Lord Ganesha Worship • Methods, Mantras & Sacred Arti
          </p>
          
          {/* Quick Info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>30-60 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Family Practice</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              <span>Daily Ritual</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        
        {/* Overview */}
        <section>
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-orange-800 mb-6">About Ganapati Puja</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ganapati Puja is the sacred worship of Lord Ganesha, the remover of obstacles and lord of beginnings. 
              This ancient practice invokes Ganesha's blessings for success, wisdom, and the removal of barriers in 
              all endeavors. Traditionally performed at the start of any new venture, ceremony, or daily worship.
            </p>
            <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-6">
              <h3 className="font-bold text-orange-800 mb-3">🌟 Benefits of Ganapati Puja</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Removes Obstacles:</strong> Clears physical and spiritual barriers</li>
                <li>• <strong>Brings Success:</strong> Ensures favorable outcomes in new ventures</li>
                <li>• <strong>Enhances Wisdom:</strong> Develops discrimination and intelligence</li>
                <li>• <strong>Grants Prosperity:</strong> Attracts material and spiritual abundance</li>
                <li>• <strong>Provides Protection:</strong> Creates a shield of divine grace</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Required Items */}
        <section>
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-orange-800 mb-8 flex items-center gap-3">
              <Flower2 className="w-8 h-8" />
              Required Items for Puja
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-orange-50 rounded-2xl p-6">
                <h3 className="font-bold text-orange-800 mb-4">🖼️ Deity & Setup</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Ganesha idol or picture</li>
                  <li>• Clean cloth for altar</li>
                  <li>• Small throne or platform</li>
                  <li>• Oil lamp or diya</li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-2xl p-6">
                <h3 className="font-bold text-yellow-800 mb-4">🌺 Offerings</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Red flowers (preferably hibiscus)</li>
                  <li>• Durva grass (21 blades)</li>
                  <li>• Modak or sweets</li>
                  <li>• Fresh fruits (especially banana)</li>
                  <li>• Rice grains</li>
                </ul>
              </div>
              <div className="bg-pink-50 rounded-2xl p-6">
                <h3 className="font-bold text-pink-800 mb-4">🕯️ Ritual Items</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Incense sticks (agarbatti)</li>
                  <li>• Camphor</li>
                  <li>• Sacred thread (janeu)</li>
                  <li>• Kumkum and turmeric</li>
                  <li>• Sandalwood paste</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Method */}
        <section>
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-orange-800 mb-8 flex items-center gap-3">
              <BookOpen className="w-8 h-8" />
              Step-by-Step Puja Method
            </h2>
            
            <div className="space-y-8">
              {/* Preparation */}
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">1. Preparation (Sankalpa)</h3>
                <div className="bg-orange-50 rounded-lg p-4 mb-4">
                  <p className="text-gray-700 mb-3">
                    <strong>Begin with purification:</strong> Take a bath, wear clean clothes, and sit facing east or north.
                  </p>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm text-orange-800 font-medium">Sankalpa Mantra:</p>
                    <p className="text-sm text-gray-700 italic">
                      "Om Gam Ganapataye Namaha, Shrí Ganesha prasanna bhava, sarva vighnani nivaaraya nivaaraya"
                    </p>
                  </div>
                </div>
              </div>

              {/* Invocation */}
              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">2. Invocation (Avahana)</h3>
                <div className="bg-yellow-50 rounded-lg p-4 mb-4">
                  <p className="text-gray-700 mb-3">
                    <strong>Invoke Lord Ganesha:</strong> Ring the bell and invite Ganesha to accept your worship.
                  </p>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm text-yellow-800 font-medium">Invocation Mantra:</p>
                    <p className="text-sm text-gray-700 italic mb-2">
                      "Aagaccha Ganapati deva, puja grihana Gajanan"
                    </p>
                    <p className="text-xs text-gray-600">
                      (Come, O Lord Ganapati, please accept this worship, O Gajanan)
                    </p>
                  </div>
                </div>
              </div>

              {/* Main Worship */}
              <div className="border-l-4 border-pink-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">3. Main Worship (Shodashopachara)</h3>
                <div className="bg-pink-50 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-pink-800 mb-2">Offerings in Order:</h4>
                      <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                        <li>Dhyana (Meditation)</li>
                        <li>Asana (Seat offering)</li>
                        <li>Padya (Washing feet)</li>
                        <li>Arghya (Water offering)</li>
                        <li>Achamana (Sip of water)</li>
                        <li>Snana (Sacred bath)</li>
                        <li>Vastra (Cloth offering)</li>
                        <li>Upavita (Sacred thread)</li>
                      </ol>
                    </div>
                    <div>
                      <h4 className="font-semibold text-pink-800 mb-2">Continued:</h4>
                      <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700" start={9}>
                        <li>Gandha (Sandalwood paste)</li>
                        <li>Pushpa (Flowers)</li>
                        <li>Dhupa (Incense)</li>
                        <li>Dipa (Light/Lamp)</li>
                        <li>Naivedya (Food offering)</li>
                        <li>Achamana (Final water)</li>
                        <li>Tambula (Betel leaves)</li>
                        <li>Dakshina (Offering)</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arti */}
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">4. Arti (Flame offering)</h3>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-gray-700 mb-3">
                    <strong>Light the lamp:</strong> Perform arti with camphor or oil lamp in circular motions while chanting.
                  </p>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm text-green-800 font-medium">During Arti, chant:</p>
                    <p className="text-sm text-gray-700 italic">
                      "Jay Ganesha, Jay Ganesha, Jay Gajanana"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sacred Ganesha Arti */}
        <section>
          <div className="bg-gradient-to-br from-orange-100 via-yellow-100 to-red-100 rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-red-800 mb-8 flex items-center gap-3">
              <Flame className="w-8 h-8" />
              Sacred Ganesha Arti
            </h2>
            
            <div className="bg-white rounded-2xl p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-red-800 mb-2">🎵 Sukhkarta Dukhharata Arti</h3>
                <p className="text-sm text-gray-600">The most popular Ganesha Arti</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Sanskrit/Hindi */}
                <div>
                  <h4 className="font-semibold text-orange-800 mb-4">Sanskrit/Hindi</h4>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <div className="space-y-4 text-base text-gray-800">
                      <p className="leading-relaxed font-medium">
                        सुखकर्ता दुःखहर्ता वार्ता विघ्नाची।<br/>
                        नुरवी पुरवी प्रेम कृपा जयाची।।<br/>
                        सर्वकलाहीन्ती ह्रदयी वसन्ती।<br/>
                        साधुजन पकुर्वन्ती संपदा देवाची।।
                      </p>
                      <p className="leading-relaxed font-bold text-red-700">
                        जयदेव जयदेव जय मंगलमूर्ति।<br/>
                        दर्शन मात्रे मन कामना पुर्ति।।
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* English Translation */}
                <div>
                  <h4 className="font-semibold text-orange-800 mb-4">English Translation</h4>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <div className="space-y-4 text-base text-gray-800">
                      <p className="leading-relaxed">
                        <em>You are the creator of happiness, destroyer of sorrows,<br/>
                        You fulfill all desires with your loving grace.<br/>
                        You reside in the hearts of all devotees,<br/>
                        Blessing the righteous with divine wealth.</em>
                      </p>
                      <p className="leading-relaxed font-semibold text-red-600">
                        <em>Victory to you, O auspicious form!<br/>
                        Just by your sight, all desires are fulfilled.</em>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-yellow-50 rounded-lg p-4">
                <p className="text-sm text-yellow-800 mb-4">
                  <strong>How to perform Arti:</strong> Light camphor or oil lamp, move in clockwise circles 
                  while singing this arti. Ring bells during the chorus "Jaydev Jaydev" and conclude with 
                  offering flowers and taking blessings.
                </p>
                <div className="text-center">
                  <Link
                    href="/practices/ganapati-puja/arti"
                    className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <Flame className="w-4 h-4" />
                    Read Complete Arti Collection
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Mantras */}
        <section>
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-purple-800 mb-8 flex items-center gap-3">
              <Sparkles className="w-8 h-8" />
              Essential Ganesha Mantras
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                <h3 className="font-bold text-purple-800 mb-4">🕉️ Basic Ganesha Mantra</h3>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-lg font-semibold text-gray-800 mb-2">ॐ गं गणपतये नमः</p>
                  <p className="text-sm text-purple-600 mb-2">Om Gam Ganapataye Namaha</p>
                  <p className="text-xs text-gray-600">Meaning: I bow to Lord Ganesha</p>
                  <p className="text-xs text-gray-500 mt-2">Chant 108 times daily for obstacle removal</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6">
                <h3 className="font-bold text-orange-800 mb-4">🌟 Ganesha Gayatri</h3>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-800 mb-2">
                    ॐ एकदन्ताय विद्महे वक्रतुण्डाय धीमहि<br/>
                    तन्नो दन्ती प्रचोदयात्
                  </p>
                  <p className="text-xs text-orange-600 mb-2">
                    Om Ekadantaya Vidmahe Vakratundaya Dheemahi<br/>
                    Tanno Danti Prachodayat
                  </p>
                  <p className="text-xs text-gray-600">For wisdom and intelligence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Recommendations */}
        <section>
          <SmartRecommendationsSimple 
            currentContent={currentContent}
            contentDatabase={peacefulAnswersContentDatabase}
          />
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white rounded-3xl p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              🙏 Begin Your Ganapati Puja Practice
            </h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Start with a simple 15-minute daily practice and gradually expand as you become comfortable 
              with the rituals. Lord Ganesha appreciates sincere devotion over elaborate ceremonies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/deities/ganesha"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                🐘 Learn About Lord Ganesha
              </Link>
              <Link
                href="/festivals/ganesh-chaturthi"
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                🎊 Ganesh Chaturthi Festival
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}