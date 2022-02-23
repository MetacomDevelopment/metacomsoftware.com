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
    <Container padding="none">
      <article
        // idName={idName}
        className={`mx-auto max-w-3xl space-y-6 text-lg ${alignment}`}
      >
        <SanityBlockContent blocks={_rawBody} />
      </article>
    </Container>
    // </Section>
  );
};

export default RichTextAlignment;
