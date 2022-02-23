import React, { useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { useSanity } from '../hooks';
import { SanityBlockContent, Button, FormHero, Grid, Flex, Overlay } from '.';

const StyledHeroHeadline = styled(motion.h1)`
  color: ${(props) => props.$headline};
`;

const StyledHeroSubheadline = styled(motion.div)`
  color: ${(props) => props.$subheadline};
`;

const HeroForm = ({
  block,
  raw,
  index,
  headline,
  bgImg,
  primaryCtaButtonLabel,
  primaryCtaButtonLink,
  secondaryCtaButtonLabel,
  secondaryCtaButtonLink,
}) => {
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
          image={bgImg?.asset?.gatsbyImageData}
          alt={bgImg?.alt}
          className="w-full h-full object-cover"
        />
        <Overlay overlay={hero.overlay.color} />
      </div>
      <Grid classes="lg:grid-cols-2 gap-8 max-w-7xl">
        <Flex classes="bg-gray-900/60 bg-clipping-path backdrop-filter backdrop-blur-lg mt-12 lg:mt-24 p-6 lg:p-10 space-y-6 flex-col justify-center relative text-center lg:text-left rounded-xl shadow-xl">
          <StyledHeroHeadline
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0 }}
            $headline={hero.headline.color}
          >
            {headline}
          </StyledHeroHeadline>
          <StyledHeroSubheadline
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg lg:text-xl max-w-3xl space-y-4"
            $subheadline={hero.tagline.color}
          >
            <SanityBlockContent blocks={raw.tagline} />
          </StyledHeroSubheadline>
          <Flex classes="flex-col lg:flex-row mx-auto lg:mx-0 gap-8">
            <motion.div
              ref={ref}
              variants={variants}
              initial="hidden"
              animate={controls}
              transition={{
                duration: 0.5,
                delay: 0.6,
              }}
              className="flex"
            >
              <div className="mx-auto lg:mx-0 max lg:mt-6">
                <Button
                  linkType="internal"
                  internalLink={primaryCtaButtonLink.slug.current}
                  label={primaryCtaButtonLabel}
                />
              </div>
            </motion.div>
            <motion.div
              ref={ref}
              variants={variants}
              initial="hidden"
              animate={controls}
              transition={{
                duration: 0.5,
                delay: 0.6,
              }}
              className="flex justify-center lg:mt-6"
            >
              <div className="mx-auto lg:mx-0">
                <Button
                  linkType="anchor"
                  secondaryBtn
                  jumpLink={`#${secondaryCtaButtonLink}`}
                  label={secondaryCtaButtonLabel}
                />
              </div>
            </motion.div>
          </Flex>
        </Flex>
        <Flex classes="flex-col justify-center relative mx-auto lg:max-w-lg mt-24">
          <div className="overflow-hidden">
            <FormHero formName="form-hero" />
          </div>
        </Flex>
      </Grid>
    </div>
  );
};

export default HeroForm;
