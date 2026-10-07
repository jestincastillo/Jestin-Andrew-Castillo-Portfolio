import Icon, { type IconName } from '../components/Icon'
import Reveal from '../components/Reveal'
import { profile } from '../content/profile'
import { publicUrl } from '../lib/paths'
import { usePageTitle } from '../lib/usePageTitle'

const prettyUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

export default function Contact() {
  usePageTitle('Contact')

  const methods: { icon: IconName; label: string; value: string; href: string; external?: boolean }[] = [
    { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: 'linkedin', label: 'LinkedIn', value: prettyUrl(profile.linkedin), href: profile.linkedin, external: true },
    { icon: 'github', label: 'GitHub', value: prettyUrl(profile.github), href: profile.github, external: true },
  ]
  if (profile.resume) {
    methods.push({ icon: 'file', label: 'Resume', value: 'View PDF', href: publicUrl(profile.resume), external: true })
  }

  return (
    <div className="container page">
      <Reveal className="page__head">
        <p className="eyebrow">Contact</p>
        <h1>Get in touch</h1>
        <p className="lead">
          I'm happy to talk about engineering projects, internships, research, or anything on this site. Email is the best
          way to reach me.
        </p>
      </Reveal>

      <div className="contact-grid">
        {methods.map((m, i) => (
          <Reveal key={m.label} delay={i * 0.05}>
            <a
              href={m.href}
              className="contact-card"
              {...(m.external ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              <span className="contact-card__icon">
                <Icon name={m.icon} size={22} />
              </span>
              <span className="contact-card__text">
                <span className="contact-card__label">{m.label}</span>
                <span className="contact-card__value">{m.value}</span>
              </span>
              <Icon name={m.external ? 'external' : 'arrowRight'} size={16} />
            </a>
          </Reveal>
        ))}
      </div>

      {profile.location && (
        <p className="contact-location">
          <Icon name="pin" size={16} /> {profile.location}
        </p>
      )}
    </div>
  )
}
