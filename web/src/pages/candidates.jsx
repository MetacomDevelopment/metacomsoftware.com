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

const CandidatesPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query CandidatesPageQ {
      imgHeroBg: file(
        relativePath: {
          eq: "assets/images/home/industries-civil-structural-engineering-job-recruiter-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgCompany: file(
        relativePath: {
          eq: "assets/images/home/landscaping-contractor-brick-walkway-braven-landscape-construction-plympton-ma.jpg"
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
  const imgCompany = data.imgCompany.childImageSharp.gatsbyImageData;

  const seo = {
    title: `NEED TO COMPLETE`,
    description: 'NEED TO COMPLETE',
    slug: location.pathname,
  };

  const hero = {
    header: 'Candidates',
    subheader: 'This is going to be a short description',
    alt: 'NEED TO COMPLETE',
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
      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
          <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0 }}
            className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none"
          >
            <div>
              <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
                Civil & Structural Engineering Staffing
              </h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Meet {allCompany.owner}
              </h3>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0 }}
            className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8"
          >
            <div className="relative lg:row-start-1 lg:col-start-2">
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <div className="aspect-w-12 aspect-h-7">
                  <GatsbyImage
                    image={imgCompany}
                    className="rounded-2xl shadow-xl"
                    imgClassName="rounded-2xl shadow-xl"
                    alt="Company"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <p className="text-lg text-gray-500">
                  Our network runs deep nationwide and includes plenty of young
                  professionals who are eager and willing to relocate for the
                  right opportunity.
                </p>
              </div>
              <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <h3>Disciplines</h3>
                <p>
                  This field is highly competitive as every project is time
                  sensitive. All-Star Connections understands that if you're
                  down talent, your production is down, and eventually your
                  profits are down. We will get you a PERMANENT solution for
                  these issues in no time.
                </p>
                <ul>
                  <li>Structural</li>
                  <li>Transportation</li>
                  <li>Geotechnical</li>
                  <li>Water resource</li>
                  <li>Forensics</li>
                  <li>Surveying</li>
                  <li>Construction/Project Management</li>
                  <li>Environmental Health & Safety</li>
                </ul>
                <h3>Recent Placements</h3>
                <p>
                  This field is highly competitive as every project is time
                  sensitive. All-Star Connections understands that if you're
                  down talent, your production is down, and eventually your
                  profits are down. We will get you a PERMANENT solution for
                  these issues in no time.
                </p>
                <ul>
                  <li>
                    PE for national firm focusing on structural conversions
                  </li>
                  <li>Aviation Engineer (PM)​ for local firm</li>
                  <li>Construction Manager for O&G firm</li>
                  <li>
                    PE's for forensics firm working with insurance clients​
                  </li>
                  <li>Electrical PM for firm working with public sector</li>
                  <li>
                    Traffic/Transportation Engineer for public sector client
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default CandidatesPage;
