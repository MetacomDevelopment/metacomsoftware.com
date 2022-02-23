import React from 'react';

import { HeroCenter, HeroForm, HeroTestimonial, HeroGraphic } from '.';

const Hero = ({ block, raw, index }) => {
  const {
    layout,
    headlineWidth,
    subheadlineWidth,
    headline,
    primaryCtaButtonLabel,
    primaryCtaButtonLink,
    secondaryCtaButtonLabel,
    secondaryCtaButtonLink,
    bgImg,
    testimonial,
    graphic,
  } = block;

  switch (layout) {
    case 'center':
      return (
        <HeroCenter
          block={block}
          raw={raw}
          index={index}
          headlineWidth={headlineWidth}
          subheadlineWidth={subheadlineWidth}
          headline={headline}
          bgImg={bgImg}
          primaryCtaButtonLabel={primaryCtaButtonLabel}
          primaryCtaButtonLink={primaryCtaButtonLink}
          secondaryCtaButtonLabel={secondaryCtaButtonLabel}
          secondaryCtaButtonLink={secondaryCtaButtonLink}
        />
      );
    case 'testimonial':
      return (
        <HeroTestimonial
          block={block}
          raw={raw}
          index={index}
          headlineWidth={headlineWidth}
          subheadlineWidth={subheadlineWidth}
          headline={headline}
          bgImg={bgImg}
          testimonial={testimonial}
          primaryCtaButtonLabel={primaryCtaButtonLabel}
          primaryCtaButtonLink={primaryCtaButtonLink}
          secondaryCtaButtonLabel={secondaryCtaButtonLabel}
          secondaryCtaButtonLink={secondaryCtaButtonLink}
        />
      );
    case 'form':
      return (
        <HeroForm
          block={block}
          raw={raw}
          index={index}
          headlineWidth={headlineWidth}
          subheadlineWidth={subheadlineWidth}
          headline={headline}
          bgImg={bgImg}
          primaryCtaButtonLabel={primaryCtaButtonLabel}
          primaryCtaButtonLink={primaryCtaButtonLink}
          secondaryCtaButtonLabel={secondaryCtaButtonLabel}
          secondaryCtaButtonLink={secondaryCtaButtonLink}
        />
      );
    case 'graphic':
      return (
        <HeroGraphic
          block={block}
          raw={raw}
          index={index}
          headlineWidth={headlineWidth}
          subheadlineWidth={subheadlineWidth}
          headline={headline}
          bgImg={bgImg}
          graphic={graphic}
          primaryCtaButtonLabel={primaryCtaButtonLabel}
          primaryCtaButtonLink={primaryCtaButtonLink}
          secondaryCtaButtonLabel={secondaryCtaButtonLabel}
          secondaryCtaButtonLink={secondaryCtaButtonLink}
        />
      );
    default:
      return (
        <HeroCenter
          block={block}
          raw={raw}
          index={index}
          headlineWidth={headlineWidth}
          subheadlineWidth={subheadlineWidth}
          headline={headline}
          bgImg={bgImg}
          primaryCtaButtonLabel={primaryCtaButtonLabel}
          primaryCtaButtonLink={primaryCtaButtonLink}
          secondaryCtaButtonLabel={secondaryCtaButtonLabel}
          secondaryCtaButtonLink={secondaryCtaButtonLink}
        />
      );
  }
};

export default Hero;
