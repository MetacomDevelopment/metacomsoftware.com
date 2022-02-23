import React, { useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { useSanity } from '../hooks';
import { Section, SanityBlockContent, Button, Grid, Flex, Overlay } from '.';

const StyledHeroHeadline = styled(motion.h1)`
  color: ${(props) => props.$headline};
`;

const StyledHeroSubheadline = styled(motion.div)`
  color: ${(props) => props.$subheadline};
  & a {
    color: ${(props) => props.$subheadline} !important;
    font-weight: 400 !important;
    &:hover {
      color: ${(props) => props.$subheadline} !important;
      cursor: default !important;
    }
  }
`;

const HeroCenter = ({
  block,
  raw,
  index,
  headlineWidth,
  subheadlineWidth,
  headline,
  primaryCtaButtonLabel,
  primaryCtaButtonLink,
  secondaryCtaButtonLabel,
  secondaryCtaButtonLink,
  bgImg,
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
      <Grid classes="lg:grid-cols-1 gap-8 max-w-3xl mx-auto py-24 lg:py-0">
        <Flex classes="bg-gray-900/60 bg-clipping-path backdrop-filter backdrop-blur-lg mx-4 lg:mx-0 mt-12 lg:mt-24 p-6 lg:p-10 space-y-8 flex-col justify-center relative text-center lg:text-center rounded-xl shadow-xl">
          <StyledHeroHeadline
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0 }}
            className={`mx-auto ${headlineWidth}`}
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
            className={`text-lg lg:text-xl mx-auto space-y-4 ${subheadlineWidth}`}
            $subheadline={hero.tagline.color}
          >
            <SanityBlockContent blocks={raw.tagline} />
          </StyledHeroSubheadline>
          <Flex classes="flex-col lg:flex-row mx-auto lg:mx-auto gap-8">
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
        {/* <Flex classes="flex-col justify-center relative mx-auto lg:max-w-lg mt-24">
          <div className="overflow-hidden">
            <FormHero formName="form-hero" />
          </div>
        </Flex> */}
      </Grid>
    </div>
  );

  // return (
  //   <Section padding="none">
  //     <Flex classes="relative flex-col place-content-center place-items-center lg:h-screen">
  //       <div className="absolute inset-0">
  //         <GatsbyImage
  //           image={bgImg?.asset?.gatsbyImageData}
  //           alt={bgImg?.alt}
  //           className="w-full h-full object-cover"
  //         />
  //         <Overlay overlay={hero.overlay.color} />
  //       </div>
  //       <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 max-w-7xl mx-auto mt-16 lg:mt-32 py-12 lg:py-24">
  //         <div className="relative text-center lg:text-center pt-5 pb-5 px-4 sm:pt-10 sm:pb-12 sm:px-6 lg:px-8">
  //           <StyledHeroHeadline
  //             ref={ref}
  //             variants={variants}
  //             initial="hidden"
  //             animate={controls}
  //             transition={{ duration: 0.5, delay: 0 }}
  //             className="mx-auto text-5xl font-extrabold tracking-tight drop-shadow-text-darker sm:text-5xl lg:text-6xl capitalize mb-10 max-w-3xl"
  //             $headline={hero.headline.color}
  //           >
  //             {headline}
  //           </StyledHeroHeadline>
  //           <StyledHeroSubheadline
  //             ref={ref}
  //             variants={variants}
  //             initial="hidden"
  //             animate={controls}
  //             transition={{ duration: 0.5, delay: 0.2 }}
  //             className="mx-auto mt-6 text-xl lg:text-2xl max-w-xl drop-shadow-darker space-y-6"
  //             $subheadline={hero.tagline.color}
  //           >
  //             <SanityBlockContent blocks={raw.tagline} />
  //           </StyledHeroSubheadline>
  //           <Flex classes="flex-col lg:flex-row mx-auto justify-center gap-8">
  //             <motion.div
  //               ref={ref}
  //               variants={variants}
  //               initial="hidden"
  //               animate={controls}
  //               transition={{
  //                 duration: 0.5,
  //                 delay: 0.6,
  //               }}
  //               className="flex justify-center mt-10"
  //             >
  //               <div className="mx-auto lg:mx-0">
  //                 <Button
  //                   linkType="internal"
  //                   internalLink={primaryCtaButtonLink.slug.current}
  //                   label={primaryCtaButtonLabel}
  //                 />
  //               </div>
  //             </motion.div>
  //             <motion.div
  //               ref={ref}
  //               variants={variants}
  //               initial="hidden"
  //               animate={controls}
  //               transition={{
  //                 duration: 0.5,
  //                 delay: 0.6,
  //               }}
  //               className="flex justify-center lg:mt-10"
  //             >
  //               <div className="mx-auto lg:mx-0">
  //                 <Button
  //                   linkType="anchor"
  //                   secondaryBtn
  //                   jumpLink={`#${secondaryCtaButtonLink}`}
  //                   label={secondaryCtaButtonLabel}
  //                 />
  //               </div>
  //             </motion.div>
  //           </Flex>
  //         </div>
  //       </div>
  //     </Flex>
  //   </Section>
  // );
};

export default HeroCenter;
