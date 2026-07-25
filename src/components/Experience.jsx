import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'
import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="bg-cloud/60 py-24 dark:bg-white/[0.03]">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-eyebrow">Where I've worked</span>
          <h2 className="section-heading">Experience</h2>
        </motion.div>

        <div className="mt-14 space-y-6">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="tilt-card glass-card flex flex-col gap-4 p-6 sm:flex-row sm:items-start"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-maroon-gradient text-white">
                <Briefcase size={20} />
              </span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-ink dark:text-white">
                  {exp.role}
                </h3>
                <p className="text-sm font-medium text-maroon dark:text-maroon-300">{exp.company}</p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-ink/55 dark:text-white/55">
                  <Calendar size={13} /> {exp.duration}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-white/70">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>


        <div className="mt-14 space-y-6">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="tilt-card glass-card flex flex-col gap-4 p-6 sm:flex-row sm:items-start"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-maroon-gradient text-white">
                <Briefcase size={20} />
              </span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-ink dark:text-white">
                  {exp.role}
                </h3>
                <p className="text-sm font-medium text-maroon dark:text-maroon-300">{exp.company}</p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-ink/55 dark:text-white/55">
                  <Calendar size={13} /> {exp.duration}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-white/70">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  )
}
