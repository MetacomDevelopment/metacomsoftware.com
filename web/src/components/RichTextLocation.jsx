import React from 'react';

import { Section, Container, SanityBlockContent } from '.';
import { useSanity } from '../hooks';

const RichTextLocation = ({ block, raw, index, _rawBody }) => {
  const { primary, secondary, accent, neutral, hero } = useSanity();

  return (
    <Section padding="lg" bgColor={neutral.white.color}>
      <Container padding="sm">
        <div className="space-y-6">
          <SanityBlockContent blocks={_rawBody} />
        </div>
      </Container>
    </Section>
  );
};

export default RichTextLocation;
