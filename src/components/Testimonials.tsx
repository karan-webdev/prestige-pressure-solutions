import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import testimonial_1 from '../assets/testimonial_1.png'
import testimonial_2 from '../assets/testimonial_2.png'
import testimonial_3 from '../assets/testimonial_3.png'
import testimonial_4 from '../assets/testimonial_4.png'
import testimonial_5 from '../assets/testimonial_5.png'
import testimonial_6 from '../assets/testimonial_6.png'

const EASE = [0.22, 1, 0.36, 1] as const

const testimonials = [
  {
    name: 'Youssef Aria',
    location: 'Google Review',
    rating: 5,
    text: "I couldn't be happier with the work done by Prestige Pressure Solutions. They did an excellent job cleaning my driveway and backyard patio, both came up looking brand new. Highly recommend!",
    service: 'Driveway & Patio Cleaning',
    initials: 'YA',
    avatar: testimonial_1,
  },
  {
    name: 'Shack',
    location: 'Google Review',
    rating: 5,
    text: "Highly recommend Prestige Pressure Solutions I recently hired them for pressure washing for my back yard, drive way and patio, the results were outstanding. They were very professional, thorough and explained every step of the process. Their pricing was fair, and the quality far exceeded my expectations. I highly recommend them to anyone looking for reliable and high-quality pressure washing services.",
    service: 'Pressure Washing',
    initials: 'SH',
    avatar: testimonial_2,
  },
  {
    name: 'Nolo',
    location: 'Google Review',
    rating: 5,
    text: "Prestige Pressure Solutions did an amazing job. They were professional, quick, and the results were outstanding. My property looks cleaner than it has in years. Great communication and fair pricing as well. Highly recommend their services!",
    service: 'Property Cleaning',
    initials: 'NO',
    avatar: testimonial_3,
  },
  {
    name: 'Frouzan Yarmohamm',
    location: 'Google Review',
    rating: 5,
    text: "Prestige pressure solutions cleaned the driveway and Bbq area of my house. Hanz did a fantastic job cleaning all the stains n molds. Great professional and well spoken guys and team work. The follow up call add that extra, that you don't get now a days. I would recommend him strongly.",
    service: 'Driveway & BBQ Cleaning',
    initials: 'FY',
    avatar: testimonial_4,
  },
  {
    name: 'Katie Trinh',
    location: 'Google Review',
    rating: 5,
    text: "I recently had Prestige Pressure Solutions take care of my property, and I couldn't be happier with the experience. They truly made my house feel like home again. The team took their time and paid attention to every detail, leaving everything looking fresh, clean, and almost brand new. On top of their amazing work, they were incredibly friendly and professional.",
    service: 'Full Property Clean',
    initials: 'KT',
    avatar: testimonial_5,
  },
  {
    name: 'Gucci Maynne',
    location: 'Google Review',
    rating: 5,
    text: "Had an amazing experience with Prestige Pressure Solutions! They did a full clean of my house exterior, driveway, and windows (inside and out), and the results were honestly better than I expected. Everything looks fresh, bright, and like new again. The team was professional, on time, and really paid attention to detail.",
    service: 'Full Exterior Clean',
    initials: 'GM',
    avatar: testimonial_6,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent(c => (c + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent(c => (c - 1 + testimonials.length) % testimonials.length)
  }, [])

  const t = testimonials[current]

  return (
    <section
      id="testimonials"
      style={{
        background: '#0a0a0a',
        padding: '7rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── HEADER ── staggered fade-up */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px 0px' }}
            transition={{ duration: 0.7, ease: EASE }}
            style={{
              fontFamily: 'var(--font-condensed)',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '0.2em',
              color: 'var(--accent)',
              marginBottom: '1rem',
            }}
          >
            — WHAT PERTH IS SAYING
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px 0px' }}
            transition={{ duration: 0.85, delay: 0.1, ease: EASE }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(52px, 7vw, 90px)',
              color: 'white',
              lineHeight: 0.92,
              margin: 0,
            }}
          >
            REAL PEOPLE.<br />
            <span style={{ color: 'var(--accent)' }}>REAL RESULTS.</span>
          </motion.h2>
        </div>

        {/* ── SLIDER ── fades in as a block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px 0px' }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          style={{ position: 'relative' }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={{
                enter: (d: number) => ({ opacity: 0, x: d * 60 }),
                center: { opacity: 1, x: 0 },
                exit: (d: number) => ({ opacity: 0, x: d * -60 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: EASE }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '20px',
                padding: '3.5rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(17px, 2.2vw, 18px)',
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.85)',
                marginBottom: '2.5rem',
                fontWeight: 300,
              }}>
                "{t.text}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden' }}>
                    <img src={t.avatar} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: '17px', color: 'white' }}>
                      {t.name}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
                      {t.location}
                    </div>
                  </div>
                </div>

                <div style={{
                  background: 'rgba(0,136,242,0.1)',
                  border: '1px solid rgba(0,136,242,0.2)',
                  borderRadius: '100px',
                  padding: '6px 16px',
                  fontFamily: 'var(--font-condensed)',
                  fontWeight: 600,
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  color: 'var(--accent)',
                }}>
                  {t.service.toUpperCase()}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '2.5rem',
          }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  style={{
                    width: i === current ? '32px' : '8px',
                    height: '8px',
                    borderRadius: '100px',
                    background: i === current ? 'var(--accent)' : 'rgba(255,255,255,0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = i === current ? 'var(--accent)' : 'rgba(255,255,255,0.35)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = i === current ? 'var(--accent)' : 'rgba(255,255,255,0.2)'
                  }}
                />
              ))}
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={prev}
                style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  cursor: 'pointer', color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={next}
                style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: 'var(--accent)',
                  border: '1px solid var(--accent)',
                  cursor: 'pointer', color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#0a6fd1' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--accent)' }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* ── GOOGLE TRUST BADGE ── pops in last */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px 0px' }}
          transition={{ duration: 0.75, delay: 0.15, ease: EASE }}
          style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}
        >
          <a
            href="https://www.google.com/search?sca_esv=e42243e293ad428e&rlz=1C1CHBF_enAU1094AU1094&sxsrf=ANbL-n7fdYhpTlROYogDUYeW8reShtwSgg:1777009370296&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qObHOCC6vfESMX3_p0c5khPuQK56to-6qeITa09Op6Q3Y29lDOl2_meTJbw0d4y0-3S-DLGSz0tEdLf9z8kGV1uDQIAn-tCfZTA58avqOeBrzKPtm7w%3D%3D&q=Prestige+Pressure+Solutions+Reviews&sa=X&ved=2ahUKEwjgup3i44WUAxVJRmwGHSpGHpUQ0bkNegQIMxAF&biw=1536&bih=730&dpr=1.25"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              padding: '12px 18px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/046/861/647/original/google-logo-transparent-background-free-png.png"
              alt="Google"
              style={{ width: 34, height: 34, objectFit: 'contain' }}
            />

            <div style={{
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              textAlign: 'center', lineHeight: 1, gap: '4px', minWidth: 120,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#FFD700" color="#FFD700" />
                ))}
              </div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.65)', marginTop: '4px', fontWeight: 600 }}>
                16 reviews
              </div>
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  )
}