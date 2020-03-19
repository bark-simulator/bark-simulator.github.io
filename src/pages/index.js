import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>BARK - A semantic simulation framework.</h1>
    <p>Develop the next generation of behavior models using BARK.</p>
    <Image class="rounded-lg w-2" />
    <Link to="/about/">About</Link>
  </Layout>
)

export default IndexPage
