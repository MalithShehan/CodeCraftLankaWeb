import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import MagneticButton from '../MagneticButton'
import TiltCard from '../TiltCard'
import {
  getLocalizedValue,
  heroHighlights,
  heroPanels,
  sectionCopy,
} from '../../data/siteContent'
import { useSitePreferences } from '../../context/SitePreferencesContext'

function HeroSection() {
  const { language, theme } = useSitePreferences()
  const copy = sectionCopy[language].hero
  const isLight = theme === 'light'
  const premiumLead =
    language === 'si'
      ? 'Conversion-ready websites, mobile apps, සහ custom software delivery.'
      : 'Conversion-ready websites, mobile apps, and custom software delivery.'

  return (
    <section className="section-shell pb-18 pt-12 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
      <div className="glass-panel neon-ring relative overflow-hidden rounded-[2rem] px-4 py-6 sm:rounded-4xl sm:px-8 sm:py-10 lg:px-10 lg:py-12 xl:px-12 xl:py-14">
        <div className={`hero-mesh absolute inset-0 ${isLight ? 'opacity-15' : 'opacity-30'}`} />
        <div
          className={`absolute inset-0 ${
            isLight
              ? 'bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.1),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.28),transparent_60%)]'
              : 'bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_34%)]'
          }`}
        />

        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)] lg:gap-10 xl:items-center xl:gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="badge-chip"
            >
              <Sparkles className="h-3.5 w-3.5" />
              {copy.eyebrow}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06 }}
              className="text-balance mt-6 max-w-[13ch] text-4xl font-semibold leading-[1.02] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              <span className="headline-gradient">{copy.titleLead}</span>{' '}
              {copy.titleTail}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-5 max-w-2xl text-base font-medium text-cyan-200 sm:text-lg"
            >
              {copy.typingLead} {premiumLead}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg"
            >
              {copy.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <MagneticButton>
                <Link to="/contact" className="btn-primary">
                  {copy.primaryCta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link to="/projects" className="btn-secondary">
                  {copy.secondaryCta}
                  <Play className="h-4 w-4" />
                </Link>
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
            >
              {heroHighlights.map((item) => (
                <div key={item.title} className="rounded-[1.4rem] border border-white/10 bg-slate-950/35 p-4 backdrop-blur-xl">
                  <p className="font-['Space_Grotesk'] text-sm font-semibold text-white">
                    {getLocalizedValue({ en: item.title, si: item.titleSi }, language)}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {getLocalizedValue({ en: item.description, si: item.descriptionSi }, language)}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="relative mx-auto w-full max-w-[34rem] lg:max-w-none"
          >
            <TiltCard className="glass-panel relative overflow-hidden rounded-[1.8rem] p-4 sm:rounded-4xl sm:p-6 lg:p-8">
              <div className={`absolute inset-0 ${isLight ? 'bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.08),transparent_38%)]' : 'bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.1),transparent_40%)]'}`} />

              <div className="relative rounded-[1.6rem] border border-white/10 bg-slate-950/45 p-4 sm:rounded-[1.8rem] sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.34em] text-cyan-200/70">CodeCraft Lanka</p>
                    <p className="mt-2 text-2xl font-semibold text-white">
                      {language === 'si' ? 'Premium delivery system' : 'Premium delivery system'}
                    </p>
                  </div>
                  <img
                    src="/codecraft-lanka-mark.svg"
                    alt="CodeCraft Lanka"
                    className="h-12 w-12 drop-shadow-[0_0_28px_rgba(56,189,248,0.22)]"
                  />
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {heroPanels.map((item) => (
                    <div
                      key={`${item.label}-${item.value}`}
                      className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">
                        {getLocalizedValue({ en: item.label, si: item.labelSi }, language)}
                      </p>
                      <p className="mt-3 font-['Space_Grotesk'] text-xl font-semibold text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 md:grid-cols-[1.18fr_0.82fr]">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">{copy.spotlightTitle}</p>
                    <p className="mt-4 text-lg font-semibold text-white">{copy.spotlightDescription}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{copy.spotlightBody}</p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
                    <div className="mx-auto flex h-[11rem] w-[6.4rem] flex-col rounded-[1.8rem] border border-white/10 bg-[#020914] p-3 shadow-[0_20px_40px_rgba(2,6,23,0.35)] sm:h-[12rem] sm:w-[7rem] sm:rounded-[2rem]">
                      <div className="mx-auto h-1.5 w-12 rounded-full bg-white/10" />
                      <div className="mt-4 rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(34,211,238,0.14),rgba(2,6,23,0.3))] p-3">
                        <div className="h-14 rounded-2xl bg-white/10" />
                        <div className="mt-3 grid gap-2">
                          <div className="h-2 rounded-full bg-white/15" />
                          <div className="h-2 w-3/4 rounded-full bg-cyan-300/25" />
                          <div className="h-2 w-1/2 rounded-full bg-white/10" />
                        </div>
                      </div>
                      <div className="mt-3 grid gap-2">
                        <div className="h-10 rounded-2xl bg-white/6" />
                        <div className="h-10 rounded-2xl bg-white/6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection