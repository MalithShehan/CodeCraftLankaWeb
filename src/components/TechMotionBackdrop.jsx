import { motion } from 'framer-motion'

const columns = Array.from({ length: 9 }, (_, index) => ({
  id: index,
  left: `${6 + index * 10}%`,
  delay: index * 0.35,
  duration: 6 + index * 0.25,
}))

const nodes = Array.from({ length: 11 }, (_, index) => ({
  id: index,
  left: `${8 + (index * 8) % 82}%`,
  top: `${10 + (index * 13) % 72}%`,
  delay: index * 0.2,
}))

function TechMotionBackdrop({ className = '' }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(125,211,252,0.04)_1px,transparent_1px),linear-gradient(rgba(125,211,252,0.04)_1px,transparent_1px)] bg-[size:44px_44px] opacity-60" />
      <motion.div
        className="absolute inset-x-[-20%] top-[-20%] h-72 bg-[radial-gradient(circle,rgba(56,189,248,0.22),transparent_60%)] blur-3xl"
        animate={{ x: ['-8%', '8%', '-8%'], y: ['0%', '10%', '0%'] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-15%] right-[-10%] h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]"
        animate={{ x: ['0%', '-6%', '0%'], y: ['0%', '-8%', '0%'] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
      />

      {columns.map((column) => (
        <motion.div
          key={column.id}
          className="absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-300/35 to-transparent"
          style={{ left: column.left }}
          animate={{ opacity: [0.18, 0.55, 0.18], scaleY: [0.85, 1, 0.9] }}
          transition={{ duration: column.duration, delay: column.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {nodes.map((node) => (
        <motion.span
          key={node.id}
          className="absolute h-2.5 w-2.5 rounded-full bg-cyan-200/65 shadow-[0_0_18px_rgba(56,189,248,0.65)]"
          style={{ left: node.left, top: node.top }}
          animate={{ opacity: [0.25, 1, 0.35], scale: [0.8, 1.2, 0.85] }}
          transition={{ duration: 2.8, delay: node.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <motion.div
        className="absolute inset-x-0 top-1/4 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent"
        animate={{ y: ['-12%', '58%', '-12%'] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}

export default TechMotionBackdrop