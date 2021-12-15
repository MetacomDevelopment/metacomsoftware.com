import React from 'react';
import styled from 'styled-components';

import { Section } from '.';
import { useSanity } from '../hooks';

const StyledSpacer = styled.div`
  padding: ${(props) => props.$heightMobile}px 0;
  @media (min-width: 1024px) {
    padding: ${(props) => props.$heightDesktop}px 0;
  }
`;

const Spacer = ({ block, raw, index }) => {
  const { heightMobile, heightDesktop } = block;
  const { primary, secondary, accent, neutral, hero } = useSanity();

  return (
    <Section padding="none" classes="bg-transparent">
      <StyledSpacer
        $heightDesktop={heightDesktop}
        $heightMobile={heightMobile}
      />
    </Section>
  );
};

export default Spacer;
