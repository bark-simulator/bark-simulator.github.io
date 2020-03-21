import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <div class="flex flex-wrap md:justify-center mt-4">
        <div class="w-full flex-wrap p-4 px-2 md:w-1/2 bg-gray-100 md:p-12 md:px-24 text-center">
          <h1 class="text-4xl text-gray-800 font-semibold mb-3">A semantic simulation framework.</h1>
          <p class="tracking-wide text-xl leading-relaxed">
            Develop the next generation of behavior models.
            BARK is a behavior model-centric simulation framework that enables fast-prototyping and development of novel approaches.
            It offers a wide range of <i>state-of-the-art</i> behavior models for autonomous driving to get started with.
          </p>
        </div>
        <div class="w-full md:w-1/2">
          <Image />        
        </div>
      </div>
      <div class="flex flex-wrap md:justify-center mt-8">
        <div class="w-full md:w-1/2">
          <Image />       
        </div>
        <div class="w-full p-4 px-2 md:w-1/2 bg-gray-100 md:p-12 md:px-24 text-center">
          <h1 class="text-4xl text-gray-800 font-semibold mb-3">Centered on behavior models.</h1>
          <p class="tracking-wide text-xl leading-relaxed">
            Putting the emphasis directly onto behavior models, BARK provides a wide range of behavior models.
            New behavior models can be integrated easily &mdash; either using Python or C++.
            Currently, a wide range of behavior models is already available ranging from machine learning to conventional approaches.
          </p>
        </div>
      </div>
      <div class="flex justify-center py-12">
        <a href="https://github.com/bark-simulator/bark" class="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full ">
          Get Started &#xbb;
        </a>
      </div>
      <div class="justify-center hidden md:flex">
        <div class="w-2/3 bg-gray-100 rounded-lg py-4 px-6 border text-xl text-gray-700">
          <div>{"@misc{bernhard2020bark,"}</div>
          <div class="ml-6">{"title={BARK: Open Behavior Benchmarking in Multi-Agent Environments},"}</div>
          <div class="ml-6">{"author={Julian Bernhard and Klemens Esterle and Patrick Hart and Tobias Kessler},"}</div>
          <div class="ml-6">{"year={2020},"}</div>
          <div class="ml-6">{"eprint={2003.02604},"}</div>
          <div class="ml-6">{"archivePrefix={arXiv},"}</div>
          <div class="ml-6">{"primaryClass={cs.MA}"}</div>
          <div>{"}"}</div>
        </div>
      </div>
  </Layout>
)

export default IndexPage
