'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, Compass, Users, Crown, Heart, Star, Clock, ArrowDown, Zap, Eye } from 'lucide-react'

export default function WebOfDivinityPage() {
  const [activeSection, setActiveSection] = useState(1)

  const sections = [
    {
      id: 1,
      title: "Divine and Royal Genealogies",
      description: "Sacred lineages connecting gods to human history"
    },
    {
      id: 2, 
      title: "The Power of the Feminine: Shakti",
      description: "The divine feminine energy that animates all existence"
    },
    {
      id: 3,
      title: "Mapping Ontological Relationships",
      description: "The complete conceptual framework of Hindu divinity"
    }
  ]

  const divineGenealogies = [
    {
      dynasty: "Solar Dynasty (Suryavansha)",
      founder: "Ikshvaku (son of Manu)",
      keyFigure: "Rama",
      characteristics: "Righteousness, duty, cosmic order",
      symbolism: "Sun's consistent path, dharmic leadership",
      color: "from-yellow-400 to-orange-500"
    },
    {
      dynasty: "Lunar Dynasty (Chandravansha)", 
      founder: "Pururavas (Moon god's lineage)",
      keyFigure: "Krishna",
      characteristics: "Love, devotion, emotional divinity",
      symbolism: "Moon's phases, divine play (lila)",
      color: "from-blue-400 to-indigo-500"
    }
  ]

  const shaktiManifestations = [
    {
      form: "Saraswati",
      consort: "Brahma",
      power: "Knowledge & Wisdom",
      function: "Guides creation through informed intention",
      color: "from-yellow-100 to-amber-100",
      icon: <Eye className="w-6 h-6" />
    },
    {
      form: "Lakshmi",
      consort: "Vishnu", 
      power: "Prosperity & Sustenance",
      function: "Provides resources for preservation",
      color: "from-pink-100 to-rose-100",
      icon: <Heart className="w-6 h-6" />
    },
    {
      form: "Parvati",
      consort: "Shiva",
      power: "Dynamic Creative Force",
      function: "Activates consciousness for transformation",
      color: "from-purple-100 to-indigo-100",
      icon: <Zap className="w-6 h-6" />
    },
    {
      form: "Durga/Kali",
      consort: "Independent",
      power: "Supreme Warrior Energy",
      function: "Ultimate reality in goddess-centric traditions",
      color: "from-red-100 to-orange-100",
      icon: <Crown className="w-6 h-6" />
    }
  ]

  const ontologicalLevels = [
    {
      level: 1,
      title: "The Absolute (Brahman)",
      description: "The impersonal, ultimate, unchanging reality from which everything emerges",
      entities: ["Brahman"],
      color: "from-white to-gray-100",
      characteristics: ["Formless", "Infinite", "Eternal", "Beyond description"]
    },
    {
      level: 2,
      title: "Trinity of Functions (Trimurti)",
      description: "Cosmic functions personified as the first manifestations with form",
      entities: ["Brahma (Creation)", "Vishnu (Preservation)", "Shiva (Destruction)"],
      color: "from-blue-100 to-indigo-100", 
      characteristics: ["Functional roles", "Personified principles", "Cosmic maintenance"]
    },
    {
      level: 3,
      title: "Dynamic Force (Shakti)",
      description: "Creative and sustaining power embodied in divine consorts",
      entities: ["Saraswati", "Lakshmi", "Parvati", "Mahadevi"],
      color: "from-pink-100 to-purple-100",
      characteristics: ["Active energy", "Creative power", "Divine feminine", "Universal activation"]
    },
    {
      level: 4,
      title: "Descending Manifestations (Avatara)",
      description: "Direct divine intervention in material world",
      entities: ["Matsya", "Kurma", "Varaha", "Narasimha", "Vamana", "Parashurama", "Rama", "Krishna", "Buddha", "Kalki"],
      color: "from-green-100 to-emerald-100",
      characteristics: ["Material intervention", "Dharma restoration", "Accessible divinity", "Cosmic correction"]
    },
    {
      level: 5,
      title: "Sectarian Apexes",
      description: "Different traditions place their chosen deity at the pinnacle",
      entities: ["Vaishnavism (Vishnu Supreme)", "Shaivism (Shiva Supreme)", "Shaktism (Goddess Supreme)"],
      color: "from-yellow-100 to-amber-100",
      characteristics: ["Multiple valid paths", "Sectarian supremacy", "Unity in diversity", "One goal, many approaches"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-amber-50">
      {/* Navigation Header */}
      <div className="bg-white border-b border-yellow-100 sticky top-0 z-50">
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
              <div className="text-sm text-gray-600">Chapter 5 of 5</div>
              <div className="flex items-center gap-2 text-blue-700">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">22 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-gray-200">
        <div 
          className="h-full bg-gradient-to-r from-yellow-500 to-amber-600 transition-all duration-300"
          style={{ width: `${(activeSection / sections.length) * 100}%` }}
        />
      </div>

      {/* Chapter Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 rounded-full px-6 py-3 text-sm font-medium mb-8">
            <Compass className="w-5 h-5" />
            Chapter 5: The Web of Divinity
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            Genealogies, Consorts, and <span className="text-yellow-600">Sectarian Ontologies</span>
          </h1>
          
          <p className="text-xl text-blue-700 leading-relaxed max-w-3xl mx-auto mb-12">
            To fully understand the Hindu pantheon, we must move beyond linear narratives to explore the intricate 
            web of relationships, genealogies, and philosophical concepts that connect all divine figures. This chapter 
            synthesizes our journey, highlighting the crucial role of the divine feminine and mapping the complex 
            ontological relationships that define the Hindu religious experience.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeSection === section.id
                    ? 'bg-yellow-600 text-white shadow-lg'
                    : 'bg-white text-yellow-700 hover:bg-yellow-50 border border-yellow-200'
                }`}
              >
                {section.id}. {section.title.split(':')[0]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: Divine Genealogies */}
      {activeSection === 1 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-900">Divine and Royal Genealogies in the Puranas</h2>
                  <p className="text-yellow-600 font-medium">Sacred lineages connecting divine to human history</p>
                </div>
              </div>

              <div className="prose prose-blue max-w-none">
                <p className="text-lg leading-relaxed text-blue-800 mb-8">
                  The Puranas and Epics provide a genealogical framework that intertwines divine figures with mythical 
                  human history, most notably through the Solar and Lunar dynasties. All present royal lines are traced 
                  from <strong>Vaivasvata Manu</strong>, who was saved by Vishnu's Matsya avatar from a great flood.
                </p>

                <h4 className="text-xl font-bold text-blue-900 mb-6">The Two Great Dynasties</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {divineGenealogies.map((dynasty, index) => (
                    <div key={index} className={`bg-gradient-to-r ${dynasty.color} rounded-2xl p-1 shadow-lg`}>
                      <div className="bg-white rounded-xl p-6">
                        <div className="text-center mb-4">
                          <h5 className="text-xl font-bold text-blue-900 mb-2">{dynasty.dynasty}</h5>
                          <p className="text-blue-700 font-medium">Founded by {dynasty.founder}</p>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="bg-blue-50 rounded-lg p-4">
                            <h6 className="font-semibold text-blue-900 mb-2">🏛️ Key Divine Figure</h6>
                            <p className="text-blue-800">{dynasty.keyFigure}</p>
                          </div>
                          
                          <div className="bg-green-50 rounded-lg p-4">
                            <h6 className="font-semibold text-green-900 mb-2">⚖️ Core Characteristics</h6>
                            <p className="text-green-800">{dynasty.characteristics}</p>
                          </div>
                          
                          <div className="bg-purple-50 rounded-lg p-4">
                            <h6 className="font-semibold text-purple-900 mb-2">🔮 Symbolism</h6>
                            <p className="text-purple-800">{dynasty.symbolism}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <h4 className="text-xl font-bold text-blue-900 mb-6">The Genealogical Framework</h4>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
                  <h5 className="text-lg font-bold text-blue-900 mb-4">🌊 The Cosmic Origin</h5>
                  <ul className="space-y-3 text-blue-800">
                    <li>• <strong>Vaivasvata Manu:</strong> Saved by Matsya avatar, father of all royal lineages</li>
                    <li>• <strong>Ikshvaku (eldest son):</strong> Founded Solar dynasty → leads to Rama</li>
                    <li>• <strong>Pururavas:</strong> Founded Lunar dynasty → leads to Krishna</li>
                    <li>• <strong>Continuous Lineage:</strong> Connects divine avatars to human royal houses</li>
                  </ul>
                </div>

                <h4 className="text-xl font-bold text-blue-900 mb-6">Sacred History vs Mythical History</h4>
                <p className="text-blue-800 leading-relaxed mb-6">
                  This practice of linking divine figures to human royalty is more than a simple narrative device; 
                  it serves to create a <strong>sacred history that collapses the distinction between the human and the divine</strong>. 
                  By presenting the gods not as remote, alien beings but as part of a continuous, living ancestral lineage, 
                  the Puranas provide a deep sense of cultural and religious identity.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6">
                    <h5 className="text-lg font-bold text-yellow-800 mb-3">👑 Cultural Identity</h5>
                    <p className="text-yellow-800">
                      Royal houses could trace their lineage directly to divine avatars, legitimizing their rule through 
                      sacred ancestry. This created a seamless connection between cosmic order and political authority.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6">
                    <h5 className="text-lg font-bold text-orange-800 mb-3">🏛️ Living Heritage</h5>
                    <p className="text-orange-800">
                      The divine stories feel less like remote myths and more like integral parts of shared heritage. 
                      This makes the divine accessible—not distant gods but ancestral family.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-green-800 mb-3">🌟 The Genius of Genealogical Integration</h4>
                  <p className="text-green-800">
                    This genealogical framework transforms abstract theological concepts into <strong>personal, relatable narratives</strong>. 
                    When a devotee worships Rama or Krishna, they're not just venerating distant deities—they're connecting 
                    with divine ancestors who once walked the Earth, faced human challenges, and demonstrated how to live 
                    with dharma. This is why Hindu devotion feels so personal and familial. The gods are literally family—
                    divine relatives in an extended cosmic genealogy that includes every soul.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 2: Shakti and Divine Feminine */}
      {activeSection === 2 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-900">The Power of the Feminine: Shakti and Her Manifestations</h2>
                  <p className="text-pink-600 font-medium">The divine energy that animates all existence</p>
                </div>
              </div>

              <div className="prose prose-blue max-w-none">
                <p className="text-lg leading-relaxed text-blue-800 mb-8">
                  A comprehensive understanding of the Hindu pantheon is incomplete without acknowledging the profound 
                  role of the divine feminine. In the goddess-centric tradition of <strong>Shaktism</strong>, the divine feminine 
                  energy, Shakti, is revered as the supreme power, or <strong>Mahadevi</strong>, who is considered identical to 
                  the ultimate reality (Brahman).
                </p>

                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-bold text-pink-800 mb-4">🔮 Shakti as Supreme Reality</h4>
                  <ul className="space-y-3 text-pink-800">
                    <li>• <strong>Source of Creation:</strong> All existence emerges from divine feminine energy</li>
                    <li>• <strong>Universal Embodiment:</strong> The material world is her physical form</li>
                    <li>• <strong>Animating Power:</strong> She governs and activates all cosmic functions</li>
                    <li>• <strong>Male Deities as Subordinate:</strong> Brahma, Vishnu, Shiva cannot function without her</li>
                  </ul>
                </div>

                <h4 className="text-xl font-bold text-blue-900 mb-6">Manifestations of the Divine Feminine</h4>
                <p className="text-blue-800 leading-relaxed mb-6">
                  The consorts of the Trimurti are not merely wives but are personifications of this supreme feminine energy. 
                  Each represents a specific aspect of Shakti's creative and sustaining power.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {shaktiManifestations.map((form, index) => (
                    <div key={index} className={`bg-gradient-to-r ${form.color} rounded-xl p-6 border border-gray-100`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white">
                          {form.icon}
                        </div>
                        <div>
                          <h5 className="text-xl font-bold text-blue-900">{form.form}</h5>
                          <p className="text-blue-700 font-medium">Consort of {form.consort}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <h6 className="font-semibold text-purple-900">⚡ Power</h6>
                          <p className="text-purple-800">{form.power}</p>
                        </div>
                        <div>
                          <h6 className="font-semibold text-purple-900">🔄 Function</h6>
                          <p className="text-purple-800">{form.function}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <h4 className="text-xl font-bold text-blue-900 mb-6">Ardhanarishvara: The Ultimate Unity</h4>
                <p className="text-blue-800 leading-relaxed mb-6">
                  The iconography of <strong>Ardhanarishvara</strong>, the half-male, half-female deity (usually depicting Shiva-Parvati), 
                  visually represents this interdependence and the inherent unity of masculine and feminine energies in the cosmos. 
                  This form demonstrates that ultimate reality transcends gender dualities while containing both principles.
                </p>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-bold text-purple-800 mb-4">⚖️ The Cosmic Balance</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-purple-900 mb-2">🧘 Masculine Principle (Shiva)</h5>
                      <ul className="text-purple-800 text-sm space-y-1">
                        <li>• Consciousness</li>
                        <li>• Static awareness</li>
                        <li>• Witness principle</li>
                        <li>• Transcendent aspect</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-purple-900 mb-2">⚡ Feminine Principle (Shakti)</h5>
                      <ul className="text-purple-800 text-sm space-y-1">
                        <li>• Energy/Power</li>
                        <li>• Dynamic activity</li>
                        <li>• Creative force</li>
                        <li>• Immanent aspect</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-blue-900 mb-6">Independent Goddess Traditions</h4>
                <p className="text-blue-800 leading-relaxed mb-6">
                  Shakti also manifests as powerful, independent deities such as <strong>Durga and Kali</strong>, who are viewed 
                  as ultimate reality in their own right in certain traditions. The theology of Shaktism provides a profound 
                  non-dualistic perspective that rejects traditional binaries.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6">
                    <h5 className="text-lg font-bold text-red-800 mb-3">⚔️ Durga: The Warrior Goddess</h5>
                    <p className="text-red-800">
                      Created by the combined energy of all gods to defeat the buffalo demon Mahishasura. 
                      Represents the fierce protective aspect of divine feminine energy—compassion 
                      with the power to destroy evil.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
                    <h5 className="text-lg font-bold text-indigo-800 mb-3">🗡️ Kali: The Fierce Mother</h5>
                    <p className="text-indigo-800">
                      The dark goddess who destroys ego and ignorance. Her fearsome appearance masks 
                      ultimate compassion—she destroys what binds souls to suffering. Time itself 
                      (Kala) is under her domain.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-rose-800 mb-3">💫 The Shaktism Revolution</h4>
                  <p className="text-rose-800">
                    By viewing the goddess as both the static Brahman and the dynamic Shakti, Shaktism presents a 
                    comprehensive ontological model where <strong>the universe is not an illusion but a real, embodied 
                    expression of the divine</strong>. This tradition offers a profound alternative to purely transcendent 
                    spirituality—the divine feminine makes the cosmic personal, the abstract embodied, and the distant 
                    intimately present. In Shakti, the ultimate reality doesn't just create the world—she <em>is</em> the world, 
                    in all its beauty, power, and transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 3: Ontological Map */}
      {activeSection === 3 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl flex items-center justify-center">
                  <Compass className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-900">Mapping the Ontological Relationships</h2>
                  <p className="text-indigo-600 font-medium">A conceptual framework of Hindu divinity</p>
                </div>
              </div>

              <div className="prose prose-blue max-w-none">
                <p className="text-lg leading-relaxed text-blue-800 mb-8">
                  The complexities and occasional contradictions in the Hindu pantheon, where different sects elevate 
                  their chosen deity to the status of supreme reality, can be understood not as a flaw but as a feature 
                  of a multi-faceted religious system. This conceptual map illustrates the intricate ontological 
                  relationships, demonstrating how the divine flows from a single, ultimate source into a myriad of personal manifestations.
                </p>

                <h4 className="text-xl font-bold text-blue-900 mb-8">The Five Levels of Divine Manifestation</h4>

                <div className="space-y-6 mb-8">
                  {ontologicalLevels.map((level, index) => (
                    <div key={index} className={`bg-gradient-to-r ${level.color} rounded-2xl p-1 shadow-lg`}>
                      <div className="bg-white rounded-xl p-6">
                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl flex items-center justify-center text-white text-xl font-bold">
                              {level.level}
                            </div>
                          </div>
                          
                          <div className="flex-1">
                            <h5 className="text-2xl font-bold text-blue-900 mb-3">{level.title}</h5>
                            <p className="text-blue-800 leading-relaxed mb-4">{level.description}</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                              <div className="bg-blue-50 rounded-lg p-4">
                                <h6 className="font-semibold text-blue-900 mb-2">🎭 Key Entities</h6>
                                <div className="flex flex-wrap gap-2">
                                  {level.entities.map((entity, i) => (
                                    <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">
                                      {entity}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              
                              <div className="bg-green-50 rounded-lg p-4">
                                <h6 className="font-semibold text-green-900 mb-2">⚡ Characteristics</h6>
                                <div className="flex flex-wrap gap-2">
                                  {level.characteristics.map((char, i) => (
                                    <span key={i} className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
                                      {char}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Special descriptions for each level */}
                            {level.level === 1 && (
                              <div className="bg-gray-50 rounded-lg p-4">
                                <p className="text-gray-800 text-sm">
                                  <strong>The Source:</strong> Pure consciousness, beyond all attributes. Neither male nor female, 
                                  neither personal nor impersonal—the absolute ground of being from which all diversity emerges.
                                </p>
                              </div>
                            )}

                            {level.level === 2 && (
                              <div className="bg-blue-50 rounded-lg p-4">
                                <p className="text-blue-800 text-sm">
                                  <strong>Functional Manifestation:</strong> Brahman takes form to perform cosmic maintenance. 
                                  Each deity represents a necessary universal function while remaining rooted in ultimate unity.
                                </p>
                              </div>
                            )}

                            {level.level === 3 && (
                              <div className="bg-pink-50 rounded-lg p-4">
                                <p className="text-pink-800 text-sm">
                                  <strong>Active Power:</strong> The divine feminine energy that makes all manifestation possible. 
                                  Without Shakti, consciousness remains static; without consciousness, energy lacks direction.
                                </p>
                              </div>
                            )}

                            {level.level === 4 && (
                              <div className="bg-green-50 rounded-lg p-4">
                                <p className="text-green-800 text-sm">
                                  <strong>Divine Accessibility:</strong> The transcendent becomes immanent. Ultimate reality 
                                  enters material existence to restore dharma and demonstrate divine compassion.
                                </p>
                              </div>
                            )}

                            {level.level === 5 && (
                              <div className="bg-yellow-50 rounded-lg p-4">
                                <p className="text-yellow-800 text-sm">
                                  <strong>Multiple Valid Paths:</strong> Different approaches to the same ultimate truth. 
                                  Each tradition provides a complete path while acknowledging the validity of other approaches.
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {index < ontologicalLevels.length - 1 && (
                          <div className="flex justify-center mt-6">
                            <ArrowDown className="w-8 h-8 text-gray-400" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <h4 className="text-xl font-bold text-blue-900 mb-6">The Unity Behind Diversity</h4>
                <p className="text-blue-800 leading-relaxed mb-6">
                  This conceptual model illustrates the <strong>"many paths, one goal"</strong> nature of Hinduism. The ultimate 
                  reality is one and ineffable, but it is experienced and worshipped through a multitude of forms, 
                  each providing a unique and valid path to spiritual liberation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                    <h5 className="text-lg font-bold text-blue-800 mb-3">🔄 Vaishnavism Path</h5>
                    <p className="text-blue-800 text-sm">
                      Through devotion to Vishnu and his avatars, practitioners develop love, surrender, and service. 
                      The personal relationship with the divine leads to union with ultimate reality.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-6">
                    <h5 className="text-lg font-bold text-gray-800 mb-3">🧘 Shaivism Path</h5>
                    <p className="text-gray-800 text-sm">
                      Through recognition of Shiva consciousness, practitioners transcend ego and limitation. 
                      The path of transformation leads to realizing one's essential divine nature.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6">
                    <h5 className="text-lg font-bold text-pink-800 mb-3">⚡ Shaktism Path</h5>
                    <p className="text-pink-800 text-sm">
                      Through honoring the divine feminine, practitioners embrace the sacredness of embodied existence. 
                      The material world becomes a direct expression of divine energy.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-bold text-purple-800 mb-4">🌐 The Complete System</h4>
                  <p className="text-purple-800 mb-4">
                    This ontological map reveals Hinduism's genius: it provides a complete spiritual system that can 
                    simultaneously satisfy the needs of:
                  </p>
                  <ul className="space-y-2 text-purple-800">
                    <li>• <strong>Philosophers:</strong> Through abstract Brahman and non-dual awareness</li>
                    <li>• <strong>Devotees:</strong> Through personal relationships with beloved deities</li>
                    <li>• <strong>Mystics:</strong> Through direct experience of consciousness and energy</li>
                    <li>• <strong>Practitioners:</strong> Through ethical living guided by dharmic principles</li>
                    <li>• <strong>Seekers:</strong> Through multiple valid approaches to transcendence</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-amber-800 mb-3">🎯 The Ultimate Teaching</h4>
                  <p className="text-amber-800">
                    The Hindu pantheon's complexity is its strength, not its weakness. It acknowledges that the infinite 
                    cannot be captured in any single form or approach. By offering <strong>countless entry points to the divine</strong>—
                    from abstract philosophy to personal devotion, from fierce transformation to gentle love—Hinduism 
                    honors the diverse ways consciousness seeks to know itself. The web of divinity ensures that every 
                    soul, regardless of temperament or inclination, can find their way home to the source. This is the 
                    ultimate compassion of a living spiritual tradition: <strong>infinite paths to infinite truth</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Journey Completion */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            <Star className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Journey Complete!</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              You have traveled through millennia of divine evolution, from abstract cosmic principles 
              to beloved personal deities, understanding how gods came to Earth and why they remain accessible to all seekers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <h4 className="text-lg font-bold mb-2">📚 Knowledge Gained</h4>
              <p className="text-blue-100">Complete understanding of Hindu divine evolution</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <h4 className="text-lg font-bold mb-2">🔗 Connections Made</h4>
              <p className="text-blue-100">Complex relationships between all divine figures</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <h4 className="text-lg font-bold mb-2">🌟 Wisdom Realized</h4>
              <p className="text-blue-100">The unity behind the diversity of spiritual paths</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <Link
              href="/journey/descent-of-divinity"
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              The Descent of Divinity
            </Link>
            
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">Journey Complete</div>
              <div className="font-medium text-blue-900">Return to Overview</div>
            </div>
            
            <Link
              href="/journey"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:shadow-lg transition-all"
            >
              Journey Home
              <Star className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}