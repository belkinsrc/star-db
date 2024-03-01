import React from 'react';
import { Logo } from '@/shared/ui';
import { NavLink } from '@/shared/ui';

class Header extends React.Component {
  render() {
    return (
      <div>
        Header
        <Logo />
        <NavLink />
      </div>
    );
  }
}

export default Header;
