import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SanityBlockContent, Container, Grid, Col } from '.';

const StyledSection = styled.section`
  background-color: ${(props) => props.$bgColor};
  h2 {
    color: ${(props) => props.$h2Color};
  }
  h3 {
    color: ${(props) => props.$h3Color};
  }
`;

const CustomSectionText = ({
  block,
  raw,
  index,
  _rawColOneContentText,
  _rawColTwoContentText,
  _rawColThreeContentText,
  _rawColFourContentText,
  content,
  idName,
  paddingPosition,
  paddingSize,
  bg,
  twColor,
  customColor,
  bgImg,
  headline,
  subheadline,
  tagline,
  layout,
  contentImg,
  contentSvg,
  contentText,
  children,
  classes,
}) => {
  const paddingClass = `padding-${paddingPosition}-${paddingSize}`;
  const gridCols =
    layout === 'one'
      ? 'grid-cols-1'
      : layout === 'two'
      ? 'grid-cols-2'
      : layout === 'three'
      ? 'grid-cols-3'
      : 'grid-cols-4';
  const colContent = [
    {
      text: _rawColOneContentText,
    },
    {
      text: _rawColTwoContentText,
    },
    {
      text: _rawColThreeContentText,
    },
    {
      text: _rawColFourContentText,
    },
  ];

  switch (paddingClass) {
    case 'padding-both-sm':
      return (
        <StyledSection className={`relative py-8 ${classes}`} id={idName}>
          <Container bgColor={twColor}>
            <Grid classes={gridCols}>
              {colContent.map((col, i) => (
                <Col key={i}>
                  <SanityBlockContent blocks={col.text} />
                </Col>
              ))}
            </Grid>
          </Container>
        </StyledSection>
      );
    case 'padding-both-md':
      return (
        <StyledSection className={`relative py-16 ${classes}`} id={idName}>
          <Container bgColor={twColor}>
            <Grid classes={gridCols}>
              {colContent.map((col, i) => (
                <Col key={i}>
                  <SanityBlockContent blocks={col.text} />
                </Col>
              ))}
            </Grid>
          </Container>
        </StyledSection>
      );
    case 'padding-both-lg':
      return (
        <StyledSection className={`relative py-24 ${classes}`} id={idName}>
          <Container bgColor={twColor}>
            <Grid classes={gridCols}>
              {colContent.map((col, i) => (
                <Col key={i}>
                  <SanityBlockContent blocks={col.text} />
                </Col>
              ))}
            </Grid>
          </Container>
        </StyledSection>
      );
    case 'padding-top-sm':
      return (
        <StyledSection className={`relative pt-8 ${classes}`} id={idName}>
          <Container bgColor={twColor}>
            <Grid classes={gridCols}>
              {colContent.map((col, i) => (
                <Col key={i}>
                  <SanityBlockContent blocks={col.text} />
                </Col>
              ))}
            </Grid>
          </Container>
        </StyledSection>
      );
    case 'padding-top-md':
      return (
        <StyledSection className={`relative pt-16 ${classes}`} id={idName}>
          <Container bgColor={twColor}>
            <Grid classes={gridCols}>
              {colContent.map((col, i) => (
                <Col key={i}>
                  <SanityBlockContent blocks={col.text} />
                </Col>
              ))}
            </Grid>
          </Container>
        </StyledSection>
      );
    case 'padding-top-lg':
      return (
        <StyledSection className={`relative pt-24 ${classes}`} id={idName}>
          <Container bgColor={twColor}>
            <Grid classes={gridCols}>
              {colContent.map((col, i) => (
                <Col key={i}>
                  <SanityBlockContent blocks={col.text} />
                </Col>
              ))}
            </Grid>
          </Container>
        </StyledSection>
      );
    case 'padding-bottom-sm':
      return (
        <StyledSection className={`relative pb-8 ${classes}`} id={idName}>
          <Container bgColor={twColor}>
            <Grid classes={gridCols}>
              {colContent.map((col, i) => (
                <Col key={i}>
                  <SanityBlockContent blocks={col.text} />
                </Col>
              ))}
            </Grid>
          </Container>
        </StyledSection>
      );
    case 'padding-bottom-md':
      return (
        <StyledSection className={`relative pb-16 ${classes}`} id={idName}>
          <Container bgColor={twColor}>
            <Grid classes={gridCols}>
              {colContent.map((col, i) => (
                <Col key={i}>
                  <SanityBlockContent blocks={col.text} />
                </Col>
              ))}
            </Grid>
          </Container>
        </StyledSection>
      );
    case 'padding-bottom-lg':
      return (
        <StyledSection className={`relative pb-24 ${classes}`} id={idName}>
          <Container bgColor={twColor}>
            <Grid classes={gridCols}>
              {colContent.map((col, i) => (
                <Col key={i}>
                  <SanityBlockContent blocks={col.text} />
                </Col>
              ))}
            </Grid>
          </Container>
        </StyledSection>
      );
    case 'padding-none-none':
      return (
        <StyledSection className={`relative py-0 ${classes}`} id={idName}>
          <Container bgColor={twColor}>
            <Grid classes={gridCols}>
              {colContent.map((col, i) => (
                <Col key={i}>
                  <SanityBlockContent blocks={col.text} />
                </Col>
              ))}
            </Grid>
          </Container>
        </StyledSection>
      );
    default:
      return (
        <StyledSection className={`relative py-24 ${classes}`} id={idName}>
          <Container bgColor={twColor}>
            <Grid classes={gridCols}>
              {colContent.map((col, i) => (
                <Col key={i}>
                  <SanityBlockContent blocks={col.text} />
                </Col>
              ))}
            </Grid>
          </Container>
        </StyledSection>
      );
  }
};
CustomSectionText.defaultProps = {
  padding: `lg`,
  classes: ``,
};

CustomSectionText.propTypes = {
  padding: PropTypes.string,
  classes: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default CustomSectionText;
