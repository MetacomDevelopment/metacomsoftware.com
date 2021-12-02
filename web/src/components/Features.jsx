import React from 'react';

import { FeaturesAlt } from '.';

const Features = ({ block, raw, index }) => {
  const { layout, feature, headline, _rawDescription, image, idName } = block;

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
          idName={idName}
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
          idName={idName}
        />
      );
  }
};

export default Features;
