import { FC } from 'react';
import { ClassValue } from 'clsx';

import { motion } from 'framer-motion';
import { cn } from '../lib/utils/cn';

interface SectionSwitchProps {
  toSection: string;
  className?: ClassValue;
}

export const SectionSwitch: FC<SectionSwitchProps> = ({ toSection, className }) => {
  return (
    <div className={cn("w-full flex justify-center items-center", className)}>
      <a href={`#${toSection}`}>
        <div className="w-[32px] h-[64px] rounded-3xl border-[3px] border-secondary flex justify-center items-start p-2">
          <motion.div
            className="w-3 h-2 rounded-full bg-secondary mb-1"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
          />
        </div>
      </a>
    </div>
  );
};
