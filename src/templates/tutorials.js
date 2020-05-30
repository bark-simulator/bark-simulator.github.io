import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
    <SEO title="Tutorials" />
    <div class="flex flex-wrap">
      <div class="w-1/6">
        <p class="mb-2 text-gray-500 uppercase tracking-wide font-bold text-sm">BARK</p>
        <Link to="/tutorials/" class="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block" activeClassName="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block font-medium rounded absolute inset-0 bg-blue-200 text-blue-600">Installation</Link>
        <Link to="/tutorials/first_example/" partiallyActive={true} class="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block" activeClassName="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block font-medium rounded absolute inset-0 bg-blue-200 text-blue-600">First Example</Link>
        {/* <a href="#" class="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block" classActive="font-medium rounded absolute inset-0 bg-blue-200 text-blue-600">Diving Deeper</a>
        <a href="#" class="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block" classActive="font-medium rounded absolute inset-0 bg-blue-200 text-blue-600">Advanced Topics</a>
        <p class="mb-2 text-gray-500 uppercase tracking-wide font-bold text-sm mt-8">BARK-ML</p>
        <a href="#" class="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block" classActive="font-medium rounded absolute inset-0 bg-blue-200 text-blue-600">Installation</a>
        <a href="#" class="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block" classActive="font-medium rounded absolute inset-0 bg-blue-200 text-blue-600">Getting Started</a>
        <a href="#" class="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block" classActive="font-medium rounded absolute inset-0 bg-blue-200 text-blue-600">Environments</a>
        <a href="#" class="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block" classActive="font-medium rounded absolute inset-0 bg-blue-200 text-blue-600">Training an Agent</a> */}
      </div>
      <div class="w-5/6 pl-12">
            <h1 class="text-4xl text-gray-800">{post.frontmatter.title}</h1>
            <div class="w-3/4" dangerouslySetInnerHTML={{ __html: post.html }} />
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
