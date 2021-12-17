import React from 'react';

import { RichTextNoSidebar, RichTextSidebar } from '.';

const RichText = ({ block, raw, index }) => {
  const { sidebarType, alignment, idName, _rawBody } = block;

  switch (sidebarType) {
    case 'none':
      return (
        <RichTextNoSidebar
          block={block}
          raw={raw}
          index={index}
          _rawBody={_rawBody}
          idName={idName}
          alignment={alignment}
        />
      );
    case 'service':
      return (
        <RichTextSidebar
          block={block}
          raw={raw}
          index={index}
          _rawBody={_rawBody}
          idName={idName}
          alignment={alignment}
          sidebarType={sidebarType}
        />
      );
    case 'location':
      return (
        <RichTextSidebar
          block={block}
          raw={raw}
          index={index}
          _rawBody={_rawBody}
          idName={idName}
          alignment={alignment}
          sidebarType={sidebarType}
        />
      );
    case 'post':
      return (
        <RichTextSidebar
          block={block}
          raw={raw}
          index={index}
          _rawBody={_rawBody}
          idName={idName}
          alignment={alignment}
          sidebarType={sidebarType}
        />
      );
    default:
      return (
        <RichTextNoSidebar
          block={block}
          raw={raw}
          index={index}
          _rawBody={_rawBody}
          idName={idName}
          alignment={alignment}
        />
      );
  }
};

export default RichText;
