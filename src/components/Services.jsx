import styles from './Services.module.css'

const SERVICES = [
  {
    icon: '◈',
    title: 'Full Bathroom Renovation',
    description:
      'Complete end-to-end transformations — from structural work and plumbing to the final finish. We manage every trade so you don\'t have to.',
  },
  {
    icon: '◇',
    title: 'Luxury Bathroom Restoration',
    description:
      'Breathing new life into existing bathrooms while preserving character. Ideal for period homes and listed properties across Dublin.',
  },
  {
    icon: '▦',
    title: 'Tile & Stone Finishing',
    description:
      'Precision installation of natural stone, porcelain, and handmade tiles. Every grout line is deliberate; every surface, immaculate.',
  },
  {
    icon: '◻',
    title: 'Walk-in Showers',
    description:
      'Bespoke frameless and semi-frameless enclosures with premium drainage solutions, rainfall heads, and hand-selected stone bases.',
  },
  {
    icon: '◈',
    title: 'Bespoke Vanity Installation',
    description:
      'Custom-built and hand-finished vanity units designed around your space, storage needs, and aesthetic — fitted to perfection.',
  },
  {
    icon: '◉',
    title: 'Modern Lighting & Fixtures',
    description:
      'Architectural lighting plans and premium fixture specification — brass, brushed nickel, matte black — curated to complement the overall design.',
  },
]

export default function Services() {
  return (
    <section id="services" className={styles.services} aria-labelledby="services-heading">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className="section-label">What We Do</span>
          <h2 id="services-heading" className="section-title section-title--light">
            Our Services
          </h2>
          <p className={styles.intro}>
            Every service we offer is delivered with the same standard of care —
            premium materials, experienced tradespeople, and a finish that speaks for itself.
          </p>
        </div>

        <ul className={styles.grid} role="list">
          {SERVICES.map(({ icon, title, description }) => (
            <li key={title} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">{icon}</span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{description}</p>
              <span className={styles.accentLine} aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
