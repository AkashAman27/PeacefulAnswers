import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Crown, Heart, Home, Users, Sparkles, Sun, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Return to Ayodhya - Bala Kanda | Ramayana | Peaceful Answers',
  description: 'The triumphant return to Ayodhya with divine blessings. Experience the joyous homecoming of Rama and Sita after the successful completion of their sacred mission.',
  keywords: 'Ramayana, Bala Kanda, Return to Ayodhya, Rama Sita marriage, divine homecoming, Dasharatha joy, sacred union, Valmiki Ramayana',
  openGraph: {
    title: 'Return to Ayodhya - Bala Kanda | Ramayana',
    description: 'The triumphant return to Ayodhya with divine blessings. Experience the joyous homecoming of Rama and Sita.',
    type: 'article',
    url: 'https://peacefulanswers.com/scriptures/ramayana/bala-kanda/return-ayodhya',
  },
}

export default function ReturnToAyodhyaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/scriptures/ramayana/bala-kanda" className="flex items-center space-x-2 text-orange-700 hover:text-orange-900 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Bala Kanda</span>
            </Link>
            <div className="text-center">
              <h1 className="text-xl font-bold text-orange-900">अयोध्या वापसी</h1>
              <p className="text-sm text-orange-600">Ayodhyā Vāpasī</p>
            </div>
            <Link href="/scriptures/ramayana" className="text-orange-700 hover:text-orange-900 transition-colors">
              <span className="font-medium">Ramayana</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-red-400/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-100 px-4 py-2 rounded-full text-yellow-800 text-sm font-medium mb-6">
            <Home className="h-4 w-4" />
            <span>Divine Homecoming</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-orange-900 mb-6">
            Return to Ayodhya
          </h1>
          <p className="text-xl md:text-2xl text-orange-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            The triumphant journey home brings divine blessings, royal celebration, and the fulfillment of cosmic purpose as Rama and Sita return to Ayodhya crowned with success.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-orange-600">
            <span className="flex items-center space-x-1">
              <Crown className="h-4 w-4" />
              <span>Royal Celebration</span>
            </span>
            <span className="flex items-center space-x-1">
              <Heart className="h-4 w-4" />
              <span>Divine Union</span>
            </span>
            <span className="flex items-center space-x-1">
              <Sparkles className="h-4 w-4" />
              <span>Cosmic Fulfillment</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Departure from Mithila */}
        <section className="mb-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-orange-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-lg">
                <Sun className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-orange-900">Sacred Departure</h2>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                As dawn breaks over Mithila, the royal palace bustles with preparations for the most auspicious departure in cosmic history.
                <span className="font-semibold text-orange-800"> King Janaka personally oversees the arrangements</span>, ensuring that
                his beloved daughter Sita receives honors befitting her divine nature.
              </p>

              <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                <h3 className="font-semibold text-yellow-900 mb-3">The Royal Send-off</h3>
                <ul className="space-y-2 text-yellow-800">
                  <li>• Magnificent chariots adorned with gold and precious gems</li>
                  <li>• Dowry of immeasurable wealth and divine artifacts</li>
                  <li>• Royal retinue of guards, servants, and companions</li>
                  <li>• Sacred rituals and blessings from court priests</li>
                  <li>• Tearful but joyous farewell from Queen Sunaina</li>
                </ul>
              </div>

              <p>
                <span className="font-semibold text-orange-800">Sita's graceful acceptance</span> of her new destiny reflects the perfect
                balance of filial devotion and matrimonial commitment. Her gentle tears of parting transform into radiant smiles as she
                looks toward her divine husband, understanding that their union serves a cosmic purpose beyond personal happiness.
              </p>
            </div>
          </div>
        </section>

        {/* Journey Home */}
        <section className="mb-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-orange-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-orange-900">The Divine Procession</h2>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                The journey from Mithila to Ayodhya becomes a moving celebration of divine love and righteousness.
                <span className="font-semibold text-orange-800"> Villages and towns along the route</span> empty as people rush to
                witness the passage of Rama and Sita, understanding instinctively that they are in the presence of divinity.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-orange-900 mb-3">Divine Manifestations</h3>
                  <ul className="space-y-2 text-orange-800">
                    <li>• Flowers rain from the heavens spontaneously</li>
                    <li>• Sacred music echoes through the atmosphere</li>
                    <li>• Wild animals approach in peaceful reverence</li>
                    <li>• Rivers flow more sweetly along their path</li>
                    <li>• Trees burst into unseasonable bloom</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-red-900 mb-3">People's Response</h3>
                  <ul className="space-y-2 text-red-800">
                    <li>• Spontaneous hymns and prayers arise</li>
                    <li>• Offerings of fruits and flowers overflow</li>
                    <li>• Children dance with innocent joy</li>
                    <li>• Elders weep with divine recognition</li>
                    <li>• Hearts open to unexpected peace</li>
                  </ul>
                </div>
              </div>

              <p>
                <span className="font-semibold text-orange-800">Rama's gracious acknowledgment</span> of every blessing and greeting
                demonstrates the accessibility of divine love. Though he possesses unlimited power, his humility and warmth toward
                all beings reveals the true nature of godhead - not distant majesty, but intimate, caring presence.
              </p>
            </div>
          </div>
        </section>

        {/* Ayodhya's Preparation */}
        <section className="mb-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-orange-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 p-2 rounded-lg">
                <Crown className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-orange-900">Ayodhya's Joyous Preparation</h2>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                News of Rama's success and impending return transforms Ayodhya into a city of uncontainable celebration.
                <span className="font-semibold text-orange-800"> King Dasharatha's overwhelming joy</span> radiates through every
                corner of the kingdom as he personally directs the most elaborate welcome preparations in royal history.
              </p>

              <div className="bg-pink-50 p-6 rounded-xl border-l-4 border-pink-400">
                <h3 className="font-semibold text-pink-900 mb-3">City-wide Celebration</h3>
                <div className="grid md:grid-cols-2 gap-4 text-pink-800">
                  <div>
                    <h4 className="font-medium mb-2">Royal Decorations:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Golden flags flutter from every palace tower</li>
                      <li>• Silk banners in royal colors everywhere</li>
                      <li>• Streets carpeted with flower petals</li>
                      <li>• Incense burners perfume the air</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">People's Preparations:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Every home decorated with lights</li>
                      <li>• Markets overflow with celebration goods</li>
                      <li>• Musicians practice victory songs</li>
                      <li>• Children learn welcoming dances</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                <span className="font-semibold text-orange-800">The three queens' anticipation</span> reaches fever pitch as they
                prepare to welcome not only their beloved Rama, but also their new daughter-in-law Sita. Their maternal hearts
                overflow with gratitude for this divine blessing that exceeds their wildest dreams.
              </p>
            </div>
          </div>
        </section>

        {/* The Homecoming */}
        <section className="mb-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-orange-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-yellow-500 to-red-500 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-orange-900">The Triumphant Arrival</h2>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                As the royal procession approaches Ayodhya's gates, the very earth seems to sing with joy.
                <span className="font-semibold text-orange-800"> The moment of homecoming</span> crystallizes into eternal memory
                as father and son, king and prince, human and divine, meet in an embrace that encompasses all of creation.
              </p>

              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl">
                <h3 className="font-semibold text-orange-900 mb-4">The Sacred Reunion</h3>
                <div className="space-y-4 text-orange-800">
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 mt-1 text-yellow-600" />
                    <div>
                      <strong>Dasharatha's Overwhelming Joy:</strong> The king's eyes overflow with tears of pure bliss as he
                      beholds his beloved son returned victorious, accompanied by the divine Sita whose radiance illuminates
                      the entire palace courtyard.
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 mt-1 text-yellow-600" />
                    <div>
                      <strong>Sita's Grace:</strong> With perfect humility and love, Sita touches the feet of her new father-in-law,
                      receiving his heartfelt blessings and immediately winning the devotion of the entire royal family.
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 mt-1 text-yellow-600" />
                    <div>
                      <strong>People's Celebration:</strong> The citizens of Ayodhya experience unprecedented joy, understanding
                      that their prince has not only succeeded but has brought divine blessing into their kingdom.
                    </div>
                  </div>
                </div>
              </div>

              <p>
                <span className="font-semibold text-orange-800">This homecoming completes the cosmic circle</span> begun with
                Vishwamitra's arrival. What started as a request for protection has culminated in the greatest possible blessing -
                the union of divine love with earthly kingdom, promising an era of unprecedented righteousness and prosperity.
              </p>
            </div>
          </div>
        </section>

        {/* Spiritual Significance */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-8 shadow-lg border border-orange-300">
            <h2 className="text-2xl font-bold text-orange-900 mb-6 flex items-center space-x-3">
              <Sparkles className="h-6 w-6" />
              <span>Spiritual Dimensions</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-orange-800">Cosmic Completion</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Divine Purpose Fulfilled:</strong> The successful completion of the sacred mission demonstrates how divine will works through human actions</li>
                  <li>• <strong>Perfect Union:</strong> Rama and Sita's marriage represents the eternal union of consciousness and divine energy</li>
                  <li>• <strong>Righteousness Rewarded:</strong> Virtue and dharma lead to ultimate fulfillment and joy</li>
                  <li>• <strong>Family Harmony:</strong> The integration of divine love within family structures sanctifies human relationships</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-orange-800">Universal Principles</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Homecoming as Return to Source:</strong> Every soul's journey ultimately leads back to divine unity</li>
                  <li>• <strong>Service Leading to Blessing:</strong> Selfless action for others brings the greatest personal fulfillment</li>
                  <li>• <strong>Community Celebration:</strong> Individual achievement becomes collective joy when rooted in righteousness</li>
                  <li>• <strong>Divine Accessibility:</strong> God responds to love and devotion with tangible presence and blessing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Applications */}
        <section className="mb-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-orange-200">
            <h2 className="text-2xl font-bold text-orange-900 mb-6">Living These Truths Today</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="font-semibold text-yellow-900 mb-3">In Family Life</h3>
                <ul className="space-y-2 text-yellow-800 text-sm">
                  <li>• Celebrate achievements together as community victories</li>
                  <li>• Welcome new family members with genuine warmth and inclusion</li>
                  <li>• Create traditions that honor love and commitment</li>
                  <li>• Express gratitude for life's blessings openly and regularly</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="font-semibold text-orange-900 mb-3">In Service</h3>
                <ul className="space-y-2 text-orange-800 text-sm">
                  <li>• Approach every task as an opportunity to serve something greater</li>
                  <li>• Complete projects with dedication and integrity</li>
                  <li>• Share success with those who supported the journey</li>
                  <li>• Use achievements as platforms for further service</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="font-semibold text-red-900 mb-3">In Spiritual Growth</h3>
                <ul className="space-y-2 text-red-800 text-sm">
                  <li>• Recognize every return to peace as a homecoming to the divine</li>
                  <li>• Celebrate spiritual milestones with gratitude and humility</li>
                  <li>• Share spiritual joy with others naturally and appropriately</li>
                  <li>• See life's journey as movement toward ultimate union with truth</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="flex justify-between items-center pt-8 border-t border-orange-200">
          <Link
            href="/scriptures/ramayana/bala-kanda/bow-breaking"
            className="flex items-center space-x-2 text-orange-700 hover:text-orange-900 transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span>Breaking of Shiva's Bow</span>
          </Link>

          <Link
            href="/scriptures/ramayana/bala-kanda"
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-colors font-medium"
          >
            Complete Bala Kanda
          </Link>
        </section>
      </main>
    </div>
  )
}