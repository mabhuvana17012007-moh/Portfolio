import { motion } from 'framer-motion'
import { Award, Building2, Calendar, FileText } from 'lucide-react'
import { certifications } from '../data/portfolioData'

export default function Certifications() {
  return (
    <section id="certifications" className="bg-cloud/60 py-24 dark:bg-white/[0.03]">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-eyebrow">Verified learning</span>
          <h2 className="section-heading">Certifications</h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="tilt-card glass-card overflow-hidden p-6"
            >
              {cert.image && (
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${cert.title} certificate`}
                  className="-mx-6 -mt-6 mb-4 block overflow-hidden"
                >
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate preview`}
                    loading="lazy"
                    className="h-36 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </a>
              )}

              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-maroon-gradient text-white">
                <Award size={20} />
              </span>
              <h3 className="mt-4 font-heading text-base font-semibold text-ink dark:text-white">
                {cert.title}
              </h3>

              <div className="mt-3 space-y-1.5 text-sm text-ink/65 dark:text-white/65">
                <p className="flex items-center gap-2">
                  <Building2 size={14} className="text-maroon dark:text-maroon-300" /> {cert.organization}
                </p>
                <p className="flex items-center gap-2">
                  <Calendar size={14} className="text-maroon dark:text-maroon-300" /> {cert.duration}
                </p>
              </div>
              <a
              
                href={cert.certificateUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-maroon hover:underline dark:text-maroon-300"
              >
                <FileText size={15} /> View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}