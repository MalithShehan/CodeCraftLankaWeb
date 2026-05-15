import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { useSitePreferences } from '../context/SitePreferencesContext'

function BackToTopButton() {
  const { theme } = useSitePreferences()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 420)
    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          type="button"
          aria-label="Back to top"
          className={`fixed bottom-20 right-5 z-[80] inline-flex h-12 w-12 items-center justify-center rounded-full border shadow-[0_0_30px_rgba(14,165,233,0.2)] backdrop-blur-xl transition hover:-translate-y-1 sm:bottom-8 sm:right-24 ${
            theme === 'light'
              ? 'border-sky-300/35 bg-white/90 text-sky-900 hover:border-sky-400/60'
              : 'border-cyan-300/20 bg-slate-950/80 text-cyan-200 hover:border-cyan-300/50 hover:text-white'
          }`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp className="h-5 w-5" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}

export default BackToTopButton