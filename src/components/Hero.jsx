import { motion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'
import useTypedText from '../hooks/useTypedText'
import { personalInfo } from '../data/portfolioData'
import profileImg from '../assets/profile.jpeg'
export default function Hero() {
  const typed = useTypedText(personalInfo.roles)

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-maroon/20 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-maroon-300/20 blur-3xl animate-blob [animation-delay:3s]" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-cloud dark:bg-white/5 blur-3xl animate-blob [animation-delay:6s]" />
        <div className="absolute inset-0 bg-maroon-radial" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="section-eyebrow">Welcome to my portfolio</span>
          <h1 className="mt-3 font-heading text-4xl font-extrabold leading-tight text-ink sm:text-5xl lg:text-6xl dark:text-white">
            Hello, I'm <span className="text-maroon dark:text-maroon-300">{personalInfo.name}</span>
          </h1>

          <p className="mt-4 h-8 font-heading text-lg font-semibold text-maroon dark:text-maroon-300 sm:text-xl">
            {typed}
            <span className="ml-0.5 animate-blink">|</span>
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/70 dark:text-white/70">
            {personalInfo.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={personalInfo.resumeUrl} download className="btn-maroon">
              <Download size={18} /> Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-outline"
            >
              <Mail size={18} /> Contact Me
            </a>
          </div>
        </motion.div>

        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80"
        >
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-maroon/40 animate-spin-slow" />
          <div className="animate-float">
            <div className="h-56 w-56 overflow-hidden rounded-full border-4 border-white shadow-maroon sm:h-72 sm:w-72 dark:border-ink-soft">
              <img
                src={profileImg}
                alt={`Portrait of ${personalInfo.name}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
