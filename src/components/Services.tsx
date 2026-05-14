import { motion, AnimatePresence, type Variants, type Transition } from 'framer-motion'
import { useState } from 'react'

const services = [
  {
    id: 1,
    category: 'Cleaning',
    title: 'PRESSURE WASHING',
    desc: 'Driveways, patios, limestone, concrete, aggregate and more. Blasted clean.',
    img: 'https://premierprowashandseal.com/wp-content/uploads/2023/04/iStock-1012456142-scaled.jpg',
  },
  {
    id: 2,
    category: 'Cleaning',
    title: 'SOFT WASHING',
    desc: 'Low-pressure chemical treatment for roofs, walls and delicate surfaces.',
    img: 'https://www.priorityonelawncare.com/wp-content/uploads/2020/01/landscaper-pressure-wash-final-scaled.jpg',
  },
  {
    id: 3,
    category: 'Cleaning',
    title: 'WINDOW CLEANING',
    desc: 'Purified water, streak-free results. Inside and out.',
    img: 'https://storables.com/wp-content/uploads/2021/12/Featured-Photo-for-Window-Cleaners-scaled.jpeg',
  },
  {
    id: 4,
    category: 'Cleaning',
    title: 'GUTTER CLEANING',
    desc: 'Flush and clear blockages to prevent overflow and water damage.',
    img: 'https://crystalclear-window-cleaning.com/wp-content/uploads/2023/10/Gutter-Cleaning-Portland-OR.jpg',
  },
  {
    id: 5,
    category: 'Restoration',
    title: 'ROOF CLEANING',
    desc: 'Pressure or soft wash depending on condition. Moss, lichen and streaks gone.',
    img: 'https://ccwindowclean.com/wp-content/uploads/2024/06/1seo-cc-roof-cleaning-1-scaled.webp',
  },
  {
    id: 6,
    category: 'Cleaning',
    title: 'SOLAR PANEL CLEANING',
    desc: 'Restore efficiency with safe, residue-free panel cleaning.',
    img: 'https://images8.alphacoders.com/550/thumb-1920-550542.jpg',
  },
  {
    id: 7,
    category: 'Specialist',
    title: 'RUST STAIN REMOVAL',
    desc: 'Targeted treatment removes stubborn rust staining from any surface.',
    img: 'https://static.vecteezy.com/system/resources/previews/038/820/189/non_2x/ai-generated-workers-using-pressure-washer-to-clean-driveways-for-professional-cleaning-service-free-photo.jpeg',
  },
  {
    id: 8,
    category: 'Restoration',
    title: 'LIMESTONE RESTORATION',
    desc: 'Specialist cleaning and restoration for limestone walls, paths and steps.',
    img: 'https://images.pexels.com/photos/34439738/pexels-photo-34439738.jpeg?cs=srgb&dl=pexels-udatommo-34439738.jpg&fm=jpg',
  },
]

const tabs = ['All Services', 'Cleaning', 'Restoration', 'Specialist']

// ─── Fix 1: ease must be typed `as const` so TS sees a tuple, not number[] ───
const EASE = [0.22, 1, 0.36, 1] as const

function useIsMobile() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(max-width: 500px)').matches
}

// ─── Fix 2: cast variants using Variants from framer-motion.
//     The `custom` param pattern works fine at runtime but TS complains
//     about the index signature. Typing the object as Variants + using
//     `as const` for ease resolves both errors cleanly. ──────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.18,       // was 0.12 — slower stagger
      duration: 0.9,         // was 0.65
      ease: EASE,
    } satisfies Transition,
  }),
}

const cardImageVariant: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.11,       // was 0.07
      duration: 0.75,        // was 0.55
      ease: EASE,
    } satisfies Transition,
  }),
}

const cardTextVariant: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.11 + 0.28, // was i * 0.07 + 0.18
      duration: 0.65,          // was 0.45
      ease: EASE,
    } satisfies Transition,
  }),
}

const mobileCard: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.12,       // was 0.08
      duration: 0.7,         // was 0.5
      ease: EASE,
    } satisfies Transition,
  }),
}

export default function Services() {
  const [expanded, setExpanded] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState('All Services')
  const [gridSeen, setGridSeen] = useState(false)
  const isMobile = useIsMobile()

  const filtered =
    activeTab === 'All Services'
      ? services
      : services.filter((s) => s.category === activeTab)

  return (
    <section id="services" style={{ padding: '7rem 2rem', background: '#fff' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>

          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px 0px' }}
            style={{
              fontFamily: 'var(--font-condensed)',
              fontSize: '11px',
              letterSpacing: '0.25em',
              color: 'var(--accent)',
              fontWeight: 800,
              marginBottom: '1rem',
              textTransform: 'uppercase',
            }}
          >
            — Services
          </motion.div>

          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px 0px' }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(46px, 6vw, 82px)',
              lineHeight: 0.95,
              fontWeight: 900,
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            Complete Exterior<br />
            <span style={{ color: 'var(--accent)' }}>Cleaning Solutions</span>
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px 0px' }}
            style={{
              maxWidth: '560px',
              margin: '1.2rem auto 0',
              color: '#666',
              fontSize: '15px',
              lineHeight: 1.6,
            }}
          >
            From pressure washing to delicate restoration work. We handle every surface with precision and care.
          </motion.p>
        </div>

        {/* TABS */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px 0px' }}
          className="tabs"
        >
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
        </motion.div>

        {/* GRID */}
        <motion.div
          layout
          transition={{ layout: { type: 'spring', stiffness: 120, damping: 18 } }}
          className="services-grid"
          onViewportEnter={() => setGridSeen(true)}
          viewport={{ once: true, margin: '-60px 0px' }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((s, i) => {
              const isOpen = expanded === s.id

              return (
                <motion.div
                  layout
                  key={s.id}
                  custom={i}
                  variants={isMobile ? mobileCard : cardImageVariant}
                  initial="hidden"
                  animate={gridSeen ? 'visible' : 'hidden'}
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

                  <motion.div
                    className="scard-content"
                    custom={i}
                    variants={isMobile ? undefined : cardTextVariant}
                    initial={isMobile ? undefined : 'hidden'}
                    animate={isMobile ? undefined : gridSeen ? 'visible' : 'hidden'}
                  >
                    <div className="scard-icon" />
                    <h3 className="scard-title">{s.title}</h3>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.p
                          className="scard-desc"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } }}
                          exit={{ opacity: 0, y: 12, transition: { duration: 0.3 } }}
                        >
                          {s.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div
                    className="scard-arrow"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                  >
                    ↗
                  </motion.div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px 0px' }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}
        >
          <motion.a
            href="#contact"
            whileHover={{ backgroundColor: '#006edc' }}
            whileTap={{ backgroundColor: '#005bb8' }}
            transition={{ duration: 0.2 }}
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
              textTransform: 'uppercase',
            }}
          >
            Get a Free Quote →
          </motion.a>
        </motion.div>

      </div>

      {/* STYLES */}
      <style>{`
        .tabs {
          display: flex;
          gap: 0;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          margin: 0 auto 2.5rem;
          justify-content: center;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .tabs::-webkit-scrollbar {
          display: none;
        }

        .tab {
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          padding: 14px 22px;
          font-family: var(--font-condensed);
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.1em;
          color: rgba(0,0,0,0.45);
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.25s ease;
        }

        .tab.active {
          color: #000;
          border-bottom: 2px solid var(--accent);
        }

        .tab:hover {
          color: #000;
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
          .tabs {
            justify-content: flex-start;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}