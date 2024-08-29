import { aiPlatform, freezingBlood, productionProject, puppies, vercel } from '@/shared/assets';

import { ExperienceItem } from '../../model/types/experience';

export const Experiences: ExperienceItem[] = [
  {
    title: "Front-end Developer",
    company: "Puppies Ato-Z",
    icon: puppies,
    iconBg: "#383E56",
    date: "Dec 2023 - Mar 2024",
    points: [
      "Online marketplace for finding, buying, exchanging and adopting dogs in the US",
      "The site has a blog, a personal account with messages, posting ads, lots of filters, and comparisons.",
      "Working in a small team.",
      "Developed some of the components/pages (Login/Registration pages, personal account, breed comparisons, backend integration, etc.)."
    ],
    applicationUrl: "https://puppies-ato-z.vercel.app",
    skills: ["React", "TypeScript", "MobX", "Styled Components", "react-hook-form"],
  },
  {
    title: "Full Stack Developer",
    company: "Professional Education | AI Platform",
    icon: aiPlatform,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Nov 2023",
    points: [
      "In the app, the user can use some AI models to their advantage.",
      "There are 5 models available for the user to generate: chatbot, code, music, image, video generation.",
      "Developed from scratch both front-end and back-end.",
    ],
    githubUrl: "https://github.com/nothing9537/ai-platform",
    applicationUrl: "https://ai-platform-eight.vercel.app",
    skills: ["Next JS", "TypeScript", "Zustand", "react-hook-form", "TailwindCSS", "shadcn-ui", "prisma", "Feature Sliced Design"]
  },
  {
    title: "Full Stack Developer",
    company: "Professional Education | Discord Clone",
    icon: vercel,
    iconBg: "#383E56",
    date: "Oct 2023 - Nov 2023",
    points: [
      "This app is a clone of the original discord.",
      "Here, users have the ability to log in, create servers/channels communicate in them, communicate in voice and video chat in live-time, edit, delete messages.",
      "Developed from scratch both front-end and back-end.",
    ],
    githubUrl: "https://github.com/nothing9537/discord-clone",
    applicationUrl: "https://discord-clone-production-7510.up.railway.app",
    skills: ["Next JS", "TypeScript", "Zustand", "react-hook-form", "TailwindCSS", "shadcn-ui", "prisma", "socket.io"]
  },
  {
    title: "Full Stack Developer",
    company: "Professional Education | Production Project ",
    icon: productionProject,
    iconBg: "#E6DEDD",
    date: "May 2023 - Oct 2023",
    points: [
      "The project was designed with maximum emphasis on code quality, structure, architecture, scalability.",
      "Familiarize and learn new tools/approaches.",
      "Nevertheless, in the application the user has authorization, the ability to view fake articles, sort them, edit profile, change the design of the application."
    ],
    skills: ["React", "TypeScript", "ESLint", "Jest", "Storybook", "Cypress", "SCSS", "Feature Sliced Design", "Redux-toolkit", "Vite JS", "Webpack", "react-hook-form"],
    githubUrl: "https://github.com/nothing9537/production-react-advanced-project",
    applicationUrl: "http://216.128.146.136",
  },
  {
    title: "Full Stack Developer",
    company: "Godeye Backtesting",
    icon: vercel,
    iconBg: "#383E56",
    date: "Feb 2023 - Sep 2023",
    points: [
      "Developed a system of backtests of trading indicators on cryptocurrencies and stocks on Node and custom trading bots.",
      "Used Node Workers to improve application performance.",
      "Created many useful utilities.",
      "Implemented a library for interacting with brokers' APIs.",
      "Created a front-end from scratch based on the shadcn-ui library, and back-end on Nest JS.",
      "Unfortunately, the project didn't get life.",
    ],
    skills: ["React", "TypeScript", "Zustand", "react-hook-form", "shadcn-ui", "TailwindCSS", "Vite", "Nest JS", "Nest JS Microservices", "WebSockets", "MySQL", "TypeORM"],
  },
  {
    title: "Front-end Developer",
    company: "Freezing-Blood",
    icon: freezingBlood,
    iconBg: "#383E56",
    date: "Nov 2022 - Feb 2023",
    points: [
      "Website for the project of community servers in the CS:GO / CS2 game.",
      "Users have many options, some of them are: Item exchange, communication, trading platform, contracts, different real-time activities. Creating tickets and much more.",
      "Full front-end development from scratch.",
      "Back-end integration.",
    ],
    applicationUrl: "https://freez-blood.com",
    skills: ["React", "TypeScript", "Redux-Toolkit", "Styled Components", "socket.io", "utility libraries"],
  },
];