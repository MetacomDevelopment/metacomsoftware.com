import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import { Layout, SEO, PageBuilder } from '../components';
import { useSanity } from '../hooks';

export const query = graphql`
  query PageTemplateQ($id: String!) {
    page: sanityPage(id: { eq: $id }) {
      ...PageBuilder
      id
      pageType
      indexStatus
      title
      slug {
        current
      }
      description
      schema {
        code
      }
    }
  }
`;

const PageTemplate = function (props) {
  const { siteSEO, info } = useSanity();
  const { data } = props;
  const page = data && data.page;
  const { pageBuilder, _rawPageBuilder } = page;

  const sanity = data.page;

  const pageSEO = {
    title: sanity?.title,
    description: sanity?.description,
    slug: `${info?.websiteUrl}/${sanity?.slug?.current}/`,
    schema: sanity?.schema?.code,
  };

  return (
    <Layout layout={sanity?.pageType}>
      <SEO
        title={pageSEO?.title}
        description={pageSEO?.description}
        canonical={pageSEO?.slug}
      >
        <script type="application/ld+json">{`${pageSEO?.schema}`}</script>
      </SEO>
      <Helmet>
        <meta
          name="robots"
          content={
            siteSEO?.indexStatus === 'noIndex'
              ? 'noindex, nofollow'
              : sanity?.indexStatus === 'index'
              ? 'index, follow'
              : 'noindex, nofollow'
          }
        />
      </Helmet>
      <PageBuilder
        pageBuilder={pageBuilder}
        _rawPageBuilder={_rawPageBuilder}
      />
    </Layout>
  );
};

export default PageTemplate;
