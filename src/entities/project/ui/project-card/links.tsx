import { FC } from 'react';

import { github } from '@/shared/assets';

import { BaseProjectCardProps } from '../../model/types/project-card';
import { SourceLink } from './source-link';

export const Links: FC<BaseProjectCardProps> = ({ item }) => {
  return (
    <div className="absolute inset-0 flex gap-2 justify-end m-4 card-img_cover">
      {item.sourceCodeUrl && (
        <SourceLink source={item.sourceCodeUrl} image={github} />
      )}
      {item.application && (
        <SourceLink
          source={item.application.url || ''}
          image={item.application.icon || ''}
        />
      )}
    </div>
  );
};
