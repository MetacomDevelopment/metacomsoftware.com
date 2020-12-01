import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col, Table } from 'react-bootstrap';
import BlockContent from '@sanity/block-content-to-react';

const FeaturesSurgecon = ({ className }) => {
  const data = useStaticQuery(graphql`
    query FeaturesSurgeconQ {
      allSanitySurgecon {
        nodes {
          surgeconFeaturesList {
            _key
            _rawSurgeconFeatureDescription
          }
        }
      }
      sanitySurgecon {
        surgeconFeaturesHeadline
      }
    }
  `);

  const headline = data.sanitySurgecon;
  const surgeconFeatures = data.allSanitySurgecon;

  return (
    <section className="section-no-margin">
      <Container fluid className="bg-light-gray py-5 text-center">
        <Row className="mb-5">
          <Col>
            <h2 className="text-primary display-4 font-weight-bold mb-4">
              {headline.surgeconFeaturesHeadline}
            </h2>
          </Col>
        </Row>
        <Container>
          <Row>
            {surgeconFeatures.nodes.map((node) => {
              return node.surgeconFeaturesList.map((feature) => {
                return (
                  <Col
                    xs={12}
                    md={6}
                    key={feature._key}
                    className="mb-5 mx-auto"
                  >
                    <Container className="mt-5 text-left">
                      <BlockContent
                        blocks={feature._rawSurgeconFeatureDescription}
                      />
                    </Container>
                  </Col>
                );
              });
            })}
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default FeaturesSurgecon;
