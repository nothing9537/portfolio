import { FC } from 'react';
import { motion } from 'framer-motion';

import { fadeIn } from '@/shared/lib/utils/motion';

import { TestimonialItem } from '../../model/types/testimonial';

interface TestimonialCardProps {
  item: TestimonialItem;
  index: number;
}

export const TestimonialCard: FC<TestimonialCardProps> = ({ item, index }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'tween', index * .5, .75)}
      className="bg-black-200 p-8 rounded-3xl xs:w-80 w-full"
    >
      <p className="text-white font-black text-5xl select-none">"</p>
      <div className="mt-1">
        <p className="text-white tracking-wider text-lg">{item.text}</p>
        <div className="mt-8 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-base">
              <span className="blue-text-gradient">@</span> {item.name}
            </p>
            <p className="mt-1 text-secondary text-sm">
              {item.designation} of {item.company}
            </p>
          </div>
          <img
            src={item.imageUrl}
            alt={`feedback-by-${item.name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};
