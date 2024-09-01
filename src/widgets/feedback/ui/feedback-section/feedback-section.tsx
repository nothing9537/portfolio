import { FC } from 'react';

import { SectionWrapper } from '@/shared/layouts/section-layout';
import { TestimonialsGrid, Testimonials as TestimonialsList } from '@/entities/testimonial';

const Feedback: FC = () => {
  return (
    <SectionWrapper
      title="What others say about me"
      subTitle="Testimonials."
      sectionId="feedback"
    >
      <div className="mt-12 bg-black-100 rounded-2xl">
        <TestimonialsGrid items={TestimonialsList} />
      </div>
    </SectionWrapper>
  );
};

export default Feedback;