import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';
import BlockContent from '@sanity/block-content-to-react';

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
// import HeaderBlogPost from '../components/layouts/HeaderBlogPost/HeaderBlogPost';
import ButtonInternalLink from '../components/common/Buttons/ButtonInternalLink/ButtonInternalLink';

const Post = () => {
  const data = useStaticQuery(graphql`
    query PostQuery {
      sanityPost {
        id
        title
        slug {
          current
        }
        author {
          name
          slug {
            current
          }
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          bio {
            _rawChildren
          }
        }
        mainImage {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        tags {
          title
        }
        publishedAt
        _rawBody
      }
    }
  `);

  const post = data.sanityPost;

  const structuredDataArticle = `{
    "@context": "http://schema.org",
    "@type": "Article",
    "name": "${post.title}",
    "author": {
      "@type": "Person",
      "name": "${post.author.name}"
    },
    "datePublished": "${post.publishedAt}",
    "image": "https://www.metacomsoftware.com/#",
    "url": "${post.slug.current}",
    "publisher": {
      "@type": "Organization",
      "name": "Metacom Development",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.metacomsoftware.com/#"
      }
    },
    "headline" : "${post.title}",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "${post.slug.current}"
    }
  }`;

  return (
    <>
      <SEO
        title={post.title}
        description={post.title}
        canonicalLink={post.slug.current}
      />
      <Helmet>
        <script type="application/ld+json">{structuredDataArticle}</script>
      </Helmet>
      {/* <HeaderBlogPost
        Tag="header"
        className="bg-img-page-top"
        hOne={post.title}
        author={post.author.name}
        date={post.publishedAt}
        timeToRead={post.timeToRead}
      /> */}
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

        <span className="breadcrumb__link__active">{post.title}</span>
      </Container>
      <Container className="mt-5">
        <Row className="mx-0 px-0 pt-5 my-5 mb-lg-0 container justify-content-center">
          <Col lg={9} className="px-0 pr-lg-5 mb-5 blog-headers">
            <BlockContent blocks={post._rawBody} />
          </Col>
          <div className="col-lg-3 mt-5 mt-lg-0 height-fit-content p-3 bg-white rounded drop-shadow">
            <p className="text-dark font-weight-bold text-center mb-4">
              Share this article!
            </p>
            <Row noGutters className="justify-content-between mb-5 text-center">
              <Col xs={3}>
                {' '}
                <FacebookShareButton
                  url={post.slug.current}
                  size={32}
                  className="pointer drop-shadow px-md-3"
                >
                  <FacebookIcon url={post.slug.current} size={32} round />
                </FacebookShareButton>
              </Col>
              <Col xs={3}>
                {' '}
                <TwitterShareButton
                  url={post.slug.current}
                  size={32}
                  className="pointer drop-shadow px-md-3"
                >
                  <TwitterIcon url={post.slug.current} size={32} round />
                </TwitterShareButton>
              </Col>
              <Col xs={3}>
                {' '}
                <LinkedinShareButton
                  url={post.slug.current}
                  size={32}
                  className="pointer drop-shadow px-md-3"
                >
                  <LinkedinIcon url={post.slug.current} size={32} round />
                </LinkedinShareButton>
              </Col>
              <Col xs={3}>
                {' '}
                <EmailShareButton
                  url={post.slug.current}
                  size={32}
                  className="pointer drop-shadow px-md-3"
                >
                  <EmailIcon url={post.slug.current} size={32} round />
                </EmailShareButton>
              </Col>
            </Row>
            <p className="lead mb-5 py-1 text-dark bg-secondary rounded drop-shadow text-center">
              <strong className="text-white">About the author</strong>
            </p>
            <Col className="mx-auto" xs={12} md={8} lg={12}>
              {/* <ImgAngelsLogo className="no-drop-shadow" /> */}
            </Col>
            <div className="text-center text-dark mt-3">
              <strong className="">{post.author.name}</strong>
              <small className="d-block mt-0">Customer Service Manager</small>
            </div>
            <hr className="light" />
            <p className="text-left text-dark">
              Brian McAuliffe is the Custom Service Manager at Metacom
              Development. Brian is originally from Providence, Rhode Island and
              now resides in Cape Cod. He has a passion for technology and
              writing.
            </p>
            <p className="text-left text-dark">
              If you are interested in our services or have any questions,
              please fill out our form below.
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

export default Post;
