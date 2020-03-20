import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/site.css"

const RoundComponent = ({ title, description, image }) => {
    return (
      <div class="flex flex-col p-6">
         <div class="flex w-full justify-center mb-3">
          {/* <img class="object-center w-32 h-32 rounded-full mr-4 bg-gray" src="https://www.fortiss.org/fileadmin/_processed_/6/8/csm_Holger_Pfeifer_771b1095b9.png" /> */}
          <div class="w-32 h-32 rounded-full bg-gray-300" ></div>
         </div>
         <div class="w-full text-center mb-2 text-3xl text-gray-800">
           {title}
         </div>
          <div class="w-full text-center text-gray-700 tracking-wide leading-relaxed">
           {description}
         </div>
      </div>
    )
}

RoundComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}

RoundComponent.defaultProps = {
  title: ``,
  description: ``,
  image: ``
}

export default RoundComponent
