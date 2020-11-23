import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgMetacomLogo = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgMetacomLogoQ {
      image: file(
        relativePath: {
          eq: "assets/logos/metacom-development-software-company-logo.png"
        }
      ) {
        id
        childImageSharp {
          fixed(quality: 90, width: 115, height: 45) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Img
      fixed={data.image.childImageSharp.fixed}
      alt="Metacom Development company logo"
      className={className}
    />
  );
};

export default ImgMetacomLogo;
