import React from 'react';
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import { Section, Container, Grid, Col, SanityBlockContent, Button } from '.';
import { useSanity } from '../hooks';

// const StyledSection = styled((props) => <Section {...props} />)`
//   background-color: ${({ bgColor }) => bgColor};
// `;

// const StyledGrid = styled((props) => <Grid {...props} />)`
//   background-color: ${(props) => props.bgColor};
// `;

// const StyledCol = styled((props) => <Col {...props} />)`
//   order: ${(props) => props.classes};
// `;

const StyledHeadline = styled.span`
  color: #fff !important;
  &:hover {
    color: #ggg !important;
  }
`;

const StyledLink = styled((props) => <Link {...props} />)`
  color: ${(props) => props.color} !important;
  &:hover {
    color: ${(props) => props.colorHover} !important;
  }
`;

const CtaHalf = ({
  block,
  raw,
  index,
  headline,
  subheadline,
  tagline,
  _rawDescription,
  image,
}) => {
  const { primary, secondary, accent, neutral, hero } = useSanity();

  return (
    <Section padding="none" bgColor={neutral.dark.color}>
      <Container padding="full">
        <Grid classes="lg:grid-cols-2 gap-0">
          <Col classes="">
            <GatsbyImage
              image={image.asset.gatsbyImageData}
              className="aspect-w-12 aspect-h-7 w-full h-full object-cover object-center"
              alt={image.alt}
              loading="lazy"
            />
          </Col>
          <Col classes="px-4 py-12 lg:py-16">
            <div className="md:ml-auto md:pl-10">
              <h3 className="text-base font-semibold uppercase tracking-wider !text-gray-300">
                {tagline}
              </h3>
              <h2 className="mt-2 !text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                {headline}
              </h2>
              <div className="!text-gray-300 space-y-6 mt-6">
                <SanityBlockContent blocks={raw.description} />
              </div>
              <div className="mx-auto lg:mx-none mt-12 flex justify-center lg:justify-start rounded-md drop-shadow">
                <Button btn="internal" />
              </div>
            </div>
          </Col>
        </Grid>
      </Container>
    </Section>
  );
};

export default CtaHalf;
