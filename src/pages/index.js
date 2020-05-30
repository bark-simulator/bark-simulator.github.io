import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import BarkMerging from "../data/merging.gif"
import SEO from "../components/seo"

const IndexPage = ({data}) => {

  return (<Layout>
    <SEO title="Home" />
      <div class="flex flex-wrap md:justify-center mt-4">
        <div class="w-full flex-wrap p-4 px-4 md:w-1/2 md:p-12 md:px-0 md:pr-48">
          <h1 class="text-4xl text-gray-800 font-semibold mb-3">Centered on behavior models.</h1>
          <p class="tracking-wide text-lg leading-relaxed">
            Develop the next generation of behavior models for autonomous vehicles with BARK.
            BARK offers a behavior model-centric simulation framework that enables fast-prototyping and the development of behavior models.
            Behavior models can easily be integrated &mdash; either using Python or C++.
            Various behavior models are available ranging from machine learning to conventional approaches.
          </p>
        </div>
        <div class="w-full md:w-1/2">
          <Img objectFit="cover-object" fluid={data.barkScreenshot.childImageSharp.fluid} />     
        </div>
      </div>
      <div class="flex flex-wrap md:justify-center mt-8">
        <div class="w-full md:w-1/2">
          <img class="object-cover w-full" src={BarkMerging} />    
        </div>
        <div class="w-full p-4 px-4 md:w-1/2 md:p-12 md:px-0 md:pl-48">
          <h1 class="text-4xl text-gray-800 font-semibold mb-3">Benchmarking interactive behaviors.</h1>
          <p class="tracking-wide text-lg leading-relaxed">
            Going along with prototyping and developing behavior models is to benchmark their performance.
            BARK provides a benchmark suite that tracks the performance of behavior models &mdash; also during development.
            Unlike many simulation frameworks, BARK offers benchmarking using fully interactive behaviors.
            Each vehicle reacts to the benchmark vehicle using its defined behavior model.
          </p>
          <div class="flex justify-left py-2">
          <a href="https://github.com/bark-simulator/bark" class="transition duration-200 ease-in-out border text-blue hover:border-blue-500 border-blue hover:text-blue-500 font-semibold py-2 px-3 rounded-lg ">
            Get Started &#xbb;
          </a>
          </div>
        </div>
      </div>
  </Layout>)
}
export const query = graphql`
  query IndexPageQuery {
    barkScreenshot: file(relativePath: { eq: "bark_screenshot.png" }) {
      id,
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    barkEval: file(relativePath: { eq: "bark_logo.jpg" }) {
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
