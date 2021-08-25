import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import Section from '../layouts/Section';
import Container from '../layouts/Container';

const CtaHalf = ({ block, raw, index }) => {
  const { headline } = block;

  return (
    <Section>
      <Container>
        <h2>{headline}</h2>
      </Container>
    </Section>
  );
};

export default CtaHalf;
