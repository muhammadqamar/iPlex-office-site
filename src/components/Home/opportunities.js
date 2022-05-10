import React from "react"
import "./style/opportunities.scss"

const Opportunities = ({ data }) => {
  return (
    <>
      <div className="main-opportunities">
        <div className="opportunities-container">
          <h1 className="oppertunities-hd">
            {data.frontmatter.heading.slice(0, 36)}
            <span className="hd-color">
              {data?.frontmatter.heading.slice(35, 49)}
            </span>
            {data.frontmatter.heading.slice(49)}
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
