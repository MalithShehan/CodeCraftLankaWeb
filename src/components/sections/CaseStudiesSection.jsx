import { motion } from 'framer-motion'
import SectionHeading from '../SectionHeading'
import { getLocalizedValue, portfolioProjects, sectionCopy } from '../../data/siteContent'
import { useSitePreferences } from '../../context/SitePreferencesContext'

function CaseStudiesSection() {
  const { language } = useSitePreferences()
  const copy = sectionCopy[language].caseStudies

  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {portfolioProjects.slice(0, 3).map((project, index) => {
            const study = language === 'si' && project.caseStudySi ? project.caseStudySi : project.caseStudy

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.42, delay: index * 0.06 }}
                className="glass-panel rounded-[1.8rem] p-6"
              >
                <span className="badge-chip">{project.name}</span>
                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.26em] text-cyan-200/70">{sectionCopy[language].portfolio.problem}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{study.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.26em] text-cyan-200/70">{sectionCopy[language].portfolio.solution}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{study.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.26em] text-cyan-200/70">{sectionCopy[language].portfolio.result}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{study.result}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.reel.map((item) => (
                    <span key={item} className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-2 text-xs uppercase tracking-[0.18em] text-cyan-100/80">
                      {getLocalizedValue({ en: item, si: item }, language)}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesSection