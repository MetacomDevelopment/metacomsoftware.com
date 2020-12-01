import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Container, Row, Col, Table } from 'react-bootstrap';
import BlockContent from '@sanity/block-content-to-react';
import BackgroundImage from 'gatsby-background-image';
// import IconCashPayments from '../../../assets/svg/big-cash-payments-junk-cars-angels-auto-towing.svg';
// import IconTowTruck from '../../../assets/svg/same-day-pick-up-angels-auto-towing-boston-ma.svg';
// import IconExperience from '../../../assets/svg/experience-professional-angels-auto-towing-plympton-ma.svg';
// import IconSatisfaction from '../../../assets/svg/custom-satisfaction-angels-auto-towing-plymouth-county-ma.svg';

const AboutSurgecon = ({ className }) => {
  const data = useStaticQuery(graphql`
    query AboutSurgeconQ {
      allSanitySurgecon {
        nodes {
          _key
          _rawSurgeconAboutText
        }
      }
      sanitySurgecon {
        surgeconAboutLogo {
          alt
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        surgeconAboutImage {
          alt
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `);

  const surgeconAbout = data.sanitySurgecon;

  return (
    <section className="section-no-margin">
      <Container className="py-5">
        <Row className="">
          <Col xs={12} lg={5} className="p-3 p-lg-5">
            <Col xs={12} lg={11} className="float-right">
              <Img
                fluid={surgeconAbout.surgeconAboutImage.asset.fluid}
                alt={surgeconAbout.surgeconAboutImage.alt}
              />
            </Col>
          </Col>
          <Col xs={12} lg={7} className="py-5">
            <Img
              fluid={surgeconAbout.surgeconAboutLogo.asset.fluid}
              alt={surgeconAbout.surgeconAboutLogo.alt}
            />

            <Container className="mt-5">
              {data.allSanitySurgecon.nodes.map((node) => {
                return (
                  <BlockContent
                    key={node._key}
                    blocks={node._rawSurgeconAboutText}
                  />
                );
              })}
            </Container>
            {/* <h2 className="display-4 font-weight-bold text-primary mb-2">
              {about.aboutHeadline}
            </h2>
            <p className="text-center lead font-italic mb-5">
              {about.aboutSubheadline}
            </p>
            <Container>
              {data.allSanityHome.nodes.map((node) => {
                return (
                  <BlockContent key={node._key} blocks={node._rawAboutText} />
                );
              })}
            </Container> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSurgecon;
