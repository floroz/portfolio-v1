/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

/**
 * https://www.mrozilla.cz/blog/gatsby-eslint-vscode-import-alias/
 */
const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
        containers: path.resolve(__dirname, "src/containers"),
        styles: path.resolve(__dirname, "src/styles"),
        images: path.resolve(__dirname, "src/images"),
      },
    },
    node: {
      fs: "empty",
    },
  });
};
