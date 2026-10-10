import type { Project } from '../../types'

// See baja.ts for a quick guide to adding/removing sections and pictures.
// Pictures for this project go in public/images/agentic/.
//
// This one is a lighter template because it may not involve CAD or FEA.
// If it does, copy the "Design Sketches", "CAD", or "FEA" sections from baja.ts.

const agentic = {
  id: 'agentic-innovations',
  category: 'industry', // shows under "Industry Experience" in the navbar instead of "Projects"
  org: 'Agentic Innovations',
  title: 'AI-Powered Supply Chain Tracker',
  summary: 'An autonomous all-in-one platform for engineering teams to track purchased parts, component dependencies, workflow patterns, and potential impacts to an assembly.',
  role: 'Applied AI Engineering Intern',
  timeline: 'May – August 2026',
  tags: [],
  // tools: ['[Tool 1]', '[Tool 2]'],
  cover: { src: 'agentic/cover.jpg', caption: '[Cover image]' },

  // highlights: ['[Key outcome #1]', '[Key outcome #2]'],

  links: [
    // { label: 'Company website', url: 'https://...' },
  ],

  sections: [
    {
      title: 'Overview',
      paragraphs: [
        'Agentic Innovations aims to develop AI-powered solutions to problems plaguing teams and businesses worldwide.',
        'As an Applied AI Engineering Intern, I was tasked to conduct customer discovery to identify potential problems that could be solved through the ethical use of artificial intelligence, and then develop generalized AI tools which could be trained to become efficient in working with one another to solve this problem. As a Team Lead at Longhorn Baja Racing, me and my team struggled with keeping track of our bills of materials, which sparked my interest in creating this agentic solution to this common problem which many other collegiate teams face.',
      ],
    },
    {
      title: 'Tools I Developed:',
      bullets: ['Alternate Sourcing Engine - Scrapes the web to find alternate suppliers, allowing users to rank their priorities between pricing, lead time, and reliability', 'Workflow Mapper - Generates a workflow pattern for a given process and highlights the critical path and slack timeframes'],
    },
    {
      title: 'Images',
      paragraphs: [''],
      images: [
        { src: 'agentic/process-1.jpg', caption: 'Alternate Sourcing Engin, Inputs' },
        { src: 'agentic/process-2.jpg', caption: 'Alternate Sourcing Engine, Outputs' },
        { src: 'agentic/process-3.jpg', caption: 'Workflow Mapper, Based On A Formula SAE Vehicle' },
      ],
      columns: 1, // all three side by side (use 2 for bigger images, with the third centered below)
      centered: true, // centers the images and their captions
    },
    {
      title: 'Results',
      bullets: ['Optimized Baja SAE racecar budget by 10.2% and reduced critical path component delivery by 10 days', 'This experience provided deep insight into supply chain dynamics, illustrating how vendor lead times and critical component dependencies directly dictate overall assembly schedules. This opportunity taught me the various events that may impact the way components reach an engineering team and how component dependencies affect the production of an assembly as a whole, and the benefits of being able to track these events down to a microscopic level. '],
    },
  
  ],
} satisfies Project

export default agentic
