import React from 'react';
import { graphql } from 'gatsby';

import { Layout, SEO, PageBuilder } from '../components';
import { useSanity } from '../hooks';

export const query = graphql`
  query PageTemplateQ($id: String!) {
    page: sanityPage(id: { eq: $id }) {
      id
      layout
      metadata {
        title
        slug {
          current
        }
        description
        schema {
          code
        }
      }
      ...PageBuilder
    }
  }
`;

const PageTemplate = (props) => {
  const { data } = props;
  const page = data && data.page;
  const { pageBuilder, _rawPageBuilder } = page;

  const sanity = data.page;

  const { website, primary, secondary, accent, neutral, hero } = useSanity();

  const seo = {
    title: sanity.metadata.title,
    description: sanity.metadata.description,
    slug: `${website.url}/${sanity.metadata.slug.current}/`,
    schema: sanity.metadata.schema.code,
  };

  return (
    <Layout layout={sanity.layout}>
      <SEO title={seo.title} description={seo.description} canonical={seo.slug}>
        <script type="application/ld+json">{`${seo.schema}`}</script>
      </SEO>
      <PageBuilder
        pageBuilder={pageBuilder}
        _rawPageBuilder={_rawPageBuilder}
      />
    </Layout>
  );
};

export default PageTemplate;
