// ─────────────────────────────────────────────────────────────────────────────
// ABOUT ME PAGE: edit this file to change the About Me page.
// Your bio and skills come from profile.ts (the same ones shown on the home page).
//
// LEADERSHIP: one entry per team you've led. `projectId` links it to a project
// file, so the organization, role, and dates come from that project (edit them
// there). Each string in `points` is one bullet. Add or remove bullets freely.
// These bullets were written from what you described on each project page.
// ─────────────────────────────────────────────────────────────────────────────

import { getProject } from './projects'

export interface LeadershipEntry {
  /** The `id` of a project in src/content/projects/ (e.g. 'longhorn-baja-racing'). */
  projectId: string
  points: string[]
}

/**
 * Leadership entries joined with their project (for organization, role, dates, and link).
 * Used by the About Me page and the leadership bullets at the top of the home page.
 */
export function getLeadership() {
  return about.leadership.flatMap((entry) => {
    const project = getProject(entry.projectId)
    return project ? [{ ...entry, project }] : []
  })
}

export const about = {
  leadership: [
    {
      projectId: 'longhorn-neurotech',
      points: [
        'Leading the mechanical subteam of the 6-axis robotic arm prosthetic project',
        "Focusing the team's work on mechanical design, failure modes and effects analysis (FMEA), and heat transfer systems",
        'Designing a humanoid, 3D-printable robotic arm that can carry objects over 5 lbs, support multiple grip styles, and actuate individual fingers to replicate hand gestures',
      ],
    },
    {
      projectId: 'longhorn-baja-racing',
      points: [
        "Driving 7 interdisciplinary subteams to refine and optimize integration, streamlining cross-functional workflows and eliminating pre-existing bottlenecks",
        "Optimizing an all-terrain race car's ergonomics, which encapsulates driver comfort, safety, and the vehicle's control systems for a 4-hour endurance race along a rugged track",
        "Leading the design and fabrication of our custom seat, steering wheel, body panels, and brake & throttle pedals",
        "Ensuring proper fitment between all drivers within the vehicle and ensuring each driver can fully actuate the control systems at full range of motion without any obstructions from within the roll cage",
        "Designing an adjustable brake pedal assembly that gives each of our four drivers their own personalized setting for braking stiffness and pedal range of motion",
        'Saw firsthand how difficult it was for the team to track its bills of materials, which inspired the supply chain tracker I built at Agentic Innovations',
      ],
    },
    {
      projectId: 'enable-ut-austin',
      points: [
        'Led the 15-member Test Hands team in designing and 3D printing 15 custom-fit prosthetics for clients across the world',
        "Collaborated with 6 colleagues to design and fabricate a prosthetic for a young client across the globe with a below-the-elbow amputation",
        "Communicated with the North American chapter of e-NABLE to speak with our recipient and their family to set design criteria, from gripping everyday objects to comfortable all-day wear",
        'Chose the Kwawu arm design and scaled the adult model down by 10% so the client could grow into it',
        'Tuned rubber band stiffness and strap tightness until the hand could consistently support objects over 5 lbs, closed reliably, and felt comfortable',
      ],
    },
  ] satisfies LeadershipEntry[],
}
