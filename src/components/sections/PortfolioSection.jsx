import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { Eye, ExternalLink, PlayCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import MagneticButton from '../MagneticButton'
import ProjectModal from '../ProjectModal'
import SectionHeading from '../SectionHeading'
import TiltCard from '../TiltCard'
import {
  getLocalizedValue,
  portfolioCategories,
  portfolioProjects,
  sectionCopy,
} from '../../data/siteContent'
import { useSitePreferences } from '../../context/SitePreferencesContext'

function ProjectPreviewCluster({ project, language, copy }) {
  return (
    <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/55 p-4">
      <div className="absolute inset-0 opacity-90" style={{ background: project.gradient }} />
      <div className="absolute -right-10 top-2 h-32 w-32 rounded-full blur-3xl" style={{ backgroundColor: project.accent, opacity: 0.35 }} />

      <div className="relative flex items-center justify-between gap-3">
        <p className="text-xs uppercase tracking-[0.34em] text-cyan-100/70">
          {getLocalizedValue({ en: project.industry, si: project.industrySi }, language)}
        </p>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/55 px-3 py-2 text-[0.68rem] uppercase tracking-[0.22em] text-cyan-100/80">
          <PlayCircle className="h-3.5 w-3.5" />
          {copy.previewReel}
        </div>
      </div>

      <div className="relative mt-5">
        <motion.div
          className="mx-auto max-w-[22rem] rounded-[1.9rem] border border-white/10 bg-slate-950/70 p-3 shadow-[0_20px_50px_rgba(2,6,23,0.32)]"
          whileHover={{ scale: 1.02 }}
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-4">
            <div className="flex items-center justify-between text-[0.68rem] uppercase tracking-[0.22em] text-cyan-100/80">
              <span>{project.client}</span>
              <span>{project.name}</span>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.metrics.slice(0, 2).map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center text-[0.68rem] uppercase tracking-[0.22em] text-cyan-100/80">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-cyan-200/70">
                <span>{project.stack[0]}</span>
                <span>{project.stack[1] ?? project.stack[0]}</span>
              </div>
              <div className="mt-4 h-2 rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500"
                  initial={{ width: '20%' }}
                  whileInView={{ width: '82%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: 'easeOut' }}
                />
              </div>
              <div className="mt-4 grid gap-2">
                {project.reel.slice(0, 2).map((item) => (
                  <div key={item} className="h-8 rounded-2xl bg-slate-950/55" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute -bottom-3 right-0 w-28 rounded-[2rem] border border-white/10 bg-slate-950/80 p-2 shadow-[0_18px_44px_rgba(2,6,23,0.38)]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="mx-auto h-1.5 w-12 rounded-full bg-white/12" />
          <div className="mt-3 rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(34,211,238,0.14),rgba(2,6,23,0.44))] p-3">
            <div className="h-16 rounded-2xl bg-white/10" />
            <div className="mt-3 grid gap-2">
              <div className="h-2 rounded-full bg-white/15" />
              <div className="h-2 w-3/4 rounded-full bg-cyan-300/25" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function PortfolioCard({ project, onOpen, copy, language }) {
  const summary = getLocalizedValue({ en: project.summary, si: project.summarySi }, language)
  const comparison = language === 'si' && project.comparisonSi ? project.comparisonSi : project.comparison

  return (
    <TiltCard className="glass-panel relative h-full overflow-hidden rounded-[1.8rem] p-4">
      <motion.article whileHover={{ y: -6 }} className="relative h-full">
        <ProjectPreviewCluster project={project} language={language} copy={copy} />

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200">
              {item}
            </span>
          ))}
        </div>

        <h3 className="mt-5 text-2xl font-semibold text-white">{project.name}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{summary}</p>

        <div className="mt-5 rounded-3xl border border-white/10 bg-slate-950/45 p-4">
          <div className="flex items-center justify-between text-[0.68rem] uppercase tracking-[0.22em] text-cyan-100/80">
            <span>{copy.before}</span>
            <span>{copy.after}</span>
          </div>
          <div className="mt-3 h-2 rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500"
              initial={{ width: '34%' }}
              whileInView={{ width: '78%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            />
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-300">{comparison.after}</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <MagneticButton>
            <button type="button" onClick={() => onOpen(project)} className="btn-secondary !px-4 !py-2.5 text-sm">
              <Eye className="h-4 w-4" />
              {copy.detailButton}
            </button>
          </MagneticButton>

          {project.website ? (
            <MagneticButton>
              <a
                href={project.website}
                target="_blank"
                rel="noreferrer"
                className="btn-primary !px-4 !py-2.5 text-sm"
              >
                {copy.liveButton}
                <ExternalLink className="h-4 w-4" />
              </a>
            </MagneticButton>
          ) : (
            <span className="btn-secondary !px-4 !py-2.5 text-sm opacity-80">{copy.conceptLabel}</span>
          )}
        </div>
      </motion.article>
    </TiltCard>
  )
}

function PortfolioSection({
  id = 'portfolio',
  mode = 'slider',
  title,
  description,
}) {
  const { language } = useSitePreferences()
  const copy = sectionCopy[language].portfolio
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = useMemo(
    () =>
      activeCategory === 'all'
        ? portfolioProjects
        : portfolioProjects.filter((project) => project.category === activeCategory),
    [activeCategory],
  )

  const sectionTitle = title ?? copy.title
  const sectionDescription = description ?? copy.description

  return (
    <section id={id} className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={copy.eyebrow} title={sectionTitle} description={sectionDescription} />

          {mode === 'slider' ? (
            <Link to="/projects" className="btn-secondary w-fit">
              {copy.fullPortfolio}
            </Link>
          ) : null}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {portfolioCategories.map((category) => (
            <button
              key={category.key}
              type="button"
              onClick={() => setActiveCategory(category.key)}
              className={`relative overflow-hidden rounded-full border px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] transition ${
                activeCategory === category.key
                  ? 'border-cyan-300/35 text-white'
                  : 'border-white/10 bg-white/5 text-slate-300 hover:border-cyan-300/20 hover:text-white'
              }`}
            >
              {activeCategory === category.key ? (
                <motion.span
                  layoutId={`portfolio-category-${id}`}
                  className="absolute inset-0 rounded-full bg-cyan-400/14"
                  transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                />
              ) : null}
              <span className="relative z-10">
                {getLocalizedValue({ en: category.label, si: category.labelSi }, language)}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-10">
          {mode === 'slider' ? (
            <Swiper
              key={activeCategory}
              modules={[Autoplay]}
              slidesPerView={1.08}
              spaceBetween={20}
              autoplay={{ delay: 3200, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 1.35 },
                900: { slidesPerView: 2 },
                1200: { slidesPerView: 2.45 },
              }}
            >
              {filteredProjects.map((project) => (
                <SwiperSlide key={project.id} className="h-auto">
                  <PortfolioCard
                    project={project}
                    onOpen={setSelectedProject}
                    copy={copy}
                    language={language}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <motion.div layout className="grid gap-6 lg:grid-cols-2">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                  >
                    <PortfolioCard
                      project={project}
                      onOpen={setSelectedProject}
                      copy={copy}
                      language={language}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}

export default PortfolioSection