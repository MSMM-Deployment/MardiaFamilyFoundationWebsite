import { motion } from 'framer-motion'
import { FaQuoteLeft, FaGraduationCap, FaBuilding } from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'
import demondPhoto from '../assets/demond.png'
import './Welcome.css'

export default function Welcome() {
  return (
    <section id="about" className="section about-section">
      <div className="about-bg-pattern" aria-hidden="true" />
      <div className="container">
        <AnimatedSection direction="up">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <span className="section-label">About the Program</span>
            <h2 className="section-title">Meet Our <span className="text-gold">Director</span></h2>
            <div className="gold-line" style={{ margin: '0 auto' }} />
          </div>
        </AnimatedSection>

        <div className="director-card glass-card">
          {/* Left — Photo + Identity */}
          <AnimatedSection direction="left" delay={0.1}>
            <div className="director-card__left">
              <div className="director-card__photo-wrap">
                <div className="director-card__photo-ring" />
                <img src={demondPhoto} alt="Demond Morton" className="director-card__photo" />
              </div>
              <h3 className="director-card__name">Demond Morton</h3>
              <p className="director-card__role">Program Director</p>

              <div className="director-card__badges">
                <div className="director-card__badge">
                  <FaGraduationCap />
                  <span>Master of Education (M.Ed.)</span>
                </div>
                <div className="director-card__badge">
                  <FaBuilding />
                  <span>B.A. Public Administration</span>
                </div>
              </div>

              {/* Quote on the left under badges */}
              <div className="director-card__quote">
                <motion.div className="director-card__quote-icon"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
                  <FaQuoteLeft />
                </motion.div>
                <blockquote>
                  &ldquo;Investing in our students today will lead to innovation,
                  leadership, and progress tomorrow.&rdquo;
                </blockquote>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Bio */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="director-card__right">
              <div className="director-card__bio-label">About Demond</div>
              <div className="director-card__divider" />
              <p>
                As Program Director at MSMM, Demond Morton leads the development, coordination,
                and implementation of programs that connect education, workforce readiness, and
                community impact. He oversees strategic initiatives designed to expose students
                and emerging professionals to opportunities in STEM, engineering, and career development.
              </p>
              <p>
                He works closely with schools, community partners, industry leaders, and
                stakeholders to build meaningful partnerships, manage program logistics, and
                create pathways that prepare the next generation for success.
              </p>
              <p>
                His leadership helps ensure that MSMM&rsquo;s programs are impactful, organized,
                and aligned with the company&rsquo;s mission of strengthening communities through
                innovation, outreach, and opportunity.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
