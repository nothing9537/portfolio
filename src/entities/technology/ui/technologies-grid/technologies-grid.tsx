import { FC } from 'react'

import { TechnologyItem } from '../../model/types/technology'
import { TechnologyBall } from '../technology-ball/technology-ball';

interface TechnologiesGridProps {
  items: TechnologyItem[];
}

const renderTechnology = (item: TechnologyItem, index: number) => (
  <TechnologyBall
    key={item.name}
    item={item}
    // delay={index * 500}
  />
);

export const TechnologiesGrid: FC<TechnologiesGridProps> = ({ items }) => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-12">
      {items.map(renderTechnology)}
    </div>
  );
};
