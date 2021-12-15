import React from 'react';
import styled from 'styled-components';

export const StyledSection = styled.section`
  background-color: ${(props) => props.$bgColor};
  h2 {
    color: ${(props) => props.$h2Color};
  }
  h3 {
    color: ${(props) => props.$h3Color};
  }
`;
