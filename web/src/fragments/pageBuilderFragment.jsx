import { graphql } from 'gatsby';

export const query = graphql`
  fragment PageBuilder on SanityPage {
    _rawPageBuilder(resolveReferences: { maxDepth: 10 })

    pageBuilder {
      ... on SanityHero {
        _key
        _type
        headline
        bgImg {
          alt
          asset {
            gatsbyImageData(placeholder: BLURRED, formats: WEBP)
          }
        }
        graphic {
          alt
          asset {
            gatsbyImageData(placeholder: BLURRED, formats: WEBP)
          }
        }
        layout
      }
      ... on SanityBenefits {
        _key
        _type
        layout
        headline
        tagline
        benefit {
          _key
          _type
          _rawDescription
          author
          title
          info
          icon
        }
      }
      ... on SanityFeatures {
        _key
        _type
        layout
        feature {
          _key
          _type
          headline
          _rawDescription
          image {
            alt
            asset {
              gatsbyImageData(placeholder: BLURRED, formats: WEBP)
            }
          }
        }
      }
      ... on SanityCta {
        _key
        _type
        layout
        headline
        subheadline
        tagline
        _rawDescription
        image {
          alt
          asset {
            gatsbyImageData(placeholder: BLURRED, formats: WEBP)
          }
        }
      }
      ... on SanityServices {
        _key
        _type
        _rawDescription
        headline
        layout
        service {
          _key
          _type
          title
          image {
            alt
            asset {
              gatsbyImageData(placeholder: BLURRED, formats: WEBP)
            }
          }
          link {
            metadata {
              slug {
                current
              }
            }
          }
        }
        tagline
      }
      ... on SanityTestimonials {
        _key
        _type
        headline
      }
      ... on SanityContacts {
        _key
        _type
        layout
        socialLinks {
          id
          anchor
          url
          icon
        }
        contact {
          _key
          _rawDescription
          headline
          gmb {
            address
            city
            cityState
            country
            emailAddress
            emailUrl
            gmbCid
            gmbEmbed
            gmbReviews
            latitude
            longitude
            name
            phone
            phoneUrl
            street
            website {
              metadata {
                slug {
                  current
                }
              }
            }
            zip
          }
        }
      }
      ... on SanityRichText {
        _key
        _type
        _rawBody
        layout
      }
    }
  }
`;
