import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What chemicals do you use, and are they safe?',
    a: (
      <>
        We use industry-standard treatment solutions designed to break down mould, algae, moss, and lichen on surfaces like driveways, roofs, and walls.
        <br /><br />
        We take extra care around your property by:
        <ul style={{ paddingLeft: '1.2rem', margin: '0.6rem 0', listStyleType: 'disc' }}>
          <li>Pre-watering plants and surrounding areas</li>
          <li>Minimising chemical exposure wherever possible</li>
          <li>Rinsing everything down thoroughly after treatment</li>
        </ul>
        Our goal is always to deliver the best result without damaging your property or landscaping.
      </>
    ),
  },
  {
    q: 'Will pressure cleaning damage my surfaces?',
    a: (
      <>
        Not if it’s done properly — and that’s where experience matters.
        <br /><br />
        We assess every surface before starting and adjust pressure accordingly. In many cases, we use soft washing (low pressure + chemicals) instead of high pressure to:
        <ul style={{ paddingLeft: '1.2rem', margin: '0.6rem 0', listStyleType: 'disc' }}>
          <li>Prevent damage to paint, render, and roofing</li>
          <li>Let the treatment do the work safely</li>
        </ul>
        High pressure is only used where appropriate and controlled carefully.
      </>
    ),
  },
  {
    q: 'What’s the difference between a roof clean and a roof restoration?',
    a: (
      <>
        A roof clean involves removing dirt, moss, and buildup using soft washing methods.
        <br /><br />
        A roof restoration is a much bigger job that includes repairs, repainting, and sealing.
        <br /><br />
        We specialise in cleaning, but we’ll always let you know if your roof may need further work beyond that.
      </>
    ),
  },
  {
    q: 'How do you clean windows?',
    a: (
      <>
        We use two main methods depending on the job:
        <br /><br />
        <strong>1. Water-Fed Pole System (Exterior)</strong>
        <ul style={{ paddingLeft: '1.2rem', margin: '0.6rem 0', listStyleType: 'disc' }}>
          <li>Uses purified water (DI tank + filtration system)</li>
          <li>Leaves a streak-free, spotless finish</li>
          <li>Ideal for double-storey homes and strata properties</li>
          <li>Safer as it’s done from the ground</li>
        </ul>

        <strong>2. Traditional Hand Cleaning</strong>
        <ul style={{ paddingLeft: '1.2rem', margin: '0.6rem 0', listStyleType: 'disc' }}>
          <li>Used where needed for detailed work</li>
          <li>Great for interiors or more delicate finishes</li>
        </ul>
      </>
    ),
  },
  {
    q: 'Do you clean window tracks as well?',
    a: (
      <>
        Basic debris removal (like spider webs and loose dirt) is usually included.
        <br /><br />
        However, deep track cleaning (built-up dirt, mud, heavy debris) is an additional service due to the extra time and detail required.
      </>
    ),
  },
  {
    q: 'Do you remove hard water stains from windows?',
    a: (
      <>
        Yes — but this is considered a restoration service, not a standard clean.
        <br /><br />
        Hard water stains are caused by mineral buildup over time and require:
        <ul style={{ paddingLeft: '1.2rem', margin: '0.6rem 0', listStyleType: 'disc' }}>
          <li>Specialised tools and products</li>
          <li>Extra time and multiple passes</li>
        </ul>
        We usually assess this on-site and quote accordingly.
      </>
    ),
  },
  {
    q: 'How do you clean gutters?',
    a: (
      <>
        We use a combination approach:
        <ul style={{ paddingLeft: '1.2rem', margin: '0.6rem 0', listStyleType: 'disc' }}>
          <li>Hand removal of all large debris</li>
          <li>Followed by flushing or leaf blowing for a full clean-out</li>
        </ul>
        This ensures gutters are cleared properly and flowing as they should.
      </>
    ),
  },
  {
    q: 'Do you clean solar panels?',
    a: (
      <>
        Yes. Dirty solar panels can lose efficiency due to dust and grime buildup.
        <br /><br />
        We clean them using:
        <ul style={{ paddingLeft: '1.2rem', margin: '0.6rem 0', listStyleType: 'disc' }}>
          <li>The same pure water system used for windows</li>
          <li>No harsh chemicals</li>
          <li>A method that leaves panels clean without residue</li>
        </ul>
      </>
    ),
  },
  {
    q: 'What happens after the job is done?',
    a: (
      <>
        We always aim to leave your property tidy by:
        <ul style={{ paddingLeft: '1.2rem', margin: '0.6rem 0', listStyleType: 'disc' }}>
          <li>Cleaning up surrounding areas</li>
          <li>Rinsing down surfaces</li>
          <li>Removing any leftover debris</li>
        </ul>
        That said, some jobs (especially heavy pressure cleaning) can bring out underlying drainage or buildup issues — we always do our best to manage this and leave things in great condition.
      </>
    ),
  },
  {
    q: 'Do you offer regular maintenance?',
    a: (
      <>
        Yes — and we actually recommend it.
        <br /><br />
        Regular cleaning:
        <ul style={{ paddingLeft: '1.2rem', margin: '0.6rem 0', listStyleType: 'disc' }}>
          <li>Prevents heavy buildup</li>
          <li>Makes future cleans easier</li>
          <li>Keeps your property looking its best year-round</li>
        </ul>
      </>
    ),
  },
  {
    q: 'Do you remove rust stains and other tough marks?',
    a: (
      <>
        Yes — we can treat rust stains and other stubborn marks using specialised cleaning solutions.
        <br /><br />
        Different stains require different treatments, so we:
        <ul style={{ paddingLeft: '1.2rem', margin: '0.6rem 0', listStyleType: 'disc' }}>
          <li>Assess the surface and type of stain first</li>
          <li>Use the appropriate chemical specific to that issue</li>
          <li>Apply it carefully to avoid damaging surrounding areas</li>
        </ul>
        We’ll always communicate the process with you beforehand so you know exactly what’s being used and what to expect from the result.
      </>
    ),
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" style={{ background: '#ffffff', padding: '8rem 2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '4rem' }}
        >
          <div style={{
            fontFamily: 'var(--font-condensed)',
            fontSize: '12px',
            letterSpacing: '0.2em',
            color: 'var(--accent)',
            fontWeight: 800,
            marginBottom: '0.8rem',
          }}>
            — FREQUENTLY ASKED
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(48px, 6vw, 80px)',
            lineHeight: 0.95,
            color: '#111',
            marginBottom: '1rem',
          }}>
            STRAIGHT<br />
            <span style={{ color: 'var(--accent)' }}>ANSWERS.</span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            color: '#666',
            maxWidth: '460px',
            lineHeight: 1.6,
          }}>
            Everything you need to know before booking your pressure wash.
          </p>
        </motion.div>

        {/* FAQ LIST */}
        <div>
          {faqs.map((faq, i) => {
            const isOpen = open === i

            return (
              <div key={i} style={{ borderBottom: '1px solid #eaeaea' }}>
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
                >
                  <span style={{
                    fontFamily: 'var(--font-condensed)',
                    fontSize: '20px',
                    fontWeight: 800,
                    maxWidth: '85%',
                    lineHeight: 1.3,
                    color: isOpen ? 'var(--accent)' : '#111',
                  }}>
                    {faq.q}
                  </span>

                  <div style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    background: isOpen ? 'var(--accent)' : '#f2f2f2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {isOpen ? <Minus size={16} color="white" /> : <Plus size={16} color="#444" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{
                        padding: '0 0 1.6rem 0',
                        fontFamily: 'var(--font-body)',
                        fontSize: '15px',
                        lineHeight: 1.75,
                        color: '#555',
                        maxWidth: '700px',
                      }}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* CTA (RESTORED) */}
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
            <div style={{
              fontFamily: 'var(--font-condensed)',
              fontSize: '22px',
              fontWeight: 800,
              color: '#111',
            }}>
              STILL HAVE QUESTIONS?
            </div>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              color: '#666',
            }}>
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