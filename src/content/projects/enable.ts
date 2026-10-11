import type { Project } from '../../types'

// See baja.ts for a quick guide to adding/removing sections and pictures.
// Pictures for this project go in public/images/enable/.

const enable = {
  id: 'enable-ut-austin',
  org: 'e-NABLE at UT Austin',
  title: 'Custom 3D-Printed Prosthetic Hand',
  summary:
    'Designing and 3D printing a low-cost, body-powered prosthetic hand tailored to a recipient with an upper-limb difference.',
  role: 'Test Hands Team Lead | International Hands Member',
  timeline: 'October 2025 - October 2026',
  team: 'Test Hands',
  tags: ['Assistive Tech', 'CAD', '3D Printing', 'User-Centered Design'],
  tools: ['SolidWorks', 'Bambu Studio', 'FDM printing'],
  cover: { src: 'enable/cover.jpg', caption: 'Assembled prosthetic hand' },

  /*
  highlights: [
    'Delivered a custom-fit device to [a recipient / N recipients] at no cost',
    'Scaled and modified a parametric hand design from patient measurements',
    'Iterated through [N] printed prototypes to improve grip and comfort',
  ],
  */

  links: [
    // { label: 'e-NABLE community', url: 'https://enablingthefuture.org' },
  ],

  sections: [
    {
      title: 'Overview',
      paragraphs: [
        'e-NABLE is a global volunteer network that designs and 3D prints upper-limb assistive devices for people with limb differences. The UT Austin chapter works directly with the national e-NABLE chapter to build devices that fit clients and properly support their daily lives.',
        'Our team designed a body-powered, wrist-actuated hand for a young child with a partial hand difference. Bending the wrist pulls string cords which close the fingers, so the device is fully functional without motors or batteries.',
      ],
    },
    {
      title: 'Recipient Needs & Requirements',
      paragraphs: ['We started by contacting the recipient and their family to understand what the client wanted to be able to do:'],
      bullets: [
        'Grip everyday objects such as a water bottle, cup, or kitchen utensils.',
        'Lightweight and comfortable enough to wear for 6 hours',
        'Sized from hand and forearm measurements, with room to adjust as they grow',
        'Personalized styling: colored filament requests from the recipient',
      ],
    },
    {
      title: 'Preliminary Considerations',
      paragraphs: [
        "We compared open-source e-NABLE designs such as the Phoenix Hand and Kwawu models on grip strength, ease of assembly, and fit for the recipient's residual limb. We chose the Kwawu arm since our client had a below the elbow amputation and would not have access to wrist-actuated models.",
        "Scaling was based on measurements of the recipient's residual limb, with a scale factor of 10% to match their proportions, as a model the client could grow into is more beneficial than a model which is already too small for the client.",
      ],
      images: [
        { src: 'enable/phoenix.jpg', caption: 'e-Nable Phoenix Hand Model' },
        { src: 'enable/kwawu.jpg', caption: 'e-Nable Kwawu Arm Model' },
      ],
      centered: true
    },
    {
      /*title: 'Design Sketches',
      images: [
        { src: 'enable/sketch-1.jpg', caption: 'Sketch: [palm / gauntlet modification]' },
        { src: 'enable/sketch-2.jpg', caption: 'Sketch: [tendon routing / finger joint]' },
      ],
    },
    {*/
      title: 'CAD',
      paragraphs: [
        'In Bambu Studio, I scaled the base model to improve fit and proportions for our client. I kept critical features, such as pin holes and tendon channels, at fixed sizes so the hardware still fit after scaling.',
      ],
      images: [
        { src: 'enable/slice1.jpg', caption: 'Hand Component in Bambu Studio' },
        { src: 'enable/slice2.jpg', caption: '3D Printing Pathway Displayed in Bambu Studio' },
      ],
      centered: true
    },
    /*{
      title: 'FEA',
      paragraphs: [
        'To check that the thinnest printed features would survive repeated gripping, I ran a simplified static analysis on the [finger knuckle / palm hinge region] using the expected tendon tension of [X] N and [PLA / PETG] material properties. [Describe the result, e.g. peak stress and factor of safety, and any changes you made.]',
        'Note: FDM parts are weaker between layers, so I [oriented the print / increased infill / added walls] to account for anisotropy.',
      ],
      images: [{ src: 'enable/fea.png', caption: 'Stress in the [component] under grip load' }],
    }, */
    {
      title: 'Printing, Assembly & Fitting',
      paragraphs: [
        'Parts were printed in PETG with flexible velcro grip pads, then assembled with rubber bands and zip ties. During the fitting session we alternated between different rubber band stiffnesses and adjusted the tightness of the velcro strap so the hand closed reliably and felt comfortable.',
      ],
      images: [
        { src: 'enable/print1.jpg', caption: 'Final Product, Inner View' },
        { src: 'enable/print2.jpg', caption: 'Final Product, Outer View (Client Name Censored For Privacy)' },
        { src: 'enable/print3.jpg', caption: 'Grip Test, Water Bottle' },
      ],
      centered: true
    }, /*
    {
      title: 'Impact & Lessons Learned',
      bullets: [
        '[Impact: what the recipient can now do]',
        '[Lesson: designing with and for a real user]',
        '[Lesson: printing tolerances, part orientation, or iteration speed]',
      ],
    }, */
  ],
} satisfies Project

export default enable
