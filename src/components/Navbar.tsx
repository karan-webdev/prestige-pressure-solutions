import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import logo from '../assets/logo.png' // adjust path if needed

const links = ['Services', 'Projects', 'Testimonials', 'FAQ']

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
        {/* ✅ LOGO */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
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
          style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}
          className="desktop-nav"
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
                transition: 'color 0.2s',
              }}
              onMouseEnter={e =>
                (e.currentTarget.style.color = '#0088f2')
              }
              onMouseLeave={e =>
                (e.currentTarget.style.color =
                  'rgba(255,255,255,0.75)')
              }
            >
              {link.toUpperCase()}
            </a>
          ))}
        </div>

        {/* CTA + Mobile Menu */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
        >
          <a
            href="tel:0473908514"
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
              letterSpacing: '0.05em',
              transition: 'background 0.2s, transform 0.15s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = '#0066c0'
              el.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'var(--accent)'
              el.style.transform = 'translateY(0)'
            }}
          >
            <Phone size={14} />
            0473 908 514
          </a>

          <button
            onClick={() => setOpen(!open)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'white',
              padding: '4px',
              display: 'none',
            }}
            className="menu-btn"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{
              overflow: 'hidden',
              background: '#111',
              borderTop: '1px solid rgba(0,136,242,0.15)',
            }}
          >
            <div
              style={{
                padding: '1.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
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
                    fontSize: '20px',
                    letterSpacing: '0.12em',
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  {link.toUpperCase()}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}