import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgCarLogos = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgCarLogosQ {
      image: file(
        relativePath: {
          eq: "assets/images/pages/home/junk-car-logos-angels-towing-junk-car-mass-plympton-ma.jpg"
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

export default ImgCarLogos;
