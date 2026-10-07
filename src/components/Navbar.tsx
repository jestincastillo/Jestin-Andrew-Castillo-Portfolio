import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { profile } from '../content/profile'
import { projects } from '../content/projects'
import Icon from './Icon'
import ThemeSwitcher from './ThemeSwitcher'
import './Navbar.css'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()

  // Close any open menu after navigating to a new page.
  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [pathname])

  // Close menus on Escape, and the dropdown when clicking anywhere outside it.
  useEffect(() => {
    if (!dropdownOpen && !mobileOpen) return
    const onPointerDown = (e: PointerEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setDropdownOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDropdownOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [dropdownOpen, mobileOpen])

  // Open on hover for mouse users; touch and keyboard users use the arrow button.
  const hover = (open: boolean) => (e: ReactPointerEvent) => {
    if (e.pointerType === 'mouse') setDropdownOpen(open)
  }

  const linkClass = ({ isActive }: { isActive: boolean }) => `nav__link ${isActive ? 'is-active' : ''}`

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

          <div className="nav__dropdown" ref={dropdownRef} onPointerEnter={hover(true)} onPointerLeave={hover(false)}>
            <NavLink to="/projects" className={linkClass}>
              Projects
            </NavLink>
            <button
              type="button"
              className={`nav__chevron ${dropdownOpen ? 'is-open' : ''}`}
              aria-expanded={dropdownOpen}
              aria-controls="projects-menu"
              aria-label="Show project list"
              onClick={() => setDropdownOpen((open) => !open)}
            >
              <Icon name="chevronDown" size={16} />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  id="projects-menu"
                  className="nav__menu"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.16 }}
                >
                  <ul>
                    {projects.map((p) => (
                      <li key={p.id}>
                        <NavLink to={`/projects/${p.id}`} className={({ isActive }) => `nav__menu-item ${isActive ? 'is-active' : ''}`}>
                          <span className="nav__menu-org">{p.org}</span>
                          <span className="nav__menu-title">{p.title}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                  <Link to="/projects" className="nav__menu-all">
                    View all projects <Icon name="arrowRight" size={14} />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>

        <div className="nav__right">
          <ThemeSwitcher />
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
              <NavLink to="/projects" end className={linkClass}>
                Projects
              </NavLink>
              <ul className="nav__mobile-projects">
                {projects.map((p) => (
                  <li key={p.id}>
                    <NavLink to={`/projects/${p.id}`} className={linkClass}>
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
