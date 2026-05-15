import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { companyInfo } from '../data/siteContent'

function FloatingWhatsApp() {
  return (
    <motion.a
      href={`https://wa.me/${companyInfo.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-5 z-[85] inline-flex items-center gap-3 rounded-full border border-emerald-400/25 bg-emerald-500/15 px-4 py-3 text-sm font-medium text-emerald-100 shadow-[0_0_34px_rgba(16,185,129,0.28)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-300/50 hover:bg-emerald-500/20"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
    >
      <FaWhatsapp className="h-5 w-5" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </motion.a>
  )
}

export default FloatingWhatsApp