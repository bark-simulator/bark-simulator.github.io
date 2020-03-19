import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>This pahge does not exist.</h1>
    <p>Go back to the <Link to="/">main page</Link>.</p>
  </Layout>
)

export default NotFoundPage
