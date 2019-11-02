import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import AOS from "aos"
import "aos/dist/aos.css"

AOS.init()

const IndexPage = () => {
  console.log("index page")

  return (
    <Layout>
      <SEO />
      <Hero />
    </Layout>
  )
}

export default IndexPage
