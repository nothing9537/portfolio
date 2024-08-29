import { FC } from 'react';

import { styles } from '@/shared/consts/styles';
import { cn } from '@/shared/lib/utils/cn';
import { PC_Canvas } from '@/shared/ui/canvas';

import { HeroLine } from './hero-line';
import { HeroTitle } from './title';
import { SectionSwitch } from '@/shared/ui/section-switch';

export const Hero: FC = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={cn('absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-4', styles.paddingX)}>
        <HeroLine />
        <HeroTitle />
      </div>
      <PC_Canvas />
      <SectionSwitch toSection="about" />
    </section>
  );
};
