import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const useSanitySettings = () => {
  const data = useStaticQuery(graphql`
    query useSanitySettingsQ {
      sanityBusinessSeo {
        indexStatus
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
      sanityBusinessInfo {
        address
        addressUrl
        emailAddress
        emailUrl
        established
        hours
        hoursUrl
        hoursMon
        hoursTue
        hoursWed
        hoursThu
        hoursFri
        hoursSat
        hoursSun
        name
        owner
        phone
        phoneUrl
        websiteUrl
      }
      sanityBusinessLogo {
        navbar {
          alt
          asset {
            gatsbyImageData(
              placeholder: BLURRED
              formats: WEBP
              layout: FIXED
              height: 66
            )
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
      allSanitySocial {
        nodes {
          _id
          anchor
          url
          icon
        }
      }
      sanityNavbars {
        primaryNavBgColor {
          color
        }
        primaryNavBgColorCustom
        primaryNavTextColor {
          color
        }
        secondaryNavBgColor {
          color
        }
        secondaryNavBgColorCustom
        secondaryNavTextColor {
          color
        }
        primaryNavCtaButtonLabel
        primaryNavCtaButtonLink {
          anchor
          slug {
            current
          }
        }
      }
      allSanityNavbars {
        nodes {
          layout
          primaryNavBgColor {
            color
          }
          primaryNavBgColorCustom
          primaryNavTextColor {
            color
          }
          secondaryNavBgColor {
            color
          }
          secondaryNavBgColorCustom
          secondaryNavTextColor {
            color
          }
          primaryNavCtaButtonLabel
          primaryNavCtaButtonLink {
            slug {
              current
            }
          }
          socialLinks {
            anchor
            icon
            url
          }
          navItem {
            type
            singlePageLink {
              shortDescription
              anchor
              slug {
                current
              }
            }
            dropdownTextLabel
            dropdowns {
              type
              singlePageLink {
                shortDescription
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
              dropdownTextLabel
              dropdowns {
                type
                singlePageLink {
                  shortDescription
                  anchor
                  slug {
                    current
                  }
                }
                dropdownTextLabel
              }
            }
          }
        }
      }
      allSanityFooters {
        nodes {
          id
          layout
          gmb {
            gmbEmbed
          }
          tagline
          bgImg {
            alt
            asset {
              gatsbyImageData(placeholder: BLURRED, formats: WEBP)
            }
          }
          footerItem {
            _key
            headline
            links {
              id
              anchor
              slug {
                current
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
      allSanityForms {
        nodes {
          id
          layout
          headline
          _rawTagline
        }
      }
      allSanityPage(sort: { order: ASC, fields: anchor }) {
        nodes {
          pageType
          addToFooter
          anchor
          slug {
            current
          }
        }
      }
    }
  `);

  // const metadata = data.sanityBusinessMetadata;
  const accent = data.sanityColorsAccent;
  const footers = data.allSanityFooters.nodes;
  const forms = data.allSanityForms.nodes;
  const hero = data.sanityColorsHero;
  const info = data.sanityBusinessInfo;
  const logo = data.sanityBusinessLogo;
  const navbar = data.sanityNavbars;
  const navbars = data.allSanityNavbars.nodes;
  const neutral = data.sanityColorsNeutral;
  const primary = data.sanityColorsPrimary;
  const page = data.allSanityPage.nodes;
  const secondary = data.sanityColorsSecondary;
  const siteSEO = data.sanityBusinessSeo;
  const socials = data.allSanitySocial.nodes;

  return {
    info,
    // logos,
    // locations,
    // metadata,
    accent,
    footers,
    forms,
    hero,
    logo,
    navbars,
    navbar,
    neutral,
    page,
    primary,
    secondary,
    siteSEO,
    socials,
  };
};

export default useSanitySettings;
