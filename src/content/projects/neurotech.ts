import type { Project } from '../../types'

// See baja.ts for a quick guide to adding/removing sections and pictures.
// Pictures for this project go in public/images/neurotech/.

const neurotech = {
  id: 'longhorn-neurotech',
  org: 'Longhorn Neurotech',
  title: '6-Axis Robotic Arm Prosthetic',
  summary:
    'Designing the mechanical linkages, electronic housing components, and thermal dissipation systems for a 6-axis bionic limb capable of gripping objects over five pounds and creating realistic hand gestures, actuated via an EMG-reading Mudra Link armband worn by the prosthetic user, designed to be used on a desk or other flat surface.',
  status: 'In Progress', // label on the project card and Projects dropdown; delete when the project is done
  role: 'Prosthetic Mechanical Lead Engineer',
  timeline: 'September 2026 – Present',
  team: 'Prosthetic, Mechanical',
  tags: ['Assistive Tech', 'CAD', 'Prototyping', '3D Printing', 'User-Centered Design'],
  tools: ['SolidWorks', 'SolidWorks Simulation', '3D printing'],
  cover: { src: 'neurotech/cover.jpg' /* , caption: 'Prototype headset' */ },

  /*
  highlights: [
    'Designed an adjustable headset that holds [N] electrodes at standard 10-20 positions',
    'Improved electrode contact and signal quality compared with [previous approach]',
    'Prototyped [N] iterations with 3D printing',
  ],
  */

  links: [],

  sections: [
    {
      title: 'Overview',
      paragraphs: [
        'Longhorn Neurotech is a student organization at UT Austin focused on brain-computer interfaces (BCIs) and assistive devices. Teams combine hardware, signal processing, and software to build systems that read brain or muscle activity and use it to control devices.',
        'I lead the mechanical subteam of the prosthetic arm project, focusing my team on mechanical design, failure modes and effects analysis, and heat transfer systems to ensure our 3D printed product can withstand all potential stresses while remaining humanoid in style.',
      ],
    },
    {
      title: 'Problem & Requirements',
      bullets: [
        'Design the prosthetic to be humanoid',
        'Create mechanisms that allow large ranges of motion',
        'Carry objects that weigh over 5 lbs',
        'Support a variety of grip styles, from the typical cylindrical grasp to the tripod and key grips',
        'Allow individual finger actuation for hand gestures',
        "Be 3D printable and repairable with the club's limited equipment",
      ],
    },
    {
      title: 'Preliminary Design',
      paragraphs: [
        'I looked at existing open-source headsets such as the Ruka V2 robotic hand, then sketched concepts for actuation mechanisms based on the limited materials we have access to as a student organization.',
      ],
      images: [{ src: 'neurotech/concepts.jpg', caption: 'Early Concept Sketch' }],
      centered: true
    },
    {
      title: 'Design Sketches',
      status: 'In Progress',
      images: [
        { src: 'neurotech/sketch-1.jpg', caption: 'Preliminary Finger Model Sketches' },
        { src: 'neurotech/sketch-2.jpg', caption: 'Gripping Actuation Concepts' },
        { src: 'neurotech/sketch-3.jpg', caption: 'Opposable Thumb Linkage Concept' },
      ],
      columns: 1,
      centered: true
    },
    {
      title: 'CAD',
      status: 'In Progress', // delete this line when the section is finished
      /* paragraphs: [
        'I modeled [the frame and electrode holders] in [SolidWorks / Fusion 360], placing mounting points from a scaled head model so each electrode lands on its 10-20 position. [Describe the adjustment mechanism, e.g. a threaded holder, a ratchet, or a sliding rail.]',
      ], */
      images: [
        { src: 'neurotech/cad-base1.jpg', caption: 'Prosthetic Base Assembly, Isometric View' },
        { src: 'neurotech/cad-base2.png', caption: 'Prosthetic Base Gear System' },
      ],
      centered: true
    },
    /* {
      title: 'FEA',
      status: 'In Progress',
      paragraphs: [
        '[If applicable] I used FEA to size the flexible arms so they deflect enough to fit different head shapes while applying about [X] N of contact force, and stay below the fatigue limit of [PLA / PETG / nylon]. [Describe result.]',
      ],
      images: [{ src: 'neurotech/fea-arm.png', caption: 'Deflection of a flexible arm under contact load' }],
    }, */
    {
      title: 'Prototyping & Testing',
      status: 'In Progress',
      /* paragraphs: [
        'We printed and assembled [N] prototypes and tested them on team members for fit, comfort over [X] minutes, and signal quality. [Describe what you measured, e.g. electrode impedance or noise levels, and what changed between versions.]',
      ], */
      images: [
        { src: 'neurotech/baseprototype1.jpg', caption: 'Base Prototype, Arm Rotation About z-axis' },
        { src: 'neurotech/baseprototype2.jpg', caption: 'Base Prototype, Top Casing Removed' },
      ], 
      centered: true
    },
    /* { 
      title: 'Next Steps',
      status: 'In Progress',
      bullets: ['[Next iteration goal]', '[Integration with the signal-processing pipeline]', '[What you learned]'],
    }, */
  ],
} satisfies Project

export default neurotech
