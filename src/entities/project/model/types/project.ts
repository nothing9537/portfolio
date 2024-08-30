import { ClassValue } from 'clsx';

export type ProjectTag = {
  name: string;
  className: ClassValue;
};

export type ProjectItem = {
  name: string;
  description: string;
  tags: ProjectTag[];
  image: string;
  sourceCodeUrl?: string;
  application?: {
    icon?: string;
    url?: string;
  };
};
