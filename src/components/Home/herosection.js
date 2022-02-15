import { Link } from "gatsby"
import React from "react"
import "./style/herosection.scss"

const Herosection = () => {
  return (
    <>
      <div className="hero-ideas">
        <div className="main-idea">
          <div className="header-about">
            <h1 className="hero-hd">
              Where your ideas <span className="blod-text"> evolve </span>into
              <span className="blod-text"> products.</span>
            </h1>
            <p className="hero-para">
              iPlex helps all kinds of ambitious businesses to improve their
              digital presence and make digital work for them commercially. Find
              out more about who we are.
            </p>
          </div>
          <div className="main-logo-section">
            <div className="tag-section">
              <a className="link-tag" href="https://iplex.co/team/">
                Meet the team
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
