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
  MapPin,
  ChevronDown
} from 'lucide-react'

const navigationItems = [
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
    name: 'Sacred Places',
    href: '/sacred-places',
    icon: MapPin,
    dropdown: [
      {
        name: 'Char Dham',
        href: '/sacred-places/char-dham',
        submenu: [
          { name: 'Badrinath', href: '/sacred-places/char-dham/badrinath' },
          { name: 'Dwarka', href: '/sacred-places/char-dham/dwarka' },
          { name: 'Jagannath Puri', href: '/sacred-places/char-dham/jagannath-puri' },
          { name: 'Rameswaram', href: '/sacred-places/char-dham/rameswaram' }
        ]
      },
      {
        name: 'Jyotirlingas',
        href: '/sacred-places/jyotirlingas',
        submenu: [
          { name: 'Somnath', href: '/sacred-places/jyotirlingas/somnath' },
          { name: 'Mallikarjuna', href: '/sacred-places/jyotirlingas/mallikarjuna' },
          { name: 'Mahakaleshwar', href: '/sacred-places/jyotirlingas/mahakaleshwar' },
          { name: 'Omkareshwar', href: '/sacred-places/jyotirlingas/omkareshwar' },
          { name: 'Kedarnath', href: '/sacred-places/jyotirlingas/kedarnath' },
          { name: 'Bhimashankar', href: '/sacred-places/jyotirlingas/bhimashankar' }
        ]
      },
      {
        name: 'Shakti Peethas',
        href: '/sacred-places/shakti-peethas',
        submenu: [
          { name: 'Kamakhya', href: '/sacred-places/shakti-peethas/kamakhya' },
          { name: 'Vaishno Devi', href: '/sacred-places/shakti-peethas/vaishno-devi' },
          { name: 'Kalighat', href: '/sacred-places/shakti-peethas/kalighat' },
          { name: 'Ambaji', href: '/sacred-places/shakti-peethas/ambaji' }
        ]
      },
      { name: 'Vrindavan', href: '/sacred-places/vrindavan' },
      { name: 'Varanasi', href: '/sacred-places/varanasi' },
      { name: 'Haridwar', href: '/sacred-places/haridwar' },
      { name: 'Rishikesh', href: '/sacred-places/rishikesh' },
      { name: 'Tirupati', href: '/sacred-places/tirupati' },
      { name: 'All Sacred Places', href: '/sacred-places' }
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
  const [submenuTimeout, setSubmenuTimeout] = useState<NodeJS.Timeout | null>(null)
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null)
  const pathname = usePathname()

  const isActivePath = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const handleDropdownEnter = (name: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
    if (submenuTimeout) {
      clearTimeout(submenuTimeout)
      setSubmenuTimeout(null)
    }
    setActiveDropdown(name)
  }

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
      setActiveSubmenu(null)
    }, 150)
    setDropdownTimeout(timeout)
  }

  const handleSubmenuEnter = (name: string) => {
    if (submenuTimeout) {
      clearTimeout(submenuTimeout)
      setSubmenuTimeout(null)
    }
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
    setActiveSubmenu(name)
  }

  const handleSubmenuLeave = () => {
    const timeout = setTimeout(() => {
      setActiveSubmenu(null)
    }, 150)
    setSubmenuTimeout(timeout)
  }

  const handleSubmenuContainerEnter = () => {
    if (submenuTimeout) {
      clearTimeout(submenuTimeout)
      setSubmenuTimeout(null)
    }
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
  }

  const handleDropdownContainerEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
    if (submenuTimeout) {
      clearTimeout(submenuTimeout)
      setSubmenuTimeout(null)
    }
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
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10">
                <img
                  src="/logo.png"
                  alt="PeacefulAnswers Logo"
                  className="w-full h-full object-contain"
                />
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
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.dropdown && handleDropdownEnter(item.name)}
                  onMouseLeave={() => item.dropdown && handleDropdownLeave()}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-orange-600 bg-orange-50'
                        : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.name}</span>
                    {item.dropdown && <ChevronDown className="w-3 h-3 ml-1" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div
                      className={`absolute top-full left-0 mt-1 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 flex xl:left-0 lg:-left-32 md:-left-48 ${activeSubmenu && item.dropdown.find((dropdownItem: any) => dropdownItem.name === activeSubmenu)?.submenu ? 'min-w-[800px] max-w-[900px]' : 'w-80'}`}
                      onMouseEnter={handleDropdownContainerEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      {/* Main dropdown column */}
                      <div className={`w-80 py-3 ${activeSubmenu && item.dropdown.find((dropdownItem: any) => dropdownItem.name === activeSubmenu)?.submenu ? 'border-r border-gray-200' : ''}`}>
                        <div className="max-h-96 overflow-y-auto">
                          {item.dropdown.map((dropdownItem: any, index: number) => (
                            <div
                              key={`${item.name}-${dropdownItem.href || dropdownItem.name}-${index}`}
                              className="relative"
                              onMouseEnter={() => dropdownItem.submenu ? handleSubmenuEnter(dropdownItem.name) : setActiveSubmenu(null)}
                              onMouseLeave={() => {}}
                            >
                              {dropdownItem.submenu ? (
                                <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer group">
                                  <span className="font-medium">{dropdownItem.name}</span>
                                  <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                  </svg>
                                </div>
                              ) : (
                                <Link
                                  href={dropdownItem.href}
                                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                >
                                  {dropdownItem.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Submenu column - only shows when activeSubmenu exists AND has actual submenu items */}
                      {activeSubmenu && item.dropdown.find((dropdownItem: any) => dropdownItem.name === activeSubmenu)?.submenu && (
                        <div
                          className="w-80 py-3 bg-gray-50"
                          onMouseEnter={handleSubmenuContainerEnter}
                          onMouseLeave={handleSubmenuLeave}
                        >
                          <div className="px-4 py-2 border-b border-gray-200 mb-2">
                            <h3 className="font-semibold text-gray-800 text-sm">{activeSubmenu}</h3>
                          </div>
                          <div className="max-h-80 overflow-y-auto px-2">
                            {item.dropdown
                              .find((dropdownItem: any) => dropdownItem.name === activeSubmenu)
                              ?.submenu?.map((submenuItem: any, submenuIndex: number) => (
                              <Link
                                key={`${activeSubmenu}-${submenuItem.name}-${submenuIndex}`}
                                href={submenuItem.href}
                                className="block px-3 py-2 text-sm text-gray-600 hover:bg-white hover:text-blue-600 transition-colors rounded-md mx-1 my-0.5"
                              >
                                {submenuItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
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