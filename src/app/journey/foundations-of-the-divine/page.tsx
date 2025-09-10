'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, BookOpen, Sparkles, Eye, Clock, ArrowDown, Star } from 'lucide-react'

export default function FoundationsOfTheDivinePage() {
  const [activeSection, setActiveSection] = useState(1)

  const sections = [
    {
      id: 1,
      title: "The Primordial Reality: Brahman",
      description: "The ultimate, formless reality from which all existence emerges"
    },
    {
      id: 2,
      title: "The Early Pantheon of the Rigveda",
      description: "Nature-based deities of the ancient Vedic period"
    },
    {
      id: 3,
      title: "Seeds of the Puranic Divine",
      description: "Early hints of the gods who would later dominate Hinduism"
    }
  ]

  const vedicVsPuranic = [
    { deity: "Indra", vedic: "King of Gods, Sky God (250 hymns)", puranic: "Downgraded, subject to ethical lapses", guna: "Rajas (passion, action)" },
    { deity: "Agni", vedic: "Sacrificial fire, Messenger (200 hymns)", puranic: "Less prominent", guna: "Sattva (goodness, purity)" },
    { deity: "Brahma", vedic: "Minor/abstract concept", puranic: "Creator in the Trimurti", guna: "Rajas (passion, action)" },
    { deity: "Vishnu", vedic: "Minor Rigvedic deity (5 hymns)", puranic: "Preserver in the Trimurti, Supreme Being", guna: "Sattva (goodness, purity)" },
    { deity: "Rudra", vedic: "Minor deity (4 hymns), destruction", puranic: "Supreme Being in Shaivism, Destroyer", guna: "Tamas (darkness, chaos)" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-orange-50">
      {/* Navigation Header */}
      <div className="bg-white border-b border-blue-100 sticky top-0 z-50">
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
              <div className="text-sm text-gray-600">Chapter 1 of 5</div>
              <div className="flex items-center gap-2 text-blue-700">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">15 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-gray-200">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-indigo-700 transition-all duration-300"
          style={{ width: `${(activeSection / sections.length) * 100}%` }}
        />
      </div>

      {/* Chapter Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-6 py-3 text-sm font-medium mb-8">
            <Sparkles className="w-5 h-5" />
            Chapter 1: Foundations of the Divine
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            The Vedic and Upanishadic <span className="text-orange-600">Cosmic Principles</span>
          </h1>
          
          <p className="text-xl text-blue-700 leading-relaxed max-w-3xl mx-auto mb-12">
            The study of the Hindu pantheon necessitates an understanding of its abstract and philosophical origins, 
            a journey that begins not with personified gods but with primordial, cosmic principles.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeSection === section.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-blue-700 hover:bg-blue-50 border border-blue-200'
                }`}
              >
                {section.id}. {section.title.split(':')[0]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: Brahman */}
      {activeSection === 1 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-900">The Primordial Reality: The Concept of Brahman</h2>
                  <p className="text-orange-600 font-medium">The ultimate, formless reality from which all existence emerges</p>
                </div>
              </div>

              <div className="prose prose-blue max-w-none">
                <p className="text-lg leading-relaxed text-blue-800 mb-6">
                  The foundational concept in Hindu philosophy is <strong>Brahman</strong>, which represents the ultimate reality of the universe. 
                  As described in the Vedic Upanishads, Brahman is a universal principle that is not limited by dualities of 
                  existence or non-existence, but rather serves as the absolute ground from which all things—including time, 
                  space, and natural law—emerge.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-bold text-blue-900 mb-4">Key Characteristics of Brahman:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <span className="text-blue-800"><strong>Unchanging & Eternal:</strong> Transcends all boundaries and constraints</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <span className="text-blue-800"><strong>Gender-Neutral:</strong> Greater impersonality than masculine/feminine deities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <span className="text-blue-800"><strong>Infinite & Pervasive:</strong> The cause of all changes without changing itself</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <span className="text-blue-800"><strong>Beyond Description:</strong> Ultimately impossible to categorize through language</span>
                    </li>
                  </ul>
                </div>

                <h4 className="text-xl font-bold text-blue-900 mb-4">Brahman and Atman: The Individual Self</h4>
                <p className="text-blue-800 leading-relaxed mb-6">
                  Brahman's relationship with the individual self, or <strong>Atman</strong>, is central to Hindu philosophy. 
                  Different schools interpret this relationship differently:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-yellow-50 rounded-lg p-6">
                    <h5 className="text-lg font-bold text-yellow-800 mb-3">Dvaita Vedanta (Dualistic)</h5>
                    <p className="text-yellow-700">
                      Brahman is considered distinct from the Atman in each living being. 
                      The individual soul remains separate from the ultimate reality.
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h5 className="text-lg font-bold text-green-800 mb-3">Advaita Vedanta (Non-dualistic)</h5>
                    <p className="text-green-700">
                      The substance of Brahman is identical to Atman. The path to liberation 
                      is recognizing that one already is the ultimate reality.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-orange-800 mb-3">🔑 Key Insight</h4>
                  <p className="text-orange-800">
                    This sets up a crucial philosophical link between the cosmic and personal. Personal deities are not 
                    the final destination of spiritual inquiry but stepping stones to recognizing the profound, ineffable reality. 
                    The gods are expressions of a single, unifying source rather than independent creators.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 2: Rigveda Pantheon */}
      {activeSection === 2 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-900">The Early Pantheon of the Rigveda</h2>
                  <p className="text-orange-600 font-medium">Nature-based deities of ritual and function (c. 1500–500 BCE)</p>
                </div>
              </div>

              <div className="prose prose-blue max-w-none">
                <p className="text-lg leading-relaxed text-blue-800 mb-8">
                  In contrast to the abstract philosophy of the Upanishads, the early Vedic pantheon was centered on 
                  the personification of natural forces and their roles in ritual. The Rigveda contains 1,028 hymns, 
                  most dedicated to specific deities who served functional roles in agrarian-pastoral society.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-blue-900 mb-4">🔱 Indra - King of Gods</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li><strong>250 hymns</strong> - Most prominent deity</li>
                      <li><strong>Sky god</strong> and thunderbolt wielder</li>
                      <li><strong>Warrior deity</strong> - Victory in battle</li>
                      <li><strong>Rainbringer</strong> - Essential for agriculture</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-red-800 mb-4">🔥 Agni - Sacred Fire</h4>
                    <ul className="space-y-2 text-red-800">
                      <li><strong>200 hymns</strong> - Second most important</li>
                      <li><strong>Sacrificial fire</strong> - Ritual purification</li>
                      <li><strong>Divine messenger</strong> - Link to gods</li>
                      <li><strong>Household protector</strong> - Daily worship</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-bold text-yellow-800 mb-4">📊 The Dramatic Shift</h4>
                  <p className="text-yellow-700 mb-4">
                    It's remarkable that deities central to modern Hinduism played minor roles in this early period:
                  </p>
                  <ul className="space-y-2 text-yellow-700">
                    <li>• <strong>Rudra</strong> (future Shiva): Only 4 hymns out of 1,028</li>
                    <li>• <strong>Vishnu</strong>: Mentioned in just 5 hymns</li>
                    <li>• <strong>Brahma</strong>: Existed only as abstract concept</li>
                  </ul>
                </div>

                <h4 className="text-xl font-bold text-blue-900 mb-4">The Transactional Nature of Vedic Religion</h4>
                <p className="text-blue-800 leading-relaxed mb-6">
                  The functional nature of the early pantheon reveals a more <strong>transactional relationship</strong> with the divine. 
                  Gods were forces to be appeased and directed through elaborate ritual action—a system that would prove 
                  unsustainable and lead to dramatic religious evolution.
                </p>

                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-purple-800 mb-3">🔮 Looking Forward</h4>
                  <p className="text-purple-800">
                    The decline of these gods was a direct consequence of religious evolution that moved from 
                    <strong>outward ritual to inward devotion</strong> and philosophical inquiry. This transformation 
                    would reshape the entire spiritual landscape of India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 3: Seeds of Future */}
      {activeSection === 3 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl flex items-center justify-center">
                  <ArrowDown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-900">Seeds of the Puranic Divine</h2>
                  <p className="text-orange-600 font-medium">Continuities linking Vedic abstractions to personal deities</p>
                </div>
              </div>

              <div className="prose prose-blue max-w-none">
                <p className="text-lg leading-relaxed text-blue-800 mb-8">
                  While there are clear distinctions between the Vedic and Puranic pantheons, subtle but important 
                  continuities link the two eras. The late Vedic period saw the development of Brahmanism, which 
                  incorporated the Vedic corpus while beginning to speculate on Brahman as absolute reality.
                </p>

                <h4 className="text-xl font-bold text-blue-900 mb-6">The Comparative Evolution</h4>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                        <th className="px-6 py-4 text-left font-bold">Deity</th>
                        <th className="px-6 py-4 text-left font-bold">Vedic Role/Prominence</th>
                        <th className="px-6 py-4 text-left font-bold">Puranic Role/Prominence</th>
                        <th className="px-6 py-4 text-left font-bold">Associated Guna</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vedicVsPuranic.map((row, index) => (
                        <tr key={index} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                          <td className="px-6 py-4 font-bold text-blue-900">{row.deity}</td>
                          <td className="px-6 py-4 text-blue-800">{row.vedic}</td>
                          <td className="px-6 py-4 text-blue-800">{row.puranic}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded text-sm font-medium ${
                              row.guna.includes('Sattva') ? 'bg-green-100 text-green-800' :
                              row.guna.includes('Rajas') ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {row.guna}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-blue-900 mb-3">🔄 Gradual Evolution</h4>
                    <p className="text-blue-800">
                      The transition was not a clean break but a gradual process of evolution and synthesis. 
                      The concept of <strong>avatara</strong> (divine incarnation) has origins in the Vedas 
                      but gained prominence in the Puranas.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-orange-800 mb-3">🏛️ Philosophical Groundwork</h4>
                    <p className="text-orange-800">
                      Late Vedic speculation on <strong>Brahman as absolute reality</strong> laid the intellectual 
                      foundation for the personified deities that followed. Abstract concepts became accessible through form.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-purple-800 mb-3">🌟 The Great Transformation Ahead</h4>
                  <p className="text-purple-800">
                    This foundation of abstract cosmic principles and nature-based deities would undergo a revolutionary 
                    transformation as Indian society evolved, new populations were encountered, and competing religions 
                    challenged traditional Brahmanism. The stage was set for one of history's greatest religious syntheses.
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
              href="/journey"
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Journey Overview
            </Link>
            
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">Next Chapter</div>
              <div className="font-medium text-blue-900">The Great Synthesis</div>
            </div>
            
            <Link
              href="/journey/great-synthesis"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:shadow-lg transition-all"
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