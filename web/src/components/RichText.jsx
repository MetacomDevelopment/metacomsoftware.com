import React from 'react';

import {
  RichTextBrand,
  RichTextService,
  RichTextLocation,
  RichTextPost,
} from '.';

const RichText = ({ block, raw, index }) => {
  const { layout, _rawBody } = block;

  switch (layout) {
    default:
      return (
        <RichTextBrand
          block={block}
          raw={raw}
          index={index}
          _rawBody={_rawBody}
        />
      );
    case 'brand':
      return (
        <RichTextBrand
          block={block}
          raw={raw}
          index={index}
          _rawBody={_rawBody}
        />
      );
    case 'service':
      return (
        <RichTextService
          block={block}
          raw={raw}
          index={index}
          _rawBody={_rawBody}
        />
      );
    case 'location':
      return (
        <RichTextLocation
          block={block}
          raw={raw}
          index={index}
          _rawBody={_rawBody}
        />
      );
    case 'post':
      return (
        <RichTextPost
          block={block}
          raw={raw}
          index={index}
          _rawBody={_rawBody}
        />
      );
  }
};

export default RichText;
