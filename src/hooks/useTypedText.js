import { useEffect, useState } from 'react'

/**
 * Cycles through an array of strings with a typewriter effect.
 * @param {string[]} words
 * @param {{typingSpeed?: number, deletingSpeed?: number, pause?: number}} options
 */
export default function useTypedText(words, options = {}) {
  const { typingSpeed = 90, deletingSpeed = 45, pause = 1400 } = options
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
    } else {
      const next = isDeleting
        ? current.substring(0, text.length - 1)
        : current.substring(0, text.length + 1)
      timeout = setTimeout(() => setText(next), isDeleting ? deletingSpeed : typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause])

  return text
}
