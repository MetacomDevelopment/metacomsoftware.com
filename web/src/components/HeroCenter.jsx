import React, { useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { useSanity } from '../hooks';

import { SanityBlockContent, Button, Grid, Flex } from '.';

const StyledHeroHeadline = styled(motion.h1)`
  color: ${(props) => props.headline};
`;

const StyledHeroSubheadline = styled(motion.p)`
  color: ${(props) => props.subheadline};
`;

const StyledHeroOverlay = styled(motion.div)`
  background-color: ${(props) => props.overlay};
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
    <Flex classes="relative flex-col place-content-center place-items-center lg:h-screen">
      <div className="absolute inset-0">
        <GatsbyImage
          image={bgImg.asset.gatsbyImageData}
          alt={alt}
          className="w-full h-full object-cover"
        />
        <StyledHeroOverlay
          className="absolute inset-0"
          style={{ mixBlendMode: 'multiply' }}
          aria-hidden="true"
          overlay={hero.overlay.color}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 max-w-7xl mx-auto mt-16 lg:mt-32 py-12 lg:py-24">
        <div className="relative text-center lg:text-center pt-5 pb-5 px-4 sm:pt-10 sm:pb-12 sm:px-6 lg:px-8">
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
            className="flex justify-center mt-10"
          >
            <div className="mx-auto lg:mx-0">
              <Button btn="internal" />
            </div>
          </motion.div>
        </div>
      </div>
    </Flex>
  );
};

export default Hero;
