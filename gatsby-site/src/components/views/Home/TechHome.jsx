import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundImage from 'gatsby-background-image';

const TechHome = () => {
  const data = useStaticQuery(graphql`
    query TechHomeQ {
      masthead: file(
        relativePath: {
          eq: "assets/images/pages/home/technologies-we-use-software-metacom-development.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sanityHome {
        techHeadline
        techSubheadline
      }
      allSanityHome {
        nodes {
          techWeUseLogos {
            _key
            techWeUseLogoImage {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
                originalFilename
              }
            }
          }
        }
      }
    }
  `);

  const imageData = data.masthead.childImageSharp.fluid;
  const headlines = data.sanityHome;
  const tech = data.allSanityHome;

  return (
    <BackgroundImage
      Tag="section"
      id="techHome"
      className="bg-img-light-gradient section-no-margin"
      fluid={imageData}
      backgroundColor={`#040e18`}
      alt="Forest with code - Metacom Development homepage background"
    >
      {/* <section id="techHome"> */}
      <Container fluid className="mx-0 px-0">
        <Row
          noGutters
          className="mb-5 border-top border-bottom border-secondary"
        >
          <Col className="px-3 py-5 p-lg-5 ">
            <h2 className="display-4 font-weight-bold mb-4">
              {headlines.techHeadline}
            </h2>
            <hr className="divider" />
            {/* <p className="font-weight-bold text-center lead font-italic mb-5">
              {headlines.techSubheadline}
            </p> */}

            <Row className="pt-5">
              {tech.nodes.map((node) => {
                return node.techWeUseLogos.map((logo) => {
                  return (
                    <Col xs={3} md={2} lg={1} key={logo._key}>
                      <Img
                        fluid={logo.techWeUseLogoImage.asset.fluid}
                        alt={logo.techWeUseLogoImage.asset.originalFilename}
                        className="svg-max-100 mb-3 mb-lg-0"
                      />
                    </Col>
                  );
                });
              })}
            </Row>
          </Col>
        </Row>
      </Container>
      {/* </section> */}
    </BackgroundImage>
  );
};

export default TechHome;
