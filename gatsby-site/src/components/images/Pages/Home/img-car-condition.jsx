import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgCarCondition = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgCarConditionQ {
      image: file(
        relativePath: {
          eq: "assets/images/pages/home/car-collisions-junk-cars-angels-towing-junk-car-mass-plympton-ma.png"
        }
      ) {
        id
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={data.image.childImageSharp.fluid}
      alt="Angels Auto & Towing buys junks of any make or model throughout Massachusetts"
      className={className}
    />
  );
};

export default ImgCarCondition;
