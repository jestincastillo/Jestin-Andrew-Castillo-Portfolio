import { useState } from 'react'
import { profile } from '../content/profile'
import { imageUrl } from '../lib/paths'
import Icon from './Icon'
import Reveal from './Reveal'

/**
 * Your headshot on the home page, to the right of your name.
 * If the photo file hasn't been added yet, the live site simply leaves the spot
 * out; while running locally (npm run dev) it shows where to put the file.
 */
export default function ProfilePhoto() {
  const src = profile.photo ? imageUrl(profile.photo) : ''
  const [failed, setFailed] = useState(false)
  const missing = !src || failed

  if (missing && !import.meta.env.DEV) return null

  return (
    <Reveal className="hero__photo" delay={0.1}>
      <div className={`frame hero__photo-frame ${missing ? 'frame--missing' : ''}`}>
        {missing ? (
          <div className="frame__placeholder">
            <Icon name="user" size={30} />
            <span>Add your photo</span>
            <code>public/images/{profile.photo || 'profile.jpg'}</code>
          </div>
        ) : (
          <img src={src} alt={`Photo of ${profile.name}`} onError={() => setFailed(true)} />
        )}
      </div>
    </Reveal>
  )
}
