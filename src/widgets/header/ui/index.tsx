import React from 'react';
import { Logo } from '@/shared/ui';
import { NavLink } from '@/shared/ui';

class Header extends React.Component {
  render() {
    return (
      <header className="h-24 flex justify-start items-center gap-14">
        <Logo />
        <nav className="flex items-center gap-8">
          <NavLink text="People" />
          <NavLink text="Planet" />
          <NavLink text="Starships" />
        </nav>
      </header>
    );
  }
}

export default Header;
