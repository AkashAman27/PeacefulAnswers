import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import FestivalTicker from '@/components/FestivalTicker'

export default function Home() {
  return (
    <main>
      <FestivalTicker className="relative z-10" />
      <HeroSection />
      <FeaturesSection />
    </main>
  )
}
