import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Surya Namaskara - Sun Salutation Practice | Steps & Benefits | PeacefulAnswers',
  description: 'Learn the complete Surya Namaskara sequence - a sacred sun salutation combining movement, breath, and devotion for physical and spiritual well-being.',
  keywords: 'Surya Namaskara, Sun Salutation, yoga practice, sun worship, morning practice, pranayama, movement, devotion',
  openGraph: {
    title: 'Surya Namaskara - Sun Salutation Practice | PeacefulAnswers',
    description: 'Master the ancient practice of Surya Namaskara, harmonizing body, breath, and spirit.',
    type: 'website',
  },
}

const suryaSteps = [
  {
    step: 1,
    name: "Pranamasana",
    sanskrit: "प्रणामासन",
    description: "Prayer Pose - Stand tall with palms together at heart center",
    breath: "Normal breathing",
    benefits: "Centers the mind and prepares for practice"
  },
  {
    step: 2,
    name: "Hastauttanasana", 
    sanskrit: "हस्तउत्तानासन",
    description: "Raised Arms Pose - Lift arms overhead, slight backbend",
    breath: "Inhale",
    benefits: "Opens chest and stretches abdomen"
  },
  {
    step: 3,
    name: "Uttanasana",
    sanskrit: "उत्तानासन", 
    description: "Forward Fold - Bend forward, hands toward floor",
    breath: "Exhale",
    benefits: "Stretches hamstrings and calms the mind"
  },
  {
    step: 4,
    name: "Ashwa Sanchalanasana",
    sanskrit: "अश्व संचालनासन",
    description: "Low Lunge - Step right leg back, hands on floor",
    breath: "Inhale", 
    benefits: "Strengthens legs and improves balance"
  },
  {
    step: 5,
    name: "Chaturanga Dandasana",
    sanskrit: "चतुरंग दण्डासन",
    description: "Four-Limbed Staff - Plank position, lower with control",
    breath: "Exhale",
    benefits: "Builds core and arm strength"
  },
  {
    step: 6,
    name: "Ashtanga Namaskara",
    sanskrit: "अष्टांग नमस्कार", 
    description: "Eight-Limbed Pose - Chest and knees to floor",
    breath: "Hold breath",
    benefits: "Develops flexibility and devotion"
  }
]

const suryaBenefits = [
  {
    category: "Physical Benefits",
    benefits: [
      "Improves cardiovascular health",
      "Enhances flexibility and strength", 
      "Tones muscles and improves posture",
      "Aids in weight management",
      "Boosts energy levels"
    ]
  },
  {
    category: "Mental Benefits", 
    benefits: [
      "Reduces stress and anxiety",
      "Improves concentration and focus",
      "Enhances mood and mental clarity",
      "Promotes better sleep quality",
      "Develops mindfulness"
    ]
  },
  {
    category: "Spiritual Benefits",
    benefits: [
      "Connects with solar energy", 
      "Cultivates gratitude and devotion",
      "Harmonizes body-mind-spirit",
      "Awakens inner consciousness",
      "Prepares for meditation"
    ]
  }
]

const practiceGuidelines = [
  {
    title: "Best Time",
    guideline: "Practice during sunrise facing east for maximum benefits"
  },
  {
    title: "Frequency", 
    guideline: "Start with 2-3 rounds, gradually increase to 12 rounds"
  },
  {
    title: "Breathing",
    guideline: "Coordinate each movement with specific breath pattern"
  },
  {
    title: "Preparation",
    guideline: "Practice on empty stomach, 3-4 hours after meals"
  },
  {
    title: "Surface",
    guideline: "Use yoga mat on firm, level surface"
  },
  {
    title: "Warm-up",
    guideline: "Do gentle stretches before starting the sequence"
  }
]

export default function SuryaNamaskaraPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/practices" 
            className="inline-flex items-center text-gray-600 hover:text-orange-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
              <path d="m12 19-7-7 7-7"/>
              <path d="M19 12H5"/>
            </svg>
            Back to All Practices
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-yellow-500 to-red-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">☀️ Sacred Practice</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                सूर्य नमस्कार
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-yellow-100">
                Surya Namaskara
              </h2>
              <p className="text-lg text-orange-100 leading-relaxed mb-8">
                The sun salutation sequence combining movement, breath, and devotion. 
                A complete practice that harmonizes body, mind, and spirit with solar energy.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="#steps" 
                  className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Learn the Steps
                </Link>
                <Link 
                  href="#benefits" 
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  View Benefits
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop"
                  alt="Surya Namaskara practice"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Practice Guidelines */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Practice Guidelines</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-yellow-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceGuidelines.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-orange-800 mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.guideline}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sequence Steps */}
        <section id="steps">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The 12-Step Sequence</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-yellow-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each position flows into the next with conscious breathing, creating a meditative movement practice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {suryaSteps.map((step, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{step.name}</h3>
                    <p className="text-orange-700 font-sanskrit">{step.sanskrit}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">{step.description}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-orange-600 font-medium">Breath: {step.breath}</span>
                </div>
                <p className="text-gray-600 text-sm mt-2">{step.benefits}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="bg-orange-100 rounded-2xl p-6 inline-block">
              <p className="text-gray-700">
                <span className="font-bold">Note:</span> Steps 7-12 repeat steps 6-1 in reverse order to complete one full round of Surya Namaskara.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Practice Benefits</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-yellow-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {suryaBenefits.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-orange-800 mb-6">{category.category}</h3>
                <ul className="space-y-3">
                  {category.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-orange-600 mr-3 mt-1">•</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-orange-600 via-yellow-500 to-red-600 text-white rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Begin Your Solar Practice</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Start with just 2-3 rounds each morning and gradually build your practice. 
            The sun's energy will awaken your inner vitality and consciousness.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/practices"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Explore More Practices
            </Link>
            <Link
              href="/deities"
              className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Learn About Surya Deva
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
}