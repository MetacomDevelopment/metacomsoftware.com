import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col, Table } from 'react-bootstrap';
import BlockContent from '@sanity/block-content-to-react';

import CardStackedIcons from '../../common/Cards/CardStackedIcons';

const BenefitsSurgecon = ({ className }) => {
  const data = useStaticQuery(graphql`
    query BenefitsSurgeconQ {
      allSanitySurgecon {
        nodes {
          surgeconBenefitsList {
            _rawPracticeDescription
            _key
            practiceTitle
            practiceIcon
          }
        }
      }
      sanitySurgecon {
        surgeconBenefitsHeadline
      }
    }
  `);

  const headline = data.sanitySurgecon;
  const surgeconBenefits = data.allSanitySurgecon;

  return (
    <section className="section-no-margin">
      <Container fluid className="bg-light-gray py-5 text-center">
        <Row className="mb-5">
          <Col>
            <h2 className="text-primary display-4 font-weight-bold mb-4">
              {headline.surgeconBenefitsHeadline}
            </h2>
          </Col>
        </Row>
        <Container>
          <Row className="py-5">
            {surgeconBenefits.nodes.map((node) => {
              return node.surgeconBenefitsList.map((benefit) => {
                return (
                  <Col
                    xs={12}
                    md={6}
                    lg={4}
                    key={benefit._key}
                    className="mb-5 text-dark mx-auto"
                  >
                    <CardStackedIcons
                      iconSize="fa-4x"
                      iconBottom="fas fa-circle"
                      iconBottomColor="text-primary"
                      iconTop={benefit.practiceIcon}
                      iconTopColor="text-white"
                      title={benefit.practiceTitle}
                      description={
                        <BlockContent
                          blocks={benefit._rawPracticeDescription}
                        />
                      }
                    />
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

export default BenefitsSurgecon;
