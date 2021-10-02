import React from 'react';
import PropTypes from 'prop-types';

import { Container, Grid, Col, Sidebar } from '.';

const SidebarLayout = ({ children }) => (
  <Container padding="page">
    <Grid type="sm" classes="lg:grid-cols-12  gap-x-24">
      <Col classes="lg:col-span-7">{children}</Col>
      <Col classes="lg:col-span-5 lg:h-full">
        <Sidebar />
      </Col>
    </Grid>
  </Container>
);

SidebarLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarLayout;
