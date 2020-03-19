/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/site.css"

import Header from "./header"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <body class="bg-gray-100">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div class="container mx-auto px-4 mt-4">
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} Julian Bernhard, Klemens Esterle, Patrick Hart and Tobias Kessler
        </footer>
      </div>
    </body>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
