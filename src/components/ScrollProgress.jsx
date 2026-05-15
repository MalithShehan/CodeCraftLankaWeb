import { useEffect, useState } from 'react'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0
      setProgress(nextProgress)
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })

    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[90] h-1 bg-white/5">
      <div
        className="h-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 shadow-[0_0_18px_rgba(56,189,248,0.65)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default ScrollProgress