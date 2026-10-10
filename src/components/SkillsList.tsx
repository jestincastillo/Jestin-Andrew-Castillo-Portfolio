import { profile } from '../content/profile'

/** Skill groups from profile.ts, shown on the home page and the About Me page. */
export default function SkillsList() {
  return (
    <>
      {profile.skills.map((group) => (
        <div key={group.group} className="skills__group">
          <h3>{group.group}</h3>
          <ul className="tags">
            {group.items.map((item, i) => (
              <li key={`${item}-${i}`} className="tag">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
