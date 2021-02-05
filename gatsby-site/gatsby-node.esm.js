// import path from 'path';

// async function turnPostsIntoPages({ graphql, actions }) {
//   // 1. Get template for posts
//   const postTemplate = path.resolve('./src/templates/Post.jsx');
//   // 2. Query all posts
//   const { data } = await graphql(`
//     query {
//       posts: allSanityPost(filter: { slug: { current: { ne: "null" } } }) {
//         nodes {
//           title
//           slug {
//             current
//           }
//         }
//       }
//     }
//   `);
//   console.log(data);
//   // 3. Loop over each post and create a page for them
//   data.posts.nodes.forEach((post) => {
//     actions.createPage({
//       path: `blog/${post.slug.current}`,
//       component: postTemplate,
//       context: { slug: post.slug.current },
//     });
//   });
// }

// export async function createPages(params) {
//   // Create pages dynamically
//   // 1. Posts
//   await turnPostsIntoPages(params);
//   // 2. Services
//   // 3. Service Areas
// }
