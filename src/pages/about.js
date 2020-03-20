import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
      <h1 class="text-4xl mb-2 text-center">Core</h1>
      <div class="flex mb-12">
        <div class="w-1/3 bg-gray-400 h-64"></div>
        <div class="w-1/3 bg-gray-500 h-64"></div>
        <div class="w-1/3 bg-gray-400 h-64"></div>
      </div>
      <h1 class="text-4xl mb-2 text-center">Students</h1>
      <div class="flex mb-6">
        <div class="w-1/4 bg-gray-400 h-64"></div>
        <div class="w-1/4 bg-gray-500 h-64"></div>
        <div class="w-1/4 bg-gray-400 h-64"></div>
        <div class="w-1/4 bg-gray-500 h-64"></div>
      </div>
      <div class="flex mb-12">
        <div class="w-1/4 bg-gray-400 h-64"></div>
        <div class="w-1/4 bg-gray-500 h-64"></div>
        <div class="w-1/4 bg-gray-400 h-64"></div>
        <div class="w-1/4 bg-gray-500 h-64"></div>
      </div>
  </Layout>
)

export default AboutPage
