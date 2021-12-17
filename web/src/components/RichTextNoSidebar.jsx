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

const RichTextNoSidebar = function ({
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
    <Section idName={idName} padding="lg" bgColor={neutral.white.color}>
      <RichTextAlignment
        block={block}
        raw={raw}
        index={index}
        _rawBody={_rawBody}
        alignment={alignment}
      />
    </Section>
  );
};

export default RichTextNoSidebar;
