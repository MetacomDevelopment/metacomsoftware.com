import React from 'react';

import { FeaturesAltNoCta, FeaturesAltCta } from '.';

const Features = ({ block, raw, index }) => {
  const {
    layout,
    feature,
    headline,
    _rawDescription,
    image,
    idName,
    ctaButton,
  } = block;

  switch (layout) {
    default:
      return (
        <FeaturesAltNoCta
          block={block}
          raw={raw}
          index={index}
          feature={feature}
          headline={headline}
          _rawDescription={_rawDescription}
          image={image}
          ctaButton={ctaButton}
          idName={idName}
        />
      );
    case 'alternatingNoCta':
      return (
        <FeaturesAltNoCta
          block={block}
          raw={raw}
          index={index}
          feature={feature}
          headline={headline}
          _rawDescription={_rawDescription}
          image={image}
          ctaButton={ctaButton}
          idName={idName}
        />
      );
    case 'alternatingCta':
      return (
        <FeaturesAltCta
          block={block}
          raw={raw}
          index={index}
          feature={feature}
          headline={headline}
          _rawDescription={_rawDescription}
          image={image}
          ctaButton={ctaButton}
          idName={idName}
        />
      );
  }
};

export default Features;
