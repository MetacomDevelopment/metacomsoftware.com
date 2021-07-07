import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const useSanitySettingsColors = () => {
  const data = useStaticQuery(graphql`
    query useSanitySettingsColorsQ {
      sanitySettingsColors {
        primaryColor {
          hex
        }
        primaryColorLight {
          hex
        }
        primaryColorDark {
          hex
        }
        secondaryColor {
          hex
        }
        secondaryColorLight {
          hex
        }
        secondaryColorDark {
          hex
        }
        accentColor {
          hex
        }
        accentColorLight {
          hex
        }
        accentColorDark {
          hex
        }
        heroHeadlineColor {
          hex
        }
        heroSubheadlineColor {
          hex
        }
      }
    }
  `);

  const colors = data.sanitySettingsColors;

  return colors;
};

export default useSanitySettingsColors;
