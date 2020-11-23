import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/common/SEO/seo';
import Header from '../components/layouts/Header/Header';

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query NotFoundPageQ {
      masthead: file(
        relativePath: {
          eq: "assets/images/pages/page-missing/page-missing-404-error-scrap-metal-angels-towing-junk-car-mass.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const imageDataHeader = data.masthead.childImageSharp.fluid;

  return (
    <>
      <SEO
        title="Something Went Wrong! Page Cannot Be Found | Angels Towing - Junk Car Mass"
        description="Something Went Wrong! This page cannot be found"
        canonicalLink="https://junkcarsmass.com/404/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        textMain="Something Went Wrong!"
        textSecondary="This page cannot be found"
        alt="404 Error - Oops! This Page Cannot Be Found"
        btnLabel="Return Home"
        btnLink="/"
      />
    </>
  );
};

export default NotFoundPage;
