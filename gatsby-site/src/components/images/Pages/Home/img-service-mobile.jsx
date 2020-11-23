import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgServiceMobile = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgServiceMobileQ {
      image: file(
        relativePath: {
          eq: "assets/images/pages/home/mobile-applications-ios-android-software-metacom-development.jpg"
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
      alt="Metacom Development builds custom iOS and Android mobile applications for companies"
      className={className}
    />
  );
};

export default ImgServiceMobile;
