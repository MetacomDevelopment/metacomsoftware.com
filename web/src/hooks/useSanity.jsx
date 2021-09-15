import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const useSanitySettings = () => {
  const data = useStaticQuery(graphql`
    query useSanitySettingsQ {
      sanitySettingsWebsite {
        name
        url
      }
      sanitySettingsMetadata {
        author
        description
        image {
          asset {
            gatsbyImageData
          }
        }
        title
      }
      allSanityNavbars {
        nodes {
          navItem {
            type
            dropdowns {
              label
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
            pageLinks {
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
            gatsbyImageData
          }
        }
        favicon {
          alt
          asset {
            gatsbyImageData
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
    primary,
    secondary,
    accent,
    neutral,
    hero,
  };
};

export default useSanitySettings;
