import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function RouteEffects() {
  const location = useLocation()

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      if (location.hash) {
        const target = document.getElementById(location.hash.replace('#', ''))

        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }, 80)

    return () => window.clearTimeout(timeoutId)
  }, [location.hash, location.pathname])

  return null
}

export default RouteEffects