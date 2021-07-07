import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import useSanitySettingsCompany from '../hooks/useSanitySettingsCompany';
import useSanitySettingsSocials from '../hooks/useSanitySettingsSocials';
import useSanitySettingsColors from '../hooks/useSanitySettingsColors';
import useSanitySettingsMetadata from '../hooks/useSanitySettingsMetadata';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeaderPage from '../components/layouts/HeroPage';
import Container from '../components/layouts/Container';

const FindUsOnlinePage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query FindUsOnlinePageQ {
      imgHeroBg: file(
        relativePath: {
          eq: "assets/images/find-us-online/find-us-online-landscaping-services-braven-landscape-construction-plympton-ma.jpg"
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
    title: `NEED TO COMPLETE`,
    description: 'NEED TO COMPLETE',
    slug: location.pathname,
  };

  const hero = {
    header: `Find ${allCompany.name} Online`,
    subheader: 'This is going to be a short description',
    alt: 'NEED TO COMPLETE',
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
      <Container type="sm">
        <div className="py-10 lg:max-w-3xl mx-auto">
          <h2 className="text-center py-5">
            <span className="text-base text-gray-500 uppercase break-normal">
              {allCompany.name}
              <br />
            </span>
            <span className="break-normal text-3xl">Find Us Online</span>
          </h2>
          <p className="py-5">
            You can find {allCompany.name} online by visiting the links below.
            Check out our social media accounts and directory listings for more
            information on who we are, what we do, and how we can work together.
            We're excited to meet new people and share our work!
          </p>
          <h3 className="py-5 font-bold">Links:</h3>
          <ul className="py-5 list-disc list-inside">
            <li>
              <a href="/" target="_blank">
                Link
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </Layout>
  );
};

export default FindUsOnlinePage;
