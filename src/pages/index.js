import React from "react";
import { graphql } from "gatsby";
import Layout from "components/layout";
import Hero from "containers/hero/hero";
import About from "containers/about/about";
import Contact from "containers/contact/contact";
import Work from "containers/work/work";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Work />
        <Contact />
      </Layout>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
