import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './ProjectsGallery.module.css'

const GALLERY = [
  {
    id: 'g1',
    src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80',
    label: 'Master Ensuite · Dublin 4',
  },
  {
    id: 'g2',
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    label: 'Stone Wet Room · Dublin 6',
  },
  {
    id: 'g3',
    src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80',
    label: 'Family Bathroom · Co. Dublin',
  },
  {
    id: 'g4',
    src: 'https://images.unsplash.com/photo-1620626011761-996317702149?auto=format&fit=crop&w=800&q=80',
    label: 'Walk-in Shower · Dublin 2',
  },
  {
    id: 'g5',
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    label: 'Freestanding Bath · Dublin 8',
  },
  {
    id: 'g6',
    src: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
    label: 'Guest Shower Room · Dublin 14',
  },
  {
    id: 'g7',
    src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80',
    label: 'Victorian Restoration · Dublin 6',
  },
  {
    id: 'g8',
    src: 'https://images.unsplash.com/photo-1552242986-a4e1b5be32b8?auto=format&fit=crop&w=800&q=80',
    label: 'Bespoke Vanity · Dublin 4',
  },
  {
    id: 'g9',
    src: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=800&q=80',
    label: 'Marble Ensuite · Blackrock',
  },
  {
    id: 'g10',
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    label: 'Cloakroom · Sandymount',
  },
  {
    id: 'g11',
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
    label: 'Rainfall Shower · Ranelagh',
  },
  {
    id: 'g12',
    src: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80',
    label: 'Period Bathroom · Rathmines',
  },
]

export default function ProjectsGallery() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Page banner */}
      <div className={styles.banner}>
        <div className={styles.bannerInner}>
          <Link to="/" className={styles.back}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to home
          </Link>
          <span className="section-label">Portfolio</span>
          <h1 className={`section-title ${styles.title}`}>Our Project Gallery</h1>
          <p className={styles.sub}>
            A curated collection of completed bathroom renovations and restorations across Dublin —
            each one delivered to the same uncompromising standard.
          </p>
        </div>
      </div>

      {/* Masonry grid */}
      <section className={styles.gallery} aria-label="Project photo gallery">
        <div className={styles.masonry}>
          {GALLERY.map(({ id, src, label }) => (
            <figure key={id} className={styles.item}>
              <img src={src} alt={label} loading="lazy" />
              <figcaption className={styles.caption}>{label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className={styles.cta}>
        <p className={styles.ctaText}>Interested in a project like these?</p>
        <Link to="/#contact" className="btn-primary">
          Request a Consultation
        </Link>
      </div>
    </>
  )
}
