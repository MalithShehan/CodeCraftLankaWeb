import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Languages, Menu, MoonStar, SunMedium, X } from 'lucide-react'
import Logo from '../Logo'
import { useSitePreferences } from '../../context/SitePreferencesContext'

const navItems = [
  { key: 'home', to: '/' },
  { key: 'about', to: '/#about' },
  { key: 'services', to: '/#services' },
  { key: 'projects', to: '/projects' },
  { key: 'contact', to: '/contact' },
]

function Navbar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme, language, setLanguage, copy } = useSitePreferences()

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname, location.hash])

  const isLinkActive = (to) => {
    if (to === '/') {
      return location.pathname === '/' && !location.hash
    }

    if (to.startsWith('/#')) {
      return location.pathname === '/' && location.hash === to.replace('/', '')
    }

    return location.pathname === to
  }

  return (
    <header className="sticky top-0 z-[95] pt-4">
      <div className="section-shell">
        <div className="glass-panel flex items-center justify-between rounded-full px-4 py-3 sm:px-6">
          <Logo compact />

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.to}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isLinkActive(item.to)
                    ? 'bg-cyan-400/15 text-white shadow-[0_0_24px_rgba(34,211,238,0.15)]'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {copy.nav[item.key]}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              aria-label={copy.controls.theme}
              onClick={toggleTheme}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-cyan-300/40 hover:text-white"
            >
              {theme === 'dark' ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
            </button>

            <button
              type="button"
              aria-label={copy.controls.language}
              onClick={() => setLanguage((previous) => (previous === 'en' ? 'si' : 'en'))}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 transition hover:border-cyan-300/40 hover:text-white"
            >
              <Languages className="h-4 w-4" />
              <span>{language === 'en' ? copy.controls.sinhala : copy.controls.english}</span>
            </button>

            <Link to="/contact" className="btn-primary !px-5 !py-3 text-sm">
              {copy.cta.startProject}
            </Link>
          </div>

          <button
            type="button"
            aria-label={copy.controls.toggleMenu}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            onClick={() => setIsOpen((previous) => !previous)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="section-shell lg:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            <div className="glass-panel mt-3 space-y-3 rounded-[1.7rem] p-4">
              <div className="flex flex-wrap items-center gap-2 pb-2">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100"
                >
                  {theme === 'dark' ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage((previous) => (previous === 'en' ? 'si' : 'en'))}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100"
                >
                  <Languages className="h-4 w-4" />
                  <span>{language === 'en' ? copy.controls.sinhala : copy.controls.english}</span>
                </button>
              </div>

              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.to}
                  className={`block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isLinkActive(item.to)
                      ? 'bg-cyan-400/15 text-white'
                      : 'bg-white/0 text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {copy.nav[item.key]}
                </Link>
              ))}
              <Link to="/contact" className="btn-primary flex w-full justify-center">
                {copy.cta.startProject}
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Navbar