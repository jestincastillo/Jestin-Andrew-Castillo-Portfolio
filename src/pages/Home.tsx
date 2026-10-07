import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { profile } from '../content/profile'
import { projects } from '../content/projects'
import { publicUrl } from '../lib/paths'
import { usePageTitle } from '../lib/usePageTitle'

export default function Home() {
  usePageTitle()
  const [intro, ...moreBio] = profile.bio

  return (
    <>
      <section className="hero">
        <div className="hero__grid" aria-hidden="true" />
        <div className="container hero__inner">
          <Reveal>
            <p className="eyebrow">Engineering Portfolio</p>
            <h1 className="hero__name">{profile.name}</h1>
            <p className="hero__title">{profile.title}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="hero__bio">{intro}</p>
          </Reveal>
          <Reveal delay={0.16} className="hero__actions">
            <Link to="/projects" className="btn btn--primary">
              View my projects <Icon name="arrowRight" size={16} />
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              Get in touch
            </Link>
            {profile.resume && (
              <a href={publicUrl(profile.resume)} className="btn btn--ghost" target="_blank" rel="noreferrer">
                <Icon name="file" size={16} /> Resume
              </a>
            )}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section__head">
            <h2>Selected projects</h2>
            <Link to="/projects" className="text-link">
              All projects <Icon name="arrowRight" size={16} />
            </Link>
          </Reveal>
          <div className="card-grid">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={(i % 2) * 0.06}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about">
          <Reveal className="about__text">
            <h2>About</h2>
            {moreBio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </Reveal>
          <Reveal className="about__skills" delay={0.08}>
            <h2>Skills</h2>
            {profile.skills.map((group) => (
              <div key={group.group} className="skills__group">
                <h3>{group.group}</h3>
                <ul className="tags">
                  {group.items.map((item, i) => (
                    <li key={`${item}-${i}`} className="tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="cta-band">
            <div>
              <h2>Let's talk</h2>
              <p>Open to internships, research, and design team collaborations.</p>
            </div>
            <Link to="/contact" className="btn btn--primary">
              Contact me <Icon name="arrowRight" size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
