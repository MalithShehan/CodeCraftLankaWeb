import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PhoneCall, ScrollText } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { useSitePreferences } from '../context/SitePreferencesContext'
import { companyInfo } from '../data/siteContent'

function StickyActionRail() {
  const { language } = useSitePreferences()

  return (
    <motion.div
      className="fixed bottom-6 left-5 z-[82] hidden flex-col gap-3 xl:flex"
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.7, duration: 0.5 }}
    >
      <a
        href={`https://wa.me/${companyInfo.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="theme-floating-action border-emerald-400/25 text-emerald-100"
      >
        <FaWhatsapp className="h-4 w-4" />
        {language === 'si' ? 'WhatsApp' : 'WhatsApp'}
      </a>
      <a href="tel:+94772488800" className="theme-floating-action">
        <PhoneCall className="h-4 w-4" />
        {language === 'si' ? 'දැන් අමතන්න' : 'Call Now'}
      </a>
      <Link to="/contact" className="theme-floating-action">
        <ScrollText className="h-4 w-4" />
        {language === 'si' ? 'Quote එකක් ගන්න' : 'Get Quote'}
      </Link>
    </motion.div>
  )
}

export default StickyActionRail