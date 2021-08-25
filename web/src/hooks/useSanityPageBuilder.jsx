import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const useSanityPageBuilder = () => {
  const data = useStaticQuery(graphql`
    query useSanityPageBuilderQ {
      sanityPage {
        _rawPageBuilder
        pageBuilder {
          ... on SanityBenefits {
            _key
            _type
            headline
          }
          ... on SanityCtaFull {
            _key
            _type
            headline
          }
          ... on SanityCtaHalf {
            _key
            _type
            headline
          }
          ... on SanityFeatures {
            _key
            _type
            headline
          }
          ... on SanityHero {
            _key
            _type
            headline
          }
          ... on SanityServices {
            _key
            _type
            headline
          }
          ... on SanityTestimonials {
            _key
            _type
            headline
          }
        }
      }
    }
  `);

  const pageBuilder = data.sanityPage;

  return pageBuilder;
};

export default useSanityPageBuilder;
