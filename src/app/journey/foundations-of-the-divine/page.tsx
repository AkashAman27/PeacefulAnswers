import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, BookOpen, Sparkles, Eye, Clock, ArrowDown, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Foundations of the Divine - Vedic and Upanishadic Principles | PeacefulAnswers',
  description: 'Discover the primordial reality of Brahman and the early pantheon of the Rigveda. Journey from the abstract, universal principle to the nature-based deities of ancient times.',
  keywords: 'Vedic deities, Brahman, Upanishads, ancient Hindu gods, Rigveda, primordial reality, Indra, Agni, Vedic philosophy, cosmic principles',
  openGraph: {
    title: 'Foundations of the Divine - Vedic and Upanishadic Principles | PeacefulAnswers',
    description: 'Discover the primordial reality of Brahman and the early pantheon of the Rigveda.',
    type: 'article',
  }
}

const vedicVsPuranic = [
  { deity: "Indra", vedic: "King of Gods, Sky God (250 hymns)", puranic: "Downgraded, subject to ethical lapses", guna: "Rajas (passion, action)" },
  { deity: "Agni", vedic: "Sacrificial fire, Messenger (200 hymns)", puranic: "Less prominent", guna: "Sattva (goodness, purity)" },
  { deity: "Varuna", vedic: "Cosmic order, Law keeper", puranic: "God of waters only", guna: "Sattva (order, law)" },
  { deity: "Soma", vedic: "Sacred drink, Divine plant", puranic: "Moon god", guna: "Rajas (intoxication, inspiration)" },
  { deity: "Vishnu", vedic: "Minor solar deity (5 hymns)", puranic: "Supreme preserver, countless avatars", guna: "Sattva (preservation, goodness)" },
  { deity: "Rudra", vedic: "Storm god, fierce deity", puranic: "Evolved into Shiva, destroyer-transformer", guna: "Tamas (destruction, transformation)" }
]

export default function FoundationsOfTheDivinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/journey"
              className="inline-flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Journey
            </Link>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <BookOpen className="w-4 h-4" />
              <span>Chapter 1 of 5</span>
            </div>

            <Link
              href="/journey/great-synthesis"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              Next Chapter
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 opacity-90"></div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 text-blue-200 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Chapter 1: Foundations
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Foundations of the Divine
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            The Vedic and Upanishadic Cosmic Principles
          </p>
          <div className="flex items-center justify-center gap-6 text-blue-200">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>15 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5" />
              <span>Beginner Level</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Beginning of Divine Understanding
            </h2>
            <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                In the misty dawn of human consciousness, when the first sages of ancient India
                turned their attention inward and upward, they discovered something extraordinary:
                a unified field of existence that underlies all of reality. They called this
                <strong> Brahman</strong> - the ultimate, formless reality from which all existence emerges.
              </p>
              <p>
                This was not merely philosophical speculation but direct spiritual experience.
                Through deep meditation and contemplation, these ancient seers perceived that
                beneath the apparent diversity of the world lay a singular, eternal principle -
                pure consciousness itself.
              </p>
            </div>
          </div>

          {/* Section 1: Brahman */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900">The Primordial Reality: Brahman</h3>
            </div>

            <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                The concept of Brahman represents one of humanity's most profound spiritual insights.
                In the Upanishads, Brahman is described as <em>Sat-Chit-Ananda</em>: existence,
                consciousness, and bliss absolute. It is the source, sustenance, and goal of all creation.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <h4 className="font-semibold text-blue-900 mb-3">Key Upanishadic Teaching:</h4>
                <p className="text-blue-800 italic text-lg">
                  "Tat tvam asi" - That thou art. The individual soul (Atman) and the universal
                  soul (Brahman) are one and the same.
                </p>
              </div>

              <p>
                This understanding would become the philosophical foundation for all subsequent
                Hindu thought. Every deity, every ritual, every spiritual practice would ultimately
                point back to this one truth: the unity of all existence in Brahman.
              </p>
            </div>
          </div>

          {/* Section 2: Vedic Pantheon */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center text-white font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900">The Early Pantheon of the Rigveda</h3>
            </div>

            <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                While the Upanishads explored the abstract unity of Brahman, the earlier Rigveda
                presented a vibrant pantheon of nature-based deities. These gods were not mere
                personifications but living forces that the ancient Aryans experienced in their
                daily interaction with the natural world.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-orange-200">
                  <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Indra - King of Gods
                  </h4>
                  <p className="text-orange-800 text-sm">
                    The storm god who conquered the demon Vritra, freeing the waters.
                    Received over 250 hymns in the Rigveda, representing power and victory.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border border-red-200">
                  <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Agni - Sacred Fire
                  </h4>
                  <p className="text-red-800 text-sm">
                    The messenger between humans and gods, present in every sacrifice.
                    Received over 200 hymns, representing transformation and purification.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Varuna - Cosmic Order
                  </h4>
                  <p className="text-blue-800 text-sm">
                    The keeper of Rita (cosmic law), guardian of moral and natural order.
                    Later becomes primarily the god of waters and ocean.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200">
                  <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Soma - Divine Nectar
                  </h4>
                  <p className="text-purple-800 text-sm">
                    The sacred plant and its intoxicating juice, offering divine inspiration.
                    Later transformed into Chandra, the moon god.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Vedic vs. Puranic Evolution</h3>
            <p className="text-gray-600 mb-8">
              See how the ancient Vedic deities transformed over millennia into the gods of classical Hinduism:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                    <th className="text-left py-3 px-4 font-semibold">Deity</th>
                    <th className="text-left py-3 px-4 font-semibold">Vedic Period</th>
                    <th className="text-left py-3 px-4 font-semibold">Puranic Period</th>
                    <th className="text-left py-3 px-4 font-semibold">Guna Association</th>
                  </tr>
                </thead>
                <tbody>
                  {vedicVsPuranic.map((row, index) => (
                    <tr key={row.deity} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-3 px-4 font-semibold text-indigo-900">{row.deity}</td>
                      <td className="py-3 px-4 text-gray-700">{row.vedic}</td>
                      <td className="py-3 px-4 text-gray-700">{row.puranic}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{row.guna}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 3: Seeds of Future */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Seeds of the Puranic Divine</h3>
            </div>

            <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Hidden within the Vedic hymns were the seeds of a revolutionary transformation.
                Two minor deities mentioned only briefly would eventually become the supreme
                gods of classical Hinduism:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-xl">
                  <h4 className="font-bold text-blue-900 mb-4">Vishnu in the Rigveda</h4>
                  <ul className="text-blue-800 space-y-2">
                    <li>• Only 5 hymns dedicated to him</li>
                    <li>• Known for his "three steps" across the universe</li>
                    <li>• Minor solar deity with cosmic implications</li>
                    <li>• Friend and ally of Indra</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-100 to-red-100 p-6 rounded-xl">
                  <h4 className="font-bold text-red-900 mb-4">Rudra in the Rigveda</h4>
                  <ul className="text-red-800 space-y-2">
                    <li>• Storm god with fierce, ambivalent nature</li>
                    <li>• Both destroyer and healer</li>
                    <li>• Lord of beasts and mountain dweller</li>
                    <li>• Seeds of Shiva's complex character</li>
                  </ul>
                </div>
              </div>

              <p>
                These seemingly minor mentions would, over centuries, blossom into the rich
                theological concepts of Vishnu as the supreme preserver and Shiva as the
                cosmic dancer who destroys to recreate.
              </p>
            </div>
          </div>

          {/* Key Insights */}
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-indigo-600" />
              Key Insights from This Chapter
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Brahman</strong> established the philosophical foundation for all Hindu spirituality
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Vedic deities</strong> were living forces of nature, not abstract concepts
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Sacrifice and ritual</strong> were the primary means of divine communication
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Future supremacy</strong> was already seeded in minor Vedic mentions
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Divine evolution</strong> reflects changing human consciousness
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Unity and diversity</strong> coexisted from the very beginning
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation to Next Chapter */}
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for the Next Chapter?</h3>
              <p className="text-gray-600 mb-6">
                Continue your journey to discover how these ancient foundations gave way to
                a revolutionary synthesis that would transform Hindu spirituality forever.
              </p>
              <Link
                href="/journey/great-synthesis"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Chapter 2: The Great Synthesis
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}