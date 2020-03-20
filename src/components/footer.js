import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import "../styles/site.css"

const Footer = ({}) => (
  <footer class="flex items-center justify-center border-t mt-24 text-gray-600" >
    <div class="flex items-center justify-between flex-wrap p-6" style={{minWidth: `100px`, maxWidth: `1640px`, width: `100%`}}>
        <div class="w-1/2">
          © {new Date().getFullYear()} Julian Bernhard, Klemens Esterle, Patrick Hart and Tobias Kessler
        </div>
        <div class="w-1/2 text-right">
          Supported by: <a href="https://www.fortiss.org/">fortiss</a>, <a href="https://aid-driving.eu/">AID</a>
        </div>
      </div>
  </footer>
)

export default Footer
