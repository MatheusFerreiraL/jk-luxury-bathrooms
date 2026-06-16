import { useState } from 'react'
import styles from './Contact.module.css'

const INITIAL = { name: '', email: '', phone: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm(INITIAL)
  }

  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-heading">
      <div className={styles.inner}>
        <div className={styles.textCol}>
          <span className="section-label">Get in Touch</span>
          <h2 id="contact-heading" className="section-title section-title--light">
            Request a Consultation
          </h2>
          <p className={styles.body}>
            Every project begins with a conversation. Tell us about your bathroom,
            your ideas, and your timeline — and we'll come back to you within one
            business day.
          </p>

          <address className={styles.details}>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon} aria-hidden="true">◎</span>
              <span>Dublin, Ireland</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon} aria-hidden="true">✉</span>
              <a href="mailto:hello@jkluxurybathrooms.ie">hello@jkluxurybathrooms.ie</a>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon} aria-hidden="true">☏</span>
              <a href="tel:+35301234567">+353 01 234 5678</a>
            </div>
          </address>
        </div>

        <div className={styles.formCol}>
          {submitted ? (
            <div className={styles.success} role="alert">
              <span className={styles.successIcon} aria-hidden="true">✓</span>
              <h3>Thank you for reaching out.</h3>
              <p>We'll be in contact within one business day.</p>
              <button
                className={styles.resetBtn}
                onClick={() => setSubmitted(false)}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              className={styles.form}
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
            >
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.ie"
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="phone">Phone Number <span className={styles.optional}>(optional)</span></label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+353 87 000 0000"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your bathroom project — size, current state, and what you have in mind…"
                />
              </div>

              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
