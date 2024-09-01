import { FC } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { fadeIn } from '@/shared/lib/utils/motion';

import { BaseProjectCardProps } from '../../model/types/project-card';
import { Description } from './description';
import { Links } from './links';
import { Tags } from './tags';

interface ProjectCardProps extends BaseProjectCardProps {
  index: number;
}

export const ProjectCard: FC<ProjectCardProps> = ({ item, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * .5, .75)}
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-4 rounded-2xl sm:w-80 w-full shadow-card"
      >
        <div className="relative w-full h-60">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <Links item={item} />
        </div>
        <Description item={item} />
        <Tags item={item} />
      </Tilt>
    </motion.div>
  );
};
