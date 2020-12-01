import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col, Table } from 'react-bootstrap';
import BlockContent from '@sanity/block-content-to-react';

const CovidBenefitsSurgecon = ({ className }) => {
  const data = useStaticQuery(graphql`
    query CovidBenefitsSurgeconQ {
      allSanitySurgecon {
        nodes {
          surgeconCovidBenefitsList {
            _key
            _rawSurgeconCovidBenefitDescription
          }
        }
      }
      sanitySurgecon {
        surgeconCovidBenefitsHeadline
      }
    }
  `);

  const headline = data.sanitySurgecon;
  const surgeconCovidBenefits = data.allSanitySurgecon;

  return (
    <section className="section-no-margin">
      <Container fluid className="bg-blue-dark text-white py-5 text-center">
        <Row>
          <Col>
            <h2 className="text-white font-weight-bold">
              {headline.surgeconCovidBenefitsHeadline}
            </h2>
          </Col>
        </Row>
        <Container>
          <Row>
            {surgeconCovidBenefits.nodes.map((node) => {
              return node.surgeconCovidBenefitsList.map((benefit) => {
                return (
                  <Col xs={12} md={6} key={benefit._key} className="mx-auto">
                    <Container className="mt-5 text-left">
                      <BlockContent
                        blocks={benefit._rawSurgeconCovidBenefitDescription}
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

export default CovidBenefitsSurgecon;
