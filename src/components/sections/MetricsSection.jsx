import { motion } from 'framer-motion'
import AnimatedCounter from '../AnimatedCounter'
import SectionHeading from '../SectionHeading'
import { getLocalizedValue, performanceStats, sectionCopy } from '../../data/siteContent'
import { useSitePreferences } from '../../context/SitePreferencesContext'

function MetricsSection() {
  const { language } = useSitePreferences()
  const copy = sectionCopy[language].metrics

  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={
            language === 'si'
              ? 'විශ්වාසය, delivery වේගය, සහ support readiness පෙන්වන සංඥා.'
              : 'Signals that show delivery pace, trust, and support readiness.'
          }
          description={
            language === 'si'
              ? 'දෘශ්‍ය නිර්මාණයට පසුපසින් ඇති ක්‍රියාකාරී ශෛලිය මෙහි පෙනේ: ප්‍රතිචාරශීලී execution, මිනුම් කළ හැකි සතුට, සහ support continuity.'
              : 'These numbers frame the operating style behind the visuals: responsive execution, measurable satisfaction, and support continuity.'
          }
          align="center"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {performanceStats.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="glass-panel rounded-[1.8rem] p-6"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/12 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-5 font-['Space_Grotesk'] text-4xl font-semibold text-white">
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.24em] text-cyan-200/70">
                  {getLocalizedValue({ en: item.label, si: item.labelSi }, language)}
                </p>
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

export default MetricsSection