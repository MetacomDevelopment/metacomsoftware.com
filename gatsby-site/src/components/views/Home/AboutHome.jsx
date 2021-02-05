import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Container, Row, Col, Table } from 'react-bootstrap';
import BlockContent from '@sanity/block-content-to-react';
import BackgroundImage from 'gatsby-background-image';

const AboutHome = ({ className }) => {
  const data = useStaticQuery(graphql`
    query AboutHomeQ {
      masthead: file(
        relativePath: {
          eq: "assets/images/pages/home/experienced-healthcare-software-company-metacom-development.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      allSanityHome {
        nodes {
          _key
          _rawAboutText
          usps {
            _key
            uspDescription
            uspIcon
          }
        }
      }
      sanityHome {
        uspHeadline
        aboutHeadline
        aboutSubheadline
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

  const imageData = data.masthead.childImageSharp.fluid;

  const about = data.sanityHome;
  const usps = data.allSanityHome;

  return (
    <BackgroundImage
      Tag="section"
      id="aboutHome"
      className="bg-img-white-gradient section-no-margin"
      fluid={imageData}
      backgroundColor={`#040e18`}
      alt="Forest with code - Metacom Development homepage background"
    >
      {/* <section className="section-no-margin"> */}
      <Container fluid className="py-5">
        <Row className="">
          <Col xs={12} lg={6} className="p-3 p-lg-5">
            <Col
              lg={9}
              className="bg-dark-gray-trasparent drop-shadow-dark p-3 p-lg-5 mx-auto"
            >
              <h3 className="text-white mb-2">{about.uspHeadline}</h3>
              <hr className="divider mb-5" />
              {usps.nodes.map((node) => {
                return node.usps.map((usp) => {
                  return (
                    <Row
                      key={usp._key}
                      className="d-flex text-white ml-2 mt-3 flex-nowrap"
                    >
                      <div className="flex justify-content-end">
                        <i
                          className={`${usp.uspIcon} fa-2x text-primary mt-1`}
                        ></i>
                      </div>
                      <span className="mt-2 ml-3">{usp.uspDescription}</span>
                    </Row>
                  );
                });
              })}
              {/* <Row className="d-flex text-white ml-2 mb-4">
                <i className="fas fa-chart-line fa-2x text-primary mt-1"></i>
                <span className="mt-2 ml-3">
                  Driven by your growth & success
                </span>
              </Row>
              <Row className="d-flex text-white ml-3 mb-4">
                <i className="fas fa-lightbulb fa-2x text-primary mt-1 text-center"></i>
                <span className="mt-2 ml-3">
                  Powered by innovation & creative solutions
                </span>
              </Row>
              <Row className="d-flex text-white ml-2 mb-4">
                <i className="fas fa-bullseye fa-2x text-primary mt-1"></i>
                <span className="mt-2 ml-3">
                  Targeted industry expertise & knowledge
                </span>
              </Row>
              <Row className="d-flex text-white ml-2 mb-4">
                <i className="fas fa-globe fa-2x text-primary mt-1"></i>
                <span className="mt-2 ml-3">
                  Network of leading professionals
                </span>
              </Row> */}
            </Col>
          </Col>
          <Col xs={12} lg={6} className="py-5">
            <h2 className="display-4 font-weight-bold text-primary mb-2">
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
            </Container>
          </Col>
        </Row>
      </Container>
      {/* </section> */}
    </BackgroundImage>
  );
};

export default AboutHome;
