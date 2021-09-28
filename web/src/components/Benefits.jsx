import React from 'react';

import { BenefitsIcons } from '.';

const Benefits = ({ block, raw, index }) => {
  const {
    layout,
    headline,
    tagline,
    benefit,
    title,
    _rawDescription,
    author,
    info,
    icon,
  } = block;

  switch (layout) {
    default:
      return (
        <BenefitsIcons
          block={block}
          raw={raw}
          index={index}
          headline={headline}
          tagline={tagline}
          benefit={benefit}
          icon={icon}
          title={title}
          _rawDescription={_rawDescription}
          author={author}
          info={info}
        />
      );
    case 'icons':
      return (
        <BenefitsIcons
          block={block}
          raw={raw}
          index={index}
          headline={headline}
          tagline={tagline}
          benefit={benefit}
          icon={icon}
          title={title}
          _rawDescription={_rawDescription}
          author={author}
          info={info}
        />
      );
  }
};

export default Benefits;
