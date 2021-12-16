import React from 'react';

import { Section, Container, SanityBlockContent } from '.';
import { useSanity } from '../hooks';

const RichTextAlignRight = function ({ block, raw, index, idName, _rawBody }) {
  const { primary, secondary, accent, neutral, hero } = useSanity();

  return (
    <Section idName={idName} padding="lg" bgColor={neutral.white.color}>
      <Container padding="sm">
        <div className="space-y-6 max-w-3xl mx-auto text-lg text-right">
          <SanityBlockContent blocks={_rawBody} />
        </div>
      </Container>
    </Section>
  );
};

export default RichTextAlignRight;
