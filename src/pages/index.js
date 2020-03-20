import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <div class="flex justify-center mb-4">
        <div class="w-1/2 bg-gray-300 p-4">
          <h1 class="text-2xl">A semantic simulation framework.</h1>
          <p>Develop the next generation of behavior models using BARK.</p>
        </div>
        <div class="w-1/2 bg-gray-500">
          <Image />        
        </div>
      </div>
      <div class="flex mb-6 mt-6">
        <div class="w-1/2 bg-gray-500">
          <Image />       
        </div>
        <div class="w-1/2 bg-gray-300 p-4">
          <h1 class="text-2xl">Centered on behavior models</h1>
          <p>Develop the next generation of behavior models using BARK.</p>
        </div>
      </div>
      <div class="flex mb-12">
        <div class="w-1/3 bg-gray-400 h-64"></div>
        <div class="w-1/3 bg-gray-500 h-64"></div>
        <div class="w-1/3 bg-gray-400 h-64"></div>
      </div>
  </Layout>
)

export default IndexPage
