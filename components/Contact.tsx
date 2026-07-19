'use client'

import Reveal from './Reveal'
import { useLanguage } from '@/lib/LanguageContext'
import { translations } from '@/lib/data'
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const { language } = useLanguage()
  const t = translations[language]

  const location = language === 'en' ? 'Central District, Israel' : 'אזור מרכז, ישראל'
  const linkedinLabel = language === 'en' ? 'View Profile' : 'צפה בפרופיל'

  return (
    <section id="contact" className="py-20 sm:py-32 bg-netflix-black border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 tracking-tighter">
            {t.contact.title}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          <Reveal delay={0.1}>
            <a
              href="tel:+972546255467"
              className="flex items-center gap-4 p-6 rounded-lg bg-white/5 border border-white/10 hover:border-netflix-red/50 hover:bg-white/10 transition-all duration-300"
            >
              <Phone className="w-6 h-6 text-netflix-red flex-shrink-0" />
              <div>
                <p className="text-white/60 text-sm mb-1">{t.contact.phone}</p>
                <p className="text-white font-semibold text-lg">0546255467</p>
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.2}>
            <a
              href="mailto:estergdal@gmail.com"
              className="flex items-center gap-4 p-6 rounded-lg bg-white/5 border border-white/10 hover:border-netflix-red/50 hover:bg-white/10 transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-netflix-red flex-shrink-0" />
              <div>
                <p className="text-white/60 text-sm mb-1">{t.contact.email}</p>
                <p className="text-white font-semibold text-lg">estergdal@gmail.com</p>
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex items-center gap-4 p-6 rounded-lg bg-white/5 border border-white/10">
              <MapPin className="w-6 h-6 text-netflix-red flex-shrink-0" />
              <div>
                <p className="text-white/60 text-sm mb-1">{t.contact.location}</p>
                <p className="text-white font-semibold text-lg">{location}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <a
              href="https://www.linkedin.com/in/ester-wiseberg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-lg bg-white/5 border border-white/10 hover:border-netflix-red/50 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <Linkedin className="w-6 h-6 text-netflix-red" />
              </div>
              <div>
                <p className="text-white/60 text-sm mb-1">LinkedIn</p>
                <p className="text-white font-semibold text-lg">{linkedinLabel}</p>
              </div>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.5}>
          <div className="text-center pt-8 border-t border-white/10">
            <p className="text-white/50 text-sm">
              {t.contact.footerText}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
