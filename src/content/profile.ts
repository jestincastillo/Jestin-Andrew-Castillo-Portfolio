// ─────────────────────────────────────────────────────────────────────────────
// YOUR INFO: edit this file to change your name, bio, contact links, and skills.
// Anything in [square brackets] is a placeholder to replace.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Jestin Andrew Castillo',
  /** Shown under your name on the home page. */
  title: 'Engineering Student · The University of Texas at Austin',
  /** One line used in the browser tab and footer. */
  tagline: 'Design, analysis, and hands-on builds.',

  /** Each string is one paragraph on the home page. */
  bio: [
    "I'm an engineering student at The University of Texas at Austin who likes taking an idea from a rough sketch to a part I can hold, test, and improve. Most of my work happens on student design teams, where the deadlines are real and the hardware has to survive actual use.",
    'Across Longhorn Baja Racing, e-NABLE, and Longhorn Neurotech I have worked through the full design loop: defining requirements, sketching concepts, modeling in CAD, checking designs with FEA, and building and testing prototypes. [Add a sentence about what you want to do next, e.g. the kind of internship or role you are looking for.]',
  ],

  email: 'you@example.com',
  linkedin: 'https://www.linkedin.com/in/your-handle',
  github: 'https://github.com/jestincastillo',
  location: 'Austin, TX',

  /**
   * Optional: drop your resume into public/ (e.g. public/resume.pdf) and set
   * this to 'resume.pdf'. Leave it as '' to hide the resume button.
   */
  resume: '',

  /** Skills shown on the home page. Add, remove, or rename groups freely. */
  skills: [
    { group: 'CAD & Design', items: ['SolidWorks', 'Fusion 360', 'Onshape', 'GD&T', 'Engineering drawings'] },
    { group: 'Analysis', items: ['FEA (SolidWorks Simulation / ANSYS)', 'Hand calculations', 'MATLAB', 'Python'] },
    { group: 'Fabrication', items: ['3D printing (FDM)', 'Machining', 'Welding', 'Prototyping'] },
    { group: 'Other', items: ['Technical writing', 'Design reviews', 'Team collaboration'] },
  ],
}
