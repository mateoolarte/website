module.exports = {
  siteMetadata: {
    title: `Mateo Olarte | Software developer`,
    description: `I’m a software developer building digital products, working with Frontend technologies like CSS, React, Redux, Webpack, Apollo, NextJS.`,
    author: `Mateo Olarte`,
    siteUrl: "https://mateoolarte.com",
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayout: require.resolve(`./src/components/Article/index.tsx`),
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-emojis",
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mateo Olarte`,
        short_name: `mateoolarte`,
        start_url: `/`,
        background_color: `#1755b2`,
        theme_color: `#1755b2`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-60678906-1",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poly:regular,italic`, `Work+Sans:500,700,900`],
        display: "swap",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
