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
import Img from "gatsby-image"

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
      placeholderImage: file(relativePath: { eq: "bark_logo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <body class="text-gray-900 antialiased">
      <Header siteTitle={data.site.siteMetadata.title} />
      {/* <div class="flex">
        <div class="w-full bg-gray-200" style={{height:`550px`, overflow: `hidden`}}>
          <Img objectFit="cover-object" fluid={data.placeholderImage.childImageSharp.fluid} />
          <video id="vid" class="object-cover bg-white" style={{height:`550px`, width:`100%`}} autoPlay muted loop>
            <source src={BarkVideo} type="video/mp4" />
          </video>
        </div>
      </div> */}
      <div class="flex flex-wrap items-center justify-center">
        <div class="md:px-6 mt-4" style={{minWidth: `100px`, maxWidth: `1640px`, width: `100%`}}>
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
