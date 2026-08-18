import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const contactDetails = [
  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
  { icon: Github, label: 'GitHub', value: 'View profile', href: personalInfo.socials.github },
  { icon: Linkedin, label: 'LinkedIn', value: 'Connect with me', href: personalInfo.socials.linkedin },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    const response = await fetch('http://localhost:8080/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to send message')
    }

    setSubmitted(true)

    setForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    })

    setTimeout(() => setSubmitted(false), 4500)

  } catch (error) {
    console.error('Error:', error)
    alert('Unable to send message. Please try again.')
  }
}
  return (
    <section id="contact" className="bg-cloud/60 py-24 dark:bg-white/[0.03]">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-eyebrow">Let's connect</span>
          <h2 className="section-heading">Contact Me</h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactDetails.map(({ icon: Icon, label, value, href }) => {
              const Wrapper = href ? 'a' : 'div'
              return (
                <Wrapper
                  key={label}
                  {...(href ? { href, target: '_blank', rel: 'noreferrer' } : {})}
                  className="glass-card flex items-center gap-4 p-4 transition hover:-translate-y-0.5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-maroon-gradient text-white">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-ink/50 dark:text-white/50">
                      {label}
                    </p>
                    <p className="font-heading text-sm font-semibold text-ink dark:text-white">
                      {value}
                    </p>
                  </div>
                </Wrapper>
              )
            })}
          </motion.div>

          {/* Right: form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass-card relative space-y-4 p-6"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-ink outline-none transition focus:border-maroon dark:border-white/15 dark:bg-ink-soft/80 dark:text-white"
              />
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-ink outline-none transition focus:border-maroon dark:border-white/15 dark:bg-ink-soft/80 dark:text-white"
              />
            </div>
            <input
              type="text"
              name="subject"
              required
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-ink outline-none transition focus:border-maroon dark:border-white/15 dark:bg-ink-soft/80 dark:text-white"
            />
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full resize-none rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-ink outline-none transition focus:border-maroon dark:border-white/15 dark:bg-ink-soft/80 dark:text-white"
            />

            <button type="submit" className="btn-maroon w-full justify-center">
              <Send size={16} /> Send Message
            </button>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="flex items-center gap-2 rounded-xl bg-green-600/10 px-4 py-3 text-sm font-medium text-green-700 dark:text-green-400"
                >
                  <CheckCircle2 size={16} /> Your message has been sent successfully!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
