import { FC } from 'react';

import { ProjectItem, ProjectTag } from '../../model/types/project';
import { BaseProjectCardProps } from '../../model/types/project-card';
import { cn } from '@/shared/lib/utils/cn';

const renderTag = (item: ProjectItem) => (tag: ProjectTag, index: number) => {
  return (
    <p key={item.name + index + tag.name} className={cn('text-sm', tag.className)}>
      #{tag.name}
    </p>
  )
};

export const Tags: FC<BaseProjectCardProps> = ({ item }) => {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {item.tags.map(renderTag(item))}
    </div>
  );
};
