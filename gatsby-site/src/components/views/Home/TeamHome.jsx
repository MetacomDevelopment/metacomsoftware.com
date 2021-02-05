import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Container, Row, Col } from 'react-bootstrap';

import CardTeamMember from '../../common/Cards/CardTeamMember';

const TeamHome = () => {
  const data = useStaticQuery(graphql`
    query TeamHomeQ {
      sanityHome {
        teamHeadline
        teamSubheadline
      }
      allSanityHome {
        nodes {
          teamMembers {
            _key
            teamMemberName
            teamMemberPosition
            teamMemberImage {
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
  const teamMembers = data.allSanityHome;

  return (
    <section id="teamHome" className="mx-3 mx-lg-0">
      <Container className="bg-light-gray py-5 text-center">
        <Row className="mb-5">
          <Col>
            <h2 className="font-weight-bold mb-4">{headlines.teamHeadline}</h2>
            <p className="lead font-italic">{headlines.teamSubheadline}</p>
          </Col>
        </Row>
        <Row>
          {teamMembers.nodes.map((node) => {
            return node.teamMembers.map((teamMember) => {
              return (
                <Col
                  xs={12}
                  md={6}
                  lg={4}
                  key={teamMember._key}
                  className="mb-5"
                >
                  <CardTeamMember
                    name={teamMember.teamMemberName}
                    position={teamMember.teamMemberPosition}
                  >
                    <Img
                      fluid={teamMember.teamMemberImage.asset.fluid}
                      alt={teamMember.teamMemberName}
                      className="border border-primary rounded-circle mt-5 mb-3 mx-5"
                    />
                  </CardTeamMember>
                </Col>
              );
            });
          })}
        </Row>
      </Container>
    </section>
  );
};

export default TeamHome;
