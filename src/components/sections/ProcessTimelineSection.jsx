import { motion } from 'framer-motion'
import SectionHeading from '../SectionHeading'
import { getLocalizedValue, processTimeline, sectionCopy } from '../../data/siteContent'
import { useSitePreferences } from '../../context/SitePreferencesContext'

function ProcessTimelineSection() {
  const { language } = useSitePreferences()
  const copy = sectionCopy[language].process

  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {processTimeline.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                key={item.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="glass-panel relative rounded-[1.8rem] p-5"
              >
                <span className="absolute right-5 top-5 text-xs uppercase tracking-[0.28em] text-cyan-200/55">
                  0{index + 1}
                </span>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/12 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {getLocalizedValue({ en: item.step, si: item.stepSi }, language)}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {getLocalizedValue({ en: item.description, si: item.descriptionSi }, language)}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProcessTimelineSection