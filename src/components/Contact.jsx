import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
} from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personalInfo.location,
    href: null,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'View profile',
    href: personalInfo.socials.github,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: personalInfo.socials.linkedin,
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (window.location.protocol === 'file:') {
      setErrorMessage('Run the site through a web server before sending messages. Use npm run dev or deploy the site.')
      return
    }

    setSending(true)
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      })

      const responseBody = await response.text()
      let result = {}

      try {
        result = responseBody ? JSON.parse(responseBody) : {}
      } catch {
        // The API can return an empty response when it is unavailable.
      }

      if (!response.ok || result.success !== true) {
        throw new Error(
          result.message ||
            'The email server is unavailable. Run npm run dev after configuring your .env file.'
        )
      }

      setSubmitted(true)
      setForm({ name: '', email: '', subject: '', message: '' })

      setTimeout(() => {
        setSubmitted(false)
      }, 4500)
    } catch (error) {
      console.error('Contact form error:', error)
      setErrorMessage(error.message || 'Unable to send your message. Please try again later.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      id="contact"
      className="bg-cloud/60 py-24 dark:bg-white/[0.03]"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-eyebrow">Let's connect</span>

          <h2 className="section-heading">
            Contact Me
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">

          {/* Left: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactDetails.map(
              ({ icon: Icon, label, value, href }) => {
                const Wrapper = href ? 'a' : 'div'

                return (
                  <Wrapper
                    key={label}
                    {...(
                      href
                        ? {
                            href,
                            target: '_blank',
                            rel: 'noreferrer',
                          }
                        : {}
                    )}
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
              }
            )}
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass-card relative space-y-4 p-6"
          >

            {/* Name + Email */}
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

            {/* Subject */}
            <input
              type="text"
              name="subject"
              required
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-ink outline-none transition focus:border-maroon dark:border-white/15 dark:bg-ink-soft/80 dark:text-white"
            />

            {/* Message */}
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full resize-none rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-ink outline-none transition focus:border-maroon dark:border-white/15 dark:bg-ink-soft/80 dark:text-white"
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={sending}
              className="btn-maroon w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={16} />

              {sending ? 'Sending...' : 'Send Message'}
            </button>

            {/* Success Message */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="flex items-center gap-2 rounded-xl bg-green-600/10 px-4 py-3 text-sm font-medium text-green-700 dark:text-green-400"
                >
                  <CheckCircle2 size={16} />

                  Your message has been sent successfully!
                </motion.div>
              )}
            </AnimatePresence>

            {errorMessage && (
              <p className="rounded-xl bg-red-600/10 px-4 py-3 text-sm font-medium text-red-700 dark:text-red-400">
                {errorMessage}
              </p>
            )}

          </motion.form>
        </div>
      </div>
    </section>
  )
}
