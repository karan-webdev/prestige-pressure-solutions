import { motion } from 'framer-motion'
import about_1 from '../assets/about_1.jpeg'
import about_2 from '../assets/about_2.jpeg'
import about_3 from '../assets/about_3.jpeg'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.02,
    },
  },
}

const word = {
  hidden: { opacity: 0, y: 10, filter: 'blur(4px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

// helper: split text into animated words
const splitWords = (text: string) =>
  text.split(' ').map((w, i) => (
    <motion.span
      key={i}
      variants={word}
      style={{
        display: 'inline-block',
        marginRight: '6px',
      }}
    >
      {w}
    </motion.span>
  ))

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
            alignItems: 'start',
          }}
        >

          {/* LEFT SCROLLING IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="about-images"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              {[about_1, about_2, about_3].map((img, i) => (
                <div
                  key={i}
                  className="about-image"
                  style={{
                    width: '100%',
                    aspectRatio: '4/5',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* RIGHT CONTENT (STICKY) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              position: 'sticky',
              top: '120px',
              alignSelf: 'start',
            }}
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

            {/* STAGGER WRAPPER */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >

              <motion.p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: 1.75,
                  color: '#555',
                  marginBottom: '1.2rem',
                  fontWeight: 300,
                }}
              >
                {splitWords(
                  "At Prestige Pressure Solutions, we’re a locally owned and operated business proudly servicing the Perth region. As Perth locals ourselves, we understand the conditions, surfaces, and expectations of homes in the area — from limestone driveways to coastal wear and tear."
                )}
              </motion.p>

              <motion.p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: 1.75,
                  color: '#555',
                  marginBottom: '2rem',
                  fontWeight: 300,
                }}
              >
                {splitWords(
                  "Established in 2023, our focus has always been simple: deliver high-quality results with honest service and attention to detail."
                )}
              </motion.p>

              <motion.p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: 1.75,
                  color: '#555',
                  marginBottom: '2rem',
                  fontWeight: 300,
                }}
              >
                {splitWords(
                  "Behind the business is Hanz and Reshad, who oversee operations and ensure every job meets our standards. Working alongside them is Tommy, a trusted team member who helps deliver consistent, reliable results on-site."
                )}
              </motion.p>

              <motion.p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: 1.75,
                  color: '#555',
                  marginBottom: '2rem',
                  fontWeight: 300,
                }}
              >
                {splitWords(
                  "Growing up in Perth, we know what local homeowners are looking for — not just a quick clean, but long-lasting results that actually make a difference. That’s why we take the time to use the right methods, equipment, and treatments for each job, whether it’s pressure cleaning, window cleaning, or exterior maintenance."
                )}
              </motion.p>

              <motion.p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: 1.75,
                  color: '#555',
                  marginBottom: '2rem',
                  fontWeight: 300,
                }}
              >
                {splitWords(
                  "We’re committed to providing a professional, hassle-free experience from start to finish — with clear communication, quality workmanship, and results you can trust."
                )}
              </motion.p>

            </motion.div>

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
            <div style={{ display: 'inline-block' }}>
              <motion.a
                href="#contact"
                whileHover={{ backgroundColor: '#006edc' }}
                whileTap={{ backgroundColor: '#005bb8' }}
                transition={{ duration: 0.2 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'var(--accent)',
                  color: 'white',
                  padding: '14px 26px',
                  borderRadius: '8px',
                  fontFamily: 'var(--font-condensed)',
                  fontSize: '13px',
                  letterSpacing: '0.08em',
                  textDecoration: 'none',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                }}
              >
                GET A QUOTE
              </motion.a>
            </div>

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

          #about div[style*="position: sticky"] {
            position: static !important;
          }

          .about-images {
            display: grid !important;
            grid-template-columns: 1fr 1fr;
            gap: 0px !important;
          }

          .about-image {
            aspect-ratio: 1 / 1 !important;
            border-radius: 0 !important;
          }

          .about-image:nth-child(1) {
            border-top-left-radius: 18px !important;
          }

          .about-image:nth-child(2) {
            border-top-right-radius: 18px !important;
          }

          .about-image:nth-child(3) {
            grid-column: span 2;
            aspect-ratio: 2 / 1 !important;
            border-bottom-left-radius: 18px !important;
            border-bottom-right-radius: 18px !important;
            background-position: center 30% !important;
          }
        }
      `}</style>
    </section>
  )
}