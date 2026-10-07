import type { Project } from '../../types'

// ─────────────────────────────────────────────────────────────────────────────
// HOW TO EDIT A PROJECT
// • Text: change any string. Anything in [square brackets] is a placeholder.
// • Add a section: copy one { title: ..., ... } block in `sections` and paste it
//   where you want it. Remove a section: delete its whole { ... } block.
// • Add a picture: put the file in public/images/baja/ and add
//   { src: 'baja/your-file.jpg', caption: '...' } to a section's `images` list.
//   Remove a picture: delete its { src: ... } line.
// • Until a picture file exists, the site shows a placeholder box with the
//   exact path it's looking for, so you can add images whenever you're ready.
// ─────────────────────────────────────────────────────────────────────────────

const baja = {
  id: 'longhorn-baja-racing',
  org: 'Longhorn Baja Racing',
  title: '[Subsystem] Design for a Baja SAE Off-Road Vehicle',
  summary:
    "Designing, analyzing, and building the [component/subsystem] for UT Austin's single-seat off-road race vehicle, which competes in Baja SAE.",
  role: '[Subsystem] Design Engineer',
  timeline: '[Fall 20XX] – Present',
  team: '[Subsystem] subteam',
  tags: ['Vehicle Design', 'CAD', 'FEA', 'Manufacturing'],
  tools: ['SolidWorks', 'SolidWorks Simulation / ANSYS', '[Machining / Welding]'],
  cover: { src: 'baja/cover.jpg', caption: 'The Longhorn Baja Racing car' },

  highlights: [
    'Reduced [component] mass by [X]% while keeping a minimum factor of safety of [X]',
    'Validated the design with FEA across [N] load cases (impact, braking, cornering)',
    'Took the part from first sketch to a [machined / welded / printed] part on the car',
  ],

  links: [
    // { label: 'Team website', url: 'https://...' },
  ],

  sections: [
    {
      title: 'Overview',
      paragraphs: [
        "Longhorn Baja Racing is UT Austin's Baja SAE team. Each year, students design, build, and race a single-seat off-road vehicle against university teams from around the world. The car is judged in static events (design, cost, and business presentations) and dynamic events such as acceleration, hill climb, maneuverability, suspension and traction, and a four-hour endurance race.",
        'Every team runs the same stock engine, so the advantage comes from engineering: a lighter car, a stronger and more reliable chassis, and a drivetrain and suspension that put the power down over rough terrain. My work focused on the [component/subsystem], which [one sentence on what it does on the car].',
      ],
    },
    {
      title: 'Problem & Requirements',
      paragraphs: [
        'The previous [component] [describe the problem: it was heavy, it failed during testing, it was hard to manufacture, it did not package well, etc.]. I set out to redesign it around a clear set of requirements:',
      ],
      bullets: [
        'Withstand [X] g impact loads from jump landings and rough terrain without yielding',
        'Weigh under [X] lb ([X]% lighter than the previous design)',
        'Be manufacturable in-house with [mill / lathe / waterjet / welding fixture]',
        'Fit within the existing [frame / suspension / drivetrain] packaging and comply with Baja SAE rules',
      ],
    },
    {
      title: 'Preliminary Design',
      paragraphs: [
        'I started by benchmarking the previous design and [other teams / commercial parts], then generated [N] concepts. I compared them in a weighted decision matrix on mass, strength, manufacturability, cost, and ease of maintenance.',
        'Hand calculations for [bending / shear / bearing stress] gave me first-pass dimensions before moving into CAD, which kept the CAD iterations focused.',
      ],
      images: [
        { src: 'baja/decision-matrix.png', caption: 'Weighted decision matrix comparing concepts' },
        { src: 'baja/hand-calcs.jpg', caption: 'First-pass hand calculations' },
      ],
    },
    {
      title: 'Design Sketches',
      paragraphs: ['Early sketches exploring geometry, load paths, and how the part mounts to the rest of the car.'],
      images: [
        { src: 'baja/sketch-1.jpg', caption: 'Concept sketch: [describe]' },
        { src: 'baja/sketch-2.jpg', caption: 'Concept sketch: [describe]' },
        { src: 'baja/sketch-3.jpg', caption: 'Selected concept with key dimensions' },
      ],
      columns: 3,
    },
    {
      title: 'CAD',
      paragraphs: [
        'I modeled the [component] in SolidWorks as a fully parametric part so key dimensions could be changed quickly as the FEA results came in. The assembly was checked against the full vehicle model for clearance through the full range of [suspension travel / steering lock].',
      ],
      images: [
        { src: 'baja/cad-iso.png', caption: 'Final CAD model, isometric view' },
        { src: 'baja/cad-assembly.png', caption: 'Component in the full vehicle assembly' },
        { src: 'baja/drawing.png', caption: 'Manufacturing drawing' },
      ],
    },
    {
      title: 'FEA',
      paragraphs: [
        'I ran static structural analyses in [SolidWorks Simulation / ANSYS] for [front impact / bump / braking / cornering] load cases derived from [hand calculations / data from previous seasons]. Boundary conditions modeled [describe fixtures, e.g. bolted joints as fixed hinges].',
        'A mesh convergence study confirmed the results were stable to within [X]%. The final design has a minimum factor of safety of [X] in the worst-case load case, with peak stress concentrated at [location], which I addressed by [adding a fillet / changing wall thickness / adding a gusset].',
      ],
      images: [
        { src: 'baja/fea-stress.png', caption: 'Von Mises stress, [load case]' },
        { src: 'baja/fea-fos.png', caption: 'Factor of safety plot' },
      ],
    },
    {
      title: 'Manufacturing & Testing',
      paragraphs: [
        'The part was [machined / welded / waterjet-cut / printed] [in-house / with a sponsor]. [Describe any testing: fit checks on the car, physical load testing, or how it held up during practice runs and competition.]',
      ],
      images: [{ src: 'baja/manufactured.jpg', caption: 'Finished part installed on the car' }],
    },
    {
      title: 'Results & Lessons Learned',
      bullets: [
        '[Result: weight saved, failure eliminated, performance improvement]',
        '[Lesson: something you would do differently next time]',
        '[Lesson: a skill you developed, e.g. designing for manufacturability]',
      ],
    },
  ],
} satisfies Project

export default baja
