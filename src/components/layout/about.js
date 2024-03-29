import React from "react"
import { Link } from "gatsby"
import "./style/about.scss"

const About = () => {
  return (
    <div className="main-about">
      <div className="about-informactiion">
        <div className="pages-name">
          <Link style={{ textDecoration: "none" }} to="/aboutus">
            <h1 className="page-name-1">About</h1>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/services">
            <h1 className="page-name-1">Services</h1>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/team">
            <h1 className="page-name-1">Team</h1>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/contact-us">
            <h1 className="page-name-1">Contact</h1>
          </Link>
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
        <Link to="/" className="contact-btn">
          <h4 className=" link-btn">Hi, can we talk?</h4>
        </Link>
      </div>
    </div>
  )
}

export default About
