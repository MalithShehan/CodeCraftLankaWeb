import { Helmet } from 'react-helmet-async'
import PageTransition from '../components/PageTransition'
import ContactSection from '../components/sections/ContactSection'
import { sectionCopy } from '../data/siteContent'
import { useSitePreferences } from '../context/SitePreferencesContext'

function ContactPage() {
  const { language } = useSitePreferences()
  const copy = sectionCopy[language].pages

  return (
    <PageTransition>
      <Helmet>
        <title>{language === 'si' ? 'සම්බන්ධ වන්න | CodeCraft Lanka' : 'Contact | CodeCraft Lanka'}</title>
        <meta
          name="description"
          content={copy.contactDescription}
        />
      </Helmet>

      <section className="section-shell pb-8 pt-16 sm:pt-20">
        <div className="glass-panel rounded-4xl p-8 sm:p-10">
          <span className="badge-chip">{language === 'si' ? 'සම්බන්ධතා පිටුව' : 'Contact page'}</span>
          <h1 className="text-balance mt-6 max-w-4xl text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            {copy.contactTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            {copy.contactDescription}
          </p>
        </div>
      </section>

      <ContactSection />
    </PageTransition>
  )
}

export default ContactPage