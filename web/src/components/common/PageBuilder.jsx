import React from 'react';

import Benefits from '../blocks/Benefits';
import Features from '../blocks/Features';
import Hero from '../blocks/Hero';
import Services from '../blocks/Services';
import CtaFull from '../blocks/CtaFull';
import CtaHalf from '../blocks/CtaHalf';
import Testimonials from '../blocks/Testimonials';

const PageBuilder = (props) => {
  const { type, pageBuilder, _rawPageBuilder } = props;
  // Load the right component, based on the _type from Sanity
  const Components = {
    benefits: Benefits,
    features: Features,
    hero: Hero,
    services: Services,
    ctaFull: CtaFull,
    ctaHalf: CtaHalf,
    testimonials: Testimonials,
  };

  // 'raw' content needs to be passed in for the PortableText Component
  return pageBuilder.map((block, index) => {
    if (Components[block._type]) {
      return React.createElement(Components[block._type], {
        key: block._key,
        block,
        type,
        raw: _rawPageBuilder[index],
      });
    }
  });
};

export default PageBuilder;
