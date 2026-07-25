import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Eye } from 'lucide-react'
import { projects } from '../data/portfolioData'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [activeProject, setActiveProject] = useState(null)

  const categories = useMemo(
    () => ['All', ...new Set(projects.map((p) => p.category))],
    []
  )

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  )

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <span className="section-eyebrow">Things I've built</span>
        <h2 className="section-heading">Projects</h2>
      </motion.div>

      {/* Filter tabs */}
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full px-5 py-2 font-heading text-sm font-medium transition-all duration-300 ${
              filter === cat
                ? 'bg-maroon-gradient text-white shadow-maroon'
                : 'border border-black/10 text-ink/70 hover:border-maroon hover:text-maroon dark:border-white/15 dark:text-white/70'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="tilt-card glass-card group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <button
                  onClick={() => setActiveProject(project)}
                  aria-label={`View details for ${project.name}`}
                  className="absolute inset-0 flex items-center justify-center bg-ink/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink">
                    <Eye size={16} /> Quick view
                  </span>
                </button>
              </div>

              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-ink dark:text-white">
                  {project.name}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink/65 dark:text-white/65">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-maroon/10 px-2.5 py-1 text-[11px] font-medium text-maroon dark:text-maroon-300"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="rounded-full bg-black/5 px-2.5 py-1 text-[11px] font-medium text-ink/60 dark:bg-white/10 dark:text-white/60">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="mt-5 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-full border border-black/10 py-2 text-sm font-medium text-ink transition hover:border-maroon hover:text-maroon dark:border-white/15 dark:text-white"
                  >
                    <Github size={15} /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-maroon-gradient py-2 text-sm font-medium text-white shadow-maroon"
                  >
                    <ExternalLink size={15} /> Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}
