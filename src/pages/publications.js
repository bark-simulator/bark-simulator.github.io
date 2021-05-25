import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RoundComponent from "../components/round_page"

import { BiLinkExternal } from "react-icons/bi";

const Publications = ({data}) => {
  return (
    <Layout>
    <SEO title="Publications" />
    <div class="flex flex-wrap justify-center">
      <div class="w-3/4 mt-6 md:px-0 mb-6">
        <h1 class="text-4xl text-gray-800 text-center">Publications</h1>
        <br />

        <h2 className="text-small italic text-500-gray font-semibold	">2021</h2>
        <br />

        <h2 className="text-small italic text-500-gray font-semibold	">2020</h2>
        Patrick Hart and Alois Knoll. "Using counterfactual reasoning and reinforcement learning for decision-making in autonomous driving." arXiv preprint arXiv:2003.11919 (2020).
        <BiLinkExternal />
        <br />

      </div>
    </div>
  </Layout>)
}

export default Publications
