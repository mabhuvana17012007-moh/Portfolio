import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/70 p-6 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card relative max-h-[85vh] w-full max-w-lg overflow-y-auto bg-white p-6 dark:bg-ink-soft"
          >
            <button
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-ink hover:bg-maroon hover:text-white dark:bg-white/10 dark:text-white"
            >
              <X size={16} />
            </button>

            <img
              src={project.image}
              alt={project.name}
              loading="lazy"
              className="mb-5 h-44 w-full rounded-xl object-cover"
            />

            <h3 className="font-heading text-xl font-bold text-ink dark:text-white">
              {project.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-white/70">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-maroon/10 px-3 py-1 text-xs font-medium text-maroon dark:text-maroon-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline flex-1 justify-center">
                <Github size={16} /> GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer" className="btn-maroon flex-1 justify-center">
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
