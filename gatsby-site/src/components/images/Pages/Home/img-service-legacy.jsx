import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgServiceLegacy = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgServiceLegacyQ {
      image: file(
        relativePath: {
          eq: "assets/images/pages/home/legacy-software-application-transformation-metacom-development.jpg"
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
      alt="Metacom Development transforms legacy applications and software to the latest technologies for companies"
      className={className}
    />
  );
};

export default ImgServiceLegacy;
