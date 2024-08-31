import { FC } from 'react';

import { motion } from 'framer-motion';

import { slideIn } from '@/shared/lib/utils/motion';
import { Earth_Canvas } from '@/shared/ui/canvas';

export const Earth: FC = () => {
  return (
    <motion.div
      variants={slideIn('right', 'tween', .2, 1)}
      className="xl:w-1/2 xl:h-auto md:h-[520px] h-80"
    >
      <Earth_Canvas />
    </motion.div>
  );
};
