import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import AnimatedCounter from '../AnimatedCounter'
import SectionHeading from '../SectionHeading'
import { aboutStats, getLocalizedValue, sectionCopy, trustPoints } from '../../data/siteContent'
import { useSitePreferences } from '../../context/SitePreferencesContext'

function AboutSection() {
  const { language } = useSitePreferences()
  const copy = sectionCopy[language].about

  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="glass-panel rounded-[2rem] p-6 sm:p-8"
          >
            <SectionHeading
              eyebrow={copy.eyebrow}
              title={copy.title}
              description={copy.description}
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="glass-panel rounded-[1.6rem] p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">{copy.visionTitle}</p>
                <p className="mt-4 text-lg font-semibold text-white">{copy.visionBody}</p>
              </div>
              <div className="glass-panel rounded-[1.6rem] p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">{copy.missionTitle}</p>
                <p className="mt-4 text-lg font-semibold text-white">{copy.missionBody}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="grid gap-4"
          >
            {trustPoints.map((item) => (
              <div key={item.title} className="glass-panel rounded-[1.6rem] p-5">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/14 text-cyan-200">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">
                      {getLocalizedValue({ en: item.title, si: item.titleSi }, language)}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {getLocalizedValue({ en: item.description, si: item.descriptionSi }, language)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {aboutStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass-panel rounded-[1.6rem] p-6"
            >
              <p className="font-['Space_Grotesk'] text-4xl font-semibold text-white">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.26em] text-cyan-200/70">
                {getLocalizedValue({ en: stat.label, si: stat.labelSi }, language)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection