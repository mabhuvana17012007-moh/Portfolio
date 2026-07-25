import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import useTheme from './hooks/useTheme'

import Loader from './components/Loader'
import ScrollProgressBar from './components/ScrollProgressBar'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import EducationTimeline from './components/EducationTimeline'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader show={loading} />
      <ScrollProgressBar />
      <CursorGlow />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.6 }}
        className="relative min-h-screen bg-white text-ink dark:bg-ink dark:text-white"
      >
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <EducationTimeline />
          <Experience />
          <Achievements />
          <Resume />
          <Contact />
        </main>

        <Footer />
        <ScrollToTop />
      </motion.div>
    </>
  )
}
