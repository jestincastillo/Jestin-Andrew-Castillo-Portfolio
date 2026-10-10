// ─────────────────────────────────────────────────────────────────────────────
// ABOUT ME PAGE: edit this file to change the About Me page.
// Your bio and skills come from profile.ts (the same ones shown on the home page).
//
// LEADERSHIP: one entry per team you've led. `projectId` links it to a project
// file, so the organization, role, and dates come from that project (edit them
// there). Each string in `points` is one bullet. Add or remove bullets freely.
// These bullets were written from what you described on each project page.
// ─────────────────────────────────────────────────────────────────────────────

export interface LeadershipEntry {
  /** The `id` of a project in src/content/projects/ (e.g. 'longhorn-baja-racing'). */
  projectId: string
  points: string[]
}

export const about = {
  leadership: [
    {
      projectId: 'longhorn-neurotech',
      points: [
        'Lead the mechanical subteam of the 6-axis robotic arm prosthetic project',
        "Focus the team's work on mechanical design, failure modes and effects analysis (FMEA), and heat transfer systems",
        'Set the design requirements: a humanoid, 3D-printable arm that carries objects over 5 lbs, supports multiple grip styles, and actuates individual fingers',
      ],
    },
    {
      projectId: 'longhorn-baja-racing',
      points: [
        "Lead vehicle ergonomics: driver comfort, safety, and the vehicle's control systems",
        "Designing an adjustable brake pedal assembly that gives each of the team's four drivers their own braking stiffness and range of motion",
        'Consulted other competing teams for design advice before starting concept sketches',
        'Saw firsthand how hard it was for the team to track its bills of materials, which inspired the supply chain tracker I built at Agentic Innovations',
      ],
    },
    {
      projectId: 'enable-ut-austin',
      points: [
        'Led the Test Hands team in designing and 3D printing a body-powered prosthetic for a young client',
        "Worked with the recipient and their family to set requirements, from gripping everyday objects to comfortable all-day wear",
        'Chose the Kwawu arm design and scaled it 10% so the client could grow into it',
        'Ran the fitting session, tuning rubber band stiffness and strap tightness until the hand closed reliably and felt comfortable',
      ],
    },
  ] satisfies LeadershipEntry[],
}
