import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HorizontalComponent from "../components/horizontal_component"
import RoundComponent from "../components/round_page"

const iros_tutorial = ({data}) => {
  function GetNode(data, name){
    for (var i = 0; i < data.allFile.edges.length; i++) {
      if (data.allFile.edges[i].node.name == name) {
        return data.allFile.edges[i].node;
      }
    }
    return data.allFile.edges[0].node;
  } 
  console.log(data.allMarkdownRemark);
  return (<Layout>
    <SEO title="IROS 2020 - BARK Tutorial" />
    <div class="flex flex-wrap sm:justify-center">
      <div class="w-full lg:w-3/5">
        <h1 class="text-4xl text-center text-gray-800 mt-6">{data.markdownRemark.frontmatter.title}</h1>
        <h1 class="text-xl mb-12 text-center text-gray-700 italic">{data.markdownRemark.frontmatter.subtitle}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
        <div class="flex flex-wrap sm:justify-center mb-12">
          <HorizontalComponent title="Prof. Alois Knoll" description={data.markdownRemark.frontmatter.knoll} image={GetNode(data, "knoll").childImageSharp.fluid} />
          <HorizontalComponent title="Julian Bernhard" description={data.markdownRemark.frontmatter.bernhard} image={GetNode(data, "bernhard").childImageSharp.fluid}  />
          <HorizontalComponent title="Klemens Esterle" description={data.markdownRemark.frontmatter.esterle} image={GetNode(data, "esterle").childImageSharp.fluid} />
          <HorizontalComponent title="Patrick Hart" description={data.markdownRemark.frontmatter.hart} image={GetNode(data, "hart").childImageSharp.fluid} />
          <HorizontalComponent title="Tobias Kessler" description={data.markdownRemark.frontmatter.kessler} image={GetNode(data, "kessler").childImageSharp.fluid} />
        </div>

      <h1 class="text-3xl text-gray-800 mt-10">Supporters</h1>
      <div class="flex flex-wrap sm:justify-center mb-12">
        <a href="https://www.fortiss.org/" class="block w-full md:w-1/3 p-12">
          <Img objectFit="cover" fluid={GetNode(data, "Logo_fortiss_RGB_white-blue").childImageSharp.fluid} />
        </a>
        <a href="https://aid-driving.eu/" class="block w-full md:w-1/3 p-12">
          <Img objectFit="cover" fluid={GetNode(data, "aid").childImageSharp.fluid} />
        </a>
        <a href="https://www.tum.de/" class="block w-full md:w-1/3 p-12">
          <Img objectFit="cover" fluid={GetNode(data, "tum_logo").childImageSharp.fluid} /> 
        </a>
      </div>
      </div>
    </div>
  </Layout>)
}

export const query = graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    markdownRemark(fileAbsolutePath: { regex: "/iros_tutorial_md.md/" }) {
      html
      headings {
        depth
        value
      }
      frontmatter {
        title
        knoll
        hart
        kessler
        esterle
        bernhard
        subtitle
      }
    }
    allMarkdownRemark {
      edges {
        node {
          html
          headings {
            depth
            value
          }
          frontmatter {
            title
            knoll
            hart
            kessler
            esterle
            bernhard
            subtitle
          }
        }
      }
    }
  }
`

export default iros_tutorial
