'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { languages } from '@/lib/translations'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  const navigation = [
    {
      name: 'Start Here',
      href: '/start-here',
      subMenu: [
        { name: 'What Hinduism Is', href: '/start-here/what-is-hinduism' },
        { name: 'Core Ideas', href: '/start-here/core-ideas' },
        { name: 'How to Use This Site', href: '/start-here/how-to-use' },
      ]
    },
    {
      name: 'Scriptures',
      href: '/scriptures',
      subMenu: [
        { name: 'Bhagavad Gita', href: '/scriptures/bhagavad-gita' },
        { name: 'Upanishads', href: '/scriptures/upanishads' },
        { name: 'Vedas', href: '/scriptures/vedas' },
        { name: 'Puranas', href: '/scriptures/puranas' },
      ]
    },
    {
      name: 'Practices',
      href: '/practices',
      subMenu: [
        { name: 'Daily Practice', href: '/practices/daily' },
        { name: 'Meditation', href: '/practices/meditation' },
        { name: 'Vratas', href: '/practices/vratas' },
        { name: 'Rituals', href: '/practices/rituals' },
      ]
    },
    {
      name: 'Deities',
      href: '/deities',
      subMenu: [
        { name: 'Trimurti', href: '/deities/trimurti' },
        { name: 'Devi', href: '/deities/devi' },
        { name: 'Avatars', href: '/avatars' },
        { name: 'Ganesha', href: '/deities/ganesha' },
      ]
    },
    { name: 'Questions', href: '/questions' },
  ]

  return (
    <header className="bg-white border-b border-orange-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-600 to-yellow-400 flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-orange-600 text-sm font-bold">ॐ</span>
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-900 to-orange-600 bg-clip-text text-transparent">
              PeacefulAnswers
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center text-sm font-medium text-blue-900 hover:text-orange-600 transition-colors"
                >
                  {item.name}
                  {item.subMenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
                
                {/* Dropdown Menu */}
                {item.subMenu && (
                  <div className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-lg border border-orange-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.subMenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-blue-900 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value as any)}
              className="text-sm border border-orange-200 rounded-md px-2 py-1 bg-white text-blue-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
              {Object.entries(languages).map(([code, name]) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-blue-900 hover:text-orange-600 hover:bg-orange-50"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-orange-100">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-blue-900 hover:text-orange-600 hover:bg-orange-50 rounded-md"
                  >
                    {item.name}
                  </Link>
                  {item.subMenu && (
                    <div className="ml-4 space-y-1">
                      {item.subMenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-blue-800 hover:text-orange-600 hover:bg-orange-50 rounded-md"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header