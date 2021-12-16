import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const useSanitySettings = () => {
  const data = useStaticQuery(graphql`
    query useSanitySettingsQ {
      sanityBusinessSeo {
        isIndexed
        name
        url
        title
        description
        author
        image {
          alt
          asset {
            gatsbyImageData(placeholder: BLURRED, formats: WEBP)
          }
        }
      }
      allSanitySocial {
        nodes {
          _id
          anchor
          url
          icon
        }
      }
      allSanityNavbars {
        nodes {
          _key
          primaryNavCtaButtonLabel
          primaryNavCtaButtonLink {
            metadata {
              slug {
                current
              }
            }
          }
          navItem {
            _key
            type
            dropdowns {
              _key
              label
              links {
                _key
                anchor
                metadata {
                  _key
                  slug {
                    current
                  }
                }
              }
            }
            pageLinks {
              _key
              anchor
              metadata {
                _key
                slug {
                  current
                }
              }
            }
          }
          contactLinks {
            _key
            id
            anchor
            url
            icon
          }
          socialLinks {
            _id
            anchor
            url
            icon
          }
        }
      }
      allSanityFooters {
        nodes {
          id
          tagline
          footerItem {
            _key
            headline
            links {
              id
              anchor
              metadata {
                slug {
                  current
                }
              }
            }
          }
          contactLinks {
            id
            anchor
            url
            icon
            page {
              metadata {
                slug {
                  current
                }
              }
            }
          }
          socialLinks {
            id
            anchor
            url
            icon
          }
        }
      }
      sanityBusinessLogo {
        navbar {
          alt
          asset {
            gatsbyImageData(placeholder: BLURRED, height: 55, layout: FIXED)
          }
        }
        footer {
          alt
          asset {
            gatsbyImageData(placeholder: BLURRED, formats: WEBP)
          }
        }
        favicon {
          alt
          asset {
            gatsbyImageData(placeholder: BLURRED, formats: WEBP)
          }
        }
      }
      sanityColorsAccent {
        dark {
          color
        }
        darker {
          color
        }
        default {
          color
        }
        light {
          color
        }
        lighter {
          color
        }
      }
      sanityColorsHero {
        headline {
          color
        }
        overlay {
          color
        }
        tagline {
          color
        }
      }
      sanityColorsNeutral {
        dark {
          color
        }
        darker {
          color
        }
        default {
          color
        }
        light {
          color
        }
        lighter {
          color
        }
        white {
          color
        }
        black {
          color
        }
      }
      sanityColorsPrimary {
        dark {
          color
        }
        darker {
          color
        }
        default {
          color
        }
        light {
          color
        }
        lighter {
          color
        }
      }
      sanityColorsSecondary {
        dark {
          color
        }
        darker {
          color
        }
        default {
          color
        }
        light {
          color
        }
        lighter {
          color
        }
      }
    }
  `);

  // const info = data.sanityBusinessInfo;
  // const metadata = data.sanityBusinessMetadata;
  const socials = data.allSanitySocial.nodes;
  const siteSEO = data.sanityBusinessSeo;
  const logo = data.sanityBusinessLogo;
  const navbars = data.allSanityNavbars.nodes;
  const footers = data.allSanityFooters.nodes;
  const primary = data.sanityColorsPrimary;
  const secondary = data.sanityColorsSecondary;
  const accent = data.sanityColorsAccent;
  const neutral = data.sanityColorsNeutral;
  const hero = data.sanityColorsHero;

  return {
    // info,
    // logos,
    // locations,
    // metadata,
    socials,
    siteSEO,
    logo,
    navbars,
    footers,
    primary,
    secondary,
    accent,
    neutral,
    hero,
  };
};

export default useSanitySettings;
