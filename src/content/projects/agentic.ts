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
  tags: ['Generative AI', 'Supply Chain', 'Customer Discovery'],
  // tools: ['[Tool 1]', '[Tool 2]'],
  cover: { src: 'agentic/cover.jpg', caption: 'Supply Chain Tracker Home Page' },

  // highlights: ['[Key outcome #1]', '[Key outcome #2]'],

  links: [
    // { label: 'Company website', url: 'https://...' },
  ],

  sections: [
    {
      title: 'Overview',
      paragraphs: [
        'Agentic Innovations aims to develop AI-powered solutions to problems plaguing teams and businesses worldwide.',
        "As an Applied AI Engineering Intern, I was tasked with conducting customer discovery to identify potential problems that could be solved through the ethical use of artificial intelligence, and then develop generalized AI tools which could be trained to become efficient in working with one another to solve this problem. As a Team Lead at Longhorn Baja Racing, my team and I struggled with keeping track of our bills of materials, which sparked my interest in creating this agentic solution to this common problem that many other collegiate teams face. During the customer discovery phase of our project, I spoke with 5 other collegiate SAE racing teams, across Formula SAE and Baja SAE, and each team affirmed my team's initial struggles with updating bills of materials and tracking component dependencies.",
      ],
    },
    {
      title: 'Tools I Developed',
      bullets: ["Web Scraper - An AI-powered tool which scrapes the web through the use of a Google Gemini API key to search for and generate relevant answers to user queries, while citing the sources it used to synthesize its answer. Also capable of searching for queried forms, such as online job applications, and displaying all items required from the user. The foundation for my team's Supply Chain Tracker project.", 'Alternate Sourcing Engine (ASE) - A specialized version of my previously developed Web Scraper which focuses on searching the web for suppliers and alternate components. Allows users to rank their priorities between pricing, lead time, and reliability. Ranks suppliers on a scale from 0-100 based on these set priorities, and highlights unique features such as free shipping over a certain price.', 'Workflow Mapper - Generates a workflow pattern for a given process and highlights the critical path and slack timeframes. Allows users to edit the workflow by adding new tasks and an entirely new workflow if an assembly depends on more than one process. This tool also depicts a realistic timeframe for the generated/edited workflow as well as recommended next courses of action for the user. '],
    },
    {
      title: 'Images',
      paragraphs: [''],
      images: [
        { src: 'agentic/web-scraper1.jpg', caption: 'Web Scraper, the Foundational Tool for my Alternate Sourcing Engine' },
        { src: 'agentic/web-scraper2.jpg', caption: 'Web Scraper, Displaying Related Forms and Required Items on a Form from the User' },
        { src: 'agentic/process-1.jpg', caption: 'Alternate Sourcing Engine (ASE), Inputs' },
        { src: 'agentic/process-2.jpg', caption: 'ASE, Outputs for a Tilton 76 Series 5/8" Bore Size Master Cylinder, Part # 76-625, $123.50, Lead Time of 7 Days' },
        { src: 'agentic/process-3.jpg', caption: 'Workflow Mapper, Based on a Formula SAE Vehicle Suspension Assembly' },
      ],
      columns: 1, // all three side by side (use 2 for bigger images, with the third centered below)
      centered: true, // centers the images and their captions
    },
    {
      title: 'Results',
      bullets: [
        "With this supply chain tracker, I was able to optimize Longhorn Baja Racing's budget by 10.2% and reduced critical path component delivery by 10 days",
        'This experience provided deep insight into supply chain dynamics, illustrating how vendor lead times and critical component dependencies directly dictate overall assembly schedules. This opportunity taught me about the various events that can affect the way components reach an engineering team and how component dependencies affect the production of an assembly as a whole, and the benefits of being able to track these events in fine detail.'
      ],
    },
  
  ],
} satisfies Project

export default agentic
