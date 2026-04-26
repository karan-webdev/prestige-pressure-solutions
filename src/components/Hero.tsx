import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: 'calc(100vh - 72px)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '72px',
      }}
    >
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('https://powercleansc.com/wp-content/uploads/shutterstock_2512719469.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
        className="hero-bg"
      />

      <style>
        {`
          @media (max-width: 768px) {
            .hero-bg {
              background-position: 80% center !important;
            }
          }
        `}
      </style>

      {/* MAIN TINT */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(
              to bottom,
              rgba(0,0,0,1) 0%,
              rgba(0,0,0,0.95) 8%,
              rgba(0,0,0,0.85) 18%,
              rgba(0,0,0,0.55) 40%,
              rgba(0,0,0,0.65) 100%
            )
          `,
          zIndex: 1,
        }}
      />

      {/* NAVBAR BLEED */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '20px',
          background:
            'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 45%, rgba(0,0,0,0) 100%)',
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
          padding: '0 2rem',
          flex: 1,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div style={{ maxWidth: '620px' }}>

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(0,136,242,0.12)',
              border: '1px solid rgba(0,136,242,0.3)',
              borderRadius: '100px',
              padding: '6px 14px',
              marginBottom: '1.2rem',
            }}
          >
            <div
              style={{
                background: 'var(--accent)',
                borderRadius: '100px',
                padding: '3px 10px',
                fontFamily: 'var(--font-condensed)',
                fontWeight: 600,
                fontSize: '11px',
                letterSpacing: '0.1em',
                color: 'white',
              }}
            >
              PERTH'S BEST
            </div>

            <span
              style={{
                fontFamily: 'var(--font-condensed)',
                fontWeight: 600,
                fontSize: '12px',
                letterSpacing: '0.08em',
                color: 'rgba(255,255,255,0.7)',
              }}
            >
              MOBILE PRESSURE WASHING
            </span>
          </motion.div>

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(56px, 8vw, 110px)',
              lineHeight: 0.9,
              color: 'white',
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
            }}
          >
            MAKE DIRTY<br />
            SURFACES<br />
            <span style={{ color: 'var(--accent)' }}>
              DISAPPEAR
            </span>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '420px',
              marginBottom: '2rem',
            }}
          >
            Driveways, roofs, and exteriors cleaned on-site anywhere in Perth.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
            }}
          >
            {/* PRIMARY BUTTON */}
            <motion.a
              href="tel:0473908514"
              whileHover={{ 
                backgroundColor: '#006edc'
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: 'var(--accent)',
                color: 'white',
                padding: '14px 26px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontFamily: 'var(--font-condensed)',
                fontWeight: 600,
                letterSpacing: '0.06em',
              }}
            >
              <Phone size={16} />
              CALL NOW
            </motion.a>

            {/* OUTLINE BUTTON */}
            <motion.a
              href="#services"
              whileHover={{
                borderColor: '#ffffff'
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: 'white',
                padding: '14px 22px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.2)',
                textDecoration: 'none',
                fontFamily: 'var(--font-condensed)',
                fontWeight: 600,
              }}
            >
              SERVICES <ArrowRight size={16} />
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}