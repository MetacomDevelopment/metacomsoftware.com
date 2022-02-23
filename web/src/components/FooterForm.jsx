import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import { Form, FadeIn, Section } from '.';
import { useSanity } from '../hooks';

const FooterForm = () => {
  const { footers } = useSanity();

  return (
    <Section padding="none">
      {footers.map((footer) => (
        <div className="relative flex flex-col place-content-center place-items-center">
          <div className="absolute inset-0">
            <GatsbyImage
              image={footer.bgImg.asset.gatsbyImageData}
              className="w-full h-full object-cover"
              alt={footer.bgImg.alt}
              loading="eager"
            />
            <div
              className="absolute inset-0 bg-zinc-200"
              style={{ mixBlendMode: 'multiply' }}
              aria-hidden="true"
            />
          </div>
          <FadeIn classes="z-10 px-3 lg:px-0 py-24">
            <Form formName="form-footer" />
          </FadeIn>
        </div>
      ))}
    </Section>
  );
};

export default FooterForm;
