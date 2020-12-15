import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RoundComponent from "../components/round_page"

const AboutPage = ({data}) => {
  return (<Layout>
    <SEO title="About" />
    <h1 class="text-4xl mb-4 text-center text-gray-800 mt-6">Core Team</h1>
    <div class="flex flex-wrap sm:justify-center mb-12">
      <div class="w-full md:w-1/4">
        <RoundComponent title="Julian Bernhard" description="Developer" image={data.bernhard.childImageSharp.fluid} linkedinUrl="https://www.linkedin.com/in/julian-bernhard-63b677173/" githubUrl="https://github.com/juloberno" websiteUrl="" />
      </div>
      <div class="w-full md:w-1/4">
        <RoundComponent title="Klemens Esterle" description="Developer" image={data.esterle.childImageSharp.fluid} linkedinUrl="https://www.linkedin.com/in/klemens-esterle/" githubUrl="https://github.com/klemense1" websiteUrl="" />
      </div>
      <div class="w-full md:w-1/4">
        <RoundComponent title="Patrick Hart" description="Developer" image={data.hart.childImageSharp.fluid} linkedinUrl="https://www.linkedin.com/in/patrick-hart-en/" githubUrl="https://github.com/patrickhart" websiteUrl="https://patrickhart.github.io/" />
      </div>
      <div class="w-full md:w-1/4">
        <RoundComponent title="Tobias Kessler" description="Developer" image={data.kessler.childImageSharp.fluid} linkedinUrl="https://www.linkedin.com/in/tobias-kessler-938369172/" githubUrl="https://github.com/tobiaskessler" websiteUrl="" />
      </div>
    </div>
    <h1 class="text-4xl mb-4 text-center text-gray-800 mt-24">Contributors</h1>
    <div class="flex flex-wrap md:mb-6 justify-center">
      <div class="w-full md:w-1/4">
        <RoundComponent title="Luis Gressenbuch" description="Developer" image={data.luis_gressenbuch.childImageSharp.fluid} linkedinUrl="" githubUrl="https://github.com/cirrostratus1" websiteUrl="" />
      </div>
      <div class="w-full md:w-1/4">
        <RoundComponent title="Mansoor Nasir Cheema" description="Developer" image="" linkedinUrl="" githubUrl="https://github.com/mansoorcheema" websiteUrl="" />
      </div>
      <div class="w-full md:w-1/4">
        <RoundComponent title="Chan Tin Chon" description="Developer" image={data.chan.childImageSharp.fluid} linkedinUrl="" githubUrl="https://github.com/tin1254" websiteUrl="" />
      </div>
    </div>
  </Layout>)
}

export const query = graphql`
  query HomePageQuery {
    hart: file(relativePath: { eq: "images/hart.jpg" }) {
      id,
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    esterle: file(relativePath: { eq: "images/esterle.jpeg" }) {
      id,
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bernhard: file(relativePath: { eq: "images/bernhard.jpeg" }) {
      id,
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kessler: file(relativePath: { eq: "images/kessler.jpeg" }) {
      id,
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    luis_gressenbuch: file(relativePath: { eq: "images/luis_gressenbuch.png" }) {
      id,
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    chan: file(relativePath: { eq: "images/chan.png" }) {
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
