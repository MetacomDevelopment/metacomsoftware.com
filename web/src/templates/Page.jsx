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
import HeaderPage from '../components/layouts/HeroPage';
import PageSidebar from '../components/layouts/PageSidebar';
import Testimonial from '../components/common/Testimonial';
import Section from '../components/layouts/Section';
import Container from '../components/layouts/Container';
import SanityBlockContent from '../components/common/SanityBlockContent';
import PageBuilder from '../components/common/PageBuilder';

export const query = graphql`
  query PageTemplateQ($id: String!) {
    page: sanityPage(id: { eq: $id }) {
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
      ...PageBuilder
    }
  }
`;

const PageTemplate = (props) => {
  const { data } = props;
  const page = data && data.page;
  const { pageBuilder, _rawPageBuilder } = page;

  const sanity = data.page;
  const seo = {
    title: sanity.title,
    description: sanity.title,
    slug: sanity.slug.current,
  };

  const { ...allCompany } = useSanitySettingsCompany();
  const { ...allSocials } = useSanitySettingsSocials();
  const { ...allColors } = useSanitySettingsColors();
  const { ...allMetadata } = useSanitySettingsMetadata();

  return (
    <Layout>
      <SEO title={seo.title} description={seo.description} canonical={seo.slug}>
        <script type="application/ld+json">{`${sanity.schema}`}</script>
      </SEO>
      <HeaderPage
        imgHeroBg={sanity.bgImg.asset.gatsbyImageData}
        altText={sanity.bgImg.alt}
        headerText={sanity.headline}
        subheaderText={sanity.subheadline}
      />
      <Section>
        <Container>
          <PageBuilder
            pageBuilder={pageBuilder}
            _rawPageBuilder={_rawPageBuilder}
          />
        </Container>
      </Section>
    </Layout>
  );
};

export default PageTemplate;
