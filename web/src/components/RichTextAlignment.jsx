import React from 'react';

import { Section, Container, SanityBlockContent } from '.';
import { useSanity } from '../hooks';

const RichTextAlignment = function ({
  block,
  raw,
  index,
  alignment,
  idName,
  _rawBody,
}) {
  const { primary, secondary, accent, neutral, hero } = useSanity();

  return (
    // <Section padding="lg" bgColor={neutral.white.color}>
    <Container padding="sm">
      <article
        // id={idName}
        className={`space-y-6 max-w-3xl mx-auto text-lg ${alignment}`}
      >
        <SanityBlockContent blocks={_rawBody} />
      </article>
    </Container>
    // </Section>
  );
};

export default RichTextAlignment;
