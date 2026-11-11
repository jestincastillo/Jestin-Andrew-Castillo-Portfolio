import type { Project } from '../../types'

// See baja.ts for a quick guide to adding/removing sections and pictures.
// Pictures for this project go in public/images/neurotech/.

const neurotech = {
  id: 'longhorn-neurotech',
  org: 'Longhorn Neurotech',
  title: '6-Axis Robotic Prosthetic Arm',
  summary:
    'Designing the mechanical linkages, electronic housing components, and thermal dissipation systems for a wearable 6-axis bionic limb. The prosthetic arm is actuated via an EMG-reading Mudra Link armband, capable of individual finger movement for hand gestures. Modularly designed to be removed from its base and worn as a functional prosthetic, if the user desires.',
  status: 'In Progress', // label on the project card and Projects dropdown; delete when the project is done
  role: 'Prosthetic Mechanical Lead Engineer',
  timeline: 'September 2026 – Present',
  team: 'Prosthetic, Mechanical',
  tags: ['Assistive Tech', 'CAD', 'Prototyping', '3D Printing', 'User-Centered Design'],
  tools: ['SolidWorks', 'SolidWorks Simulation', '3D printing'],
  cover: { src: 'neurotech/cad-arm8.png', caption: 'Basic Forearm to Fingers Model' },

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
        'Designed, conducted FEA analyses (WIP), and produced GD&T engineering drawings (TBD) in SolidWorks.',
      ],
      images: [
        { src: 'neurotech/cad-arm8.png', caption: 'Basic Forearm to Fingers Model' },
        { src: 'neurotech/cad-arm9.png', caption: 'Full Arm Assembly on Its Rotating Base, Desk-Mounted Configuration' },
      ],
      centered: true,
      subsections: [
        {
          title: 'Fingers',
          images: [
            { src: 'neurotech/cad-finger3.png', caption: 'Proximal Finger Segment' },
            { src: 'neurotech/cad-finger4.png', caption: 'Middle Finger Segment' },
            { src: 'neurotech/cad-finger7.png', caption: 'Distal Finger Segment (Fingertip)' },
            { src: 'neurotech/cad-finger6.png', caption: 'Complete Finger Flexion, Side View' },
            { src: 'neurotech/cad-finger5-front.png', caption: 'Four-Finger Assembly Mounted to Palm Frame, Front View' },
            { src: 'neurotech/cad-finger5-back.png', caption: 'Four-Finger Assembly Mounted to Palm Frame, Back View' },
          ],
          centered: true,
        },
        {
          title: 'Palm/Wrist',
          images: [{ src: 'neurotech/cad-palmwrist7.png', caption: 'Forearm-Wrist-Palm Assembly (In Progress)' }],
          centered: true,
        },
        {
          title: 'Forearm',
          images: [
            { src: 'neurotech/cad-arm6.png', caption: 'Detachable Forearm for Physical Use' },
            { src: 'neurotech/cad-arm5.png', caption: 'Forearm Side View' },
          ],
          centered: true,
        },
        {
          title: 'Base',
          paragraphs: [
            'Using a simple two-gear setup, a motor placed on the top of the base rotates a gear from inside the casing which rotates another gear to rotate the entire arm about the z-axis.',
          ],
          images: [
            { src: 'neurotech/cad-base1.jpg', caption: 'Prosthetic Base Assembly, Isometric View' },
            { src: 'neurotech/cad-base2.png', caption: 'Prosthetic Base Gear System' },
          ],
          centered: true,
        },
      ],
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
      subsections: [
        {
          title: 'Base',
          paragraphs: [
            'For our first prototype, I focused more on depicting the size of the base to visualize how the rest of the prosthetic should be sized. In future designs and prototypes, I will implement housing for electrical components within the base to increase the weight and stability of the foundation.',
          ],
          images: [
            { src: 'neurotech/baseprototype1.jpg', caption: 'Base Prototype, Arm Rotation About z-axis' },
            { src: 'neurotech/baseprototype2.jpg', caption: 'Base Prototype, Top Casing Removed' },
          ],
          centered: true,
        },
        {
          title: 'Fingers',
          paragraphs: [
            'After printing our first finger assembly prototype with a 0.004" tolerance and passing a string through its dedicated channel, we found that the fingers were fully capable of complete flexion. I then discovered that the joints actuated in the order of middle, proximal, then distal. To support the future goal of implementing grasping capabilities, I altered the tolerances along each joint such that the order would instead be proximal, middle, then distal. This is to allow the prosthetic to grip objects universally, as curling the distal segment first would appear non-humanlike when attempting to grasp smaller objects.',
          ],
          images: [
            { src: 'neurotech/test-finger-uncurled.jpg', caption: 'Printed Tendon-Driven Finger on Palm Frame, Extended' },
            { src: 'neurotech/test-finger-curled.jpg', caption: 'Printed Finger Curled by Pulling the Tendon String' },
            { src: 'neurotech/test-finger-2-uncurled.jpg', caption: 'Version 2 Finger (White) Beside Version 1 (Blue) on Palm Frame, Extended' },
            { src: 'neurotech/test-finger-2-curled.jpg', caption: 'Version 2 Finger Curled by Pulling the Tendon String' },
            { src: 'neurotech/finger-1-vs-2.jpg', caption: 'Version 1 (Blue) vs. Version 2 (White) Finger, Back View' },
          ],
          centered: true,
        },
      ],
    },
    {
      title: 'Results & Next Steps',
      bullets: [
        'By the end of the Fall 2026 semester, we aim to develop a working prototype capable of actuating each finger individually for hand gesture replication.',
        'Due to our time constraints and component limitations, we could not implement a mock shoulder and two additional arms behind the forearm for added range of motion.',
        'We found that the armband we currently use is incapable of reading muscle movement behind the wrist, so we aim to implement an additional armband to read these signals and properly replicate them onto our prosthetic.',
        "Next semester, we aim to include both armbands into our design, such that we have a complete 6-axis robotic limb, capable of replicating hand gestures, gripping objects up to 5 lbs, operating at a wide range of motion when desktop-mounted, and attachable to a below-the-elbow amputee's arm as a fully functional prosthetic limb.",
      ],
    },
  ],
} satisfies Project

export default neurotech
