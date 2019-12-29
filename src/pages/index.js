import React from "react";
import ReactDOM from "react-dom";
import { graphql } from "gatsby";
import Layout from "~components/layout";
import SEO from "~components/seo";
import Hero from "~containers/hero/hero";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "~containers/about/about";
import Contact from "~containers/contact/contact";
import Skills from "~components/skills/skills";

// if we're in dev mode
if (process.env.NODE_ENV === "development") {
  // Set up react-axe to catch accessibility issues during development
  const axe = require("react-axe");
  axe(React, ReactDOM, 1000);
}

AOS.init({
  once: true,
});

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
