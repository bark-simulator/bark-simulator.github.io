import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/site.css"
import Img from "gatsby-image"
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";

const HorizontalComponent = ({ title, description, image, linkedinUrl, githubUrl }) => {
    return (
        <div class="flex flex-wrap mt-4 mb-8">
            <div class="w-full">
                <div class="flex flex-wrap">
                    <div class="w-full md:w-1/5 justify-center mb-2 mt-2">
                        <div class="object-center w-32 h-32 rounded-full bg-gray-400 overflow-hidden">
                        {image != "" &&
                            <Img objectFit="cover" fluid={image} />
                        }
                        </div>
                    </div>
                    <div class="w-full md:w-4/5">
                        <h1 class="w-full text-left text-2xl font-normal text-gray-800">
                            {title}
                        </h1>
                        <p class="mt-1 tracking-wide text-lg leading-relaxed" style={{minHeight: "200px"}}>
                            <p dangerouslySetInnerHTML={{ __html: description }}></p>
                        </p>
                    </div>
                </div>
            </div>
        </div>)
}

HorizontalComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  linkedinUrl: PropTypes.string,
  githubUrl: PropTypes.string,
}

HorizontalComponent.defaultProps = {
  title: ``,
  description: ``,
  image: ``,
  linkedinUrl: ``,
  githubUrl: ``
}

export default HorizontalComponent
