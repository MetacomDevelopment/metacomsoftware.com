import React from 'react';

import {
  RichTextAlignLeft,
  RichTextAlignCenter,
  RichTextAlignRight,
  RichTextAlignJustify,
} from '.';

const RichText = ({ block, raw, index }) => {
  const { alignment, idName, _rawBody } = block;

  switch (alignment) {
    default:
      return (
        <RichTextAlignLeft
          block={block}
          raw={raw}
          index={index}
          _rawBody={_rawBody}
          idName={idName}
        />
      );
    case 'left':
      return (
        <RichTextAlignLeft
          block={block}
          raw={raw}
          index={index}
          _rawBody={_rawBody}
          idName={idName}
        />
      );
    case 'center':
      return (
        <RichTextAlignCenter
          block={block}
          raw={raw}
          index={index}
          _rawBody={_rawBody}
          idName={idName}
        />
      );
    case 'right':
      return (
        <RichTextAlignRight
          block={block}
          raw={raw}
          index={index}
          _rawBody={_rawBody}
          idName={idName}
        />
      );
    case 'justify':
      return (
        <RichTextAlignJustify
          block={block}
          raw={raw}
          index={index}
          _rawBody={_rawBody}
          idName={idName}
        />
      );
  }
};

export default RichText;
