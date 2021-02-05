import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundImage from 'gatsby-background-image';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const HeroHome = ({ className }) => {
  const data = useStaticQuery(graphql`
    query HeroHomeQ {
      masthead: file(
        relativePath: {
          eq: "assets/images/pages/home/metacom-development-healthcare-financial-software-home-bg.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sanityHome {
        heroHeadline
        heroSubheadline
        heroCtaText
        heroCtaLink
      }
    }
  `);

  const imageData = data.masthead.childImageSharp.fluid;

  const hero = data.sanityHome;

  return (
    <BackgroundImage
      Tag="header"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
      alt="Forest with code - Metacom Development homepage background"
    >
      <Container id="home-banner-section" className="h-100">
        <Row className="h-100 align-items-center justify-content-center text-center">
          <Col className="align-self-center">
            <Col xs={12} className="mx-auto my-4">
              <span className="display-5 text-secondary font-weight-bold drop-shadow-darker">
                METACOM DEVELOPMENT
              </span>
            </Col>
            <Col xs={12} md={10} className="mx-auto mb-4">
              <h1 className="drop-shadow-darker font-weight-bold">
                {hero.heroHeadline}
              </h1>
            </Col>
            <Col xs={12} md={8} className="mx-auto mb-4">
              <p className="drop-shadow-darker font-weight-bold">
                {hero.heroSubheadline}
              </p>
            </Col>
            <Container className="mt-5 mx-auto">
              <AnchorLink
                className="btn-nav btn-xl nav-link text-uppercase py-2 ml-4 drop-shadow pointer width-fit-content mx-auto"
                to={`${hero.heroCtaLink}`}
                title="See Our Practices"
              >
                {hero.heroCtaText}
              </AnchorLink>
            </Container>
          </Col>
        </Row>
      </Container>
    </BackgroundImage>
  );
};

export default HeroHome;
