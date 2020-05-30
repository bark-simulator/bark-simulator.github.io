import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/site.css"
import Img from "gatsby-image"
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";

const RoundComponent = ({ title, description, image, linkedinUrl, githubUrl }) => {
    return (
      <div class="flex flex-col p-6">
         <div class="flex w-full justify-center mb-3">
          <div class="object-center w-32 h-32 rounded-full bg-gray-400 overflow-hidden">
            {image != "" &&
            <Img objectFit="cover" fluid={image} />
            }
          </div>
         </div>
         <div class="w-full text-center text-3xl text-gray-800">
           {title}
         </div>
         <div class="w-full text-center text-gray-700 tracking-wide leading-relaxed">
           {description}
         </div>
         <div class="flex-wrap text-center mt-2">
          {linkedinUrl != "" &&
            <a href={linkedinUrl}>
              <IoLogoLinkedin class="transition duration-500 ease-in-out inline-block w-8 h-8 text-gray-500 hover:text-blue-900 " />
            </a>
          }
          {githubUrl != "" &&
          <a href={githubUrl}>
            <IoLogoGithub class="transition duration-500 ease-in-out inline-block w-8 h-8 text-gray-500 hover:text-gray-900" />
          </a>
          }
         </div>
      </div>
    )
}

RoundComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  linkedinUrl: PropTypes.string,
  githubUrl: PropTypes.string,
}

RoundComponent.defaultProps = {
  title: ``,
  description: ``,
  image: ``,
  linkedinUrl: ``,
  githubUrl: ``
}

export default RoundComponent
