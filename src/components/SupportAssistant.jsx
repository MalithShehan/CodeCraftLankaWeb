import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BotMessageSquare, PhoneCall, X } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import {
  assistantQuickActions,
  companyInfo,
  getLocalizedValue,
  sectionCopy,
} from '../data/siteContent'
import { useSitePreferences } from '../context/SitePreferencesContext'

function SupportAssistant() {
  const { language, theme } = useSitePreferences()
  const copy = sectionCopy[language].assistant
  const [isOpen, setIsOpen] = useState(false)
  const [selectedAction, setSelectedAction] = useState(assistantQuickActions[0])
  const isLight = theme === 'light'

  const response = useMemo(
    () => getLocalizedValue({ en: selectedAction.response, si: selectedAction.responseSi }, language),
    [language, selectedAction],
  )

  return (
    <>
      <motion.button
        type="button"
        aria-label={copy.chat}
        className={`fixed bottom-5 right-5 z-[86] inline-flex items-center gap-3 rounded-full border px-4 py-3 text-sm font-medium shadow-[0_0_34px_rgba(14,165,233,0.24)] backdrop-blur-xl transition hover:-translate-y-1 sm:bottom-6 sm:right-6 ${
          isLight
            ? 'border-sky-300/35 bg-white/90 text-sky-900 hover:border-sky-400/55'
            : 'border-cyan-300/25 bg-slate-950/82 text-cyan-100 hover:border-cyan-300/45'
        }`}
        onClick={() => setIsOpen((previous) => !previous)}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <BotMessageSquare className="h-5 w-5" />
        <span className="hidden xl:inline">{copy.chat}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen ? (
          <motion.aside
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            className="glass-panel fixed bottom-20 right-3 z-[87] max-h-[min(36rem,calc(100vh-6.5rem))] w-[min(22rem,calc(100vw-1.5rem))] overflow-y-auto rounded-[2rem] p-5 sm:bottom-24 sm:right-6 sm:rounded-4xl"
          >
            <button
              type="button"
              aria-label="Close support assistant"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="pr-12">
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">{copy.title}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{copy.subtitle}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{copy.greeting}</p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {assistantQuickActions.map((item) => {
                const Icon = item.icon

                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setSelectedAction(item)}
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs uppercase tracking-[0.16em] transition ${
                      selectedAction.key === item.key
                        ? 'border-cyan-300/35 bg-cyan-300/12 text-cyan-100'
                        : 'border-white/10 bg-white/5 text-slate-200 hover:border-cyan-300/20'
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {getLocalizedValue({ en: item.label, si: item.labelSi }, language)}
                  </button>
                )
              })}
            </div>

            <div className="mt-5 rounded-3xl border border-white/10 bg-slate-950/45 p-4">
              <p className="text-sm leading-6 text-slate-200">{response}</p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a
                href={`https://wa.me/${companyInfo.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full"
              >
                <FaWhatsapp className="h-4 w-4" />
                {copy.whatsapp}
              </a>
              <a href="tel:+94772488800" className="btn-secondary w-full">
                <PhoneCall className="h-4 w-4" />
                {copy.call}
              </a>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </>
  )
}

export default SupportAssistant