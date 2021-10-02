import React from 'react';

import {
  Benefits,
  Cta,
  Features,
  Hero,
  Services,
  Testimonials,
  Contacts,
  RichText,
} from '.';

const PageBuilder = (props) => {
  const { type, pageBuilder, _rawPageBuilder } = props;
  // Load the right component, based on the _type from Sanity
  const Components = {
    hero: Hero,
    benefits: Benefits,
    features: Features,
    cta: Cta,
    services: Services,
    testimonials: Testimonials,
    contacts: Contacts,
    richText: RichText,
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
