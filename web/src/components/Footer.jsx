import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import { FadeIn, FooterLinks, FooterMap, FooterTerms, FooterForm } from '.';
import { useSanity } from '../hooks';

const Footer = () => {
  const { footers } = useSanity();
  switch (`${footers.map((footer) => footer.layout)}`) {
    case 'none':
      return (
        <footer aria-labelledby="footerHeading">
          <FooterLinks />
          <FooterTerms />
        </footer>
      );
    case 'formOnly':
      return (
        <footer aria-labelledby="footerHeading">
          <FooterForm />
          <FooterLinks />
          <FooterTerms />
        </footer>
      );
    case 'mapOnly':
      return (
        <footer aria-labelledby="footerHeading">
          {/* <FooterMap /> */}
          <FooterLinks />
          <FooterTerms />
        </footer>
      );
    case 'formMap':
      return (
        <footer aria-labelledby="footerHeading">
          <FooterForm />
          {/* <FooterMap /> */}
          <FooterLinks />
          <FooterTerms />
        </footer>
      );
    default:
      return (
        <footer aria-labelledby="footerHeading">
          <FooterLinks />
          <FooterTerms />
        </footer>
      );
  }
};

export default Footer;
