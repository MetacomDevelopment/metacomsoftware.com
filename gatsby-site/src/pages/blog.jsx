import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { Container, Row, Col } from 'react-bootstrap';

import SEO from '../components/common/SEO/seo';
import Header from '../components/layouts/Header/Header';
import ButtonInternalLink from '../components/common/Buttons/ButtonInternalLink/ButtonInternalLink';

const BlogPage = ({ data }) => {
  const imageDataHeader = data.masthead.childImageSharp.fluid;
  const posts = data.posts;

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
      <section className="section-container" id="about-page">
        <Container className="mt-5 pt-5">
          <h2 className="text-center mt-0 mb-5">
            Latest Software Development Blog Posts
          </h2>
          <Row className="justify-content-center align-items-baseline drop-shadow">
            {posts.nodes.map((post) => (
              <Col xs={12} md={6} lg={6} key={post.id}>
                <div className="container seo-blog mb-5 p-2 border rounded bg-white">
                  <Link to={post.slug.current.path}>
                    <Img
                      className="mb-2"
                      fluid={post.mainImage.asset.fluid}
                      alt="Metacom Development blog post thumbnail"
                    />
                  </Link>
                  <div>
                    <div>
                      <h3>{post.title}</h3>
                    </div>
                    <Row className="text-muted ml-1">
                      {/* <ImgAngelsFavicon className="mr-2" /> */}
                      {/* <small>
                        {post.author.name} • {post.publishedAt}
                      </small> */}
                    </Row>
                    <Row className="row text-muted ml-3">
                      {/* <small className="col">
                        {post.node.timeToRead} min read
                      </small> */}
                    </Row>
                    <div className="text-center my-3">
                      <ButtonInternalLink
                        btnLink={post.slug.current}
                        btnLabel="Read Blog Post"
                      />
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export const query = graphql`
  query BlogPageQuery {
    masthead: file(
      relativePath: {
        eq: "assets/images/pages/blog/software-application-blog-metacom-development.jpg"
      }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    }
    posts: allSanityPost(filter: { slug: { current: { ne: "null" } } }) {
      nodes {
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
        body {
          _key
          _rawChildren
        }
      }
    }
  }
`;

export default BlogPage;
