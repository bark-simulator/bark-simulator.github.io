import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import "../styles/site.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#00489aff`
    }}
    class="flex items-center justify-between flex-wrap p-6"
  >
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      {/* <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> */}
      <span class="font-semibold text-xl tracking-tight">{siteTitle}</span>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-base lg:flex-grow">
        <Link to="/" activeClassName="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4" class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
          Home
        </Link>
        <Link to="/about/" activeClassName="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4" class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
          About
        </Link>
        <Link to="/blog/" activeClassName="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4" class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white">
          Blog
        </Link>
      </div>
      <div>
        <a href="https://github.com/bark-simulator/bark" class="inline-block text-base px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-800 hover:bg-white mt-4 lg:mt-0">Github</a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
