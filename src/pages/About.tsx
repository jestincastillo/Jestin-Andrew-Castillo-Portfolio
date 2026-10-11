import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import ProfilePhoto from '../components/ProfilePhoto'
import ResumeButton from '../components/ResumeButton'
import Reveal from '../components/Reveal'
import SkillsList from '../components/SkillsList'
import { about } from '../content/about'
import { profile } from '../content/profile'
import { getProject } from '../content/projects'
import { projectPath } from '../lib/paths'
import { usePageTitle } from '../lib/usePageTitle'

// Content for this page lives in src/content/about.ts (leadership) and
// src/content/profile.ts (bio and skills).

export default function About() {
  usePageTitle('About Me')

  // Look up each leadership entry's project for its organization, role, dates, and link.
  const leadership = about.leadership.flatMap((entry) => {
    const project = getProject(entry.projectId)
    return project ? [{ ...entry, project }] : []
  })

  return (
    <div className="container page">
      <div className="about-page__head">
        <Reveal className="about-page__intro">
          <p className="eyebrow">About</p>
          <h1>About Me</h1>
          <p className="about-page__title">{profile.title}</p>
          {profile.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <div className="hero__actions">
            <Link to="/contact" className="btn btn--primary">
              Contact Me <Icon name="arrowRight" size={16} />
            </Link>
            <ResumeButton />
          </div>
        </Reveal>
        <ProfilePhoto />
      </div>

      {leadership.length > 0 && (
        <section className="about-page__section">
          <Reveal>
            <h2>Leadership</h2>
          </Reveal>
          <div className="leadership-list">
            {leadership.map(({ project, points }, i) => (
              <Reveal key={project.id} delay={i * 0.05}>
                <article className="leadership">
                  <div className="leadership__head">
                    <div>
                      <p className="eyebrow eyebrow--org">{project.org}</p>
                      <h3>{project.role}</h3>
                    </div>
                    <span className="leadership__time">{project.timeline}</span>
                  </div>
                  <ul className="leadership__points">
                    {points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                  <Link to={projectPath(project)} className="text-link">
                    View project <Icon name="arrowRight" size={16} />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="about-page__section">
        <Reveal>
          <h2>Skills</h2>
          <div className="about-page__skills">
            <SkillsList />
          </div>
        </Reveal>
      </section>
    </div>
  )
}
