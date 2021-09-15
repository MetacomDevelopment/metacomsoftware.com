import React from 'react';

import { HeroCenter, HeroForm, HeroTestimonial } from '.';

const Hero = ({ block, raw, index }) => {
  const { layout, headline, bgImg, alt } = block;

  switch (layout) {
    default:
      return (
        <HeroCenter
          block={block}
          raw={raw}
          index={index}
          headline={headline}
          bgImg={bgImg}
          alt={alt}
        />
      );
    case 'center':
      return (
        <HeroCenter
          block={block}
          raw={raw}
          index={index}
          headline={headline}
          bgImg={bgImg}
          alt={alt}
        />
      );
    case 'testimonial':
      return (
        <HeroTestimonial
          block={block}
          raw={raw}
          index={index}
          headline={headline}
          bgImg={bgImg}
          alt={alt}
        />
      );
    case 'form':
      return (
        <HeroForm
          block={block}
          raw={raw}
          index={index}
          headline={headline}
          bgImg={bgImg}
          alt={alt}
        />
      );
  }
};

export default Hero;
