import React from 'react';

import { MenuList } from '.';

const Menus = ({ block, raw, index }) => {
  const { layout, headline, tagline, category } = block;

  switch (layout) {
    default:
      return (
        <MenuList
          block={block}
          raw={raw}
          index={index}
          headline={headline}
          tagline={tagline}
          category={category}
        />
      );
    case 'list':
      return (
        <MenuList
          block={block}
          raw={raw}
          index={index}
          headline={headline}
          tagline={tagline}
          category={category}
        />
      );
  }
};

export default Menus;
