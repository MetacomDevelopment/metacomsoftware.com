import React from 'react';

import { CtaFull, CtaHalf } from '.';

const Cta = ({ block, raw, index }) => {
  const {
    layout,
    headline,
    subheadline,
    tagline,
    _rawDescription,
    ctaButtonLabel,
    ctaButtonLink,
    image,
  } = block;

  switch (layout) {
    default:
      return (
        <CtaFull
          block={block}
          raw={raw}
          index={index}
          headline={headline}
          subheadline={subheadline}
          tagline={tagline}
          _rawDescription={_rawDescription}
          image={image}
          ctaButtonLabel={ctaButtonLabel}
          ctaButtonLink={ctaButtonLink}
        />
      );
    case 'full':
      return (
        <CtaFull
          block={block}
          raw={raw}
          index={index}
          headline={headline}
          subheadline={subheadline}
          tagline={tagline}
          _rawDescription={_rawDescription}
          image={image}
          ctaButtonLabel={ctaButtonLabel}
          ctaButtonLink={ctaButtonLink}
        />
      );
    case 'half':
      return (
        <CtaHalf
          block={block}
          raw={raw}
          index={index}
          headline={headline}
          subheadline={subheadline}
          tagline={tagline}
          _rawDescription={_rawDescription}
          image={image}
          ctaButtonLabel={ctaButtonLabel}
          ctaButtonLink={ctaButtonLink}
        />
      );
  }
};

export default Cta;
