import { FC } from 'react';

import { BaseProjectCardProps } from '../../model/types/project-card';

export const Description: FC<BaseProjectCardProps> = ({ item }) => {
  return (
    <div className="mt-4">
      <h3 className="text-white font-bold text-[24px]">{item.name}</h3>
      <p className="mt-2 text-secondary text-sm">{item.description}</p>
    </div>
  );
};
