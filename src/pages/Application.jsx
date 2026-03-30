import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaEnvelope, FaPhone, FaPaperPlane, FaUser, FaSchool, FaGraduationCap,
  FaExclamationCircle, FaSpinner, FaCalendarAlt, FaUserFriends,
  FaChartBar, FaUniversity, FaBullseye,
} from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'
import './Application.css'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

const currentYear = new Date().getFullYear()
const gradYears = Array.from({ length: 4 }, (_, i) => currentYear + i)

const initialForm = {
  fullName: '', email: '', phone: '', role: '', highSchool: '', graduationYear: '',
  parentName: '', parentPhone: '', parentEmail: '',
  gpa: '', intendedCollege: '', major: '', careerGoals: '',
  message: '',
}

function validate(form) {
  const errors = {}
  if (!form.fullName.trim()) errors.fullName = 'Full name is required'
  if (!form.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email'
  if (form.phone && !/^[\d\s()+-]{7,20}$/.test(form.phone)) errors.phone = 'Enter a valid phone number'
  if (!form.role) errors.role = 'Please select your role'
  if (!form.highSchool.trim()) errors.highSchool = 'High school name is required'
  if (!form.graduationYear) errors.graduationYear = 'Graduation year is required'
  if (!form.parentName.trim()) errors.parentName = 'Parent/guardian name is required'
  if (!form.parentPhone.trim()) errors.parentPhone = 'Parent/guardian phone is required'
  else if (!/^[\d\s()+-]{7,20}$/.test(form.parentPhone)) errors.parentPhone = 'Enter a valid phone number'
  if (!form.parentEmail.trim()) errors.parentEmail = 'Parent/guardian email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.parentEmail)) errors.parentEmail = 'Enter a valid email'
  if (!form.gpa.trim()) errors.gpa = 'GPA is required'
  else if (isNaN(parseFloat(form.gpa)) || parseFloat(form.gpa) < 0 || parseFloat(form.gpa) > 5.0) errors.gpa = 'Enter a valid GPA (0.0–5.0)'
  if (!form.intendedCollege.trim()) errors.intendedCollege = 'Intended college is required'
  if (!form.major.trim()) errors.major = 'Major/field of study is required'
  if (!form.careerGoals.trim()) errors.careerGoals = 'Career goals are required'
  else if (form.careerGoals.trim().length < 20) errors.careerGoals = 'Please provide at least a few sentences'
  // message is optional
  return errors
}

function FieldError({ error }) {
  if (!error) return null
  return <span className="field-error"><FaExclamationCircle size={11} /> {error}</span>
}

export default function Application() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle')

  const set = (field, value) => setForm(f => ({ ...f, [field]: value }))
  const touch = (field) => {
    setTouched(t => ({ ...t, [field]: true }))
    setErrors(validate(form))
  }
  const disabled = status === 'sending'
  const showErr = (field) => touched[field] ? errors[field] : undefined

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(form)
    setErrors(errs)
    setTouched(Object.keys(initialForm).reduce((a, k) => ({ ...a, [k]: true }), {}))
    if (Object.keys(errs).length > 0) return

    setStatus('sending')
    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        subject: `New Application: ${form.fullName} — Mardia Family Foundation`,
        from_name: form.fullName,
        name: form.fullName,
        email: form.email,
        phone: form.phone || 'Not provided',
        role: form.role,
        high_school: form.highSchool,
        graduation_year: form.graduationYear,
        parent_guardian_name: form.parentName,
        parent_guardian_phone: form.parentPhone,
        parent_guardian_email: form.parentEmail,
        gpa: form.gpa,
        intended_college: form.intendedCollege,
        major_field_of_study: form.major,
        career_goals: form.careerGoals,
        message: form.message || 'No additional message',
        to: 'dmorton@msmmeng.com',
      }
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      setStatus(data.success ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const resetForm = () => {
    setStatus('idle')
    setForm(initialForm)
    setErrors({})
    setTouched({})
  }

  return (
    <section id="apply" className="section application-section">
      <div className="container">
        <AnimatedSection direction="up">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <span className="section-label">Apply Now</span>
            <h2 className="section-title">Student <span className="text-gold">Application</span></h2>
            <div className="gold-line" style={{ margin: '0 auto 16px' }} />
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Complete the form below to apply for the Mardia Family Foundation – Future Engineers program.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.1}>
          <div className="app-form-wrap glass-card">
            {status === 'sent' ? (
              <motion.div className="app-success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <div className="app-success__icon"><FaPaperPlane size={28} /></div>
                <h3>Application Submitted!</h3>
                <p>Thank you for applying. Demond Morton will review your application and get back to you soon.</p>
                <button className="btn btn-outline" onClick={resetForm}>Submit Another</button>
              </motion.div>
            ) : (
              <form className="app-form" onSubmit={handleSubmit} noValidate>
                {status === 'error' && (
                  <div className="app-error">
                    <FaExclamationCircle />
                    <span>Something went wrong. Please try again or email us directly at dmorton@msmmeng.com</span>
                  </div>
                )}

                {/* ── Student Information ── */}
                <h3 className="app-form__section-title">Student Information</h3>

                <div className="app-row">
                  <div className="app-field">
                    <label htmlFor="a-fullName"><FaUser className="app-field__icon" /> Full Name *</label>
                    <input id="a-fullName" required placeholder="Your full name" value={form.fullName}
                      onChange={e => set('fullName', e.target.value)} onBlur={() => touch('fullName')}
                      disabled={disabled} className={showErr('fullName') ? 'input-error' : ''} />
                    <FieldError error={showErr('fullName')} />
                  </div>
                  <div className="app-field">
                    <label htmlFor="a-email"><FaEnvelope className="app-field__icon" /> Email *</label>
                    <input id="a-email" type="email" required placeholder="you@example.com" value={form.email}
                      onChange={e => set('email', e.target.value)} onBlur={() => touch('email')}
                      disabled={disabled} className={showErr('email') ? 'input-error' : ''} />
                    <FieldError error={showErr('email')} />
                  </div>
                </div>

                <div className="app-row">
                  <div className="app-field">
                    <label htmlFor="a-phone"><FaPhone className="app-field__icon" /> Phone</label>
                    <input id="a-phone" type="tel" placeholder="(optional)" value={form.phone}
                      onChange={e => set('phone', e.target.value)} onBlur={() => touch('phone')}
                      disabled={disabled} className={showErr('phone') ? 'input-error' : ''} />
                    <FieldError error={showErr('phone')} />
                  </div>
                  <div className="app-field">
                    <label htmlFor="a-role"><FaGraduationCap className="app-field__icon" /> I am a... *</label>
                    <select id="a-role" required value={form.role}
                      onChange={e => set('role', e.target.value)} onBlur={() => touch('role')}
                      disabled={disabled} className={showErr('role') ? 'input-error' : ''}>
                      <option value="" disabled>Select role</option>
                      <option value="student">Student</option>
                      <option value="parent">Parent/Guardian</option>
                      <option value="educator">Educator</option>
                      <option value="partner">Community Partner</option>
                      <option value="other">Other</option>
                    </select>
                    <FieldError error={showErr('role')} />
                  </div>
                </div>

                <div className="app-row">
                  <div className="app-field">
                    <label htmlFor="a-highSchool"><FaSchool className="app-field__icon" /> High School *</label>
                    <input id="a-highSchool" required placeholder="Your high school name" value={form.highSchool}
                      onChange={e => set('highSchool', e.target.value)} onBlur={() => touch('highSchool')}
                      disabled={disabled} className={showErr('highSchool') ? 'input-error' : ''} />
                    <FieldError error={showErr('highSchool')} />
                  </div>
                  <div className="app-field">
                    <label htmlFor="a-gradYear"><FaCalendarAlt className="app-field__icon" /> Graduation Year *</label>
                    <select id="a-gradYear" required value={form.graduationYear}
                      onChange={e => set('graduationYear', e.target.value)} onBlur={() => touch('graduationYear')}
                      disabled={disabled} className={showErr('graduationYear') ? 'input-error' : ''}>
                      <option value="" disabled>Select year</option>
                      {gradYears.map(y => <option key={y} value={y}>{y}</option>)}
                    </select>
                    <FieldError error={showErr('graduationYear')} />
                  </div>
                </div>

                {/* ── Parent / Guardian ── */}
                <h3 className="app-form__section-title">Parent / Guardian</h3>

                <div className="app-field">
                  <label htmlFor="a-parentName"><FaUserFriends className="app-field__icon" /> Parent/Guardian Name *</label>
                  <input id="a-parentName" required placeholder="Full name" value={form.parentName}
                    onChange={e => set('parentName', e.target.value)} onBlur={() => touch('parentName')}
                    disabled={disabled} className={showErr('parentName') ? 'input-error' : ''} />
                  <FieldError error={showErr('parentName')} />
                </div>

                <div className="app-row">
                  <div className="app-field">
                    <label htmlFor="a-parentPhone"><FaPhone className="app-field__icon" /> Parent/Guardian Phone *</label>
                    <input id="a-parentPhone" type="tel" required placeholder="(504) 555-0123" value={form.parentPhone}
                      onChange={e => set('parentPhone', e.target.value)} onBlur={() => touch('parentPhone')}
                      disabled={disabled} className={showErr('parentPhone') ? 'input-error' : ''} />
                    <FieldError error={showErr('parentPhone')} />
                  </div>
                  <div className="app-field">
                    <label htmlFor="a-parentEmail"><FaEnvelope className="app-field__icon" /> Parent/Guardian Email *</label>
                    <input id="a-parentEmail" type="email" required placeholder="parent@example.com" value={form.parentEmail}
                      onChange={e => set('parentEmail', e.target.value)} onBlur={() => touch('parentEmail')}
                      disabled={disabled} className={showErr('parentEmail') ? 'input-error' : ''} />
                    <FieldError error={showErr('parentEmail')} />
                  </div>
                </div>

                {/* ── Academic ── */}
                <h3 className="app-form__section-title">Academic Information</h3>

                <div className="app-row app-row--3">
                  <div className="app-field">
                    <label htmlFor="a-gpa"><FaChartBar className="app-field__icon" /> GPA *</label>
                    <input id="a-gpa" required placeholder="e.g. 3.5" value={form.gpa}
                      onChange={e => set('gpa', e.target.value)} onBlur={() => touch('gpa')}
                      disabled={disabled} className={showErr('gpa') ? 'input-error' : ''} />
                    <FieldError error={showErr('gpa')} />
                  </div>
                  <div className="app-field">
                    <label htmlFor="a-college"><FaUniversity className="app-field__icon" /> Intended College *</label>
                    <input id="a-college" required placeholder="College/University for fall" value={form.intendedCollege}
                      onChange={e => set('intendedCollege', e.target.value)} onBlur={() => touch('intendedCollege')}
                      disabled={disabled} className={showErr('intendedCollege') ? 'input-error' : ''} />
                    <FieldError error={showErr('intendedCollege')} />
                  </div>
                  <div className="app-field">
                    <label htmlFor="a-major"><FaGraduationCap className="app-field__icon" /> Major / Field *</label>
                    <input id="a-major" required placeholder="e.g. Civil Engineering" value={form.major}
                      onChange={e => set('major', e.target.value)} onBlur={() => touch('major')}
                      disabled={disabled} className={showErr('major') ? 'input-error' : ''} />
                    <FieldError error={showErr('major')} />
                  </div>
                </div>

                <div className="app-field">
                  <label htmlFor="a-goals"><FaBullseye className="app-field__icon" /> Career Goals *</label>
                  <textarea id="a-goals" required rows={4}
                    placeholder="Describe your career goals and what you hope to achieve in engineering..."
                    value={form.careerGoals}
                    onChange={e => set('careerGoals', e.target.value)} onBlur={() => touch('careerGoals')}
                    disabled={disabled} className={showErr('careerGoals') ? 'input-error' : ''} />
                  <FieldError error={showErr('careerGoals')} />
                </div>

                {/* ── Additional ── */}
                <h3 className="app-form__section-title">Additional Information</h3>

                <div className="app-field">
                  <label htmlFor="a-message"><FaPaperPlane className="app-field__icon" /> Message <span style={{ fontWeight: 400, color: 'var(--text-muted)', fontSize: '0.75rem' }}>(optional)</span></label>
                  <textarea id="a-message" placeholder="Anything else you'd like us to know?" rows={3}
                    value={form.message}
                    onChange={e => set('message', e.target.value)} onBlur={() => touch('message')}
                    disabled={disabled} className={showErr('message') ? 'input-error' : ''} />
                  <FieldError error={showErr('message')} />
                </div>

                <button type="submit" className="btn btn-primary app-form__submit" disabled={disabled}>
                  {status === 'sending' ? (
                    <><FaSpinner className="spin" size={14} /> Sending...</>
                  ) : (
                    <>Submit Application <FaPaperPlane size={13} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
