import React from "react"
import "./style/opportunities.scss"

const Opportunities = ({ data }) => {
  return (
    <>
      <div className="main-opportunities">
        <div className="opportunities-container">
          <h1 className="oppertunities-hd">
            {data.frontmatter.heading}
            <span className="hd-color">opportunities</span> lie?
          </h1>
          <p className="oppertunities-para">{data.frontmatter.description}</p>
          <p className="link-para">
            <a
              className="oppertunities-link"
              href="https://iplex.co/contact-us/"
            >
              {data.frontmatter.opportunitieslink.linkname}
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Opportunities
