import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const useSanitySettingsMetadata = () => {
  const data = useStaticQuery(graphql`
    query useSanitySettingsMetadataQ {
      sanitySettingsMetadata {
        title
        description
        author
        image
      }
    }
  `);

  const metadata = data.sanitySettingsMetadata;

  return metadata;
};

export default useSanitySettingsMetadata;
