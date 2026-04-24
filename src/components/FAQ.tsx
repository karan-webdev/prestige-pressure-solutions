import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What areas in Perth do you service?',
    a: 'We service all Perth metro areas including Rockingham, Mandurah, Kwinana, Baldivis, Bibra Lake, Cockburn, Fremantle and surrounds. Not sure? Call us and we’ll confirm instantly.',
  },
  {
    q: 'How much does pressure washing cost?',
    a: 'Driveways start from ~$150 depending on size and condition. Every job gets a free upfront quote.',
  },
  {
    q: 'Is pressure washing safe for surfaces?',
    a: 'Yes. We adjust pressure for each surface — soft wash for roofs and paint, high pressure for concrete and brick.',
  },
  {
    q: 'Do I need to be home?',
    a: 'No. As long as we have access and water, we can complete the job and send before/after photos.',
  },
  {
    q: 'How long does a job take?',
    a: 'Driveways: 1–2 hours. Full house wash: 2–4 hours depending on size.',
  },
  {
    q: 'How often should I clean my property?',
    a: 'Once a year is ideal. Twice yearly for coastal or high-mould areas.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="faq"
      style={{
        background: '#ffffff',
        padding: '8rem 2rem',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '4rem' }}
        >
          <div
            style={{
              fontFamily: 'var(--font-condensed)',
              fontSize: '12px',
              letterSpacing: '0.2em',
              color: 'var(--accent)',
              fontWeight: 800,
              marginBottom: '0.8rem',
            }}
          >
            — FREQUENTLY ASKED
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 6vw, 80px)',
              lineHeight: 0.95,
              color: '#111',
              marginBottom: '1rem',
            }}
          >
            STRAIGHT<br />
            <span style={{ color: 'var(--accent)' }}>ANSWERS.</span>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: '#666',
              maxWidth: '460px',
              lineHeight: 1.6,
            }}
          >
            Everything you need to know before booking your pressure wash.
          </p>
        </motion.div>

        {/* ACCORDION LIST */}
        <div>
          {faqs.map((faq, i) => {
            const isOpen = open === i

            return (
              <div
                key={i}
                style={{
                  borderBottom: '1px solid #eaeaea',
                }}
              >
                {/* QUESTION */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    padding: '1.6rem 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.opacity = '0.85'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.opacity = '1'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-condensed)',
                      fontSize: '20px',
                      fontWeight: 800,
                      color: isOpen ? 'var(--accent)' : '#111',
                      letterSpacing: '0.01em',
                      transition: 'color 0.2s',
                    }}
                  >
                    {faq.q}
                  </span>

                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '8px',
                      background: isOpen ? 'var(--accent)' : '#f2f2f2',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease',
                      flexShrink: 0,
                    }}
                  >
                    {isOpen ? (
                      <Minus size={16} color="white" />
                    ) : (
                      <Plus size={16} color="#444" />
                    )}
                  </div>
                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.28,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div
                        style={{
                          padding: '0 0 1.6rem 0',
                          fontFamily: 'var(--font-body)',
                          fontSize: '15px',
                          lineHeight: 1.75,
                          color: '#555',
                          maxWidth: '700px',
                        }}
                      >
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: '5rem',
            paddingTop: '3rem',
            borderTop: '1px solid #eee',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-condensed)',
                fontSize: '22px',
                fontWeight: 800,
                color: '#111',
              }}
            >
              STILL HAVE QUESTIONS?
            </div>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: '#666',
              }}
            >
              Call us directly — no forms, no waiting.
            </div>
          </div>

          <a
            href="tel:0473908514"
            style={{
              background: 'var(--accent)',
              color: 'white',
              textDecoration: 'none',
              padding: '14px 28px',
              borderRadius: '10px',
              fontFamily: 'var(--font-condensed)',
              fontWeight: 800,
              letterSpacing: '0.05em',
            }}
          >
            CALL NOW
          </a>
        </div>
      </div>
    </section>
  )
}