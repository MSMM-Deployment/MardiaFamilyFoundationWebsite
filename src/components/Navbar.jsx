import { useState, useEffect, useCallback, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSun, FaMoon } from 'react-icons/fa'
import { ThemeContext } from '../App'
import logoLight from '../assets/MFFlogo.png'
import logoDark from '../assets/MMFlogo_dark.png'
import './Navbar.css'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'programs', label: 'Programs' },
  { id: 'cohort', label: 'Summer Cohort' },
  { id: 'scholarship', label: 'Scholarship' },
  { id: 'apply', label: 'Apply' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const ids = navLinks.map(l => l.id)
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.offsetTop <= window.scrollY + 140) {
          setActiveSection(ids[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const scrollTo = useCallback((id) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
    }
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <button className="nav__brand" onClick={() => scrollTo('home')}>
          <img src={theme === 'dark' ? logoDark : logoLight} alt="Mardia Family Foundation" className="nav__logo" />
          <div className="nav__brand-text">
            <span className="nav__brand-name">Mardia Family Foundation</span>
            <span className="nav__brand-sub">Future Engineers</span>
          </div>
        </button>

        <div className="nav__links">
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`nav__link ${activeSection === id ? 'nav__link--active' : ''}`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="nav__actions">
          <button
            className="nav__theme-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'flex' }}
              >
                {theme === 'light' ? <FaMoon size={15} /> : <FaSun size={15} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <button className="nav__cta btn btn-primary" onClick={() => scrollTo('apply')}>
            Apply Now
          </button>
        </div>

        <button
          className={`nav__burger ${mobileOpen ? 'nav__burger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="nav__mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map(({ id, label }) => (
              <button key={id} onClick={() => scrollTo(id)}
                className={`nav__mobile-link ${activeSection === id ? 'nav__mobile-link--active' : ''}`}>
                {label}
              </button>
            ))}
            <div className="nav__mobile-actions">
              <button className="nav__theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === 'light' ? <FaMoon size={15} /> : <FaSun size={15} />}
              </button>
              <button className="btn btn-primary" onClick={() => scrollTo('contact')} style={{ flex: 1, justifyContent: 'center' }}>
                Apply Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
