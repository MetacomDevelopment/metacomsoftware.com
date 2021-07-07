import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const useSanitySettingsCompany = () => {
  const data = useStaticQuery(graphql`
    query useSanitySettingsCompanyQ {
      sanitySettingsCompany {
        address
        cityState
        email
        emailHref
        hours
        name
        owner
        phone
        phoneHref
        street
        website
        zip
      }
    }
  `);

  const company = data.sanitySettingsCompany;

  return company;
};

export default useSanitySettingsCompany;
