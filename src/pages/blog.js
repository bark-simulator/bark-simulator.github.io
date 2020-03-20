import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <div>
      <h1 class="text-2xl">Welcome to BARK</h1>
      <p>This is our first blog post in which we will introduce BARK.</p>
    </div>
  </Layout>
)

export default BlogPage
