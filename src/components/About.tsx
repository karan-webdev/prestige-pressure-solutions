import { motion } from 'framer-motion'
import about from '../assets/about.jpeg' 

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
                  `url(${about})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
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
              At Prestige Pressure Solutions, we’re a locally owned and operated business proudly servicing the Perth region. As Perth locals ourselves, we understand the conditions, surfaces, and expectations of homes in the area — from limestone driveways to coastal wear and tear.<br/> 
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
              Established in 2023, our focus has always been simple: deliver high-quality results with honest service and attention to detail.
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
              Behind the business is Hanz and Reshad, who oversee operations and ensure every job meets our standards. Working alongside them is Tommy, a trusted team member who helps deliver consistent, reliable results on-site.
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
              Growing up in Perth, we know what local homeowners are looking for — not just a quick clean, but long-lasting results that actually make a difference. That’s why we take the time to use the right methods, equipment, and treatments for each job, whether it’s pressure cleaning, window cleaning, or exterior maintenance.
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
              We’re committed to providing a professional, hassle-free experience from start to finish — with clear communication, quality workmanship, and results you can trust.
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