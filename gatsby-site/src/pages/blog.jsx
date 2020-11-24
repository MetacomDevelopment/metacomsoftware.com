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
          eq: "assets/images/pages/blog/software-application-blog-metacom-development.jpg"
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
        title="Metacom Development Blog"
        description="Metacom Development Blog"
        canonicalLink="https://www.metacomsoftware.com/blog/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        textMain="Software Development Blog"
        textSecondary="Everything you need to know about software development"
      />
      <Body />
    </>
  );
};

export default BlogPage;
