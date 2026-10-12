import type { Project } from '../../types'

// See baja.ts for a quick guide to adding/removing sections and pictures.
// Pictures for this project go in public/images/neurotech/.

const neurotech = {
  id: 'longhorn-neurotech',
  org: 'Longhorn Neurotech',
  title: '6-Axis Robotic Arm Prosthetic',
  summary:
    'Designing the mechanical linkages, electronic housing components, and thermal dissipation systems for a desk-mounted 6-axis bionic limb. The prosthetic arm is actuated via an EMG-reading Mudra Link armband, worn by the user rather than a physically worn prosthetic.',
  status: 'In Progress', // label on the project card and Projects dropdown; delete when the project is done
  role: 'Prosthetic Mechanical Lead Engineer',
  timeline: 'September 2026 – Present',
  team: 'Prosthetic, Mechanical',
  tags: ['Assistive Tech', 'CAD', 'Prototyping', '3D Printing', 'User-Centered Design'],
  tools: ['SolidWorks', 'SolidWorks Simulation', '3D printing'],
  cover: { src: 'neurotech/cover.jpg' },

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
        'Longhorn Neurotech is a student organization at UT Austin focused on brain-computer interfaces (BCIs) and assistive devices. Technical teams combine hardware, signal processing, and software to build systems that read brain or muscle activity and use it to control devices. Final products are showcased to judges at a competition at the end of every semester.',
        'I lead the mechanical subteam of the prosthetic arm project, focusing my team on mechanical design, failure modes and effects analysis, and heat transfer systems to ensure our 3D-printed product can withstand all potential stresses while remaining humanoid in style.',
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
        'I looked at existing open-source upper-limb prosthetics such as the Ruka V2 robotic hand, then sketched concepts for actuation mechanisms based on the limited materials we have access to as a student organization.',
      ],
      images: [{ src: 'neurotech/cover.jpg', caption: 'Early Concept Sketch' }],
      centered: true
    },
    {
      title: 'Design Sketches',
      // status: 'In Progress',
      images: [
        { src: 'neurotech/sketch-1.jpg', caption: 'Preliminary Finger Model Sketches' },
        { src: 'neurotech/sketch-2.jpg', caption: 'Gripping Actuation Concepts' },
        { src: 'neurotech/sketch-3.jpg', caption: 'Alternate Finger Actuation Idea' },
        { src: 'neurotech/sketch-4.jpg', caption: 'Opposable Thumb Mechanism Concept' },
        { src: 'neurotech/sketch-5.jpg', caption: 'Modular Palm Grip Pads, Split Into 3 Segments For Natural Gripping, "Clip-On" for Ease of Hand Access and Manufacturability' },
      ],
      columns: 1,
      centered: true
    },
    {
      title: 'CAD',
      // status: 'In Progress', // delete this line when the section is finished
      paragraphs: [
        'We are still in the early stage of design, so the only CAD file I have is my first prototype of our base. Using a simple two-gear setup, a motor placed on the top of the base rotates a gear from inside the casing which rotates another gear to rotate the entire arm about the z-axis.',
      ],
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
      // status: 'In Progress',
      paragraphs: [
        'For our first prototype, I focused more on depicting the size of the base to visualize how the rest of the prosthetic should be sized. In future designs and prototypes, I will implement housing for electrical components within the base to increase the weight and stability of the foundation.',
      ],
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
