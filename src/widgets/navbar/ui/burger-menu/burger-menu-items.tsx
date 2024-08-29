import { FC } from 'react'

import { cn } from '@/shared/lib/utils/cn';

import { NavbarItems } from '../navbar/navbar-items';
import { NavbarItemType } from '../../model/types/navbar';

interface BurgerMenuItemProps {
  isOpen: boolean;
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onBurgerItemClickCallback: (item: NavbarItemType) => void;
}

export const BurgerMenuItems: FC<BurgerMenuItemProps> = ({ isOpen, currentTab, setCurrentTab, onBurgerItemClickCallback }) => {
  return (
    <div className={cn('p-4 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-md', isOpen ? 'flex' : 'hidden')}>
      <NavbarItems
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onItemClickCallback={onBurgerItemClickCallback}
        className="list-none flex flex-col justify-end items-start gap-4"
      />
    </div>
  )
}
