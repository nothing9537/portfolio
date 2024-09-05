import { FC } from 'react';

import { styles } from '@/shared/consts/styles';
import { cn } from '@/shared/lib/utils/cn';
import { PC_Canvas } from '@/shared/ui/canvas';
import { VisibilityHandler } from '@/shared/lib/components/visibility-handler';

import { HeroLine } from './hero-line';
import { HeroTitle } from './title';

export const Hero: FC = () => {
  return (
    <section className="w-full mx-auto min-h-screen bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <div className={cn('inset-0 max-w-7xl mx-auto flex flex-col gap-4 mt-4', styles.paddingX)}>
        <div className="w-full flex flex-row items-start gap-4">
          <HeroLine />
          <HeroTitle />
        </div>
      </div>
      <VisibilityHandler className="mt-4 w-full h-[28rem]">
        {(isVisible) => {
          return (
            <PC_Canvas isVisible={isVisible} />
          )
        }}
      </VisibilityHandler>
    </section>
  );
};
