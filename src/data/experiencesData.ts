import {Experience} from "@/types";

const experiencesData: Experience[] = [
  {
    date: 'Mar 2024 - Current',
    title: 'Founding Product Engineer at KAY.AI',
    role: "Founding Product Engineer",
    companyName: "kay.ai",
    description: 'Building Operator for Insurance Industry, leading Frontend and UX.',
    website: 'https://kay.ai',
    fullLogo: '/images/companies/kay.png',
    techStack: ["ReactJs", "Typescript", "TailwindCSS", "AWS", "ShadCN", "Python", "Playwright", "LLM"],
    points: [
      'Leading UI/UX for Copilot to automate insurance workflows',
      'Built the Kay Admin App, Client App, and Demo Instance for seamless AI-driven automation.',
      'Experimenting with emerging AI models, techniques and UX paradigms to enhance usability and system design.',
    ],
  },
  {
    date: 'Feb - Nov 2023',
    title: 'Co-Founder / CTO at DreamboatAI',
    role: "Co-Founder / CTO",
    companyName: "DreamboatAI",
    description: 'Designed and developed LLMOps Platform, built multiple LLM apps.',
    website: 'https://dreamboat.ai',
    fullLogo: '/images/companies/dreamboatai.png',
    techStack: ["ReactJs", "Typescript", "Rails", "Node", "AWS", "Cloudflare", "TimescaleDB", "Redis", "PostgreSQL"],
    points: [
      'Led the team for design and development of LLMOps Platform to help monitor, manage, and debug LLM apps following Agile Principles.',
      'Built a high-performance proxy middleware using Cloudflare Workers, achieving sub-20ms response times.',
      'Created multiple LLM-Powered Apps: Divedash - Chrome extension suggesting prompt templates for ChatGPT. Almada - Linkedin Icebreaker generator from profile URLs.',
    ],
  },
  {
    date: 'Aug 2021 - Nov 2022',
    title: 'Co-Founder / CTO at EngageBud',
    role: "Co-Founder / CTO",
    companyName: "EngageBud",
    description: 'Developed Influencerbit and Engagebud, handled 11M+ users, raised $100K funding.',
    website: 'https://engagebud.com',
    fullLogo: '/images/companies/engagebud.png',
    techStack: ["ReactJs", "Typescript", "Rails", "PostgreSQL", "Javascript"],
    points: [
      'Led the team to develop Influencerbit - Customer Led Influencer Marketing Platform for E-Commerce Brands.',
      'Built Engagebud - Gamification Platform for Ecommerce.',
      'Scaled backend to handle 13M+ users and generated 6M+ discount codes',
      'Raised $100K funding from Upekkha, a SaaS accelerator.',
      'Developed highly customizable software, balancing performance and adaptability.'
    ],
  },
  {
    date: 'May 2020 - Jun 2021',
    title: 'Product Engineer at ProfileBud',
    role: "Product Engineer",
    companyName: "ProfileBud",
    description: 'Led frontend development, created payment and admin portals, developed GoLang server.',
    website: 'https://profilebud.com',
    fullLogo: '/images/companies/profilebud.png',
    techStack: ["ReactJs", "Rails", "GoLang", "Gatsby", "Javascript"],
    points: [
      'Led the frontend development for the company as one of the founding members.',
      'Learned and made responsive websites, blogs via Gatsby, payment and admin portals following Agile principles.',
      'Developed a GoLang server to handle 20M+ users data with 1K+ req/s.',
    ],
  },
];

export default experiencesData;
