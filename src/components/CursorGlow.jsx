import { useEffect } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion'

function CursorGlow() {
  const rawX = useMotionValue(-400)
  const rawY = useMotionValue(-400)
  const x = useSpring(rawX, { stiffness: 140, damping: 24 })
  const y = useSpring(rawY, { stiffness: 140, damping: 24 })
  const spotlight = useMotionTemplate`radial-gradient(280px circle at ${x}px ${y}px, rgba(34, 211, 238, 0.18), transparent 65%)`

  useEffect(() => {
    const handlePointerMove = (event) => {
      rawX.set(event.clientX)
      rawY.set(event.clientY)
    }

    window.addEventListener('pointermove', handlePointerMove)

    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [rawX, rawY])

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[15] hidden lg:block"
      style={{ background: spotlight }}
    />
  )
}

export default CursorGlow