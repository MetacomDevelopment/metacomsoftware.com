import React, { useEffect, useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

import { SanityBlockContent, Section, Container, Grid, Col } from '.';
import { useSanity } from '../hooks';

const StyledEmployees = styled((props) => <Section {...props} />)`
  background-color: ${(props) => props.$bgColor};
  & span {
    color: ${(props) => props.$spanColor};
  }
`;

const StyledTagline = styled.span`
  color: ${(props) => props.$spanColor};
`;

const StyledIcon = styled.div`
  color: ${(props) => props.$color};
`;

const StyledAuthor = styled.p`
  color: ${(props) => props.$color};
`;

const EmployeesImages = ({
  block,
  raw,
  index,
  idName,
  headline,
  tagline,
  employee,
  _rawDescription,
}) => {
  const { primary, secondary, accent, neutral, hero } = useSanity();

  return (
    <StyledEmployees
      idName={idName}
      type="sm"
      bgColor={neutral.light.color}
      h2Color={neutral.darker.color}
      h3Color={primary.dark.color}
      $spanColor={accent.light.color}
    >
      <Container classes="max-w-md px-4 text-center sm:max-w-3xl lg:max-w-7xl">
        <StyledTagline
          $spanColor={accent.dark.color}
          className="text-base font-semibold tracking-wider uppercase"
        >
          {tagline}
        </StyledTagline>
        <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight lg:max-w-lg mx-auto">
          {headline}
        </h2>
        <div className="mt-5 max-w-prose mx-auto text-xl text-zinc-600">
          <SanityBlockContent blocks={raw.description} />
        </div>
        <Grid classes="mt-20 gap-3 sm:grid-cols-3 lg:grid-cols-3">
          {employee.map((item, index) => (
            <Col
              key={index}
              classes="pt-6 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div className="">
                <GatsbyImage
                  image={item.image.asset?.gatsbyImageData}
                  className="w-40 h-40 object-cover rounded-xl transition hover:scale-125"
                  alt={item.image?.alt}
                />
              </div>
              <div className="relative z-10">
                <h3 className="mt-8 text-3xl font-medium">{item.name}</h3>
                <StyledAuthor
                  className="mt-5 text-lg font-medium"
                  $color={accent.dark.color}
                >
                  <span>{item.position}</span>
                </StyledAuthor>
                {/* <p className="mb-8 text-base text-zinc-800 font-semibold">
                  <span>{item.info}</span>
                </p> */}
              </div>
            </Col>
          ))}
        </Grid>
      </Container>
    </StyledEmployees>
  );
};

export default EmployeesImages;
