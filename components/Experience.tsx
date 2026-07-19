'use client'

import Reveal from './Reveal'
import { useLanguage } from '@/lib/LanguageContext'
import { experience, translations } from '@/lib/data'

export default function Experience() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="experience" className="py-20 sm:py-32 bg-netflix-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 tracking-tighter">
            {t.experience.title}
          </h2>
        </Reveal>

        <div className="grid gap-6 lg:gap-8">
          {experience.map((job, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="group p-6 sm:p-8 bg-white/5 border border-white/10 rounded-xl hover:border-netflix-red/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-red-glow">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {job.title[language]}
                    </h3>
                    <p className="text-netflix-red font-semibold text-sm sm:text-base">
                      {job.company}
                    </p>
                  </div>
                  <span className="text-white/60 text-sm sm:text-base font-mono whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base font-light">
                  {job.description[language]}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
