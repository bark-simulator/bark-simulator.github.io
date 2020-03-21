import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RoundComponent from "../components/round_page"

const AboutPage = ({data}) => {
  console.log(data)
  return (<Layout>
    <SEO title="About" />
    <h1 class="text-4xl mb-4 text-center text-gray-800 mt-6">Core</h1>
    <div class="flex flex-wrap sm:justify-center mb-12">
      <div class="w-full md:w-1/4">
        <RoundComponent title="Julian Bernhard" description="Developer" image={data.bernhard.childImageSharp.fluid} />
      </div>
      <div class="w-full md:w-1/4">
        <RoundComponent title="Klemens Esterle" description="Developer" image={data.esterle.childImageSharp.fluid} />
      </div>
      <div class="w-full md:w-1/4">
        <RoundComponent title="Patrick Hart" description="Developer" image={data.hart.childImageSharp.fluid} />
      </div>
      <div class="w-full md:w-1/4">
        <RoundComponent title="Tobias Kessler" description="Developer" image={data.kessler.childImageSharp.fluid} />
      </div>
    </div>
    <h1 class="text-4xl mb-4 text-center text-gray-800 mt-6">Contributors</h1>
    <div class="flex flex-wrap md:mb-6">
      <div class="w-full md:w-1/5 bg-gray-400 h-64"></div>
      <div class="w-full md:w-1/5  bg-gray-500 h-64"></div>
      <div class="w-full md:w-1/5  bg-gray-400 h-64"></div>
      <div class="w-full md:w-1/5  bg-gray-500 h-64"></div>
      <div class="w-full md:w-1/5  bg-gray-400 h-64"></div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/5  bg-gray-500 h-64"></div>
      <div class="w-full md:w-1/5  bg-gray-400 h-64"></div>
      <div class="w-full md:w-1/5  bg-gray-500 h-64"></div>
      <div class="w-full md:w-1/5  bg-gray-400 h-64"></div>
      <div class="w-full md:w-1/5  bg-gray-500 h-64"></div>
    </div>
  </Layout>)
}

export const query = graphql`
  query HomePageQuery {
    hart: file(relativePath: { eq: "hart.jpg" }) {
      id,
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    esterle: file(relativePath: { eq: "esterle.jpeg" }) {
      id,
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bernhard: file(relativePath: { eq: "bernhard.jpeg" }) {
      id,
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kessler: file(relativePath: { eq: "kessler.jpeg" }) {
      id,
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default AboutPage
