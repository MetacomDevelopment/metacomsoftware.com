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

const LocationsPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query LocationsPageQ {
      imgHeroBg: file(
        relativePath: {
          eq: "assets/images/locations/all-star-connections-recruiting-company-locations-united-states.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgBoston: file(
        relativePath: {
          eq: "assets/images/locations/all-star-connections-recruiting-company-locations-boston-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgHouston: file(
        relativePath: {
          eq: "assets/images/locations/all-star-connections-recruiting-company-locations-houston-tx.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgSanDiego: file(
        relativePath: {
          eq: "assets/images/locations/all-star-connections-recruiting-company-locations-san-diego-ca.jpg"
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
  const imgBoston = data.imgBoston.childImageSharp.gatsbyImageData;
  const imgHouston = data.imgHouston.childImageSharp.gatsbyImageData;
  const imgSanDiego = data.imgSanDiego.childImageSharp.gatsbyImageData;

  const seo = {
    title: `Check Our Recruiting Agency's Locations in MA, TX, CA`,
    description:
      'All-Star Connections has expanded our locations into Boston, MA, Houston, TX, and San Diego, CA. Contact us today for job recruitment services.',
    slug: 'https://www.allstarconnections.com/locations/',
  };

  const hero = {
    header: `${allCompany.name} Locations`,
    subheader:
      'We have expanded beyond Boston, MA and now have locations in Houston, TX and San Diego, CA.',
    alt: 'All-Star Connections is a job recruitment agency that has expanded our locations into Boston, MA, Houston, TX, and San Diego, CA.',
  };

  return (
    <Layout type="brand">
      <SEO title={seo.title} description={seo.description} canonical={seo.slug}>
        <script type="application/ld+json">
          {`{
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "All-Star Connections",
              "url": "https://www.allstarconnections.com/",
              "logo": "https://www.allstarconnections.com/#image",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "(617) 684-5108",
                "contactType": "sales",
                "areaServed": "US",
                "availableLanguage": "en"
              },
              "sameAs": "https://www.linkedin.com/company/all-star-connections/"
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
          <Grid classes="lg:grid-cols-2 gap-x-12 gap-y-14 lg:gap-y-32">
            <Col classes="order-1 lg:order-2">
              <Container type="img">
                <GatsbyImage
                  image={imgBoston}
                  className="aspect-w-12 aspect-h-7 rounded-2xl shadow-xl"
                  imgClassName="w-full h-full object-center object-cover"
                  alt="All-Star Connections is an engineering recruitment agency that helps companies find permanent placements"
                  loading="lazy"
                />
              </Container>
            </Col>
            <Col classes="order-2 lg:order-1">
              <div className="text-lg text-gray-500 max-w-prose mx-auto lg:max-w-none space-y-10">
                <div className="space-y-6">
                  <h2 className="text-3xl text-primary font-extrabold tracking-wide capitalize">
                    Boston, MA Headquarters
                  </h2>
                  <p>
                    All-Star Connections can help connect your company with top
                    talent in Boston, MA. Give us a call or fill out our contact
                    form to schedule a free consultation.
                  </p>
                  <ul className="list-disc list-indent">
                    <li>
                      <span className="font-bold">Name</span>:{' '}
                      <a
                        href={allSocials.gmbCid}
                        target="_blank"
                        className="text-yellow-500 hover:text-blue-800 font-semibold"
                        rel="noreferrer noopener"
                      >
                        All-Star Connections of Boston
                      </a>
                    </li>
                    <li>
                      <span className="font-bold">Address</span>:{' '}
                      <a
                        href={allSocials.gmbCid}
                        target="_blank"
                        className="text-yellow-500 hover:text-blue-800 font-semibold"
                        rel="noreferrer noopener"
                      >
                        {allCompany.address}
                      </a>
                    </li>
                    <li>
                      <span className="font-bold">Phone Number</span>:{' '}
                      <a
                        href={allCompany.phoneHref}
                        target="_blank"
                        className="text-yellow-500 hover:text-blue-800 font-semibold"
                        rel="noreferrer noopener"
                      >
                        {allCompany.phone}
                      </a>
                    </li>
                    <li>
                      <span className="font-bold">Website</span>:{' '}
                      <Link
                        to="/boston-ma/"
                        className="text-yellow-500 hover:text-blue-800 font-semibold"
                      >
                        {allCompany.name} of Boston
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col classes="order-3 lg:order-3">
              <Container type="img">
                <GatsbyImage
                  image={imgHouston}
                  className="aspect-w-12 aspect-h-7 rounded-2xl shadow-xl"
                  imgClassName="w-full h-full object-center object-cover"
                  alt="All-Star Connections is an engineering recruitment agency that helps companies find permanent placements"
                  loading="lazy"
                />
              </Container>
            </Col>
            <Col classes="order-4 lg:order-4">
              <div className="text-lg text-gray-500 max-w-prose mx-auto lg:max-w-none space-y-10">
                <div className="space-y-6">
                  <h2 className="text-3xl text-primary font-extrabold tracking-wide capitalize">
                    Houston, TX Headquarters
                  </h2>
                  <p>
                    All-Star Connections is ready to provide your company with
                    top talent in Houston, TX. Give us a call or fill out our
                    contact form to schedule a free consultation.
                  </p>
                  <ul className="list-disc list-indent">
                    <li>
                      <span className="font-bold">Name</span>:{' '}
                      <a
                        href="https://www.google.com/maps/place/1544+W+23rd+St,+Houston,+TX+77008/@29.8065431,-95.4296898,17z/data=!3m1!4b1!4m5!3m4!1s0x8640c70523ab679f:0xb5ac230d9ab01f4f!8m2!3d29.8065431!4d-95.4275011"
                        target="_blank"
                        className="text-yellow-500 hover:text-blue-800 font-semibold"
                        rel="noreferrer noopener"
                      >
                        All-Star Connections of Houston
                      </a>
                    </li>
                    <li>
                      <span className="font-bold">Address</span>:{' '}
                      <a
                        href="https://www.google.com/maps/place/1544+W+23rd+St,+Houston,+TX+77008/@29.8065431,-95.4296898,17z/data=!3m1!4b1!4m5!3m4!1s0x8640c70523ab679f:0xb5ac230d9ab01f4f!8m2!3d29.8065431!4d-95.4275011"
                        target="_blank"
                        className="text-yellow-500 hover:text-blue-800 font-semibold"
                        rel="noreferrer noopener"
                      >
                        1544 West 23rd, Houston, TX 77008
                      </a>
                    </li>
                    <li>
                      <span className="font-bold">Phone Number</span>:{' '}
                      <a
                        href="tel:+18328645816"
                        target="_blank"
                        className="text-yellow-500 hover:text-blue-800 font-semibold"
                        rel="noreferrer noopener"
                      >
                        (832) 864-5816
                      </a>
                    </li>
                    <li>
                      <span className="font-bold">Website</span>:{' '}
                      <Link
                        to="/houston-tx/"
                        className="text-yellow-500 hover:text-blue-800 font-semibold"
                      >
                        {allCompany.name} of Texas
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col classes="order-5 lg:order-6">
              <Container type="img">
                <GatsbyImage
                  image={imgSanDiego}
                  className="aspect-w-12 aspect-h-7 rounded-2xl shadow-xl"
                  imgClassName="w-full h-full object-center object-cover"
                  alt="All-Star Connections is an engineering recruitment agency that helps companies find permanent placements"
                  loading="lazy"
                />
              </Container>
            </Col>
            <Col classes="order-6 lg:order-5">
              <div className="text-lg text-gray-500 max-w-prose mx-auto lg:max-w-none space-y-10">
                <div className="space-y-6">
                  <h2 className="text-3xl text-primary font-extrabold tracking-wide capitalize">
                    San Diego, CA Headquarters
                  </h2>
                  <p>
                    All-Star Connections has a pool of top talent for your
                    company in San Diego, CA. Give us a call or fill out our
                    contact form to schedule a free consultation.
                  </p>
                  <ul className="list-disc list-indent">
                    <li>
                      <span className="font-bold">Name</span>:{' '}
                      <a
                        href="https://www.google.com/maps/place/3093+C+St+%231,+San+Diego,+CA+92102/@32.7165796,-117.1298589,17z/data=!3m1!4b1!4m5!3m4!1s0x80d95378b9eec2af:0xfb3c142aff5ead4e!8m2!3d32.7165796!4d-117.1276702"
                        target="_blank"
                        className="text-yellow-500 hover:text-blue-800 font-semibold"
                        rel="noreferrer noopener"
                      >
                        All-Star Connections of San Diego
                      </a>
                    </li>
                    <li>
                      <span className="font-bold">Address</span>:{' '}
                      <a
                        href="https://www.google.com/maps/place/3093+C+St+%231,+San+Diego,+CA+92102/@32.7165796,-117.1298589,17z/data=!3m1!4b1!4m5!3m4!1s0x80d95378b9eec2af:0xfb3c142aff5ead4e!8m2!3d32.7165796!4d-117.1276702"
                        target="_blank"
                        className="text-yellow-500 hover:text-blue-800 font-semibold"
                        rel="noreferrer noopener"
                      >
                        3093 C Street Unit 1, San Diego, CA 92102
                      </a>
                    </li>
                    <li>
                      <span className="font-bold">Phone Number</span>:{' '}
                      <a
                        href="tel:+16197595234"
                        target="_blank"
                        className="text-yellow-500 hover:text-blue-800 font-semibold"
                        rel="noreferrer noopener"
                      >
                        (619) 759-5234
                      </a>
                    </li>
                    <li>
                      <span className="font-bold">Website</span>:{' '}
                      <Link
                        to="/san-diego-ca/"
                        className="text-yellow-500 hover:text-blue-800 font-semibold"
                      >
                        {allCompany.name} of San Diego
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Grid>
        </Container>
      </Section>
    </Layout>
  );
};

export default LocationsPage;
