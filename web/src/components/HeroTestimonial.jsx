import React, { useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { useSanity } from '../hooks';

import { SanityBlockContent, Button, Grid, Flex, Overlay } from '.';

const StyledHeroHeadline = styled(motion.h1)`
  color: ${(props) => props.headline};
`;

const StyledHeroSubheadline = styled(motion.p)`
  color: ${(props) => props.subheadline};
`;

const Hero = ({ block, raw, index, headline, bgImg, alt }) => {
  // const { headline, bgImg, alt } = block;

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

  const { info, colors, hero } = useSanity();

  return (
    <div className="relative flex flex-col place-content-center place-items-center lg:h-screen">
      <div className="absolute inset-0">
        <GatsbyImage
          image={bgImg.asset.gatsbyImageData}
          alt={alt}
          className="w-full h-full object-cover"
        />
        <Overlay overlay={hero.overlay.color} />
      </div>
      <Grid classes="lg:grid-cols-2 gap-4 max-w-7xl mx-auto mt-16 lg:mt-32 py-12 lg:py-24">
        <Flex classes="flex-col justify-center relative text-center lg:text-left pt-5 pb-5 px-4 sm:pt-10 sm:pb-12 sm:px-6 lg:px-8">
          <StyledHeroHeadline
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0 }}
            className="text-5xl font-extrabold tracking-tight drop-shadow-text-darker sm:text-5xl lg:text-6xl capitalize mb-10"
            headline={hero.headline.color}
          >
            {headline}
          </StyledHeroHeadline>
          <StyledHeroSubheadline
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-xl lg:text-2xl max-w-3xl drop-shadow-darker space-y-6"
            subheadline={hero.tagline.color}
          >
            <SanityBlockContent blocks={raw.tagline} />
          </StyledHeroSubheadline>
          <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{
              duration: 0.5,
              delay: 0.6,
            }}
            className="flex mt-10"
          >
            <div className="mx-auto lg:mx-0">
              <Button btn="internal" />
            </div>
          </motion.div>
        </Flex>
        <Flex>
          Testimonial
          {/* <div className="bg-opacity-80 bg-primary overflow-hidden rounded-2xl shadow-2xl">
            <div className="relative max-w-7xl mx-auto p-8">
              <div className="relative lg:flex lg:items-center">
                <div className="hidden lg:block lg:flex-shrink-0">
                  <GatsbyImage
                    image={sanity.testimonialImg.asset.gatsbyImageData}
                    alt={sanity.testimonialImg.alt}
                    className="h-32 w-32 rounded-full xl:h-40 xl:w-40"
                  />
                </div>
                <div className="relative lg:ml-10">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-2 lg:-translate-x-8 -translate-y-6 h-16 w-16 text-indigo-200 opacity-50"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 144 144"
                    aria-hidden="true"
                  >
                    <path
                      strokeWidth={2}
                      d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
                    />
                  </svg>
                  <blockquote className="relative">
                    <div className="text-lg leading-9 font-normal text-gray-100">
                      {allSanity.nodes.map((node) => (
                        <BlockContent
                          key={node._key}
                          blocks={node._rawTestimonial}
                          className="space-y-6 italic"
                        />
                      ))}
                    </div>
                    <footer className="mt-8">
                      <div className="flex">
                        <div className="flex-shrink-0 lg:hidden">
                          <GatsbyImage
                            image={sanity.testimonialImg.asset.gatsbyImageData}
                            alt={sanity.testimonialImg.alt}
                            className="h-12 w-12 rounded-full"
                          />
                        </div>
                        <div className="ml-4 lg:ml-0">
                          <div className="text-base font-medium text-blue-300">
                            {sanity.testimonialAuthor}
                          </div>
                          <div className="text-base font-medium text-gray-50">
                            {sanity.testimonialPosition}
                          </div>
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div> */}
        </Flex>
      </Grid>
    </div>
  );
};

export default Hero;
