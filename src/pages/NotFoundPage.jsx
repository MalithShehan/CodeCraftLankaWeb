import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'

function NotFoundPage() {
  return (
    <PageTransition>
      <Helmet>
        <title>Page Not Found | CodeCraft Lanka</title>
      </Helmet>

      <section className="section-shell flex min-h-[70vh] items-center justify-center py-20">
        <div className="glass-panel max-w-2xl rounded-4xl p-10 text-center">
          <span className="badge-chip">404</span>
          <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">
            This page is outside the mapped route.
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            Head back to the main experience or explore the latest project showcases.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/" className="btn-primary">
              Back Home
            </Link>
            <Link to="/projects" className="btn-secondary">
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default NotFoundPage