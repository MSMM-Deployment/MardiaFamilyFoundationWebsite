import { motion } from 'framer-motion'
import { FaRoad, FaCogs, FaBolt, FaLeaf, FaRobot } from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'
import './StemProgram.css'

const disciplines = [
  { icon: <FaRoad />, title: 'Civil Engineering', desc: 'Designing roads, bridges, and infrastructure', color: 'var(--blue)' },
  { icon: <FaCogs />, title: 'Mechanical Engineering', desc: 'Developing machines, robotics, and mechanical systems', color: 'var(--orange)' },
  { icon: <FaBolt />, title: 'Electrical Engineering', desc: 'Creating electrical systems that power modern technology', color: 'var(--purple)' },
  { icon: <FaLeaf />, title: 'Environmental Engineering', desc: 'Solutions that protect natural resources', color: 'var(--green)' },
  { icon: <FaRobot />, title: 'Artificial Intelligence', desc: 'Data, automation, and intelligent systems', color: 'var(--teal)' },
]

const pipeline = [
  { num: '01', title: 'Early Exposure', desc: 'Introduction to engineering and STEM careers' },
  { num: '02', title: 'Mentorship & Prep', desc: 'One-on-one guidance with professional engineers' },
  { num: '03', title: 'Summer Cohort', desc: '6-week immersive engineering experience' },
  { num: '04', title: 'Scholarship Support', desc: 'Financial aid for engineering education' },
  { num: '05', title: 'Future Leadership', desc: 'Building the next generation of STEM leaders' },
]

export default function StemProgram() {
  return (
    <section id="programs" className="section section-alt programs-section">
      <div className="container">
        <AnimatedSection direction="up">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <span className="section-label">STEM Program</span>
            <h2 className="section-title">Engineering &amp; Technology <span className="text-gold">Focus Areas</span></h2>
            <div className="gold-line" style={{ margin: '0 auto 16px' }} />
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Preparing the next generation of engineers through exposure to key STEM disciplines and a structured 5-stage pipeline.
            </p>
          </div>
        </AnimatedSection>

        {/* Disciplines */}
        <div className="disciplines-grid">
          {disciplines.map((d, i) => (
            <AnimatedSection key={d.title} direction="up" delay={i * 0.08}>
              <motion.div className="discipline-card glass-card" whileHover={{ y: -4, transition: { duration: 0.2 } }}>
                <div className="discipline-card__icon" style={{ '--accent': d.color }}>
                  {d.icon}
                </div>
                <h3 className="discipline-card__title">{d.title}</h3>
                <p className="discipline-card__desc">{d.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Pipeline */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="pipeline">
            <h3 className="pipeline__heading">5-Stage <span className="text-gold">Pipeline</span></h3>
            <div className="pipeline__track">
              {pipeline.map((step, i) => (
                <div key={i} className="pipeline__step">
                  <span className="pipeline__num">{step.num}</span>
                  <div>
                    <h4 className="pipeline__title">{step.title}</h4>
                    <p className="pipeline__desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
