import { FC } from 'react';

import { styles } from '@/shared/consts/styles';
import { cn } from '@/shared/lib/utils/cn';

export const HeroTitle: FC = () => {
  return (
    <div>
      <h1 className={cn(styles.heroHeadText)}>Hi, I'm <span className="text-[#915eff]">Vadym</span></h1>
      <p className={cn(styles.heroSubText, 'mt-2 text-white-100')}>
        A Frontend Developer with 3.5+ years of experience in JavaScript, TypeScript, React, and Next.js. I specialize in building scalable, high-performance applications with a focus on clean code and seamless user experiences. Ready to bring your ideas to life!
      </p>
    </div>
  )
}
