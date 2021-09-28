import React from 'react';
import styled from 'styled-components';

export const StyledSection = styled.section`
  background-color: ${({ bgColor }) => bgColor};
  h2 {
    color: ${({ h2Color }) => h2Color};
  }
  h3 {
    color: ${({ h3Color }) => h3Color};
  }
`;
