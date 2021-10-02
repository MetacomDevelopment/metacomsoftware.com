import React from 'react';

import { ContactMap } from '.';

const Contacts = ({ block, raw, index }) => {
  const { layout, contact, socialLinks } = block;

  switch (layout) {
    default:
      return (
        <ContactMap
          block={block}
          raw={raw}
          index={index}
          layout={layout}
          contact={contact}
          socialLinks={socialLinks}
        />
      );
    case 'map':
      return (
        <ContactMap
          block={block}
          raw={raw}
          index={index}
          layout={layout}
          contact={contact}
          socialLinks={socialLinks}
        />
      );
  }
};

export default Contacts;
