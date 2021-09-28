import React from 'react';

import { FeaturesAlt } from '.';

const Features = ({ block, raw, index }) => {
  const { layout, feature, headline, _rawDescription, image } = block;

  switch (layout) {
    default:
      return (
        <FeaturesAlt
          block={block}
          raw={raw}
          index={index}
          feature={feature}
          headline={headline}
          _rawDescription={_rawDescription}
          image={image}
        />
      );
    case 'alternating':
      return (
        <FeaturesAlt
          block={block}
          raw={raw}
          index={index}
          feature={feature}
          headline={headline}
          _rawDescription={_rawDescription}
          image={image}
        />
      );
  }
};

export default Features;
