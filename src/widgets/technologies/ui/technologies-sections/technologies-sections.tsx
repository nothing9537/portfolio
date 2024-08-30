import { FC } from 'react';

import { SectionWrapper } from '@/shared/layouts/section-layout';
import { TechnologiesGrid, Technologies as TechnologiesList } from '@/entities/technology';

export const Technologies: FC = () => {
  return (
    <SectionWrapper
      title='Technologies'
      subTitle='What I have worked with'
      sectionId='skills'
      classNames={{
        titleClassName: 'text-center',
        subTitleClassName: 'text-center'
      }}
    >
      <TechnologiesGrid items={TechnologiesList} />
    </SectionWrapper>
  )
}
