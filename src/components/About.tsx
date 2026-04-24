import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: '#ffffff',
        padding: '7rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* MAIN GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '5rem',
            alignItems: 'center',
          }}
        >

          {/* LEFT IMAGE (TEAM / TRUST VISUAL) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              position: 'relative',
            }}
          >
            <div
              style={{
                width: '100%',
                aspectRatio: '4/5',
                borderRadius: '18px',
                overflow: 'hidden',
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1200&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />

            {/* subtle trust badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '18px',
                left: '18px',
                background: 'rgba(0,0,0,0.75)',
                color: 'white',
                padding: '10px 14px',
                borderRadius: '10px',
                fontSize: '12px',
                fontFamily: 'var(--font-condensed)',
                letterSpacing: '0.08em',
              }}
            >
              PERTH-BASED TEAM
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <div
              style={{
                fontFamily: 'var(--font-condensed)',
                fontSize: '12px',
                letterSpacing: '0.2em',
                color: 'var(--accent)',
                marginBottom: '1rem',
                fontWeight: 700,
              }}
            >
              — ABOUT US
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(44px, 5vw, 72px)',
                lineHeight: 0.95,
                color: '#0a0a0a',
                marginBottom: '1.5rem',
              }}
            >
              CLEANING DONE<br />
              <span style={{ color: 'var(--accent)' }}>PROPERLY.</span>
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                lineHeight: 1.75,
                color: '#555',
                marginBottom: '1.2rem',
                fontWeight: 300,
              }}
            >
              Prestige Pressure Solutions is a Perth-based exterior cleaning team focused on delivering consistent, high-quality results across residential and commercial properties.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                lineHeight: 1.75,
                color: '#555',
                marginBottom: '2rem',
                fontWeight: 300,
              }}
            >
              Every job is approached with care, proper technique, and attention to detail — from driveways and roofs to full exterior washes. The goal is simple: leave every surface noticeably better than we found it.
            </p>

            {/* TRUST POINTS */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '14px',
                marginBottom: '2.5rem',
              }}
            >
              {[
                'Fully insured work',
                'Professional equipment',
                'Surface-safe methods',
                'Detail-focused results',
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    fontFamily: 'var(--font-condensed)',
                    fontSize: '13px',
                    letterSpacing: '0.08em',
                    color: '#111',
                    padding: '10px 0',
                    borderBottom: '1px solid rgba(0,0,0,0.08)',
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              style={{
                display: 'inline-block',
                background: 'var(--accent)',
                color: 'white',
                padding: '14px 26px',
                borderRadius: '8px',
                fontFamily: 'var(--font-condensed)',
                fontSize: '13px',
                letterSpacing: '0.1em',
                textDecoration: 'none',
                fontWeight: 700,
              }}
            >
              GET A QUOTE
            </a>
          </motion.div>
        </div>
      </div>

      {/* MOBILE */}
      <style>{`
        @media (max-width: 900px) {
          #about div[style*="grid-template-columns: 1fr 1.2fr"] {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  )
}