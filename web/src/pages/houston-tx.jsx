import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import useSanitySettingsCompany from '../hooks/useSanitySettingsCompany';
import useSanitySettingsSocials from '../hooks/useSanitySettingsSocials';
import useSanitySettingsColors from '../hooks/useSanitySettingsColors';
import useSanitySettingsMetadata from '../hooks/useSanitySettingsMetadata';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import BenefitsHouston from '../components/views/houston/BenefitsHouston';
import FeaturesHouston from '../components/views/houston/FeaturesHouston';
import CtaFullHouston from '../components/views/houston/CtaFullHouston';
import CtaHalfHouston from '../components/views/houston/CtaHalfHouston';
import ServicesHouston from '../components/views/houston/ServicesHouston';
import HeroLocations from '../components/layouts/HeroLocations';

const HoustonPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query HoustonPageQ {
      imgHeroBg: file(
        relativePath: {
          eq: "assets/images/houston-tx/houston-tx-recruiting-agency-all-star-connections-recruitment-company.jpg"
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
    title: `Houston Recruitment Agency for Engineering Companies`,
    description:
      'Does your company need a recruitment agency that focuses on permanent placements for engineering & technical roles? Contact All-Star Connections today!',
    slug: 'https://www.allstarconnections.com/houston-tx/',
  };

  const hero = {
    header: `Connecting Houston Companies With Top Talent`,
    subheader:
      'All-Star Connections of Houston is a recruitment agency that provides high-quality candidates for engineering & technical companies in Houston, TX.',
    alt: 'All-Star Connections is a recruitment agency in Houston that provides high-quality candidates for companies in engineering & technical industries.',
  };

  return (
    <Layout type="houston">
      <SEO title={seo.title} description={seo.description} canonical={seo.slug}>
        <script type="application/ld+json">
          {`{
              "@context": "https://schema.org",
              "@type": "EmploymentAgency",
              "name": "All-Star Connections",
              "image": "https://www.allstarconnections.com/houston-tx/#image",
              "@id": "https://www.allstarconnections.com/houston-tx/",
              "url": "https://www.allstarconnections.com/houston-tx/",
              "telephone": "(832) 864-5816",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1544 West 23rd",
                "addressLocality": "Houston, TX",
                "addressRegion": "TX",
                "postalCode": "77008",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 29.80675254559343,
                "longitude": -95.42751183121199
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
      <BenefitsHouston />
      <FeaturesHouston />
      <CtaFullHouston />
      <ServicesHouston />
      <CtaHalfHouston />
    </Layout>
  );
};

export default HoustonPage;
