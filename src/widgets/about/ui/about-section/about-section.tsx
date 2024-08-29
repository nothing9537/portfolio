import { FC } from 'react';

import { ServiceCardsGrid, Services } from '@/entities/service';
import { SectionWrapper } from '@/shared/layouts/section-layout';
import { SectionSwitch } from '@/shared/ui/section-switch';

import { Description } from '../../lib/consts/text';

export const About: FC = () => {
  return (
    <SectionWrapper
      sectionId="about"
      title='Introduction'
      subTitle='Overview'
      description={Description}
      classNames={{
        rootClassName: "relative"
      }}
    >
      <ServiceCardsGrid
        services={Services}
        className="my-16"
      />
      <SectionSwitch toSection="work" />
    </SectionWrapper>
  );
};
