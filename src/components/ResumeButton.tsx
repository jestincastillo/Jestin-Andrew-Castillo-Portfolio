import { profile } from '../content/profile'
import { publicUrl } from '../lib/paths'
import { useFileExists } from '../lib/useFileExists'
import Icon from './Icon'

/** Where the resume lives, the file name visitors download it as, and whether it's been added yet. */
export function useResume() {
  const url = profile.resume ? publicUrl(profile.resume) : ''
  const available = useFileExists(url, 'pdf')
  // e.g. "Jestin-Andrew-Castillo-Resume.pdf"
  const fileName = `${profile.name.trim().replace(/\s+/g, '-')}-Resume.pdf`
  return { url, available, fileName }
}

/**
 * "Download resume" button for the home page. If the PDF hasn't been added yet,
 * the live site hides the button; while running locally (npm run dev) it shows
 * where to put the file instead.
 */
export default function ResumeButton() {
  const { url, available, fileName } = useResume()

  if (available) {
    return (
      <a href={url} download={fileName} className="btn btn--ghost">
        <Icon name="download" size={16} /> Download resume
      </a>
    )
  }

  if (import.meta.env.DEV && available === false) {
    return (
      <span className="btn btn--placeholder" title="Add your resume PDF to show this button">
        <Icon name="download" size={16} /> Add resume: public/{profile.resume || 'resume.pdf'}
      </span>
    )
  }

  return null
}
