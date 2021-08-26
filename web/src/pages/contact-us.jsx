import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import useSanitySettingsCompany from '../hooks/useSanitySettingsCompany';
import useSanitySettingsSocials from '../hooks/useSanitySettingsSocials';
import useSanitySettingsColors from '../hooks/useSanitySettingsColors';
import useSanitySettingsMetadata from '../hooks/useSanitySettingsMetadata';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeroContact from '../components/layouts/HeroContact';
import Section from '../components/layouts/Section';
import Container from '../components/layouts/Container';
import Grid from '../components/layouts/Grid';
import Col from '../components/layouts/Col';

const ContactUsPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query ContactUsPageQ {
      imgHeroBg: file(
        relativePath: {
          eq: "assets/images/contact/engineering-job-recruiter-agency-all-star-connections.jpg"
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
    title: `Contact Our Engineering Recruiting Agency Today`,
    description:
      'Does your company have open engineering & technical positions? All-Star Connections is a recruiting agency that focuses on these industries. Call today!',
    slug: 'https://www.allstarconnections.com/contact-us/',
  };

  const hero = {
    header: `Contact ${allCompany.name}`,
    subheader: 'Give us a call or fill out our form below to get started',
    alt: 'All-Star Connections is an engineering recruitment agency that provides top talent to companies in competitive engineering and technical industries.',
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
      <HeroContact
        imgHeroBg={imgHeroBg}
        altText={hero.alt}
        headerText={hero.header}
        subheaderText={hero.subheader}
        anchor="/contact-us#form-footer"
      />
      <Section classes="bg-white overflow-hidden">
        <Container classes="space-y-12">
          <Grid classes="lg:grid-cols-1 gap-x-12 gap-y-32">
            <Col
              ref={ref}
              variants={variants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: 0 }}
              classes="relative bg-white shadow-xl"
            >
              <h2 className="sr-only">Contact us</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Contact information */}
                <div className="relative overflow-hidden py-10 px-6 bg-gray-700 sm:px-10 xl:p-12">
                  <div
                    className="absolute inset-0 pointer-events-none sm:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={359}
                      height={339}
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-accent">
                    Boston, MA Headquarters
                  </h2>
                  <p className="mt-6 text-base text-indigo-50 max-w-3xl">
                    {allCompany.name} is a recruiting agency that focuses on
                    engineering & technical industries. We are dedicated to
                    providing high-quality candidates to companies in Boston,
                    MA.
                  </p>
                  <p className="mt-6 text-base font-bold italic text-indigo-50 max-w-3xl">
                    Give us a call to schedule an appointment or fill out our
                    contact form for a consultation, and we’ll be happy to help
                    you!
                  </p>
                  <dl className="mt-8 space-y-6">
                    <dt>
                      <span className="sr-only">Phone number</span>
                    </dt>
                    <dd className="flex text-base text-yellow-100">
                      <div className="flex my-auto">
                        <a
                          href={allCompany.phoneHref}
                          target="_blank"
                          className="flex"
                          rel="noreferrer noopener"
                        >
                          <i className="fas fa-2x fa-phone mr-3 text-yellow-500 hover:text-yellow-400" />
                          <span className="text-yellow-100 hover:text-yellow-600 text-lg">
                            {allCompany.phone}
                          </span>
                        </a>
                      </div>
                    </dd>
                    <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className="flex text-base">
                      <div className="flex my-auto">
                        <a
                          href={allCompany.emailHref}
                          target="_blank"
                          className="flex"
                          rel="noreferrer noopener"
                        >
                          <i className="fas fa-2x fa-envelope mr-3 text-yellow-500 hover:text-yellow-400" />
                          <span className="text-yellow-100 hover:text-yellow-600 text-lg">
                            {allCompany.email}
                          </span>
                        </a>
                      </div>
                    </dd>
                    <dt>
                      <span className="sr-only">Address</span>
                    </dt>
                    <dd className="flex text-base text-yellow-100">
                      <div className="flex my-auto">
                        <a
                          href={allSocials.gmbCid}
                          target="_blank"
                          className="flex"
                          rel="noreferrer noopener"
                        >
                          <i className="fas fa-2x fa-map-marker-alt ml-1 mr-2 text-yellow-500 hover:text-yellow-400" />
                          <span className="text-yellow-100 hover:text-yellow-600 text-lg ml-2">
                            {allCompany.address}
                          </span>
                        </a>
                      </div>
                    </dd>
                    <dt>
                      <span className="sr-only">Website</span>
                    </dt>
                    <dd className="flex text-base text-yellow-100">
                      <div className="flex my-auto">
                        <Link to="/boston-ma/" className="flex">
                          <i className="fas fa-2x fa-globe ml-1 mr-2 text-yellow-500 hover:text-yellow-400" />
                          <span className="text-yellow-100 hover:text-yellow-600 text-lg ml-2">
                            All-Star Connections of Boston
                          </span>
                        </Link>
                      </div>
                    </dd>
                  </dl>
                  <ul className="mt-12 ml-1 flex space-x-6">
                    <li>
                      <a
                        href={allSocials.facebook}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Facebook</span>
                        <i className="fab fa-2x fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={allSocials.instagram}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Instagram</span>
                        <i className="fab fa-2x fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={allSocials.twitter}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Twitter</span>
                        <i className="fab fa-2x fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={allSocials.youTube}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">YouTube</span>
                        <i className="fab fa-2x fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={allSocials.linkedIn}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <i className="fab fa-2x fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <iframe
                    title={`Google Map of ${allCompany.name}`}
                    src={allSocials.gmbEmbed}
                    width="100%"
                    height="100%"
                    className="w-full h-full"
                    allowFullScreen=""
                    loading="lazy"
                  />
                </div>
              </div>
            </Col>
            <Col
              ref={ref}
              variants={variants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: 0 }}
              classes="relative bg-white shadow-xl"
            >
              <h2 className="sr-only">Contact us</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Contact information */}
                <div className="relative overflow-hidden py-10 px-6 bg-gray-700 sm:px-10 xl:p-12">
                  <div
                    className="absolute inset-0 pointer-events-none sm:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={359}
                      height={339}
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-accent">
                    Houston, TX Headquarters
                  </h2>
                  <p className="mt-6 text-base text-indigo-50 max-w-3xl">
                    {allCompany.name} is a recruiting agency that focuses on
                    engineering & technical industries. We are dedicated to
                    providing high-quality candidates to companies in Houston,
                    TX.
                  </p>
                  <p className="mt-6 text-base font-bold italic text-indigo-50 max-w-3xl">
                    Give us a call to schedule an appointment or fill out our
                    contact form for a consultation, and we’ll be happy to help
                    you!
                  </p>
                  <dl className="mt-8 space-y-6">
                    <dt>
                      <span className="sr-only">Phone number</span>
                    </dt>
                    <dd className="flex text-base text-yellow-100">
                      <div className="flex my-auto">
                        <a
                          href="tel:+18328645816"
                          target="_blank"
                          className="flex"
                          rel="noreferrer noopener"
                        >
                          <i className="fas fa-2x fa-phone mr-3 text-yellow-500 hover:text-yellow-400" />
                          <span className="text-yellow-100 hover:text-yellow-600 text-lg">
                            (832) 864-5816
                          </span>
                        </a>
                      </div>
                    </dd>
                    <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className="flex text-base">
                      <div className="flex my-auto">
                        <a
                          href={allCompany.emailHref}
                          target="_blank"
                          className="flex"
                          rel="noreferrer noopener"
                        >
                          <i className="fas fa-2x fa-envelope mr-3 text-yellow-500 hover:text-yellow-400" />
                          <span className="text-yellow-100 hover:text-yellow-600 text-lg">
                            {allCompany.email}
                          </span>
                        </a>
                      </div>
                    </dd>
                    <dt>
                      <span className="sr-only">Address</span>
                    </dt>
                    <dd className="flex text-base text-yellow-100">
                      <div className="flex my-auto">
                        <a
                          href="https://www.google.com/maps/place/1544+W+23rd+St,+Houston,+TX+77008/data=!4m2!3m1!1s0x8640c70523ab679f:0xb5ac230d9ab01f4f?sa=X&ved=2ahUKEwiv_IeK-MnyAhXuYd8KHQhVATEQ8gF6BAgIEAE"
                          target="_blank"
                          className="flex"
                          rel="noreferrer noopener"
                        >
                          <i className="fas fa-2x fa-map-marker-alt ml-1 mr-2 text-yellow-500 hover:text-yellow-400" />
                          <span className="text-yellow-100 hover:text-yellow-600 text-lg ml-2">
                            1544 West 23rd, Houston, TX 77008
                          </span>
                        </a>
                      </div>
                    </dd>
                    <dt>
                      <span className="sr-only">Website</span>
                    </dt>
                    <dd className="flex text-base text-yellow-100">
                      <div className="flex my-auto">
                        <Link to="/houston-tx/" className="flex">
                          <i className="fas fa-2x fa-globe ml-1 mr-2 text-yellow-500 hover:text-yellow-400" />
                          <span className="text-yellow-100 hover:text-yellow-600 text-lg ml-2">
                            All-Star Connections of Houston
                          </span>
                        </Link>
                      </div>
                    </dd>
                  </dl>
                  <ul className="mt-12 ml-1 flex space-x-6">
                    <li>
                      <a
                        href={allSocials.facebook}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Facebook</span>
                        <i className="fab fa-2x fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={allSocials.instagram}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Instagram</span>
                        <i className="fab fa-2x fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={allSocials.twitter}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Twitter</span>
                        <i className="fab fa-2x fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={allSocials.youTube}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">YouTube</span>
                        <i className="fab fa-2x fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={allSocials.linkedIn}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <i className="fab fa-2x fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <iframe
                    title={`Google Map of ${allCompany.name}`}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.000044510854!2d-95.42968978489048!3d29.806543081969508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c70523ab679f%3A0xb5ac230d9ab01f4f!2s1544%20W%2023rd%20St%2C%20Houston%2C%20TX%2077008!5e0!3m2!1sen!2sus!4v1629817735341!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    className="w-full h-full"
                    allowFullScreen=""
                    loading="lazy"
                  />
                </div>
              </div>
            </Col>
            <Col
              ref={ref}
              variants={variants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: 0 }}
              classes="relative bg-white shadow-xl"
            >
              <h2 className="sr-only">Contact us</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Contact information */}
                <div className="relative overflow-hidden py-10 px-6 bg-gray-700 sm:px-10 xl:p-12">
                  <div
                    className="absolute inset-0 pointer-events-none sm:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={359}
                      height={339}
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-accent">
                    San Diego, CA Headquarters
                  </h2>
                  <p className="mt-6 text-base text-indigo-50 max-w-3xl">
                    {allCompany.name} is a recruiting agency that focuses on
                    engineering & technical industries. We are dedicated to
                    providing high-quality candidates to companies in San Diego,
                    CA.
                  </p>
                  <p className="mt-6 text-base font-bold italic text-indigo-50 max-w-3xl">
                    Give us a call to schedule an appointment or fill out our
                    contact form for a consultation, and we’ll be happy to help
                    you!
                  </p>
                  <dl className="mt-8 space-y-6">
                    <dt>
                      <span className="sr-only">Phone number</span>
                    </dt>
                    <dd className="flex text-base text-yellow-100">
                      <div className="flex my-auto">
                        <a
                          href="tel:+16197595234"
                          target="_blank"
                          className="flex"
                          rel="noreferrer noopener"
                        >
                          <i className="fas fa-2x fa-phone mr-3 text-yellow-500 hover:text-yellow-400" />
                          <span className="text-yellow-100 hover:text-yellow-600 text-lg">
                            (619) 759-5234
                          </span>
                        </a>
                      </div>
                    </dd>
                    <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className="flex text-base">
                      <div className="flex my-auto">
                        <a
                          href={allCompany.emailHref}
                          target="_blank"
                          className="flex"
                          rel="noreferrer noopener"
                        >
                          <i className="fas fa-2x fa-envelope mr-3 text-yellow-500 hover:text-yellow-400" />
                          <span className="text-yellow-100 hover:text-yellow-600 text-lg">
                            {allCompany.email}
                          </span>
                        </a>
                      </div>
                    </dd>
                    <dt>
                      <span className="sr-only">Address</span>
                    </dt>
                    <dd className="flex text-base text-yellow-100">
                      <div className="flex my-auto">
                        <a
                          href="https://www.google.com/maps/place/3093+C+St+%231,+San+Diego,+CA+92102/data=!4m2!3m1!1s0x80d95378b9eec2af:0xfb3c142aff5ead4e?sa=X&ved=2ahUKEwiD86LE-MnyAhXHmuAKHXixATQQ8gF6BAgIEAE"
                          target="_blank"
                          className="flex"
                          rel="noreferrer noopener"
                        >
                          <i className="fas fa-2x fa-map-marker-alt ml-1 mr-2 text-yellow-500 hover:text-yellow-400" />
                          <span className="text-yellow-100 hover:text-yellow-600 text-lg ml-2">
                            3093 C Street Unit 1, San Diego, CA 92102
                          </span>
                        </a>
                      </div>
                    </dd>
                    <dt>
                      <span className="sr-only">Website</span>
                    </dt>
                    <dd className="flex text-base text-yellow-100">
                      <div className="flex my-auto">
                        <Link to="/san-diego-ca/" className="flex">
                          <i className="fas fa-2x fa-globe ml-1 mr-2 text-yellow-500 hover:text-yellow-400" />
                          <span className="text-yellow-100 hover:text-yellow-600 text-lg ml-2">
                            All-Star Connections of San Diego
                          </span>
                        </Link>
                      </div>
                    </dd>
                  </dl>
                  <ul className="mt-12 ml-1 flex space-x-6">
                    <li>
                      <a
                        href={allSocials.facebook}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Facebook</span>
                        <i className="fab fa-2x fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={allSocials.instagram}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Instagram</span>
                        <i className="fab fa-2x fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={allSocials.twitter}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Twitter</span>
                        <i className="fab fa-2x fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={allSocials.youTube}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">YouTube</span>
                        <i className="fab fa-2x fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={allSocials.linkedIn}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <i className="fab fa-2x fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <iframe
                    title={`Google Map of ${allCompany.name}`}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.8512720562094!2d-117.12985888481957!3d32.71657958099031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d95378b9eec2af%3A0xfb3c142aff5ead4e!2s3093%20C%20St%20%231%2C%20San%20Diego%2C%20CA%2092102!5e0!3m2!1sen!2sus!4v1629817854474!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    className="w-full h-full"
                    allowFullScreen=""
                    loading="lazy"
                  />
                </div>
              </div>
            </Col>
          </Grid>
        </Container>
      </Section>
    </Layout>
  );
};

export default ContactUsPage;
