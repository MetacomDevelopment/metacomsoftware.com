import React from 'react';

import { BenefitsIcons } from '.';

const Benefits = ({ block, raw, index }) => {
  const { layout, idName, header, benefit, title, author, info, icon } = block;

  switch (layout) {
    case 'icons':
      return (
        <BenefitsIcons
          block={block}
          raw={raw}
          index={index}
          idName={idName}
          header={header}
          benefit={benefit}
          icon={icon}
          title={title}
          author={author}
          info={info}
        />
      );
    default:
      return (
        <BenefitsIcons
          block={block}
          raw={raw}
          index={index}
          idName={idName}
          header={header}
          benefit={benefit}
          icon={icon}
          title={title}
          author={author}
          info={info}
        />
      );
  }
};

export default Benefits;
