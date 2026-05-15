import { Helmet } from 'react-helmet-async'
import PageTransition from '../components/PageTransition'
import AboutSection from '../components/sections/AboutSection'
import CaseStudiesSection from '../components/sections/CaseStudiesSection'
import ContactSection from '../components/sections/ContactSection'
import HeroSection from '../components/sections/HeroSection'
import MetricsSection from '../components/sections/MetricsSection'
import PortfolioSection from '../components/sections/PortfolioSection'
import ProcessTimelineSection from '../components/sections/ProcessTimelineSection'
import ServicesSection from '../components/sections/ServicesSection'
import TechStackSection from '../components/sections/TechStackSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection'
import { sectionCopy } from '../data/siteContent'
import { useSitePreferences } from '../context/SitePreferencesContext'

function HomePage() {
  const { language } = useSitePreferences()
  const copy = sectionCopy[language]

  return (
    <PageTransition>
      <Helmet>
        <title>
          {language === 'si'
            ? 'CodeCraft Lanka | නවීන ව්‍යාපාර සඳහා ඩිජිටල් විසඳුම්'
            : 'CodeCraft Lanka | We Build Digital Solutions For Modern Businesses'}
        </title>
        <meta
          name="description"
          content={copy.hero.description}
        />
      </Helmet>

      <HeroSection />
      <MetricsSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <PortfolioSection />
      <CaseStudiesSection />
      <ProcessTimelineSection />
      <TestimonialsSection />
      <TechStackSection />
      <ContactSection />
    </PageTransition>
  )
}

export default HomePage