import { FC, ReactNode } from 'react'
import { motion } from 'framer-motion';
import { ClassValue } from 'clsx';

import { styles } from '@/shared/consts/styles';
import { fadeIn, staggerContainer, textVariant } from '@/shared/lib/utils/motion';
import { cn } from '@/shared/lib/utils/cn';

interface SectionWrapperProps {
  title: string;
  subTitle: string;
  description?: string;
  children: ReactNode;
  sectionId: string;
  classNames?: {
    rootClassName?: ClassValue;
    titleClassName?: ClassValue;
    subTitleClassName?: ClassValue;
  };
}

export const SectionWrapper: FC<SectionWrapperProps> = ({ title, subTitle, description, children, sectionId, classNames }) => {

  const descriptionSentences = description?.split('\n');

  return (
    <>
      <span id={sectionId} />
      <motion.section
        variants={staggerContainer(0.5, 0.75)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: .25 }}
        className={cn(styles.padding, "max-w-7xl mx-auto relative z-0", classNames?.rootClassName)}
      >
        <motion.div variants={textVariant(1)}>
          <p className={cn(styles.sectionSubText, classNames?.titleClassName)}>{title}</p>
          <h2 className={cn(styles.sectionHeadText, classNames?.subTitleClassName)}>{subTitle}</h2>
        </motion.div>
        {descriptionSentences && (
          descriptionSentences.map((description) => (
            <motion.p
              variants={fadeIn('right', 'spring', 0.2, 1)}
              className="mt-4 text-secondary text-[16px] max-w-3xl leading-[32px]"
            >
              {description}
            </motion.p>
          ))
        )}
        {children}
      </motion.section>
    </>
  );
};
