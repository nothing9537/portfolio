import { FC } from 'react'

import { TechnologyItem } from '../../model/types/technology'
import { TechnologyBall } from '../technology-ball/technology-ball';

interface TechnologiesGridProps {
  items: TechnologyItem[];
}

export const TechnologiesGrid: FC<TechnologiesGridProps> = ({ items }) => {
  const renderTechnology = (item: TechnologyItem) => <TechnologyBall key={item.name} item={item} />;

  return (
    <div className="flex flex-row flex-wrap justify-center gap-12">
      {items.map(renderTechnology)}
    </div>
  );
};