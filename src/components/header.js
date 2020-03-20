import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Image from "../components/image"
import "../styles/site.css"

const Header = ({ siteTitle }) => {
    return (
      <header
      style={{
        background: `#00489aff`,
      }}
      class="flex items-center justify-center"
      >
        <div class="flex items-center justify-between flex-wrap p-6 max-w-5xl" style={{minWidth: `100px`, maxWidth: `1800px`, width: `100%`}}>
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="font-normal text-xl tracking-tight">{siteTitle}</span>
          </div>
          <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-base lg:flex-grow">
              <Link to="/" activeClassName="block uppercase mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4" class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4 uppercase">
                Home
              </Link>
              <Link to="/about/" activeClassName="block uppercase mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4" class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4 uppercase">
                About
              </Link>
            </div>
            <div>
              <a href="https://github.com/bark-simulator/bark" class="inline-block text-base px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-800 hover:bg-white mt-4 lg:mt-0">Github</a>
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
