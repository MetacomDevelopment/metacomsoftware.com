import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import useSanitySettingsCompany from '../hooks/useSanitySettingsCompany';
import useSanitySettingsSocials from '../hooks/useSanitySettingsSocials';
import useSanitySettingsColors from '../hooks/useSanitySettingsColors';
import useSanitySettingsMetadata from '../hooks/useSanitySettingsMetadata';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeroLocations from '../components/layouts/HeroLocations';
import BenefitsSanDiego from '../components/views/san-diego/BenefitsSanDiego';
import FeaturesSanDiego from '../components/views/san-diego/FeaturesSanDiego';
import CtaFullSanDiego from '../components/views/san-diego/CtaFullSanDiego';
import CtaHalfSanDiego from '../components/views/san-diego/CtaHalfSanDiego';
import ServicesSanDiego from '../components/views/san-diego/ServicesSanDiego';

const SanDiegoPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query SanDiegoPageQ {
      imgHeroBg: file(
        relativePath: {
          eq: "assets/images/san-diego-ca/san-diego-ca-recruiting-agency-all-star-connections-recruitment-company.jpg"
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
    title: `San Diego Recruitment Agency for Engineering Companies`,
    description:
      'Does your company need a recruitment agency that focuses on permanent placements for engineering & technical roles? Contact All-Star Connections today!',
    slug: 'https://www.allstarconnections.com/san-diego-ca/',
  };

  const hero = {
    header: `Connecting San Diego Companies With Top Talent`,
    subheader:
      'All-Star Connections of San Diego is a recruitment agency that provides high-quality candidates for engineering & technical companies in San Diego, CA.',
    alt: 'All-Star Connections is a recruitment agency in San Diego that provides high-quality candidates for companies in engineering & technical industries.',
  };

  return (
    <Layout type="san diego">
      <SEO title={seo.title} description={seo.description} canonical={seo.slug}>
        <script type="application/ld+json">
          {`{
              "@context": "https://schema.org",
              "@type": "EmploymentAgency",
              "name": "All-Star Connections",
              "image": "https://www.allstarconnections.com/san-diego-ca/#image",
              "@id": "https://www.allstarconnections.com/san-diego-ca/",
              "url": "https://www.allstarconnections.com/san-diego-ca/",
              "telephone": "(619) 759-5234",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3093 C Street Unit 1",
                "addressLocality": "San Diego, CA",
                "addressRegion": "CA",
                "postalCode": "92102",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 32.71673754903574,
                "longitude": -117.12767020230521
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              },
              "sameAs": "https://www.linkedin.com/company/all-star-connections/" 
            }`}
        </script>
      </SEO>
      <HeroLocations
        imgHeroBg={imgHeroBg}
        altText={hero.alt}
        headerText={hero.header}
        subheaderText={hero.subheader}
      />
      <BenefitsSanDiego />
      <FeaturesSanDiego />
      <CtaFullSanDiego />
      <ServicesSanDiego />
      <CtaHalfSanDiego />
    </Layout>
  );
};

export default SanDiegoPage;
