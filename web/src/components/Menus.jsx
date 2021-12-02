import React from 'react';

import { MenuList } from '.';

const Menus = ({ block, raw, index }) => {
  const { layout, headline, tagline, category, idName } = block;

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
          idName={idName}
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
          idName={idName}
        />
      );
  }
};

export default Menus;
