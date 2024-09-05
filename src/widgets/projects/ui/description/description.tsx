import { FC } from 'react'
import { motion } from 'framer-motion';

import { fadeIn } from '@/shared/lib/utils/motion';

export const Description: FC = () => {
  return (
    <motion.p
      variants={fadeIn('right', 'tween', .1, 1)}
      className='mt-3 text-secondary text-[16px] max-w-3xl leading-8'
    >
      Here are almost all the projects I have done and participated in. Some of them have a link to the source code and a link to the application itself. You can find them on top of the card.

      The projects below show my tagging skills. If the project has a link to the GitHub repository, it is described in detail in the README.

      These projects show how versatile a developer I am and what technologies I've worked with. The basic technologies are listed in the project tags.
    </motion.p>
  );
};
