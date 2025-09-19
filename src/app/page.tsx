import { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import FestivalTicker from '@/components/FestivalTicker'
import TestimonialsSection from '@/components/TestimonialsSection'

export const metadata: Metadata = {
  title: 'PeacefulAnswers - Your Gateway to Hindu Wisdom and Spirituality',
  description: 'Discover the profound teachings of Sanātana Dharma through authentic scriptures, practical guidance, and spiritual wisdom. Explore Hindu deities, festivals, practices, and timeless philosophy.',
  keywords: 'Hindu wisdom, Sanātana Dharma, Hindu scriptures, spiritual guidance, Hindu deities, Hindu festivals, meditation, dharma, spiritual practices, ancient wisdom',
}

export default function Home() {
  return (
    <main>
      <FestivalTicker className="relative z-10" />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
    </main>
  )
}
