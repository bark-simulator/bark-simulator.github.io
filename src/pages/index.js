import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import BarkMerging from "../data/images/bark.gif"
import SEO from "../components/seo"

const IndexPage = ({data}) => {

  return (<Layout>
    <SEO title="Simulation and Benchmarking | Autonomous Driving" />
      <div class="flex flex-wrap md:justify-center mt-4 content-center">
        <div class="w-full flex-wrap px-4 md:w-1/2 md:p-12 lg:px-24">
          <h1 class="text-4xl text-gray-800 font-normal mb-1 text-left">Centered on behavior models.</h1>
          <p class="tracking-wide text-lg mt-4 leading-relaxed">
            BARK offers a behavior model-centric simulation framework that enables fast-prototyping and the development of behavior models.
            Behavior models can easily be integrated &mdash; either using Python or C++.
            Various behavior models are available ranging from machine learning to conventional approaches.
          </p>
        </div>
        <div class="w-full md:w-1/2">
          <Img objectFit="cover-object" fluid={data.barkScreenshot.childImageSharp.fluid} />
        </div>
      </div>
      <div class="flex flex-wrap md:justify-center mb-12">
        <div class="w-full md:w-1/2">
          <img class="object-cover w-full" src={BarkMerging} />
        </div>
        <div class="w-full px-4 md:w-1/2 md:p-12 lg:px-16">
          <h1 class="text-4xl text-gray-800 font-normal mb-1 text-left">Benchmarking interactive behaviors.</h1>
          <p class="tracking-wide text-lg leading-relaxed mt-4">
            Going along with prototyping and developing behavior models is to benchmark their performance.
            BARK provides a benchmark suite that tracks the performance of behavior models &mdash; also during development.
            Unlike many simulation frameworks, BARK offers benchmarking using fully interactive behaviors.
          </p>
          <div class="flex justify-center py-2 mt-8">
          <Link to="/tutorials/" className="block aggBlue text-white font-semibold py-4 px-6">
            Get Started &#xbb;
          </Link>
          </div>
        </div>
      </div>
  </Layout>)
}
export const query = graphql`
  query IndexPageQuery {
    barkScreenshot: file(relativePath: { eq: "images/bark_logo.jpg" }) {
      id,
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    barkEval: file(relativePath: { eq: "images/bark_logo.jpg" }) {
      id,
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default IndexPage
