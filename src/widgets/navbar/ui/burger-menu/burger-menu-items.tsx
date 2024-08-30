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
    <div className={cn('p-4 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-36 z-10 rounded-md flex flex-col gap-4', isOpen ? 'flex' : 'hidden')}>
      <NavbarItems
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onItemClickCallback={onBurgerItemClickCallback}
        className="list-none flex flex-col justify-end items-start gap-4"
      />
      <a href="https://github.com/nothing9537/portfolio" target="_blank">
        Source
      </a>
    </div>
  )
}
