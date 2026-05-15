import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function AnimatedCounter({ value, prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!isInView) {
      return undefined
    }

    let frameId = 0
    const startedAt = performance.now()
    const duration = 1600

    const updateValue = (timestamp) => {
      const progress = Math.min((timestamp - startedAt) / duration, 1)
      const eased = 1 - (1 - progress) * (1 - progress)
      setCurrent(Math.round(value * eased))

      if (progress < 1) {
        frameId = window.requestAnimationFrame(updateValue)
      }
    }

    frameId = window.requestAnimationFrame(updateValue)

    return () => window.cancelAnimationFrame(frameId)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {prefix}
      {current}
      {suffix}
    </span>
  )
}

export default AnimatedCounter