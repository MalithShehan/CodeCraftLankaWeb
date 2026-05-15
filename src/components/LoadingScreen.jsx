import { AnimatePresence, motion } from 'framer-motion'
import { useSitePreferences } from '../context/SitePreferencesContext'

function LoadingScreen({ isVisible }) {
  const { copy } = useSitePreferences()

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              className="absolute h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl"
              animate={{ scale: [0.9, 1.15, 0.95], opacity: [0.45, 0.9, 0.55] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.img
              src="/codecraft-lanka-mark.svg"
              alt="CodeCraft Lanka mark"
              className="relative h-20 w-20"
              animate={{ y: [0, -8, 0], rotate: [0, 3, -2, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="space-y-2 text-center">
              <p className="font-['Space_Grotesk'] text-xs uppercase tracking-[0.45em] text-cyan-200/70">
                {copy.loading.title}
              </p>
              <p className="text-sm text-slate-300">{copy.loading.subtitle}</p>
            </div>
            <motion.div
              className="h-1.5 w-40 overflow-hidden rounded-full bg-white/10"
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500"
                initial={{ x: '-100%' }}
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default LoadingScreen