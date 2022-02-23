import React from 'react';
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';

import { useSanity } from '../hooks';
import { AnchorText, Grid, Col, Container } from '.';

const StyledContainer = styled((props) => <Container {...props} />)`
  color: ${(props) => props.$color} !important;
  background-color: ${(props) => props.$bgColor} !important;
  & h2 {
    color: ${(props) => props.$h2Color} !important;
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

const SidebarListServices = ({ type }) => {
  const { page, primary, secondary, accent, neutral, hero } = useSanity();

  return (
    <div className="space-y-6 lg:sticky lg:top-44">
      <StyledContainer
        padding="none"
        bgColor={primary.dark.color}
        h2Color={accent.default.color}
        h3Color={neutral.lighter.color}
        h3ColorHover={accent.default.color}
        spanColor={accent.default.color}
        outerClasses="rounded-xl shadow-xl"
        classes="relative p-3 lg:p-5 max-w-4xl mx-3 lg:mx-auto"
      >
        <h2 className="text-center text-white font-medium py-3">
          Our Services
        </h2>
        <Grid classes="space-y-3 divide-y divide-gray-500 mt-1">
          {page.map((link) =>
            link.pageType === 'service' ? (
              <Col classes="py-3">
                <AnchorText type="internal" to={link.slug.current}>
                  <h3 className="font-thin transition duration-75 ease-in-out">
                    <span className="font-bold text-lg mr-2">></span>
                    {link.anchor}
                  </h3>
                </AnchorText>
              </Col>
            ) : null
          )}
        </Grid>
      </StyledContainer>
    </div>
  );
};

export default SidebarListServices;
