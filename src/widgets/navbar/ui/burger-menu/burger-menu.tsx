import { FC, useState } from 'react'
import { Menu, X } from 'lucide-react';

import { BurgerMenuItems } from './burger-menu-items';

interface BurgerMenuProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export const BurgerMenu: FC<BurgerMenuProps> = ({ currentTab, setCurrentTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const Icon = isOpen ? X : Menu;

  return (
    <div className="sm:hidden flex flex-1 justify-end items-center">
      <Icon className="w-6 h-6 cursor-pointer" onClick={() => setIsOpen((prev) => !prev)} />
      {isOpen && (
        <BurgerMenuItems
          onBurgerItemClickCallback={() => setIsOpen(false)}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          isOpen={isOpen}
        />
      )}
    </div>
  );
};
