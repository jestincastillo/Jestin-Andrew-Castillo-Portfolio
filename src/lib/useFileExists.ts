import { useEffect, useState } from 'react'

/**
 * Checks whether a file in public/ has actually been added, so the site can
 * hide a button instead of linking to a missing file.
 * Returns null while checking, then true or false.
 *
 * `type` must appear in the server's Content-Type (e.g. 'pdf'), because the
 * dev server answers missing files with the site's HTML page instead of a 404.
 */
export function useFileExists(url: string, type: string) {
  const [exists, setExists] = useState<boolean | null>(url ? null : false)

  useEffect(() => {
    if (!url) {
      setExists(false)
      return
    }
    let cancelled = false
    fetch(url, { method: 'HEAD', cache: 'no-cache' })
      .then((res) => {
        const contentType = res.headers.get('content-type') ?? ''
        if (!cancelled) setExists(res.ok && contentType.includes(type))
      })
      .catch(() => {
        if (!cancelled) setExists(false)
      })
    return () => {
      cancelled = true
    }
  }, [url, type])

  return exists
}
