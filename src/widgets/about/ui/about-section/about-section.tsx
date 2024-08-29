import { FC } from 'react';

import { SectionWrapper } from '@/shared/layouts/section-layout';
import { ServiceCardsGrid, Services } from '@/entities/service';

export const About: FC = () => {
  return (
    <SectionWrapper
      sectionId="about"
      title='Introduction'
      subTitle='Overview'
      description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magnam illo eligendi? Voluptas accusantium porro possimus obcaecati magni aspernatur, quis perspiciatis, dolor cumque neque, iusto eius commodi eligendi at laudantium velit numquam sequi praesentium nisi natus architecto beatae. Veniam fugiat at ea sapiente iusto ab autem officiis reiciendis sit! Assumenda enim aspernatur aliquam beatae ratione, facilis officiis eum ut nobis eveniet repellat recusandae rem fugit aperiam quo, minus facere. Sapiente modi inventore necessitatibus possimus eius! Facilis, at. Libero maiores esse quis aperiam facere nam recusandae vitae quia! Asperiores laborum eum, voluptates impedit cumque itaque ea? Ratione sed error maiores fuga.'
    >
      <ServiceCardsGrid
        services={Services}
        className="mt-16"
      />
    </SectionWrapper>
  );
};
