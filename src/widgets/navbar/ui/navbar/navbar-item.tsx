import { FC } from 'react';

import { cn } from '@/shared/lib/utils/cn';

import { NavbarItemType } from '../../model/types/navbar';

interface NavbarItemProps {
  item: NavbarItemType;
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onClickCallback?: (item: NavbarItemType) => void;
}

export const NavbarItem: FC<NavbarItemProps> = ({ item, currentTab, setCurrentTab, onClickCallback }) => {
  return (
    <li
      className={cn('hover:text-white text-base font-medium transition-colors', currentTab === item.id ? 'text-white' : 'text-secondary')}
      onClick={() => {
        onClickCallback?.(item);
        setCurrentTab(item.id);
      }}
    >
      <a href={`#${item.id}`}>
        {item.text}
      </a>
    </li>
  );
};
