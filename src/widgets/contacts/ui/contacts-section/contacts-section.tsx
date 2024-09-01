import { FC } from 'react';

import { FeedbackForm } from '@/features/send-feedback-form';
import { SectionWrapper } from '@/shared/layouts/section-layout';
import { SocialLinks } from '@/shared/ui/social-link';

import { Earth } from '../earth/earth';
import { SocialLinkItems } from '../../lib/consts/social-link-items';

const Contacts: FC = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex flex-col-reverse gap-12">
      <SectionWrapper
        title="Get in touch"
        subTitle="Contact."
        sectionId="contact"
        classNames={{
          rootClassName: "flex-[0.75] bg-black-100 p-8 rounded-2xl mb-12",
        }}
      >
        <SocialLinks items={SocialLinkItems} className="mb-12 justify-end" />
        <FeedbackForm />
      </SectionWrapper>
      <Earth />
    </div>
  );
};

export default Contacts;