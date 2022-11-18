import { Link } from "gatsby"
import React from "react"
import "./style/herosection.scss"

const Herosection = ({ data }) => {
  return (
    <>
      <div className="hero-ideas">
        <div className="main-idea">
          <div className="header-about">
            <h1 className="hero-hd">
              {data?.frontmatter.hero.heading.slice(0, 16)}
              <strong style={{ fontWeight: "500" }}>
                {data?.frontmatter.hero.heading.slice(16, 24)}
              </strong>
              {data?.frontmatter.hero.heading.slice(24, 29)}
              <strong style={{ fontWeight: "500" }}>
                {data?.frontmatter.hero.heading.slice(29)}
              </strong>
            </h1>
            <p className="hero-para">{data?.frontmatter.hero.description}</p>
          </div>
          <div className="main-logo-section">
            <div className="tag-section">
              <a
                className="link-tag"
                href={data?.frontmatter.hero.headerLink.linkUrl}
              >
                {data?.frontmatter.hero.headerLink.linkName}
              </a>
            </div>
          </div>
        </div>
        {/* <Link to="#scroll-down" className="design-logo">
          <div className="design">
            <span className="animaction-vr-line" />
          </div>
          <div className="down-vr-line" />
        </Link> */}
        {/* </Link> */}
      </div>
    </>
  )
}

export default Herosection
