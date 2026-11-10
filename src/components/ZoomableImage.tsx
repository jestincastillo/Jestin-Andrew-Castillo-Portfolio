import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import { imageUrl } from '../lib/paths'
import type { ProjectImage } from '../types'
import Icon from './Icon'
import ImageFrame from './ImageFrame'

const MIN = 1
const MAX = 5
const CLICK_ZOOM = 2.5

interface View {
  scale: number
  x: number
  y: number
}

/**
 * An image inside the lightbox that can be zoomed (scroll wheel, pinch, click,
 * or the +/- buttons) and panned by dragging once zoomed in.
 */
export default function ZoomableImage({ image }: { image: ProjectImage }) {
  const boxRef = useRef<HTMLDivElement>(null)
  const [view, setView] = useState<View>({ scale: 1, x: 0, y: 0 })
  const [failed, setFailed] = useState(false)
  const viewRef = useRef(view)
  viewRef.current = view

  const pointers = useRef(new Map<number, { x: number; y: number }>())
  const gesture = useRef({ moved: false, pinchDist: 0 })

  /** Keep the zoomed image covering the box so it can't be dragged off-screen. */
  const clamp = (v: View): View => {
    const box = boxRef.current
    if (!box) return v
    const scale = Math.min(MAX, Math.max(MIN, v.scale))
    const w = box.clientWidth
    const h = box.clientHeight
    return {
      scale,
      x: Math.min(0, Math.max(w - w * scale, v.x)),
      y: Math.min(0, Math.max(h - h * scale, v.y)),
    }
  }

  /** Zoom to `scale`, keeping the point (px, py) in the box fixed under the cursor. */
  const zoomAt = (scale: number, px: number, py: number) => {
    const v = viewRef.current
    const next = Math.min(MAX, Math.max(MIN, scale))
    const ratio = next / v.scale
    setView(clamp({ scale: next, x: px - (px - v.x) * ratio, y: py - (py - v.y) * ratio }))
  }

  const zoomCenter = (scale: number) => {
    const box = boxRef.current
    if (box) zoomAt(scale, box.clientWidth / 2, box.clientHeight / 2)
  }

  const localPoint = (clientX: number, clientY: number) => {
    const rect = boxRef.current!.getBoundingClientRect()
    return { x: clientX - rect.left, y: clientY - rect.top }
  }

  // Wheel zoom needs a non-passive listener so the page doesn't scroll.
  useEffect(() => {
    const box = boxRef.current
    if (!box) return
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      const p = localPoint(e.clientX, e.clientY)
      zoomAt(viewRef.current.scale * Math.exp(-e.deltaY * 0.00075), p.x, p.y)
    }
    box.addEventListener('wheel', onWheel, { passive: false })
    return () => box.removeEventListener('wheel', onWheel)
  })

  const pinchDistance = () => {
    const [a, b] = [...pointers.current.values()]
    return Math.hypot(a.x - b.x, a.y - b.y)
  }

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    if (pointers.current.size === 1) gesture.current.moved = false
    if (pointers.current.size === 2) gesture.current.pinchDist = pinchDistance()
  }

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const prev = pointers.current.get(e.pointerId)
    if (!prev) return
    const dx = e.clientX - prev.x
    const dy = e.clientY - prev.y
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    if (Math.abs(dx) + Math.abs(dy) > 2) gesture.current.moved = true

    if (pointers.current.size === 2) {
      const dist = pinchDistance()
      const [a, b] = [...pointers.current.values()]
      const mid = localPoint((a.x + b.x) / 2, (a.y + b.y) / 2)
      if (gesture.current.pinchDist > 0) zoomAt(viewRef.current.scale * (dist / gesture.current.pinchDist), mid.x, mid.y)
      gesture.current.pinchDist = dist
    } else if (pointers.current.size === 1 && viewRef.current.scale > 1) {
      const v = viewRef.current
      setView(clamp({ ...v, x: v.x + dx, y: v.y + dy }))
    }
  }

  const onPointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    const wasTap = pointers.current.size === 1 && !gesture.current.moved
    pointers.current.delete(e.pointerId)
    if (pointers.current.size < 2) gesture.current.pinchDist = 0
    if (wasTap) {
      const p = localPoint(e.clientX, e.clientY)
      if (viewRef.current.scale > 1) setView({ scale: 1, x: 0, y: 0 })
      else zoomAt(CLICK_ZOOM, p.x, p.y)
    }
  }

  const zoomed = view.scale > 1

  // Image not added yet: show the usual placeholder instead of a zoom viewer.
  if (failed) return <ImageFrame image={image} fit="natural" className="lightbox__frame" />

  return (
    <div className="zoom">
      <div
        ref={boxRef}
        className={`zoom__box ${zoomed ? 'zoom__box--zoomed' : ''}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <img
          src={imageUrl(image.src)}
          alt={image.alt ?? image.caption ?? ''}
          draggable={false}
          onError={() => setFailed(true)}
          style={{ transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})` }}
        />
      </div>

      <div className="zoom__controls">
        <button type="button" onClick={() => zoomCenter(view.scale / 1.5)} disabled={!zoomed} aria-label="Zoom out">
          <Icon name="minus" size={18} />
        </button>
        <span className="zoom__level">{Math.round(view.scale * 100)}%</span>
        <button type="button" onClick={() => zoomCenter(view.scale * 1.5)} disabled={view.scale >= MAX} aria-label="Zoom in">
          <Icon name="plus" size={18} />
        </button>
        <span className="zoom__hint">Scroll, pinch, or click to zoom · drag to pan</span>
      </div>
    </div>
  )
}
