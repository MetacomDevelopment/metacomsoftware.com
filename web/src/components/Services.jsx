import React from 'react';

import { ServicesImages } from '.';

const Services = ({ block, raw, index }) => {
  const { layout, headline, tagline, service, title, image, link } = block;

  switch (layout) {
    default:
      return (
        <ServicesImages
          block={block}
          raw={raw}
          index={index}
          headline={headline}
          tagline={tagline}
          service={service}
          title={title}
          image={image}
          link={link}
        />
      );
    case 'images':
      return (
        <ServicesImages
          block={block}
          raw={raw}
          index={index}
          headline={headline}
          tagline={tagline}
          service={service}
          title={title}
          image={image}
          link={link}
        />
      );
  }
};

export default Services;
