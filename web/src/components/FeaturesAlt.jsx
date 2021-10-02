import React from 'react';
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import {
  Section,
  Container,
  Grid,
  Row,
  Col,
  Flex,
  SanityBlockContent,
} from '.';
import { useSanity } from '../hooks';

const StyledServices = styled((props) => <Link {...props} />)`
  background-color: ${(props) => props.bgColor};
  &:hover {
    background-color: ${(props) => props.bgColorHover};
  }
`;

const StyledCol = styled((props) => <Col {...props} />)`
  order: ${(props) => props.classes};
`;

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

const RowTextLeft = ({ _key, headline, _rawDescription, image, alt }) => (
  <Grid key={_key} classes="lg:grid-cols-2 gap-x-12 gap-y-14 lg:gap-y-32">
    <Col classes="order-2 lg:order-none">
      <div className="text-lg text-gray-500 max-w-prose mx-auto lg:max-w-none space-y-10">
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold tracking-wide capitalize">
            {headline}
          </h2>
          <p>
            <SanityBlockContent blocks={_rawDescription} />
          </p>
        </div>
      </div>
    </Col>
    <Col classes="order-1 lg:order-none">
      <Container padding="img">
        <GatsbyImage
          image={image.asset.gatsbyImageData}
          className="aspect-w-12 aspect-h-7 w-full h-full object-cover rounded-xl shadow-2xl transition hover:scale-105"
          alt={image.alt}
          loading="lazy"
        />
      </Container>
    </Col>
  </Grid>
);

const RowTextRight = ({ _key, headline, _rawDescription, image, alt }) => (
  <Grid key={_key} classes="lg:grid-cols-2 gap-x-12 gap-y-14 lg:gap-y-32">
    <Col classes="order-1 lg:order-none">
      <Container padding="img">
        <GatsbyImage
          image={image.asset.gatsbyImageData}
          className="aspect-w-12 aspect-h-7 w-full h-full object-cover rounded-xl shadow-2xl transition hover:scale-105"
          alt={image.alt}
          loading="lazy"
        />
      </Container>
    </Col>
    <Col classes="order-2 lg:order-none">
      <div className="text-lg text-gray-500 max-w-prose mx-auto lg:max-w-none space-y-10">
        <div className="space-y-6">
          <h2 className="text-3xl text-primary font-extrabold tracking-wide capitalize">
            {headline}
          </h2>
          <div>
            <SanityBlockContent blocks={_rawDescription} />
          </div>
        </div>
      </div>
    </Col>
  </Grid>
);

const FeaturesAlt = ({
  block,
  raw,
  index,
  feature,
  headline,
  _rawDescription,
  image,
}) => {
  const { primary, secondary, accent, neutral, hero } = useSanity();

  const featureRows = feature.map((r, i) =>
    i % 2 === 0 ? (
      <RowTextLeft key={r._key} {...r} />
    ) : (
      <RowTextRight key={r._key} {...r} />
    )
  );

  return (
    <Section
      type="my"
      bgColor={neutral.white.color}
      h2Color={primary.dark.color}
    >
      <Container classes="space-y-24">{featureRows}</Container>
    </Section>
  );
};

export default FeaturesAlt;
