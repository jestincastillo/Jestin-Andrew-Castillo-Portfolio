import type { Project } from '../../types'

// See baja.ts for a quick guide to adding/removing sections and pictures.
// Pictures for this project go in public/images/enable/.

const enable = {
  id: 'enable-ut-austin',
  org: 'e-NABLE at UT Austin',
  title: 'Custom 3D-Printed Prosthetic Hand',
  summary:
    'Designing and 3D printing a low-cost, body-powered prosthetic hand tailored to a recipient with an upper-limb difference.',
  role: '[Designer / Project Lead]',
  timeline: '[Semester 20XX]',
  team: '[N]-person design team',
  tags: ['Assistive Tech', 'CAD', '3D Printing', 'User-Centered Design'],
  tools: ['[Fusion 360 / SolidWorks]', '[Cura / PrusaSlicer]', 'FDM printing'],
  cover: { src: 'enable/cover.jpg', caption: 'Assembled prosthetic hand' },

  highlights: [
    'Delivered a custom-fit device to [a recipient / N recipients] at no cost',
    'Scaled and modified a parametric hand design from patient measurements',
    'Iterated through [N] printed prototypes to improve grip and comfort',
  ],

  links: [
    // { label: 'e-NABLE community', url: 'https://enablingthefuture.org' },
  ],

  sections: [
    {
      title: 'Overview',
      paragraphs: [
        'e-NABLE is a global volunteer network that designs and 3D prints free upper-limb assistive devices for people born with limb differences or who have lost fingers or hands. The UT Austin chapter works directly with recipients to build devices that fit their bodies and their daily lives.',
        'Our team designed a body-powered, wrist-actuated hand for [describe the recipient in general terms, e.g. "a young child with a partial hand difference"]. Bending the wrist pulls tendon cords that close the fingers, so the device works without motors or batteries.',
      ],
    },
    {
      title: 'Recipient Needs & Requirements',
      paragraphs: ['We started by meeting the recipient and their family to understand what they wanted to be able to do. That conversation turned into design requirements:'],
      bullets: [
        'Grip everyday objects such as [a cup, a bike handlebar, a backpack strap]',
        'Lightweight and comfortable enough to wear for [X] hours',
        'Sized from hand and forearm measurements, with room to adjust as they grow',
        '[Personal touch: color choice, theme, or design request from the recipient]',
      ],
    },
    {
      title: 'Preliminary Design',
      paragraphs: [
        'We compared open-source e-NABLE designs such as [the Phoenix Hand / Raptor Reloaded / Kinetic Hand] on grip strength, ease of assembly, and fit for the recipient\'s residual limb. We chose [design] because [reason], then planned modifications for [palm size / finger length / gauntlet fit].',
        'Scaling was based on measurements of the recipient\'s [unaffected hand / residual limb], with a scale factor of [X]% to match their proportions.',
      ],
      images: [
        { src: 'enable/measurements.jpg', caption: 'Hand and forearm measurements used for scaling' },
        { src: 'enable/design-comparison.png', caption: 'Comparison of candidate base designs' },
      ],
    },
    {
      title: 'Design Sketches',
      images: [
        { src: 'enable/sketch-1.jpg', caption: 'Sketch: [palm / gauntlet modification]' },
        { src: 'enable/sketch-2.jpg', caption: 'Sketch: [tendon routing / finger joint]' },
      ],
    },
    {
      title: 'CAD',
      paragraphs: [
        'In [Fusion 360 / SolidWorks], I [scaled the base model / redesigned the gauntlet / modified the finger joints] to [improve fit / add a thumb position / make room for padding]. I kept critical features, such as pin holes and tendon channels, at fixed sizes so the hardware still fit after scaling.',
      ],
      images: [
        { src: 'enable/cad-assembly.png', caption: 'Full hand assembly in CAD' },
        { src: 'enable/cad-detail.png', caption: 'Detail: [modified feature]' },
      ],
    },
    {
      title: 'FEA',
      paragraphs: [
        'To check that the thinnest printed features would survive repeated gripping, I ran a simplified static analysis on the [finger knuckle / palm hinge region] using the expected tendon tension of [X] N and [PLA / PETG] material properties. [Describe the result, e.g. peak stress and factor of safety, and any changes you made.]',
        'Note: FDM parts are weaker between layers, so I [oriented the print / increased infill / added walls] to account for anisotropy.',
      ],
      images: [{ src: 'enable/fea.png', caption: 'Stress in the [component] under grip load' }],
    },
    {
      title: 'Printing, Assembly & Fitting',
      paragraphs: [
        'Parts were printed in [PLA / PETG] with [TPU] grip pads, then assembled with [elastic cord, braided line, and pins]. During the fitting session we [adjusted tendon tension / added padding / trimmed the gauntlet] so the hand closed reliably and felt comfortable.',
      ],
      images: [
        { src: 'enable/printing.jpg', caption: 'Parts coming off the printer' },
        { src: 'enable/fitting.jpg', caption: 'Fitting session' },
      ],
    },
    {
      title: 'Impact & Lessons Learned',
      bullets: [
        '[Impact: what the recipient can now do]',
        '[Lesson: designing with and for a real user]',
        '[Lesson: printing tolerances, part orientation, or iteration speed]',
      ],
    },
  ],
} satisfies Project

export default enable
