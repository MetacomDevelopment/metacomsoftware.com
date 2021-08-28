import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import './layout.css';

const Layout = ({ type, children }) => {
  switch (type) {
    default:
      return (
        <div>
          <Navbar />
          <div>
            <main>{children}</main>
          </div>
          <Footer type="brand" />
        </div>
      );
    case 'brand':
      return (
        <div>
          <Navbar />
          <div>
            <main>{children}</main>
          </div>
          <Footer type="brand" />
        </div>
      );
    case 'boston':
      return (
        <div>
          <Navbar />
          <div>
            <main>{children}</main>
          </div>
          <Footer type="boston" />
        </div>
      );
    case 'houston':
      return (
        <div>
          <Navbar />
          <div>
            <main>{children}</main>
          </div>
          <Footer type="houston" />
        </div>
      );
    case 'san diego':
      return (
        <div>
          <Navbar />
          <div>
            <main>{children}</main>
          </div>
          <Footer type="san diego" />
        </div>
      );
  }
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
