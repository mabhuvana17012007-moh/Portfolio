import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const socialLinks = [
  { icon: Github, href: personalInfo.socials.github, label: 'GitHub' },
  { icon: Linkedin, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
  { icon: Instagram, href: personalInfo.socials.instagram, label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white py-10 dark:border-white/10 dark:bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-heading text-base font-bold text-ink dark:text-white">
            {personalInfo.name}
          </p>
          <p className="mt-1 text-xs text-ink/50 dark:text-white/50">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>

        <div className="flex gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, rotate: 6 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-ink transition hover:border-maroon hover:text-maroon dark:border-white/15 dark:text-white dark:hover:text-maroon-300"
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}
