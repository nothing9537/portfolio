import { FC } from 'react';

import { motion } from 'framer-motion';

interface SectionSwitchProps {
  toSection: string;
}

export const SectionSwitch: FC<SectionSwitchProps> = ({ toSection }) => {
  return (
    <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
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
