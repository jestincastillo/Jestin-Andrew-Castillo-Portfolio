import type { Project } from '../../types'

// See baja.ts for a quick guide to adding/removing sections and pictures.
// Pictures for this project go in public/images/agentic/.
//
// This one is a lighter template because it may not involve CAD or FEA.
// If it does, copy the "Design Sketches", "CAD", or "FEA" sections from baja.ts.

const agentic = {
  id: 'agentic-innovations',
  org: 'Agentic Innovations',
  title: '[Project Title]',
  summary: '[One or two sentences: what you built or worked on, and why it mattered.]',
  role: '[Your Role]',
  timeline: '[Month 20XX] – [Month 20XX]',
  tags: ['[Tag 1]', '[Tag 2]', '[Tag 3]'],
  tools: ['[Tool 1]', '[Tool 2]'],
  cover: { src: 'agentic/cover.jpg', caption: '[Cover image]' },

  highlights: ['[Key outcome #1]', '[Key outcome #2]'],

  links: [
    // { label: 'Company website', url: 'https://...' },
  ],

  sections: [
    {
      title: 'Overview',
      paragraphs: [
        '[What Agentic Innovations does, in one or two sentences.]',
        '[What you were brought in to do, and the problem you were solving.]',
      ],
    },
    {
      title: 'My Role',
      bullets: ['[Responsibility #1]', '[Responsibility #2]', '[Responsibility #3]'],
    },
    {
      title: 'Approach',
      paragraphs: ['[How you tackled the problem: research, design, prototyping, testing, or iteration.]'],
      images: [
        { src: 'agentic/process-1.png', caption: '[Describe this image]' },
        { src: 'agentic/process-2.png', caption: '[Describe this image]' },
      ],
    },
    {
      title: 'Results',
      bullets: ['[Result with a number if possible]', '[What you learned]'],
    },
  ],
} satisfies Project

export default agentic
