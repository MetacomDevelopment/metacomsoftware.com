import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import { useSanity } from '../hooks';

const settings = {
  footerBgColor: 'bg-gray-800',
};

const FooterTerms = () => {
  const { website, primary, secondary, accent, neutral, hero } = useSanity();

  return (
    <div
      className={`border-t border-gray-200 ${settings.footerBgColor} py-8 mx-auto`}
    >
      <p className="text-base text-gray-200 text-center">
        © {new Date().getFullYear()} {website.name}, All Rights Reserved
        {` `}
      </p>
      <p className="text-sm text-gray-200 text-center">
        <Link to="/privacy/" className="text-accent hover:text-primary">
          Privacy Policy
        </Link>{' '}
        |{' '}
        <Link to="/accessibility/" className="text-accent hover:text-primary">
          Website Accessibility
        </Link>{' '}
        |{' '}
        <Link to="/" className="text-accent hover:text-primary">
          Website Sitemap
        </Link>
      </p>
    </div>
  );
};

export default FooterTerms;
