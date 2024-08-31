import { FC } from 'react';

import { FeedbackForm } from '@/features/send-feedback-form';
import { SectionWrapper } from '@/shared/layouts/section-layout';
import { slideIn } from '@/shared/lib/utils/motion';

import { Earth } from '../earth/earth';

export const Contacts: FC = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex flex-col-reverse gap-12">
      <SectionWrapper
        title="Get in touch"
        subTitle="Contact."
        sectionId="contact"
        variants={slideIn('left', 'spring', .2, 1)}
        classNames={{
          rootClassName: "flex-[0.75] bg-black-100 p-8 rounded-2xl mb-12",
        }}
      >
        <FeedbackForm />
      </SectionWrapper>
      <Earth />
    </div>
  );
};
