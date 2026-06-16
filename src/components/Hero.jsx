import styles from './Hero.module.css'

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className={styles.hero} aria-label="Hero">
      <div className={styles.overlay} />
      <div className={styles.content}>
        <span className="section-label">Dublin's Premier Bathroom Specialists</span>
        <h1 className={styles.heading}>
          Bathrooms Crafted<br />for the Extraordinary
        </h1>
        <p className={styles.sub}>
          We design and deliver luxury bathroom renovations across Dublin —
          combining premium materials, precise craftsmanship, and refined aesthetics
          to create spaces of lasting elegance.
        </p>
        <div className={styles.actions}>
          <button
            className="btn-primary"
            onClick={() => scrollTo('#contact')}
          >
            Request a Consultation
          </button>
          <button
            className="btn-secondary"
            onClick={() => scrollTo('#services')}
          >
            Explore Our Services
          </button>
        </div>
      </div>
      <button
        className={styles.scrollCue}
        onClick={() => scrollTo('#about')}
        aria-label="Scroll to about section"
      >
        <span className={styles.scrollLine} />
      </button>
    </section>
  )
}
