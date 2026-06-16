import styles from './Footer.module.css'

const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Reviews',  href: '#reviews'  },
  { label: 'Contact',  href: '#contact'  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a
              href="#hero"
              className={styles.logo}
              onClick={e => scrollTo(e, '#hero')}
            >
              JK <span>Luxury Bathrooms</span>
            </a>
            <p className={styles.tagline}>
              Premium bathroom renovation and restoration.<br />
              Dublin, Ireland.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className={styles.links} role="list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} onClick={e => scrollTo(e, href)}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.contact}>
            <p className={styles.contactLabel}>Contact</p>
            <a href="mailto:hello@jkluxurybathrooms.ie">hello@jkluxurybathrooms.ie</a>
            <a href="tel:+35301234567">+353 01 234 5678</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {year} JK Luxury Bathrooms. All rights reserved.
          </p>
          <p className={styles.location}>Dublin, Ireland</p>
        </div>
      </div>
    </footer>
  )
}
