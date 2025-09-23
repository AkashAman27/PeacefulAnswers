import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Book, 
  Crown, 
  Heart, 
  Star, 
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Scroll,
  TreePine,
  Sword,
  Mountain,
  Sun,
  ChevronRight,
  ArrowLeft
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ramayana - The Epic of Dharma | Complete Story & Teachings | PeacefulAnswers',
  description: 'Explore the complete Ramayana epic - the story of Lord Rama, Sita, Hanuman, and the triumph of righteousness. Discover profound teachings, characters, and spiritual wisdom.',
  keywords: 'Ramayana, Rama, Sita, Hanuman, Valmiki, epic, dharma, Hindu scripture, Ayodhya, Lanka',
  openGraph: {
    title: 'Ramayana - The Epic of Dharma | Complete Story & Teachings',
    description: 'The timeless epic that teaches the path of dharma through the divine story of Lord Rama',
    type: 'website',
  },
}

const ramayanaOverview = {
  title: 'The Ramayana - आदि काव्य (Adi Kavya)',
  subtitle: 'The First Epic Poem of Sanskrit Literature',
  description: 'The Ramayana, composed by the sage Valmiki, is not merely an epic tale but a comprehensive guide to righteous living. It narrates the life of Prince Rama, his exile, the abduction of Sita by Ravana, and the ultimate victory of good over evil. More than a story, it is a dharmic manual that teaches us how to live with honor, duty, and devotion.',
  author: 'Maharshi Valmiki',
  verses: '24,000 Shlokas (verses)',
  books: '7 Kandas (Books)',
  period: 'Approximately 500 BCE - 100 BCE',
  significance: 'Establishes the ideals of dharma, righteousness, and devotion through the divine life of Lord Rama'
}

const sevenKandas = [
  {
    id: 'bala',
    name: 'Bala Kanda',
    title: 'The Book of Childhood',
    description: 'Chronicles Rama\'s birth, childhood, marriage to Sita, and early heroic deeds including breaking Shiva\'s bow.',
    chapters: '77 chapters',
    keyEvents: [
      'Birth of Rama and his brothers',
      'Training under sage Vishwamitra', 
      'Protection of Vishwamitra\'s sacrifice from demons',
      'Breaking of Shiva\'s bow and marriage to Sita',
      'Return to Ayodhya'
    ],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'ayodhya',
    name: 'Ayodhya Kanda',
    title: 'The Book of Ayodhya',
    description: 'The political intrigue leading to Rama\'s exile, Bharata\'s refusal of the throne, and the beginning of the fourteen-year forest exile.',
    chapters: '119 chapters',
    keyEvents: [
      'Dasharatha\'s decision to crown Rama',
      'Kaikeyi\'s demand for Rama\'s exile',
      'Rama\'s acceptance and departure with Sita and Lakshmana',
      'Dasharatha\'s death from grief',
      'Bharata\'s return and refusal of the throne'
    ],
    image: 'https://images.unsplash.com/photo-1571115764595-644a1c79e753?w=400&h=300&fit=crop',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 'aranya',
    name: 'Aranya Kanda',
    title: 'The Book of the Forest',
    description: 'Life in exile, encounters with sages, Surpanakha\'s advances, and the abduction of Sita by Ravana.',
    chapters: '75 chapters',
    keyEvents: [
      'Meeting with various sages in the forest',
      'Surpanakha\'s encounter and disfigurement',
      'Death of demon Khara and his army',
      'The golden deer (Maricha) and Sita\'s abduction',
      'Jatayu\'s sacrifice and death'
    ],
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 'kishkindha',
    name: 'Kishkindha Kanda',
    title: 'The Book of Kishkindha',
    description: 'Alliance with Hanuman and Sugriva, the search for Sita, and Hanuman\'s leap across the ocean to Lanka.',
    chapters: '67 chapters',
    keyEvents: [
      'Meeting Hanuman and friendship with Sugriva',
      'Killing of Vali and coronation of Sugriva',
      'Organization of the search for Sita',
      'Hanuman\'s discovery of Sita in Lanka',
      'Burning of Lanka and return with Sita\'s message'
    ],
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'sundara',
    name: 'Sundara Kanda',
    title: 'The Beautiful Book',
    description: 'Hanuman\'s heroic journey to Lanka, meeting Sita, burning Lanka, and returning with hope.',
    chapters: '68 chapters',
    keyEvents: [
      'Hanuman\'s leap across the ocean',
      'Encounter with Surasa and other obstacles',
      'Meeting Sita in Ashoka Vatika',
      'Destruction in Lanka and burning of his tail',
      'Return with Sita\'s ring as proof'
    ],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
    color: 'from-red-500 to-pink-500'
  },
  {
    id: 'yuddha',
    name: 'Yuddha Kanda',
    title: 'The Book of War',
    description: 'The great war in Lanka, Ravana\'s defeat, Sita\'s rescue, and the triumphant return to Ayodhya.',
    chapters: '131 chapters',
    keyEvents: [
      'Building the bridge to Lanka',
      'Epic battles with demon warriors',
      'Lakshmana\'s injury and Hanuman\'s mission for Sanjeevani',
      'Death of Ravana and rescue of Sita',
      'Coronation of Rama in Ayodhya'
    ],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 'uttara',
    name: 'Uttara Kanda',
    title: 'The Final Book',
    description: 'Rama\'s rule, Sita\'s second exile, birth of Luv and Kush, and the final reunion.',
    chapters: '111 chapters',
    keyEvents: [
      'Rama\'s righteous rule (Ram Rajya)',
      'Sita\'s second exile and life in Valmiki\'s ashram',
      'Birth and upbringing of Luv and Kush',
      'The horse sacrifice and reunion',
      'Sita\'s return to Mother Earth'
    ],
    image: 'https://images.unsplash.com/photo-1578528011634-50c02b2e6ce6?w=400&h=300&fit=crop',
    color: 'from-teal-500 to-cyan-500'
  }
]

const mainCharacters = [
  {
    name: 'Lord Rama',
    title: 'Maryada Purushottama',
    description: 'The perfect man and ideal king, seventh avatar of Vishnu, embodiment of dharma and righteousness',
    qualities: ['Dharmic', 'Truthful', 'Courageous', 'Compassionate'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop'
  },
  {
    name: 'Sita Devi',
    title: 'Janaki Mata',
    description: 'The ideal wife and woman, avatar of Lakshmi, symbol of purity, devotion, and sacrifice',
    qualities: ['Devoted', 'Pure', 'Patient', 'Virtuous'],
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=300&h=300&fit=crop'
  },
  {
    name: 'Hanuman',
    title: 'Sankat Mochan',
    description: 'The devoted devotee of Rama, symbol of strength, devotion, courage, and selfless service',
    qualities: ['Devoted', 'Powerful', 'Humble', 'Celibate'],
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=300&h=300&fit=crop'
  },
  {
    name: 'Lakshmana',
    title: 'Ramanuja',
    description: 'Rama\'s devoted brother, ideal of loyalty, sacrifice, and fraternal love',
    qualities: ['Loyal', 'Sacrificing', 'Brave', 'Devoted'],
    image: 'https://images.unsplash.com/photo-1588402140747-6fb35f3fbbb6?w=300&h=300&fit=crop'
  },
  {
    name: 'Ravana',
    title: 'Dashagriva',
    description: 'The ten-headed king of Lanka, great scholar but fallen due to ego and desire',
    qualities: ['Learned', 'Powerful', 'Egoistic', 'Passionate'],
    image: 'https://images.unsplash.com/photo-1578528011634-50c02b2e6ce6?w=300&h=300&fit=crop'
  },
  {
    name: 'Bharata',
    title: 'Dharmatma',
    description: 'Rama\'s brother who refused the throne and ruled as regent, ideal of righteousness',
    qualities: ['Righteous', 'Selfless', 'Devoted', 'Just'],
    image: 'https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?w=300&h=300&fit=crop'
  }
]

const spiritualTeachings = [
  {
    teaching: 'Dharma (Righteousness)',
    description: 'Rama\'s unwavering commitment to truth and duty, even at personal cost, teaches us that dharma must be upheld regardless of circumstances.',
    example: 'Accepting exile to honor his father\'s word, despite being the rightful heir'
  },
  {
    teaching: 'Devotion (Bhakti)',
    description: 'Hanuman\'s selfless devotion to Rama demonstrates the power of complete surrender and service to the divine.',
    example: 'Hanuman\'s leap across the ocean and burning of Lanka for Rama\'s cause'
  },
  {
    teaching: 'Sacrifice (Tyaga)',
    description: 'Lakshmana\'s sacrifice of fourteen years of comfortable life to serve Rama shows the nobility of selfless service.',
    example: 'Leaving his wife Urmila to accompany Rama in exile'
  },
  {
    teaching: 'Patience (Kshama)',
    description: 'Sita\'s patience during captivity and trials shows the strength that comes from inner purity and faith.',
    example: 'Maintaining dignity and virtue during imprisonment in Lanka'
  },
  {
    teaching: 'Forgiveness (Kshama)',
    description: 'Rama\'s forgiveness of those who wronged him teaches the divine quality of compassion over revenge.',
    example: 'Forgiving Kaikeyi and treating her with respect despite her role in his exile'
  }
]

const photographyGallery = [
  {
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    title: 'Lord Rama with Bow',
    description: 'Artistic representation of Lord Rama, the ideal man and perfect king'
  },
  {
    url: 'https://images.unsplash.com/photo-1571115764595-644a1c79e753?w=800&h=600&fit=crop',
    title: 'Sita Mata',
    description: 'The divine consort of Rama, symbol of purity and devotion'
  },
  {
    url: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=600&fit=crop',
    title: 'Hanuman in Devotion',
    description: 'The greatest devotee, shown in his eternal service to Lord Rama'
  },
  {
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
    title: 'Forest of Exile',
    description: 'The sacred forests where Rama, Sita, and Lakshmana spent their exile'
  },
  {
    url: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop',
    title: 'Hanuman\'s Leap',
    description: 'The heroic leap across the ocean to Lanka in search of Sita'
  },
  {
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    title: 'Battle of Lanka',
    description: 'The epic war between the forces of good and evil'
  }
]

export default function RamayanaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/scriptures" 
            className="inline-flex items-center text-gray-600 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Scriptures
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Book className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">📜 Adi Kavya - The First Epic</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sanskrit">
                रामायण
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-orange-100">
                The Ramayana
              </h2>
              <p className="text-lg text-red-100 leading-relaxed mb-8">
                {ramayanaOverview.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="#kandas" 
                  className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Explore the Seven Books
                </Link>
                <Link 
                  href="#characters" 
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Meet the Characters
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=450&fit=crop"
                  alt="Lord Rama - The Ideal King"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Epic Overview */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Epic Overview</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <Scroll className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Author</h3>
              <p className="text-gray-700">{ramayanaOverview.author}</p>
            </div>
            <div className="text-center">
              <Book className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Verses</h3>
              <p className="text-gray-700">{ramayanaOverview.verses}</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Books</h3>
              <p className="text-gray-700">{ramayanaOverview.books}</p>
            </div>
            <div className="text-center">
              <Calendar className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Period</h3>
              <p className="text-gray-700">{ramayanaOverview.period}</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-orange-800 mb-6 text-center">Spiritual Significance</h3>
            <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              {ramayanaOverview.significance}
            </p>
          </div>
        </section>

        {/* Seven Kandas */}
        <section id="kandas">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Seven Kandas (Books)</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Each Kanda represents a phase in the divine journey of Lord Rama, teaching different aspects of dharma and spiritual evolution
            </p>
          </div>
          
          <div className="space-y-8">
            {sevenKandas.map((kanda, index) => (
              <div key={kanda.id} className="group">
                <div className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}>
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src={kanda.image}
                          alt={kanda.name}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${kanda.color} opacity-70`}></div>
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                          <span className="text-xs font-semibold text-gray-800">Book {index + 1}</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{kanda.name}</h3>
                        <span className="text-sm text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                          {kanda.chapters}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-orange-700 mb-4">{kanda.title}</h4>
                      <p className="text-gray-700 leading-relaxed mb-6">{kanda.description}</p>
                      
                      <div className="mb-6">
                        <h5 className="font-semibold text-gray-800 mb-3">Key Events:</h5>
                        <ul className="space-y-2">
                          {kanda.keyEvents.map((event, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-orange-500 mr-3 text-sm">•</span>
                              <span className="text-gray-600 text-sm">{event}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Navigation Link */}
                      {kanda.id === 'bala' && (
                        <div className="flex justify-end">
                          <Link
                            href="/scriptures/ramayana/bala-kanda"
                            className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
                          >
                            Read Bala Kanda
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Main Characters */}
        <section id="characters">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Divine Characters</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Meet the immortal characters whose virtues and stories continue to inspire humanity across millennia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainCharacters.map((character, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={character.image}
                    alt={character.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{character.name}</h3>
                    <p className="text-sm text-orange-200">{character.title}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">{character.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {character.qualities.map((quality, idx) => (
                      <span key={idx} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold">
                        {quality}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spiritual Teachings */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Eternal Teachings</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The profound spiritual and moral teachings that make Ramayana a timeless guide for dharmic living
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {spiritualTeachings.map((teaching, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <Star className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{teaching.teaching}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{teaching.description}</p>
                <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                  <p className="text-sm font-semibold text-orange-800 mb-2">Example:</p>
                  <p className="text-orange-700 text-sm">{teaching.example}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Photo Gallery */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visual Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Immerse yourself in the visual beauty and spiritual essence of the Ramayana
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photographyGallery.map((photo, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={photo.url}
                    alt={photo.description}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{photo.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white rounded-3xl p-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">🏹 Begin Your Ramayana Journey 🏹</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Start reading the complete Ramayana and discover how these ancient teachings can transform your modern life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/scriptures/ramayana/bala-kanda"
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
              >
                Start with Bala Kanda
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/scriptures/ramayana/characters"
                className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
              >
                Explore Characters
                <Users className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}