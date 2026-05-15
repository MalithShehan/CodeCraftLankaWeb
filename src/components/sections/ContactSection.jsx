import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import SectionHeading from '../SectionHeading'
import {
  companyInfo,
  contactCards,
  getLocalizedValue,
  sectionCopy,
  socialLinks,
} from '../../data/siteContent'
import { useSitePreferences } from '../../context/SitePreferencesContext'

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

function ContactSection() {
  const { language } = useSitePreferences()
  const copy = sectionCopy[language].contact
  const [formData, setFormData] = useState(initialFormState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const emailConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  }

  const hasEmailJsConfig = Object.values(emailConfig).every(Boolean)
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(companyInfo.location)}&z=12&output=embed`

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      if (hasEmailJsConfig) {
        await emailjs.send(
          emailConfig.serviceId,
          emailConfig.templateId,
          {
            from_name: formData.name,
            reply_to: formData.email,
            phone: formData.phone,
            message: formData.message,
          },
          { publicKey: emailConfig.publicKey },
        )

        setStatus({
          type: 'success',
          message:
            language === 'si'
              ? 'ඔබගේ ඉල්ලීම සාර්ථකව යැවුණා. අපි ඉක්මනින් ඔබට ප්‍රතිචාර දක්වමු.'
              : 'Inquiry sent successfully. We will get back to you shortly.',
        })
      } else {
        const subject = encodeURIComponent(`New website inquiry from ${formData.name}`)
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`,
        )

        window.location.href = `mailto:${companyInfo.email}?subject=${subject}&body=${body}`
        setStatus({
          type: 'success',
          message:
            language === 'si'
              ? 'ඔබගේ email client එක inquiry විස්තර සමඟ විවෘත කර ඇත.'
              : 'Your email client has been opened with the inquiry details.',
        })
      }

      setFormData(initialFormState)
    } catch {
      setStatus({
        type: 'error',
        message:
          language === 'si'
            ? 'පණිවිඩය දැන් යැවිය නොහැක. කරුණාකර WhatsApp හෝ email භාවිතා කරන්න.'
            : 'The message could not be sent right now. Please use WhatsApp or email directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              eyebrow={copy.eyebrow}
              title={copy.title}
              description={copy.description}
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {contactCards.map((item) => {
                const Icon = item.icon

                return (
                  <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="glass-panel rounded-3xl p-5 transition hover:-translate-y-1">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/12 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-xs uppercase tracking-[0.26em] text-cyan-200/70">
                      {getLocalizedValue({ en: item.title, si: item.titleSi }, language)}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-100">{item.value}</p>
                  </a>
                )
              })}
            </div>

            <div className="glass-panel mt-6 overflow-hidden rounded-[1.8rem] p-3">
              <iframe
                title="CodeCraft Lanka location"
                src={mapUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full rounded-[1.3rem] border-0"
              />
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
                    className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </a>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="glass-panel rounded-4xl p-6 sm:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm text-slate-200">{copy.form.name}</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                    placeholder={copy.form.placeholderName}
                    autoComplete="name"
                    required
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-slate-200">{copy.form.email}</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    placeholder={copy.form.placeholderEmail}
                    autoComplete="email"
                    required
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm text-slate-200">{copy.form.phone}</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field"
                  placeholder={copy.form.placeholderPhone}
                  autoComplete="tel"
                  required
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-slate-200">{copy.form.message}</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="input-field resize-none"
                  placeholder={copy.form.placeholderMessage}
                  required
                />
              </label>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" disabled={isSubmitting} className="btn-primary disabled:cursor-not-allowed disabled:opacity-70">
                  <Send className="h-4 w-4" />
                  {isSubmitting ? copy.form.submitting : copy.form.submit}
                </button>
                <p className="text-sm text-slate-400">{companyInfo.availability}</p>
              </div>

              <div aria-live="polite" className={`rounded-2xl border px-4 py-3 text-sm ${
                status.type === 'success'
                  ? 'border-emerald-400/25 bg-emerald-500/10 text-emerald-100'
                  : status.type === 'error'
                    ? 'border-rose-400/25 bg-rose-500/10 text-rose-100'
                    : 'border-white/10 bg-white/5 text-slate-400'
              }`}>
                {status.message || copy.form.hint}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection