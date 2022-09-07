import React from "react"
import "./style/oppertunities.scss"

const Opportunities = ({ data }) => {
  return (
    <>
      <div className="main-oppertunities">
        <div className="oppertunities-container">
          <h1 className="oppertunities-hd">
            {/* {data?.frontmatter.heading.slice(0, 50)} */}
            <span className="hd-color">opportunities</span> lie?
          </h1>
          <p className="opportunities-para">{data?.frontmatter.description}</p>
          <p className="link-paraa">
            <a
              className="opportunities-link"
              href="https://iplex.co/contact-us/"
            >
              {/* {data?.frontmatter.opportunitieslink.linkname} */}
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Opportunities
