import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const useSanitySettingsSocials = () => {
  const data = useStaticQuery(graphql`
    query useSanitySettingsSocialsQ {
      sanitySettingsSocials {
        youTube
        twitter
        linkedIn
        instagram
        gmbShare
        gmbEmbed
        gmbCid
        facebook
      }
    }
  `);

  const socials = data.sanitySettingsSocials;

  return socials;
};

export default useSanitySettingsSocials;
