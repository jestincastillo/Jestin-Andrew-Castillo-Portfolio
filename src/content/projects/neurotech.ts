import type { Project } from '../../types'

// See baja.ts for a quick guide to adding/removing sections and pictures.
// Pictures for this project go in public/images/neurotech/.

const neurotech = {
  id: 'longhorn-neurotech',
  org: 'Longhorn Neurotech',
  title: '[EEG Headset Hardware] for a Brain-Computer Interface',
  summary:
    'Designing [the mechanical hardware] for a student-built brain-computer interface that reads EEG signals and turns them into commands.',
  role: '[Hardware Team Member]',
  timeline: '[Semester 20XX] – Present',
  team: '[Hardware / Signal processing] team',
  tags: ['Neurotech', 'BCI', 'CAD', 'Prototyping'],
  tools: ['[SolidWorks / Fusion 360]', '3D printing', '[OpenBCI / Python]'],
  cover: { src: 'neurotech/cover.jpg', caption: 'Prototype headset' },

  highlights: [
    'Designed an adjustable headset that holds [N] electrodes at standard 10-20 positions',
    'Improved electrode contact and signal quality compared with [previous approach]',
    'Prototyped [N] iterations with 3D printing',
  ],

  links: [],

  sections: [
    {
      title: 'Overview',
      paragraphs: [
        'Longhorn Neurotech is a student organization at UT Austin focused on neurotechnology and brain-computer interfaces (BCIs). Teams combine hardware, signal processing, and software to build systems that read brain activity and use it to control devices.',
        'I worked on [the headset that holds the EEG electrodes against the scalp / describe your actual part of the project]. Good EEG data depends on consistent electrode contact, so the mechanical design directly affects how well the rest of the system works.',
      ],
    },
    {
      title: 'Problem & Requirements',
      bullets: [
        'Hold electrodes at [N] positions in the international 10-20 system',
        'Adjust to fit a range of head sizes ([X]th to [X]th percentile)',
        'Apply consistent, comfortable contact pressure through hair',
        'Route cables cleanly to reduce motion artifacts and noise',
        'Be printable and repairable with the club\'s equipment',
      ],
    },
    {
      title: 'Preliminary Design',
      paragraphs: [
        'I looked at existing open-source headsets such as [OpenBCI Ultracortex] and commercial EEG caps, then sketched concepts for [a rigid frame with spring-loaded electrode holders / a flexible band system]. The main trade-off was between [rigidity for repeatable positioning] and [comfort and adjustability].',
      ],
      images: [{ src: 'neurotech/concepts.jpg', caption: 'Early concept comparison' }],
    },
    {
      title: 'Design Sketches',
      images: [
        { src: 'neurotech/sketch-1.jpg', caption: 'Sketch: headset frame concept' },
        { src: 'neurotech/sketch-2.jpg', caption: 'Sketch: electrode holder mechanism' },
      ],
    },
    {
      title: 'CAD',
      paragraphs: [
        'I modeled [the frame and electrode holders] in [SolidWorks / Fusion 360], placing mounting points from a scaled head model so each electrode lands on its 10-20 position. [Describe the adjustment mechanism, e.g. a threaded holder, a ratchet, or a sliding rail.]',
      ],
      images: [
        { src: 'neurotech/cad-headset.png', caption: 'Headset CAD assembly' },
        { src: 'neurotech/cad-holder.png', caption: 'Electrode holder detail' },
      ],
    },
    {
      title: 'FEA',
      paragraphs: [
        '[If applicable] I used FEA to size the flexible arms so they deflect enough to fit different head shapes while applying about [X] N of contact force, and stay below the fatigue limit of [PLA / PETG / nylon]. [Describe result.]',
      ],
      images: [{ src: 'neurotech/fea-arm.png', caption: 'Deflection of a flexible arm under contact load' }],
    },
    {
      title: 'Prototyping & Testing',
      paragraphs: [
        'We printed and assembled [N] prototypes and tested them on team members for fit, comfort over [X] minutes, and signal quality. [Describe what you measured, e.g. electrode impedance or noise levels, and what changed between versions.]',
      ],
      images: [
        { src: 'neurotech/prototype.jpg', caption: 'Printed prototype' },
        { src: 'neurotech/eeg-signal.png', caption: 'Sample EEG recording' },
      ],
    },
    {
      title: 'Next Steps',
      bullets: ['[Next iteration goal]', '[Integration with the signal-processing pipeline]', '[What you learned]'],
    },
  ],
} satisfies Project

export default neurotech
