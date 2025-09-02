import { Badge } from '@/components/ui/badge';
import { User, Mountain, Sun, Flower, TreePine, Eye, MapPin, Calendar, Scroll, Users, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AdiyogiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-teal-900 to-green-800 text-white">
      {/* Navigation */}
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <Link 
          href="/deities/shiva/forms/ardhanarishvara"
          className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Ardhanarishvara
        </Link>
        
        <Link 
          href="/deities/shiva"
          className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
        >
          All Forms
        </Link>
        
        <Link 
          href="/deities/shiva/forms/neelkanth"
          className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
        >
          Neelkanth
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 bg-teal-500/20 rounded-full border border-teal-400/30 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer animate-[slideInFromLeft_0.8s_ease-out]">
            <User className="w-4 h-4 mr-2 animate-pulse" />
            <span className="text-sm font-medium">आदियोगी - The First Yogi</span>
          </div>
          
          <div className="min-h-[120px] md:min-h-[140px] flex flex-col justify-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-teal-200 via-green-300 to-blue-200 bg-clip-text text-transparent leading-tight typewriter whitespace-nowrap" style={{ '--duration': '2s', '--steps': '7', '--delay': '1s' } as any}>
              आदियोगी
            </h1>
          </div>
          <div className="min-h-[60px] md:min-h-[80px] flex flex-col justify-center mb-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-teal-200 typewriter-no-cursor whitespace-nowrap" style={{ '--duration': '2s', '--steps': '30', '--delay': '3s' } as any}>
              Adiyogi - The Source of Yoga
            </h2>
          </div>
          <p className="text-lg md:text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed animate-[slideInFromLeft_1s_ease-out_5s_both]">
            The primordial yogi who first transmitted the science of yoga to humanity, 
            sitting in profound meditation for thousands of years and becoming the 
            eternal source of yogic wisdom and spiritual transformation.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Story & Teachings */}
          <div className="lg:col-span-2 space-y-8">
            {/* Origin of Yoga */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Mountain className="w-6 h-6 text-teal-400" />
                <h3 className="text-2xl font-bold">The Birth of Yoga</h3>
              </div>
              <div className="space-y-4 text-teal-100">
                <p>
                  Over 15,000 years ago, on the banks of Kantisarovar in the Himalayas, 
                  a figure appeared in the stillness of absolute consciousness. This was Adiyogi, 
                  the first being to attain the state of enlightenment through inner transformation. 
                  He sat in profound meditation, completely still, for thousands of years.
                </p>
                <p>
                  His ecstatic dance of realization was so overwhelming that those who witnessed 
                  it became his first disciples. Seven sages (Saptarishis) approached him, 
                  drawn by his luminous presence. Initially unmoved, Adiyogi eventually opened 
                  his eyes and began the transmission of yogic sciences to humanity.
                </p>
                <p>
                  These seven disciples became the repositories of different dimensions of yoga - 
                  from the physical practice to the most subtle inner sciences. Through them, 
                  the knowledge spread across the world, becoming the foundation of all 
                  spiritual practices and mystical traditions.
                </p>
              </div>
            </div>

            {/* The Seven Dimensions */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Sun className="w-6 h-6 text-yellow-400" />
                <h3 className="text-2xl font-bold">The Seven Dimensions of Yoga</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-teal-500/10 rounded-lg p-4">
                  <h4 className="font-semibold text-teal-300">1. Yama & Niyama</h4>
                  <p className="text-sm text-teal-100">Ethical guidelines and personal observances for spiritual purification</p>
                </div>
                <div className="bg-teal-500/10 rounded-lg p-4">
                  <h4 className="font-semibold text-teal-300">2. Asana</h4>
                  <p className="text-sm text-teal-100">Physical postures for body mastery and energy alignment</p>
                </div>
                <div className="bg-teal-500/10 rounded-lg p-4">
                  <h4 className="font-semibold text-teal-300">3. Pranayama</h4>
                  <p className="text-sm text-teal-100">Breath regulation for life energy control and consciousness expansion</p>
                </div>
                <div className="bg-teal-500/10 rounded-lg p-4">
                  <h4 className="font-semibold text-teal-300">4. Pratyahara</h4>
                  <p className="text-sm text-teal-100">Withdrawal of senses for inner focus and mental discipline</p>
                </div>
                <div className="bg-teal-500/10 rounded-lg p-4">
                  <h4 className="font-semibold text-teal-300">5. Dharana</h4>
                  <p className="text-sm text-teal-100">Concentration practices for one-pointed awareness</p>
                </div>
                <div className="bg-teal-500/10 rounded-lg p-4">
                  <h4 className="font-semibold text-teal-300">6. Dhyana</h4>
                  <p className="text-sm text-teal-100">Meditation for sustained awareness and self-realization</p>
                </div>
                <div className="bg-green-500/10 rounded-lg p-4 md:col-span-2">
                  <h4 className="font-semibold text-green-300">7. Samadhi</h4>
                  <p className="text-sm text-teal-100">Union with the absolute, the ultimate goal of yoga practice</p>
                </div>
              </div>
            </div>

            {/* Yogic Sciences */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <TreePine className="w-6 h-6 text-green-400" />
                <h3 className="text-2xl font-bold">The Complete Yogic Sciences</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-teal-300 mb-2">Hatha Yoga</h4>
                  <p className="text-teal-100">
                    The physical dimension focusing on body purification, asanas, pranayama, 
                    and energy channel cleansing to prepare for higher spiritual practices.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-300 mb-2">Raja Yoga</h4>
                  <p className="text-teal-100">
                    The royal path of mental discipline, meditation, and consciousness 
                    transformation through systematic practice of the eight limbs of yoga.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-300 mb-2">Karma Yoga</h4>
                  <p className="text-teal-100">
                    The path of selfless action and service, transforming every activity 
                    into spiritual practice and offering all actions to the divine.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-300 mb-2">Bhakti Yoga</h4>
                  <p className="text-teal-100">
                    The path of devotion and surrender, cultivating love and emotional 
                    purification through worship, chanting, and divine communion.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-300 mb-2">Jnana Yoga</h4>
                  <p className="text-teal-100">
                    The path of knowledge and self-inquiry, using discrimination and 
                    contemplation to realize the true nature of the Self.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-300 mb-2">Kriya Yoga</h4>
                  <p className="text-teal-100">
                    Advanced energy practices involving subtle manipulations of life force 
                    for rapid spiritual evolution and consciousness transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Modern Relevance, Temples, etc. */}
          <div className="space-y-8">
            {/* Modern Yoga */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Flower className="w-5 h-5 text-teal-400" />
                <h3 className="text-xl font-bold">Modern Yoga Movement</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-teal-300">Global Expansion</h4>
                  <p className="text-sm text-teal-100">From Adiyogi's teachings, yoga has become a worldwide phenomenon practiced by millions</p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-300">Scientific Validation</h4>
                  <p className="text-sm text-teal-100">Modern research confirms the physical, mental, and spiritual benefits of yogic practices</p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-300">Therapeutic Applications</h4>
                  <p className="text-sm text-teal-100">Yoga therapy is now used in hospitals and healthcare for healing and wellness</p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-300">Corporate Integration</h4>
                  <p className="text-sm text-teal-100">Companies worldwide adopt yoga for employee wellness and productivity</p>
                </div>
              </div>
            </div>

            {/* Sacred Places */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-green-400" />
                <h3 className="text-xl font-bold">Sacred Yoga Sites</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-teal-300">Isha Yoga Center, Coimbatore</h4>
                  <p className="text-sm text-teal-100">Home of the 112-foot Adiyogi statue, world's largest bust sculpture</p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-300">Kedarnath, Uttarakhand</h4>
                  <p className="text-sm text-teal-100">Sacred Himalayan abode where Adiyogi first appeared in meditation</p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-300">Rishikesh, Uttarakhand</h4>
                  <p className="text-sm text-teal-100">World capital of yoga, where ancient yogic traditions continue</p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-300">Haridwar, Uttarakhand</h4>
                  <p className="text-sm text-teal-100">Gateway to the Himalayas, center of yogic learning and practice</p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-300">Mount Kailash, Tibet</h4>
                  <p className="text-sm text-teal-100">Sacred mountain, eternal abode and meditation seat of Lord Shiva</p>
                </div>
              </div>
            </div>

            {/* Yogic Festivals */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-teal-400" />
                <h3 className="text-xl font-bold">Yoga Celebrations</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-teal-300">International Yoga Day</h4>
                  <p className="text-sm text-teal-100">June 21st - UN declared day celebrating Adiyogi's gift to humanity</p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-300">Guru Purnima</h4>
                  <p className="text-sm text-teal-100">Full moon day honoring the first guru, Adiyogi, and all yoga teachers</p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-300">Maha Shivaratri</h4>
                  <p className="text-sm text-teal-100">Great night of Shiva celebrated with meditation and yogic practices</p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-300">Dakshinayana</h4>
                  <p className="text-sm text-teal-100">Spiritual half-year when Adiyogi turned southward to teach</p>
                </div>
              </div>
            </div>

            {/* Yogic Mantras */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Scroll className="w-5 h-5 text-green-400" />
                <h3 className="text-xl font-bold">Yogic Mantras</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-teal-300">Adiyogi Mantra</h4>
                  <p className="text-sm text-teal-100 font-mono">
                    ॐ आदियोगीश्वराय नमः
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-300">Universal Mantra</h4>
                  <p className="text-sm text-teal-100 font-mono">
                    ॐ - The primordial sound<br />
                    सर्वे भवन्तु सुखिनः
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-300">Yoga Invocation</h4>
                  <p className="text-sm text-teal-100 font-mono">
                    योगश्चित्तवृत्तिनिरोधः<br />
                    - Yoga is the cessation of mental fluctuations
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-5 h-5 text-teal-400" />
                <h3 className="text-xl font-bold">Essential Facts</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-teal-300">First Appeared:</span>
                  <span className="text-teal-100">~15,000 years ago</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-teal-300">First Students:</span>
                  <span className="text-teal-100">Seven Sages (Saptarishis)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-teal-300">Teaching Method:</span>
                  <span className="text-teal-100">112 ways to liberation</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-teal-300">Yoga Branches:</span>
                  <span className="text-teal-100">All paths trace to him</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-teal-300">Symbol:</span>
                  <span className="text-teal-100">Meditation posture</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-teal-300">Element:</span>
                  <span className="text-teal-100">Space (Akasha)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-teal-300">Teaching:</span>
                  <span className="text-teal-100">Inner transformation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 112 Ways */}
        <div className="mt-12 bg-gradient-to-r from-teal-500/10 to-green-500/10 backdrop-blur-md rounded-2xl p-8 border border-teal-400/20">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-teal-400" />
            <h3 className="text-2xl font-bold">The 112 Ways to Liberation</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-teal-300 mb-4">Breath-Based (Pranayama)</h4>
              <p className="text-teal-100 leading-relaxed">
                Numerous techniques using breath awareness, retention, and regulation to 
                transform consciousness and achieve meditative states. From simple observation 
                to complex rhythmic patterns that alter brain states and energy flow.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-teal-300 mb-4">Attention-Based (Dharana)</h4>
              <p className="text-teal-100 leading-relaxed">
                Methods involving focused attention on specific objects, sensations, or 
                concepts to develop one-pointed awareness. Includes visualization, 
                contemplation, and concentration practices for mental training.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-teal-300 mb-4">Body-Based (Kayika)</h4>
              <p className="text-teal-100 leading-relaxed">
                Physical practices using posture, movement, and bodily awareness to 
                access deeper states of consciousness. From simple sitting postures 
                to complex movements that unite body, breath, and mind.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg text-teal-200">
              "These 112 methods are a complete science for the transformation of human consciousness, 
              each one a doorway to the same ultimate reality - the recognition of one's true nature as pure awareness."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}