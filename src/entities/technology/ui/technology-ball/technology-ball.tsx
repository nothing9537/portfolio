import { FC } from 'react';

import { Ball_Canvas } from '@/shared/ui/canvas';
import { Tooltip } from '@/shared/ui/tooltip';

import { TechnologyItem } from '../../model/types/technology';
import { VisibilityHandler } from '@/shared/lib/components/visibility-handler';

interface TechnologyBallProps {
  item: TechnologyItem;
}

export const TechnologyBall: FC<TechnologyBallProps> = ({ item }) => {
  return (
    <Tooltip text={item.name}>
      <div className="w-28 h-28 shadow-card">
        <VisibilityHandler>
          {(isVisible) => {
            return (
              <Ball_Canvas
                img={item.icon}
                isVisible={isVisible}
              />
            )
          }}
        </VisibilityHandler>
      </div>
    </Tooltip>
  );
};
