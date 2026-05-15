import { motion } from 'framer-motion'
import SectionHeading from '../SectionHeading'
import TechMotionBackdrop from '../TechMotionBackdrop'
import TiltCard from '../TiltCard'
import { getLocalizedValue, sectionCopy, services } from '../../data/siteContent'
import { useSitePreferences } from '../../context/SitePreferencesContext'

function ServicesSection() {
  const { language } = useSitePreferences()
  const copy = sectionCopy[language].services

  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
          <TechMotionBackdrop className="opacity-75" />
          <div className="relative grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

            <div className="grid gap-4 sm:grid-cols-3">
              {services.slice(0, 3).map((service) => {
                const deliverables = language === 'si' && service.deliverablesSi ? service.deliverablesSi : service.deliverables

                return (
                  <div key={service.title} className="rounded-[1.6rem] border border-white/10 bg-slate-950/45 p-4 backdrop-blur-xl">
                    <p className="text-xs uppercase tracking-[0.26em] text-cyan-200/70">{copy.videoLabel}</p>
                    <p className="mt-3 text-lg font-semibold text-white">
                      {getLocalizedValue({ en: service.title, si: service.titleSi }, language)}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{deliverables[0]}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            const deliverables = language === 'si' && service.deliverablesSi ? service.deliverablesSi : service.deliverables

            return (
              <TiltCard key={service.title} className="glass-panel group rounded-[1.8rem] p-5">
                <motion.article
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="relative"
                >
                  <div
                    className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 text-cyan-100"
                    style={{ background: service.tint }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {getLocalizedValue({ en: service.title, si: service.titleSi }, language)}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {getLocalizedValue({ en: service.description, si: service.descriptionSi }, language)}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {deliverables.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.08] px-3 py-2 text-xs uppercase tracking-[0.18em] text-cyan-100/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              </TiltCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection