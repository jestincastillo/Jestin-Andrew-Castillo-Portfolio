// ─────────────────────────────────────────────────────────────────────────────
// YOUR INFO: edit this file to change your name, bio, contact links, and skills.
// Anything in [square brackets] is a placeholder to replace.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Jestin Andrew Castillo',
  /** Shown under your name on the home page. */
  title: 'Mechanical Engineering Student · The University of Texas at Austin',
  /** One line used in the browser tab and footer. */
  tagline: 'Design, analysis, and hands-on builds.',

  /** Each string is one paragraph on the home page. */
  bio: [
    "I'm a mechanical engineering student at The University of Texas at Austin who likes taking an idea from a rough sketch to a part I can hold, test, and improve upon.",
    'Across Longhorn Baja Racing, Longhorn Neurotech, and e-NABLE @ UT Austin, I have worked through the full design loop: defining requirements, sketching concepts, modeling in CAD, checking designs with FEA, and building and testing prototypes.',
  ],

  email: 'jestin.andrew.castillo@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jestin-andrew-castillo/',
  github: 'https://github.com/jestincastillo',
  location: 'Houston, TX',

  /**
   * Your resume PDF. Save it as public/resume.pdf and the "Download resume"
   * button appears on the home page (visitors get it as
   * "Jestin-Andrew-Castillo-Resume.pdf"). Until the file exists, the button
   * stays hidden on the live site.
   */
  resume: 'resume.pdf',

  /**
   * Your headshot, shown to the right of your name on the home page.
   * Save it as public/images/profile.jpg. A portrait (taller than wide) photo
   * works best. Until the file exists, the spot stays hidden on the live site.
   */
  photo: 'profile.jpg',

  /** Skills shown on the home page. Add, remove, or rename groups freely. */
  skills: [
    { group: 'CAD & Design', items: ['SolidWorks', 'Fusion 360', 'Onshape', 'GD&T', 'Engineering Drawings'] },
    { group: 'Analysis', items: ['FEA (SolidWorks Simulation)', 'Hand Calculations', 'Python', 'MATLAB'] },
    { group: 'Fabrication', items: ['3D printing (FDM)', 'Machining', 'Prototyping'] },
    { group: 'Certifications', items: ['EKG Technician', 'Clinical Medical Assistant', 'Python Programming']},
    { group: 'Other', items: ['Technical writing', 'Design Reviews', 'Team Collaboration'] },
  ],
}
