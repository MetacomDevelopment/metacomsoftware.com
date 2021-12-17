import { graphql } from 'gatsby';

export const query = graphql`
  fragment PageBuilder on SanityPage {
    _rawPageBuilder(resolveReferences: { maxDepth: 10 })

    pageBuilder {
      ... on SanityHero {
        _key
        _type
        headline
        primaryCtaButtonLabel
        primaryCtaButtonLink {
          metadata {
            slug {
              current
            }
          }
        }
        secondaryCtaButtonLabel
        secondaryCtaButtonLink
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
        testimonial {
          _rawQuote
          author
          authorImg {
            alt
            asset {
              gatsbyImageData(placeholder: BLURRED, formats: WEBP)
            }
          }
          info
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
        idName
        feature {
          _rawDescription(resolveReferences: { maxDepth: 10 })
          _key
          _type
          headline

          ctaButton {
            label
            linkType
            internalLink {
              metadata {
                slug {
                  current
                }
              }
            }
            externalLink
            jumpLink
          }
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
        ctaButtonLabel
        ctaButtonLink {
          metadata {
            slug {
              current
            }
          }
        }
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
            _id
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
        sidebarType
        alignment
        idName
      }
      ... on SanitySpacer {
        _key
        _type
        heightMobile
        heightDesktop
      }
      ... on SanityMenuSection {
        _key
        _type
        layout
        idName
        category {
          _key
          _rawDescription
          headline
          images {
            _key
            alt
            asset {
              gatsbyImageData
            }
          }
          items {
            _key
            name
            price
            _rawDescription
          }
        }
      }
    }
  }
`;
