import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Driveway Restoration',
    location: 'Baldivis, WA',
    tag: 'CONCRETE',
    before: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    after: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Driveway & Garden Edge',
    location: 'Rockingham, WA',
    tag: 'PAVERS',
    before: 'https://images.unsplash.com/photo-1597006510989-48a8d8b5b0b5?auto=format&fit=crop&w=1200&q=80',
    after: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'House Exterior Wash',
    location: 'Kwinana, WA',
    tag: 'SOFT WASH',
    before: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
    after: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Concrete Path',
    location: 'Mandurah, WA',
    tag: 'SIDEWALK',
    before: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2f45?auto=format&fit=crop&w=1200&q=80',
    after: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
  },
]

const stats = [
  { num: '500+', label: 'JOBS COMPLETED' },
  { num: '100%', label: 'MOBILE SERVICE' },
  { num: '5★', label: 'AVERAGE RATING' },
  { num: '0', label: 'COMPLAINTS' },
]

function SliderCard({ project, index }) {
  const wrapRef = useRef(null)
  const beforeRef = useRef(null)
  const dividerRef = useRef(null)
  const dragging = useRef(false)

  const setPos = (clientX) => {
    const rect = wrapRef.current.getBoundingClientRect()
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100))
    beforeRef.current.style.clipPath = `inset(0 ${100 - pct}% 0 0)`
    dividerRef.current.style.left = `${pct}%`
  }

  useEffect(() => {
    const onMouseMove = (e) => dragging.current && setPos(e.clientX)
    const onMouseUp = () => (dragging.current = false)
    const onTouchMove = (e) => dragging.current && setPos(e.touches[0].clientX)
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
        background: '#fff',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 2px 20px rgba(0,0,0,0.07)',
      }}
    >
      {/* SLIDER */}
      <div
        ref={wrapRef}
        onMouseDown={(e) => {
          dragging.current = true
          setPos(e.clientX)
        }}
        onTouchStart={(e) => {
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
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('${project.after}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

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
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'white',
              boxShadow: '0 2px 12px rgba(0,0,0,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ⟷
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 12,
            left: 12,
            background: 'rgba(0,0,0,0.6)',
            color: 'white',
            padding: '4px 10px',
            fontSize: '11px',
            fontWeight: 800,
          }}
        >
          BEFORE
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 12,
            right: 12,
            background: '#0087F2',
            color: 'white',
            padding: '4px 10px',
            fontSize: '11px',
            fontWeight: 800,
          }}
        >
          AFTER
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{
          padding: '1.1rem 1.4rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-condensed)',
              fontWeight: 800,
              fontSize: '16px',
              letterSpacing: '0.02em',
            }}
          >
            {project.title}
          </h3>
          <div style={{ fontSize: '13px', color: '#888' }}>
            {project.location}
          </div>
        </div>

        <div
          style={{
            padding: '6px 12px',
            borderRadius: '999px',
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '0.12em',
            border: '1px solid rgba(0,135,242,0.35)',
            background:
              'linear-gradient(135deg, rgba(0,135,242,0.15), rgba(0,135,242,0.05))',
            color: '#0087F2',
            textTransform: 'uppercase',
          }}
        >
          {project.tag}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section style={{ background: '#f2f2f0', padding: '7rem 2rem' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>

        {/* HEADER (FIXED) */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div
            style={{
              fontFamily: 'var(--font-condensed)',
              fontSize: '11px',
              letterSpacing: '0.22em',
              color: 'var(--accent)',
              fontWeight: 800,
              marginBottom: '0.75rem',
              textTransform: 'uppercase',
            }}
          >
            — REAL RESULTS
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(44px, 6vw, 72px)',
              lineHeight: 0.92,
              fontWeight: 900,
            }}
          >
            BEFORE <br />
            <span style={{ color: '#0087F2' }}>& AFTER</span>
          </h2>

          <p
            style={{
              marginTop: '1rem',
              fontSize: '15px',
              color: '#666',
              maxWidth: 420,
              lineHeight: 1.6,
            }}
          >
            Real transformations from Perth properties — drag to see the difference.
          </p>
        </div>

        {/* GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 20,
          }}
        >
          {projects.map((p, i) => (
            <SliderCard key={p.title} project={p} index={i} />
          ))}
        </div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={{
            marginTop: '3rem',
            background: '#0b0b0b',
            borderRadius: 18,
            padding: '2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
          }}
        >
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 42, fontWeight: 900, color: '#0087F2' }}>
                {s.num}
              </div>
              <div style={{ fontSize: 11, color: '#aaa', marginTop: 8 }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}