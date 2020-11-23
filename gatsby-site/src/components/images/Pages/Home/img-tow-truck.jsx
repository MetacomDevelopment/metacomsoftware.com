import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgTowTruck = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgTowTruckQ {
      image: file(
        relativePath: {
          eq: "assets/images/pages/home/tow-truck-angels-towing-junk-car-mass-boston-massachusetts.png"
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
      alt="Angels Auto & Towing buys junks of any make or model throughout Massachusetts"
      className={className}
    />
  );
};

export default ImgTowTruck;
