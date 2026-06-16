import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Projects.module.css'

const PROJECTS = [
  {
    id: 'p1',
    number: '01',
    title: 'Sandymount Master Bathroom',
    type: 'Full Renovation',
    location: 'Sandymount, Dublin 4',
    year: '2024',
    description:
      'A tired mid-century ensuite was reimagined from the ground up — new wet-room layout, book-matched marble wall panels, bespoke cabinetry, and integrated underfloor heating throughout. The result is a calm, spa-like retreat at the heart of the home.',
    before: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=900&q=80',
    after:  'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'p2',
    number: '02',
    title: 'Ranelagh Victorian Restoration',
    type: 'Restoration & Tile Work',
    location: 'Ranelagh, Dublin 6',
    year: '2024',
    description:
      'A sensitive restoration of a Victorian-era bathroom in a protected period home. Original cast iron fixtures were retained and refinished; handmade encaustic floor tiles were sourced to period specification and laid by our own craftsmen.',
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
    after:  'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'p3',
    number: '03',
    title: 'Ballsbridge Wet Room',
    type: 'Walk-in Shower Installation',
    location: 'Ballsbridge, Dublin 4',
    year: '2023',
    description:
      'A cramped shower cubicle was stripped back and replaced with an open, fully-tiled wet room featuring linear drainage, a ceiling-mounted rainfall head, and ribbed natural stone feature walls with a seamless glass partition.',
    before: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
    after:  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80',
  },
]

function BeforeAfterSlider({ before, after, title }) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef(null)
  const dragging = useRef(false)

  useEffect(() => {
    const calcPos = (clientX) => {
      if (!containerRef.current) return 50
      const { left, width } = containerRef.current.getBoundingClientRect()
      return Math.min(100, Math.max(0, ((clientX - left) / width) * 100))
    }

    const onMove = (e) => {
      if (!dragging.current) return
      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      setPos(calcPos(clientX))
    }
    const onUp = () => { dragging.current = false }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onUp)
    }
  }, [])

  const startInteraction = (e) => {
    dragging.current = true
    if (!containerRef.current) return
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const { left, width } = containerRef.current.getBoundingClientRect()
    setPos(Math.min(100, Math.max(0, ((clientX - left) / width) * 100)))
  }

  return (
    <div
      ref={containerRef}
      className={styles.slider}
      onMouseDown={startInteraction}
      onTouchStart={startInteraction}
      role="img"
      aria-label={`Before and after comparison: ${title}`}
    >
      <img
        src={before}
        className={styles.imgBase}
        alt={`${title} — before renovation`}
        draggable={false}
      />
      <img
        src={after}
        className={styles.imgTop}
        style={{ clipPath: `inset(0 ${(100 - pos).toFixed(2)}% 0 0)` }}
        alt={`${title} — after renovation`}
        draggable={false}
      />

      <div className={styles.divider} style={{ left: `${pos.toFixed(2)}%` }}>
        <button
          className={styles.handle}
          onMouseDown={(e) => { e.stopPropagation(); dragging.current = true }}
          onTouchStart={(e) => { e.stopPropagation(); dragging.current = true }}
          aria-label="Drag to compare before and after renovation"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M9 18l-6-6 6-6M15 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <span
        className={`${styles.badge} ${styles.badgeAfter}`}
        style={{ opacity: pos > 12 ? 1 : 0 }}
      >
        After
      </span>
      <span
        className={`${styles.badge} ${styles.badgeBefore}`}
        style={{ opacity: pos < 88 ? 1 : 0 }}
      >
        Before
      </span>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className={styles.projects} aria-labelledby="projects-heading">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className="section-label">Our Work</span>
          <h2 id="projects-heading" className="section-title">
            Completed Projects
          </h2>
          <p className={styles.intro}>
            A selection of recent transformations carried out across Dublin.
            Drag the slider to see the full extent of each renovation.
          </p>
        </div>

        <div className={styles.list}>
          {PROJECTS.map((project, i) => (
            <article
              key={project.id}
              className={`${styles.project} ${i % 2 === 1 ? styles.reversed : ''}`}
            >
              <div className={styles.sliderWrapper}>
                <BeforeAfterSlider
                  before={project.before}
                  after={project.after}
                  title={project.title}
                />
              </div>

              <div className={styles.info}>
                <span className={styles.number} aria-hidden="true">{project.number}</span>
                <span className="section-label">{project.type}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <dl className={styles.meta}>
                  <div>
                    <dt>Location</dt>
                    <dd>{project.location}</dd>
                  </div>
                  <div>
                    <dt>Completed</dt>
                    <dd>{project.year}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.seeMore}>
          <Link to="/projects" className="btn-primary">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}
