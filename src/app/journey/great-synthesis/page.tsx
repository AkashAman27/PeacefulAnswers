'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Users, TrendingUp, BookOpen, Clock, ArrowUpDown, Zap } from 'lucide-react'

export default function GreatSynthesisPage() {
  const [activeSection, setActiveSection] = useState(1)

  const sections = [
    {
      id: 1,
      title: "The Metamorphosis of Deities",
      description: "How ancient gods transformed and new ones emerged"
    },
    {
      id: 2,
      title: "The Role of the Epics and Puranas",
      description: "Literary vehicles for theological transformation"
    },
    {
      id: 3,
      title: "The Concept of the Yuga Cycle",
      description: "Cyclical time and divine intervention"
    }
  ]

  const transformationExamples = [
    {
      deity: "Indra",
      before: "King of gods, 250 hymns in Rigveda",
      after: "Portrayed with 'craven, greedy' ethical lapses",
      reason: "Virtues transferred to Vishnu and Shiva",
      appeal: "Elite Vedic class"
    },
    {
      deity: "Rudra/Shiva",
      before: "Minor deity, 4 hymns, associated with destruction",
      after: "Supreme Being in Shaivism, widely worshipped",
      reason: "Appealed to 'lower strata' and 'left outs'",
      appeal: "Mass population, including asuras"
    },
    {
      deity: "Vishnu",
      before: "Minor deity, 5 hymns in Rigveda",
      after: "Supreme Being in Vaishnavism, Preserver",
      reason: "Personal devotion (bhakti) over elaborate rituals",
      appeal: "Broader population base"
    }
  ]

  const yugaCycle = [
    {
      yuga: "Satya Yuga",
      duration: "1,728,000 years",
      dharma: "100% righteousness",
      description: "Golden Age of truth and virtue",
      color: "from-yellow-400 to-amber-500"
    },
    {
      yuga: "Treta Yuga", 
      duration: "1,296,000 years",
      dharma: "75% righteousness",
      description: "Silver Age, decline begins",
      color: "from-gray-300 to-gray-400"
    },
    {
      yuga: "Dvapara Yuga",
      duration: "864,000 years", 
      dharma: "50% righteousness",
      description: "Bronze Age, increasing darkness",
      color: "from-amber-600 to-orange-700"
    },
    {
      yuga: "Kali Yuga",
      duration: "432,000 years",
      dharma: "25% righteousness", 
      description: "Iron Age, current age of darkness",
      color: "from-red-700 to-red-900"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-red-50">
      {/* Navigation Header */}
      <div className="bg-white border-b border-orange-100 sticky top-0 z-50">
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
              <div className="text-sm text-gray-600">Chapter 2 of 5</div>
              <div className="flex items-center gap-2 text-blue-700">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">20 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-gray-200">
        <div 
          className="h-full bg-gradient-to-r from-orange-600 to-red-600 transition-all duration-300"
          style={{ width: `${(activeSection / sections.length) * 100}%` }}
        />
      </div>

      {/* Chapter Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 rounded-full px-6 py-3 text-sm font-medium mb-8">
            <Users className="w-5 h-5" />
            Chapter 2: The Great Synthesis
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            The Transition from Vedic <span className="text-orange-600">Ritualism to Puranic Devotionalism</span>
          </h1>
          
          <p className="text-xl text-blue-700 leading-relaxed max-w-3xl mx-auto mb-12">
            The decline of the Vedic pantheon and the rise of the modern Hindu gods was a pivotal moment 
            in the religious history of the Indian subcontinent—a complex transformation driven by changing 
            societal needs and the strategic assimilation of local beliefs.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeSection === section.id
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-white text-orange-700 hover:bg-orange-50 border border-orange-200'
                }`}
              >
                {section.id}. {section.title.split(':')[0]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: Metamorphosis of Deities */}
      {activeSection === 1 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <ArrowUpDown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-900">The Metamorphosis of Deities</h2>
                  <p className="text-orange-600 font-medium">How gods transformed to meet new cultural needs</p>
                </div>
              </div>

              <div className="prose prose-blue max-w-none">
                <p className="text-lg leading-relaxed text-blue-800 mb-8">
                  The research confirms a significant shift in the Hindu pantheon from the Vedic to the Puranic period. 
                  Mainstream Vedic deities, such as Indra, were "demoted" in the Puranas and often portrayed with 
                  "craven, greedy" and "ethical lapses" while their "virtues and glory" were transferred to new, 
                  more prominent figures, particularly Vishnu and Shiva.
                </p>

                <h4 className="text-xl font-bold text-blue-900 mb-6">The Divine Transformation</h4>

                <div className="space-y-6 mb-8">
                  {transformationExamples.map((example, index) => (
                    <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-blue-100">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                          {example.deity[0]}
                        </div>
                        <h5 className="text-lg font-bold text-blue-900">{example.deity}</h5>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h6 className="font-semibold text-red-700 mb-2">Vedic Period</h6>
                          <p className="text-red-800 bg-red-50 p-3 rounded-lg">{example.before}</p>
                        </div>
                        <div>
                          <h6 className="font-semibold text-green-700 mb-2">Puranic Period</h6>
                          <p className="text-green-800 bg-green-50 p-3 rounded-lg">{example.after}</p>
                        </div>
                      </div>
                      
                      <div className="bg-yellow-50 rounded-lg p-4">
                        <p className="text-yellow-800"><strong>Reason:</strong> {example.reason}</p>
                        <p className="text-yellow-800"><strong>Appeal:</strong> {example.appeal}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-bold text-orange-800 mb-4">🔄 Cultural Context of Change</h4>
                  <ul className="space-y-3 text-orange-800">
                    <li>• <strong>Geographic Expansion:</strong> Indo-Aryans moved deeper into the subcontinent, encountering larger populations with indigenous beliefs</li>
                    <li>• <strong>Religious Competition:</strong> Need to compete with Buddhism and Jainism required more accessible worship</li>
                    <li>• <strong>Social Integration:</strong> Incorporation of non-Vedic Indo-Aryan heritage and local traditions</li>
                    <li>• <strong>Ritual Simplification:</strong> Move from elaborate, expensive Vedic rituals to personal devotion (bhakti)</li>
                  </ul>
                </div>

                <h4 className="text-xl font-bold text-blue-900 mb-4">The Survival Strategy</h4>
                <p className="text-blue-800 leading-relaxed mb-6">
                  This transformation was fundamentally a matter of <strong>religious survival</strong>. The Brahmins broadened 
                  their services to new patrons and religious movements. The new gods offered "less worshipping procedure" 
                  and emphasized personal devotion, becoming a powerful and more accessible alternative to the complex 
                  Vedic ritual system.
                </p>

                <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-purple-800 mb-3">💡 Key Insight</h4>
                  <p className="text-purple-800">
                    This demonstrates how theological change is not an isolated phenomenon but is deeply intertwined with 
                    societal pressures and the need for a religion to adapt and broaden its appeal to new audiences. 
                    The gods evolved because society evolved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 2: Epics and Puranas */}
      {activeSection === 2 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-900">The Role of the Epics and Puranas</h2>
                  <p className="text-orange-600 font-medium">Literary vehicles for the great synthesis</p>
                </div>
              </div>

              <div className="prose prose-blue max-w-none">
                <p className="text-lg leading-relaxed text-blue-800 mb-8">
                  The Epics (Mahabharata and Ramayana) and the Puranas were the primary vehicles for this great synthesis. 
                  These texts performed a crucial function: they <strong>humanized the divine</strong> while providing a 
                  genealogical framework that linked the divine to mythical human history.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-blue-900 mb-4">📚 The Puranas</h4>
                    <ul className="space-y-3 text-blue-800">
                      <li>• <strong>Vast literature</strong> dating back several centuries BCE</li>
                      <li>• Disseminated mainstream ideology to <strong>pre-literate groups</strong></li>
                      <li>• Made religion accessible during <strong>acculturation</strong> process</li>
                      <li>• Connected divine to human royal genealogies</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-orange-800 mb-4">⚔️ The Epics</h4>
                    <ul className="space-y-3 text-orange-800">
                      <li>• Featured Vedic deities in <strong>subordinate roles</strong></li>
                      <li>• Centered on <strong>human-divine heroes</strong> (Rama, Krishna)</li>
                      <li>• Showed gods living among people as <strong>ideals</strong></li>
                      <li>• Created "more popular heroes of the masses"</li>
                    </ul>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-blue-900 mb-6">Humanizing the Divine</h4>
                <p className="text-blue-800 leading-relaxed mb-6">
                  While the Epics still feature Vedic deities like Indra and Agni, they center their narratives on 
                  human-like heroes who are also divine incarnations. These stories established Rama and Krishna as 
                  relatable figures by showing how "God himself descends to the mortal world, to live with people 
                  and demonstrate what an ideal life is like."
                </p>

                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-bold text-yellow-800 mb-4">👑 Sacred Genealogies</h4>
                  <p className="text-yellow-800 mb-4">
                    The Puranas contain "royal genealogies of the lunar dynasty and solar dynasty which are regarded 
                    by Indian traditions as historic events." This framework:
                  </p>
                  <ul className="space-y-2 text-yellow-800">
                    <li>• Links <strong>Rama to the Solar dynasty</strong></li>
                    <li>• Connects <strong>Krishna to the Lunar dynasty</strong></li>
                    <li>• Creates continuous, epic narrative from divine to human</li>
                    <li>• Provides cultural and religious identity</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                    <h5 className="text-lg font-bold text-purple-800 mb-3">🌅 Solar Dynasty</h5>
                    <p className="text-purple-800">
                      <strong>Rama's lineage</strong> - Descendants of the Sun god, representing righteousness, 
                      duty, and cosmic order. The Ikshvaku dynasty established the ideal of dharmic kingship.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6">
                    <h5 className="text-lg font-bold text-indigo-800 mb-3">🌙 Lunar Dynasty</h5>
                    <p className="text-indigo-800">
                      <strong>Krishna's lineage</strong> - Descendants of the Moon, representing love, devotion, 
                      and the emotional aspects of divinity. The Yadava clan embodied divine play (lila).
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-green-800 mb-3">🎭 Cultural Impact</h4>
                  <p className="text-green-800">
                    This practice blurs the line between human and divine history, creating a <strong>sacred lineage</strong> 
                    that provides cultural and religious identity. The myths feel less like remote stories and more like 
                    integral parts of shared heritage, making the divine accessible and relatable to all people.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 3: Yuga Cycle */}
      {activeSection === 3 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-900">The Concept of the Yuga Cycle</h2>
                  <p className="text-orange-600 font-medium">Cyclical time providing structure for divine intervention</p>
                </div>
              </div>

              <div className="prose prose-blue max-w-none">
                <p className="text-lg leading-relaxed text-blue-800 mb-8">
                  The Hindu concept of cyclical time provides a profound philosophical structure that frames the entire 
                  divine drama. The universe is not created once and for all but is cyclically created and destroyed 
                  in an endless loop—a process that repeats general events ranging from a moment to the lifespan of the universe.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-bold text-blue-900 mb-4">⏰ The Cosmic Timeline</h4>
                  <ul className="space-y-2 text-blue-800">
                    <li>• <strong>Chatur-yuga:</strong> One complete cycle lasting 4.32 million years</li>
                    <li>• <strong>Four Yugas:</strong> Satya, Treta, Dvapara, and Kali</li>
                    <li>• <strong>Progressive Decline:</strong> Dharma decreases in each successive age</li>
                    <li>• <strong>Divine Intervention:</strong> Gods descend when dharma is threatened</li>
                  </ul>
                </div>

                <h4 className="text-xl font-bold text-blue-900 mb-6">The Four Ages of Cosmic Time</h4>

                <div className="space-y-6 mb-8">
                  {yugaCycle.map((yuga, index) => (
                    <div key={index} className={`bg-gradient-to-r ${yuga.color} rounded-xl p-1 shadow-lg`}>
                      <div className="bg-white rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h5 className="text-xl font-bold text-blue-900">{yuga.yuga}</h5>
                            <p className="text-blue-700 font-medium">{yuga.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-600">Duration</div>
                            <div className="font-bold text-blue-900">{yuga.duration}</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-700">Dharma Level:</span>
                            <span className="font-bold text-blue-900">{yuga.dharma}</span>
                          </div>
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full bg-gradient-to-r ${yuga.color} transition-all`}
                              style={{ width: yuga.dharma.split('%')[0] + '%' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <h4 className="text-xl font-bold text-blue-900 mb-6">Why Gods Come to Earth</h4>
                <p className="text-blue-800 leading-relaxed mb-6">
                  This framework explains why the gods must "come on earth." The decline of dharma, or cosmic order, 
                  in each succeeding yuga creates the necessary conditions for divine intervention. This worldview 
                  transforms myths from isolated events into a <strong>coherent, purposeful, and repeating cosmic drama</strong>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                    <h5 className="text-lg font-bold text-green-800 mb-3">🔄 Cyclical Renewal</h5>
                    <p className="text-green-800">
                      Destruction is not final but a necessary part of a larger cycle of renewal. 
                      Each ending becomes a new beginning, with dharma restored to its full strength.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                    <h5 className="text-lg font-bold text-purple-800 mb-3">⚖️ Cosmic Justice</h5>
                    <p className="text-purple-800">
                      The cyclical model provides a theological explanation for the problem of evil, 
                      presenting chaos as a precursor to restoration of righteousness.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-orange-800 mb-3">🌟 The Divine Purpose</h4>
                  <p className="text-orange-800">
                    This structure provides a powerful framework that justifies divine intervention and the inevitability 
                    of both chaos and renewal. It transforms the entire pantheon into active participants in a cosmic 
                    drama that repeats across time, giving profound meaning to every divine incarnation and intervention. 
                    The gods don't just visit Earth—they participate in the eternal dance of cosmic restoration.
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
              href="/journey/foundations-of-the-divine"
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Foundations of the Divine
            </Link>
            
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">Next Chapter</div>
              <div className="font-medium text-blue-900">The Supreme Trinity</div>
            </div>
            
            <Link
              href="/journey/supreme-trinity"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all"
            >
              Continue Journey
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}