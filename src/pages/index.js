import React from "react";
import { graphql } from "gatsby";
import Layout from "components/layout";
import SEO from "components/seo";
import Hero from "containers/hero/hero";
import About from "containers/about/about";
import Contact from "containers/contact/contact";
import Skills from "components/skills/skills";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO />
        <Hero />
        <About />
        <Skills />
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
