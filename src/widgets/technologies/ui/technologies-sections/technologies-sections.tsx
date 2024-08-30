import { FC } from 'react';

import { TechnologiesGrid, Technologies as TechnologiesList } from '@/entities/technology';
import { SectionWrapper } from '@/shared/layouts/section-layout';
import { SectionSwitch } from '@/shared/ui/section-switch';

export const Technologies: FC = () => {
  return (
    <SectionWrapper
      title='Technologies'
      subTitle='What I have worked with.'
      sectionId='skills'
    >
      <TechnologiesGrid items={TechnologiesList} />
      <SectionSwitch toSection="projects" className="mt-24" />
    </SectionWrapper>
  )
}
