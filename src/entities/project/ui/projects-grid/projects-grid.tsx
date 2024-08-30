import { FC } from 'react';

import { ProjectItem } from '../../model/types/project';
import { ProjectCard } from '../project-card/project-card';

interface ProjectsGridProps {
  items: ProjectItem[];
}

const renderProjectItem = (item: ProjectItem, index: number) => (
  <ProjectCard
    index={index}
    key={item.name + index}
    item={item}
  />
);

export const ProjectsGrid: FC<ProjectsGridProps> = ({ items }) => {
  return (
    <div className="mt-20 flex flex-wrap gap-8">
      {items.map(renderProjectItem)}
    </div>
  );
};
