import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import SidebarLayout from './layouts/PageSidebar';
import './layout.css';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <div>
      <main>{children}</main>
    </div>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;