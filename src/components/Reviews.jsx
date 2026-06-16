import { useState } from 'react'
import styles from './Reviews.module.css'

const REVIEWS = [
  {
    name: 'Siobhán M.',
    location: 'Ranelagh, Dublin 6',
    rating: 5,
    text: 'JK transformed our dated ensuite into something we genuinely look forward to using every morning. The tile work is flawless, and they finished ahead of schedule. Highly recommend to anyone in Dublin looking for quality without compromise.',
  },
  {
    name: 'Ciarán & Aoife B.',
    location: 'Blackrock, Co. Dublin',
    rating: 5,
    text: 'We had our main bathroom and a guest shower room renovated at the same time. The team were professional, tidy, and the communication throughout was excellent. The result is exactly what we discussed at the outset — no surprises.',
  },
  {
    name: 'Declan F.',
    location: 'Clontarf, Dublin 3',
    rating: 5,
    text: 'Our Victorian terrace needed careful handling, and JK clearly understood that. They matched period details where needed and introduced modern elements that feel completely at home. The craftsmanship is evident in every finish.',
  },
  {
    name: 'Rachel O\'Sullivan',
    location: 'Sandymount, Dublin 4',
    rating: 5,
    text: 'From the initial consultation to the final walkthrough, the experience was smooth and professional. The vanity unit they built is bespoke to our space and it\'s genuinely the focal point of the room now.',
  },
  {
    name: 'Fionnuala T.',
    location: 'Donnybrook, Dublin 4',
    rating: 5,
    text: 'I was nervous about the disruption a full renovation would cause, but the team were respectful of our home throughout. They covered everything, cleaned up daily, and the finished bathroom is beyond what I imagined.',
  },
  {
    name: 'Patrick & Mary K.',
    location: 'Drumcondra, Dublin 9',
    rating: 5,
    text: 'We\'ve used other tradespeople for various jobs over the years, but the level of care and precision JK brought to our bathroom is in a different league. Every detail is considered, nothing was rushed.',
  },
  {
    name: 'Niamh C.',
    location: 'Stillorgan, Co. Dublin',
    rating: 5,
    text: 'The stone they sourced for our wet room is just stunning. They walked us through every material choice and were honest about what would last and look best long-term. That kind of straightforward advice is hard to find.',
  },
  {
    name: 'Brendan O\'Reilly',
    location: 'Cabinteely, Dublin 18',
    rating: 5,
    text: 'Had our family bathroom updated — new shower enclosure, tiles, and lighting. The difference is remarkable for what seemed like a modest scope. JK clearly knows how to make every square foot count.',
  },
]

const VISIBLE_INITIAL = 3

const Stars = ({ count }) => (
  <span className={styles.stars} aria-label={`${count} out of 5 stars`}>
    {'★'.repeat(count)}
  </span>
)

export default function Reviews() {
  const [expanded, setExpanded] = useState(false)

  const visible = REVIEWS.slice(0, VISIBLE_INITIAL)
  const extra   = REVIEWS.slice(VISIBLE_INITIAL)

  return (
    <section id="reviews" className={styles.reviews} aria-labelledby="reviews-heading">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className="section-label">Client Testimonials</span>
          <h2 id="reviews-heading" className="section-title">
            What Our Clients Say
          </h2>
        </div>

        <ul className={styles.grid} role="list">
          {visible.map(({ name, location, rating, text }) => (
            <li key={name} className={styles.card}>
              <Stars count={rating} />
              <blockquote className={styles.quote}>
                <p>{text}</p>
              </blockquote>
              <footer className={styles.author}>
                <span className={styles.name}>{name}</span>
                <span className={styles.location}>{location}</span>
              </footer>
            </li>
          ))}
        </ul>

        {/* Expandable extra reviews */}
        <div
          className={`${styles.extraWrap} ${expanded ? styles.extraVisible : ''}`}
          aria-hidden={!expanded}
        >
          <ul className={`${styles.grid} ${styles.extraGrid}`} role="list">
            {extra.map(({ name, location, rating, text }) => (
              <li key={name} className={styles.card}>
                <Stars count={rating} />
                <blockquote className={styles.quote}>
                  <p>{text}</p>
                </blockquote>
                <footer className={styles.author}>
                  <span className={styles.name}>{name}</span>
                  <span className={styles.location}>{location}</span>
                </footer>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.toggle}>
          <button
            className={`btn-secondary btn-secondary--dark`}
            onClick={() => setExpanded(e => !e)}
            aria-expanded={expanded}
          >
            {expanded ? 'Show fewer reviews' : `Show ${extra.length} more reviews`}
          </button>
        </div>
      </div>
    </section>
  )
}
