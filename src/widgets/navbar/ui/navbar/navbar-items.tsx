import { FC } from 'react'
import { ClassValue } from 'clsx';

import { cn } from '@/shared/lib/utils/cn';

import { NavbarItemType } from '../../model/types/navbar';
import { NavbarItem } from './navbar-item';
import { NavbarItems as NavbarItemsList } from '../../lib/consts/navbar-items'

interface NavbarItemsProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onItemClickCallback?: (item: NavbarItemType) => void;
  className?: ClassValue;
}

export const NavbarItems: FC<NavbarItemsProps> = ({ currentTab, setCurrentTab, className, onItemClickCallback }) => {

  const renderNavbarItem = (item: NavbarItemType) => (
    <NavbarItem
      onClickCallback={onItemClickCallback}
      key={item.id}
      setCurrentTab={setCurrentTab}
      currentTab={currentTab}
      item={item}
    />
  );

  return (
    <ul className={cn(className || "list-none hidden sm:flex flex-row gap-8")}>
      {NavbarItemsList.map(renderNavbarItem)}
    </ul>
  )
}
