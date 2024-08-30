import { FC } from 'react';
import { ClassValue } from 'clsx';

import { cn } from '@/shared/lib/utils/cn';
import { styles } from '@/shared/consts/styles';

import { TestimonialItem } from '../../model/types/testimonial';
import { TestimonialCard } from '../testimonial-card/testimonial-card';

interface TestimonialsGridProps {
  items: TestimonialItem[];
  className?: ClassValue;
}

const renderTestimonialItem = (item: TestimonialItem, index: number) => (
  <TestimonialCard
    item={item}
    key={`${item.name}-${index}`}
    index={index}
  />
);

export const TestimonialsGrid: FC<TestimonialsGridProps> = ({ items, className }) => {
  return (
    <div className={cn(styles.padding, "pb-12 flex flex-wrap gap-8", className)}>
      {items.map(renderTestimonialItem)}
    </div>
  );
};
