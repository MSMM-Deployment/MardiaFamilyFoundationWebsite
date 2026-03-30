import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaEnvelope, FaMapMarkerAlt, FaChevronDown, FaQuestionCircle, FaArrowRight,
} from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'
import './Contact.css'

const faqData = [
  { q: 'Who is eligible for the program?', a: 'Graduating high school seniors from Jefferson Parish or Orleans Parish planning to major in engineering at a Louisiana college or university.' },
  { q: 'Is the summer cohort paid?', a: 'Yes, the program includes paid internship opportunities during the summer cohort experience.' },
  { q: 'What engineering disciplines are covered?', a: 'Civil, Mechanical, Electrical, Environmental Engineering, and Artificial Intelligence.' },
  { q: 'Do I need to be accepted to a college before applying?', a: 'Yes, students must be accepted and enrolled for the fall semester at a Louisiana college or university.' },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
}

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <section id="contact" className="section section-alt contact-section">
      <div className="container">
        <AnimatedSection direction="up">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <span className="section-label">Contact &amp; FAQ</span>
            <h2 className="section-title">Get in <span className="text-gold">Touch</span></h2>
            <div className="gold-line" style={{ margin: '0 auto 16px' }} />
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Have questions about the Mardia Family Foundation – Future Engineers program? Find answers below or reach out directly.
            </p>
          </div>
        </AnimatedSection>

        <div className="contact-grid">
          {/* Contact Info + CTA */}
          <AnimatedSection direction="left" delay={0.1}>
            <div className="contact-info glass-card">
              <h3>Contact Information</h3>
              <div className="contact-info__items">
                <div className="contact-info__item">
                  <div className="contact-info__icon-wrap"><FaEnvelope /></div>
                  <div>
                    <span className="contact-info__label">Email</span>
                    <a href="mailto:dmorton@msmmeng.com" className="contact-info__value">dmorton@msmmeng.com</a>
                  </div>
                </div>
                <div className="contact-info__item">
                  <div className="contact-info__icon-wrap"><FaMapMarkerAlt /></div>
                  <div>
                    <span className="contact-info__label">Location</span>
                    <span className="contact-info__value">4508 Clearview Pkwy, Metairie, LA 70006</span>
                  </div>
                </div>
              </div>
              <p className="contact-info__note">
                Whether you&rsquo;re a student, parent, educator, or community partner — we&rsquo;d love to hear from you.
              </p>
              <button onClick={() => scrollTo('apply')} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
                Go to Application <FaArrowRight size={13} />
              </button>
            </div>
          </AnimatedSection>

          {/* FAQ */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="faq glass-card">
              <h3>Frequently Asked Questions</h3>
              {faqData.map((item, i) => (
                <div key={i} className={`faq__item ${openFaq === i ? 'faq__item--open' : ''}`}>
                  <button className="faq__question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <FaQuestionCircle className="faq__q-icon" />
                    <span>{item.q}</span>
                    <motion.span className="faq__chevron" animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <FaChevronDown size={12} />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div className="faq__answer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                        <p>{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
