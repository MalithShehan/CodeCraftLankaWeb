import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { Star } from 'lucide-react'
import SectionHeading from '../SectionHeading'
import TiltCard from '../TiltCard'
import { getLocalizedValue, sectionCopy, testimonials } from '../../data/siteContent'
import { useSitePreferences } from '../../context/SitePreferencesContext'

function TestimonialsSection() {
  const { language } = useSitePreferences()
  const copy = sectionCopy[language].testimonials

  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
          align="center"
        />

        <div className="mt-10">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1.08}
            spaceBetween={20}
            autoplay={{ delay: 3600, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.name} className="h-auto">
                <TiltCard className="h-full rounded-[1.8rem]">
                  <motion.article whileHover={{ y: -6 }} className="glass-panel h-full rounded-[1.8rem] p-6">
                    <div className="flex items-center gap-4">
                      <div
                        className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10"
                        style={{ background: item.accent }}
                      >
                        <img src={item.avatar} alt={item.name} className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-white">{item.name}</p>
                        <p className="text-sm text-slate-300">
                          {getLocalizedValue({ en: item.role, si: item.roleSi }, language)}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex gap-1 text-amber-300">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="h-4 w-4 fill-current" />
                      ))}
                    </div>

                    <p className="mt-5 text-sm leading-7 text-slate-300">
                      “{getLocalizedValue({ en: item.quote, si: item.quoteSi }, language)}”
                    </p>
                  </motion.article>
                </TiltCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection