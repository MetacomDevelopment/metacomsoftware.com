require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = `https://www.metacomsoftware.com`,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === `production`;
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `Metacom Development`,
    description: `Metacom Development`,
    author: `John Grattan`,
    image: `src/assets/logos/metacom-development-software-company-logo.png`,
    siteUrl,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-force-trailing-slashes`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -75,
        duration: 1000,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-K8MR3CQ',
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        watchMode: false,
        overlayDrafts: true,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.metacomsoftware.com',
        sitemap: 'https://www.metacomsoftware.com/sitemap.xml',
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `metacom-development`,
        short_name: `metacom-development`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/assets/logos/metacom-development-software-company-favicon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Roboto:300;400;700;900',
            'Oswald:300,400,500,600,700',
            'Bilbo',
          ],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
