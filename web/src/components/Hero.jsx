import React from 'react';

import { HeroCenter, HeroForm, HeroTestimonial, HeroGraphic } from '.';

const Hero = ({ block, raw, index }) => {
  const { layout, headline, bgImg, graphic } = block;

  switch (layout) {
    default:
      return (
        <HeroCenter
          block={block}
          raw={raw}
          index={index}
          headline={headline}
          bgImg={bgImg}
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
        />
      );
    case 'graphic':
      return (
        <HeroGraphic
          block={block}
          raw={raw}
          index={index}
          headline={headline}
          bgImg={bgImg}
          graphic={graphic}
        />
      );
  }
};

export default Hero;
