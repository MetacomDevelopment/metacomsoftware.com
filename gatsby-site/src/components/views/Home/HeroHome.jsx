import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundImage from 'gatsby-background-image';

import ButtonInternalLink from '../../common/Buttons/ButtonInternalLink/ButtonInternalLink';

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
            <h1 className="px-sm-5 px-3 p-lg-3 mb-2 mb-lg-0 drop-shadow-darker font-weight-bold">
              {hero.heroHeadline}
            </h1>
            <p className="px-sm-5 mx-0 mx-lg-5 p-3 mb-3 mb-lg-0 drop-shadow-darker font-weight-bold">
              {hero.heroSubheadline}
            </p>
            <Container className="mt-5">
              <ButtonInternalLink
                btnLabel={hero.heroCtaText}
                btnLink={`${hero.heroCtaLink}`}
              />
            </Container>
          </Col>
        </Row>
      </Container>
    </BackgroundImage>
  );
};

export default HeroHome;
