import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import useSanitySettingsCompany from '../hooks/useSanitySettingsCompany';
import useSanitySettingsSocials from '../hooks/useSanitySettingsSocials';
import useSanitySettingsColors from '../hooks/useSanitySettingsColors';
import useSanitySettingsMetadata from '../hooks/useSanitySettingsMetadata';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeaderPage from '../components/layouts/HeroPage';
import Container from '../components/layouts/Container';

const NotFoundPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query NotFoundPageQ {
      imgHeroBg: file(
        relativePath: {
          eq: "assets/images/home/technology-engineering-job-recruiter-agency-all-star-connections.jpg"
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

  const seo = {
    title: `Something Went Wrong! This Page Does Not Exist (404 Error)`,
    description:
      "The page you are trying to visit does not exist. Let's see if we can help you get on the right track!",
    slug: 'https://www.allstarconnections.com/404/',
  };

  const hero = {
    header: 'Something Went Wrong! This Page Does Not Exist (404 Error)',
    subheader:
      "The page you are trying to visit does not exist. Let's see if we can help you get on the right track!",
    alt: 'All-Star Connections is an engineering recruitment agency that also provides staffing support for companies.',
  };

  const variants = {
    hidden: { opacity: 0, scale: 0.8, x: -100 },
    visible: { opacity: 1, scale: 1, x: 0 },
  };

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

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
      <Container type="sm">
        <div className="py-24 lg:max-w-3xl mx-auto">
          <div className="text-center py-5 space-y-3">
            <h2 className="text-xl font-normal text-gray-500 uppercase break-normal">
              {allCompany.name}
            </h2>
            <h3 className="text-primary font-bold break-normal text-4xl capitalize">
              Let's see if we can help
            </h3>
          </div>
          <p className="py-5 text-xl text-center">
            The page you are trying to visit does not exist. Check for a typo in
            the URL.
          </p>
          <h3 className="py-5 font-bold">Try these links:</h3>
          <div className="max-w-3xl">
            <ul className="list-disc list-inside text-lg font-bold">
              <li>
                <Link to="/" className="text-accent hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about/" className="text-accent hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials/"
                  className="text-accent hover:text-primary"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/locations/"
                  className="text-accent hover:text-primary"
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us/"
                  className="text-accent hover:text-primary"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
