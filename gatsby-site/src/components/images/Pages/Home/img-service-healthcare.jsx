import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgServiceHealthcare = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgServiceHealthcareQ {
      image: file(
        relativePath: {
          eq: "assets/images/pages/home/healthcare-applications-software-metacom-development.jpg"
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
      alt="Metacom Development builds custom healthcare software for companies"
      className={className}
    />
  );
};

export default ImgServiceHealthcare;
