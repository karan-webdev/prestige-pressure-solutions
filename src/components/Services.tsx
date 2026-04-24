import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const services = [
  {
    id: 1,
    category: 'Cleaning',
    title: 'PRESSURE WASHING',
    desc: 'Driveways, patios, limestone, concrete, aggregate and more — blasted clean.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    id: 2,
    category: 'Cleaning',
    title: 'SOFT WASHING',
    desc: 'Low-pressure chemical treatment for roofs, walls and delicate surfaces.',
    img: 'https://images.unsplash.com/photo-1635274605638-d44babc08a4f?w=800&q=80',
  },
  {
    id: 3,
    category: 'Cleaning',
    title: 'WINDOW CLEANING',
    desc: 'Purified water, streak-free results — inside and out.',
    img: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80',
  },
  {
    id: 4,
    category: 'Cleaning',
    title: 'GUTTER CLEANING',
    desc: 'Flush and clear blockages to prevent overflow and water damage.',
    img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
  },
  {
    id: 5,
    category: 'Restoration',
    title: 'ROOF CLEANING',
    desc: 'Pressure or soft wash depending on condition — moss, lichen and streaks gone.',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
  },
  {
    id: 6,
    category: 'Cleaning',
    title: 'SOLAR PANEL CLEANING',
    desc: 'Restore efficiency with safe, residue-free panel cleaning.',
    img: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=800&q=80',
  },
  {
    id: 7,
    category: 'Specialist',
    title: 'RUST STAIN REMOVAL',
    desc: 'Targeted treatment removes stubborn rust staining from any surface.',
    img: 'https://images.unsplash.com/photo-1564419320461-6870880221ad?w=800&q=80',
  },
  {
    id: 8,
    category: 'Restoration',
    title: 'LIMESTONE RESTORATION',
    desc: 'Specialist cleaning and restoration for limestone walls, paths and steps.',
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=800&q=80',
  },
]

const tabs = ['All Services', 'Cleaning', 'Restoration', 'Specialist']

export default function Services() {
  const [expanded, setExpanded] = useState(null)
  const [activeTab, setActiveTab] = useState('All Services')

  const filtered =
    activeTab === 'All Services'
      ? services
      : services.filter((s) => s.category === activeTab)

  return (
    <section id="services" style={{ padding: '7rem 2rem', background: '#fff' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            fontFamily: 'var(--font-condensed)',
            fontSize: '11px',
            letterSpacing: '0.25em',
            color: 'var(--accent)',
            fontWeight: 800,
            marginBottom: '1rem',
            textTransform: 'uppercase'
          }}>
            Services
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(46px, 6vw, 82px)',
            lineHeight: 0.95,
            fontWeight: 900,
            textTransform: 'uppercase',
            margin: 0
          }}>
            Complete Exterior<br />
            <span style={{ color: 'var(--accent)' }}>Cleaning Solutions</span>
          </h2>

          <p style={{
            maxWidth: '560px',
            margin: '1.2rem auto 0',
            color: '#666',
            fontSize: '15px',
            lineHeight: 1.6
          }}>
            From pressure washing to delicate restoration work — we handle every surface with precision and care.
          </p>
        </div>

        {/* ===== TABS ===== */}
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => {
                setExpanded(null)
                setActiveTab(tab)
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* GRID */}
        <motion.div
          layout
          transition={{ layout: { type: 'spring', stiffness: 120, damping: 18 } }}
          className="services-grid"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((s) => {
              const isOpen = expanded === s.id

              return (
                <motion.div
                  layout
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className={`scard ${isOpen ? 'expanded' : ''}`}
                  onClick={() => setExpanded(isOpen ? null : s.id)}
                >
                  <motion.div
                    className="scard-bg"
                    style={{ backgroundImage: `url(${s.img})` }}
                    animate={{ scale: isOpen ? 1.08 : 1 }}
                  />

                  <div className="scard-overlay" />

                  <div className="scard-content">
                    <div className="scard-icon" />
                    <h3 className="scard-title">{s.title}</h3>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.p
                          className="scard-desc"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 12 }}
                        >
                          {s.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <motion.div
                    className="scard-arrow"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                  >
                    ↗
                  </motion.div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
          <a
            href="tel:0473908514"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'var(--accent)',
              color: 'white',
              padding: '14px 28px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontFamily: 'var(--font-condensed)',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}
          >
            Get a Free Quote →
          </a>
        </div>

      </div>

      {/* STYLES */}
      <style>{`
        .tabs {
          display: flex;
          gap: 8px;
          background: #f1f3f5;
          padding: 6px;
          border-radius: 12px;
          width: fit-content;
          margin: 0 auto 2.5rem;
        }

        .tab {
          border: none;
          padding: 10px 16px;
          border-radius: 10px;
          background: transparent;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          color: #555;
          transition: all 0.25s ease;
        }

        .tab.active {
          background: #0f172a;
          color: white;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 220px;
          gap: 14px;
        }

        .scard {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
        }

        .scard.expanded {
          grid-column: span 2;
        }

        .scard-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
        }

        .scard-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.88), rgba(0,0,0,0.3));
        }

        .scard-content {
          position: absolute;
          inset: 0;
          padding: 18px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .scard-icon {
          width: 28px;
          height: 3px;
          background: var(--accent);
          margin-bottom: 10px;
        }

        .scard-title {
          color: white;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin: 0;
        }

        .scard-desc {
          color: rgba(255,255,255,0.75);
          font-size: 12px;
          margin-top: 6px;
        }

        .scard-arrow {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .scard.expanded {
            grid-column: span 1;
          }
        }

        @media (max-width: 500px) {
          .services-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 190px;
          }
        }
      `}</style>
    </section>
  )
}