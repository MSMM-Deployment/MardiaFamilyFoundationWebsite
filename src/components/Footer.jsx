import { useContext } from 'react'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { ThemeContext } from '../App'
import logoLight from '../assets/MFFlogo.png'
import logoDark from '../assets/MMFlogo_dark.png'
import './Footer.css'

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
}

export default function Footer() {
  const { theme } = useContext(ThemeContext)
  const logo = theme === 'dark' ? logoDark : logoLight
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__brand-row">
              <img src={logo} alt="Mardia Family Foundation" className="footer__logo" />
              <div>
                <h3 className="footer__name">Mardia Family Foundation</h3>
                <p className="footer__sub">Future Engineers – Powered by STEM</p>
              </div>
            </div>
            <p className="footer__tagline">
              Mentoring, inspiring, and empowering the next generation of engineers in New Orleans and Jefferson Parish.
            </p>
          </div>

          <div className="footer__col">
            <h4>Navigate</h4>
            <button onClick={() => scrollTo('home')}>Home</button>
            <button onClick={() => scrollTo('about')}>About</button>
            <button onClick={() => scrollTo('programs')}>Programs</button>
            <button onClick={() => scrollTo('cohort')}>Summer Cohort</button>
            <button onClick={() => scrollTo('scholarship')}>Scholarship</button>
            <button onClick={() => scrollTo('contact')}>Contact</button>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <a href="mailto:dmorton@msmmeng.com" className="footer__link"><FaEnvelope /> dmorton@msmmeng.com</a>
            <span className="footer__link"><FaMapMarkerAlt /> 4508 Clearview Pkwy, Metairie, LA 70006</span>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Mardia Family Foundation – Future Engineers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
