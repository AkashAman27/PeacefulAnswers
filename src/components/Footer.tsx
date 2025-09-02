import Link from 'next/link'
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone,
  MapPin,
  Heart
} from 'lucide-react'

const footerSections = [
  {
    title: 'Scriptures',
    links: [
      { name: 'Bhagavad Gita', href: '/scriptures/bhagavad-gita' },
      { name: 'Ramayana', href: '/scriptures/ramayana' },
      { name: 'Mahabharata', href: '/scriptures/mahabharata' },
      { name: 'Upanishads', href: '/scriptures/upanishads' },
      { name: 'Vedas', href: '/scriptures/vedas' },
      { name: 'All Scriptures', href: '/scriptures' }
    ]
  },
  {
    title: 'Spiritual Life',
    links: [
      { name: 'Deities', href: '/deities' },
      { name: 'Festivals', href: '/festivals' },
      { name: 'Practices', href: '/practices' },
      { name: 'Meditation', href: '/practices/meditation' },
      { name: 'Yoga', href: '/practices/yoga' },
      { name: 'Mantras', href: '/practices/mantras' }
    ]
  },
  {
    title: 'Learning',
    links: [
      { name: 'Questions & Answers', href: '/questions' },
      { name: 'Glossary', href: '/glossary' },
      { name: 'Study Guides', href: '/study-guides' },
      { name: 'Daily Wisdom', href: '/daily-wisdom' },
      { name: 'Spiritual Calendar', href: '/calendar' },
      { name: 'Resources', href: '/resources' }
    ]
  },
  {
    title: 'Community',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Support', href: '/support' },
      { name: 'Contribute', href: '/contribute' }
    ]
  }
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-600 to-yellow-400 flex items-center justify-center">
                <span className="text-white text-lg font-bold">🕉</span>
              </div>
              <span className="text-xl font-bold">PeacefulAnswers</span>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              Explore the timeless wisdom of Sanātana Dharma with authentic scriptures, 
              practical guidance, and spiritual teachings for modern living.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/peacefulanswers" 
                className="w-9 h-9 bg-blue-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com/peacefulanswers" 
                className="w-9 h-9 bg-blue-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com/peacefulanswers" 
                className="w-9 h-9 bg-blue-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com/peacefulanswers" 
                className="w-9 h-9 bg-blue-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-blue-200 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="border-t border-blue-800 bg-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-blue-300">Email us</p>
                <p className="text-white font-medium">contact@peacefulanswers.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-blue-300">Call us</p>
                <p className="text-white font-medium">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-blue-300">Visit us</p>
                <p className="text-white font-medium">Global Community</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800 bg-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-blue-200 text-sm">
              <span>&copy; {new Date().getFullYear()} PeacefulAnswers.</span>
              <span>•</span>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for spreading Dharma</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-blue-200 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-blue-200 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-blue-200 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Spiritual Quote Section */}
      <div className="border-t border-blue-800 bg-gradient-to-r from-blue-950 to-indigo-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <div className="mb-4">
            <p className="text-lg text-blue-100 italic leading-relaxed">
              "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।<br />
              अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्।।"
            </p>
          </div>
          <div className="text-blue-200 text-sm">
            <p className="italic mb-2">
              "Whenever there is decline of dharma and rise of adharma, O Bharata, then I manifest Myself."
            </p>
            <p className="font-medium">— Bhagavad Gita 4.7</p>
          </div>
        </div>
      </div>
    </footer>
  )
}