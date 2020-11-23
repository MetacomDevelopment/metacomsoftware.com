import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import SEO from '../components/common/SEO/seo';
import Header from '../components/layouts/Header/Header';
import Body from '../components/views/Blog/Body';

const BlogPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query BlogPageQ {
      masthead: file(
        relativePath: {
          eq: "assets/images/pages/blog/junk-car-removal-blog-angels-towing-junk-car-mass.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const imageDataHeader = data.masthead.childImageSharp.fluid;

  return (
    <>
      <SEO
        title="Junk Car Removal Blog - Everything About Cash For Cars | Angels Towing - Junk Car Mass"
        description="Thinking about scrapping your junk car for cash? Before you lose out on money, check out our blog posts to learn tips, tricks, and guides to selling your car"
        canonicalLink="https://junkcarsmass.com/blog/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        textMain="Junk Car Removal Blog"
        textSecondary="Everything you need to know cash for cars"
      />
      <Body />
    </>
  );
};

export default BlogPage;
