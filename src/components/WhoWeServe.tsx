import { motion } from 'framer-motion'
import { useState } from 'react'
import residential from '../assets/residential.jpg'


const segments = [
  {
    id: 'residential',
    label: 'RESIDENTIAL',
    headline: 'HOMEOWNERS',
    desc: 'We bring professional-grade equipment and techniques right to your doorstep, restoring your driveways, roofs, gutters, windows and more to showroom condition.',
    features: [
      'Driveway & patio pressure washing',
      'Roof cleaning & soft washing',
      'Window cleaning (inside & out)',
      'Gutter clearing & flush',
      'Solar panel cleaning',
      'Limestone restoration & sealing',
    ],
    accent: '#0088f2',
    img: residential,
  },
  {
    id: 'commercial',
    label: 'COMMERCIAL',
    headline: 'SMALL BUSINESS',
    desc: "A clean exterior signals professionalism. We keep your shopfront, carpark, and facade spotless so customers feel confident the moment they arrive.",
    features: [
      'Shopfront & facade pressure washing',
      'Car park & hardstand cleaning',
      'Bin bay & waste area hygiene',
      'Commercial window cleaning',
      'Graffiti & stain removal',
      'Scheduled maintenance plans',
    ],
    accent: '#0088f2',
    img: 'https://www.portlincoln.sa.gov.au/__data/assets/image/0018/121581/varieties/banner.jpg',
  },
  {
    id: 'realestate',
    label: 'REAL ESTATE',
    headline: 'PROPERTY AGENTS',
    desc: "Pre-sale exterior cleaning is the highest-ROI investment a vendor can make. We work fast, invoice cleanly, and make your listings photograph beautifully.",
    features: [
      'Full pre-sale exterior clean packages',
      'Fast turnaround before open homes',
      'Before & after photo documentation',
      'Professional invoicing for vendors',
      'Preferred agent pricing available',
      'Ongoing property maintenance',
    ],
    accent: '#0088f2',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80',
  },
  {
    id: 'strata',
    label: 'STRATA',
    headline: 'STRATA MANAGERS',
    desc: "We understand strata. Scheduled programs, compliance documentation, and multi-building management that keeps your committee happy and your complex pristine.",
    features: [
      'Scheduled maintenance contracts',
      'Common area pressure washing',
      'Multi-building complex management',
      'Compliance & inspection reporting',
      'Priority emergency scheduling',
      'Consolidated invoicing per complex',
    ],
    accent: '#0088f2',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80',
  },
]

export default function WhoWeServe() {
  const [active, setActive] = useState(0)
  const seg = segments[active]

  return (
    <section
      id="who-we-serve"
      style={{
        background: '#0a0a0a',
        padding: '7rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '4.5rem' }}
        >
          <div
            style={{
              fontFamily: 'var(--font-condensed)',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '0.2em',
              color: 'var(--accent)',
              marginBottom: '1rem',
            }}
          >
            — WHO WE SERVE
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(52px, 7vw, 90px)',
              color: 'white',
              lineHeight: 0.92,
              margin: 0,
            }}
          >
            BUILT FOR<br />
            <span style={{ color: 'var(--accent)' }}>EVERY CLIENT.</span>
          </h2>
        </motion.div>

        {/* TAB STRIP */}
        <div className="tabs-scroll">
          {segments.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              style={{
                background: 'none',
                border: 'none',
                borderBottom:
                  active === i
                    ? '2px solid var(--accent)'
                    : '2px solid transparent',
                padding: '14px 28px',
                fontFamily: 'var(--font-condensed)',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.1em',
                color: active === i ? 'white' : 'rgba(255,255,255,0.35)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="who-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden' }}>
            <div
              style={{
                aspectRatio: '4/3',
                backgroundImage: `url(${seg.img})`,
                backgroundSize: 'cover',
                backgroundPosition: seg.id === 'residential' ? 'center 20%' : 'center',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.35) 45%, rgba(0,0,0,0.05) 100%)',
              }}
            />
          </div>

          <div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(44px, 5vw, 72px)',
                color: 'white',
                lineHeight: 0.9,
                marginBottom: '1.2rem',
              }}
            >
              {seg.headline}
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.7,
                marginBottom: '2rem',
                maxWidth: '420px',
              }}
            >
              {seg.desc}
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginBottom: '2.5rem',
              }}
            >
              {seg.features.map((f, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: 'rgba(0,136,242,0.15)',
                      border: '1px solid rgba(0,136,242,0.3)',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.7)',
                    }}
                  >
                    {f}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="tel:0473908514"
              style={{
                display: 'inline-flex',
                background: 'var(--accent)',
                color: 'white',
                padding: '14px 26px',
                borderRadius: '8px',
                fontFamily: 'var(--font-condensed)',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              GET A FREE QUOTE →
            </a>
          </div>
        </motion.div>
      </div>

      {/* ONLY MOBILE SCROLLBAR FIX */}
      <style>{`
        .tabs-scroll {
          display: flex;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          margin-bottom: 3rem;
          overflow-x: auto;

          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .tabs-scroll::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 768px) {
          .who-grid {
            grid-template-columns: 1fr !important;
          }

          .who-grid > div:nth-child(2) {
            order: 1;
          }

          .who-grid > div:nth-child(1) {
            order: 2;
          }
        }
      `}</style>
    </section>
  )
}