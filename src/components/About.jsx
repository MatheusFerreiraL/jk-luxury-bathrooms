import styles from './About.module.css'

const STATS = [
  { value: '15+', label: 'Years of Experience' },
  { value: '300+', label: 'Projects Completed' },
  { value: '100%', label: 'Client Satisfaction' },
]

export default function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-heading">
      <div className={styles.inner}>
        <div className={styles.imageCol}>
          <div className={styles.imageFrame}>
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80"
              alt="Elegant marble bathroom with freestanding bath and brass fixtures"
              className={styles.image}
            />
            <div className={styles.accentBorder} />
          </div>
        </div>

        <div className={styles.textCol}>
          <span className="section-label">About Us</span>
          <h2 id="about-heading" className="section-title">
            Precision and Elegance,<br />in Every Detail
          </h2>
          <p className={styles.body}>
            JK Luxury Bathrooms is a Dublin-based renovation and restoration
            specialist with over fifteen years of experience transforming bathrooms
            into refined, functional spaces. We work exclusively with premium
            materials — natural stone, hand-selected tiles, bespoke joinery —
            and partner with the finest fixture suppliers to ensure every finish
            meets the highest standard.
          </p>
          <p className={styles.body}>
            From full bathroom transformations to careful restorations of period
            properties, our team approaches every project with the same commitment:
            meticulous attention to detail, clear communication, and a result that
            exceeds expectations. We take pride in delivering on time and leaving
            your home exactly as we found it — only with a stunning new bathroom.
          </p>

          <div className={styles.stats}>
            {STATS.map(({ value, label }) => (
              <div key={label} className={styles.stat}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
