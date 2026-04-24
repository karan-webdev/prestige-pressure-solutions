import { Phone, Mail, Globe, MapPin, Share2, MessageCircle } from 'lucide-react'
import logo from '../assets/logo.png'

const services = [
  'House Washing',
  'Roof Cleaning',
  'Gutter Cleaning',
  'Driveway Cleaning',
  'Sidewalk Cleaning',
  'Fence Cleaning',
  'Window Cleaning'
]

export default function Footer() {
  return (
    <footer style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 2rem 2rem' }}>
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            
            {/* ONLY LOGO */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <img
                src={logo}
                alt="Logo"
                style={{
                  width: 'auto',
                  height: '120px',
                  objectFit: 'contain',
                }}
              />
            </div>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.4)',
                marginBottom: '1.5rem',
              }}
            >
              Perth's mobile pressure washing specialists. We come to you — no mess, no fuss, just spotless results.
            </p>

            {/* Social */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { icon: Share2, label: 'Facebook' },
                { icon: MessageCircle, label: 'Instagram' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.5)',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(0,136,242,0.4)'
                    el.style.color = 'var(--accent)'
                    el.style.background = 'rgba(0,136,242,0.08)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(255,255,255,0.08)'
                    el.style.color = 'rgba(255,255,255,0.5)'
                    el.style.background = 'rgba(255,255,255,0.05)'
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-condensed)',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.15em',
                color: 'white',
                marginBottom: '1.5rem',
              }}
            >
              SERVICES
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {services.map(s => (
                <a
                  key={s}
                  href="#services"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.4)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--accent)'}
                  onMouseLeave={e =>
                    (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)'
                  }
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-condensed)',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.15em',
                color: 'white',
                marginBottom: '1.5rem',
              }}
            >
              CONTACT
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { icon: Phone, text: '0473 908 514', href: 'tel:0473908514' },
                { icon: Mail, text: 'prestigepressuresolutionswa@gmail.com', href: 'mailto:prestigepressuresolutionswa@gmail.com' },
                { icon: Globe, text: 'prestigepressuresolutions.com', href: 'https://prestigepressuresolutions.com' },
                { icon: MapPin, text: 'Perth Metro, WA', href: '#' },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.45)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    lineHeight: 1.5,
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'white'}
                  onMouseLeave={e =>
                    (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.45)'
                  }
                >
                  <Icon size={15} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.25)',
            }}
          >
            © {new Date().getFullYear()} All rights reserved.
          </div>

          <div
            style={{
              fontFamily: 'var(--font-condensed)',
              fontWeight: 600,
              fontSize: '12px',
              letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.2)',
            }}
          >
            ABN: AVAILABLE ON REQUEST · PERTH, WA
          </div>
        </div>
      </div>
    </footer>
  )
}