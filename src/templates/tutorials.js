import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
    <SEO title={post.frontmatter.title + " | Tutorials"} />
    <div class="flex flex-wrap">
      <div class="w-full px-4 md:px-0 md:w-1/6">
        <p class="mb-2 text-gray-500 uppercase tracking-wide font-bold text-sm">BARK</p>
        <Link to="/tutorials/" class="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block" activeClassName="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block font-medium rounded absolute inset-0  aggBlueText">Getting Started</Link>
        <Link to="/tutorials/building_from_source/" class="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block" activeClassName="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block font-medium rounded absolute inset-0  aggBlueText">Building From Source</Link>
        <Link to="/tutorials/core_modules/" class="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block" activeClassName="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block font-medium rounded absolute inset-0  aggBlueText">Core Modules</Link>
        <Link to="/tutorials/developing_behavior_models/" class="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block" activeClassName="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block font-medium rounded absolute inset-0  aggBlueText">Developing Behavior Models</Link>
        <a href="#" class="text-gray-400 px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block">Benchmarking</a>
        <a href="#" class="text-gray-400 px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block">Advanced Topics</a>
        <p class="mb-2 text-gray-500 uppercase tracking-wide font-bold text-sm mt-8">BARK-ML</p>
        <Link to="/tutorials/bark_ml_getting_started/" class="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block" activeClassName="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block font-medium rounded absolute inset-0  aggBlueText">Getting Started</Link>
        <Link to="/tutorials/bark_ml_observers/" class="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block" activeClassName="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block font-medium rounded absolute inset-0  aggBlueText">Observers</Link>
        <Link to="/tutorials/bark_ml_evaluators/" class="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block" activeClassName="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block font-medium rounded absolute inset-0  aggBlueText">Evaluators</Link>
        <Link to="/tutorials/bark_ml_environments/" class="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block" activeClassName="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block font-medium rounded absolute inset-0  aggBlueText">Environments</Link>
        <Link to="/tutorials/bark_ml_agents/" class="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block" activeClassName="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block font-medium rounded absolute inset-0  aggBlueText">BARK-ML Agents</Link>
      </div>
      <div class="w-full mt-6 md:mt-0 lg:w-5/6 lg:pl-12 px-4 md:px-0 mb-6">
            <h1 class="text-4xl text-gray-800">{post.frontmatter.title}</h1>
            <div class="w-full md:w-3/4 mt-3" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
