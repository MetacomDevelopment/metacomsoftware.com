import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundImage from 'gatsby-background-image';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const HeroSurgecon = ({ className }) => {
  const data = useStaticQuery(graphql`
    query HeroSurgeconQ {
      masthead: file(
        relativePath: {
          eq: "assets/images/pages/surgecon/surgecon-healthcare-software-hospital-lobby-metacom-development.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sanitySurgecon {
        surgeconHeroHeadline
        surgeconHeroSubheadline
        surgeconHeroCtaText
        surgeconHeroCtaLink
      }
    }
  `);

  const imageData = data.masthead.childImageSharp.fluid;

  const surgeconHero = data.sanitySurgecon;

  return (
    <BackgroundImage
      Tag="header"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
      alt="Surgecon healthcare software solution, full hospital lobby, Metacom Development"
    >
      <Container fluid id="home-banner-section" className="h-100">
        <Row className="h-100 align-items-center justify-content-start text-left">
          <Col className="">
            <Col xs={12} md={10} lg={8} className="mb-4 ml-lg-5">
              <h1 className="text-left text-white no-transformation drop-shadow-dark font-weight-bold">
                {surgeconHero.surgeconHeroHeadline}
              </h1>
            </Col>
            <Col xs={12} md={12} lg={8} className="mb-4 ml-lg-5">
              <p className="text-left drop-shadow-dark">
                {surgeconHero.surgeconHeroSubheadline}
              </p>
            </Col>
            <Container className="mt-5 mx-0 ml-lg-5">
              <AnchorLink
                className="btn-nav btn-xl nav-link text-uppercase py-2 drop-shadow pointer width-fit-content"
                to={`${surgeconHero.surgeconHeroCtaLink}`}
                title="See Our Practices"
              >
                {surgeconHero.surgeconHeroCtaText}
              </AnchorLink>
            </Container>
          </Col>
        </Row>
      </Container>
    </BackgroundImage>
  );
};

export default HeroSurgecon;
