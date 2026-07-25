import { useEffect, useRef } from 'react'

/**
 * A soft maroon glow that follows the cursor on pointer-capable devices.
 * Purely decorative and ignored by touch devices / reduced-motion users.
 */
export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!isFinePointer || prefersReducedMotion) return

    const el = glowRef.current
    const move = (e) => {
      el.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[400px] w-[400px] rounded-full bg-maroon/10 blur-[100px] transition-transform duration-300 ease-out md:block dark:bg-maroon/20"
    />
  )
}
