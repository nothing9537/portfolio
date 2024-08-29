import { FC } from 'react';

import { styles } from '@/shared/consts/styles';
import { cn } from '@/shared/lib/utils/cn';

export const HeroTitle: FC = () => {
  return (
    <div>
      <h1 className={cn(styles.heroHeadText)}>Hi, I'm <span className="text-[#915eff]">Vadym</span></h1>
      <p className={cn(styles.heroSubText, 'mt-2 text-white-100')}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, perspiciatis?
      </p>
    </div>
  )
}
