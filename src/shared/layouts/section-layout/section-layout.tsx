import { FC, ReactNode } from 'react'
import { motion } from 'framer-motion';

import { styles } from '@/shared/consts/styles';
import { fadeIn, staggerContainer, textVariant } from '@/shared/lib/utils/motion';
import { cn } from '@/shared/lib/utils/cn';

interface SectionWrapperProps {
  title: string;
  subTitle: string;
  description: string;
  children: ReactNode;
  sectionId: string;
}

export const SectionWrapper: FC<SectionWrapperProps> = ({ title, subTitle, description, children, sectionId }) => {
  return (
    <motion.section
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: .25 }}
      className={cn(styles.padding, "max-w-7xl mx-auto relative z-0")}
    >
      <motion.div variants={textVariant(1)} id={sectionId}>
        <p className={cn(styles.sectionSubText)}>{title}</p>
        <h2 className={cn(styles.sectionHeadText)}>{subTitle}</h2>
      </motion.div>
      <motion.p variants={fadeIn('right', 'spring', 0.1, 1)} className="mt-4 text-secondary text-[16px] max-w-3xl leading-[32px]">
        {description}
      </motion.p>
      {children}
    </motion.section>
  );
};
