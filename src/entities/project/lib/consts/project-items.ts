import { aiPlatform, AIPlatformDashboard, AngickDashboard, DiscordCloneDashboard, freezingBlood, FreezingBloodDashboard, GodeyeDashboard, productionProject, ProductionProjectDashboard, puppies, PuppiesDashboard, vercel } from '@/shared/assets';

import { ProjectItem } from '../../model/types/project';

export const Projects: ProjectItem[] = [
  {
    name: "Puppies ATO-Z",
    description: "Web site for finding, adopting, selling pets in the USA. The site has a lot of functionality, personal account, modal windows, blog, breed comparison and much more!",
    image: PuppiesDashboard,
    tags: [
      { name: "typescript", className: "blue-text-gradient" },
      { name: "react", className: "blue-text-gradient" },
      { name: "mobx", className: "blue-text-gradient" },
      { name: "styled-components", className: "pink-text-gradient" },
    ],
    application: {
      url: "https://puppies-ato-z.vercel.app",
      icon: puppies,
    }
  },
  {
    name: "AI Platform",
    description: "A training project designed to explore new technologies and sub-goals. The project provides APIs from some AI providers, there is a fake subscription system, content generators and more!",
    image: AIPlatformDashboard,
    tags: [
      { name: "typescript", className: "blue-text-gradient" },
      { name: "nextjs", className: "blue-text-gradient" },
      { name: "feature-sliced-design", className: "blue-text-gradient" },
      { name: "zustand", className: "blue-text-gradient" },
      { name: "tailwindcss", className: "pink-text-gradient" },
      { name: "eslint", className: "pink-text-gradient" },
      { name: "shadcn-ui", className: "pink-text-gradient" },
      { name: "prisma", className: "green-text-gradient" },
      { name: "react-hook-form", className: "green-text-gradient" },
      { name: "stripe", className: "green-text-gradient" },
    ],
    sourceCodeUrl: "https://github.com/nothing9537/ai-platform",
    application: {
      url: "https://ai-platform-eight.vercel.app",
      icon: aiPlatform,
    }
  },
  {
    name: "Discord Clone",
    description: "A training project designed to learn new technologies and sub-goals. The project provides a Discord-like service, with the ability to create servers and channels, join them, participate in real-time video and audio chats, upload files, and communicate.",
    image: DiscordCloneDashboard,
    tags: [
      { name: "typescript", className: "blue-text-gradient" },
      { name: "nextjs", className: "blue-text-gradient" },
      { name: "zustand", className: "blue-text-gradient" },
      { name: "tailwindcss", className: "pink-text-gradient" },
      { name: "shadcn-ui", className: "pink-text-gradient" },
      { name: "prisma", className: "green-text-gradient" },
      { name: "react-hook-form", className: "green-text-gradient" },
      { name: "livekit", className: "green-text-gradient" },
    ],
    sourceCodeUrl: "https://github.com/nothing9537/discord-clone",
    application: {
      url: "https://discord-clone-production-7510.up.railway.app",
      icon: vercel,
    }
  },
  {
    name: "Production Project",
    description: "A training project designed to learn new technologies and sub-goals. The project has no practical value, but it was developed according to best practices and with maximum code quality. Anyway, users have the ability to view fake articles, leave comments, change the design of the application and more!",
    image: ProductionProjectDashboard,
    tags: [
      { name: "typescript", className: "blue-text-gradient" },
      { name: "react", className: "blue-text-gradient" },
      { name: "feature-sliced-design", className: "blue-text-gradient" },
      { name: "redux-toolkit", className: "blue-text-gradient" },
      { name: "scss", className: "pink-text-gradient" },
      { name: "stylelint", className: "pink-text-gradient" },
      { name: "eslint", className: "pink-text-gradient" },
      { name: "react-hook-form", className: "green-text-gradient" },
      { name: "storybook", className: "green-text-gradient" },
      { name: "webpack", className: "green-text-gradient" },
      { name: "vite", className: "green-text-gradient" },
      { name: "cypress", className: "green-text-gradient" },
      { name: "jest", className: "green-text-gradient" },
      { name: "i18n", className: "green-text-gradient" },
    ],
    sourceCodeUrl: "https://github.com/nothing9537/production-react-advanced-project",
    application: {
      url: "http://216.128.146.136",
      icon: productionProject,
    }
  },
  {
    name: "Godeye Backtesting",
    description: "My project to backtest trading indicators and other trading utilities. Users had an opportunity to run backtests of pre-writed indicators, trading bots for them, some other utilities. Many complex problems were solved, but the project did not get life.",
    image: GodeyeDashboard,
    tags: [
      { name: "typescript", className: "blue-text-gradient" },
      { name: "react", className: "blue-text-gradient" },
      { name: "feature-sliced-design", className: "blue-text-gradient" },
      { name: "redux-toolkit", className: "blue-text-gradient" },
      { name: "tailwindcss", className: "pink-text-gradient" },
      { name: "shadcn-ui", className: "pink-text-gradient" },
      { name: "eslint", className: "pink-text-gradient" },
      { name: "react-hook-form", className: "green-text-gradient" },
      { name: "vite", className: "green-text-gradient" },
      { name: "nestjs (microservices)", className: "green-text-gradient" },
      { name: "typeorm", className: "green-text-gradient" },
      { name: "mysql", className: "green-text-gradient" },
      { name: "websockets", className: "green-text-gradient" },
      { name: "socket.io", className: "green-text-gradient" },
      { name: "zustand", className: "green-text-gradient" },
      { name: "nodejs", className: "green-text-gradient" },
    ],
  },
  {
    name: "Freezing Blood",
    description: "Web site for project servers community game CS:GO/CS2. Users can write in real-time chat, exchange items, open cases, view profiles, create tickets, sign contracts, join game sessions and much more!",
    image: FreezingBloodDashboard,
    tags: [
      { name: "typescript", className: "blue-text-gradient" },
      { name: "react", className: "blue-text-gradient" },
      { name: "redux-toolkit", className: "blue-text-gradient" },
      { name: "styled-components", className: "pink-text-gradient" },
      { name: "react-hook-form", className: "green-text-gradient" },
      { name: "vite", className: "green-text-gradient" },
      { name: "websockets", className: "green-text-gradient" },
      { name: "socket.io", className: "green-text-gradient" },
    ],
    application: {
      url: "https://freez-blood.com",
      icon: freezingBlood,
    }
  },
  {
    name: "Angick Inc",
    description: "A business site for carrier in the US that transports luxury cars interstate. The backend is currently unavailable.",
    image: AngickDashboard,
    tags: [
      { name: "typescript", className: "blue-text-gradient" },
      { name: "react", className: "blue-text-gradient" },
      { name: "redux-toolkit", className: "blue-text-gradient" },
      { name: "scss", className: "pink-text-gradient" },
      { name: "webpack", className: "green-text-gradient" },
    ],
    application: {
      url: "https://angick.com",
      icon: vercel,
    }
  },
];