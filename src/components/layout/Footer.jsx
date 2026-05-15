import { Link } from 'react-router-dom'
import Logo from '../Logo'
import {
  companyInfo,
  footerLinks,
  getLocalizedValue,
  services,
  socialLinks,
} from '../../data/siteContent'
import { useSitePreferences } from '../../context/SitePreferencesContext'

function Footer() {
  const { language, copy } = useSitePreferences()

  return (
    <footer className="pb-28 pt-10 sm:pb-14">
      <div className="section-shell">
        <div className="glass-panel rounded-4xl px-6 py-10 sm:px-8 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_0.8fr_0.9fr]">
            <div className="space-y-5">
              <Logo />
              <p className="max-w-md text-sm leading-7 text-slate-300">
                {companyInfo.tagline}. We create premium digital experiences that help brands look credible, scale faster, and win more inquiries.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200/70">
                {language === 'si' ? 'ක්ෂණික සබැඳි' : 'Quick links'}
              </p>
              <div className="mt-5 space-y-3">
                {footerLinks.map((item) => (
                  <Link key={item.label} to={item.to} className="block text-sm text-slate-300 transition hover:text-white">
                    {copy.nav[item.key] ?? item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200/70">
                {language === 'si' ? 'සේවා' : 'Services'}
              </p>
              <div className="mt-5 space-y-3">
                {services.slice(0, 6).map((service) => (
                  <p key={service.title} className="text-sm text-slate-300">
                    {getLocalizedValue({ en: service.title, si: service.titleSi }, language)}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200/70">
                {language === 'si' ? 'සම්බන්ධ වන්න' : 'Connect'}
              </p>
              <div className="mt-5 space-y-4 text-sm text-slate-300">
                <a href={`mailto:${companyInfo.email}`} className="block transition hover:text-white">
                  {companyInfo.email}
                </a>
                <a href="tel:+94772488800" className="block transition hover:text-white">
                  {companyInfo.phone}
                </a>
                <p>{companyInfo.location}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.24em] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 CodeCraft Lanka. All rights reserved.</p>
            <p>{language === 'si' ? 'විශ්වාසය, වේගය, සහ පරිවර්තනය සඳහා නිර්මාණය කරන ලදී.' : 'Designed for trust, speed, and conversion.'}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer