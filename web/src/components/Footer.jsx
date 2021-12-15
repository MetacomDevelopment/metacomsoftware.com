import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import {
  FadeIn,
  FooterLinks,
  FooterMap,
  FooterTerms,
  FormFooter,
  Section,
} from '.';

const Footer = ({ layout }) => {
  switch (layout) {
    default:
      return (
        <footer aria-labelledby="footerHeading">
          {/* <Section padding="none">
            <div className="relative flex flex-col place-content-center place-items-center">
              <div className="absolute inset-0">
                <GatsbyImage
                  image={imgFormBg}
                  className="w-full h-full object-cover"
                  alt="Contact our recruiting agency, All-Star Connections today to find new hires"
                  loading="eager"
                />
                <div
                  className="absolute inset-0 bg-zinc-600"
                  style={{ mixBlendMode: 'multiply' }}
                  aria-hidden="true"
                />
              </div>
              <FadeIn classes="z-10 px-3 lg:px-0 py-24">
                <FormFooter />
              </FadeIn>
            </div>
          </Section> */}
          <FooterLinks />
          <FooterTerms />
        </footer>
      );
    case 'map':
      return (
        <footer aria-labelledby="footerHeading">
          {/* <Section padding="none">
            <div className="relative flex flex-col place-content-center place-items-center">
              <div className="absolute inset-0">
                <GatsbyImage
                  image={imgFormBg}
                  className="w-full h-full object-cover"
                  alt="Contact our recruiting agency, All-Star Connections today to find new hires"
                  loading="eager"
                />
                <div
                  className="absolute inset-0 bg-zinc-600"
                  style={{ mixBlendMode: 'multiply' }}
                  aria-hidden="true"
                />
              </div>
              <FadeIn classes="z-10 px-3 lg:px-0 py-24">
                <FormFooter />
              </FadeIn>
            </div>
          </Section> */}
          <FooterMap location={location} />
          <FooterLinks />
          <FooterTerms />
        </footer>
      );
    case 'noMap':
      return (
        <footer aria-labelledby="footerHeading">
          {/* <Section padding="none">
            <div className="relative flex flex-col place-content-center place-items-center">
              <div className="absolute inset-0">
                <GatsbyImage
                  image={imgFormBg}
                  className="w-full h-full object-cover"
                  alt="Contact our recruiting agency, All-Star Connections today to find new hires"
                  loading="eager"
                />
                <div
                  className="absolute inset-0 bg-zinc-600"
                  style={{ mixBlendMode: 'multiply' }}
                  aria-hidden="true"
                />
              </div>
              <FadeIn classes="z-10 px-3 lg:px-0 py-24">
                <FormFooter />
              </FadeIn>
            </div>
          </Section> */}
          {/* <FooterMap /> */}
          <FooterLinks />
          <FooterTerms />
        </footer>
      );
  }
};

export default Footer;
