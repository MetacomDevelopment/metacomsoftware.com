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
        }
      }
      sanityHome {
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
              className="bg-dark-gray-trasparent drop-shadow-dark p-5 mx-auto"
            >
              <h3 className="text-white mb-2">WHAT SETS US APART?</h3>
              <hr className="divider mb-5" />
              <Row className="d-flex text-white ml-2 mb-4">
                <i className="fas fa-chart-line fa-2x text-primary mt-1"></i>
                <span className="mt-2 ml-3">Experienced & professional</span>
              </Row>
              <Row className="d-flex text-white ml-3 mb-4">
                <i className="fas fa-lightbulb fa-2x text-primary mt-1"></i>
                <span className="mt-2 ml-3">Experienced & professional</span>
              </Row>
              <Row className="d-flex text-white ml-2 mb-4">
                <i className="fas fa-bullseye fa-2x text-primary mt-1"></i>
                <span className="mt-2 ml-3">Experienced & professional</span>
              </Row>
              <Row className="d-flex text-white ml-2 mb-4">
                <i className="fas fa-globe fa-2x text-primary mt-1"></i>
                <span className="mt-2 ml-3">Experienced & professional</span>
              </Row>
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
