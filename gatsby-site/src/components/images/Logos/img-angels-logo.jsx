import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgAngelsLogo = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgAngelsLogoQ {
      image: file(
        relativePath: {
          eq: "assets/logos/angels-towing-junk-car-mass-cash-for-junk-cars-logo.png"
        }
      ) {
        id
        childImageSharp {
          fixed(quality: 90, width: 103, height: 55) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Img
      fixed={data.image.childImageSharp.fixed}
      alt="Angels Auto & Towing company logo"
      className={className}
    />
  );
};

export default ImgAngelsLogo;
