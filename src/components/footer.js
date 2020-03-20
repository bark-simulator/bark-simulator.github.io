import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import "../styles/site.css"

const Footer = ({}) => (
  <footer class="text-center p-6 bg-white text-gray-600">
      © {new Date().getFullYear()} Julian Bernhard, Klemens Esterle, Patrick Hart and Tobias Kessler
  </footer>
)

export default Footer
