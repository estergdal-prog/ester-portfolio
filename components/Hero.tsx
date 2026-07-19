'use client'

import Image from 'next/image'
import Reveal from './Reveal'
import { useLanguage } from '@/lib/LanguageContext'
import { translations } from '@/lib/data'

export default function Hero() {
  const { language } = useLanguage()
  const t = translations[language]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-netflix-black pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-netflix-red/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-netflix-red/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <Reveal>
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-full lg:max-w-md">
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-netflix-red/30 to-purple-500/30 rounded-2xl blur-xl" />
                <Image
                  src="/profile.jpg"
                  alt="Ester Wiseberg"
                  fill
                  className="relative rounded-2xl object-contain w-full h-full shadow-2xl"
                  priority
                />
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div className="text-center lg:text-left space-y-6">
            <Reveal>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tighter">
                {t.hero.name}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-xl sm:text-2xl lg:text-3xl text-netflix-red font-semibold tracking-wide">
                {t.hero.subtitle}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
                {t.hero.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-sm sm:text-base text-white/60 leading-relaxed font-light">
                {t.about.content}
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <button
                onClick={scrollToContact}
                className="inline-block bg-netflix-red hover:bg-netflix-red-dark text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-glow-lg text-lg tracking-wide"
              >
                {t.hero.cta}
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
