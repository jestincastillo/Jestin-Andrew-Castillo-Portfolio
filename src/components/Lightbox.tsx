import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import type { ProjectImage } from '../types'
import Icon from './Icon'
import ImageFrame from './ImageFrame'

interface LightboxProps {
  images: ProjectImage[]
  index: number
  onClose: () => void
  onChange: (index: number) => void
}

/** Full-screen image viewer. Esc closes; arrow keys move between images. */
export default function Lightbox({ images, index, onClose, onChange }: LightboxProps) {
  const image = images[index]
  const many = images.length > 1
  const prev = () => onChange((index - 1 + images.length) % images.length)
  const next = () => onChange((index + 1) % images.length)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (many && e.key === 'ArrowLeft') prev()
      if (many && e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  })

  // Stop the page behind the viewer from scrolling while it's open.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return createPortal(
    <motion.div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={image.caption ?? 'Image viewer'}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <button type="button" className="lightbox__close" onClick={onClose} aria-label="Close image viewer">
        <Icon name="close" size={22} />
      </button>

      {many && (
        <button
          type="button"
          className="lightbox__nav lightbox__nav--prev"
          onClick={(e) => {
            e.stopPropagation()
            prev()
          }}
          aria-label="Previous image"
        >
          <Icon name="chevronLeft" size={26} />
        </button>
      )}

      <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
        <ImageFrame key={image.src} image={image} fit="natural" className="lightbox__frame" eager />
        {(image.caption || many) && (
          <figcaption>
            {image.caption}
            {many && <span className="lightbox__count">{index + 1} / {images.length}</span>}
          </figcaption>
        )}
      </figure>

      {many && (
        <button
          type="button"
          className="lightbox__nav lightbox__nav--next"
          onClick={(e) => {
            e.stopPropagation()
            next()
          }}
          aria-label="Next image"
        >
          <Icon name="chevronRight" size={26} />
        </button>
      )}
    </motion.div>,
    document.body,
  )
}
