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
      <div class="w-full md:w-3/5 mt-6 px-4 md:px-0 mb-6">
        <h1 class="text-4xl text-gray-800 text-center">Publications @BARK</h1>
        <br />

        <h2 className="text-small text-gray-500 font-semibold mb-1">2021</h2>
        <p className="mb-6">
          <em>Julian Bernhard and Alois Knoll</em>. "<b className="italic">Risk-Constrained Interactive Safety under Behavior Uncertainty for Autonomous Driving.</b>" IEEE Intelligent Vehicles Symposium (IV).
          <a href="https://arxiv.org/abs/2102.03053" className="inline-block">
            <BiLinkExternal className="inline-block aggBlueText" />
          </a>
        </p>

        <h2 className="text-small text-gray-500 font-semibold mb-1">2020</h2>
        <p className="mb-3">
          <em>Julian Bernhard, Klemens Esterle, Patrick Hart and Tobias Kessler</em>. "<b className="italic">BARK: Open Behavior Benchmarking in Multi-Agent Environments.</b>" IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS).
          <a href="https://arxiv.org/abs/2003.02604" className="inline-block">
            <BiLinkExternal className="inline-block aggBlueText" />
          </a>
        </p>
        <p className="mb-3">
          <em>Patrick Hart and Alois Knoll</em>. "<b className="italic">Graph Neural Networks and Reinforcement Learning for Behavior Generation in Semantic Environments.</b>" IEEE Intelligent Vehicles Symposium (IV).
          <a href="https://arxiv.org/abs/2006.12576" className="inline-block">
            <BiLinkExternal className="inline-block aggBlueText" />
          </a>
        </p>
        <p className="mb-3">
        <em>Klemens Esterle, Luis Gressenbuch and Alois Knoll</em>. "<b className="italic">Modeling and Testing Multi-Agent Traffic Rules within Interactive Behavior Planning.</b>" IROS 2020 Workshop on Perception, Learning, and Control for Autonomous Agile Vehicles.
          <a href="https://arxiv.org/abs/2009.14186" className="inline-block">
            <BiLinkExternal className="inline-block aggBlueText" />
          </a>
        </p>
        <p className="mb-3">
          <em>Patrick Hart and Alois Knoll</em>. "<b className="italic">Counterfactual Policy Evaluation for Decision-Making in Autonomous Driving.</b>" IROS 2020 Workshop Perception, Learning, and Control for Autonomous Agile Vehicles.
          <a href="https://arxiv.org/abs/2003.11919" className="inline-block">
            <BiLinkExternal className="inline-block aggBlueText" />
          </a>
        </p>
        <p className="mb-3">
        <em>Klemens Esterle, Luis Gressenbuch and Alois Knoll</em>. "<b className="italic">Formalizing Traffic Rules for Machine Interpretability.</b>" Proceedings of the 3rd IEEE Connected and Automated Vehicles Symposium (CAVS).
          <a href="https://arxiv.org/abs/2007.00330" className="inline-block">
            <BiLinkExternal className="inline-block aggBlueText" />
          </a>
        </p>


        {/* <h2 className="text-small text-gray-500 font-semibold">2019</h2>
        <br />


        <h2 className="text-small text-gray-500 font-semibold">2018</h2>
        <br /> */}
      </div>
    </div>
  </Layout>)
}

export default Publications
