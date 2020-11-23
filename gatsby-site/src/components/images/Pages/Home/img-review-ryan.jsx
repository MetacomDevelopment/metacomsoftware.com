import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgReviewRyan = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgReviewRyanQ {
      image: file(
        relativePath: {
          eq: "assets/images/pages/home/junk-car-removal-review-profile-pic-angels-towing-junk-car-mass-ryan.jpg"
        }
      ) {
        id
        childImageSharp {
          fixed(quality: 90, width: 75, height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Img
      fixed={data.image.childImageSharp.fixed}
      alt="Junk car removal review profile picture for Angels Auto & Towing near Boston, Massachusetts"
      className={className}
    />
  );
};

export default ImgReviewRyan;
