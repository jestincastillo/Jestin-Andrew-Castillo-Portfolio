import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import ProfilePhoto from '../components/ProfilePhoto'
import ProjectCard from '../components/ProjectCard'
import ResumeButton from '../components/ResumeButton'
import SkillsList from '../components/SkillsList'
import Reveal from '../components/Reveal'
import { getLeadership } from '../content/about'
import { profile } from '../content/profile'
import { designProjects, industryExperience, industryMoreNote, projectsMoreNote } from '../content/projects'
import { projectPath } from '../lib/paths'
import { usePageTitle } from '../lib/usePageTitle'

export default function Home() {
  usePageTitle()
  const leadership = getLeadership()

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
            {/* Leadership roles (same entries as the About Me page, from src/content/about.ts). */}
            <Reveal delay={0.08}>
              <ul className="hero__roles">
                {leadership.map(({ project }) => (
                  <li key={project.id}>
                    <span className="hero__role-title">{project.role.trim()}</span>
                    <Link to={projectPath(project)} className="hero__role-org">
                      {project.org}
                    </Link>
                  </li>
                ))}
              </ul>
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
          {projectsMoreNote && <p className="more-note">{projectsMoreNote}</p>}
        </div>
      </section>

      <section className="section">
        <div className="container about">
          <Reveal className="about__text">
            <h2>About</h2>
            {profile.bio.map((paragraph, i) => (
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
