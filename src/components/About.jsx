import { motion } from 'framer-motion'
import { User, GraduationCap, Mail, MapPin, Languages } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const infoCards = [
  { icon: User, label: 'Name', value: personalInfo.name },
  { icon: GraduationCap, label: 'Education', value: personalInfo.education },
  { icon: Mail, label: 'Email', value: personalInfo.email },
  { icon: MapPin, label: 'Location', value: personalInfo.location },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="text-center"
      >
        <span className="section-eyebrow">Get to know me</span>
        <h2 className="section-heading">About Me</h2>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-sm"
        >
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-maroon-gradient opacity-10 blur-2xl" />
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
            alt="Illustration of software development workspace"
            loading="lazy"
            className="tilt-card rounded-3xl border border-black/5 shadow-glass dark:border-white/10"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-base leading-relaxed text-ink/75 dark:text-white/75">
            {personalInfo.about}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {infoCards.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="glass-card flex items-start gap-3 p-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-maroon/10 text-maroon dark:text-maroon-300">
                  <Icon size={16} />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-ink/50 dark:text-white/50">
                    {label}
                  </p>
                  <p className="font-heading text-sm font-semibold text-ink dark:text-white">
                    {value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
