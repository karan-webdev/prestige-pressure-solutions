import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Rockingham, WA',
    rating: 5,
    text: "Absolute legends. My driveway looked like it was brand new after they were done. I didn't think it could ever look that good again after 8 years of grime. Worth every cent.",
    service: 'Driveway Cleaning',
    initials: 'SM',
  },
  {
    name: 'James T.',
    location: 'Baldivis, WA',
    rating: 5,
    text: "Used Prestige for a full house wash before we listed it for sale. The real estate agent couldn't believe the difference — the house literally looked like it had a fresh coat of paint. Highly recommended.",
    service: 'House Washing',
    initials: 'JT',
  },
  {
    name: 'Karen & Dave P.',
    location: 'Kwinana, WA',
    rating: 5,
    text: "Super professional, showed up on time, gave us a fair price. Our roof had black streaks all over it for years. It's completely gone. We've already booked them for the gutters next month.",
    service: 'Roof Cleaning',
    initials: 'KP',
  },
  {
    name: 'Michael R.',
    location: 'Mandurah, WA',
    rating: 5,
    text: "I run a rental property and keeping it presentable is important. These guys have been amazing for end-of-lease cleans. Reliable, thorough and the price is always fair.",
    service: 'Full Property Clean',
    initials: 'MR',
  },
  {
    name: 'Tracey B.',
    location: 'Bibra Lake, WA',
    rating: 5,
    text: "My fences and paths were covered in green algae. They came out the next day after I called and it was all gone in a couple of hours. So easy to deal with. Couldn't be happier.",
    service: 'Fence & Path Cleaning',
    initials: 'TB',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent(c => (c + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent(c => (c - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 5500)
    return () => clearInterval(timer)
  }, [next, paused])

  const t = testimonials[current]

  return (
    <section id="testimonials" style={{ background: '#0a0a0a', padding: '7rem 2rem', position: 'relative', overflow: 'hidden' }}>
      {/* Background elements */}
      <div style={{
        position: 'absolute', top: '10%', right: '-10%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,136,242,0.04) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '-5%',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,136,242,0.06) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <div style={{
            fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: '12px',
            letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: '1rem',
          }}>
            — WHAT PERTH IS SAYING
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(52px, 7vw, 90px)',
            color: 'white', lineHeight: 0.92,
          }}>
            REAL PEOPLE.<br />
            <span style={{ color: 'var(--accent)' }}>REAL RESULTS.</span>
          </h2>
        </motion.div>

        {/* Slider */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
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
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '20px',
                padding: '3.5rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Accent top border */}
              <div style={{
                position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px',
                background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
              }} />

              {/* Quote icon */}
              <div style={{ marginBottom: '1.5rem' }}>
                <Quote size={36} color="rgba(0,136,242,0.3)" fill="rgba(0,136,242,0.1)" />
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#0088f2" color="#0088f2" />
                ))}
              </div>

              {/* Text */}
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(17px, 2.2vw, 22px)',
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.85)',
                marginBottom: '2.5rem',
                fontStyle: 'italic',
                fontWeight: 300,
              }}>
                "{t.text}"
              </p>

              {/* Author row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--accent), #0044aa)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-condensed)', fontWeight: 800, fontSize: '16px', color: 'white',
                  }}>
                    {t.initials}
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
                  background: 'rgba(0,136,242,0.1)', border: '1px solid rgba(0,136,242,0.2)',
                  borderRadius: '100px', padding: '6px 16px',
                  fontFamily: 'var(--font-condensed)', fontWeight: 600, fontSize: '12px',
                  letterSpacing: '0.08em', color: 'var(--accent)',
                }}>
                  {t.service.toUpperCase()}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
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
                    border: 'none', cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0,
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
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'; (e.currentTarget as HTMLElement).style.color = 'var(--accent)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLElement).style.color = 'white' }}
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
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--accent-dark)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--accent)'}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: '4rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          {['Google Reviews', 'Facebook', 'Word of Mouth'].map(platform => (
            <div key={platform} style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              fontFamily: 'var(--font-condensed)', fontWeight: 600, fontSize: '13px',
              letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)',
            }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--accent)' }} />
              {platform.toUpperCase()}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
