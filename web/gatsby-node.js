const createPages = async (graphql, actions) => {
  // Get Gatsby‘s method for creating new pages
  const { createPage } = actions;
  // Query Gatsby‘s GraphAPI for all the categories that come from Sanity
  // You can query this API on http://localhost:8000/___graphql
  const result = await graphql(`
    query {
      pages: allSanityPage(filter: { slug: { current: { ne: "null" } } }) {
        nodes {
          id
          title
          slug {
            current
          }
        }
      }
    }
  `);

  // If there are any errors in the query, cancel the build and tell us
  if (result.errors) throw result.errors;

  // Let‘s gracefully handle if allSanityCatgogy is null
  const pageNodes = (result.data.pages || {}).nodes || [];

  // Loop through the category nodes, but don't return anything
  pageNodes.forEach((node) => {
    // Desctructure the id and slug fields for each category
    const { id, slug = {} } = node;

    // If there isn't a slug, we want to do nothing
    if (!slug) return;

    // Make the URL with the current slug
    let path = `/${slug.current}/`;

    if (path === '/home/') path = '/';
    // Create the page using the URL path and the template file, and pass down the id
    // that we can use to query for the right category in the template file
    createPage({
      path,
      component: require.resolve('./src/templates/Page.jsx'),
      context: { id },
    });
  });
};

exports.createPages = async ({ graphql, actions }) => {
  await createPages(graphql, actions);
};
