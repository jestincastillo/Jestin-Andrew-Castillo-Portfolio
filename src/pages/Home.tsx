import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import ProfilePhoto from '../components/ProfilePhoto'
import ProjectCard from '../components/ProjectCard'
import ResumeButton from '../components/ResumeButton'
import SkillsList from '../components/SkillsList'
import Reveal from '../components/Reveal'
import { profile } from '../content/profile'
import { designProjects, industryExperience, industryMoreNote } from '../content/projects'
import { usePageTitle } from '../lib/usePageTitle'

export default function Home() {
  usePageTitle()
  const [intro, ...moreBio] = profile.bio

  return (
    <>
      <section className="hero">
        <div className="hero__grid" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__text">
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
                Contact Me
              </Link>
              <ResumeButton />
            </Reveal>
          </div>
          <ProfilePhoto />
        </div>
      </section>

      {industryExperience.length > 0 && (
        <section className="section">
          <div className="container">
            <Reveal className="section__head">
              <h2>Industry experience</h2>
              <Link to="/experience" className="text-link">
                All industry experience <Icon name="arrowRight" size={16} />
              </Link>
            </Reveal>
            <div className="card-grid">
              {industryExperience.map((project, i) => (
                <Reveal key={project.id} delay={(i % 2) * 0.06}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
            {industryMoreNote && <p className="more-note">{industryMoreNote}</p>}
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <Reveal className="section__head">
            <h2>Selected projects</h2>
            <Link to="/projects" className="text-link">
              All projects <Icon name="arrowRight" size={16} />
            </Link>
          </Reveal>
          <div className="card-grid">
            {designProjects.map((project, i) => (
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
            <Link to="/about" className="text-link">
              More about me <Icon name="arrowRight" size={16} />
            </Link>
          </Reveal>
          <Reveal className="about__skills" delay={0.08}>
            <h2>Skills</h2>
            <SkillsList />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="cta-band">
            <h2>Open to internship, co-op, and research opportunities.</h2>
            <Link to="/contact" className="btn btn--primary">
              Contact me <Icon name="arrowRight" size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
