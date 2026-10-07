import { THEMES, useTheme } from '../lib/theme'

/** Three colored dots in the navbar for switching between color themes. */
export default function ThemeSwitcher() {
  const [theme, setTheme] = useTheme()

  return (
    <div className="theme-switcher" role="group" aria-label="Color theme">
      {THEMES.map((t) => (
        <button
          key={t.id}
          type="button"
          className="theme-switcher__dot"
          style={{ background: t.swatch }}
          aria-pressed={theme === t.id}
          aria-label={t.label}
          title={t.label}
          onClick={() => setTheme(t.id)}
        />
      ))}
    </div>
  )
}
