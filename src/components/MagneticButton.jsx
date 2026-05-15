import { useState } from 'react'
import { motion } from 'framer-motion'

function MagneticButton({ children, className = '', strength = 18 }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const offsetX = event.clientX - (bounds.left + bounds.width / 2)
    const offsetY = event.clientY - (bounds.top + bounds.height / 2)

    setOffset({
      x: (offsetX / bounds.width) * strength,
      y: (offsetY / bounds.height) * strength,
    })
  }

  return (
    <motion.div
      className={className}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 18, mass: 0.2 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setOffset({ x: 0, y: 0 })}
    >
      {children}
    </motion.div>
  )
}

export default MagneticButton