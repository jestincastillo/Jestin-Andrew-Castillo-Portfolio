import { Link } from 'react-router-dom'
import { projectPath } from '../lib/paths'
import type { Project } from '../types'
import Icon from './Icon'
import ImageFrame from './ImageFrame'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to={projectPath(project)} className="card">
      <ImageFrame image={project.cover} fit="cover" className="card__media" />
      <div className="card__body">
        <p className="eyebrow">{project.org}</p>
        <h3 className="card__title">{project.title}</h3>
        <p className="card__summary">{project.summary}</p>
        {project.tags.length > 0 && (
          <ul className="tags" aria-label="Tags">
            {project.tags.map((tag, i) => (
              <li key={`${tag}-${i}`} className="tag">
                {tag}
              </li>
            ))}
          </ul>
        )}
        <span className="card__cta">
          View project <Icon name="arrowRight" size={16} />
        </span>
      </div>
    </Link>
  )
}
