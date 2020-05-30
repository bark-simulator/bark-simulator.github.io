import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import BarkMerging from "../data/merging.gif"

import Layout from "../components/layout"
import SEO from "../components/seo"
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

  return (<Layout>
    <SEO title="IROS 2020 - BARK Tutorial" />
    <div class="flex flex-wrap sm:justify-center">
      <div class="w-3/4">
        <h1 class="text-4xl text-center text-gray-800 mt-6">IROS 2020 - BARK Tutorial</h1>
        <h1 class="text-xl mb-12 text-center text-gray-700 italic">Las Vegas, 25th of October</h1>
        <h2 class="text-3xl text-gray-800 mt-16 mb-1">About the Tutorial</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, <b>no sea takimata</b> sanctus est Lorem ipsum dolor sit amet.
        </p>
        <h2 class="text-3xl text-gray-800 mt-12 mb-1">Program</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. <br /><br />
          Speakers:<br />
          <ul class="list-disc list-inside">
            <li>uno</li>
            <li>due</li>
          </ul>
        </p>
        <h2 class="text-3xl text-gray-800 mt-12 mb-1">About BARK</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, <b>no sea takimata</b> sanctus est Lorem ipsum dolor sit amet.
        </p>
        <div class="flex w-full justify-center">
          <img class="object-cover w-1/2" src={BarkMerging} />    
        </div>
        <h2 class="text-3xl text-gray-800 mt-10">Organizers</h2>
        <div class="flex flex-wrap sm:justify-center mb-12">
          <div class="w-full md:w-1/3">
            <RoundComponent title="Alois Knoll" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum." image={GetNode(data, "knoll").childImageSharp.fluid} />
          </div>
          <div class="w-full md:w-1/3">
            <RoundComponent title="Julian Bernhard" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum." image={GetNode(data, "bernhard").childImageSharp.fluid}  />
          </div>
          <div class="w-full md:w-1/3">
            <RoundComponent title="Klemens Esterle" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum." image={GetNode(data, "esterle").childImageSharp.fluid} />
          </div>
          <div class="w-full md:w-1/3">
            <RoundComponent title="Patrick Hart" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum." image={GetNode(data, "hart").childImageSharp.fluid} />
          </div>
          <div class="w-full md:w-1/3">
            <RoundComponent title="Tobias Kessler" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum." image={GetNode(data, "kessler").childImageSharp.fluid} />
          </div>

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
  }
`

export default iros_tutorial
