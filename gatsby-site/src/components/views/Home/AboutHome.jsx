import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Container, Row, Col } from 'react-bootstrap';

const AboutHome = () => {
  const data = useStaticQuery(graphql`
    query AboutHomeQ {
      sanityHome {
        aboutHeadline
        aboutSubheadline
        aboutText
        aboutImage {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        aboutImageAlt
      }
    }
  `);

  const about = data.sanityHome;

  return (
    <section>
      <Container fluid className="mx-0 px-0">
        <Row noGutters className="mb-5">
          <Col xs={12} md={6}>
            <Img
              fluid={about.aboutImage.asset.fluid}
              alt={about.aboutImageAlt}
            />
          </Col>
          <Col xs={12} md={6} className="bg-dark p-3 p-lg-5">
            <h2 className="font-weight-bold text-primary mb-4">
              {about.aboutHeadline}
            </h2>
            <p className="text-center text-secondary lead font-italic mb-5">
              {about.aboutSubheadline}
            </p>
            <Container className="text-white">{about.aboutText}</Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutHome;
