import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import useSanitySettingsCompany from '../hooks/useSanitySettingsCompany';
import useSanitySettingsSocials from '../hooks/useSanitySettingsSocials';
import useSanitySettingsColors from '../hooks/useSanitySettingsColors';
import useSanitySettingsMetadata from '../hooks/useSanitySettingsMetadata';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeaderPage from '../components/layouts/HeroPage';
import Section from '../components/layouts/Section';
import Container from '../components/layouts/Container';
import Grid from '../components/layouts/Grid';
import Col from '../components/layouts/Col';

const AboutPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query AboutPageQ {
      imgHeroBg: file(
        relativePath: {
          eq: "assets/images/about/boston-massachusetts-job-recruiter-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgRich: file(
        relativePath: {
          eq: "assets/images/about/rich-jeffery-job-recruiter-staffing-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgResume: file(
        relativePath: {
          eq: "assets/images/about/resume-job-recruiter-staffing-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgHiring: file(
        relativePath: {
          eq: "assets/images/about/hiring-job-recruiter-staffing-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgNegotiations: file(
        relativePath: {
          eq: "assets/images/about/negotiations-job-recruiter-staffing-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgTalent: file(
        relativePath: {
          eq: "assets/images/about/talent-job-recruiter-staffing-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  const { ...allCompany } = useSanitySettingsCompany();
  const { ...allSocials } = useSanitySettingsSocials();
  const { ...allColors } = useSanitySettingsColors();
  const { ...allMetadata } = useSanitySettingsMetadata();

  const imgHeroBg = data.imgHeroBg.childImageSharp.gatsbyImageData;
  const imgRich = data.imgRich.childImageSharp.gatsbyImageData;
  const imgResume = data.imgResume.childImageSharp.gatsbyImageData;
  const imgHiring = data.imgHiring.childImageSharp.gatsbyImageData;
  const imgNegotiations = data.imgNegotiations.childImageSharp.gatsbyImageData;
  const imgTalent = data.imgTalent.childImageSharp.gatsbyImageData;

  const seo = {
    title: `Learn About Our Engineering Recruiting & Staffing Agency`,
    description:
      'We focus on helping companies find the best candidates for open engineering positions. We maintain a strong network of qualified candidates. Contact us today.',
    slug: 'https://www.allstarconnections.com/about/',
  };

  const hero = {
    header: `About ${allCompany.name}`,
    subheader:
      'Learn who we are, what we offer, and how we can help your company hire top talent today',
    alt: 'All-Star Connections is an engineering staffing agency for companies.',
  };

  return (
    <Layout>
      <SEO title={seo.title} description={seo.description} canonical={seo.slug}>
        <script type="application/ld+json">
          {`{
            '@context': 'https://schema.org',
						'@type': 'Organization',
						'@id': ${allCompany.website}${seo.slug},
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': ${allCompany.cityState},
              'postalCode': ${allCompany.zip},
              'streetAddress': ${allCompany.street}
            },
            'email': ${allCompany.email},
            'member': [
              {
                '@type': 'Organization'
              },
              {
                '@type': 'Organization'
              }
            ],
            'alumni': [
              {
                '@type': 'Person',
                'name': ${allCompany.owner}
              },
            ],
            'name': ${allCompany.name},
            'telephone': ${allCompany.phone}
          }`}
        </script>
      </SEO>
      <HeaderPage
        imgHeroBg={imgHeroBg}
        altText={hero.alt}
        headerText={hero.header}
        subheaderText={hero.subheader}
      />
      <Section classes="bg-white">
        <Container>
          <Grid cols={2} gapY={32}>
            <Col lg={2}>
              <Container type="img">
                <GatsbyImage
                  image={imgRich}
                  className="rounded-2xl shadow-xl"
                  imgClassName="w-full h-full object-center object-cover"
                  alt="Company"
                  loading="lazy"
                />
              </Container>
            </Col>
            <Col lg={1}>
              <div className="text-lg text-gray-500 max-w-prose mx-auto lg:max-w-none space-y-10">
                <div className="space-y-6">
                  <h2 className="text-3xl text-primary font-extrabold tracking-wide capitalize">
                    Who We Are
                  </h2>
                  <p>
                    All-Star Connections focuses on helping companies find the
                    best candidates for open engineering positions. We maintain
                    a strong network of qualified candidates and are able to
                    present them to your company in a professional manner.
                  </p>
                  <p>
                    We have been in business since 2016, and know exactly how to
                    match people with the right roles to ensure all parties
                    involved are happy with the final outcome. All-Star
                    Connections focuses our efforts within the engineering &
                    technical industries and we're committed to finding your
                    company only the best candidates.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <Container type="img">
                <GatsbyImage
                  image={imgResume}
                  className="rounded-2xl shadow-xl"
                  imgClassName="w-full h-full object-center object-cover"
                  alt="Company"
                  loading="lazy"
                />
              </Container>
            </Col>
            <Col lg={4}>
              <div className="text-lg text-gray-500 max-w-prose mx-auto lg:max-w-none space-y-10">
                <div className="space-y-6">
                  <h2 className="text-3xl text-primary font-extrabold tracking-wide capitalize">
                    Our Mission
                  </h2>
                  <p>
                    The mission of All-Star Connections is to hold the highest
                    standards of customer service by exceeding your expectations
                    and always going above and beyond what's expected of us!
                  </p>
                  <p>
                    Our recruiting firm will become a dedicated partner with
                    your company to me your manpower and HR needs. Our team of
                    experts will search nationwide to find you the best talent
                    possible, while always applying the most advanced
                    recruitment technologies available on the market.
                  </p>
                  <p>
                    All-Star Connections is a professional organization founded
                    by a true believer in putting people first!
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <Container type="img">
                <GatsbyImage
                  image={imgHiring}
                  className="rounded-2xl shadow-xl"
                  imgClassName="w-full h-full object-center object-cover"
                  alt="Company"
                  loading="lazy"
                />
              </Container>
            </Col>
            <Col lg={5}>
              <div className="text-lg text-gray-500 max-w-prose mx-auto lg:max-w-none space-y-10">
                <div className="space-y-6">
                  <h2 className="text-3xl text-primary font-extrabold tracking-wide capitalize">
                    What We Offer
                  </h2>
                  <p>
                    All-Star Connections offers a range of services to assist
                    companies during their hiring process.
                  </p>
                  <ul className="list-disc list-indent">
                    <li>
                      <span className="font-bold">Talent Search</span>: All-Star
                      Connections works with companies and candidates alike to
                      help find that perfect match. If you are looking for a
                      full-time position with permanent placement, we can help.
                    </li>
                    <li>
                      <span className="font-bold">Candidate Referrals</span>:
                      Having trouble finding the right candidates? If so, let
                      All-Star Connections take some of the weight off your
                      shoulders! We have relationships with thousands of
                      qualified engineers and will be able to connect you with
                      an appropriate candidate for your role.
                    </li>
                    <li>
                      <span className="font-bold">Interviewing</span>: All-Star
                      Connections has developed an interview process that is
                      guaranteed to minimize the chances of making a bad hiring
                      choice. We work with you and your team to set your company
                      up for success when bringing on new employees.
                    </li>
                    <li>
                      <span className="font-bold">Employment Screening</span>:
                      All-Star Connections will review resumes and perform
                      background checks on candidates before they are presented
                      to companies. This ensures that all candidates have the
                      required skill set for your open role.
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <Container type="img">
                <GatsbyImage
                  image={imgNegotiations}
                  className="rounded-2xl shadow-xl"
                  imgClassName="w-full h-full object-center object-cover"
                  alt="Company"
                  loading="lazy"
                />
              </Container>
            </Col>
            <Col lg={8}>
              <div className="text-lg text-gray-500 max-w-prose mx-auto lg:max-w-none space-y-10">
                <div className="space-y-6">
                  <h2 className="text-3xl text-primary font-extrabold tracking-wide capitalize">
                    Request Expert Talent
                  </h2>
                  <p>
                    If you are interested in learning more about our recruiting
                    services how we can fill your engineering or technical
                    positions, please do not hesitate to contact us!
                  </p>
                  <p>
                    Give us a call today or fill out our contact form below to
                    schedule a free consultation. We look forward to building
                    your team and helping your company grow.
                  </p>
                </div>
              </div>
            </Col>
          </Grid>
        </Container>
      </Section>
    </Layout>
  );
};

export default AboutPage;
