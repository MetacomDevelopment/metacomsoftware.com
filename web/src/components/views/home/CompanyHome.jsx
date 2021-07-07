import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BlockContent from '@sanity/block-content-to-react';

import useSanitySettingsCompany from '../../../hooks/useSanitySettingsCompany';
import useSanitySettingsSocials from '../../../hooks/useSanitySettingsSocials';
import useSanitySettingsColors from '../../../hooks/useSanitySettingsColors';
import useSanitySettingsMetadata from '../../../hooks/useSanitySettingsMetadata';

const CompanyHome = () => {
  const settings = {
    testimonialBg: 'bg-primary',
    quoteColor: 'text-accent',
    authorTextColor: 'text-accent',
  };

  const data = useStaticQuery(graphql`
    query CompanyHomeQ {
      allSanityPageHome {
        nodes {
          _key
          _rawCompanyBio
        }
      }
      sanityPageHome {
        companyImg {
          alt
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
      }
      imgCompany: file(
        relativePath: {
          eq: "assets/images/home/interview-engineering-job-recruiter-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  const sanity = data.sanityPageHome;
  const allSanity = data.allSanityPageHome;

  const { ...allCompany } = useSanitySettingsCompany();
  const { ...allSocials } = useSanitySettingsSocials();
  const { ...allColors } = useSanitySettingsColors();
  const { ...allMetadata } = useSanitySettingsMetadata();

  const imgCompany = data.imgCompany.childImageSharp.gatsbyImageData;

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
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
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: 0 }}
      className="relative bg-white py-16 sm:py-24"
    >
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            <motion.div
              ref={ref}
              variants={itemVariants}
              className="relative rounded-lg overflow-hidden"
            >
              <GatsbyImage
                image={sanity.companyImg.asset.gatsbyImageData}
                alt={sanity.companyImg.alt}
                className="lg:h-full h-96 w-full object-cover object-center rounded-lg"
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={itemVariants}
          className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0"
        >
          {/* <!-- Content area --> */}
          {/* <div className="pt-12 sm:pt-16 lg:pt-20 space-y-6">
            {allSanity.nodes.map((node) => (
              <BlockContent
                key={node._key}
                blocks={node._rawCompanyBio}
                className="space-y-6 text-gray-600 text-lg list-check"
              />
            ))}
          </div> */}

          <div className="pt-12 sm:pt-16 lg:pt-20 space-y-6 text-gray-600 text-lg">
            <h2>Hire Top Talent On-Demand</h2>
            <p>
              Scaling your company and{' '}
              <strong>finding the right employees</strong> is never easy,
              especially when you've tried using other staffing agencies before
              and they failed to deliver.
            </p>
            <p>
              Imagine having access to thousands of qualified candidates who are
              eager to work at your company. We'll help you find the right
              people that fit into your culture, so you can{' '}
              <strong>focus on running your business</strong> instead of looking
              for new hires.
            </p>
            <p>
              All-Star Connections is a staffing agency that helps companies
              like yours{' '}
              <strong>find top talent and high-quality candidates</strong>.
              Since 2016, we've had extensive experience in helping businesses
              just like yours grow their workforce with ease and efficiency.
            </p>

            <h3>Our Goal Is Your Success</h3>
            <p>
              <em>
                Placement sustainability within your organization is our #1
                goal.
              </em>
            </p>
            <p>How do we maintain our 96.7% sustainability rating?</p>
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check text-primary" />
                </span>
                Only dealing with reliable, driven, and talented candidates
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check text-primary" />
                </span>
                Integrating Our proprietary vetting process includes a vast
                degree of psychology
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check text-primary" />
                </span>
                Reason #3
              </li>
            </ul>

            <h3>Engineering Is Our Primary Focus</h3>
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check text-primary" />
                </span>
                <strong>Medical Device & Biotechnology</strong> (Pre-Market and
                Post-Market)
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check text-primary" />
                </span>
                <strong>IT/Technology</strong> (Software Engineers, Firmware
                Engineers, Hardware Engineers, Database Development/Admin,
                Front/Back End Development, IoT, and Project Management)
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check text-primary" />
                </span>
                <strong>Civil/Structural</strong> (Professional Engineers,
                Forensics, Construction Management, Project Management,
                Operations)
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check text-primary" />
                </span>
                <strong>Manufacturing</strong> (Quality Engineers, Mechanical
                Engineers, Electrical Engineers, Manufacturing Engineers,
                Process Engineers, OpEx, EHS, and more)
              </li>
            </ul>
          </div>

          <div className="mt-20">
            <Link
              to="/about/"
              className="text-2xl font-medium text-accent hover:text-primary"
            >
              {' '}
              Learn more about {allCompany.name}{' '}
              <span aria-hidden="true">&rarr;</span>{' '}
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CompanyHome;
