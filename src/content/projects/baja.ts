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
  title: 'Ergonomic Brake Pedal Assembly for a Baja SAE Off-Road Vehicle',
  summary:
    "Designing, analyzing, and building driver controls systems and safety protocols for UT Austin's single-seat off-road race vehicle, which competes in Baja SAE.",
  role: 'Lead Engineer',
  timeline: 'May 2025 – Present',
  team: 'Ergonomics',
  tags: ['Vehicle Design', 'CAD', 'FEA', 'Manufacturing'],
  tools: ['SolidWorks', 'SolidWorks Simulation', 'ANSYS', 'Manual Milling'],
  cover: { src: 'baja/cover.jpg', caption: 'The Longhorn Baja Racing car' },

  highlights: [
    // 'Reduced [component] mass by [X]% while keeping a minimum factor of safety of [X]',
    // 'Validated the design with FEA across [N] load cases (impact, braking, cornering)',
    // 'Took the part from first sketch to a [machined / welded / printed] part on the car',
  ],

  links: [
    // { label: 'Team website', url: 'https://...' },
  ],

  sections: [
    {
      title: 'Overview',
      paragraphs: [
        "Longhorn Baja Racing is UT Austin's Baja SAE team. Each year, we design, build, and race a single-seat off-road vehicle against other collegiate teams from around the world on the renowned 4-hour endurance race. Our vehicle is judged in static events (design, cost, and business presentations) and dynamic events (acceleration, hill climb, maneuverability, and suspension and traction).",
        "Every team runs the same stock engine, so the advantage comes from engineering: a lighter car, a stronger and more reliable chassis, and a drivetrain and suspension that put the power down over rough terrain. My work focused on vehicle ergonomics, which encapsulates driver comfort, safety, and the vehicle's control systems.",
      ],
    },
    {
      title: 'Problem & Requirements',
      paragraphs: [
        'Ensuring each of our four drivers could reliably actuate the brake pedal would be difficult if our brake pedal was set to one determined angle and stiffness. I set out to design an adjustable brake pedal assembly, easy to set within the pressure of an ongoing race, and gives each driver their own personalized setting for braking stiffness and angular range of motion.',
      ],
      bullets: [
        'Withstand 450 lbf / 2000 N loads from any given driver',
        'Weigh within 0.5 lbs of 3 lbs (most commercial racing brake pedal assemblies weigh 3 lbs)',
        'Be manufacturable in-house with manual/CNC mill and lathe',
        'Fit within the existing chassis, steering, suspension packaging and comply with the Baja SAE 2026 rulebook',
      ],
    },
    /* {
      title: 'Preliminary Design',
      paragraphs: [
        'I started by consulting other competing teams to gain advice for how they tackled the same issue before beginning initial skeches.',
        'Hand calculations for mechanical advantages and pedal ratios gave me initial dimensions to match during the initial CAD designs.',
      ],
      images: [
        { src: 'baja/preliminary-sketch.png', caption: "Initial Sketch based on Proven Teams' Expertise"},
        // { src: 'baja/hand-calcs.jpg', caption: 'First-pass hand calculations' },
      ],
    }, */
    {
      
      title: 'Design Sketches',
      paragraphs: [
        'I started by consulting other competing teams to gain advice for how they tackled the same issue before beginning initial skeches.',
        'Hand calculations for mechanical advantages and pedal ratios gave me initial dimensions to match during the initial CAD designs.'
      ],
      images: [
        { src: 'baja/sketch-1.jpg', caption: 'Side View, Adjustable Pin Setup for Different Settings' },
        { src: 'baja/sketch-2.jpg', caption: 'Front View, Depicts Width and Fitment Within Chassis' },
      ],
      columns: 2,
      centered: true
    },
    
    {
      title: 'CAD',
      paragraphs: [
        'I modeled the assembly in SolidWorks, which I conducted continuous FEA analyses and CAD edits on until I landed on a durable, rule-compliant, personalized design. The assembly was checked against the full vehicle model for clearance through the full range of motion.',
      ],
      images: [
        { src: 'baja/cad-iso.jpg', caption: 'Final CAD model, Isometric View' },
        { src: 'baja/cad-assembly1.jpg', caption: 'Brake Pedal Side View in Chassis' },
        { src: 'baja/cad-assembly2.jpg', caption: 'Brake Pedal in Full Vehicle Assembly' },
      ],
      columns: 1,
      centered: true
    },
    {
      title: 'FEA',
      paragraphs: [
        'I ran static structural analyses in ANSYS for driver-applied load cases. Boundary conditions modeled include pin support at the base of the arm and the force exerted by the master cylinders back onto the pedal arm.',
        // 'A mesh convergence study confirmed the results were stable to within [X]%. The final design has a minimum factor of safety of [X] in the worst-case load case, with peak stress concentrated at [location], which I addressed by [adding a fillet / changing wall thickness / adding a gusset].',
      ],
      images: [
        { src: 'baja/fea-von-mises.jpg', caption: 'Von-Mises Stress, 2000 N Load Case, Applied Near The Top' },
        { src: 'baja/fea-total-deformation.jpg', caption: 'Total Deformation Simulation, 2000 N Load Case, Applied Near The Top' },
      ],
      columns: 1,
      centered: true
    },
    /* {
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
    }, */
  ],
} satisfies Project

export default baja
