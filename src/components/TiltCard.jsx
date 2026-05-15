import { useState } from 'react'
import { motion } from 'framer-motion'

function TiltCard({ children, className = '', maxTilt = 10, glow = true }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const percentX = (event.clientX - bounds.left) / bounds.width
    const percentY = (event.clientY - bounds.top) / bounds.height

    setTilt({
      x: (0.5 - percentY) * maxTilt,
      y: (percentX - 0.5) * maxTilt,
    })
  }

  return (
    <motion.div
      className={className}
      style={{ transformStyle: 'preserve-3d' }}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: 'spring', stiffness: 180, damping: 18, mass: 0.35 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
    >
      {glow ? <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_42%)]" /> : null}
      <div style={{ transform: 'translateZ(1px)' }}>{children}</div>
    </motion.div>
  )
}

export default TiltCard