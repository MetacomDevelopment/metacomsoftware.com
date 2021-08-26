import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import BlockContent from '@sanity/block-content-to-react';

import useSanitySettingsCompany from '../../../hooks/useSanitySettingsCompany';
import useSanitySettingsSocials from '../../../hooks/useSanitySettingsSocials';
import useSanitySettingsColors from '../../../hooks/useSanitySettingsColors';
import useSanitySettingsMetadata from '../../../hooks/useSanitySettingsMetadata';
import Section from '../../layouts/Section';
import Container from '../../layouts/Container';
import Grid from '../../layouts/Grid';
import Col from '../../layouts/Col';

const CompanyHome = () => {
  const settings = {
    testimonialBg: 'bg-primary',
    quoteColor: 'text-accent',
    authorTextColor: 'text-accent',
  };

  const data = useStaticQuery(graphql`
    query CompanyHomeQ {
      allSanityPageHome {
        nodes {
          _key
          _rawCompanyBio
        }
      }
      sanityPageHome {
        companyImg {
          alt
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
      }
      imgMeeting: file(
        relativePath: {
          eq: "assets/images/boston-ma/boston-ma-interview-engineering-job-recruiter-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgPlacement: file(
        relativePath: {
          eq: "assets/images/boston-ma/boston-ma-placement-sustainability-recruiter-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgEngineer: file(
        relativePath: {
          eq: "assets/images/boston-ma/boston-ma-engineering-programmer-recruiter-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  const sanity = data.sanityPageHome;
  const allSanity = data.allSanityPageHome;

  const { ...allCompany } = useSanitySettingsCompany();
  const { ...allSocials } = useSanitySettingsSocials();
  const { ...allColors } = useSanitySettingsColors();
  const { ...allMetadata } = useSanitySettingsMetadata();

  const imgMeeting = data.imgMeeting.childImageSharp.gatsbyImageData;
  const imgPlacement = data.imgPlacement.childImageSharp.gatsbyImageData;
  const imgEngineer = data.imgEngineer.childImageSharp.gatsbyImageData;

  return (
    <Section classes="bg-white">
      <Container>
        <Grid classes="lg:grid-cols-2 gap-x-12 gap-y-32">
          <Col classes="order-1 lg:order-2">
            <Container type="img">
              <GatsbyImage
                image={imgMeeting}
                className="aspect-w-12 aspect-h-7 rounded-2xl shadow-xl"
                imgClassName="w-full h-full object-center object-cover"
                alt="Company"
                loading="lazy"
              />
            </Container>
          </Col>
          <Col classes="order-2 lg:order-1">
            <div className="text-lg text-gray-500 max-w-prose mx-auto lg:max-w-none space-y-10">
              <div className="space-y-6">
                <h2 className="text-3xl text-primary font-extrabold tracking-wide capitalize">
                  Hire Top Talent On-Demand
                </h2>
                <p>
                  Scaling your company and{' '}
                  <strong>finding the right employees</strong> is never easy,
                  especially when you've tried using other staffing agencies and
                  they failed to deliver.
                </p>
                <p>
                  Imagine having access to thousands of qualified candidates who
                  are eager to work at your company. We'll help you find the
                  right people that fit into your culture, so you can{' '}
                  <strong>focus on running your business</strong> instead of
                  looking for new hires.
                </p>
                <p>
                  All-Star Connections is a staffing agency that helps companies
                  like yours{' '}
                  <strong>find top talent and high-quality candidates</strong>.
                  Since 2016, we've had extensive experience in helping
                  businesses just like yours grow their workforce with ease and
                  efficiency.
                </p>
              </div>
            </div>
          </Col>
          <Col classes="order-3 lg:order-3">
            <Container type="img">
              <GatsbyImage
                image={imgPlacement}
                className="aspect-w-12 aspect-h-7 rounded-2xl shadow-xl"
                imgClassName="w-full h-full object-center object-cover"
                alt="Company"
                loading="lazy"
              />
            </Container>
          </Col>
          <Col classes="order-4 lg:order-4">
            <div className="text-lg text-gray-500 max-w-prose mx-auto lg:max-w-none space-y-10">
              <div className="space-y-6">
                <h2 className="text-3xl text-primary font-extrabold tracking-wide capitalize">
                  Placement Sustainability is Our #1 Goal
                </h2>
                <p>How do we maintain our 96.7% sustainability rating?</p>
                <ul className="fa-ul">
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check text-primary" />
                    </span>
                    Only dealing with reliable, driven, and talented candidates
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check text-primary" />
                    </span>
                    Integrating our proprietary vetting process using psychology
                    and behavioral analysis
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check text-primary" />
                    </span>
                    Utilizing custom tests and interviews that are designed to
                    assess a candidate's skills, competencies, work personality,
                    cognitive abilities (IQ), and emotional intelligence
                  </li>
                </ul>
                <p>
                  <strong>The result?</strong> You get an elevated standard for
                  technical talent – proven by our track record of client
                  satisfaction.
                </p>
              </div>
            </div>
          </Col>
          <Col classes="order-5 lg:order-6">
            <Container type="img">
              <GatsbyImage
                image={imgEngineer}
                className="aspect-w-12 aspect-h-7 rounded-2xl shadow-xl"
                imgClassName="w-full h-full object-center object-cover"
                alt="Company"
                loading="lazy"
              />
            </Container>
          </Col>
          <Col classes="order-6 lg:order-5">
            <div className="text-lg text-gray-500 max-w-prose mx-auto lg:max-w-none space-y-10">
              <div className="space-y-6">
                <h2 className="text-3xl text-primary font-extrabold tracking-wide capitalize">
                  Engineering Is Our Primary Focus
                </h2>
                <ul className="fa-ul">
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check text-primary" />
                    </span>
                    <strong>Medical Device & Biotechnology</strong> (Pre-Market
                    and Post-Market)
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check text-primary" />
                    </span>
                    <strong>IT/Technology</strong> (Software Engineers, Firmware
                    Engineers, Hardware Engineers, Database Development/Admin,
                    Front/Back End Development, IoT, and Project Management)
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check text-primary" />
                    </span>
                    <strong>Civil/Structural</strong> (Professional Engineers,
                    Forensics, Construction Management, Project Management,
                    Operations)
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check text-primary" />
                    </span>
                    <strong>Manufacturing</strong> (Quality Engineers,
                    Mechanical Engineers, Electrical Engineers, Manufacturing
                    Engineers, Process Engineers, OpEx, EHS, and more)
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Grid>
      </Container>
    </Section>
  );
};

export default CompanyHome;
