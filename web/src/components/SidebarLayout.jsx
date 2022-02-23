import React from 'react';
import PropTypes from 'prop-types';
import { useSanity } from '../hooks';

import { Section, Container, Grid, Col, Sidebar } from '.';

const SidebarLayout = ({ children, sidebarType, idName }) => {
  const { primary, secondary, accent, neutral, hero } = useSanity();

  return (
    <Section idName={idName} padding="lg" bgColor={neutral.white.color}>
      <Container padding="none" classes="max-w-7xl">
        <Grid classes="lg:grid-cols-12  gap-x-24">
          <Col classes="lg:col-span-7">
            <article>{children}</article>
          </Col>
          <Col classes="lg:col-span-5 lg:h-full">
            <Sidebar sidebarType={sidebarType} />
          </Col>
        </Grid>
      </Container>
    </Section>
  );
};

SidebarLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarLayout;
