import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import useSanitySettingsCompany from '../hooks/useSanitySettingsCompany';
import useSanitySettingsSocials from '../hooks/useSanitySettingsSocials';
import useSanitySettingsColors from '../hooks/useSanitySettingsColors';
import useSanitySettingsMetadata from '../hooks/useSanitySettingsMetadata';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeaderPage from '../components/layouts/HeroPage';
import Section from '../components/layouts/Section';
import Container from '../components/layouts/Container';
import Grid from '../components/layouts/Grid';
import Col from '../components/layouts/Col';

const BlogPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query BlogPageQ {
      allSanityPost(sort: { fields: publishedAt, order: DESC }) {
        nodes {
          id
          title
          description
          slug {
            current
          }
          bgImg {
            alt
            asset {
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
            }
          }
          author {
            name
          }
          publishedAt(formatString: "MMMM D, yyyy")
          tags {
            title
          }
        }
      }
      imgHeroBg: file(
        relativePath: {
          eq: "assets/images/blog/recruiting-blog-staffing-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgRich: file(
        relativePath: {
          eq: "assets/images/about/rich-jeffery-job-recruiter-staffing-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  const { ...allCompany } = useSanitySettingsCompany();
  const { ...allSocials } = useSanitySettingsSocials();
  const { ...allColors } = useSanitySettingsColors();
  const { ...allMetadata } = useSanitySettingsMetadata();

  const posts = data.allSanityPost.nodes;
  const imgHeroBg = data.imgHeroBg.childImageSharp.gatsbyImageData;
  const imgRich = data.imgRich.childImageSharp.gatsbyImageData;

  const seo = {
    title: `Recruitment Agency Blog - Hiring & Staffing Trends`,
    description:
      'Check our recruiting blog for top job trends and hiring updates within engineering & technical industries. Be sure to check back for new posts!',
    slug: 'https://www.allstarconnections.com/blog/',
  };

  const hero = {
    header: `${allCompany.name} Recruiting Blog`,
    subheader:
      'Check our recruiting blog for industry trends and hiring updates.',
    alt: 'All-Star Connections is a staffing agency for engineering & technical companies.',
  };

  return (
    <Layout>
      <SEO title={seo.title} description={seo.description} canonical={seo.slug}>
        <script type="application/ld+json">
          {`{
            '@context': 'https://schema.org',
						'@type': 'Organization',
						'@id': ${allCompany.website}${seo.slug},
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': ${allCompany.cityState},
              'postalCode': ${allCompany.zip},
              'streetAddress': ${allCompany.street}
            },
            'email': ${allCompany.email},
            'member': [
              {
                '@type': 'Organization'
              },
              {
                '@type': 'Organization'
              }
            ],
            'alumni': [
              {
                '@type': 'Person',
                'name': ${allCompany.owner}
              },
            ],
            'name': ${allCompany.name},
            'telephone': ${allCompany.phone}
          }`}
        </script>
      </SEO>
      <HeaderPage
        imgHeroBg={imgHeroBg}
        altText={hero.alt}
        headerText={hero.header}
        subheaderText={hero.subheader}
      />
      <Section classes="bg-white">
        <Container>
          <div className="text-center mx-auto mb-24">
            <h3 className="text-base font-semibold tracking-wider text-primary uppercase">
              Hiring Trends and Opportunities
            </h3>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Check Our Latest Recruiting Posts
            </h2>
          </div>
          <Grid classes="lg:grid-cols-2 gap-x-12 gap-y-24">
            {posts.map((post) => (
              <Col>
                <Link
                  to={`${allCompany.website}/blog/${post.slug.current}/`}
                  className="mx-auto p-6 space-y-6 h-full flex flex-col bg-gray-200 hover:bg-gray-300 rounded-xl shadow-xl"
                >
                  <Container type="img">
                    <GatsbyImage
                      image={post.bgImg.asset.gatsbyImageData}
                      className="aspect-w-12 aspect-h-7 rounded-2xl shadow-xl"
                      imgClassName="w-full h-full object-center object-cover"
                      alt="Company"
                      loading="lazy"
                    />
                  </Container>
                  <div className="h-full flex flex-col justify-between space-y-8 text-left">
                    <div className="space-y-6">
                      <h2 className="text-2xl">{post.title}</h2>
                      <p className="text-gray-800">{post.description}</p>
                    </div>
                    <div className="flex flex-row place-items-between place-content-between text-gray-800 text-left text-sm">
                      <div>
                        <p className="font-semibold">{post.author.name}</p>
                      </div>
                      {post.tags.map((tag) => (
                        <div>
                          <p className="text-white">
                            <span className="bg-accent font-semibold py-1 px-5 rounded-full">
                              {tag.title}
                            </span>
                          </p>
                        </div>
                      ))}
                      <div>
                        <p>{post.publishedAt}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
          </Grid>
        </Container>
      </Section>
    </Layout>
  );
};

export default BlogPage;
