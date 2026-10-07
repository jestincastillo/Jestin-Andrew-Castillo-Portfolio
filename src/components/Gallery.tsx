import { AnimatePresence } from 'framer-motion'
import { useState, type CSSProperties } from 'react'
import type { ProjectImage } from '../types'
import ImageFrame from './ImageFrame'
import Lightbox from './Lightbox'

interface GalleryProps {
  images: ProjectImage[]
  columns?: 1 | 2 | 3
}

/** A grid of captioned images. Clicking one opens it full-screen. */
export default function Gallery({ images, columns }: GalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const cols = columns ?? (images.length === 1 ? 1 : 2)

  return (
    <>
      <div className="gallery" style={{ '--cols': cols } as CSSProperties}>
        {images.map((image, i) => (
          <figure key={`${image.src}-${i}`} className="gallery__item">
            <ImageFrame image={image} fit={cols === 1 ? 'natural' : 'contain'} onOpen={() => setOpenIndex(i)} />
            {image.caption && <figcaption>{image.caption}</figcaption>}
          </figure>
        ))}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <Lightbox images={images} index={openIndex} onClose={() => setOpenIndex(null)} onChange={setOpenIndex} />
        )}
      </AnimatePresence>
    </>
  )
}
