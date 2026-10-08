// The shapes that every project file in src/content/projects/ must follow.
// TypeScript will underline anything that's misspelled or missing, which makes
// adding/removing sections and pictures hard to get wrong.

export interface ProjectImage {
  /**
   * Path inside public/images/, e.g. "baja/frame-fea.png" for the file
   * public/images/baja/frame-fea.png. Full https:// URLs also work.
   * If the file doesn't exist yet, a placeholder box is shown instead.
   */
  src: string
  /** Shown under the image. */
  caption?: string
  /** Screen-reader description. Falls back to the caption. */
  alt?: string
}

export interface ProjectSection {
  /** Section heading. Also appears in the "On this page" sidebar. */
  title: string
  /** Each string is one paragraph. */
  paragraphs?: string[]
  /** Optional bulleted list shown after the paragraphs. */
  bullets?: string[]
  /** Optional pictures shown after the text. */
  images?: ProjectImage[]
  /** How many images per row on desktop (defaults to 1 for a single image, otherwise 2). */
  columns?: 1 | 2 | 3
  /** true = center the images and their captions (a leftover image on the last row sits in the middle). */
  centered?: boolean
  /** Optional label next to the heading, e.g. 'In Progress'. */
  status?: string
}

export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  /** Used in the URL: /projects/<id>. Lowercase letters, numbers, and dashes only. */
  id: string
  /**
   * Which navbar menu this belongs in. 'project' (the default if left out) goes
   * under Projects; 'industry' goes under Industry Experience.
   */
  category?: 'project' | 'industry'
  /** Organization or team, e.g. "Longhorn Baja Racing". */
  org: string
  title: string
  /** One or two sentences. Shown on project cards and at the top of the project page. */
  summary: string
  role: string
  timeline: string
  /** Optional, e.g. "Suspension subteam, 8 members". */
  team?: string
  /** Short labels shown as chips on the card and project page. */
  tags: string[]
  /** Card thumbnail and the large image at the top of the project page. */
  cover?: ProjectImage
  /** Optional "Key outcomes" callout shown above the sections. */
  highlights?: string[]
  /** Optional software/tools list shown in the project header. */
  tools?: string[]
  links?: ProjectLink[]
  sections: ProjectSection[]
}
