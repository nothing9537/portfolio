import { FC } from 'react';

import { styles } from '@/shared/consts/styles';
import { cn } from '@/shared/lib/utils/cn';
import { PC_Canvas } from '@/shared/ui/canvas';
import { VisibilityHandler } from '@/shared/lib/components/visibility-handler';

import { HeroLine } from './hero-line';
import { HeroTitle } from './title';

export const Hero: FC = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={cn('absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col gap-4', styles.paddingX)}>
        <div className="w-full flex flex-row items-start gap-4">
          <HeroLine />
          <HeroTitle />
        </div>
        <VisibilityHandler className="w-full h-full">
          {(isVisible) => {
            return (
              <PC_Canvas isVisible={isVisible} />
            )
          }}
        </VisibilityHandler>
      </div>
    </section>
  );
};
