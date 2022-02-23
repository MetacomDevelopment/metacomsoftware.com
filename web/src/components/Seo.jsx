import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { useSanity } from '../hooks';

const SEO = ({ lang, title, description, canonical, image, children }) => {
  const { siteSEO, info } = useSanity();
  const metaDescription = description || siteSEO.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={`${title} | ${info.name}`}
    >
      <link
        rel="canonical"
        href={`${
          canonical === `${info.websiteUrl}/home/` ? info.websiteUrl : canonical
        }`}
      />

      <meta
        name="robots"
        content={
          siteSEO.indexStatus === 'index'
            ? 'index, follow'
            : 'noindex, nofollow'
        }
      />

      <meta name="description" content={metaDescription} />
      {/* Open Graph tags */}
      <meta property="og:title" content={siteSEO.title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={siteSEO.image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteSEO.url} />
      <meta property="og:site_name" content={siteSEO.title} />
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={siteSEO.author} />
      <meta name="twitter:title" content={siteSEO.title} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  description: ``,
  canonical: ``,
  image: ``,
  children: ``,
};

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  canonical: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.node,
};

export default SEO;
