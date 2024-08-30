import { FC } from 'react';

import { Ball_Canvas } from '@/shared/ui/canvas';

import { TechnologyItem } from '../../model/types/technology';

interface TechnologyBallProps {
  item: TechnologyItem;
}

export const TechnologyBall: FC<TechnologyBallProps> = ({ item }) => {
  return (
    <div className="w-28 h-28">
      <Ball_Canvas img={item.icon} />
    </div>
  );
};
