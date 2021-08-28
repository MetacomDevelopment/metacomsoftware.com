import React from 'react';

import useSanitySettingsCompany from '../hooks/useSanitySettingsCompany';
import useSanitySettingsSocials from '../hooks/useSanitySettingsSocials';
import useSanitySettingsColors from '../hooks/useSanitySettingsColors';
import useSanitySettingsMetadata from '../hooks/useSanitySettingsMetadata';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeroHome from '../components/views/home/HeroHome';
import CompanyHome from '../components/views/home/CompanyHome';
import CallOutHome from '../components/views/home/CallOutHome';
import FeaturesHome from '../components/views/home/FeaturesHome';
import CtaHome from '../components/views/home/CtaHome';
import BenefitsHome from '../components/views/home/BenefitsHome';

const IndexPage = ({ location }) => {
  const { ...allCompany } = useSanitySettingsCompany();
  const { ...allSocials } = useSanitySettingsSocials();
  const { ...allColors } = useSanitySettingsColors();
  const { ...allMetadata } = useSanitySettingsMetadata();

  const seo = {
    title: `Engineering Recruitment Agency - Job Staffing Agency`,
    description:
      'All-Star Connections is a recruitment agency that focuses on providing permanent placements for companies in engineering & technical industries. Call us today!',
    slug: 'https://www.allstarconnections.com/',
  };

  return (
    <Layout type="brand">
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
      <HeroHome />
      <BenefitsHome />
      <CompanyHome />
      <CallOutHome />
      <FeaturesHome />
      <CtaHome />
    </Layout>
  );
};

export default IndexPage;
