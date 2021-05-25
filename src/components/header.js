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
        placeholderImage: file(relativePath: { eq: "images/bark_logo_head.png" }) {
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
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-base lg:flex-grow">
              <Link to="/" activeClassName="block mt-4 lg:inline-block lg:mt-0 aggBlueText font-semibold text-lg mr-6" class="block mt-4 lg:inline-block lg:mt-0 text-gray text-lg hover:aggBlueText mr-6">
                Simulation
              </Link>
              <Link to="/tutorials/" partiallyActive={true} activeClassName="block mt-4 lg:inline-block lg:mt-0 aggBlueText font-semibold text-lg mr-6" class="transition duration-500 ease-in-out block mt-4 lg:inline-block lg:mt-0 text-gray text-lg hover:aggBlueText mr-6">
                Tutorials
              </Link>
              <Link to="/publications/" activeClassName="block mt-4 lg:inline-block lg:mt-0 aggBlueText font-semibold text-lg mr-6" class="transition duration-500 ease-in-out block mt-4 lg:inline-block lg:mt-0 text-gray text-lg hover:aggBlueText mr-6">
                Publications
              </Link>
              <Link to="/about/" activeClassName="block mt-4 lg:inline-block lg:mt-0 aggBlueText font-semibold text-lg mr-6" class="transition duration-500 ease-in-out block mt-4 lg:inline-block lg:mt-0 text-gray text-lg hover:aggBlueText mr-6">
                About
              </Link>
              <Link to="/iros_tutorial/" activeClassName="block mt-4 lg:inline-block lg:mt-0 aggBlueText font-semibold text-lg mr-6" class="transition duration-500 ease-in-out block mt-4 lg:inline-block lg:mt-0 text-gray text-lg hover:aggBlueText mr-6">
                IROS 2020
              </Link>
            </div>
            <div>
              <a href="https://arxiv.org/abs/2003.02604" class="inline-block text-base px-4 py-2 leading-none border text-blue hover:border-gray-400 mt-4 lg:mt-0 mr-2">@arXiv</a>
              <a href="https://bark-simulator.readthedocs.io/en/latest/" class="inline-block text-base px-4 py-2 leading-none border text-blue hover:border-gray-400 mt-4 lg:mt-0 mr-2">Documentation</a>
              <a href="https://github.com/bark-simulator/bark" class="inline-block text-base px-4 py-2 leading-none aggBlue text-white hover:border-gray-400 mt-4 lg:mt-0">Github</a>
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
