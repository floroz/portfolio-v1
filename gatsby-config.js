module.exports = {
  siteMetadata: {
    title: `Daniele Tortora | Front End Developer`,
    description: `I am a highly motivated Front End Developer based in London, United Kingdom, who is passionate about creating rich user interfaces and interactive web applications using a wide range of JavaScript technologies and libraries.
    I strongly believe in the importance of writing clean, modular and loosely coupled code that is easy to document, maintain and reuse.
    I have experience working with HTML, CSS, JavaScript, React, Redux, TypeScript, GraphQL, Apollo, Electron, Jest, Webpack.`,
    author: `Daniele Tortora`,
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
    `gatsby-plugin-emotion`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Daniele Tortora | Front End Developer`,
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
}
