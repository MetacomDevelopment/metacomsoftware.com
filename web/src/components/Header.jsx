import React from 'react';

import { NavbarPrimary, NavbarSecondary } from '.';
import { useSanity } from '../hooks';

const Header = () => {
  const { navbars } = useSanity();

  console.log(`HERE: ${navbars.map((navbar) => navbar.layout)}`);

  const isPrimaryOnly = navbars.every(
    (navbar) => navbar.layout === 'primaryOnly'
  );

  switch (isPrimaryOnly) {
    case true:
      return (
        <div className="fixed z-50 w-full shadow-lg top-0">
          <NavbarPrimary />
        </div>
      );
    case false:
      return (
        <div className="fixed z-50 w-full shadow-lg top-0">
          <NavbarSecondary />
          <NavbarPrimary />
        </div>
      );

    default:
      return (
        <div className="fixed z-50 w-full shadow-lg top-0">
          <NavbarSecondary />
          <NavbarPrimary />
        </div>
      );
  }
};

export default Header;
