import { motion } from 'framer-motion'
import SectionHeading from '../SectionHeading'
import TiltCard from '../TiltCard'
import { techStack } from '../../data/siteContent'
import { sectionCopy } from '../../data/siteContent'
import { useSitePreferences } from '../../context/SitePreferencesContext'

function TechStackSection() {
  const { language } = useSitePreferences()
  const copy = sectionCopy[language].technology

  return (
    <section id="technologies" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
          align="center"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {techStack.map((item, index) => {
            const Icon = item.icon

            return (
              <TiltCard key={item.name} className="glass-panel rounded-[1.6rem] p-5 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/45">
                    <Icon className="h-7 w-7" style={{ color: item.color }} />
                  </div>
                  <p className="mt-4 text-sm font-medium text-slate-100">{item.name}</p>
                </motion.div>
              </TiltCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TechStackSection