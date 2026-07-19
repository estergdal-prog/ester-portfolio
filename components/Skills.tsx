'use client'

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import Reveal from './Reveal'
import { useLanguage } from '@/lib/LanguageContext'
import { skillGroups, translations, radarSkillsData } from '@/lib/data'

export default function Skills() {
  const { language } = useLanguage()
  const t = translations[language]

  const chartData = language === 'en' ? radarSkillsData.en : radarSkillsData.he

  return (
    <section id="skills" className="py-20 sm:py-32 bg-netflix-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 tracking-tighter">
            {t.skills.title}
          </h2>
        </Reveal>

        {/* Radar Chart */}
        <Reveal delay={0.1}>
          <div className="mb-16 p-6 sm:p-8 bg-white/5 border border-white/10 rounded-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-netflix-red mb-8 tracking-tighter">
              {language === 'en' ? 'Proficiency Overview' : 'סקירת מומחיות'}
            </h3>
            <div className="w-full h-96">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={chartData}>
                  <PolarGrid stroke="rgba(255,255,255,0.1)" />
                  <PolarAngleAxis dataKey="name" stroke="rgba(255,255,255,0.6)" style={{ fontSize: '12px' }} />
                  <PolarRadiusAxis stroke="rgba(255,255,255,0.3)" angle={90} domain={[0, 100]} />
                  <Radar
                    name={language === 'en' ? 'Proficiency' : 'רמת מומחיות'}
                    dataKey="value"
                    stroke="#e50914"
                    fill="#e50914"
                    fillOpacity={0.6}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      border: '1px solid #e50914',
                      borderRadius: '8px',
                      color: '#fff',
                    }}
                  />
                  <Legend wrapperStyle={{ paddingTop: '20px', color: '#fff' }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Reveal>

        {/* Skill Groups */}
        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {skillGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="flex flex-col gap-4">
                <h3 className="text-lg sm:text-xl font-bold text-netflix-red uppercase tracking-widest">
                  {group.category[language]}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="inline-block bg-white/10 hover:bg-netflix-red/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 border border-white/10 hover:border-netflix-red/50"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
