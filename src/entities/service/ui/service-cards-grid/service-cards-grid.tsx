import { FC } from 'react'

import { cn } from '@/shared/lib/utils/cn';

import { ServiceItem } from '../../model/types/service';
import { ServiceCard } from '../service-card/service-card';
import { ClassValue } from 'clsx';

interface ServiceCardsGridProps {
  services: ServiceItem[];
  className?: ClassValue;
}

const renderServiceCard = (item: ServiceItem, index: number) => (
  <ServiceCard
    key={index}
    item={item}
    index={index}
  />
);

export const ServiceCardsGrid: FC<ServiceCardsGridProps> = ({ services, className }) => {
  return (
    <div className={cn("flex flex-wrap gap-12", className)}>
      {services.map(renderServiceCard)}
    </div>
  );
};
