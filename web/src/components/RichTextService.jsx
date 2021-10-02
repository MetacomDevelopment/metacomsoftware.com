import React from 'react';

import { Section, Container, SanityBlockContent, PageSidebar } from '.';
import { useSanity } from '../hooks';

const RichTextService = ({ block, raw, index, _rawBody }) => {
  const { primary, secondary, accent, neutral, hero } = useSanity();

  return (
    <Section padding="lg" bgColor={neutral.white.color}>
      <Container padding="sm">
        <PageSidebar>
          <div className="space-y-6">
            <SanityBlockContent blocks={_rawBody} />
          </div>
        </PageSidebar>
      </Container>
    </Section>
  );
};

export default RichTextService;
