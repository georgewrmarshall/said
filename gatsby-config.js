module.exports = {
  siteMetadata: {
    title: `SAID Studio`,
    description: `Said Studio is an interior design practice based in New Zealand`,
    author: `@georgemarshall`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#B6C8DB`,
        theme_color: `#B6C8DB`,
        display: `minimal-ui`,
        icon: `src/images/said-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto\:400,`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
  ],
};
