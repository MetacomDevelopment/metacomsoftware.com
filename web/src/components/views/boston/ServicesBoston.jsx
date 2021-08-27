/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServicesBoston = () => {
  const data = useStaticQuery(graphql`
    query ServicesBostonQ {
      imgServiceOne: file(
        relativePath: {
          eq: "assets/images/boston-ma/boston-ma-industries-medical-device-biotechnology-job-recruiter-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgServiceTwo: file(
        relativePath: {
          eq: "assets/images/boston-ma/boston-ma-industries-information-technology-job-recruiter-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgServiceThree: file(
        relativePath: {
          eq: "assets/images/boston-ma/boston-ma-industries-manufacturing-job-recruiter-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgServiceFour: file(
        relativePath: {
          eq: "assets/images/boston-ma/boston-ma-industries-civil-structural-engineering-job-recruiter-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  const imgServiceOne = data.imgServiceOne.childImageSharp.gatsbyImageData;
  const imgServiceTwo = data.imgServiceTwo.childImageSharp.gatsbyImageData;
  const imgServiceThree = data.imgServiceThree.childImageSharp.gatsbyImageData;
  const imgServiceFour = data.imgServiceFour.childImageSharp.gatsbyImageData;

  const features = [
    {
      name: 'Medical Device & Biotechnology',
      image: imgServiceOne,
      alt: 'Gardening services for front yard and backyard of residential homes and commercial businesses.',
      description: 'Regulatory, Quality, Research, Laboratory, Engineering',
      link: '/medical-device-biotechnology/',
    },
    {
      name: 'Information Technology (IT)',
      image: imgServiceTwo,
      alt: 'Landscaping services for front yard and backyard of residential homes and commercial businesses.',
      description:
        "Mobile, UI, Front/Back End Developers, SWE's, Network Engineers, Embedded/Firmware Engineers, Database Admins/Engineers, DevOps/Cloud Developers, Project Management",
      link: '/it-technology/',
    },
    {
      name: 'Civil & Structural Engineering',
      image: imgServiceFour,
      alt: 'Construction services for front yard and backyard of residential homes and commercial businesses.',
      description:
        'Structural, Transportation, Geotechnical, Water Resource, Forensics, Surveying, Construction/Project Management, Environmental Health & Safety',
      link: '/civil-structural-engineering/',
    },
    {
      name: 'Manufacturing',
      image: imgServiceThree,
      alt: 'Construction services for front yard and backyard of residential homes and commercial businesses.',
      description:
        'Quality Engineering, Mechanical Engineering, Electrical Engineering, Manufacturing Engineering, Process Engineering, Operations Excellence, Chemical Engineering, Industrial Engineering, Aerospace Engineering, Environmental Health & Safety',
      link: '/manufacturing/',
    },
  ];

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
    <div className="relative bg-gray-200 py-16 sm:py-24 lg:py-32">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
      >
        <h3 className="text-base font-semibold tracking-wider text-primary uppercase">
          Industries We Work In
        </h3>
        <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Boston Job Recruiting Industries
        </h2>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-600">
          What's the best way for you to grow your company? Add some new talent!
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-600">
          With a little focus, the next hire can help your business be more
          efficient and profitable. That's why we specialize in certain
          industries so that we deliver the best results to our clients.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 grid-flow-row auto-rows-fr">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6 h-full">
                <motion.div
                  ref={ref}
                  variants={itemVariants}
                  className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full"
                >
                  <Link
                    to={feature.link}
                    className="relative py-24 px-4 bg-primary hover:bg-blueGray-800 transition-all ease-in-out rounded-xl shadow-2xl overflow-hidden lg:px-8 flex md:h-full lg:flex-col justify-between"
                  >
                    <div className="absolute inset-0 opacity-20 filter saturate-0 mix-blend-multiply">
                      <GatsbyImage
                        image={feature.image}
                        className="w-full h-full object-cover"
                        alt={feature.alt}
                      />
                    </div>
                    <div className="relative z-10 m-auto text-center">
                      <h3 className="my-8 text-3xl font-medium text-white drop-shadow-text-darker">
                        <span className="drop-shadow-text-darker">
                          {feature.name}
                        </span>
                      </h3>
                      {/* <p className="mt-5 mb-8 text-base text-gray-50 drop-shadow-text-darker">
                        <span className="drop-shadow-text-darker">
                          {feature.description}
                        </span>
                      </p> */}
                      <Link
                        to={feature.link}
                        className="text-xl font-medium text-accent hover:text-gray-300"
                      >
                        Learn More <span aria-hidden="true">&rarr;</span>{' '}
                      </Link>
                    </div>
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesBoston;
