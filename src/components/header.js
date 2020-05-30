import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

import { useStaticQuery, graphql } from "gatsby"
import Image from "../components/image"
import "../styles/site.css"

const Header = ({ siteTitle }) => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "bark_logo_head.png" }) {
          childImageSharp {
            fluid(maxWidth: 120) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    var isHidden = true;
    return (
      <header
      style={{
        background: `#ffffff`,
      }}
      class="flex items-center justify-center"
      >
        <div class="flex items-center justify-between flex-wrap p-6 max-w-5xl" style={{minWidth: `100px`, maxWidth: `1640px`, width: `100%`}}>
          <a href="/" class="flex display-block items-center flex-shrink-0 text-gray mr-16">
            <Img style={{width: `50px`, height: `50px`}} fluid={data.placeholderImage.childImageSharp.fluid} />
            <span class="font-semibold text-xl tracking-tight pl-2">{siteTitle}</span>
          </a>
          <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-base lg:flex-grow">
              <Link to="/" activeClassName="block mt-4 lg:inline-block lg:mt-0 text-blue-500 font-semibold text-lg mr-6" class="transition duration-500 ease-in-out block mt-4 lg:inline-block lg:mt-0 text-gray text-lg hover:text-blue-500 mr-6">
                Simulation
              </Link>
              <Link to="/about/" activeClassName="block mt-4 lg:inline-block lg:mt-0 text-blue-500 font-semibold text-lg mr-6" class="transition duration-500 ease-in-out block mt-4 lg:inline-block lg:mt-0 text-gray text-lg hover:text-blue-500 mr-6">
                About
              </Link>
              {/* <Link to="/iros_tutorial/" activeClassName="block mt-4 lg:inline-block lg:mt-0 text-blue-500 font-semibold text-lg mr-6" class="transition duration-500 ease-in-out block mt-4 lg:inline-block lg:mt-0 text-gray text-lg hover:text-blue-500 mr-6">
                IROS 2020
              </Link> */}
            </div>
            <div>
              <a href="https://arxiv.org/abs/2003.02604" class="transition duration-500 ease-in-out inline-block text-base px-4 py-2 leading-none border rounded text-blue border-blue hover:border-blue-500 hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 mr-2">@arXiv</a>
              <a href="https://bark-simulator.readthedocs.io/en/latest/" class="transition duration-500 ease-in-out inline-block text-base px-4 py-2 leading-none border rounded text-blue border-blue hover:border-blue-500 hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 mr-2">Documentation</a>
              <a href="https://github.com/bark-simulator/bark" class="transition duration-500 ease-in-out inline-block text-base px-4 py-2 leading-none border rounded text-blue border-blue hover:border-blue-500 hover:text-blue-500 hover:bg-white mt-4 lg:mt-0">Github</a>
            </div>
          </div>
        </div>
      </header>
    )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
