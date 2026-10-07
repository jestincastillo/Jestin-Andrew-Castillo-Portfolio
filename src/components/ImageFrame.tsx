import { useState } from 'react'
import { imageUrl } from '../lib/paths'
import type { ProjectImage } from '../types'
import Icon from './Icon'

interface ImageFrameProps {
  image?: ProjectImage
  /**
   * cover   – fills a fixed-shape box, cropping edges (cards)
   * contain – fits inside a fixed-shape box without cropping (image grids)
   * natural – keeps the picture's own shape (single large images)
   */
  fit?: 'cover' | 'contain' | 'natural'
  className?: string
  /** If given, clicking the image calls this (used to open the lightbox). */
  onOpen?: () => void
  eager?: boolean
}

/**
 * Shows an image, or a placeholder box if the image hasn't been added yet.
 * While running locally (npm run dev) the placeholder shows exactly which file
 * path it's looking for.
 */
export default function ImageFrame({ image, fit = 'natural', className = '', onOpen, eager }: ImageFrameProps) {
  const src = image?.src ? imageUrl(image.src) : ''
  const [failedSrc, setFailedSrc] = useState<string | null>(null)
  const missing = !src || failedSrc === src

  const img = !missing && (
    <img
      src={src}
      alt={image?.alt ?? image?.caption ?? ''}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailedSrc(src)}
    />
  )

  return (
    <div className={`frame frame--${fit} ${missing ? 'frame--missing' : ''} ${className}`}>
      {missing ? (
        <Placeholder src={image?.src} />
      ) : onOpen ? (
        <button type="button" className="frame__button" onClick={onOpen} aria-label={`Enlarge image${image?.caption ? `: ${image.caption}` : ''}`}>
          {img}
        </button>
      ) : (
        img
      )}
    </div>
  )
}

function Placeholder({ src }: { src?: string }) {
  const expectedPath = src && !/^(https?:)?\/\//.test(src) ? `public/images/${src.replace(/^\/+/, '').replace(/^(public\/)?images\//, '')}` : null
  return (
    <div className="frame__placeholder">
      <Icon name="image" size={26} />
      <span>{import.meta.env.DEV ? 'Add image' : 'Image coming soon'}</span>
      {import.meta.env.DEV && expectedPath && <code>{expectedPath}</code>}
    </div>
  )
}
