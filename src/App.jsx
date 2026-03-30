import { useState, useEffect, createContext } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Welcome from './pages/Welcome'
import StemProgram from './pages/StemProgram'
import SummerCohort from './pages/SummerCohort'
import Scholarship from './pages/Scholarship'
import Application from './pages/Application'
import Contact from './pages/Contact'
import './App.css'

export const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('mff-theme')
    return saved || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('mff-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Navbar />
      <main>
        <Home />
        <Welcome />
        <StemProgram />
        <SummerCohort />
        <Scholarship />
        <Application />
        <Contact />
      </main>
      <Footer />
    </ThemeContext.Provider>
  )
}

export default App
