import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { educationTimeline } from '../data/portfolioData'

export default function EducationTimeline() {
  return (
    <section id="education" className="mx-auto max-w-4xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <span className="section-eyebrow">My academic journey</span>
        <h2 className="section-heading">Education</h2>
      </motion.div>

      <div className="relative mt-16 pl-10 sm:pl-14">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-maroon via-maroon/40 to-transparent sm:left-6" />

        <div className="space-y-12">
          {educationTimeline.map((edu, i) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-10 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-maroon-gradient text-white shadow-maroon sm:-left-14">
                <GraduationCap size={15} />
              </span>

              <div className="glass-card p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-maroon dark:text-maroon-300">
                  {edu.duration}
                </p>
                <h3 className="mt-1 font-heading text-lg font-semibold text-ink dark:text-white">
                  {edu.title}
                </h3>
                <p className="text-sm text-ink/60 dark:text-white/60">{edu.place}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70 dark:text-white/70">
                  {edu.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
