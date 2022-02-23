import { graphql } from 'gatsby';

export const query = graphql`
  fragment PageBuilder on SanityPage {
    _rawPageBuilder(resolveReferences: { maxDepth: 10 })

    pageBuilder {
      ... on SanityHero {
        _key
        _type
        headlineWidth
        subheadlineWidth
        headline
        primaryCtaButtonLabel
        primaryCtaButtonLink {
          slug {
            current
          }
        }
        secondaryCtaButtonLabel
        secondaryCtaButtonLink
        bgImg {
          alt
          asset {
            _id
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
        idName
        header {
          _rawDescription
          headline
          tagline
        }
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
      ... on SanityEmployees {
        _key
        _type
        layout
        idName
        headline
        tagline
        _rawDescription
        employee {
          name
          position
          slug {
            current
          }
          image {
            alt
            asset {
              gatsbyImageData(placeholder: BLURRED, formats: WEBP)
            }
          }
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
              slug {
                current
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
          slug {
            current
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
        ... on SanityServices {
          _key
          _type
          layout
          header {
            _rawDescription
            headline
            tagline
          }
          service {
            _id
            _key
            headline
            shortDescription
            _rawLongDescription
            link {
              anchor
              slug {
                current
              }
              pageBuilder {
                ... on SanityHero {
                  _key
                  _type
                  bgImg {
                    alt
                    asset {
                      _id
                      gatsbyImageData(placeholder: BLURRED, formats: WEBP)
                    }
                  }
                }
              }
            }
          }
        }
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
              slug {
                current
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
      ... on SanityCustomSection {
        _key
        _type
        _rawColOneContentText
        _rawColTwoContentText
        _rawColThreeContentText
        _rawColFourContentText
        _rawSubheadline
        bg
        bgImg {
          alt
          asset {
            gatsbyImageData
          }
        }
        content
        contentImg {
          alt
          asset {
            gatsbyImageData
          }
        }
        contentSvg
        customColor {
          hex
        }
        headline
        idName
        layout
        paddingPosition
        paddingSize
        tagline
        twColor {
          color
        }
      }
    }
  }
`;
