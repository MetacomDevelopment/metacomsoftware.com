import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Container, Row, Col } from 'react-bootstrap';

const TechHome = () => {
  const data = useStaticQuery(graphql`
    query TechHomeQ {
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

  const headlines = data.sanityHome;
  const tech = data.allSanityHome;

  return (
    <section id="techHome">
      <Container fluid className="mx-0 px-0">
        <Row noGutters className="mb-5">
          <Col className="bg-dark p-3 p-lg-5">
            <h2 className="font-weight-bold text-primary mb-4">
              {headlines.techHeadline}
            </h2>
            <p className="text-center text-secondary lead font-italic mb-5">
              {headlines.techSubheadline}
            </p>

            <Row>
              {tech.nodes.map((node) => {
                return node.techWeUseLogos.map((logo) => {
                  return (
                    <Col xs={3} md={2} lg={1} key={logo._key}>
                      <Img
                        fluid={logo.techWeUseLogoImage.asset.fluid}
                        alt={logo.techWeUseLogoImage.asset.originalFilename}
                        className="svg-max-100 mb-3 mb-lg-0"
                        key={logo._key}
                      />
                    </Col>
                  );
                });
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TechHome;
