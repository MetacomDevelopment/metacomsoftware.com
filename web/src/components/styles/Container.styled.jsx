import React from 'react';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  background-color: ${(props) => props.$bgColor};
  & h2 {
    color: ${(props) => props.$h2Color} !important;
    :hover {
      color: ${(props) => props.$h2ColorHover} !important;
    }
  }
  & h3 {
    color: ${(props) => props.$h3Color} !important;
    :hover {
      color: ${(props) => props.$h3ColorHover} !important;
    }
    & span {
      color: ${(props) => props.$spanColor} !important;
    }
  }
`;
