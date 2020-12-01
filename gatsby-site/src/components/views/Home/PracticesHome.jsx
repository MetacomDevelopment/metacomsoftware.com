import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import BlockContent from '@sanity/block-content-to-react';

import CardStackedIcons from '../../common/Cards/CardStackedIcons';

const PracticesHome = () => {
  const data = useStaticQuery(graphql`
    query PracticeHomeQ {
      sanityHome {
        practiceHeadline
        practiceSubheadline
      }
      allSanityHome {
        nodes {
          practices {
            _rawPracticeDescription
            _key
            practiceTitle
            practiceIcon
          }
        }
      }
    }
  `);

  const headlines = data.sanityHome;
  const practices = data.allSanityHome;

  return (
    <section id="practicesHome" className="bg-light section-no-margin">
      <Container fluid className="bg-dark py-5 text-center">
        <Row className="pt-5 mb-5">
          <Col>
            <h2 className="text-white font-weight-bold display-4 mb-4">
              {headlines.practiceHeadline}
            </h2>
            <p className="lead text-secondary font-italic">
              {headlines.practiceSubheadline}
            </p>
          </Col>
        </Row>
        <Row className="py-5">
          {practices.nodes.map((node) => {
            return node.practices.map((practice) => {
              return (
                <Col
                  xs={12}
                  md={6}
                  lg={4}
                  key={practice._key}
                  className="mb-5 mb-lg-0 text-white"
                >
                  <CardStackedIcons
                    iconSize="fa-4x"
                    iconBottom="fas fa-circle"
                    iconBottomColor="text-primary"
                    iconTop={practice.practiceIcon}
                    iconTopColor="text-white"
                    title={practice.practiceTitle}
                    description={
                      <BlockContent blocks={practice._rawPracticeDescription} />
                    }
                  />
                </Col>
              );
            });
          })}
        </Row>
      </Container>
    </section>
  );
};

export default PracticesHome;
