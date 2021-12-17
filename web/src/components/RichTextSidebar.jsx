import React from 'react';

import {
  Section,
  Container,
  SanityBlockContent,
  RichTextAlignment,
  SidebarLayout,
  FadeIn,
  FormSidebar,
  SidebarList,
  SidebarTestimonial,
} from '.';
import { useSanity } from '../hooks';

const RichTextSidebar = function ({
  block,
  raw,
  index,
  alignment,
  sidebarType,
  idName,
  _rawBody,
}) {
  const { primary, secondary, accent, neutral, hero } = useSanity();

  return (
    <SidebarLayout sidebarType={sidebarType} idName={idName}>
      <RichTextAlignment
        block={block}
        raw={raw}
        index={index}
        _rawBody={_rawBody}
        alignment={alignment}
      />
    </SidebarLayout>
  );
};

export default RichTextSidebar;
