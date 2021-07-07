/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

/**
 * Create all the project pages.
 */
const createBlogPages = async (graphql, actions, reporter) => {
  const { createPage } = actions;
  const getBlogResult = await graphql(`
    query {
      posts: allSanityPost(filter: { slug: { current: { ne: "null" } } }) {
        nodes {
          title
          slug {
            current
          }
        }
      }
    }
  `);
  if (getBlogResult.errors) {
    throw getBlogResult.errors;
  }
  const blogs = getBlogResult.data.posts.nodes;
  blogs.forEach((post) => {
    const path = `/blog/${post.slug.current}`;
    createPage({
      path,
      component: require.resolve('./src/templates/Post.jsx'),
      context: { slug: post.slug.current },
    });
  });
};

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPages(graphql, actions, reporter);
};
