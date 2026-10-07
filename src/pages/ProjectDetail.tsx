import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Gallery from '../components/Gallery'
import Icon from '../components/Icon'
import ImageFrame from '../components/ImageFrame'
import Reveal from '../components/Reveal'
import { getProject, projects } from '../content/projects'
import { slugify } from '../lib/paths'
import { usePageTitle } from '../lib/usePageTitle'
import type { Project, ProjectSection } from '../types'
import NotFound from './NotFound'
import './ProjectDetail.css'

// One template renders every project. The content for each project lives in
// its own file in src/content/projects/, so editing a project never means
// touching this layout code.

export default function ProjectDetail() {
  const { id } = useParams()
  const project = getProject(id)
  usePageTitle(project?.title ?? 'Page not found')

  if (!project) return <NotFound />
  // key={project.id} resets the page state when jumping between projects.
  return <ProjectPage key={project.id} project={project} />
}

function ProjectPage({ project }: { project: Project }) {
  const sectionIds = useMemo(() => uniqueIds(project.sections.map((s) => s.title)), [project])
  const activeId = useActiveSection(sectionIds)

  const index = projects.findIndex((p) => p.id === project.id)
  const prev = projects.length > 1 ? projects[(index - 1 + projects.length) % projects.length] : null
  const next = projects.length > 1 ? projects[(index + 1) % projects.length] : null

  const scrollTo = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <article className="container project">
      <Link to="/projects" className="text-link project__back">
        <Icon name="arrowLeft" size={16} /> All projects
      </Link>

      <Reveal className="project__header">
        <p className="eyebrow">{project.org}</p>
        <h1>{project.title}</h1>
        <p className="lead">{project.summary}</p>

        <dl className="project__meta">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Timeline</dt>
            <dd>{project.timeline}</dd>
          </div>
          {project.team && (
            <div>
              <dt>Team</dt>
              <dd>{project.team}</dd>
            </div>
          )}
          {project.tools && project.tools.length > 0 && (
            <div>
              <dt>Tools</dt>
              <dd>{project.tools.join(', ')}</dd>
            </div>
          )}
        </dl>

        <ul className="tags" aria-label="Tags">
          {project.tags.map((tag, i) => (
            <li key={`${tag}-${i}`} className="tag">
              {tag}
            </li>
          ))}
        </ul>

        {project.links && project.links.length > 0 && (
          <div className="project__links">
            {project.links.map((link) => (
              <a key={`${link.url}-${link.label}`} href={link.url} target="_blank" rel="noreferrer" className="btn btn--ghost btn--small">
                {link.label} <Icon name="external" size={14} />
              </a>
            ))}
          </div>
        )}
      </Reveal>

      {project.cover && (
        <Reveal className="project__cover">
          <ImageFrame image={project.cover} fit="cover" eager />
        </Reveal>
      )}

      <div className="project__layout">
        <aside className="project__toc" aria-label="On this page">
          <p className="project__toc-label">On this page</p>
          <ul>
            {project.sections.map((section, i) => (
              <li key={sectionIds[i]}>
                <button
                  type="button"
                  className={activeId === sectionIds[i] ? 'is-active' : ''}
                  onClick={() => scrollTo(sectionIds[i])}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <div className="project__content">
          {project.highlights && project.highlights.length > 0 && (
            <Reveal className="project__highlights">
              <h2>Key outcomes</h2>
              <ul>
                {project.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Reveal>
          )}

          {project.sections.map((section, i) => (
            <Section key={sectionIds[i]} id={sectionIds[i]} section={section} />
          ))}
        </div>
      </div>

      {prev && next && (
        <nav className="project__pager" aria-label="More projects">
          <Link to={`/projects/${prev.id}`} className="project__pager-link">
            <span className="project__pager-dir">
              <Icon name="arrowLeft" size={14} /> Previous
            </span>
            <span className="project__pager-name">{prev.org}</span>
          </Link>
          <Link to={`/projects/${next.id}`} className="project__pager-link project__pager-link--next">
            <span className="project__pager-dir">
              Next <Icon name="arrowRight" size={14} />
            </span>
            <span className="project__pager-name">{next.org}</span>
          </Link>
        </nav>
      )}
    </article>
  )
}

function Section({ id, section }: { id: string; section: ProjectSection }) {
  return (
    <section id={id} className="project__section">
      <Reveal>
        <h2>{section.title}</h2>
        {section.paragraphs?.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        {section.bullets && section.bullets.length > 0 && (
          <ul className="project__bullets">
            {section.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        )}
      </Reveal>
      {section.images && section.images.length > 0 && (
        <Reveal>
          <Gallery images={section.images} columns={section.columns} />
        </Reveal>
      )}
    </section>
  )
}

/** Section titles → unique anchor ids ("CAD", "CAD" → "cad", "cad-2"). */
function uniqueIds(titles: string[]) {
  const seen = new Map<string, number>()
  return titles.map((title, i) => {
    const base = slugify(title) || `section-${i + 1}`
    const count = (seen.get(base) ?? 0) + 1
    seen.set(base, count)
    return count === 1 ? base : `${base}-${count}`
  })
}

/** Tracks which section is currently near the top of the screen, for the sidebar highlight. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-96px 0px -55% 0px' },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}
