import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const useSanitySettings = () => {
  const data = useStaticQuery(graphql`
    query useSanitySettingsQ {
      sanitySettingsWebsite {
        name
        url
        cta
        ctaUrl {
          metadata {
            slug {
              current
            }
          }
        }
      }
      sanitySettingsMetadata {
        author
        description
        image {
          asset {
            gatsbyImageData(placeholder: BLURRED, formats: WEBP)
          }
        }
        title
      }
      allSanityNavbars {
        nodes {
          _key
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
            anchor
            url
            icon
          }
          socialLinks {
            _key
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
            gatsbyImageData(placeholder: BLURRED, height: 75, layout: FIXED)
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
  // const logos = data.sanityBusinessLogos;
  // const locations = data.allSanityBusinessLocations.nodes;
  // const socials = data.allSanityBusinessSocials.nodes;
  // const metadata = data.sanityBusinessMetadata;
  const website = data.sanitySettingsWebsite;
  const metadata = data.sanitySettingsMetadata;
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
    // socials,
    // metadata,
    website,
    metadata,
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
