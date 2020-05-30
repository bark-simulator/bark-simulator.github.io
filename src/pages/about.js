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
        <RoundComponent title="Julian Bernhard" description="Developer" image={data.bernhard.childImageSharp.fluid} linkedinUrl="https://www.linkedin.com/in/julian-bernhard-63b677173/" githubUrl="https://github.com/juloberno" />
      </div>
      <div class="w-full md:w-1/4">
        <RoundComponent title="Klemens Esterle" description="Developer" image={data.esterle.childImageSharp.fluid} linkedinUrl="https://www.linkedin.com/in/klemens-esterle/" githubUrl="https://github.com/klemense1" />
      </div>
      <div class="w-full md:w-1/4">
        <RoundComponent title="Patrick Hart" description="Developer" image={data.hart.childImageSharp.fluid} linkedinUrl="https://www.linkedin.com/in/patrick-hart-en/" githubUrl="https://github.com/patrickhart" />
      </div>
      <div class="w-full md:w-1/4">
        <RoundComponent title="Tobias Kessler" description="Developer" image={data.kessler.childImageSharp.fluid} linkedinUrl="https://www.linkedin.com/in/tobias-kessler-938369172/" githubUrl="https://github.com/tobiaskessler" />
      </div>
    </div>
    <h1 class="text-4xl mb-4 text-center text-gray-800 mt-24">Contributors</h1>
    <div class="flex flex-wrap md:mb-6 justify-center">
      <div class="w-full md:w-1/4">
        <RoundComponent title="Luis Gressenbuch" description="Developer" image={data.luis_gressenbuch.childImageSharp.fluid} linkedinUrl="" githubUrl="https://github.com/cirrostratus1" />
      </div>
      <div class="w-full md:w-1/4">
        <RoundComponent title="Mansoor Nasir Cheema" description="Developer" image="" linkedinUrl="" githubUrl="https://github.com/mansoorcheema" />
      </div>
      <div class="w-full md:w-1/4">
        <RoundComponent title="tin1254" description="Developer" image="" linkedinUrl="" githubUrl="https://github.com/tin1254" />
      </div>
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
    luis_gressenbuch: file(relativePath: { eq: "luis_gressenbuch.png" }) {
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
