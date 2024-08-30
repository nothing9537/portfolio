import { FC } from 'react';

import { styles } from '@/shared/consts/styles';
import { cn } from '@/shared/lib/utils/cn';

export const HeroTitle: FC = () => {
  return (
    <div>
      <h1 className={cn(styles.heroHeadText)}>Hi, I'm <span className="text-[#915eff]">Vadym</span></h1>
      <p className={cn(styles.heroSubText, 'mt-2 text-white-100')}>
        A frontend and almost fullstack developer. My approach combines creativity and technical precision to create intuitive and visually appealing interfaces. I will be glad to cooperate and ready to bring your ideas to life! :)
      </p>
    </div>
  )
}
