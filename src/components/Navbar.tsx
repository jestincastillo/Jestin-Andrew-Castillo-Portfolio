import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { profile } from '../content/profile'
import { designProjects, industryExperience, industryMoreNote } from '../content/projects'
import { projectPath } from '../lib/paths'
import type { Project } from '../types'
import Icon from './Icon'
import './Navbar.css'

const linkClass = ({ isActive }: { isActive: boolean }) => `nav__link ${isActive ? 'is-active' : ''}`

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  // Close the mobile menu after navigating to a new page.
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  const moreNote = industryMoreNote ? <p className="nav__menu-note">{industryMoreNote}</p> : null

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link to="/" className="nav__brand">
          {profile.name}
        </Link>

        <nav className="nav__links" aria-label="Main">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>

          <NavDropdown
            id="industry-menu"
            label="Industry Experience"
            active={pathname.startsWith('/experience')}
            items={industryExperience}
            footer={moreNote}
          />

          <NavDropdown
            id="projects-menu"
            label="Projects"
            to="/projects"
            items={designProjects}
            footer={
              <Link to="/projects" className="nav__menu-all">
                View all projects <Icon name="arrowRight" size={14} />
              </Link>
            }
          />

          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>

        <div className="nav__right">
          <button
            type="button"
            className="nav__burger"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <Icon name={mobileOpen ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-menu"
            className="nav__mobile"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
          >
            <div className="container nav__mobile-inner">
              <NavLink to="/" end className={linkClass}>
                Home
              </NavLink>

              <p className="nav__mobile-heading">Industry Experience</p>
              <ul className="nav__mobile-projects">
                {industryExperience.map((p) => (
                  <li key={p.id}>
                    <NavLink to={projectPath(p)} className={linkClass}>
                      {p.org}
                    </NavLink>
                  </li>
                ))}
                {industryMoreNote && <li className="nav__mobile-note">{industryMoreNote}</li>}
              </ul>

              <NavLink to="/projects" end className={linkClass}>
                Projects
              </NavLink>
              <ul className="nav__mobile-projects">
                {designProjects.map((p) => (
                  <li key={p.id}>
                    <NavLink to={projectPath(p)} className={linkClass}>
                      {p.org}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <NavLink to="/contact" className={linkClass}>
                Contact
              </NavLink>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

interface NavDropdownProps {
  /** HTML id for the menu panel (must be unique on the page). */
  id: string
  label: string
  /** If set, the label is a link to this page and a small arrow opens the menu. Otherwise the label itself opens it. */
  to?: string
  /** Highlights the label (only needed when there's no `to` page to match against). */
  active?: boolean
  items: Project[]
  /** Optional content under the list, like a "View all" link or a note. */
  footer?: ReactNode
}

/** A desktop navbar item with a dropdown list of projects. Opens on hover (mouse) or click/tap. */
function NavDropdown({ id, label, to, active = false, items, footer }: NavDropdownProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  // True when the mouse opened the menu, so the click that usually follows doesn't immediately close it.
  const openedByHover = useRef(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Close on Escape or when clicking anywhere outside this dropdown.
  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const hover = (next: boolean) => (e: ReactPointerEvent) => {
    if (e.pointerType !== 'mouse') return
    openedByHover.current = next
    setOpen(next)
  }

  const toggle = () => {
    if (openedByHover.current) {
      openedByHover.current = false
      return
    }
    setOpen((o) => !o)
  }

  return (
    <div className="nav__dropdown" ref={ref} onPointerEnter={hover(true)} onPointerLeave={hover(false)}>
      {to ? (
        <>
          <NavLink to={to} className={linkClass}>
            {label}
          </NavLink>
          <button
            type="button"
            className={`nav__chevron ${open ? 'is-open' : ''}`}
            aria-expanded={open}
            aria-controls={id}
            aria-label={`Show ${label} list`}
            onClick={toggle}
          >
            <Icon name="chevronDown" size={16} />
          </button>
        </>
      ) : (
        <button
          type="button"
          className={`nav__link nav__trigger ${active ? 'is-active' : ''} ${open ? 'is-open' : ''}`}
          aria-expanded={open}
          aria-controls={id}
          onClick={toggle}
        >
          {label}
          <Icon name="chevronDown" size={16} />
        </button>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            id={id}
            className="nav__menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16 }}
          >
            {items.length > 0 && (
              <ul>
                {items.map((p) => (
                  <li key={p.id}>
                    <NavLink to={projectPath(p)} className={({ isActive }) => `nav__menu-item ${isActive ? 'is-active' : ''}`}>
                      <span className="nav__menu-org">{p.org}</span>
                      <span className="nav__menu-title">{p.title}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
            {footer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
