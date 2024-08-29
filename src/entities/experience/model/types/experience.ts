import { ClassValue } from 'clsx';

export type ExperienceItem = {
  title: string;
  company: string;
  icon: string;
  iconBg: ClassValue;
  date: string;
  points: string[];
};