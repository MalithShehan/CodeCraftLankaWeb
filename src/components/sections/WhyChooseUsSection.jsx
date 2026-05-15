import { motion } from 'framer-motion'
import SectionHeading from '../SectionHeading'
import { getLocalizedValue, sectionCopy, whyChooseItems } from '../../data/siteContent'
import { useSitePreferences } from '../../context/SitePreferencesContext'

function WhyChooseUsSection() {
  const { language } = useSitePreferences()
  const copy = sectionCopy[language].whyChoose

  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
          align="center"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {whyChooseItems.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-panel rounded-[1.8rem] p-5"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/12 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {getLocalizedValue({ en: item.title, si: item.titleSi }, language)}
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

export default WhyChooseUsSection