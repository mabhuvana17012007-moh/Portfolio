import { motion } from 'framer-motion'
import {
  Code, Layout, Server, Database, Wrench, Users,
} from 'lucide-react'
import { skillCategories } from '../data/portfolioData'

const categoryIcons = {
  'Programming Languages': Code,
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
  'Soft Skills': Users,
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Skills() {
  return (
    <section id="skills" className="bg-cloud/60 py-24 dark:bg-white/[0.03]">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-eyebrow">What I bring to the table</span>
          <h2 className="section-heading">Skills</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map(({ category, skills }) => {
            const Icon = categoryIcons[category] ?? Code
            return (
              <motion.div
                key={category}
                variants={item}
                className="tilt-card glass-card p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-maroon-gradient text-white">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-heading text-base font-semibold text-ink dark:text-white">
                    {category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-maroon/20 bg-white px-3 py-1 text-xs font-medium text-ink/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-maroon hover:bg-maroon hover:text-white dark:border-white/10 dark:bg-ink-soft dark:text-white/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
