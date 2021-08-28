import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import useSanitySettingsCompany from '../hooks/useSanitySettingsCompany';
import useSanitySettingsSocials from '../hooks/useSanitySettingsSocials';
import useSanitySettingsColors from '../hooks/useSanitySettingsColors';
import useSanitySettingsMetadata from '../hooks/useSanitySettingsMetadata';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeroLocations from '../components/layouts/HeroLocations';
import BenefitsBoston from '../components/views/boston/BenefitsBoston';
import FeaturesBoston from '../components/views/boston/FeaturesBoston';
import CtaFullBoston from '../components/views/boston/CtaFullBoston';
import CtaHalfBoston from '../components/views/boston/CtaHalfBoston';
import ServicesBoston from '../components/views/boston/ServicesBoston';

const BostonPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query BostonPageQ {
      imgHeroBg: file(
        relativePath: {
          eq: "assets/images/boston-ma/boston-ma-recruiting-agency-all-star-connections-recruitment-company.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);
  const imgHeroBg = data.imgHeroBg.childImageSharp.gatsbyImageData;

  const { ...allCompany } = useSanitySettingsCompany();
  const { ...allSocials } = useSanitySettingsSocials();
  const { ...allColors } = useSanitySettingsColors();
  const { ...allMetadata } = useSanitySettingsMetadata();

  const seo = {
    title: `Boston Recruitment Agency for Engineering Companies`,
    description:
      'Does your company need a recruitment agency that focuses on permanent placements for engineering & technical roles? Contact All-Star Connections today!',
    slug: 'https://www.allstarconnections.com/boston-ma/',
  };

  const hero = {
    header: `Connecting Boston Companies With Top Talent`,
    subheader:
      'All-Star Connections of Boston is a recruitment agency that provides high-quality candidates for engineering & technical companies in Boston, MA.',
    alt: 'All-Star Connections is a recruitment agency in Boston that provides high-quality candidates for companies in engineering & technical industries.',
  };

  return (
    <Layout type="boston">
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
      <HeroLocations
        imgHeroBg={imgHeroBg}
        altText={hero.alt}
        headerText={hero.header}
        subheaderText={hero.subheader}
      />
      <BenefitsBoston />
      <FeaturesBoston />
      <CtaFullBoston />
      <ServicesBoston />
      <CtaHalfBoston />
    </Layout>
  );
};

export default BostonPage;
