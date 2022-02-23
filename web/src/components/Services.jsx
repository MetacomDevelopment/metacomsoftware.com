import React from 'react';

import { ServicesImages } from '.';

const Services = ({ block, raw, index }) => {
  const { layout, header, tagline, service, title, image, link } = block;

  switch (layout) {
    case 'images':
      return (
        <ServicesImages
          block={block}
          raw={raw}
          index={index}
          header={header}
          service={service}
          title={title}
          image={image}
          link={link}
        />
      );
    default:
      return (
        <ServicesImages
          block={block}
          raw={raw}
          index={index}
          header={header}
          service={service}
          title={title}
          image={image}
          link={link}
        />
      );
  }
};

export default Services;
