import { graphql } from 'gatsby';

export const query = graphql`
  fragment PageBuilder on SanityPage {
    _rawPageBuilder(resolveReferences: { maxDepth: 10 })

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
`;
