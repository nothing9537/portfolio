import { FC } from 'react';

import { ServiceCardsGrid, Services } from '@/entities/service';
import { SectionWrapper } from '@/shared/layouts/section-layout';

import { Description } from '../../lib/consts/text';

const About: FC = () => {
  return (
    <SectionWrapper
      sectionId="about"
      title='Introduction'
      subTitle='Overview.'
      description={Description}
      classNames={{
        rootClassName: "relative"
      }}
    >
      <ServiceCardsGrid
        services={Services}
        className="mt-8"
      />
    </SectionWrapper>
  );
};

export default About;