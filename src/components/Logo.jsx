import { Link } from 'react-router-dom'
import { useSitePreferences } from '../context/SitePreferencesContext'

function Logo({ compact = false, className = '' }) {
  const { theme } = useSitePreferences()
  const isLight = theme === 'light'

  if (compact) {
    return (
      <Link
        to="/"
        aria-label="CodeCraft Lanka home"
        className={`inline-flex items-center gap-3 ${className}`}
      >
        <img
          src="/codecraft-lanka-mark.svg"
          alt="CodeCraft Lanka logo"
          className="h-11 w-11 drop-shadow-[0_0_24px_rgba(56,189,248,0.35)]"
        />
        <div className="flex flex-col">
          <span
            className={`font-['Space_Grotesk'] text-sm font-medium uppercase tracking-[0.32em] ${
              isLight ? 'text-sky-700/85' : 'text-cyan-200/80'
            }`}
          >
            CodeCraft
          </span>
          <span
            className={`font-['Space_Grotesk'] text-lg font-semibold tracking-[0.08em] ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}
          >
            Lanka
          </span>
        </div>
      </Link>
    )
  }

  return (
    <Link to="/" aria-label="CodeCraft Lanka home" className={className}>
      <img
        src="/codecraft-lanka-logo.svg"
        alt="CodeCraft Lanka logo"
        className="h-14 w-auto max-w-[15rem] drop-shadow-[0_0_30px_rgba(56,189,248,0.35)]"
      />
    </Link>
  )
}

export default Logo