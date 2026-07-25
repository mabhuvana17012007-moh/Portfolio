import { useState } from 'react'
import { motion } from 'framer-motion'
import useCounter from '../hooks/useCounter'
import { achievements } from '../data/portfolioData'

function Counter({ value }) {
  const [start, setStart] = useState(false)
  const count = useCounter(value, start)

  return (
    <motion.span
      onViewportEnter={() => setStart(true)}
      viewport={{ once: true }}
      className="font-heading text-4xl font-extrabold text-maroon dark:text-maroon-300 sm:text-5xl"
    >
      {count}+
    </motion.span>
  )
}

export default function Achievements() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="glass-card grid grid-cols-2 gap-8 p-10 sm:grid-cols-4">
        {achievements.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <Counter value={item.value} />
            <p className="mt-2 text-xs font-medium uppercase tracking-wide text-ink/60 dark:text-white/60 sm:text-sm">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
