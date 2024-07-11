import {Experience} from "@/types";

const experiencesData: Experience[] = [
  {
    date: 'Mar 2024 - Current',
    title: 'Founding Product Engineer at KAY.AI',
    description: 'Building automation tools for financial institutions, led frontend and design.',
    website: 'https://kay.ai',
    points: [
      'Building the next-gen automation tool for financial institutions.',
      'Leading Frontend and Design.',
      'Built working prototype in 7 days.',
      'Tech Stack: ReactJs, Typescript, TailwindCSS, AWS, ShadCN'
    ],
  },
  {
    date: 'Feb - Nov 2023',
    title: 'Co-Founder / CTO at DreamboatAI',
    description: 'Designed and developed LLMOps Platform, built multiple LLM apps, created proxy middleware.',
    website: 'https://dreamboat.ai',
    points: [
      'Led the team for the design and development of LLMOps Platform to help monitor, manage, and debug LLM apps.',
      'Built a proxy middleware using Cloudflare Workers achieving under 20ms latency.',
      'Built multiple LLM Apps for experimentation.',
      'Developed Divedash - Chrome Extension that suggests Prompt Templates for ChatGPT.',
      'Developed Almada - LinkedIn Icebreaker Generator using LinkedIn URL.',
      'Tech Stack: ReactJs, Typescript, Rails, Node, AWS, Cloudflare, TimescaleDB, Redis, PostgreSQL'
    ],
  },
  {
    date: 'Aug 2021 - Nov 2022',
    title: 'Co-Founder / CTO at EngageBud',
    description: 'Developed Influencerbit and Engagebud, handled 11M+ users, raised $100K funding.',
    website: 'https://engagebud.com',
    points: [
      'Led the team to design and develop the full stack of Influencerbit - Customer Led Influencer Marketing Platform for E-Commerce Brands.',
      'Built Engagebud - Gamification Platform for E-Com Brands.',
      'Developed specialized, customizable software solutions balancing technical complexity with brand-specific adaptability.',
      'Managed server which handled 11M+ users and oversaw the creation of 5M+ discount codes.',
      'Tech Stack: ReactJs, Rails, Typescript, PostgreSQL, Javascript'
    ],
  },
  {
    date: 'May 2020 - Jun 2021',
    title: 'Product Engineer at ProfileBud',
    description: 'Led frontend development, created payment and admin portals, developed GoLang server.',
    website: 'https://profilebud.com',
    points: [
      'Led the frontend development for the company as one of the founding members.',
      'Learned and made responsive websites, blogs via Gatsby, payment and admin portals following Agile principles.',
      'Developed a GoLang server to handle 20M+ users data with 1K+ req/s.',
      'Tech Stack: ReactJs, Rails, GoLang, Gatsby, Javascript'
    ],
  },
];

export default experiencesData;
