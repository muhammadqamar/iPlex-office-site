import React from "react"
import "./style/opportunities.scss"

const Opportunities = ({ data }) => {
  return (
    <>
      <div className="main-opportunities">
        <div className="opportunities-container">
          <h1 className="oppertunities-hd">
            {data?.frontmatter.youropportunities.heading.slice(0, 36)}
            <span className="hd-color">
              {data?.frontmatter.youropportunities.heading.slice(36, 49)}
            </span>
            {data?.frontmatter.youropportunities.heading.slice(49)}
          </h1>
          <p className="oppertunities-para">
            {data?.frontmatter.youropportunities.description}
          </p>
          <p className="link-para">
            <a
              className="oppertunities-link"
              href={data?.frontmatter.youropportunities.opportunitiesLink.link}
            >
              {data?.frontmatter.youropportunities.opportunitiesLink.linkName}
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Opportunities
