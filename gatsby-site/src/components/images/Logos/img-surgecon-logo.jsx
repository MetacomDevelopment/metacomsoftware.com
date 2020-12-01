import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgSurgeconLogo = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgSurgeconLogoQ {
      image: file(
        relativePath: {
          eq: "assets/images/pages/home/surgecon-healthcare-software-metacom-development.png"
        }
      ) {
        id
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={data.image.childImageSharp.fluid}
      alt="Surgecon healthcare software logo, partners of Metacom Development"
      className={className}
    />
  );
};

export default ImgSurgeconLogo;
