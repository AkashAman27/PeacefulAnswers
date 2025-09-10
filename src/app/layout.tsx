import type { Metadata } from 'next'
import { Inter, Noto_Sans_Devanagari } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const notoSansDevanagari = Noto_Sans_Devanagari({ 
  subsets: ['devanagari'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-devanagari'
})

export const metadata: Metadata = {
  title: 'PeacefulAnswers - Find Peace in Ancient Wisdom',
  description: 'Explore the timeless wisdom of Hindu scriptures, practices, and spiritual guidance for modern living.',
  keywords: 'Hindu, Hinduism, Vedas, Upanishads, Bhagavad Gita, meditation, spirituality, dharma, yoga',
  openGraph: {
    title: 'PeacefulAnswers - Ancient Wisdom for Modern Life',
    description: 'Discover the profound teachings of Sanātana Dharma with authentic scriptures, practical guidance, and spiritual wisdom.',
    url: 'https://peacefulanswers.com',
    siteName: 'PeacefulAnswers',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PeacefulAnswers - Hindu Spiritual Wisdom',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PeacefulAnswers - Ancient Wisdom for Modern Life',
    description: 'Discover the profound teachings of Sanātana Dharma',
    images: ['/og-image.jpg'],
  },
  robots: 'index, follow',
}

import ClientLayout from '@/components/ClientLayout'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1E3A8A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'PeacefulAnswers',
              url: 'https://peacefulanswers.com',
              logo: 'https://peacefulanswers.com/logo.png',
              description: 'Explore the timeless wisdom of Hindu scriptures, practices, and spiritual guidance for modern living.',
              sameAs: [
                'https://twitter.com/peacefulanswers',
                'https://facebook.com/peacefulanswers'
              ]
            }),
          }}
        />
      </head>
      <body className={`${inter.className} ${notoSansDevanagari.variable} antialiased`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
