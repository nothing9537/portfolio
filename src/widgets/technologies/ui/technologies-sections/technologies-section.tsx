import { FC } from 'react';

import { TechnologiesGrid, Technologies as TechnologiesList } from '@/entities/technology';
import { SectionWrapper } from '@/shared/layouts/section-layout';

const Technologies: FC = () => {
  return (
    <SectionWrapper
      title='Technologies'
      subTitle='What I have worked with.'
      sectionId='skills'
    >
      <TechnologiesGrid items={TechnologiesList} />
    </SectionWrapper>
  );
};

export default Technologies;