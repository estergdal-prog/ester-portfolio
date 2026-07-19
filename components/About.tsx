'use client'

import Reveal from './Reveal'
import { useLanguage } from '@/lib/LanguageContext'
import { translations } from '@/lib/data'

export default function About() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="about" className="py-20 sm:py-32 bg-netflix-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 tracking-tighter">
            {t.about.title}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed font-light">
            {t.about.content}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
