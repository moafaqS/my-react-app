import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Learn to design and code React Apps</h1>
    <p>Complete courses about the best tools and design system</p>

    <Link to="/page-2/">Go to page 2   </Link> <br />
  </Layout>
)

export default IndexPage
