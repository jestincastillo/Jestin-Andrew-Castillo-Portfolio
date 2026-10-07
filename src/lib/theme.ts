import { useEffect, useState } from 'react'

// The color themes visitors can pick from the navbar. The actual colors live in
// src/styles/theme.css; `swatch` is just the dot shown in the theme picker.
export const THEMES = [
  { id: 'graphite', label: 'Graphite (dark neutral)', swatch: '#2a2d33' },
  { id: 'midnight', label: 'Midnight (dark blue)', swatch: '#1b2a3d' },
  { id: 'sky', label: 'Sky (light blue)', swatch: '#cfe0f2' },
] as const

export type ThemeId = (typeof THEMES)[number]['id']

/** The theme first-time visitors see. */
export const DEFAULT_THEME: ThemeId = 'graphite'

const STORAGE_KEY = 'portfolio-theme'

function readSavedTheme(): ThemeId {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (THEMES.some((t) => t.id === saved)) return saved as ThemeId
  } catch {
    // Storage can be blocked (private mode, strict privacy settings); fall back to the default.
  }
  return DEFAULT_THEME
}

export function useTheme() {
  const [theme, setTheme] = useState<ThemeId>(readSavedTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Not critical: the theme just won't be remembered next visit.
    }
  }, [theme])

  return [theme, setTheme] as const
}
