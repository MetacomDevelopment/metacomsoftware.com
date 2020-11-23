import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgAngelsFavicon = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgAngelsFaviconQ {
      image: file(
        relativePath: {
          eq: "assets/logos/angels-towing-junk-car-mass-favicon.png"
        }
      ) {
        id
        childImageSharp {
          fixed(width: 103, height: 55) {
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

export default ImgAngelsFavicon;
