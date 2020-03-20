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
          <h1 class="text-3xl text-gray-800 font-semibold mb-">A semantic simulation framework.</h1>
          <p class="tracking-wide leading-relaxed">Develop the next generation of behavior models using BARK.</p>
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
          <h1 class="text-3xl text-gray-800 font-semibold mb-2">Centered on behavior models.</h1>
          <p class="tracking-wide leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam sem risus, quis cursus lorem interdum eu. Sed varius, turpis non luctus condimentum, est nunc aliquam est, eu bibendum arcu ex eget nibh. Etiam ut ipsum quis velit bibendum rutrum ac mattis lectus. Donec et porta urna. Nullam id nunc a ipsum efficitur gravida ac a dui. Maecenas ac condimentum lacus. Sed maximus velit elementum dolor suscipit varius. In commodo dolor libero, a suscipit purus efficitur in. Aliquam posuere iaculis risus, non congue metus semper ac. Nunc pulvinar, metus at mollis mattis, dui nulla viverra tortor, quis condimentum ex leo sed lectus. Nam eget nunc eget nibh sodales pretium. Phasellus placerat porta ornare.</p>
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
