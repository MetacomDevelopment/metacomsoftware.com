import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import useSanitySettingsCompany from '../hooks/useSanitySettingsCompany';
import useSanitySettingsSocials from '../hooks/useSanitySettingsSocials';
import useSanitySettingsColors from '../hooks/useSanitySettingsColors';
import useSanitySettingsMetadata from '../hooks/useSanitySettingsMetadata';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeroPost from '../components/layouts/HeroPost';
import PageSidebar from '../components/layouts/PageSidebar';
import Testimonial from '../components/common/Testimonial';
import Section from '../components/layouts/Section';
import Container from '../components/layouts/Container';
import SanityBlockContent from '../components/common/SanityBlockContent';

export const query = graphql`
  query PostTemplateQ($id: String!) {
    sanityPost(id: { eq: $id }) {
      id
      title
      slug {
        current
      }
      description
      schema
      bgImg {
        alt
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
      headline
      subheadline
      _rawBody
      author {
        name
      }
      publishedAt(formatString: "MMMM D, yyyy")
      tags {
        title
      }
    }
  }
`;

const PostTemplate = ({ data }) => {
  const post = data.sanityPost;

  const { ...allCompany } = useSanitySettingsCompany();
  const { ...allSocials } = useSanitySettingsSocials();
  const { ...allColors } = useSanitySettingsColors();
  const { ...allMetadata } = useSanitySettingsMetadata();

  const seo = {
    title: post.title,
    description: post.description,
    slug: `${allCompany.website}/blog/${post.slug.current}/`,
  };

  return (
    <Layout type="brand">
      <SEO title={seo.title} description={seo.description} canonical={seo.slug}>
        <script type="application/ld+json">
          {`{
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.allstarconnections.com/"
              },
              "headline": ${post.title},
              "description": ${post.description},
              "image": "https://www.allstarconnections.com/#image",  
              "author": {
                "@type": "Person",
                "name": ${post.author.name},
                "url": "https://www.allstarconnections.com/#author"
              },  
              "publisher": {
                "@type": "Organization",
                "name": "All-Star Connections",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.allstarconnections.com/#image"
                }
              },
              "datePublished": ${post.publishedAt}
            }`}
        </script>
      </SEO>
      <HeroPost
        imgHeroBg={post.bgImg.asset.gatsbyImageData}
        altText={post.bgImg.alt}
        headerText={post.headline}
        authorName={post.author.name}
        tags={post.tags}
        tagTitle={post.tags.title}
        publishedAt={post.publishedAt}
      />
      <Section>
        <Container>
          <PageSidebar>
            <SanityBlockContent blocks={post._rawBody} />
          </PageSidebar>
        </Container>
      </Section>
    </Layout>
  );
};

export default PostTemplate;
