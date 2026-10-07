import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { usePageTitle } from '../lib/usePageTitle'

export default function NotFound() {
  usePageTitle('Page not found')

  return (
    <div className="container page not-found">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p className="lead">That page doesn't exist, or it may have moved.</p>
      <div className="hero__actions">
        <Link to="/" className="btn btn--primary">
          Go home
        </Link>
        <Link to="/projects" className="btn btn--ghost">
          Browse projects <Icon name="arrowRight" size={16} />
        </Link>
      </div>
    </div>
  )
}
