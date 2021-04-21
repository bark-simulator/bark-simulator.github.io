import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import "../styles/site.css"

const Footer = ({}) => (
  <div className="mt-0">
  <footer class="flex items-center justify-center text-gray-700" style={{padding: `0px 0% 0% 0%`}} >
    <div class="flex items-center justify-between flex-wrap py-8 px-6 pt-8" style={{width: `100%`}}>
        <div class="w-full text-center text-sm">
          © {new Date().getFullYear()} <a class="hover:text-blue-500" href="https://www.fortiss.org/">fortiss GmbH</a>
        </div>
    </div>
  </footer>
  </div>
)

export default Footer
