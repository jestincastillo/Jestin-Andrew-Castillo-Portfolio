const BASE = import.meta.env.BASE_URL

/**
 * Turns an image path from a project file ("baja/cad.png") into a URL that works
 * both locally and on GitHub Pages ("/<repo>/images/baja/cad.png").
 */
export function imageUrl(src: string) {
  if (/^(https?:)?\/\//.test(src) || src.startsWith('data:')) return src
  const clean = src.replace(/^\/+/, '').replace(/^(public\/)?images\//, '')
  return `${BASE}images/${clean}`
}

/** URL for any other file in public/, e.g. publicUrl('resume.pdf'). */
export function publicUrl(path: string) {
  if (/^(https?:)?\/\//.test(path)) return path
  return `${BASE}${path.replace(/^\/+/, '')}`
}

/** "Design Sketches" → "design-sketches" (used for in-page section links). */
export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
