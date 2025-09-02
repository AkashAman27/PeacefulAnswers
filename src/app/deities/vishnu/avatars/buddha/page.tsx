import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Calendar, MapPin, Sparkles, Heart, Flower } from 'lucide-react'

const avatars = [
  { name: 'Matsya', slug: 'matsya', order: 1 },
  { name: 'Kurma', slug: 'kurma', order: 2 },
  { name: 'Varaha', slug: 'varaha', order: 3 },
  { name: 'Narasimha', slug: 'narasimha', order: 4 },
  { name: 'Vamana', slug: 'vamana', order: 5 },
  { name: 'Parashurama', slug: 'parashurama', order: 6 },
  { name: 'Rama', slug: 'rama', order: 7 },
  { name: 'Krishna', slug: 'krishna', order: 8 },
  { name: 'Buddha', slug: 'buddha', order: 9 },
  { name: 'Kalki', slug: 'kalki', order: 10 }
]

const currentAvatar = avatars.find(a => a.slug === 'buddha')!
const prevAvatar = avatars.find(a => a.order === currentAvatar.order - 1)
const nextAvatar = avatars.find(a => a.order === currentAvatar.order + 1)

export default function BuddhaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-900 via-amber-900 to-yellow-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer animate-[slideInFromLeft_0.8s_ease-out]">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              <span className="text-sm font-medium">Ninth Avatar of Dashavatar</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-200 to-orange-300 bg-clip-text text-transparent animate-[slideInFromLeft_1s_ease-out_0.2s_both]">
              बुद्ध अवतार
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 animate-[slideInFromLeft_1s_ease-out_0.4s_both]">Buddha Avatar</h2>
            <p className="text-xl text-orange-200 max-w-3xl mx-auto leading-relaxed animate-[slideInFromLeft_1s_ease-out_0.6s_both]">
              The enlightened one who taught compassion, non-violence, and the middle path to liberation
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-400/20 rounded-full blur-3xl"></div>
      </section>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/deities/vishnu" 
              className="flex items-center text-orange-600 hover:text-orange-800 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back to Vishnu
            </Link>
            
            <div className="flex items-center space-x-4">
              {prevAvatar && (
                <Link 
                  href={`/deities/vishnu/avatars/${prevAvatar.slug}`}
                  className="flex items-center text-gray-600 hover:text-orange-600 transition-colors text-sm"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  {prevAvatar.name}
                </Link>
              )}
              <span className="text-gray-400">|</span>
              {nextAvatar && (
                <Link 
                  href={`/deities/vishnu/avatars/${nextAvatar.slug}`}
                  className="flex items-center text-gray-600 hover:text-orange-600 transition-colors text-sm"
                >
                  {nextAvatar.name}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Story Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Divine Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-r from-orange-100 to-yellow-100">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
                alt="Buddha Avatar - The enlightened teacher of compassion and wisdom"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm opacity-90">Buddha in meditation under the Bodhi Tree</p>
              </div>
            </div>

            {/* Story Section */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Heart className="w-6 h-6 mr-3 text-red-500" />
                The Path to Enlightenment
              </h3>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <h4 className="text-xl font-semibold text-orange-900">The Divine Purpose</h4>
                <p className="text-gray-700 leading-relaxed">
                  In the Hindu understanding, Buddha appeared as the ninth avatar of Vishnu during the Kali Yuga to redirect humanity toward dharma through compassion and non-violence. At a time when Vedic sacrifices had become ritualistic and sometimes involved animal sacrifice, Buddha's teachings emphasized ahimsa (non-violence) and inner spiritual development over external rituals.
                </p>

                <h4 className="text-xl font-semibold text-orange-900">The Birth of Siddhartha</h4>
                <p className="text-gray-700 leading-relaxed">
                  Born as Prince Siddhartha Gautama in Kapilavastu to King Shuddhodana and Queen Maya, the divine child displayed extraordinary spiritual inclinations from birth. Prophecies foretold he would become either a great king or a great spiritual teacher. His early life of luxury was designed to prevent exposure to suffering, but divine will ensured his spiritual awakening.
                </p>

                <h4 className="text-xl font-semibold text-orange-900">The Great Renunciation</h4>
                <p className="text-gray-700 leading-relaxed">
                  At age 29, despite having a wife (Yashodhara) and son (Rahula), Siddhartha encountered the "Four Sights" - an old man, a sick person, a dead body, and a wandering ascetic. These encounters revealed the universal nature of suffering and inspired him to leave his palace in search of liberation from the cycle of birth, death, and rebirth.
                </p>

                <h4 className="text-xl font-semibold text-orange-900">The Middle Path Discovery</h4>
                <p className="text-gray-700 leading-relaxed">
                  After years of extreme austerity that nearly killed him, Siddhartha realized that neither luxury nor extreme asceticism led to enlightenment. He discovered the Middle Path - a balanced approach to spiritual practice that avoids extremes. This insight prepared him for his ultimate breakthrough under the Bodhi Tree.
                </p>

                <h4 className="text-xl font-semibold text-orange-900">The Great Awakening</h4>
                <p className="text-gray-700 leading-relaxed">
                  Sitting in meditation under the Bodhi Tree in Bodhgaya, Siddhartha attained perfect enlightenment and became the Buddha ("The Awakened One"). He realized the Four Noble Truths about suffering and its cessation, and the Eightfold Path leading to liberation. This enlightenment revealed his divine nature as Vishnu's avatar.
                </p>

                <h4 className="text-xl font-semibold text-orange-900">The Teaching Mission</h4>
                <p className="text-gray-700 leading-relaxed">
                  For 45 years, Buddha traveled across India teaching the dharma in simple, accessible language. He established the Sangha (monastic community) and laid down principles that emphasized personal spiritual development, ethical conduct, and liberation through wisdom and compassion. His teachings reached all social classes without discrimination.
                </p>

                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
                  <h5 className="font-semibold text-orange-900 mb-3">The Avatar's Mission</h5>
                  <p className="text-sm text-orange-800 leading-relaxed">
                    In the Puranic understanding, Buddha avatar appeared to restore the true spirit of dharma by emphasizing compassion over ritualism, inner purity over external observances, and direct spiritual experience over blind faith. His teachings prepared humanity for the final phase of Kali Yuga and the coming of Kalki Avatar.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-orange-900">The Four Noble Truths and Eightfold Path</h4>
                <p className="text-gray-700 leading-relaxed">
                  Buddha's core teaching centered on understanding suffering (Dukkha), its cause (attachment/craving), the possibility of its cessation (Nirvana), and the path to achieve this (Eightfold Path). These teachings provided practical guidance for liberation while maintaining harmony with the eternal principles of dharma found in the Vedas.
                </p>
              </div>
            </section>

            {/* Spiritual Significance */}
            <section className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Spiritual Significance</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-orange-900">Compassionate Dharma</h4>
                    <p className="text-gray-700">Buddha emphasized universal compassion (Karuna) and non-violence (Ahimsa) as fundamental dharmic principles for the age.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-orange-900">Inner Transformation</h4>
                    <p className="text-gray-700">The avatar taught that liberation comes through inner purification and wisdom rather than external rituals or social status.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-orange-900">Universal Accessibility</h4>
                    <p className="text-gray-700">Buddha's teachings were available to all regardless of caste, gender, or social position, democratizing spiritual knowledge.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-orange-900">Middle Path Wisdom</h4>
                    <p className="text-gray-700">The avatar introduced the principle of balance - avoiding extremes in spiritual practice and daily life.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-orange-900">Preparatory Mission</h4>
                    <p className="text-gray-700">Buddha's teachings prepared humanity for the challenges of Kali Yuga by establishing foundations of ethical living and mental discipline.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Festival Information */}
            <section className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-green-600" />
                Festival Celebrations
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Buddha Jayanti/Vesak</h4>
                  <p className="text-sm text-gray-600 mb-2">Celebrates birth, enlightenment, and parinirvana on Vaishakha Purnima</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">Major celebration in Buddhist communities and Hindu temples, emphasizing non-violence, meditation, and compassionate service.</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Dharma Chakra Pravartan Day</h4>
                  <p className="text-sm text-gray-600 mb-2">Commemorates Buddha's first teaching at Sarnath</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">Observed with dharma discussions, meditation sessions, and recommitment to the Eightfold Path principles.</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Magha Puja Day</h4>
                  <p className="text-sm text-gray-600 mb-2">Honors the gathering of enlightened disciples</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">Celebrated with group meditation, chanting, and emphasis on the three jewels: Buddha, Dharma, and Sangha.</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Asalha Puja</h4>
                  <p className="text-sm text-gray-600 mb-2">Marks the beginning of Buddhist Lent</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">Three-month retreat period for intensive meditation and study, honoring Buddha's monastic traditions.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Regional Significance */}
            <section className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-purple-600" />
                Sacred Places
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-800">Bodhgaya, Bihar</h4>
                  <p className="text-sm text-gray-600">Site of Buddha's enlightenment under the Bodhi Tree, considered the holiest place in Buddhism.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Sarnath, Uttar Pradesh</h4>
                  <p className="text-sm text-gray-600">Where Buddha gave his first sermon and established the dharma wheel, marking the beginning of his teaching mission.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Lumbini, Nepal</h4>
                  <p className="text-sm text-gray-600">Birthplace of Prince Siddhartha, now a major pilgrimage site with temples from various Buddhist nations.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Kushinagar, Uttar Pradesh</h4>
                  <p className="text-sm text-gray-600">Where Buddha attained Mahaparinirvana (final liberation), completing his earthly mission as the ninth avatar.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-800">Rajgir & Nalanda, Bihar</h4>
                  <p className="text-sm text-gray-600">Important teaching centers where Buddha delivered major discourses and established the monastic university tradition.</p>
                </div>
              </div>
            </section>

            {/* Quick Facts */}
            <section className="bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Avatar Order:</span>
                  <span>9th of Dashavatar</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Yuga:</span>
                  <span>Kali Yuga</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Birth Name:</span>
                  <span>Siddhartha Gautama</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Father:</span>
                  <span>King Shuddhodana</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Mother:</span>
                  <span>Queen Maya</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Enlightenment:</span>
                  <span>Age 35</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Teaching Period:</span>
                  <span>45 years</span>
                </div>
              </div>
            </section>

            {/* Sacred Mantras */}
            <section className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sacred Mantras</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Buddha Mantra</h4>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-orange-800 font-medium text-center mb-2">
                      ॐ बुद्धाय नमः
                    </p>
                    <p className="text-sm text-gray-600 text-center italic">
                      "Om Buddhaya Namah"
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Salutations to the enlightened Buddha
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Medicine Buddha Mantra</h4>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-orange-800 font-medium text-center mb-2 text-sm">
                      तद्यथा ॐ भैषज्ये भैषज्ये महाभैषज्ये राज समुद्गते स्वाहा
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Mantra for healing and purification of mind, body, and spirit
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Dharma Mantra</h4>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-orange-800 font-medium text-center mb-2 text-sm">
                      बुद्धं शरणं गच्छामि धर्मं शरणं गच्छामि संघं शरणं गच्छामि
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      "I take refuge in Buddha, Dharma, and Sangha" - The Three Jewels
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Hindu-Buddhist Integration */}
            <section className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Flower className="w-5 h-5 mr-2" />
                Integration with Hinduism
              </h3>
              <p className="text-sm leading-relaxed">
                In many Hindu traditions, Buddha is revered as the ninth avatar of Vishnu who appeared to guide humanity 
                away from ritualistic extremes toward the essence of dharma. His emphasis on non-violence, meditation, 
                and compassionate service aligns with core Vedantic principles, representing the evolution of spiritual 
                understanding in the age of Kali Yuga.
              </p>
            </section>
          </div>
        </div>

        {/* Avatar Navigation */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8">Explore All Avatars</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {avatars.map((avatar) => (
              <Link
                key={avatar.slug}
                href={`/deities/vishnu/avatars/${avatar.slug}`}
                className={`p-4 rounded-xl text-center transition-all ${
                  avatar.slug === 'buddha'
                    ? 'bg-orange-600 text-white shadow-lg scale-105'
                    : 'bg-gray-50 hover:bg-orange-50 text-gray-700 hover:text-orange-600'
                }`}
              >
                <div className="text-lg font-semibold">{avatar.order}</div>
                <div className="text-sm">{avatar.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}