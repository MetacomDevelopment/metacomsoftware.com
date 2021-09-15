import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { useSanity } from '../hooks';

const SEO = ({ lang, title, description, canonical, image, children }) => {
  const { website, metadata, primary, secondary, accent, neutral, hero } =
    useSanity();
  const metaDescription = description || metadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={`${title} | ${website.name}`}
    >
      <link rel="canonical" href={`${canonical}`} />

      <meta name="description" content={metaDescription} />

      {/* Open Graph tags */}
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metadata.image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={website.url} />
      <meta property="og:site_name" content={metadata.title} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={metadata.author} />
      <meta name="twitter:title" content={metadata.title} />
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
