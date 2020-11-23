import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgServiceFinancial = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgServiceFinancialQ {
      image: file(
        relativePath: {
          eq: "assets/images/pages/home/financial-applications-software-metacom-development.jpg"
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
      alt="Metacom Development builds custom financial software for companies"
      className={className}
    />
  );
};

export default ImgServiceFinancial;
