import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgServiceWebsites = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgServiceWebsitesQ {
      image: file(
        relativePath: {
          eq: "assets/images/pages/home/website-design-web-development-metacom-software.jpg"
        }
      ) {
        id
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={data.image.childImageSharp.fluid}
      alt="Metacom Development designs and develops websites for companies"
      className={className}
    />
  );
};

export default ImgServiceWebsites;
