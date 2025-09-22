'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Menu, 
  X, 
  BookOpen, 
  Users, 
  Calendar, 
  MessageCircle, 
  Heart,
  Home,
  ChevronDown
} from 'lucide-react'

const navigationItems = [
  {
    name: 'Home',
    href: '/',
    icon: Home
  },
  {
    name: 'Scriptures',
    href: '/scriptures',
    icon: BookOpen,
    dropdown: [
      { name: 'Bhagavad Gita', href: '/scriptures/bhagavad-gita' },
      // { name: 'Ramayana', href: '/scriptures/ramayana' },
      // { name: 'Mahabharata', href: '/scriptures/mahabharata' },
      { name: 'Upanishads', href: '/scriptures/upanishads' },
      { name: 'Vedas', href: '/scriptures/vedas' },
      { name: 'All Scriptures', href: '/scriptures' }
    ]
  },
  {
    name: 'Deities',
    href: '/deities',
    icon: Users,
    dropdown: [
      {
        name: 'Lord Vishnu & Avatars',
        href: '/deities/vishnu',
        submenu: [
          { name: 'Lord Vishnu', href: '/deities/vishnu' },
          { name: 'Lord Krishna', href: '/deities/krishna' },
          { name: 'Lord Rama', href: '/deities/rama' },
          { name: 'Matsya Avatar', href: '/deities/vishnu/avatars/matsya' },
          { name: 'Kurma Avatar', href: '/deities/vishnu/avatars/kurma' },
          { name: 'Varaha Avatar', href: '/deities/vishnu/avatars/varaha' },
          { name: 'Narasimha Avatar', href: '/deities/vishnu/avatars/narasimha' },
          { name: 'Vamana Avatar', href: '/deities/vishnu/avatars/vamana' },
          { name: 'Parashurama Avatar', href: '/deities/vishnu/avatars/parashurama' },
          { name: 'Buddha Avatar', href: '/deities/vishnu/avatars/buddha' },
          { name: 'Kalki Avatar', href: '/deities/vishnu/avatars/kalki' }
        ]
      },
      {
        name: 'Lord Shiva & Forms',
        href: '/deities/shiva',
        submenu: [
          { name: 'Lord Shiva', href: '/deities/shiva' },
          { name: 'Adiyogi', href: '/deities/shiva/forms/adiyogi' },
          { name: 'Ardhanarishvara', href: '/deities/shiva/forms/ardhanarishvara' },
          { name: 'Bhairava', href: '/deities/shiva/forms/bhairava' },
          { name: 'Dakshinamurthy', href: '/deities/shiva/forms/dakshinamurthy' },
          { name: 'Nataraja', href: '/deities/shiva/forms/nataraja' },
          { name: 'Neelkanth', href: '/deities/shiva/forms/neelkanth' }
        ]
      },
      {
        name: 'Goddess Durga Forms',
        href: '/deities/durga',
        submenu: [
          { name: 'Goddess Durga', href: '/deities/durga' },
          { name: 'Shailaputri', href: '/deities/durga/shailaputri' },
          { name: 'Brahmacharini', href: '/deities/durga/brahmacharini' },
          { name: 'Chandraghanta', href: '/deities/durga/chandraghanta' },
          { name: 'Kushmanda', href: '/deities/durga/kushmanda' },
          { name: 'Skandamata', href: '/deities/durga/skandamata' },
          { name: 'Katyayani', href: '/deities/durga/katyayani' },
          { name: 'Kalaratri', href: '/deities/durga/kalaratri' },
          { name: 'Mahagauri', href: '/deities/durga/mahagauri' },
          { name: 'Siddhidatri', href: '/deities/durga/siddhidatri' }
        ]
      },
      { name: 'Lord Ganesha', href: '/deities/ganesha' },
      { name: 'Lord Hanuman', href: '/deities/hanuman' },
      { name: 'Lord Brahma', href: '/deities/brahma' },
      { name: 'Goddess Parvati', href: '/deities/parvati' },
      { name: 'Goddess Kali', href: '/deities/kali' },
      { name: 'Lord Indra', href: '/deities/indra' },
      { name: 'Lord Agni', href: '/deities/agni' },
      { name: 'Lord Vayu', href: '/deities/vayu' },
      { name: 'Lord Yama', href: '/deities/yama' },
      { name: 'Lord Vishwakarma', href: '/deities/vishwakarma' },
      { name: 'All Deities', href: '/deities' }
    ]
  },
  {
    name: 'Festivals',
    href: '/festivals',
    icon: Calendar,
    dropdown: [
      {
        name: 'Durga Puja & Navratri',
        href: '/festivals/durga-puja',
        submenu: [
          { name: 'Durga Puja Overview', href: '/festivals/durga-puja' },
          { name: 'Navratri', href: '/festivals/navratri' },
          { name: 'Shailaputri (Day 1)', href: '/festivals/durga-puja/shailaputri' },
          { name: 'Brahmacharini (Day 2)', href: '/festivals/durga-puja/brahmacharini' },
          { name: 'Chandraghanta (Day 3)', href: '/festivals/durga-puja/chandraghanta' },
          { name: 'Kushmanda (Day 4)', href: '/festivals/durga-puja/kushmanda' },
          { name: 'Skandamata (Day 5)', href: '/festivals/durga-puja/skandamata' },
          { name: 'Katyayani (Day 6)', href: '/festivals/durga-puja/katyayani' },
          { name: 'Kalaratri (Day 7)', href: '/festivals/durga-puja/kalaratri' },
          { name: 'Mahagauri (Day 8)', href: '/festivals/durga-puja/mahagauri' },
          { name: 'Siddhidatri (Day 9)', href: '/festivals/durga-puja/siddhidatri' }
        ]
      },
      { name: 'Ganesh Chaturthi', href: '/festivals/ganesh-chaturthi' },
      { name: 'Maha Shivaratri', href: '/festivals/maha-shivaratri' },
      { name: 'Diwali', href: '/festivals/diwali' },
      { name: 'Holi', href: '/festivals/holi' },
      { name: 'Jivit Putrika', href: '/festivals/jivit-putrika' },
      { name: 'All Festivals', href: '/festivals' }
    ]
  },
  {
    name: 'Practices',
    href: '/practices',
    icon: Heart,
    dropdown: [
      {
        name: 'Puja & Worship',
        href: '/practices#puja',
        submenu: [
          { name: 'Ganapati Puja', href: '/practices/ganapati-puja' },
          { name: 'Ganapati Arti', href: '/practices/ganapati-puja/arti' },
          { name: 'Durga Stuti', href: '/practices/durga-stuti' },
          { name: 'Shiva Puja', href: '/practices/shiva-puja' },
          { name: 'Lakshmi Puja', href: '/practices/lakshmi-puja' },
          { name: 'Saraswati Puja', href: '/practices/saraswati-puja' }
        ]
      },
      {
        name: 'Daily Lifestyle',
        href: '/practices#lifestyle',
        submenu: [
          { name: 'Surya Namaskara', href: '/practices/surya-namaskara' },
          { name: 'Morning Prayers', href: '/practices/morning-prayers' },
          { name: 'Evening Prayers', href: '/practices/evening-prayers' },
          { name: 'Meditation Practices', href: '/practices/meditation' },
          { name: 'Pranayama', href: '/practices/pranayama' },
          { name: 'Daily Mantras', href: '/practices/daily-mantras' }
        ]
      },
      { name: 'Bhagavad Gita Study', href: '/scriptures/bhagavad-gita' },
      { name: 'All Practices', href: '/practices' }
    ]
  },
  {
    name: 'Questions',
    href: '/questions',
    icon: MessageCircle
  }
]

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
  { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
  { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
  { code: 'bn', name: 'বাংলা', flag: '🇮🇳' }
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [mobileDropdowns, setMobileDropdowns] = useState<string[]>([])
  const [mobileSubmenus, setMobileSubmenus] = useState<string[]>([])
  const [selectedLanguage, setSelectedLanguage] = useState('en')
  const pathname = usePathname()

  const isActivePath = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdowns(prev =>
      prev.includes(name)
        ? prev.filter(item => item !== name)
        : [...prev, name]
    )
  }

  const toggleMobileSubmenu = (name: string) => {
    setMobileSubmenus(prev =>
      prev.includes(name)
        ? prev.filter(item => item !== name)
        : [...prev, name]
    )
  }

  return (
    <nav className="bg-white shadow-lg border-b border-orange-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-lg">🕉</span>
              </div>
              <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                PeacefulAnswers
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const IconComponent = item.icon
              const isActive = isActivePath(item.href)
              
              return (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-orange-600 bg-orange-50'
                        : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                    }`}
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.name}</span>
                    {item.dropdown && <ChevronDown className="w-3 h-3 ml-1" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div
                      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-100 py-1 z-50 max-h-96 overflow-y-auto"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => {
                        setActiveDropdown(null)
                        setActiveSubmenu(null)
                      }}
                    >
                      {item.dropdown.map((dropdownItem: any, index: number) => (
                        <div key={`${item.name}-${dropdownItem.href || dropdownItem.name}-${index}`} className="relative">
                          {dropdownItem.submenu ? (
                            <div
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors cursor-pointer relative"
                              onMouseEnter={() => setActiveSubmenu(dropdownItem.name)}
                            >
                              <div className="flex items-center justify-between">
                                <span>{dropdownItem.name}</span>
                                <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
                              </div>

                              {/* Submenu */}
                              {activeSubmenu === dropdownItem.name && (
                                <div className="mt-2 ml-4 bg-white rounded-md border border-gray-200 py-1">
                                  {dropdownItem.submenu.map((submenuItem: any, submenuIndex: number) => (
                                    <Link
                                      key={`${dropdownItem.name}-${submenuItem.name}-${submenuIndex}`}
                                      href={submenuItem.href}
                                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                                    >
                                      {submenuItem.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                            >
                              {dropdownItem.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors">
                <span className="text-lg sm:text-base">{languages.find(lang => lang.code === selectedLanguage)?.flag}</span>
                <span className="hidden sm:inline">
                  {languages.find(lang => lang.code === selectedLanguage)?.name}
                </span>
                <ChevronDown className="w-3 h-3 hidden sm:block" />
              </button>
              
              <div className="absolute right-0 top-full mt-1 w-36 bg-white rounded-md shadow-lg border border-gray-100 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => setSelectedLanguage(language.code)}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors flex items-center space-x-2 ${
                      selectedLanguage === language.code
                        ? 'text-orange-600 bg-orange-50'
                        : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                    }`}
                  >
                    <span>{language.flag}</span>
                    <span>{language.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white max-h-[calc(100vh-3.5rem)] overflow-y-auto">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => {
                const IconComponent = item.icon
                const isActive = isActivePath(item.href)
                const isDropdownOpen = mobileDropdowns.includes(item.name)

                return (
                  <div key={item.name}>
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className={`flex-1 flex items-center space-x-3 px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                          isActive
                            ? 'text-orange-600 bg-orange-50'
                            : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                        }`}
                        onClick={() => !item.dropdown && setIsOpen(false)}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span>{item.name}</span>
                      </Link>
                      {item.dropdown && (
                        <button
                          onClick={() => toggleMobileDropdown(item.name)}
                          className="px-3 py-2.5 text-gray-500 hover:text-orange-600 transition-colors"
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            isDropdownOpen ? 'rotate-180' : ''
                          }`} />
                        </button>
                      )}
                    </div>

                    {/* Mobile Dropdown Items */}
                    {item.dropdown && isDropdownOpen && (
                      <div className="ml-8 space-y-1 mt-1 animate-in slide-in-from-top-1 duration-200">
                        {item.dropdown.map((dropdownItem: any, index: number) => (
                          <div key={`mobile-${item.name}-${dropdownItem.name}-${index}`}>
                            {dropdownItem.submenu ? (
                              <div>
                                <div className="flex items-center">
                                  <Link
                                    href={dropdownItem.href}
                                    className="flex-1 block px-3 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                  <button
                                    onClick={() => toggleMobileSubmenu(dropdownItem.name)}
                                    className="px-2 py-2 text-gray-500 hover:text-orange-600 transition-colors"
                                  >
                                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                                      mobileSubmenus.includes(dropdownItem.name) ? 'rotate-180' : ''
                                    }`} />
                                  </button>
                                </div>

                                {/* Mobile Submenu Items */}
                                {mobileSubmenus.includes(dropdownItem.name) && (
                                  <div className="ml-4 space-y-1 mt-1 animate-in slide-in-from-top-1 duration-200">
                                    {dropdownItem.submenu.map((submenuItem: any) => (
                                      <Link
                                        key={submenuItem.href}
                                        href={submenuItem.href}
                                        className="block px-3 py-2 text-xs text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
                                        onClick={() => setIsOpen(false)}
                                      >
                                        {submenuItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <Link
                                href={dropdownItem.href}
                                className="block px-3 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}