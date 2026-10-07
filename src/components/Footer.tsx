import { profile } from '../content/profile'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="footer__links">
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Icon name="mail" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Icon name="linkedin" />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Icon name="github" />
          </a>
        </div>
      </div>
    </footer>
  )
}
