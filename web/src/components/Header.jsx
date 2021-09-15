import React from 'react';

import { NavbarPrimary, NavbarSecondary } from '.';

const Navbar = () => (
  <nav className="fixed z-50 w-full shadow-lg">
    <NavbarSecondary />
    <NavbarPrimary />
  </nav>
);

export default Navbar;
