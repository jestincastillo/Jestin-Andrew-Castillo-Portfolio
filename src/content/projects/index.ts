import type { Project } from '../../types'
import agentic from './agentic'
import baja from './baja'
import enable from './enable'
import neurotech from './neurotech'

// ─────────────────────────────────────────────────────────────────────────────
// PROJECT LIST: the order here is the order used on the home page, the
// Projects page, and the navbar dropdown.
//
// To ADD a project:
//   1. Copy an existing file in this folder (e.g. agentic.ts → my-project.ts).
//   2. Change its `id`, `title`, and the rest of the content.
//   3. Import it above and add it to the list below.
//   4. Make a folder for its pictures: public/images/my-project/
//
// To REMOVE a project: delete it from the list below (and its import).
// ─────────────────────────────────────────────────────────────────────────────

export const projects: Project[] = [baja, enable, neurotech, agentic]

export function getProject(id: string | undefined) {
  return projects.find((p) => p.id === id)
}
