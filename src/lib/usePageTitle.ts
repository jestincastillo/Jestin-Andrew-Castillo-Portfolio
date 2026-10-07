import { useEffect } from 'react'
import { profile } from '../content/profile'

/** Sets the browser tab title, e.g. "Projects · Your Name". */
export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${profile.name}` : `${profile.name} · ${profile.tagline}`
  }, [title])
}
