import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Music, Heart, Flame } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Complete Ganesha Arti - Sukhkarta Dukhharata & More | PeacefulAnswers',
  description: 'Complete collection of Ganesha Artis including Sukhkarta Dukhharata, Jay Ganesh Jay Ganesh, and traditional verses with meanings and pronunciation guide.',
  keywords: 'Ganesha Arti, Sukhkarta Dukhharata, Jay Ganesh, Ganapati Arti, Hindi mantras, Sanskrit prayers',
  openGraph: {
    title: 'Complete Ganesha Arti Collection | PeacefulAnswers',
    description: 'Learn the complete Ganesha Artis with Sanskrit, Hindi, and English translations.',
    type: 'website',
  }
}

const completeGaneshaArtis = [
  {
    name: "Sukhkarta Dukhharata Arti",
    description: "The most popular and widely sung Ganesha Arti",
    verses: [
      {
        sanskrit: "सुखकर्ता दुःखहर्ता वार्ता विघ्नाची।\nनुरवी पुरवी प्रेम कृपा जयाची।।\nसर्वकलाहीन्ती ह्रदयी वसन्ती।\nसाधुजन पकुर्वन्ती संपदा देवाची।।",
        english: "You are the creator of happiness, destroyer of sorrows,\nYou fulfill all desires with your loving grace.\nYou reside in the hearts of all devotees,\nBlessing the righteous with divine wealth."
      },
      {
        sanskrit: "जयदेव जयदेव जय मंगलमूर्ति।\nदर्शन मात्रे मन कामना पुर्ति।।",
        english: "Victory to you, O auspicious form!\nJust by your sight, all desires are fulfilled."
      },
      {
        sanskrit: "रत्नखचित फरा टुपी जैगेवारी।\nचरणी नुपूर रागे मृदुअवारी।।\nलंबोदर पिताम्बर फणिवर बंधाना।\nसरळ सोंड वक्रतुंड त्रिनयनी ज्ञानाना।।",
        english: "Adorned with jeweled crown and silk garments,\nWith anklets that make sweet sounds.\nWith large belly and yellow clothing,\nCurved trunk, three eyes full of wisdom."
      },
      {
        sanskrit: "हस्ते मोदक रागे इच्छापूर्ती।\nजगबंधु हे संकट निवर्ति।।\nरक्षावे निर्भये भक्त जवळी।\nगजवदना पावसावे मातुली।।",
        english: "Holding modak, fulfilling all wishes,\nO friend of the world, remover of troubles.\nProtect fearlessly your devoted ones,\nO elephant-faced one, please be merciful."
      },
      {
        sanskrit: "एकदंता द्विदंता त्रिदंता गणराया।\nगणेश्वरा गुणेश्वरा गुणदाता गुणज्ञाया।।\nवीरमार्गावीर परमवीर सुरवर।\nविघ्न टाळुनिया सुखसंपत्ति धनवर।।",
        english: "One-tusked, two-tusked, three-tusked king of ganas,\nLord of ganas, lord of qualities, giver and knower of virtues.\nHeroic on the path of heroes, supreme hero among gods,\nRemoving obstacles, bestowing happiness, prosperity and wealth."
      }
    ]
  },
  {
    name: "Jay Ganesh Deva Arti",
    description: "Another beloved Ganesha Arti emphasizing his divine qualities",
    verses: [
      {
        sanskrit: "जय गणेश जय गणेश जय गणेश देवा।\nमाता जाकी पार्वती पिता महादेवा।।",
        english: "Victory to Ganesha, victory to Ganesha, victory to Lord Ganesha!\nWhose mother is Parvati and father is Mahadeva."
      },
      {
        sanskrit: "एकदंत दयावंत चार भुजाधारी।\nमाथे पर तिलक सोहे मुसे की सवारी।।",
        english: "One-tusked, compassionate, with four arms,\nTilaka adorning his forehead, riding on a mouse."
      },
      {
        sanskrit: "अंधन को आंख देत कोढ़िन को काया।\nबांझन को पुत्र देत निर्धन को माया।।",
        english: "Giving sight to the blind, health to the diseased,\nChildren to the childless, wealth to the poor."
      },
      {
        sanskrit: "सूर श्याम शरण आए सफल कीजे सेवा।\nकहा हर्ष के रास्ते हैं गणेश देवा।।",
        english: "Sura and Shyama have come seeking refuge, make their service fruitful,\nWhat paths of joy are there, O Lord Ganesha!"
      }
    ]
  },
  {
    name: "Vakratunda Mahakaya Arti",
    description: "Classical Sanskrit Arti praising Ganesha's divine form",
    verses: [
      {
        sanskrit: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा।।",
        english: "O curved-trunked, large-bodied one, with the brilliance of millions of suns,\nO Lord, make all my endeavors free from obstacles always."
      },
      {
        sanskrit: "गणानां त्वा गणपतिं हवामहे कविं कवीनाम्।\nउपमश्रवस्तमं ज्येष्ठराजं ब्रह्मणां ब्रह्मणस्पत आ नः श्रुणवन्नूतिभिः सीद सादनम्।।",
        english: "O Ganapati, leader of the ganas, we invoke you, the sage among sages,\nThe most renowned, the eldest king among prayers, O Brahmanaspati, come to us with your blessings and sit in the place of honor."
      }
    ]
  }
]

export default function GaneshaArtiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/practices/ganapati-puja" 
            className="inline-flex items-center text-gray-600 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Ganapati Puja Guide
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6">
            <span className="text-6xl mb-4 block">🎵</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Complete Ganesha Arti Collection</h1>
          <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-4xl mx-auto">
            Sacred Artis for Lord Ganesha • Sanskrit, Hindi & English Translations
          </p>
          
          {/* Quick Info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <Music className="w-4 h-4" />
              <span>3 Complete Artis</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              <span>Devotional Practice</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4" />
              <span>Sacred Fire Ceremony</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        
        {/* How to Perform Arti */}
        <section>
          <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-orange-800 mb-6 flex items-center gap-3">
              <Flame className="w-8 h-8" />
              How to Perform Ganesha Arti
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-bold text-orange-800 mb-4">🕯️ Preparation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Light oil lamp or camphor</li>
                  <li>• Keep flowers, rice, and sweets ready</li>
                  <li>• Ring bell throughout the arti</li>
                  <li>• Face the Ganesha idol or image</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-bold text-orange-800 mb-4">🎵 Performance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Sing with devotion and clear voice</li>
                  <li>• Move lamp in clockwise circles</li>
                  <li>• Ring bells during chorus lines</li>
                  <li>• Conclude with flower offerings</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Artis */}
        {completeGaneshaArtis.map((arti, artiIndex) => (
          <section key={artiIndex}>
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-red-800 mb-4">{arti.name}</h2>
                <p className="text-lg text-gray-600">{arti.description}</p>
              </div>
              
              <div className="space-y-12">
                {arti.verses.map((verse, verseIndex) => (
                  <div key={verseIndex} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Sanskrit/Hindi */}
                      <div>
                        <h4 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
                            Verse {verseIndex + 1}
                          </span>
                          Sanskrit/Hindi
                        </h4>
                        <div className="bg-white rounded-lg p-6">
                          <p className="text-lg leading-relaxed font-sanskrit text-gray-800 whitespace-pre-line">
                            {verse.sanskrit}
                          </p>
                        </div>
                      </div>
                      
                      {/* English Translation */}
                      <div>
                        <h4 className="font-semibold text-orange-800 mb-4">English Translation</h4>
                        <div className="bg-white rounded-lg p-6">
                          <p className="text-lg leading-relaxed text-gray-700 italic whitespace-pre-line">
                            {verse.english}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {artiIndex === 0 && (
                <div className="mt-8 bg-yellow-50 rounded-xl p-6">
                  <h4 className="font-bold text-yellow-800 mb-3">🎼 Musical Notes</h4>
                  <p className="text-sm text-yellow-700">
                    <strong>Rhythm:</strong> This arti is traditionally sung in Raga Yaman or Raga Bhairav. 
                    The tempo should be moderate, allowing for clear pronunciation of each word. 
                    Ring the bell on "Jaydev Jaydev" and clap during the chorus.
                  </p>
                </div>
              )}
            </div>
          </section>
        ))}

        {/* Additional Mantras */}
        <section>
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-purple-800 mb-8">Additional Ganesha Mantras</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-bold text-purple-800 mb-4">🕉️ Ganesha Gayatri</h3>
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-lg font-sanskrit mb-3 text-gray-800">
                    ॐ एकदन्ताय विद्महे वक्रतुण्डाय धीमहि<br/>
                    तन्नो दन्ती प्रचोदयात्
                  </p>
                  <p className="text-sm text-purple-600 mb-2 italic">
                    Om Ekadantaya Vidmahe Vakratundaya Dheemahi<br/>
                    Tanno Danti Prachodayat
                  </p>
                  <p className="text-xs text-gray-600">
                    "We know the one-tusked Lord, we meditate on the curved-trunk one, may that tusked one inspire us."
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-bold text-orange-800 mb-4">🌟 Maha Mantra</h3>
                <div className="bg-orange-50 rounded-lg p-4">
                  <p className="text-lg font-sanskrit mb-3 text-gray-800">
                    ॐ गं गणपतये नमः
                  </p>
                  <p className="text-sm text-orange-600 mb-2 italic">
                    Om Gam Ganapataye Namaha
                  </p>
                  <p className="text-xs text-gray-600">
                    "I bow to Lord Ganesha" - Chant 108 times for obstacle removal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Schedule */}
        <section>
          <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white rounded-3xl p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              🙏 Daily Arti Practice Schedule
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="font-bold text-xl mb-3">🌅 Morning</h4>
                <p className="text-orange-100">
                  Perform Sukhkarta Dukhharata Arti during morning puja (6-8 AM)
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="font-bold text-xl mb-3">🌆 Evening</h4>
                <p className="text-orange-100">
                  Sing Jay Ganesh Deva Arti during evening worship (6-8 PM)
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="font-bold text-xl mb-3">🎊 Special Days</h4>
                <p className="text-orange-100">
                  All three artis on Ganesh Chaturthi, Tuesdays, and Sankashti Chaturthi
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Link
                href="/practices/ganapati-puja"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                🐘 Return to Ganapati Puja Guide
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}