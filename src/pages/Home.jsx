import { useContext } from 'react'
import { motion } from 'framer-motion'
import { FaUsers, FaBriefcase, FaUniversity, FaGraduationCap, FaArrowRight } from 'react-icons/fa'
import { ThemeContext } from '../App'
import AnimatedSection from '../components/AnimatedSection'
import logoLight from '../assets/MFFlogo.png'
import logoDark from '../assets/MMFlogo_dark.png'
import './Home.css'

const features = [
  { icon: <FaUsers />, title: 'One-on-One Mentorship', desc: 'Paired with professional engineers for academic planning, career development, and personal growth.', color: 'var(--blue)' },
  { icon: <FaBriefcase />, title: 'Paid Internships', desc: 'Real-world engineering experience through paid placements with industry-leading organizations.', color: 'var(--purple)' },
  { icon: <FaUniversity />, title: 'College Campus Visits', desc: 'Tour engineering programs at top Louisiana colleges to find the perfect fit for your future.', color: 'var(--teal)' },
  { icon: <FaGraduationCap />, title: 'Scholarship Support', desc: 'Financial assistance and guidance to make your engineering education affordable and accessible.', color: 'var(--green)' },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
}

export default function Home() {
  const { theme } = useContext(ThemeContext)
  const logo = theme === 'dark' ? logoDark : logoLight
  return (
    <div id="home">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__glow" aria-hidden="true" />

        <div className="container hero__content">
          <motion.img
            src={logo}
            alt="Mardia Family Foundation"
            className="hero__logo"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />

          <motion.p className="hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}>
            Future Engineers &ndash; Powered by STEM
          </motion.p>

          <motion.p className="hero__desc"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}>
            Mentoring and empowering high school seniors in New Orleans &amp; Jefferson Parish
            to launch engineering careers at Louisiana&rsquo;s top universities.
          </motion.p>

          <motion.div className="hero__actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}>
            <button onClick={() => scrollTo('programs')} className="btn btn-primary">
              Explore Programs <FaArrowRight size={13} />
            </button>
            <button onClick={() => scrollTo('apply')} className="btn btn-outline">
              Apply Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section features-section" id="features">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="text-center" style={{ marginBottom: 56 }}>
              <span className="section-label">What We Offer</span>
              <h2 className="section-title">Everything You Need to <span className="text-gold">Succeed</span></h2>
              <div className="gold-line" style={{ margin: '0 auto 16px' }} />
              <p className="section-desc" style={{ margin: '0 auto' }}>
                A comprehensive support system designed to take you from high school to a thriving engineering career.
              </p>
            </div>
          </AnimatedSection>

          <div className="features-grid">
            {features.map((f, i) => (
              <AnimatedSection key={i} direction="up" delay={i * 0.1}>
                <div className="feature-card glass-card">
                  <div className="feature-card__icon" style={{ '--accent': f.color }}>
                    {f.icon}
                  </div>
                  <h3 className="feature-card__title">{f.title}</h3>
                  <p className="feature-card__desc">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
