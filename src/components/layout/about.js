import React from "react"
import { Link } from "gatsby"
import "./about.scss"

const About = () => {
  return (
    <div className="main-about">
      <div className="about-informactiion">
        <div className="pages-name">
          <h1 className="page-name-1">TEAM</h1>
          <h1 className="page-name-1">CONTACT</h1>
        </div>
        <div className="addres">
          <h4 className="addres-name">
            Bahria Town Civic Center, Phase 4 Plaza 75, Pakistan
          </h4>
          <h4 className="addres-name  hon-li">hr@iplex.co</h4>
          <h4 className="addres-name hon-li">+92 51 541 1278</h4>
        </div>
        <div className="media-links">
          <Link style={{ textDecoration: "none" }} to="/">
            <h4 className="lnks">FACEBOOK</h4>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/">
            <h4 className="lnks">INSTAGRAM</h4>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/">
            <h4 className="lnks">LINKEDIN</h4>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
