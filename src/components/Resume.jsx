import { motion } from 'framer-motion'
import { Download, FileCheck2 } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function Resume() {
  return (
    <section id="resume" className="mx-auto max-w-4xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="glass-card relative overflow-hidden px-8 py-14 text-center"
      >
        <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-maroon/10 blur-3xl" />
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-maroon-gradient text-white shadow-maroon">
          <FileCheck2 size={24} />
        </span>

        <h2 className="mt-6 font-heading text-2xl font-bold text-ink dark:text-white sm:text-3xl">
          Interested in knowing more about my experience and technical skills?
        </h2>

        <motion.a
          href={personalInfo.resumeUrl}
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="btn-maroon mt-8 inline-flex"
        >
          <Download size={18} /> Download Resume
        </motion.a>
      </motion.div>
    </section>
  )
}
