'use client'

import Reveal from './Reveal'
import { useLanguage } from '@/lib/LanguageContext'
import { education, translations } from '@/lib/data'

export default function Education() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="education" className="py-20 sm:py-32 bg-netflix-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 tracking-tighter">
            {t.education.title}
          </h2>
        </Reveal>

        <div className="space-y-6 lg:space-y-8">
          {education.map((item, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="flex gap-4 sm:gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-netflix-red rounded-full mt-2" />
                  {index < education.length - 1 && (
                    <div className="w-0.5 h-24 bg-gradient-to-b from-netflix-red/50 to-transparent mt-2" />
                  )}
                </div>
                <div className="pb-4 sm:pb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    {item.title[language]}
                  </h3>
                  <p className="text-white/60 text-sm sm:text-base mb-2">
                    {item.school}
                  </p>
                  <p className="text-netflix-red font-mono text-xs sm:text-sm">
                    {item.year}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
