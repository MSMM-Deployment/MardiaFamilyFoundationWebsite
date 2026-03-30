import { FaDollarSign, FaGraduationCap, FaHandHoldingHeart } from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'
import './Scholarship.css'

const impacts = [
  { icon: <FaDollarSign />, title: 'Reduce Financial Barriers', desc: 'Helping cover costs so students can focus on their engineering education without financial stress.', color: 'var(--green)' },
  { icon: <FaGraduationCap />, title: 'Support Academic Journey', desc: 'Resources and support throughout your college engineering program from freshman year onward.', color: 'var(--blue)' },
  { icon: <FaHandHoldingHeart />, title: 'Build Future Leaders', desc: "Investing in students who will shape Louisiana's future through engineering innovation.", color: 'var(--purple)' },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
}

export default function Scholarship() {
  return (
    <section id="scholarship" className="section section-alt scholarship-section">
      <div className="container">
        <AnimatedSection direction="up">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <span className="section-label">Scholarship Support</span>
            <h2 className="section-title">Investing in Future <span className="text-gold">Engineers</span></h2>
            <div className="gold-line" style={{ margin: '0 auto 16px' }} />
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Students accepted into engineering programs at Louisiana colleges may receive scholarship support
              to reduce financial barriers and support their academic journey.
            </p>
          </div>
        </AnimatedSection>

        <div className="impact-grid">
          {impacts.map((item, i) => (
            <AnimatedSection key={i} direction="up" delay={i * 0.12}>
              <div className="impact-card glass-card">
                <div className="impact-card__icon" style={{ '--accent': item.color }}>
                  {item.icon}
                </div>
                <h3 className="impact-card__title">{item.title}</h3>
                <p className="impact-card__desc">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection direction="up" delay={0.3}>
          <div className="scholarship-cta glass-card">
            <div className="scholarship-cta__content">
              <h3>Don&rsquo;t let finances stand in your way</h3>
              <p>Take the first step toward making your engineering education a reality.</p>
            </div>
            <button onClick={() => scrollTo('apply')} className="btn btn-primary">
              Start Your Application
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
