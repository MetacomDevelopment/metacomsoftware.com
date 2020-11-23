import React from 'react';
import { Link, graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Helmet from 'react-helmet';

import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';
import SEO from '../components/common/SEO/seo';
import PostHeader from '../components/views/Blog/PostHeader';
import ImgAngelsLogo from '../components/images/Logos/img-angels-logo';
import ButtonInternalLink from '../components/common/Buttons/ButtonInternalLink/ButtonInternalLink';

const BlogPostTemplate = ({ data }) => {
  const post = data.mdx;
  const postImg = `${(
    <Img
      className="container mb-5 drop-shadow-dark rounded"
      fluid={post.frontmatter.image.childImageSharp.fluid}
      alt={post.frontmatter.alt}
    />
  )}`;

  const structuredDataArticle = `{
    "@context": "http://schema.org",
    "@type": "Article",
    "name": "${post.frontmatter.title}",
    "author": {
      "@type": "Person",
      "name": "${post.frontmatter.author}"
    },
    "datePublished": "${post.frontmatter.date}",
    "image": "https://www.mdhconstruction.com/",
    "url": "${post.frontmatter.url}",
    "publisher": {
      "@type": "Organization",
      "name": "MDH Construction",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.mdhconstruction.com/static/800f75406d914563f0f442893d90d280/df308/mdh-construction-general-contractor-plymouth-ma-logo.png"
      }
    },
    "headline" : "${post.frontmatter.title}",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "${post.frontmatter.url}"
    }
  }`;

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        canonicalLink={post.frontmatter.url}
      />
      <Helmet>
        <script type="application/ld+json">{structuredDataArticle}</script>
      </Helmet>
      <PostHeader
        Tag="header"
        className="bg-img-page-top"
        hOne={post.frontmatter.title}
        author={post.frontmatter.author}
        date={post.frontmatter.date}
        timeToRead={post.timeToRead}
      />
      <Container
        fluid
        className="drop-shadow text-center p-3 mb-5 bg-breadcrumb-bar"
      >
        <Link to="/">
          <span className="breadcrumb__link">Home</span>
        </Link>
        <span className="mx-2 text-dark">/</span>
        <Link to="/blog/">
          <span className="breadcrumb__link">Blog</span>
        </Link>
        <span className="mx-2 text-dark">/</span>

        <span className="breadcrumb__link__active">
          {post.frontmatter.title}
        </span>
      </Container>
      <Container className="mt-5">
        <Row className="mx-0 px-0 mb-5 mb-lg-0 container justify-content-center">
          <Col lg={9} className="px-0 pr-lg-5 mb-5">
            <Img
              className="container mb-5 drop-shadow-dark rounded"
              fluid={post.frontmatter.image.childImageSharp.fluid}
              alt={post.frontmatter.alt}
            />
            <MDXRenderer>{post.body}</MDXRenderer>
          </Col>
          <div className="col-lg-3 mt-5 mt-lg-0 height-fit-content p-3 bg-white rounded drop-shadow">
            <p className="text-dark font-weight-bold text-center mb-4">
              Share this article!
            </p>
            <Row noGutters className="justify-content-between mb-5 text-center">
              <Col xs={3}>
                {' '}
                <FacebookShareButton
                  url={post.frontmatter.url}
                  size={32}
                  className="pointer drop-shadow px-md-3"
                >
                  <FacebookIcon url={post.frontmatter.url} size={32} round />
                </FacebookShareButton>
              </Col>
              <Col xs={3}>
                {' '}
                <TwitterShareButton
                  url={post.frontmatter.url}
                  size={32}
                  className="pointer drop-shadow px-md-3"
                >
                  <TwitterIcon url={post.frontmatter.url} size={32} round />
                </TwitterShareButton>
              </Col>
              <Col xs={3}>
                {' '}
                <LinkedinShareButton
                  url={post.frontmatter.url}
                  size={32}
                  className="pointer drop-shadow px-md-3"
                >
                  <LinkedinIcon url={post.frontmatter.url} size={32} round />
                </LinkedinShareButton>
              </Col>
              <Col xs={3}>
                {' '}
                <EmailShareButton
                  url={post.frontmatter.url}
                  size={32}
                  className="pointer drop-shadow px-md-3"
                >
                  <EmailIcon url={post.frontmatter.url} size={32} round />
                </EmailShareButton>
              </Col>
            </Row>
            <p className="lead mb-5 py-1 text-dark bg-secondary rounded drop-shadow text-center">
              <strong className="text-white">About the author</strong>
            </p>
            <Col className="mx-auto" xs={12} md={8} lg={12}>
              <ImgAngelsLogo className="no-drop-shadow" />
            </Col>
            <div className="text-center text-dark mt-3">
              <strong className="">{post.frontmatter.author}</strong>
              <small className="d-block mt-0">Owner</small>
            </div>
            <hr className="light" />
            <p className="text-left text-dark">
              Michael Maher is the owner of MDH Construction and currently
              resides in Plymouth, MA.
            </p>
            <p className="text-left text-dark">
              He is a licensed home improvement contractor and construction
              supervisor.
            </p>
            <p className="text-left text-dark">
              Michael specializes in home remodeling, seamless gutter
              installations, and home insulation projects.
            </p>
            <p className="text-left text-dark">
              If you are interested in speaking with Michael, please call{' '}
              <a className="" href="tel:+17742696002">
                (774) 269-6002
              </a>
              .
            </p>
            <div className="text-center mb-3 mt-4">
              <ButtonInternalLink btnLabel="Learn More" btnLink="/" />
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      timeToRead
      frontmatter {
        path
        url
        date
        title
        description
        author
        alt
        image {
          id
          relativePath
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default BlogPostTemplate;
