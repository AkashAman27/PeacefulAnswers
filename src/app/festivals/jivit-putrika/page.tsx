import Link from 'next/link'
import { ArrowLeft, Heart, Star } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jivit Putrika Vrat - Sacred Fast for Sons | Hindu Festival | PeacefulAnswers',
  description: 'Discover the significance of Jivit Putrika Vrat, a sacred fasting ritual observed by mothers for the long life and prosperity of their sons. Learn about rituals, stories, and traditions.',
  keywords: 'Jivit Putrika Vrat, Hindu festival, mothers fast, sons wellbeing, Hindu tradition, vrat katha',
  openGraph: {
    title: 'Jivit Putrika Vrat - Sacred Fast for Sons | Hindu Festival',
    description: 'Learn about the sacred Jivit Putrika Vrat observed by mothers for their sons wellbeing and prosperity.',
    type: 'website',
  }
}

export default function JivitPutrikaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50">
      {/* Navigation */}
      <div className="bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/festivals" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Festivals
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-6xl mb-4 block">🪔</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-sanskrit">जीवित पुत्रिका व्रत</h1>
          <h2 className="text-2xl md:text-3xl text-orange-100 mb-8 font-semibold">Jivit Putrika Vrat - Sacred Fast for Sons</h2>
          <p className="text-xl md:text-2xl text-pink-100 mb-8 max-w-4xl mx-auto">
            A sacred fasting ritual observed by mothers for the long life, health, and prosperity of their sons
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-6 py-3 bg-pink-600 text-white rounded-full font-semibold">September 14, 2025</span>
            <span className="px-6 py-3 bg-yellow-400 text-orange-900 rounded-full font-semibold">Sunday</span>
            <span className="px-6 py-3 bg-gradient-to-r from-pink-600 to-orange-400 text-white rounded-full font-semibold">Maternal Love</span>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-600 via-orange-400 to-yellow-400 mx-auto"></div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-400/20 rounded-full blur-3xl"></div>
      </section>

      {/* Other Names */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-8">Other Names</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-pink-600 mb-2">जीवित्पुत्रिका व्रत</h3>
              <p className="text-gray-700">Traditional Sanskrit name</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-orange-600 mb-2">Jitiya Vrat</h3>
              <p className="text-gray-700">Popular regional name</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-pink-50 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-yellow-600 mb-2">Putrada Vrat</h3>
              <p className="text-gray-700">Alternative traditional name</p>
            </div>
          </div>
        </div>
      </section>

      {/* Where Celebrated */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-600/10 via-orange-400/10 to-yellow-300/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Where It's Celebrated</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-orange-700 mb-6">Primary Regions</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-lg shadow">
                  <div className="w-3 h-3 bg-pink-600 rounded-full mr-4"></div>
                  <span className="text-gray-800"><strong>Bihar:</strong> Most widely observed state</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-4"></div>
                  <span className="text-gray-800"><strong>Jharkhand:</strong> Traditional celebration</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4"></div>
                  <span className="text-gray-800"><strong>Eastern UP:</strong> Regional variations</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-orange-700 mb-6">Special Places</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow">
                  <h4 className="font-bold text-pink-600 mb-2">Ganga Ghats, Bihar</h4>
                  <p className="text-gray-700">Collective celebrations by river banks</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                  <h4 className="font-bold text-orange-600 mb-2">Village Ponds</h4>
                  <p className="text-gray-700">Traditional community gathering places</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                  <h4 className="font-bold text-yellow-600 mb-2">Home Courtyards</h4>
                  <p className="text-gray-700">Family-based intimate celebrations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin and Scriptural Connections */}
      <section className="py-16 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Origin & Scriptural Connections</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">📖</span>
                <h3 className="text-2xl font-bold text-orange-700">Mahabharata Connection</h3>
              </div>
              <p className="text-gray-700 mb-4">
                After the Kurukshetra war, Ashwatthama sought revenge by hurling the Brahmastra at Arjuna's unborn grandson. 
                Lord Krishna intervened to save the fetus, reviving the child who was aptly named &ldquo;Jivitputrika&rdquo; (living son).
              </p>
              <p className="text-gray-700">
                That child, Parikshit, survived to continue the Pandava lineage. Ever since, mothers have observed this sacred 
                fast annually for the long life of their children.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">👑</span>
                <h3 className="text-2xl font-bold text-orange-700">King Jimutvahana Legend</h3>
              </div>
              <p className="text-gray-700 mb-4">
                King Jimutvahana, a compassionate ruler, offered himself to Garuda to save a Naga mother&rsquo;s only son. 
                Moved by his sacrifice, Garuda spared him and vowed to stop taking serpent lives.
              </p>
              <p className="text-gray-700">
                This legend celebrates ultimate sacrifice and divine reward, inspiring mothers to fast for their children&rsquo;s 
                wellbeing with unwavering devotion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Jivit Putrika */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-8">What is Jivit Putrika Vrat?</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-4xl">🪔</span>
              <div className="h-16 w-1 bg-gradient-to-b from-orange-600 to-yellow-400"></div>
              <span className="text-4xl">🙏</span>
            </div>
            
            <p className="text-lg text-gray-700 mb-6">
              Jivit Putrika Vrat is a sacred fasting ritual observed by mothers for the long life, health, and prosperity 
              of their sons. This ancient tradition reflects the profound maternal love and devotion in Hindu culture.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-r from-pink-100 to-orange-100 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Etymology</h3>
                <p className="text-gray-700">
                  In Sanskrit, &ldquo;Jīvit-putrikā&rdquo; literally means &ldquo;living son&rdquo; - from jīvit (alive) and putra (son). 
                  The name embodies a mother&rsquo;s prayer for her child&rsquo;s continued life.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Sacred Purpose</h3>
                <p className="text-gray-700">
                  The vrat seeks divine blessings for children&rsquo;s protection from all dangers and ensures their 
                  prosperity and happiness throughout life.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-600 to-pink-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Nirjala Fast - Ultimate Devotion</h3>
              <p className="text-orange-100">
                This is one of the most challenging vrats, involving complete abstinence from food and water for 24+ hours. 
                Yet mothers undertake it with joy, believing their sacrifice creates a spiritual shield around their children.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rituals and Traditions - 3 Day Format */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-50 to-yellow-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Three-Day Ritual Observance</h2>
          
          {/* Day 1 */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-pink-600 to-orange-600 text-white rounded-t-2xl p-6">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <span className="bg-white text-pink-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                Day 1: Nahai-Khai (Bath and Eat)
              </h3>
            </div>
            <div className="bg-white rounded-b-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🛁</span>
                    <h4 className="text-lg font-bold text-orange-700">Sacred Purification</h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Mothers perform early morning ritual bath in river or pond, don clean clothes. Only after purification 
                    do they consume simple vegetarian meals cooked with ghee and rock salt.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🍽️</span>
                    <h4 className="text-lg font-bold text-orange-700">Special Pre-Fast Meal</h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    &ldquo;Ongthān&rdquo; or &ldquo;Datkhat&rdquo; is prepared - often including fish and millet bread (ragi chapatti). 
                    Mothers ensure their children eat until full before the strict fast begins at midnight.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-t-2xl p-6">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <span className="bg-white text-orange-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                Day 2: Khur Jitiya (Sacred Fasting Day)
              </h3>
            </div>
            <div className="bg-white rounded-b-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-orange-50 rounded-xl p-6">
                  <div className="text-2xl mb-3">☀️</div>
                  <h4 className="font-bold text-orange-700 mb-3">Dawn Rituals</h4>
                  <p className="text-sm text-gray-700">
                    Arghya (water offering) to Surya at sunrise, seeking blessings for vitality and long life of children.
                  </p>
                </div>
                <div className="bg-pink-50 rounded-xl p-6">
                  <div className="text-2xl mb-3">🕊️</div>
                  <h4 className="font-bold text-pink-700 mb-3">Jimutvahana Worship</h4>
                  <p className="text-sm text-gray-700">
                    Clay idol of Jimutvahana installed, with offerings of akshat, flowers, fruits, and sweets.
                  </p>
                </div>
                <div className="bg-yellow-50 rounded-xl p-6">
                  <div className="text-2xl mb-3">🦅</div>
                  <h4 className="font-bold text-yellow-700 mb-3">Chil-Siyar Figures</h4>
                  <p className="text-sm text-gray-700">
                    Small clay eagle and jackal figures created, adorned with sindoor, representing the folk legend.
                  </p>
                </div>
              </div>
              <div className="mt-8 bg-gradient-to-r from-red-100 to-pink-100 rounded-xl p-6">
                <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                  <span>⚠️</span> Nirjala Fast - Ultimate Devotion
                </h4>
                <p className="text-gray-700">
                  Complete abstinence from food and water for entire day and night. Mothers avoid comfort of beds, 
                  often sleeping on floor as penance while maintaining spiritual focus through community prayer and storytelling.
                </p>
              </div>
            </div>
          </div>

          {/* Day 3 */}
          <div>
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-t-2xl p-6">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <span className="bg-white text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
                Day 3: Parana (Breaking the Fast)
              </h3>
            </div>
            <div className="bg-white rounded-b-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🌅</span>
                    <h4 className="text-lg font-bold text-green-700">Dawn Conclusion</h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Ritual bath and prayers to Surya as Ashtami tithi ends. Only after praying for children&rsquo;s wellbeing 
                    do mothers ceremonially break their fast with prasad and water.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🍛</span>
                    <h4 className="text-lg font-bold text-blue-700">Sacred Feast</h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Traditional foods like noni saag (wild purslane greens) and maruwa roti (millet bread) with rice 
                    and curry. Family feast in atmosphere of gratitude and celebration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Variations */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Regional Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🏛️</span>
                <h3 className="text-xl font-bold text-orange-700">Bihar & Eastern UP</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  Complete 3-day observance with Nahai-Khai format
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  Clay eagle and jackal worship specific to region
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  Strong community gatherings at river ghats
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🌿</span>
                <h3 className="text-xl font-bold text-green-700">Jharkhand</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  Extended 8-day celebration called &ldquo;Jitia&rdquo; 
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  Sacred fig branch planting ritual in courtyards
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  Community Jhumar dances through the night
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🏔️</span>
                <h3 className="text-xl font-bold text-blue-700">Nepal (Madhesi)</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  Called &ldquo;Jitiya Parva&rdquo; in Terai region
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  Extended fasts up to 36 hours (Khar Jitiya)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  Tharu women perform special Jhamta dances
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🌺</span>
                <h3 className="text-xl font-bold text-purple-700">Odisha</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  Known as &ldquo;Pua Jiuntia&rdquo; in Western Odisha
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  Worship deity called &ldquo;Dutibahana&rdquo;
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  Similar Aswina Krishna Ashtami timing
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🌍</span>
                <h3 className="text-xl font-bold text-indigo-700">Modern Adaptations</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 mt-1">•</span>
                    Urban families perform puja at home vs. river ghats
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 mt-1">•</span>
                    Digital panchang for precise timing calculations
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 mt-1">•</span>
                    Social media sharing of Jivitputrika greetings
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 mt-1">•</span>
                    Inclusive prayers for daughters alongside sons
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Call-to-Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-6xl mb-4 block">📚</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Discover Sacred Stories & Legends</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Immerse yourself in the rich collection of Jivit Putrika stories, from ancient legends of King Jimutvahana 
              to the Mahabharata connections and folk tales of the eagle and jackal.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-3">👑</div>
                <h3 className="font-bold text-lg mb-2">Jimutvahana Legend</h3>
                <p className="text-orange-100 text-sm">The compassionate king&rsquo;s ultimate sacrifice</p>
              </div>
              <div>
                <div className="text-3xl mb-3">🦅</div>
                <h3 className="font-bold text-lg mb-2">Eagle & Jackal Tale</h3>
                <p className="text-orange-100 text-sm">Moral story of devotion and consequences</p>
              </div>
              <div>
                <div className="text-3xl mb-3">📖</div>
                <h3 className="font-bold text-lg mb-2">Mahabharata Connection</h3>
                <p className="text-orange-100 text-sm">Krishna&rsquo;s divine intervention for Parikshit</p>
              </div>
            </div>
          </div>
          
          <Link 
            href="/festivals/jivit-putrika/stories"
            className="inline-flex items-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>📖</span>
            Read All Sacred Stories
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Enhanced Facts */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">Sacred Facts & Traditions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-pink-50 to-orange-50 p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">👩‍👧‍👦</span>
                <h3 className="font-bold text-pink-700">Universal Maternal Love</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Observed by mothers for sons, but childless women also participate seeking motherhood blessings. 
                Modern practice extends prayers to all children.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">⏰</span>
                <h3 className="font-bold text-orange-700">Most Challenging Vrat</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Nirjala fast lasting 24-36 hours with no food or water. Considered one of the most difficult vrats, 
                yet undertaken with joy and devotion.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🗓️</span>
                <h3 className="font-bold text-yellow-700">Lunar Calendar</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Observed on Krishna Paksha Ashtami of Ashwin month. Date varies each year based on 
                precise lunar calculations and regional observations.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🏘️</span>
                <h3 className="font-bold text-green-700">Community Bonding</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Strong community participation in rural areas. Women gather at rivers and temples, 
                sharing stories and supporting each other through the fast.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📿</span>
                <h3 className="font-bold text-blue-700">Sacred Thread</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Red-yellow &ldquo;Jiutiya&rdquo; thread worn around neck or wrist during vrat. 
                Received during puja as sign of completed vow and protection talisman.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🎭</span>
                <h3 className="font-bold text-purple-700">Cultural Heritage</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Appears in 7th-century Sanskrit play &ldquo;Nagananda&rdquo; by Emperor Harsha. 
                Rich folklore tradition passed down through generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wishes Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-100 to-orange-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-12">Jivit Putrika Wishes & Blessings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Heart className="w-12 h-12 text-pink-600 mx-auto mb-6" />
              <p className="text-lg text-gray-700 italic mb-4">
                &ldquo;May this sacred vrat bring divine blessings to all mothers and their children. May every son be blessed with long life and prosperity.&rdquo;
              </p>
              <p className="text-sm text-gray-500">Traditional Blessing</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Star className="w-12 h-12 text-orange-600 mx-auto mb-6" />
              <p className="text-lg text-gray-700 italic mb-4 font-sanskrit">
                &ldquo;पुत्रस्य दीर्घायुः भवतु। मातृभक्तिः सदैव वर्धतु।&rdquo;
              </p>
              <p className="text-sm text-gray-500">Sanskrit Prayer</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}