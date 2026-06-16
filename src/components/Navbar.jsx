import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Reviews',  href: '#reviews'  },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/' + href)
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav} aria-label="Main navigation">
        <a href="/" className={styles.logo} onClick={e => handleNavClick(e, '#hero')}>
          JK <span>Luxury Bathrooms</span>
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`} role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={e => handleNavClick(e, href)}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className={styles.ctaLink}
              onClick={e => handleNavClick(e, '#contact')}
            >
              Get a Quote
            </a>
          </li>
        </ul>

        <button
          className={styles.burger}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}
