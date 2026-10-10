import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { industryExperience, industryMoreNote } from '../content/projects'
import { usePageTitle } from '../lib/usePageTitle'

export default function Experience() {
  usePageTitle('Industry Experience')

  return (
    <div className="container page">
      <Reveal className="page__head">
        <p className="eyebrow">Work</p>
        <h1>Industry Experience</h1>
        <p className="lead">Internships and industry roles, and what I built in them. Pick one to see the full details.</p>
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
  )
}
