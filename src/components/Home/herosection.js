import { Link } from "gatsby"
import React from "react"
import "./style/herosection.scss"

const Herosection = ({ data }) => {
  return (
    <>
      <div className="hero-ideas">
        <div className="main-idea">
          <div className="header-about">
            <h1 className="hero-hd">{data.frontmatter.heading}</h1>
            {/* <h1 className="hero-hd">
              Where your ideas <span className="blod-text"> evolve </span>into
              <span className="blod-text"> products.</span>
            </h1> */}
            <p className="hero-para">{data.frontmatter.description}</p>
          </div>
          <div className="main-logo-section">
            <div className="tag-section">
              <a className="link-tag" href="https://iplex.co/team/">
                {data.frontmatter.headerlink.linkname}
              </a>
            </div>
          </div>
        </div>
        <Link to="#scroll-down">
          <div className="design-logo">
            <div className="design">
              <span className="animaction-vr-line" />
            </div>
            <div className="down-vr-line" />
          </div>
        </Link>
      </div>
    </>
  )
}

export default Herosection
