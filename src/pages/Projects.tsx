import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { designProjects } from '../content/projects'
import { usePageTitle } from '../lib/usePageTitle'

export default function Projects() {
  usePageTitle('Projects')

  return (
    <div className="container page">
      <Reveal className="page__head">
        <p className="eyebrow">Work</p>
        <h1>Projects</h1>
        <p className="lead">
          Design team and engineering work, from early sketches and requirements through CAD, analysis, and testing. Pick a
          project to see the full process.
        </p>
      </Reveal>
      <div className="card-grid">
        {designProjects.map((project, i) => (
          <Reveal key={project.id} delay={(i % 2) * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
