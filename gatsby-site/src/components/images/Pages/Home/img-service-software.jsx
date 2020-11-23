import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgServiceSoftware = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgServiceSoftwareQ {
      image: file(
        relativePath: {
          eq: "assets/images/pages/home/new-software-applications-metacom-development.jpg"
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
      alt="Metacom Development builds new software applications for companies"
      className={className}
    />
  );
};

export default ImgServiceSoftware;
