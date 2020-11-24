import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Container, Row, Col } from 'react-bootstrap';

import CardImage from '../../common/Cards/CardImage';

const ServicesHome = () => {
  const data = useStaticQuery(graphql`
    query ServicesHomeQ {
      sanityHome {
        serviceHeadline
        serviceSubheadline
      }
      allSanityHome {
        nodes {
          services {
            _key
            serviceTitle
            serviceDescription
            serviceImage {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  const headlines = data.sanityHome;
  const services = data.allSanityHome;

  return (
    <section id="servicesHome" className="bg-light">
      <Container className="bg-light-gray py-5 text-center">
        <Row className="mb-5">
          <Col>
            <h2 className="font-weight-bold mb-4">
              {headlines.serviceHeadline}
            </h2>
            <p className="lead font-italic">{headlines.serviceSubheadline}</p>
          </Col>
        </Row>
        <Row>
          {services.nodes.map((node) => {
            return node.services.map((service) => {
              return (
                <Col
                  xs={12}
                  md={2}
                  lg={4}
                  key={service._key}
                  className="mb-5 mx-auto"
                >
                  <CardImage
                    title={service.serviceTitle}
                    description={service.serviceDescription}
                  >
                    <Img
                      fluid={service.serviceImage.asset.fluid}
                      alt={service.serviceTitle}
                    />
                  </CardImage>
                </Col>
              );
            });
          })}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesHome;
