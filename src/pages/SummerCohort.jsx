import { motion } from 'framer-motion'
import {
  FaBriefcase, FaUserTie, FaUniversity, FaMicrophone, FaChartLine, FaNetworkWired,
  FaCheckCircle, FaMapMarkerAlt,
} from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'
import './SummerCohort.css'

const components = [
  { icon: <FaBriefcase />, title: 'Paid Internships', desc: 'Engineering organization placements', color: 'var(--blue)' },
  { icon: <FaUserTie />, title: 'Mentorship', desc: 'One-on-one with professional engineers', color: 'var(--purple)' },
  { icon: <FaUniversity />, title: 'College Visits', desc: 'Louisiana engineering programs', color: 'var(--teal)' },
  { icon: <FaMicrophone />, title: 'Guest Speakers', desc: 'Weekly industry professionals', color: 'var(--orange)' },
  { icon: <FaChartLine />, title: 'Professional Development', desc: 'Leadership workshops & training', color: 'var(--green)' },
  { icon: <FaNetworkWired />, title: 'Networking', desc: 'Engineering professionals & peers', color: 'var(--gold)' },
]

const requirements = [
  'Graduating high school senior',
  'High school in Jefferson Parish or Orleans Parish',
  'Accepted and enrolled at a Louisiana college/university',
  'Planning to major in an engineering discipline',
]

const timeline = [
  { week: 1, title: 'Orientation & Foundation', color: 'var(--blue)' },
  { week: 2, title: 'Industry Immersion', color: 'var(--purple)' },
  { week: 3, title: 'College Exploration', color: 'var(--teal)' },
  { week: 4, title: 'Leadership Development', color: 'var(--orange)' },
  { week: 5, title: 'Technical Deep Dive', color: 'var(--green)' },
  { week: 6, title: 'Showcase & Celebration', color: 'var(--gold)' },
]

export default function SummerCohort() {
  return (
    <section id="cohort" className="section cohort-section">
      <div className="container">
        <AnimatedSection direction="up">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <span className="section-label">6-Week Program</span>
            <h2 className="section-title">Summer Engineering <span className="text-gold">Cohort</span></h2>
            <div className="gold-line" style={{ margin: '0 auto 16px' }} />
            <p className="section-desc" style={{ margin: '0 auto' }}>
              A structured leadership and career development experience preparing seniors for college engineering programs.
            </p>
          </div>
        </AnimatedSection>

        {/* Components Grid */}
        <div className="cohort-grid">
          {components.map((c, i) => (
            <AnimatedSection key={i} direction="up" delay={i * 0.07}>
              <div className="cohort-card glass-card">
                <div className="cohort-card__icon" style={{ '--accent': c.color }}>{c.icon}</div>
                <div>
                  <h3 className="cohort-card__title">{c.title}</h3>
                  <p className="cohort-card__desc">{c.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Timeline + Requirements side by side */}
        <div className="cohort-bottom">
          <AnimatedSection direction="left" delay={0.1}>
            <div className="cohort-timeline glass-card">
              <h3 className="cohort-timeline__title">Week-by-Week</h3>
              <div className="cohort-timeline__list">
                {timeline.map((t) => (
                  <div key={t.week} className="cohort-timeline__item">
                    <span className="cohort-timeline__badge" style={{ background: t.color }}>{t.week}</span>
                    <span className="cohort-timeline__label">{t.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="cohort-reqs glass-card">
              <h3 className="cohort-reqs__title">Eligibility</h3>
              <div className="cohort-reqs__list">
                {requirements.map((r, i) => (
                  <motion.div key={i} className="cohort-reqs__item"
                    initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <FaCheckCircle className="cohort-reqs__check" />
                    <span>{r}</span>
                  </motion.div>
                ))}
              </div>
              <div className="cohort-reqs__location">
                <FaMapMarkerAlt />
                <span>Greater New Orleans metropolitan area</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
