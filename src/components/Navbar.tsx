import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import logo from '../assets/logo.png'

const links = ['Services', 'Testimonials', 'Projects', 'FAQ']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(10,10,10,0.97)' : '#000000',
        backdropFilter: 'blur(12px)',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
        }}
      >
        {/* LOGO */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          <img
            src={logo}
            alt="Prestige Pressure Solutions"
            style={{
              height: '100px',
              width: 'auto',
              objectFit: 'contain',
            }}
          />
        </a>

        {/* Desktop Links */}
        <div
          className="desktop-nav"
          style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}
        >
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                fontFamily: 'var(--font-condensed)',
                fontWeight: 600,
                fontSize: '14px',
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.75)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = '#ffffff')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')
              }
            >
              {link.toUpperCase()}
            </a>
          ))}
        </div>

        {/* CTA + MENU */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>

          {/* CTA BUTTON */}
          <motion.a
            href="tel:0473908514"
            className="cta-btn"
            whileHover={{
              backgroundColor: '#006edc',
            }}
            whileTap={{
              backgroundColor: '#005bb8',
            }}
            transition={{ duration: 0.2 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--accent)',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontFamily: 'var(--font-condensed)',
              fontWeight: 600,
              fontSize: '14px',
            }}
          >
            <Phone size={14} />
            0473 908 514
          </motion.a>

          <button
            onClick={() => setOpen(true)}
            className="menu-btn"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'white',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
              lineHeight: 0,
            }}
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY + MENU */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(10px)',
                zIndex: 199,
              }}
            />

            <motion.div
              drag="x"
              dragDirectionLock
              dragConstraints={{ left: 0, right: 300 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x > 120) setOpen(false)
              }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '100vw',
                height: '100dvh',
                background: '#000',
                zIndex: 200,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
              }}
            >
              <button
                onClick={() => setOpen(false)}
                style={{
                  position: 'fixed',
                  top: '18px',
                  right: '2rem',
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  zIndex: 300,
                }}
              >
                <X size={26} />
              </button>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  marginTop: '4rem',
                }}
              >
                {links.map(link => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    style={{
                      fontFamily: 'var(--font-condensed)',
                      fontWeight: 700,
                      fontSize: '22px',
                      letterSpacing: '0.12em',
                      color: 'white',
                      textDecoration: 'none',
                    }}
                  >
                    {link.toUpperCase()}
                  </a>
                ))}
              </div>

              <a
                href="tel:0473908514"
                style={{
                  marginTop: 'auto',
                  marginBottom: '4rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  background: 'var(--accent)',
                  color: 'white',
                  padding: '14px 20px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-condensed)',
                  fontWeight: 600,
                  fontSize: '16px',
                }}
              >
                <Phone size={16} />
                0473 908 514
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .menu-btn { display: flex !important; }
          .cta-btn { display: none !important; }
        }
      `}</style>
    </nav>
  )
}