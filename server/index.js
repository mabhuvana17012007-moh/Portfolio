import 'dotenv/config'
import express from 'express'
import nodemailer from 'nodemailer'

const app = express()
const port = process.env.PORT || 8080

app.use(express.json({ limit: '20kb' }))

const requiredEnvironmentVariables = ['GMAIL_USER', 'GMAIL_APP_PASSWORD', 'CONTACT_RECIPIENT']

function validateFormData({ name, email, subject, message }) {
  return [name, email, subject, message].every(
    (value) => typeof value === 'string' && value.trim().length > 0
  )
}

app.post('/api/contact', async (req, res) => {
  if (!validateFormData(req.body)) {
    return res.status(400).json({ message: 'Please complete every field.' })
  }

  const missingVariable = requiredEnvironmentVariables.find((key) => !process.env[key])
  if (missingVariable) {
    console.error(`Missing required environment variable: ${missingVariable}`)
    return res.status(500).json({ message: 'Email delivery is not configured yet.' })
  }

  const { name, email, subject, message } = req.body
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  try {
    await transporter.sendMail({
      from: `Portfolio Contact <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_RECIPIENT,
      replyTo: email,
      subject: `Portfolio contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Email delivery error:', error)
    return res.status(502).json({ message: 'Unable to send the message. Please try again later.' })
  }
})

app.listen(port, () => {
  console.log(`Contact API listening on http://localhost:${port}`)
})
