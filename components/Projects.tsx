'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'
import Reveal from './Reveal'
import { useLanguage } from '@/lib/LanguageContext'
import { projects, translations } from '@/lib/data'

export default function Projects() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="projects" className="py-20 sm:py-32 bg-netflix-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 tracking-tighter">
            {language === 'en' ? 'Featured Data Projects' : 'פרויקטי נתונים בולטים'}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => {
            const chartData = project.metrics.map(m => ({
              name: m.label[language],
              value: m.value,
            }))

            return (
              <Reveal key={index} delay={index * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-netflix-red/50 transition-all duration-300">
                  <div className="p-6 sm:p-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                      {project.title[language]}
                    </h3>
                    <p className="text-netflix-red font-semibold mb-4">
                      {project.impact}
                    </p>
                    <p className="text-white/70 mb-8 leading-relaxed">
                      {project.description[language]}
                    </p>

                    {/* Bar Chart */}
                    <div className="mt-8">
                      <div className="w-full h-80 bg-black/30 rounded-lg overflow-hidden">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 60 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                            <XAxis
                              dataKey="name"
                              tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }}
                              angle={-45}
                              textAnchor="end"
                              height={100}
                            />
                            <YAxis tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }} />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: 'rgba(0,0,0,0.8)',
                                border: '1px solid #e50914',
                                borderRadius: '8px',
                                color: '#fff',
                              }}
                            />
                            <Bar dataKey="value" fill="#e50914" radius={[8, 8, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
