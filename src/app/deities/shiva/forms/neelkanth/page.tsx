
import { Waves, Droplets, Shield, Crown, Sparkles, Eye, MapPin, Calendar, Scroll, Users, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function NeelkanthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-cyan-900 to-indigo-800 text-white">
      {/* Navigation */}
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <Link 
          href="/deities/shiva/forms/adiyogi"
          className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Adiyogi
        </Link>
        
        <Link 
          href="/deities/shiva"
          className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
        >
          All Forms
        </Link>
        
        <Link 
          href="/deities/shiva/forms/dakshinamurthy"
          className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
        >
          Dakshinamurthy
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 bg-blue-500/20 rounded-full border border-blue-400/30 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer animate-[slideInFromLeft_0.8s_ease-out]">
            <Droplets className="w-4 h-4 mr-2 animate-pulse" />
            <span className="text-sm font-medium">नीलकंठ - The Blue-Throated Lord</span>
          </div>
          
          <div className="min-h-[120px] md:min-h-[140px] flex flex-col justify-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-200 via-cyan-300 to-indigo-200 bg-clip-text text-transparent leading-tight typewriter whitespace-nowrap" style={{ '--duration': '2s', '--steps': '7', '--delay': '1s' } as any}>
              नीलकंठ
            </h1>
          </div>
          <div className="min-h-[60px] md:min-h-[80px] flex flex-col justify-center mb-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-200 typewriter-no-cursor whitespace-nowrap" style={{ '--duration': '2s', '--steps': '35', '--delay': '3s' } as any}>
              Neelkanth - The Savior of Universe
            </h2>
          </div>
          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed animate-[slideInFromLeft_1s_ease-out_5s_both]">
            The compassionate form of Lord Shiva who drank the deadly poison during the 
            churning of the cosmic ocean, sacrificing his own comfort to save all beings 
            from destruction, earning the name "Blue-Throated One."
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - The Great Story */}
          <div className="lg:col-span-2 space-y-8">
            {/* Samudra Manthan - The Ocean Churning */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Waves className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-bold">Samudra Manthan - The Great Churning</h3>
              </div>
              <div className="space-y-4 text-blue-100">
                <p>
                  In the cosmic epoch when the devas (gods) were weakened by a curse, 
                  they sought the help of Lord Vishnu to regain their strength. The solution 
                  lay in obtaining amrita (nectar of immortality) from the cosmic ocean. 
                  This required the monumental task of churning the ocean of milk.
                </p>
                <p>
                  Using Mount Mandara as the churning rod and the cosmic serpent Vasuki 
                  as the rope, the devas and asuras (demons) began the great churning. 
                  The devas held Vasuki's tail while the asuras held his head, and 
                  Lord Vishnu as Kurma (turtle) supported the mountain from below.
                </p>
                <p>
                  From this churning emerged fourteen precious ratnas (gems) including 
                  Goddess Lakshmi, the divine cow Kamadhenu, the celestial horse Uchchaihshravas, 
                  and various divine weapons. But before the amrita could emerge, 
                  a terrible poison called Halahala arose from the depths.
                </p>
              </div>
            </div>

            {/* The Poison and Sacrifice */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-cyan-400" />
                <h3 className="text-2xl font-bold">The Supreme Sacrifice</h3>
              </div>
              <div className="space-y-4 text-blue-100">
                <p>
                  The poison Halahala was so potent that it threatened to destroy all 
                  of creation. Its mere presence began to burn the three worlds, and 
                  neither devas nor asuras could contain it. In their desperation, 
                  all beings turned to Lord Shiva for salvation.
                </p>
                <p>
                  Moved by compassion for all creation, Lord Shiva immediately agreed 
                  to drink the poison. But Goddess Parvati, fearing for her beloved's 
                  life, placed her hand on his throat to prevent the poison from 
                  reaching his stomach, where it could cause fatal harm.
                </p>
                <p>
                  The poison remained in Shiva's throat, turning it permanently blue. 
                  This act of supreme sacrifice earned him the name Neelkanth (Blue-throated) 
                  and established him as the ultimate protector who willingly bears 
                  suffering to save others from destruction.
                </p>
              </div>
            </div>

            {/* Symbolism and Deeper Meaning */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-indigo-400" />
                <h3 className="text-2xl font-bold">Sacred Symbolism</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Blue Throat</h4>
                  <p className="text-sm text-blue-100">
                    Represents the power to transform poison (negativity) into wisdom, 
                    holding harmful energies in the throat chakra (Vishuddha) for purification.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Poison as Negativity</h4>
                  <p className="text-sm text-blue-100">
                    Halahala symbolizes all forms of negativity, hatred, jealousy, and 
                    destructive emotions that poison individual and collective consciousness.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Divine Compassion</h4>
                  <p className="text-sm text-blue-100">
                    Shiva's willingness to drink poison demonstrates unconditional love 
                    and the divine quality of taking on suffering for the welfare of all.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Parvati's Intervention</h4>
                  <p className="text-sm text-blue-100">
                    Represents divine feminine power (Shakti) that protects and preserves, 
                    showing the importance of balance between sacrifice and self-preservation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Transformation Power</h4>
                  <p className="text-sm text-blue-100">
                    The blue color symbolizes the ability to transform the most destructive 
                    forces into spiritual power and wisdom through divine consciousness.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Cosmic Responsibility</h4>
                  <p className="text-sm text-blue-100">
                    Shows that true spiritual leaders take responsibility for collective 
                    suffering and work to purify the environment for all beings.
                  </p>
                </div>
              </div>
            </div>

            {/* The Fourteen Ratnas */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Crown className="w-6 h-6 text-cyan-400" />
                <h3 className="text-2xl font-bold">The Fourteen Sacred Treasures</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-blue-500/10 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-300">1. Halahala</h4>
                  <p className="text-blue-100">The deadly poison consumed by Shiva</p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-300">2. Kamadhenu</h4>
                  <p className="text-blue-100">The wish-fulfilling divine cow</p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-300">3. Uchchaihshravas</h4>
                  <p className="text-blue-100">The seven-headed celestial horse</p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-300">4. Airavata</h4>
                  <p className="text-blue-100">Indra's white elephant</p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-300">5. Kalpavriksha</h4>
                  <p className="text-blue-100">The wish-fulfilling divine tree</p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-300">6. Lakshmi</h4>
                  <p className="text-blue-100">Goddess of wealth and prosperity</p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-300">7. Rambha</h4>
                  <p className="text-blue-100">The celestial apsara (nymph)</p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-300">8. Chandra</h4>
                  <p className="text-blue-100">The moon god</p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-300">9. Parijat</h4>
                  <p className="text-blue-100">The divine fragrant tree</p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-300">10. Apsaras</h4>
                  <p className="text-blue-100">Divine dancers and musicians</p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-300">11. Varuni</h4>
                  <p className="text-blue-100">Goddess of wine and intoxication</p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-300">12. Shankha</h4>
                  <p className="text-blue-100">The divine conch shell</p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-300">13. Dhanvantari</h4>
                  <p className="text-blue-100">Divine physician with amrita</p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-300">14. Amrita</h4>
                  <p className="text-blue-100">The nectar of immortality</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Festivals, Temples, etc. */}
          <div className="space-y-8">
            {/* Festivals */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl font-bold">Sacred Observances</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-300">Samudra Manthan Jayanti</h4>
                  <p className="text-sm text-blue-100">Celebrating the cosmic churning and Shiva's sacrifice</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-300">Neelkanth Mahadev Vrat</h4>
                  <p className="text-sm text-blue-100">Special fasting day honoring the blue-throated form</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-300">Shravani Somvar</h4>
                  <p className="text-sm text-blue-100">Monday worship during Shravan month for Neelkanth</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-300">Kumbh Mela</h4>
                  <p className="text-sm text-blue-100">Celebrating the drops of amrita that fell on earth</p>
                </div>
              </div>
            </div>

            {/* Temples */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl font-bold">Sacred Temples</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-300">Neelkanth Mahadev, Rishikesh</h4>
                  <p className="text-sm text-blue-100">Famous temple where devotees pour water on the blue throat</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-300">Neelkanth Temple, Rajasthan</h4>
                  <p className="text-sm text-blue-100">Ancient temple dedicated to the poison-drinking form</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-300">Haridwar Temples</h4>
                  <p className="text-sm text-blue-100">Multiple Neelkanth shrines along the sacred Ganges</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-300">Kumbh Mela Sites</h4>
                  <p className="text-sm text-blue-100">Prayagraj, Haridwar, Nashik, Ujjain - amrita drop locations</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-300">Ocean Temples</h4>
                  <p className="text-sm text-blue-100">Coastal temples commemorating the ocean churning</p>
                </div>
              </div>
            </div>

            {/* Mantras */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Scroll className="w-5 h-5 text-indigo-400" />
                <h3 className="text-xl font-bold">Sacred Mantras</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-300">Neelkanth Mantra</h4>
                  <p className="text-sm text-blue-100 font-mono">
                    ॐ नीलकण्ठाय नमः
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-300">Maha Mrityunjaya</h4>
                  <p className="text-sm text-blue-100 font-mono">
                    ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् <br />
                    उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात्
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-300">Poison Transformation</h4>
                  <p className="text-sm text-blue-100 font-mono">
                    ॐ हलाहल पान महेश्वराय <br />
                    विश्वरक्षकाय नमः
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-300">Blue Throat Invocation</h4>
                  <p className="text-sm text-blue-100 font-mono">
                    नीलग्रीव समुद्भूत विषं नाशाय हरे हर
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl font-bold">Essential Facts</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-300">Event:</span>
                  <span className="text-blue-100">Samudra Manthan</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-300">Poison Name:</span>
                  <span className="text-blue-100">Halahala</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-300">Helper:</span>
                  <span className="text-blue-100">Goddess Parvati</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-300">Result:</span>
                  <span className="text-blue-100">Blue throat</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-300">Symbolizes:</span>
                  <span className="text-blue-100">Supreme sacrifice</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-300">Teaches:</span>
                  <span className="text-blue-100">Selfless service</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-300">Element:</span>
                  <span className="text-blue-100">Water (Ocean)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spiritual Teachings */}
        <div className="mt-12 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-md rounded-2xl p-8 border border-blue-400/20">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-blue-400" />
            <h3 className="text-2xl font-bold">Spiritual Teachings</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-blue-300 mb-4">Transforming Poison</h4>
              <p className="text-blue-100 leading-relaxed">
                Neelkanth teaches us that rather than avoiding life's difficulties and toxicities, 
                we can learn to digest and transform them through spiritual practice. The blue 
                throat represents the throat chakra's power to purify and transform negative 
                experiences into wisdom and compassion.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-300 mb-4">Selfless Service</h4>
              <p className="text-blue-100 leading-relaxed">
                The willingness to take on suffering for the greater good exemplifies the 
                highest form of service. True spiritual leadership means being willing to 
                bear difficulties so others may be free from suffering, transforming 
                personal sacrifice into collective benefit.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-300 mb-4">Divine Partnership</h4>
              <p className="text-blue-100 leading-relaxed">
                Parvati's intervention shows the importance of divine feminine wisdom in 
                balancing masculine sacrifice. True spiritual evolution requires both the 
                courage to take on challenges and the wisdom to know our limits, 
                working in harmony with complementary forces.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-300 mb-4">Cosmic Responsibility</h4>
              <p className="text-blue-100 leading-relaxed">
                Advanced spiritual beings naturally take responsibility for the collective 
                consciousness of their environment. Like Neelkanth, they work to purify 
                negative energies and protect others from spiritual and psychological toxins, 
                creating safe spaces for growth and evolution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}