import { FC } from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { fadeIn } from '@/shared/lib/utils/motion';

import { ServiceItem } from '../../model/types/service';

interface ServiceCardProps {
  item: ServiceItem;
  index: number;
}

export const ServiceCard: FC<ServiceCardProps> = ({ item, index }) => {
  return (
    <Tilt className="xs:w-[240px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, .75)}
        className="w-full green-pink-gradient p-[1px] rounded-2xl shadow-card"
      >
        <div className="bg-tertiary rounded-2xl py-4 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={item.icon} alt={`Service Card Icon ${index}`} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{item.title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
