import { html, css, javascript, typescript, reactjs, redux, tailwind, nodejs, mongodb, git, figma, featureSlicedDesign, nextjs, nestjs, sass, storybook, styledComponents, vite, webpack, zustand } from '@/shared/assets';

import { TechnologyItem } from '../../model/types/technology';

export const Technologies: TechnologyItem[] = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  // { name: "MongoDB", icon: mongodb },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "Feature Sliced Design", icon: featureSlicedDesign },
  { name: "Next JS", icon: nextjs },
  { name: "Nest JS", icon: nestjs },
  { name: "Sass", icon: sass },
  // { name: "Storybook", icon: storybook },
  // { name: "Styled Components", icon: styledComponents },
  { name: "Vite", icon: vite },
  // { name: "Webpack", icon: webpack },
  // { name: "Zustand", icon: zustand }
];