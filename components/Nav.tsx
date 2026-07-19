'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/lib/LanguageContext'
import { translations } from '@/lib/data'

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: t.navAbout, href: '#about' },
    { label: t.navExperience, href: '#experience' },
    { label: t.navSkills, href: '#skills' },
    { label: t.navProjects, href: '#projects' },
    { label: t.navEducation, href: '#education' },
    { label: t.navContact, href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-netflix-black/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="text-netflix-red font-bold text-xl tracking-tight">
          {language === 'he' ? 'אסתר וייסברג' : 'Ester Wiseberg'}
        </a>
        <div className="flex gap-4 sm:gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-netflix-red transition-colors text-sm font-medium hidden sm:inline"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleLanguage}
            className="ml-4 px-3 py-1 rounded-full border border-netflix-red/50 text-netflix-red hover:bg-netflix-red/10 transition-all font-semibold text-sm"
          >
            {language === 'en' ? 'עב' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  )
}
