import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RoundComponent from "../components/round_page"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1 class="text-4xl mb-4 text-center text-gray-800 mt-6">Core</h1>
    <div class="flex mb-12">
      <div class="w-1/4">
        <RoundComponent title="Julian Bernhard" description="Developer" image="./noimage.png" />
      </div>
      <div class="w-1/4">
        <RoundComponent title="Klemens Esterle" description="Developer" image="./noimage.png" />
      </div>
      <div class="w-1/4">
        <RoundComponent title="Patrick Hart" description="Developer" image="./noimage.png" />
      </div>
      <div class="w-1/4">
        <RoundComponent title="Tobias Kessler" description="Developer" image="./noimage.png" />
      </div>
    </div>
    <h1 class="text-4xl mb-4 text-center text-gray-800 mt-6">Students</h1>
    <div class="flex mb-6">
      <div class="w-1/5 bg-gray-400 h-64"></div>
      <div class="w-1/5 bg-gray-500 h-64"></div>
      <div class="w-1/5 bg-gray-400 h-64"></div>
      <div class="w-1/5 bg-gray-500 h-64"></div>
      <div class="w-1/5 bg-gray-400 h-64"></div>
    </div>
    <div class="flex mb-12">
      <div class="w-1/5 bg-gray-400 h-64"></div>
      <div class="w-1/5 bg-gray-500 h-64"></div>
      <div class="w-1/5 bg-gray-400 h-64"></div>
      <div class="w-1/5 bg-gray-500 h-64"></div>
      <div class="w-1/5 bg-gray-400 h-64"></div>
    </div>
  </Layout>
)

export default AboutPage
