const config = require("./config");

module.exports = {
  siteMetadata: {
    title: config.title,
    siteUrl: config.siteUrl,
    description: config.description,
    author: config.author,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          "~components": "src/components",
          "~containers": "src/containers",
          "~styles": "src/styles",
          "~images": "src/images",
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Daniele Tortora | Front End Engineer`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
