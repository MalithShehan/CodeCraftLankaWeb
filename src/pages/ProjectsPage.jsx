import { Helmet } from 'react-helmet-async'
import PageTransition from '../components/PageTransition'
import ContactSection from '../components/sections/ContactSection'
import PortfolioSection from '../components/sections/PortfolioSection'
import TechStackSection from '../components/sections/TechStackSection'
import { sectionCopy } from '../data/siteContent'
import { useSitePreferences } from '../context/SitePreferencesContext'

function ProjectsPage() {
  const { language } = useSitePreferences()
  const copy = sectionCopy[language].pages

  return (
    <PageTransition>
      <Helmet>
        <title>{language === 'si' ? 'ව්‍යාපෘති | CodeCraft Lanka' : 'Projects | CodeCraft Lanka'}</title>
        <meta
          name="description"
          content={copy.projectsDescription}
        />
      </Helmet>

      <section className="section-shell pb-8 pt-16 sm:pt-20">
        <div className="glass-panel rounded-4xl p-8 sm:p-10">
          <span className="badge-chip">{language === 'si' ? 'ව්‍යාපෘති පිටුව' : 'Projects page'}</span>
          <h1 className="text-balance mt-6 max-w-4xl text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            {copy.projectsTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            {copy.projectsDescription}
          </p>
        </div>
      </section>

      <PortfolioSection
        mode="grid"
        title="A broader project grid with modal detail views, live preview links, and premium mockup surfaces."
        description="Each portfolio card is designed to feel like a polished case-study teaser rather than a flat screenshot tile."
      />
      <TechStackSection />
      <ContactSection />
    </PageTransition>
  )
}

export default ProjectsPage