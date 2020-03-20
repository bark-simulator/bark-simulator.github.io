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
import Footer from "./footer"


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
    <body class="text-gray-900 antialiased">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div class="flex flex-wrap items-center justify-center">
        <div class="px-6 mt-4" style={{minWidth: `100px`, maxWidth: `1640px`, width: `100%`}}>
          {children}
        </div>
      </div>
      <Footer />
    </body>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
