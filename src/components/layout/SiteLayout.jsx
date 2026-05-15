import Navbar from './Navbar'
import Footer from './Footer'
import RouteEffects from './RouteEffects'
import BackToTopButton from '../BackToTopButton'

function SiteLayout({ children }) {
  return (
    <div className="relative overflow-hidden">
      <RouteEffects />

      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10rem] top-16 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[-6rem] top-[22%] h-72 w-72 rounded-full bg-blue-500/12 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px]" />
      </div>

      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
      <BackToTopButton />
    </div>
  )
}

export default SiteLayout