'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Play, ArrowDown, Crown, Fish, Star, Clock } from 'lucide-react'

export default function DescentOfDivinityPage() {
  const [activeSection, setActiveSection] = useState(1)

  const sections = [
    {
      id: 1,
      title: "The Purpose and Philosophy of Avatars",
      description: "Why the divine descends to Earth"
    },
    {
      id: 2,
      title: "The Dashavatara: Ten Divine Descents",
      description: "Chronological analysis of Vishnu's incarnations"
    }
  ]

  const dashavatara = [
    {
      name: "Matsya",
      yuga: "Satya Yuga",
      form: "Fish",
      keyMyth: "Saved the Vedas and humanity from a great deluge, guiding sage Manu's boat to safety",
      dharmaValue: "Preservation of knowledge and wisdom",
      evolution: "Aquatic life - Beginning of existence",
      color: "from-blue-400 to-cyan-500",
      icon: <Fish className="w-6 h-6" />
    },
    {
      name: "Kurma", 
      yuga: "Satya Yuga",
      form: "Tortoise",
      keyMyth: "Supported Mount Mandara during churning of the cosmic ocean for nectar of immortality",
      dharmaValue: "Patience, support, and teamwork",
      evolution: "Amphibian - Bridge between water and land",
      color: "from-green-400 to-emerald-500",
      icon: <Star className="w-6 h-6" />
    },
    {
      name: "Varaha",
      yuga: "Satya Yuga", 
      form: "Boar",
      keyMyth: "Rescued Earth goddess Bhudevi from ocean depths after demon Hiranyaksha's abduction",
      dharmaValue: "Restoration of balance and Earth protection",
      evolution: "Land mammal - Terrestrial adaptation",
      color: "from-amber-500 to-orange-600",
      icon: <Star className="w-6 h-6" />
    },
    {
      name: "Narasimha",
      yuga: "Satya Yuga",
      form: "Half-Man, Half-Lion", 
      keyMyth: "Defeated demon king Hiranyakashipu by fulfilling conditions of his immunity boon at twilight",
      dharmaValue: "Inevitability of divine justice",
      evolution: "Human-animal hybrid - Intelligence emerges",
      color: "from-red-500 to-pink-600",
      icon: <Crown className="w-6 h-6" />
    },
    {
      name: "Vamana",
      yuga: "Treta Yuga",
      form: "Dwarf",
      keyMyth: "Subdued demon king Bali by requesting three paces of land, then growing to cosmic proportions",
      dharmaValue: "Humility and divine simplicity",
      evolution: "Fully human form - Small stature",
      color: "from-yellow-400 to-amber-500",
      icon: <Star className="w-6 h-6" />
    },
    {
      name: "Parashurama",
      yuga: "Treta Yuga",
      form: "Warrior-Sage",
      keyMyth: "Rid Earth of corrupt kings with his axe, restoring righteousness from corruption",
      dharmaValue: "Justice and fighting abuse of power",
      evolution: "Human with divine weapons",
      color: "from-red-600 to-orange-700",
      icon: <Star className="w-6 h-6" />
    },
    {
      name: "Rama",
      yuga: "Treta Yuga",
      form: "Ideal King",
      keyMyth: "Hero of Ramayana who defeated demon Ravana to rescue Sita, upholding righteousness",
      dharmaValue: "Adherence to duty and moral values",
      evolution: "Perfect human ruler",
      color: "from-blue-600 to-indigo-700",
      icon: <Crown className="w-6 h-6" />
    },
    {
      name: "Krishna",
      yuga: "Dvapara Yuga",
      form: "Divine Cowherd",
      keyMyth: "Central to Mahabharata and Bhagavad Gita, providing wisdom on duty and devotion",
      dharmaValue: "Detachment, wisdom, and selfless action",
      evolution: "Complete divine-human integration",
      color: "from-purple-600 to-indigo-700",
      icon: <Play className="w-6 h-6" />
    },
    {
      name: "Buddha",
      yuga: "Kali Yuga",
      form: "Enlightened One",
      keyMyth: "Guides humanity toward peace and enlightenment through non-violence and compassion",
      dharmaValue: "Non-violence and compassion",
      evolution: "Transcendent consciousness",
      color: "from-orange-500 to-yellow-500",
      icon: <Star className="w-6 h-6" />
    },
    {
      name: "Kalki",
      yuga: "Kali Yuga",
      form: "Future Warrior",
      keyMyth: "Final incarnation appearing at the end of current age to destroy evil and restore dharma",
      dharmaValue: "Ultimate triumph of good over evil",
      evolution: "Future divine intervention",
      color: "from-gray-600 to-slate-700",
      icon: <ArrowDown className="w-6 h-6" />
    }
  ]

  const evolutionStages = [
    { stage: "Aquatic", avatars: ["Matsya"], description: "Beginning of life in water" },
    { stage: "Amphibian", avatars: ["Kurma"], description: "Bridge between water and land" },
    { stage: "Land Mammal", avatars: ["Varaha"], description: "Fully terrestrial existence" },
    { stage: "Intelligent Hybrid", avatars: ["Narasimha"], description: "Human intelligence emerges" },
    { stage: "Human Forms", avatars: ["Vamana", "Parashurama", "Rama", "Krishna"], description: "Complete human evolution" },
    { stage: "Transcendent", avatars: ["Buddha", "Kalki"], description: "Beyond physical limitations" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-emerald-50">
      {/* Navigation Header */}
      <div className="bg-white border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/journey"
              className="flex items-center gap-2 text-blue-900 hover:text-orange-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-medium">Back to Journey</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600">Chapter 4 of 5</div>
              <div className="flex items-center gap-2 text-blue-700">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">18 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-gray-200">
        <div 
          className="h-full bg-gradient-to-r from-green-600 to-emerald-700 transition-all duration-300"
          style={{ width: `${(activeSection / sections.length) * 100}%` }}
        />
      </div>

      {/* Chapter Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 rounded-full px-6 py-3 text-sm font-medium mb-8">
            <Play className="w-5 h-5" />
            Chapter 4: The Descent of Divinity
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            The Doctrine of <span className="text-green-600">Avatara</span>
          </h1>
          
          <p className="text-xl text-blue-700 leading-relaxed max-w-3xl mx-auto mb-12">
            The doctrine of avatara is a central pillar of Hindu theology that directly addresses how gods came to Earth. 
            This concept provides a way for the divine to actively intervene in the material world—a tangible and relatable 
            expression of the impersonal Brahman tied to the cosmic cycle of the Yugas.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeSection === section.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-green-700 hover:bg-green-50 border border-green-200'
                }`}
              >
                {section.id}. {section.title.split(':')[0]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: Purpose and Philosophy */}
      {activeSection === 1 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl flex items-center justify-center">
                  <ArrowDown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-900">The Purpose and Philosophy of Avatars</h2>
                  <p className="text-green-600 font-medium">Why the supreme divine descends to Earth</p>
                </div>
              </div>

              <div className="prose prose-blue max-w-none">
                <p className="text-lg leading-relaxed text-blue-800 mb-8">
                  The term <strong>avatara</strong> literally means "descent." The core purpose of these incarnations is for 
                  a supreme being, most notably Vishnu, to descend to Earth to <strong>"restore cosmic order and protect dharma"</strong> 
                  when humanity is threatened by chaos and evil. This doctrine provides a way for the divine to be immanent 
                  in the world, addressing specific challenges and re-establishing universal laws.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-bold text-blue-900 mb-4">🎯 The Core Mission</h4>
                  <ul className="space-y-3 text-blue-800">
                    <li>• <strong>Restore Cosmic Order:</strong> When dharma (righteousness) declines dangerously</li>
                    <li>• <strong>Protect the Innocent:</strong> Shield devotees and righteous beings from evil</li>
                    <li>• <strong>Destroy Adharma:</strong> Eliminate forces that corrupt cosmic balance</li>
                    <li>• <strong>Teach by Example:</strong> Demonstrate ideal behavior and spiritual principles</li>
                    <li>• <strong>Accessibility:</strong> Make the infinite divine accessible to finite beings</li>
                  </ul>
                </div>

                <h4 className="text-xl font-bold text-blue-900 mb-6">The Paradox of Divine Omnipresence</h4>
                <p className="text-blue-800 leading-relaxed mb-6">
                  A key philosophical aspect of the avatara doctrine is its solution to the paradox of divine omnipresence. 
                  The research indicates that Vishnu <strong>"expands into an avatar, which descends to Earth, while Vishnu remains in Vaikuntha"</strong>. 
                  This allows multiple forms of the deity, such as Parashurama and Rama, to exist simultaneously.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                    <h5 className="text-lg font-bold text-green-800 mb-3">🌌 Transcendent Aspect</h5>
                    <p className="text-green-800">
                      Vishnu remains in <strong>Vaikuntha</strong> (divine realm) as the unchanging, infinite, ultimate reality. 
                      The supreme consciousness is never diminished or limited by incarnation.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
                    <h5 className="text-lg font-bold text-blue-800 mb-3">🌍 Immanent Aspect</h5>
                    <p className="text-blue-800">
                      Simultaneously, Vishnu <strong>expands into avatars</strong> on Earth, fully present and active in 
                      material reality. Each avatar is complete divinity, not a partial manifestation.
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-blue-900 mb-6">Theological Sophistication</h4>
                <p className="text-blue-800 leading-relaxed mb-6">
                  This demonstrates a sophisticated theological model where the divine can manifest in different forms and 
                  times without losing its ultimate, unchanging nature. The myths of the avatars are therefore not just 
                  isolated stories but <strong>powerful allegories that illustrate the divine's active and benevolent role in human history</strong>.
                </p>

                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-bold text-yellow-800 mb-4">⚡ Divine Intervention Principles</h4>
                  <ul className="space-y-2 text-yellow-800">
                    <li>• <strong>Cyclical Necessity:</strong> Descent occurs when dharma falls below critical threshold</li>
                    <li>• <strong>Age-Appropriate Form:</strong> Avatar form matches the consciousness of the age</li>
                    <li>• <strong>Complete Divinity:</strong> Each incarnation is fully divine, not partial</li>
                    <li>• <strong>Universal Accessibility:</strong> Divine love made accessible to all beings</li>
                    <li>• <strong>Teaching Function:</strong> Avatars demonstrate spiritual ideals through living example</li>
                  </ul>
                </div>

                <h4 className="text-xl font-bold text-blue-900 mb-6">Connection to Yuga Cycle</h4>
                <p className="text-blue-800 leading-relaxed mb-6">
                  The avatara doctrine is deeply tied to the cosmic cycle of the Yugas. As each age progresses and dharma 
                  declines, different types of divine intervention become necessary. The sequential nature of the avatars 
                  reflects not just the evolution of life but the changing spiritual needs of humanity across cosmic time.
                </p>

                <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-purple-800 mb-3">🌟 The Revolutionary Concept</h4>
                  <p className="text-purple-800">
                    The avatara doctrine revolutionized Hindu theology by solving the age-old question: How can the infinite, 
                    formless Brahman relate to finite, suffering beings? The answer: <strong>Divine love compels descent</strong>. 
                    The supreme reality doesn't remain aloof but actively participates in creation's welfare. This makes 
                    Hinduism both transcendent (acknowledging ultimate formless reality) and deeply personal (accessible 
                    divine relationships). The avatars prove that the divine cares enough to come down—literally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 2: The Dashavatara */}
      {activeSection === 2 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-900">The Dashavatara: A Chronological Analysis</h2>
                  <p className="text-green-600 font-medium">Ten divine descents across cosmic time</p>
                </div>
              </div>

              <div className="prose prose-blue max-w-none">
                <p className="text-lg leading-relaxed text-blue-800 mb-8">
                  The Dashavatara are the ten primary incarnations of Vishnu. Their sequential order can be interpreted 
                  as a symbolic narrative of the <strong>evolution of life and human society</strong>, with each form addressing 
                  the specific needs of a particular Yuga. This structure organizes complex narratives into a coherent 
                  and purposeful timeline.
                </p>

                <h4 className="text-xl font-bold text-blue-900 mb-6">The Evolutionary Allegory</h4>
                <p className="text-blue-800 leading-relaxed mb-8">
                  This chronological progression, from non-human forms (fish, tortoise, boar) to a divine-human hybrid 
                  (man-lion) and finally to fully human forms (Rama, Krishna), allegorically represents a narrative of 
                  <strong>biological and societal evolution</strong>. This deepens the significance of the myths, suggesting they 
                  are not just isolated stories but a symbolic narrative of humanity's journey toward spiritual maturity.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {evolutionStages.map((stage, index) => (
                    <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 border border-blue-100">
                      <h5 className="font-bold text-blue-900 mb-2">{stage.stage}</h5>
                      <p className="text-blue-800 text-sm mb-3">{stage.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {stage.avatars.map((avatar, i) => (
                          <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                            {avatar}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <h4 className="text-xl font-bold text-blue-900 mb-6">Detailed Avatar Analysis</h4>

                <div className="space-y-8">
                  {dashavatara.map((avatar, index) => (
                    <div key={index} className={`bg-gradient-to-r ${avatar.color} rounded-2xl p-1 shadow-lg hover:shadow-xl transition-all duration-300`}>
                      <div className="bg-white rounded-xl p-6">
                        <div className="flex items-start gap-6">
                          {/* Avatar Icon & Number */}
                          <div className="flex-shrink-0">
                            <div className={`w-16 h-16 bg-gradient-to-br ${avatar.color} rounded-xl flex items-center justify-center text-white shadow-md mb-2`}>
                              {avatar.icon}
                            </div>
                            <div className="text-center text-sm font-bold text-gray-600">#{index + 1}</div>
                          </div>

                          <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                              <div>
                                <h5 className="text-2xl font-bold text-blue-900 mb-1">{avatar.name}</h5>
                                <p className="text-blue-700 font-medium">{avatar.form}</p>
                              </div>
                              <div className="text-right mt-2 md:mt-0">
                                <div className="text-sm text-gray-600">{avatar.yuga}</div>
                                <div className="text-xs text-gray-500">{avatar.evolution}</div>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                              <div className="bg-blue-50 rounded-lg p-4">
                                <h6 className="font-semibold text-blue-900 mb-2">🎭 Key Myth</h6>
                                <p className="text-blue-800 text-sm leading-relaxed">{avatar.keyMyth}</p>
                              </div>
                              <div className="bg-green-50 rounded-lg p-4">
                                <h6 className="font-semibold text-green-900 mb-2">⚖️ Dharma Value</h6>
                                <p className="text-green-800 text-sm leading-relaxed">{avatar.dharmaValue}</p>
                              </div>
                            </div>

                            {/* Special details for key avatars */}
                            {avatar.name === 'Rama' && (
                              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-4 mt-4">
                                <h6 className="font-semibold text-blue-900 mb-2">🏰 The Ideal King (Maryada Purushottama)</h6>
                                <p className="text-blue-800 text-sm">
                                  Rama represents perfect adherence to dharma even when it requires personal sacrifice. 
                                  His story in the Ramayana establishes the ideal of righteous kingship and moral conduct 
                                  that influenced Indian civilization for millennia.
                                </p>
                              </div>
                            )}

                            {avatar.name === 'Krishna' && (
                              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4 mt-4">
                                <h6 className="font-semibold text-purple-900 mb-2">🎵 The Divine Teacher (Yogeshwar)</h6>
                                <p className="text-purple-800 text-sm">
                                  Krishna transcends the rule-bound dharma of Rama to teach situation-appropriate action. 
                                  In the Bhagavad Gita, he reveals that true dharma sometimes requires going beyond 
                                  conventional morality to serve the greater cosmic good.
                                </p>
                              </div>
                            )}

                            {avatar.name === 'Kalki' && (
                              <div className="bg-gradient-to-r from-gray-100 to-slate-100 rounded-lg p-4 mt-4">
                                <h6 className="font-semibold text-gray-900 mb-2">⚔️ The Future Avatar</h6>
                                <p className="text-gray-800 text-sm">
                                  Kalki represents the completion of the cosmic cycle—the final transformation that 
                                  destroys the age of darkness (Kali Yuga) and ushers in a new golden age (Satya Yuga). 
                                  This avatar embodies hope for ultimate cosmic renewal.
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl p-6 mt-12">
                  <h4 className="text-lg font-bold text-orange-800 mb-3">🌟 The Sequential Purpose</h4>
                  <p className="text-orange-800 mb-4">
                    This chronological progression reveals the genius of the avatara doctrine. Each incarnation serves 
                    multiple purposes simultaneously:
                  </p>
                  <ul className="space-y-2 text-orange-800">
                    <li>• <strong>Evolutionary Allegory:</strong> From simple to complex life forms</li>
                    <li>• <strong>Spiritual Development:</strong> From basic preservation to transcendent wisdom</li>
                    <li>• <strong>Age-Appropriate Teaching:</strong> Different Yugas require different approaches</li>
                    <li>• <strong>Cosmic Restoration:</strong> Each avatar restores dharma for its time</li>
                    <li>• <strong>Universal Accessibility:</strong> Every being can relate to at least one form</li>
                  </ul>
                  <p className="text-orange-800 mt-4">
                    The Dashavatara thus becomes not just a collection of myths but a <strong>comprehensive theology of divine intervention</strong> 
                    that spans all of existence—from the primordial to the transcendent, from the cosmic to the personal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Navigation Footer */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <Link
              href="/journey/supreme-trinity"
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              The Supreme Trinity
            </Link>
            
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">Final Chapter</div>
              <div className="font-medium text-blue-900">The Web of Divinity</div>
            </div>
            
            <Link
              href="/journey/web-of-divinity"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-lg hover:shadow-lg transition-all"
            >
              Complete Journey
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}