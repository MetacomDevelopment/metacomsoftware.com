import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';

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
            _key
            practiceTitle
            practiceDescription
            practiceIcon
          }
        }
      }
    }
  `);

  const headlines = data.sanityHome;
  const practices = data.allSanityHome;

  return (
    <section id="practicesHome" className="bg-light">
      <Container className="bg-light py-5 text-center">
        <Row className="mb-5">
          <Col>
            <h2 className="font-weight-bold mb-4">
              {headlines.practiceHeadline}
            </h2>
            <p className="lead font-italic">{headlines.practiceSubheadline}</p>
          </Col>
        </Row>
        <Row>
          {practices.nodes.map((node) => {
            return node.practices.map((practice) => {
              return (
                <Col
                  xs={12}
                  md={2}
                  lg={4}
                  key={practice._key}
                  className="mb-5 mb-lg-0"
                >
                  <CardStackedIcons
                    iconSize="fa-4x"
                    iconBottom="fas fa-circle"
                    iconBottomColor="text-primary"
                    iconTop={practice.practiceIcon}
                    iconTopColor="text-white"
                    title={practice.practiceTitle}
                    description={practice.practiceDescription}
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
