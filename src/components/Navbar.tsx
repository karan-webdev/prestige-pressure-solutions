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
              }}
            >
              {link.toUpperCase()}
            </a>
          ))}
        </div>

        {/* CTA (DESKTOP ONLY) + MENU BUTTON */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>

          {/* CTA - hidden on mobile */}
          <a
            href="tel:0473908514"
            className="cta-btn"
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
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="menu-btn"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'white',
              display: 'none',
            }}
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100vw',
              height: '100vh',
              background: '#000',
              zIndex: 200,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              padding: '2rem',
            }}
          >
            {/* Close */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                }}
              >
                <X size={28} />
              </button>
            </div>

            {/* Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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

            {/* Mobile CTA (ONLY HERE) */}
            <a
              href="tel:0473908514"
              style={{
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
        )}
      </AnimatePresence>

      {/* RESPONSIVE RULES */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .menu-btn { display: block !important; }

          /* THIS is the key fix */
          .cta-btn { display: none !important; }
        }
      `}</style>
    </nav>
  )
}