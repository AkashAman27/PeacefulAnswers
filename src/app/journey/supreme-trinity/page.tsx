'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Star, Crown, Shield, Zap, Clock, Eye, Heart, Flame } from 'lucide-react'

export default function SupremeTrinityPage() {
  const [activeSection, setActiveSection] = useState(1)

  const sections = [
    {
      id: 1,
      title: "The Emergence of the Trimurti Doctrine",
      description: "Unifying creation, preservation, and destruction"
    },
    {
      id: 2,
      title: "The Creator: Brahma",
      description: "The personification of creation and cosmic birth"
    },
    {
      id: 3,
      title: "The Preserver: Vishnu",
      description: "Maintainer of dharma and cosmic order"
    },
    {
      id: 4,
      title: "The Destroyer: Shiva",
      description: "The principle of transformation and renewal"
    }
  ]

  const trimurtiComparison = [
    {
      deity: "Brahma",
      function: "Creator",
      consort: "Saraswati",
      guna: "Rajas",
      symbols: ["Lotus", "Vedas", "Swan", "Prayer Beads"],
      color: "from-yellow-400 to-amber-500",
      worship: "Very few temples",
      philosophy: "Knowledge required for creation"
    },
    {
      deity: "Vishnu", 
      function: "Preserver",
      consort: "Lakshmi",
      guna: "Sattva",
      symbols: ["Conch", "Discus", "Mace", "Lotus"],
      color: "from-blue-500 to-indigo-600",
      worship: "Widespread (Vaishnavism)",
      philosophy: "Maintenance of cosmic order"
    },
    {
      deity: "Shiva",
      function: "Destroyer/Transformer", 
      consort: "Parvati",
      guna: "Tamas",
      symbols: ["Trident", "Drum", "Third Eye", "Snake"],
      color: "from-gray-600 to-slate-700",
      worship: "Widespread (Shaivism)",
      philosophy: "Destruction for renewal"
    }
  ]

  const sectarianViews = [
    {
      tradition: "Vaishnavism",
      view: "Vishnu is the supreme being who creates Brahma and Shiva",
      philosophy: "Polymorphic monotheism - Vishnu as sole supreme being",
      followers: "Majority tradition",
      color: "from-blue-100 to-indigo-100"
    },
    {
      tradition: "Shaivism",
      view: "Shiva is the ultimate reality, identical to Brahman",
      philosophy: "Non-dualistic - all existence as Shiva's consciousness",
      followers: "Major tradition",
      color: "from-gray-100 to-slate-100"  
    },
    {
      tradition: "Shaktism",
      view: "The Divine Feminine is supreme, Trimurti are subordinate",
      philosophy: "Goddess-centric - Shakti as ultimate power",
      followers: "Goddess-focused tradition",
      color: "from-pink-100 to-rose-100"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-pink-50">
      {/* Navigation Header */}
      <div className="bg-white border-b border-purple-100 sticky top-0 z-50">
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
              <div className="text-sm text-gray-600">Chapter 3 of 5</div>
              <div className="flex items-center gap-2 text-blue-700">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">25 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-gray-200">
        <div 
          className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300"
          style={{ width: `${(activeSection / sections.length) * 100}%` }}
        />
      </div>

      {/* Chapter Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 rounded-full px-6 py-3 text-sm font-medium mb-8">
            <Star className="w-5 h-5" />
            Chapter 3: The Supreme Trinity
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            The Origins and Roles of the <span className="text-purple-600">Trimurti</span>
          </h1>
          
          <p className="text-xl text-blue-700 leading-relaxed max-w-3xl mx-auto mb-12">
            The Trimurti is a key theological concept that unifies the cosmic functions of creation, preservation, 
            and destruction into a triad of deities: Brahma, Vishnu, and Shiva. This doctrine represents a 
            strategic attempt to reconcile diverse devotional traditions with the philosophical principle of ultimate reality.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeSection === section.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-purple-700 hover:bg-purple-50 border border-purple-200'
                }`}
              >
                {section.id}. {section.title.split(':')[0]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: Trimurti Doctrine */}
      {activeSection === 1 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-900">The Emergence of the Trimurti Doctrine</h2>
                  <p className="text-purple-600 font-medium">Unifying cosmic functions in three divine forms</p>
                </div>
              </div>

              <div className="prose prose-blue max-w-none">
                <p className="text-lg leading-relaxed text-blue-800 mb-8">
                  The Trimurti, or "three forms," is the triple deity of supreme divinity in Hinduism. This doctrine 
                  personifies the cosmic functions, with Brahma as the creator, Vishnu as the preserver, and Shiva as 
                  the destroyer. The Om symbol is often seen as an allusion to this triad, with its three phonemes 
                  (A, U, M) representing creation, preservation, and destruction, respectively.
                </p>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-bold text-purple-800 mb-4">🕉️ The Sacred Sound - OM</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white text-2xl font-bold">A</div>
                      <div className="font-bold text-yellow-800">Creation</div>
                      <div className="text-sm text-yellow-700">Beginning, Birth</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white text-2xl font-bold">U</div>
                      <div className="font-bold text-blue-800">Preservation</div>
                      <div className="text-sm text-blue-700">Maintenance, Life</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white text-2xl font-bold">M</div>
                      <div className="font-bold text-gray-800">Destruction</div>
                      <div className="text-sm text-gray-700">Transformation, Renewal</div>
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-blue-900 mb-6">A Complex Theological Synthesis</h4>
                <p className="text-blue-800 leading-relaxed mb-6">
                  The development of this doctrine was not a simple, linear process but a complex act of theological synthesis. 
                  The Trimurti concept allowed for a unified framework that could accommodate the widespread worship of both 
                  Vishnu and Shiva. However, the attempt was not a "great success" for all members of the triad.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {trimurtiComparison.map((deity, index) => (
                    <div key={index} className={`bg-gradient-to-r ${deity.color} rounded-xl p-1 shadow-lg`}>
                      <div className="bg-white rounded-lg p-6">
                        <div className="text-center mb-4">
                          <h5 className="text-xl font-bold text-blue-900 mb-2">{deity.deity}</h5>
                          <p className="text-blue-700 font-medium">{deity.function}</p>
                        </div>
                        <div className="space-y-2 text-sm text-gray-800">
                          <div><strong className="text-gray-900">Consort:</strong> {deity.consort}</div>
                          <div><strong className="text-gray-900">Guna:</strong> {deity.guna}</div>
                          <div><strong className="text-gray-900">Worship:</strong> {deity.worship}</div>
                          <div><strong className="text-gray-900">Symbols:</strong></div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {deity.symbols.map((symbol, i) => (
                              <span key={i} className="px-2 py-1 bg-gray-200 rounded text-xs text-gray-800">{symbol}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <h4 className="text-xl font-bold text-blue-900 mb-6">Sectarian Interpretations</h4>
                <p className="text-blue-800 leading-relaxed mb-6">
                  The varying interpretations of the Trimurti in different sectarian texts highlight its function as a unifier. 
                  The Trimurti is not a trinity of equals in all schools but a theological tool used by each sect to assert 
                  its chosen deity's supremacy as the ultimate reality, identical to Brahman.
                </p>

                <div className="space-y-4 mb-8">
                  {sectarianViews.map((view, index) => (
                    <div key={index} className={`bg-gradient-to-r ${view.color} rounded-xl p-6 border border-gray-100`}>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                          {view.tradition[0]}
                        </div>
                        <div>
                          <h5 className="text-lg font-bold text-blue-900 mb-2">{view.tradition}</h5>
                          <p className="text-blue-800 mb-2"><strong>Core View:</strong> {view.view}</p>
                          <p className="text-blue-700 mb-2"><strong>Philosophy:</strong> {view.philosophy}</p>
                          <p className="text-blue-600"><strong>Following:</strong> {view.followers}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-orange-800 mb-3">🔑 Key Insight</h4>
                  <p className="text-orange-800">
                    This demonstrates the remarkable flexibility of Hindu theology. Rather than creating rigid orthodoxy, 
                    the Trimurti serves as a framework that allows different traditions to maintain their distinct identity 
                    while participating in a larger, unified spiritual system. Each path leads to the same ultimate reality—Brahman.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 2: Brahma the Creator */}
      {activeSection === 2 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-900">The Creator: Brahma and the Personification of Creation</h2>
                  <p className="text-yellow-600 font-medium">The cosmic architect who manifests the universe</p>
                </div>
              </div>

              <div className="prose prose-blue max-w-none">
                <p className="text-lg leading-relaxed text-blue-800 mb-8">
                  Brahma is a personification of the creative aspect of the universe, and his origin stories reflect 
                  different theological perspectives. His role as creator establishes him as the cosmic architect who 
                  manifests the physical universe from abstract potential into concrete reality.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-yellow-800 mb-4">🥚 The Golden Egg Origin</h4>
                    <p className="text-yellow-800">
                      One myth states that Brahma emerged from a <strong>golden egg (Hiranyagarbha)</strong> at the 
                      beginning of creation. This represents the cosmic womb from which all existence springs forth, 
                      symbolizing the universe's potential waiting to be actualized.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-blue-800 mb-4">🪷 The Lotus Birth</h4>
                    <p className="text-blue-800">
                      The prominent Vaishnava narrative describes Brahma being born from a <strong>lotus flower that 
                      grew from Vishnu's navel</strong> while Vishnu slumbered on the cosmic ocean. This asserts 
                      Vishnu's supremacy as the ultimate source of creation.
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-blue-900 mb-6">Brahma and Saraswati: The Creative Partnership</h4>
                <p className="text-blue-800 leading-relaxed mb-6">
                  Brahma's consort is Saraswati, the goddess of knowledge, arts, and wisdom. Their relationship is not 
                  physical but metaphysical—representing the creative process itself. Brahma (creation) requires Saraswati 
                  (knowledge) to manifest the universe, symbolizing that <strong>knowledge is a prerequisite for any act of creation</strong>.
                </p>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-bold text-purple-800 mb-4">💡 The Creative Process</h4>
                  <ul className="space-y-3 text-purple-800">
                    <li>• <strong>Masculine Principle (Brahma):</strong> The active force of creation</li>
                    <li>• <strong>Feminine Principle (Saraswati):</strong> The wisdom that guides creation</li>
                    <li>• <strong>Unity:</strong> Together they represent the same supreme consciousness, Brahman</li>
                    <li>• <strong>Process:</strong> Creation through informed intention, not random chance</li>
                  </ul>
                </div>

                <h4 className="text-xl font-bold text-blue-900 mb-6">The Paradox of Brahma's Limited Worship</h4>
                <p className="text-blue-800 leading-relaxed mb-6">
                  Despite his central role as creator, Brahma does not enjoy popular worship and has very few temples 
                  dedicated to him. This paradox is explained through various Puranic legends that reveal deeper 
                  theological principles about the nature of creation and spiritual focus.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6">
                    <h5 className="text-lg font-bold text-red-800 mb-3">🔥 The Shiva Curse</h5>
                    <p className="text-red-800 text-sm leading-relaxed">
                      From the <strong>Shiva Purana:</strong> In a dispute between Brahma and Vishnu over supremacy, 
                      Shiva manifested as a gigantic fiery pillar. Brahma lied about finding its end, and Shiva cursed 
                      him to never be worshipped on Earth. This teaches that <strong>truth and humility</strong> are essential 
                      spiritual qualities.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6">
                    <h5 className="text-lg font-bold text-pink-800 mb-3">💔 The Shatarupa Story</h5>
                    <p className="text-pink-800 text-sm leading-relaxed">
                      From the <strong>Matsya Purana:</strong> Brahma became infatuated with his own creation, Shatarupa. 
                      Shiva admonished him, reinforcing that the creator should not become attached to creation. This 
                      teaches <strong>detachment</strong> and proper spiritual perspective.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-green-800 mb-3">🧘 Spiritual Teaching</h4>
                  <p className="text-green-800">
                    Brahma's limited worship teaches a profound spiritual lesson: <strong>creation is not the end goal</strong> 
                    but the beginning of the spiritual journey. Once the universe is created, the focus shifts to preservation 
                    (Vishnu) and ultimately to transformation and transcendence (Shiva). Creation serves consciousness, 
                    not the reverse. This is why devotional energy flows toward the preserving and transforming aspects 
                    of divinity rather than the creative function.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 3: Vishnu the Preserver */}
      {activeSection === 3 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-900">The Preserver: Vishnu and the Manifestation of Dharma</h2>
                  <p className="text-blue-600 font-medium">The cosmic maintainer who protects universal order</p>
                </div>
              </div>

              <div className="prose prose-blue max-w-none">
                <p className="text-lg leading-relaxed text-blue-800 mb-8">
                  Vishnu's theological journey is one of remarkable elevation, from a minor Rigvedic deity mentioned in 
                  just 5 hymns to the Supreme Being in Vaishnavism. As the Preserver within the Trimurti, his primary 
                  role is to <strong>maintain cosmic order (dharma)</strong> and protect the universe from evil and chaos.
                </p>

                <h4 className="text-xl font-bold text-blue-900 mb-6">The Sacred Iconography</h4>
                <p className="text-blue-800 leading-relaxed mb-6">
                  Vishnu's iconography is rich with symbolism, with his four arms representing complete control over 
                  the cosmic cycle. Each object demonstrates his all-encompassing authority over time, creation, 
                  maintenance, and transformation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6">
                    <h5 className="text-lg font-bold text-cyan-800 mb-4">🐚 Conch Shell (Shankha)</h5>
                    <p className="text-cyan-800">
                      Represents the <strong>sound of creation</strong> - the primordial vibration (Om) that brings 
                      the universe into existence. When blown, it announces divine presence and awakens consciousness.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
                    <h5 className="text-lg font-bold text-indigo-800 mb-4">⚡ Discus (Chakra)</h5>
                    <p className="text-indigo-800">
                      Symbolizes the <strong>cyclical nature of time</strong> - the wheel of dharma that ensures cosmic 
                      order. It represents Vishnu's power to maintain balance and destroy evil when necessary.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                    <h5 className="text-lg font-bold text-purple-800 mb-4">🔨 Mace (Gada)</h5>
                    <p className="text-purple-800">
                      Represents <strong>destructive power</strong> used to eliminate adharma (unrighteousness). 
                      Shows that preservation sometimes requires the removal of corrupting elements.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6">
                    <h5 className="text-lg font-bold text-pink-800 mb-4">🪷 Lotus (Padma)</h5>
                    <p className="text-pink-800">
                      Signifies <strong>regeneration and purity</strong> - the ability to rise above muddy waters 
                      (material existence) while remaining unstained. Represents spiritual evolution and renewal.
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-blue-900 mb-6">Vaishnavism: Polymorphic Monotheism</h4>
                <p className="text-blue-800 leading-relaxed mb-6">
                  In Vaishnavism, Vishnu is considered the ultimate, unchanging Brahman and the primal Atman (Self) of 
                  the universe. This tradition is described as a <strong>"polymorphic monotheism"</strong> that sees Vishnu as 
                  the sole supreme being, with Brahma and Shiva as subordinate forms that he assumes for specific functions.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-bold text-blue-800 mb-4">🔄 The Vaishnava Perspective</h4>
                  <ul className="space-y-3 text-blue-800">
                    <li>• <strong>Vishnu as Brahman:</strong> The ultimate, formless reality taking personal form</li>
                    <li>• <strong>Subordinate Trinity:</strong> Brahma and Shiva as aspects of Vishnu's power</li>
                    <li>• <strong>Sole Supreme Being:</strong> One God manifesting in multiple forms for cosmic function</li>
                    <li>• <strong>Personal Relationship:</strong> The infinite accessible through love and devotion</li>
                  </ul>
                </div>

                <h4 className="text-xl font-bold text-blue-900 mb-6">Vishnu and Lakshmi: The Divine Partnership</h4>
                <p className="text-blue-800 leading-relaxed mb-6">
                  Vishnu's eternal consort is Lakshmi, the goddess of wealth, prosperity, and grace. Their union is 
                  inseparable and represents the complementary nature of <strong>divine power and sustenance</strong>. 
                  The story of her emergence from the churning of the cosmic ocean highlights her role as the divine 
                  strength that enables preservation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
                    <h5 className="text-lg font-bold text-blue-800 mb-3">🛡️ Vishnu's Role</h5>
                    <p className="text-blue-800">
                      Maintains cosmic order through <strong>active intervention</strong>. Descends as avatars when 
                      dharma is threatened. Represents the principle that goodness must be actively protected and sustained.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6">
                    <h5 className="text-lg font-bold text-yellow-800 mb-3">💰 Lakshmi's Role</h5>
                    <p className="text-yellow-800">
                      Provides the <strong>material and spiritual resources</strong> necessary for preservation. 
                      Her abundance enables Vishnu's protective functions. Together they ensure both material and spiritual prosperity.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-green-800 mb-3">🌟 The Preserver's Mission</h4>
                  <p className="text-green-800">
                    Vishnu's elevation from minor Vedic deity to supreme divinity reflects humanity's deep need for 
                    <strong>stability, protection, and moral guidance</strong>. In an uncertain world, the Preserver offers 
                    the promise that goodness will ultimately prevail, that dharma will be maintained, and that divine 
                    love will intervene when needed. This is why Vishnu became so central to devotional Hinduism—he 
                    represents hope, protection, and the active compassion of the divine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 4: Shiva the Destroyer */}
      {activeSection === 4 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-slate-700 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-900">The Destroyer: Shiva and the Principle of Transformation</h2>
                  <p className="text-gray-600 font-medium">The cosmic transformer who destroys to create anew</p>
                </div>
              </div>

              <div className="prose prose-blue max-w-none">
                <p className="text-lg leading-relaxed text-blue-800 mb-8">
                  Shiva's evolution from the fierce Vedic deity Rudra (mentioned in only 4 hymns) to the multifaceted 
                  Puranic god is central to the Hindu pantheon's development. As the Destroyer in the Trimurti, his 
                  role is not negative but <strong>necessary and transformative</strong>—he destroys to make way for new creation.
                </p>

                <h4 className="text-xl font-bold text-blue-900 mb-6">Shaivism: The Ultimate Reality</h4>
                <p className="text-blue-800 leading-relaxed mb-6">
                  In Shaivism, a major Hindu tradition, Shiva is considered the supreme being and is philosophically 
                  identified as the ultimate reality itself, identical to Brahman. This non-dualistic view sees all 
                  existence as a manifestation of <strong>Shiva's dynamic consciousness</strong>.
                </p>

                <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">🕉️ The Shaivite Worldview</h4>
                  <ul className="space-y-3 text-gray-800">
                    <li>• <strong>Non-Dualistic Reality:</strong> All existence is Shiva's consciousness in motion</li>
                    <li>• <strong>Dynamic Principle:</strong> Shiva as both static awareness and active energy</li>
                    <li>• <strong>Cosmic Dance:</strong> The universe as Shiva's eternal performance</li>
                    <li>• <strong>Ultimate Identity:</strong> Individual souls recognizing their Shiva-nature</li>
                  </ul>
                </div>

                <h4 className="text-xl font-bold text-blue-900 mb-6">The Rich Iconography of Transformation</h4>
                <p className="text-blue-800 leading-relaxed mb-6">
                  Shiva's iconography is deeply symbolic, with each element representing profound spiritual truths 
                  about transformation, time, consciousness, and the mastery of primal forces.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                    <h5 className="text-lg font-bold text-blue-800 mb-3">🌙 Matted Locks & Crescent Moon</h5>
                    <p className="text-blue-800">
                      The <strong>crescent moon</strong> in his hair represents the cyclical nature of time and the 
                      waxing and waning of existence. His matted locks show mastery over time itself.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                    <h5 className="text-lg font-bold text-green-800 mb-3">🐍 The Sacred Serpent</h5>
                    <p className="text-green-800">
                      The <strong>cobra around his neck</strong> symbolizes control over primal instincts and fearlessness 
                      in the face of death. It represents mastery over kundalini energy.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6">
                    <h5 className="text-lg font-bold text-red-800 mb-3">👁️ The Third Eye</h5>
                    <p className="text-red-800">
                      Located on his forehead, it symbolizes <strong>spiritual insight</strong> and the power to destroy 
                      ignorance and falsehood. When opened, it burns away illusion.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                    <h5 className="text-lg font-bold text-purple-800 mb-3">💃 The Cosmic Dance (Tandava)</h5>
                    <p className="text-purple-800">
                      Encapsulates the <strong>continuous cycle</strong> of creation, preservation, and destruction. 
                      The universe pulses with the rhythm of Shiva's eternal dance.
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-blue-900 mb-6">The Compassionate Destroyer</h4>
                <p className="text-blue-800 leading-relaxed mb-6">
                  Despite his fearsome aspects, Shiva's myths reveal profound compassion. His willingness to save the 
                  world by swallowing the deadly Halahala poison and his taming of the Ganges River showcase his 
                  benevolent nature—he destroys threats to cosmic welfare.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
                    <h5 className="text-lg font-bold text-blue-800 mb-3">☠️ The Halahala Sacrifice</h5>
                    <p className="text-blue-800">
                      When the cosmic ocean was churned, deadly poison emerged. <strong>Shiva swallowed it</strong> to save 
                      all existence, turning his throat blue (Neelkanth). This shows destruction serving preservation.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6">
                    <h5 className="text-lg font-bold text-cyan-800 mb-3">🌊 Taming the Ganges</h5>
                    <p className="text-cyan-800">
                      When the Ganges descended from heaven, Shiva <strong>caught her in his hair</strong> to prevent 
                      Earth's destruction. He channeled divine power for beneficial use, not elimination.
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-blue-900 mb-6">Shiva and Parvati: The Dynamic Union</h4>
                <p className="text-blue-800 leading-relaxed mb-6">
                  Shiva's consort is Parvati, who is regarded as his <strong>shakti</strong> (divine energy). Their union 
                  represents the cosmic balance of masculine and feminine energies. Without her, Shiva is considered 
                  incomplete—consciousness requires energy to manifest and transform.
                </p>

                <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-bold text-pink-800 mb-4">⚡ Ardhanarishvara: The Half-Male, Half-Female Form</h4>
                  <p className="text-pink-800">
                    This iconic form visually represents the <strong>interdependence and unity</strong> of masculine and 
                    feminine energies in the universe. It shows that ultimate reality transcends gender dualities while 
                    containing both principles. Creation requires both consciousness (Shiva) and power (Shakti).
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-purple-800 mb-3">🔥 The Transformer's Wisdom</h4>
                  <p className="text-purple-800">
                    Shiva's role as Destroyer teaches the profound truth that <strong>transformation is essential for growth</strong>. 
                    Nothing can evolve without releasing what no longer serves. His fierce compassion destroys ignorance, 
                    ego, and limitation—not to cause suffering, but to free consciousness for higher realization. In this way, 
                    destruction becomes the highest service to existence, clearing space for new creation and deeper truth.
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
              href="/journey/great-synthesis"
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              The Great Synthesis
            </Link>
            
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">Next Chapter</div>
              <div className="font-medium text-blue-900">The Descent of Divinity</div>
            </div>
            
            <Link
              href="/journey/descent-of-divinity"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-lg hover:shadow-lg transition-all"
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