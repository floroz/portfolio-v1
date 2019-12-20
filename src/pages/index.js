import React from "react";
import ReactDOM from "react-dom";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero/hero";
import AOS from "aos";
import "aos/dist/aos.css";

// if we're in dev mode
if (process.env.NODE_ENV === "development") {
  // Set up react-axe to catch accessibility issues during development
  const axe = require("react-axe");
  axe(React, ReactDOM, 1000);
}

AOS.init();

const IndexPage = () => {
  console.log("index page");

  return (
    <Layout>
      <SEO />
      <Hero />
    </Layout>
  );
};

export default IndexPage;
