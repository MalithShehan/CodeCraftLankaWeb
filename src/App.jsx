import { Suspense, lazy, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import CursorGlow from './components/CursorGlow'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'
import SiteLayout from './components/layout/SiteLayout'
import { SitePreferencesProvider } from './context/SitePreferencesContext'

const HomePage = lazy(() => import('./pages/HomePage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <SiteLayout>
      <Suspense
        fallback={<div className="section-shell min-h-[70vh] py-20" aria-hidden="true" />}
      >
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </SiteLayout>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setIsLoading(false), 1400)
    return () => window.clearTimeout(timeoutId)
  }, [])

  return (
    <HelmetProvider>
      <SitePreferencesProvider>
        <BrowserRouter>
          <ScrollProgress />
          <CursorGlow />
          <LoadingScreen isVisible={isLoading} />
          <AnimatedRoutes />
        </BrowserRouter>
      </SitePreferencesProvider>
    </HelmetProvider>
  )
}

export default App