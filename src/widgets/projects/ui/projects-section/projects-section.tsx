import { FC } from 'react'

import { ProjectsGrid, Projects as ProjectsList } from '@/entities/project';
import { SectionWrapper } from '@/shared/layouts/section-layout';

import { Description } from '../description/description';

export const Projects: FC = () => {
  return (
    <SectionWrapper
      title="Projects"
      subTitle="Projects that I've done."
      sectionId="projects"
    >
      <Description />
      <ProjectsGrid items={ProjectsList} />
    </SectionWrapper>
  );
};
