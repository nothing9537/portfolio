import { FC, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '@/shared/ui/logo';
import { cn } from '@/shared/lib/utils/cn';
import { styles } from '@/shared/consts/styles';

import { NavbarItems } from '../../lib/consts/navbar-items';
import { NavbarItemType } from '../../model/types/navbar';
import { NavbarItem } from './navbar-item';
import { BurgerMenu } from '../burger-menu/burger-menu';

export const Navbar: FC = () => {
  const [currentTab, setCurrentTab] = useState('');

  const handleInitialTabSwitch = useCallback(() => {
    setCurrentTab('');
    window.scrollTo(0, 0);
  }, []);

  const renderNavbarItem = (item: NavbarItemType) => (
    <NavbarItem
      key={item.id}
      setCurrentTab={setCurrentTab}
      currentTab={currentTab}
      item={item}
    />
  );

  return (
    <div className={cn('w-full flex items-center py-4 fixed top-0 z-20 bg-primary', styles.paddingX)}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={handleInitialTabSwitch}>
          <Logo onClick={handleInitialTabSwitch} />
          <p className="text-white text-[16px] font-bold cursor-pointer">
            Vadym Monastyrskyi&nbsp;
            <span className="sm:block hidden">Front-end developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-8">
          {NavbarItems.map(renderNavbarItem)}
        </ul>
        <BurgerMenu currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </div>
    </div>
  );
};
