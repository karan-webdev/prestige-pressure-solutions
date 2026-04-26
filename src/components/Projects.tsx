import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import before_2 from '../assets/before_2.webp'
import after_2 from '../assets/after_2.webp'
import after_3 from '../assets/after_3.png'
import before_3 from '../assets/before_3.png'
import after_4 from '../assets/after_4.jpg'
import before_4 from '../assets/before_4.jpg'

const projects = [
  {
    title: 'Courtyard Paver Restoration',
    location: 'Location, WA',
    tag: 'PAVERS',
    before:
      'https://scontent.fmel5-1.fna.fbcdn.net/v/t39.30808-6/584845031_122099415825129244_2461757692661934440_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=_W_bcf5qkpQQ7kNvwGBlNmq&_nc_oc=AdpainYthFKoyTRcRF-F7MLy_0PI113cEBNXzThynMz_G5YK7oefVnYKJcayU1GcpHM&_nc_zt=23&_nc_ht=scontent.fmel5-1.fna&_nc_gid=VD6WfzkW7Bb24Lr2qF5NBQ&oh=00_Af3Q4M2pwS-dIT6DBBOUeVQHSrBvxrtfrMyBQHk-IGmleA&oe=69F0CEFE',
    after:
      'https://scontent.fmel5-1.fna.fbcdn.net/v/t39.30808-6/585916532_122099415819129244_3791046001047971901_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=zLrM3q2tsRsQ7kNvwExO3XK&_nc_oc=Adr0t92UFdGBq4ZM8HKN94wSGW94X3RKD7D0BGeD5dkXfk0a5fRsaU62PQYDdbHV7TM&_nc_zt=23&_nc_ht=scontent.fmel5-1.fna&_nc_gid=Xyggg2lp4CvtiSx9hzueRA&oh=00_Af03x0vQl6LUj84QCXXU6Go_m8tbyStCP7Xprs_dvQK7ew&oe=69F0E6A9',
  },
  {
    title: 'Patio & Pathway Refurbishment',
    location: 'Location, WA',
    tag: 'PAVERS',
    before: before_2,
    after: after_2,
  },
  {
    title: 'Backyard Brick Cleaning',
    location: 'Location, WA',
    tag: 'BRICK',
    before: before_3,
    after: after_3,
  },
  {
    title: 'Courtyard Rejuvenation',
    location: 'Location, WA',
    tag: 'PAVERS',
    before: before_4,
    after: after_4,
  },
]

const stats = [
  { num: '500+', label: 'JOBS COMPLETED' },
  { num: '100%', label: 'MOBILE SERVICE' },
  { num: '5★', label: 'AVERAGE RATING' },
  { num: '0', label: 'COMPLAINTS' },
]

type Project = {
  title: string
  location: string
  tag: string
  before: string
  after: string
}

function SliderCard({ project, index }: { project: Project; index: number }) {
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const beforeRef = useRef<HTMLDivElement | null>(null)
  const dividerRef = useRef<HTMLDivElement | null>(null)
  const dragging = useRef(false)

  // ✅ CLAMPED % (35–65)
  const setPct = (pct: number) => {
    if (!beforeRef.current || !dividerRef.current) return

    const clamped = Math.max(0, Math.min(100, pct))
    beforeRef.current.style.clipPath = `inset(0 ${100 - clamped}% 0 0)`
    dividerRef.current.style.left = `${clamped}%`
  }

  const setPos = (clientX: number) => {
    if (!wrapRef.current) return
    const rect = wrapRef.current.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPct(pct)
  }

  // 🔥 AUTO PREVIEW (centered range)
  useEffect(() => {
    let pct = 35

    const interval = setInterval(() => {
      pct += 1.2
      setPct(pct)

      if (pct >= 65) clearInterval(interval)
    }, 12)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => dragging.current && setPos(e.clientX)
    const onMouseUp = () => (dragging.current = false)
    const onTouchMove = (e: TouchEvent) => dragging.current && setPos(e.touches[0].clientX)
    const onTouchEnd = () => (dragging.current = false)

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('touchmove', onTouchMove)
    window.addEventListener('touchend', onTouchEnd)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
      }}
    >
      <div
        ref={wrapRef}
        onMouseDown={(e: React.MouseEvent) => {
          dragging.current = true
          setPos(e.clientX)
        }}
        onTouchStart={(e: React.TouchEvent) => {
          dragging.current = true
          setPos(e.touches[0].clientX)
        }}
        style={{
          position: 'relative',
          height: '260px',
          overflow: 'hidden',
          cursor: 'ew-resize',
          userSelect: 'none',
        }}
      >
        {/* AFTER */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('${project.after}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* BEFORE */}
        <div
          ref={beforeRef}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('${project.before}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            clipPath: 'inset(0 50% 0 0)',
          }}
        />

        {/* GRADIENT */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
            zIndex: 1,
          }}
        />

        {/* DIVIDER */}
        <div
          ref={dividerRef}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '50%',
            width: '2px',
            background: 'white',
            transform: 'translateX(-50%)',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: '#0087F2',
              color: '#fff',
              fontWeight: 900,
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
            }}
          >
            ⇆
          </div>
        </div>

        {/* LABELS */}
        <div style={{
          position: 'absolute',
          top: 12,
          left: 12,
          background: '#000',
          color: '#fff',
          padding: '6px 12px',
          fontSize: '12px',
          fontWeight: 900,
          letterSpacing: '0.15em',
          zIndex: 2
        }}>
          BEFORE
        </div>

        <div style={{
          position: 'absolute',
          top: 12,
          right: 12,
          background: '#0087F2',
          color: '#fff',
          padding: '6px 12px',
          fontSize: '12px',
          fontWeight: 900,
          letterSpacing: '0.15em',
          zIndex: 2
        }}>
          AFTER
        </div>

        {/* TEXT */}
        <div style={{
          position: 'absolute',
          bottom: 16,
          left: 16,
          zIndex: 2,
          color: 'white'
        }}>
          <div style={{
            fontSize: '14px',
            fontWeight: 800,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-condensed)',
          }}>
            {project.title}
          </div>

          <div style={{
            fontSize: '12px',
            opacity: 0.8
          }}>
            {project.location}
          </div>
        </div>

        {/* DRAG */}
        <div style={{
          position: 'absolute',
          top: 12,
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '11px',
          color: 'white',
          background: 'rgba(0,0,0,0.6)',
          padding: '4px 10px',
          borderRadius: 999,
          zIndex: 2
        }}>
          DRAG
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ background: '#f2f2f0', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        
        <div style={{
          fontFamily: 'var(--font-condensed)',
          fontSize: '11px',
          letterSpacing: '0.22em',
          color: 'var(--accent)',
          fontWeight: 800,
          marginBottom: '0.75rem',
          textTransform: 'uppercase',
        }}>
          — OUR WORK
        </div>

        <div style={{ marginBottom: '3.5rem' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(44px, 6vw, 72px)',
            lineHeight: 0.92,
            fontWeight: 900,
          }}>
            BEFORE <br />
            <span style={{ color: '#0087F2' }}>& AFTER</span>
          </h2>

          <p style={{
            maxWidth: '560px',
            margin: '1.2rem 0 0',
            color: '#666',
            fontSize: '15px',
            lineHeight: 1.6,
            textAlign: 'left'
          }}>
            Real transformations from recent jobs across WA showcasing the quality, detail, and finish we deliver on every project.
          </p>
        </div>

        <div
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 14,
          }}
        >
          {projects.map((p, i) => (
            <SliderCard key={p.title} project={p} index={i} />
          ))}
        </div>

        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={{
            marginTop: '3.5rem',
            background: '#121212',
            borderRadius: 18,
            padding: '2.5rem 2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
          }}
        >
          {stats.map((s, i) => (
            <div key={s.label} className="stat-item" style={{ textAlign: 'center', position: 'relative' }}>
              {i !== stats.length - 1 && <div className="stat-divider" />}
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .stat-divider {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 60%;
          background: rgba(255,255,255,0.12);
        }

        .stat-num {
          font-size: 44px;
          font-weight: 900;
          color: #0087F2;
        }

        .stat-label {
          font-size: 11px;
          color: rgba(255,255,255,0.55);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            row-gap: 3rem;
          }

          .stat-item {
            padding: 0.5rem 0;
          }

          .stat-num {
            font-size: 34px;
            margin-bottom: 6px;
          }

          .stat-label {
            font-size: 10px;
            letter-spacing: 0.05em;
          }

          .stat-divider {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}