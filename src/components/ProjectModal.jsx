import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'
import { getLocalizedValue, sectionCopy } from '../data/siteContent'
import { useSitePreferences } from '../context/SitePreferencesContext'

function PreviewSurface({ project, copy, language }) {
  const description = getLocalizedValue({ en: project.description, si: project.descriptionSi }, language)

  return (
    <div className="rounded-[1.8rem] border border-white/10 bg-slate-950/65 p-5">
      <div className="mb-5 flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-rose-400" />
        <span className="h-3 w-3 rounded-full bg-amber-300" />
        <span className="h-3 w-3 rounded-full bg-emerald-300" />
      </div>

      <div
        className="relative overflow-hidden rounded-[1.5rem] border border-white/10 p-4 sm:p-5"
        style={{ background: project.gradient }}
      >
        <div
          className="absolute -right-8 top-2 h-28 w-28 rounded-full blur-3xl"
          style={{ backgroundColor: project.accent, opacity: 0.35 }}
        />

        {project.iframeAllowed && project.previewUrl ? (
          <div className="overflow-hidden rounded-[1.3rem] border border-white/10 bg-white shadow-[0_24px_60px_rgba(2,6,23,0.24)]">
            <iframe
              title={`${project.name} preview`}
              src={project.previewUrl}
              loading="lazy"
              className="h-[23rem] w-[160%] origin-top-left scale-[0.625]"
            />
          </div>
        ) : (
          <div className="rounded-[1.3rem] border border-white/10 bg-slate-950/60 p-5">
            <div className="flex items-center justify-between text-[0.68rem] uppercase tracking-[0.22em] text-cyan-100/80">
              <span>{project.client}</span>
              <span>{project.name}</span>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {project.metrics.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 text-center text-xs uppercase tracking-[0.2em] text-cyan-100/80"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-cyan-200/70">
                <span>{project.stack[0]}</span>
                <span>{project.stack[1] ?? project.stack[0]}</span>
              </div>
              <div className="mt-4 grid gap-2">
                <div className="h-20 rounded-3xl bg-slate-950/55" />
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="h-12 rounded-2xl bg-slate-950/55" />
                  <div className="h-12 rounded-2xl bg-slate-950/55" />
                </div>
              </div>
            </div>
          </div>
        )}

        <motion.div
          className="absolute bottom-4 right-4 w-28 rounded-[2rem] border border-white/10 bg-slate-950/80 p-2 shadow-[0_20px_44px_rgba(2,6,23,0.36)]"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="mx-auto h-1.5 w-12 rounded-full bg-white/12" />
          <div className="mt-3 rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(34,211,238,0.16),rgba(2,6,23,0.42))] p-3">
            <div className="h-14 rounded-2xl bg-white/10" />
            <div className="mt-3 grid gap-2">
              <div className="h-2 rounded-full bg-white/15" />
              <div className="h-2 w-3/4 rounded-full bg-cyan-300/30" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-5 rounded-[1.6rem] border border-white/10 bg-slate-950/55 p-5">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/70">{copy.mockupTitle}</p>
        <p className="mt-3 text-sm leading-6 text-slate-300">{copy.mockupBody}</p>
        <p className="mt-4 text-sm leading-6 text-slate-300">{description}</p>
      </div>
    </div>
  )
}

function ProjectModal({ project, onClose }) {
  const { language } = useSitePreferences()
  const copy = sectionCopy[language].portfolio
  const [comparisonSplit, setComparisonSplit] = useState(58)

  useEffect(() => {
    if (!project) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, project])

  useEffect(() => {
    if (project) {
      setComparisonSplit(58)
    }
  }, [project])

  const comparison = project
    ? language === 'si' && project.comparisonSi
      ? project.comparisonSi
      : project.comparison
    : null
  const caseStudy = project
    ? language === 'si' && project.caseStudySi
      ? project.caseStudySi
      : project.caseStudy
    : null
  const description = project
    ? getLocalizedValue({ en: project.description, si: project.descriptionSi }, language)
    : ''
  const industry = project
    ? getLocalizedValue({ en: project.industry, si: project.industrySi }, language)
    : ''
  const results = project
    ? getLocalizedValue({ en: project.results, si: project.resultsSi }, language)
    : []

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[110] flex items-start justify-center overflow-y-auto bg-slate-950/80 px-3 py-4 backdrop-blur-md sm:items-center sm:px-4 sm:py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="glass-panel neon-ring relative my-auto w-full max-w-4xl rounded-[1.8rem] p-4 sm:rounded-4xl sm:p-6 lg:p-8"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className="absolute inset-x-0 top-0 h-40 opacity-80 blur-3xl"
              style={{ background: project.gradient }}
            />
            <button
              type="button"
              aria-label="Close project details"
              onClick={onClose}
              className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-300/40 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative space-y-8">
              <div className="space-y-4 pr-14">
                <span className="badge-chip">{industry}</span>
                <h3 className="text-3xl font-semibold text-white sm:text-4xl">{project.name}</h3>
                <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                  {description}
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
                <PreviewSurface project={project} copy={copy} language={language} />

                <div className="space-y-5">
                  <div className="rounded-[1.6rem] border border-white/10 bg-slate-950/55 p-5">
                    <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/70">{copy.techStack}</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.08] px-3 py-2 text-sm text-slate-100"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.6rem] border border-white/10 bg-slate-950/55 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/70">{copy.before}</p>
                      <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/70">{copy.after}</p>
                    </div>
                    <div
                      className="mt-4 grid gap-0 overflow-hidden rounded-[1.3rem] border border-white/10 bg-slate-950/45"
                      style={{ gridTemplateColumns: `${100 - comparisonSplit}% ${comparisonSplit}%` }}
                    >
                      <div className="border-r border-white/10 p-4">
                        <p className="text-sm font-semibold text-white">{comparison.before}</p>
                      </div>
                      <div className="bg-cyan-300/8 p-4">
                        <p className="text-sm font-semibold text-white">{comparison.after}</p>
                      </div>
                    </div>
                    <input
                      type="range"
                      min="35"
                      max="75"
                      value={comparisonSplit}
                      onChange={(event) => setComparisonSplit(Number(event.target.value))}
                      className="mt-4 w-full accent-cyan-400"
                    />
                  </div>

                  <div className="rounded-[1.6rem] border border-white/10 bg-slate-950/55 p-5">
                    <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/70">{copy.outcomes}</p>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                      {results.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[1.6rem] border border-white/10 bg-slate-950/55 p-5">
                    <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/70">
                      {language === 'si' ? 'Case study' : 'Case study'}
                    </p>
                    <div className="mt-4 space-y-4 text-sm leading-6 text-slate-300">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/80">{copy.problem}</p>
                        <p className="mt-2">{caseStudy.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/80">{copy.solution}</p>
                        <p className="mt-2">{caseStudy.solution}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/80">{copy.result}</p>
                        <p className="mt-2">{caseStudy.result}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.reel.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.08] px-3 py-2 text-xs uppercase tracking-[0.18em] text-slate-100"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {project.website ? (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary"
                      >
                        {copy.liveButton}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : (
                      <span className="btn-secondary cursor-default opacity-80">{copy.conceptLabel}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default ProjectModal