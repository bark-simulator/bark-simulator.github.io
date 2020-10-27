import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import "../styles/site.css"

const Footer = ({}) => (
  <div className="mt-6">
  <footer class="flex items-center justify-center text-gray-200" style={{padding: `100px 0% 0% 0%`}} >
    <div class="flex items-center justify-between flex-wrap py-8 px-6 pt-8" style={{width: `100%`, backgroundColor: `rgb(3, 70, 147)`}}>
        <div class="w-1/2 text-sm">
          © {new Date().getFullYear()} <a class="hover:text-blue-500" href="https://www.fortiss.org/">fortiss GmbH</a>
        </div>
        <div class="w-1/2 text-right text-sm">
          {/* Supported by: <a class="hover:text-blue-500" href="https://www.fortiss.org/">fortiss</a> */}
        </div>
    </div>
  </footer>
  </div>
)

export default Footer
