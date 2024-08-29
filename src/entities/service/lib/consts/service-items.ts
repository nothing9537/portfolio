import { backend, mobile, web } from '@/shared/assets';

import { ServiceItem } from '../../model/types/service';

export const Services: ServiceItem[] = [
  {
    icon: backend,
    title: 'Back-end Developer',
  },
  {
    icon: web,
    title: 'Front-end Developer',
  },
  {
    icon: mobile,
    title: "Analyst"
  }
];