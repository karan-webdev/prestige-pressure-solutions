import { motion } from 'framer-motion'
import { Phone, Mail, User, MapPin, MessageSquare } from 'lucide-react'

export default function ContactBanner() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '8rem 2rem',
      }}
    >
      {/* BACKGROUND */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("https://images7.alphacoders.com/341/341714.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scale(1.05)',
          zIndex: 0,
        }}
      />

      {/* BLACK OVERLAY */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.78)',
          zIndex: 1,
        }}
      />

      {/* VIGNETTE */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at center, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.92) 100%)',
          zIndex: 1,
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <motion.div
          className="contact-grid"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* LEFT SIDE */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(0,135,242,0.15)',
                border: '1px solid rgba(0,135,242,0.35)',
                borderRadius: '100px',
                padding: '6px 18px',
                fontFamily: 'var(--font-condensed)',
                fontWeight: 800,
                fontSize: '12px',
                letterSpacing: '0.15em',
                color: '#0087f2',
                marginBottom: '2rem',
              }}
            >
              GET A FREE QUOTE
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(50px, 6vw, 90px)',
                color: 'white',
                lineHeight: 0.95,
                marginBottom: '1.5rem',
              }}
            >
              LET’S BOOK<br />
              <span style={{ color: '#0087f2' }}>YOUR CLEAN</span>
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.7,
                maxWidth: '420px',
              }}
            >
              Fill out the form and we’ll get back to you fast. No spam — just a real quote from a local business.
            </p>

            {/* CONTACT INFO */}
            <div
              style={{
                marginTop: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'rgba(255,255,255,0.75)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={14} color="#0087f2" />
                0473 908 514
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={14} color="#0087f2" />
                prestigesolutionswa@gmail.com
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '18px',
              padding: '2rem',
              backdropFilter: 'blur(12px)',
            }}
          >
            <form
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              {[
                { icon: User, placeholder: 'Full Name' },
                { icon: Phone, placeholder: 'Phone Number' },
                { icon: MapPin, placeholder: 'Suburb / Location' },
              ].map((field, i) => (
                <div key={i} style={inputWrap}>
                  <field.icon size={16} color="#0087f2" />
                  <input
                    placeholder={field.placeholder}
                    style={inputStyle}
                    onFocus={(e) => {
                      ;(e.currentTarget.parentElement as HTMLElement).style.borderColor =
                        'rgba(0,135,242,0.6)'
                    }}
                    onBlur={(e) => {
                      ;(e.currentTarget.parentElement as HTMLElement).style.borderColor =
                        'rgba(255,255,255,0.12)'
                    }}
                  />
                </div>
              ))}

              <div style={{ ...inputWrap, alignItems: 'flex-start' }}>
                <MessageSquare size={16} color="#0087f2" />
                <textarea
                  placeholder="What do you need cleaned?"
                  rows={4}
                  style={{
                    ...inputStyle,
                    resize: 'none',
                  }}
                  onFocus={(e) => {
                    ;(e.currentTarget.parentElement as HTMLElement).style.borderColor =
                      'rgba(0,135,242,0.6)'
                  }}
                  onBlur={(e) => {
                    ;(e.currentTarget.parentElement as HTMLElement).style.borderColor =
                      'rgba(255,255,255,0.12)'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  marginTop: '10px',
                  background: '#0087f2',
                  color: 'white',
                  border: 'none',
                  padding: '14px',
                  borderRadius: '10px',
                  fontFamily: 'var(--font-condensed)',
                  fontWeight: 800,
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 10px 30px rgba(0,135,242,0.25)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(-2px)'
                  el.style.boxShadow = '0 14px 40px rgba(0,135,242,0.4)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = '0 10px 30px rgba(0,135,242,0.25)'
                }}
              >
                REQUEST QUOTE
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* MOBILE RESPONSIVE RULE */}
      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

/* STYLES */
const inputWrap = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  background: 'rgba(255,255,255,0.08)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: '10px',
  padding: '12px 14px',
  transition: 'border-color 0.2s ease',
}

const inputStyle = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  outline: 'none',
  color: 'white',
  fontFamily: 'var(--font-body)',
  fontSize: '14px',
}