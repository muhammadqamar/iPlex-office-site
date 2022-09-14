import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Navbar } from "react-bootstrap"
import AboutPage from "../layout/about"
import IplexLogo from "../../assets/images/iPlax-logo.svg"

const Header = ({ backgroundColor }) => {
  const [chColor, setChColor] = useState(false)
  const [barr, setBarr] = useState("navbar-toggler collapsed")
  const [openAbout, setOpenAbout] = useState(false)

  const ScrollDown = () => {
    if (window.scrollY >= 90) {
      setChColor(true)
    } else {
      setChColor(false)
    }
  }

  const barChang = () => {
    if (barr === "navbar-toggler collapsed") {
      setBarr("navbar-toggler chang")
    } else {
      setBarr("navbar-toggler collapsed")
    }
  }

  const ABPag = () => {
    setOpenAbout(priv => !priv)
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", ScrollDown)
    }
  }, [])

  return (
    <>
      <Navbar
        fixed="top"
        collapseOnSelect
        className={`${chColor ? "navbar navbar-scroll " : "navbar navbar-top"}`}
        style={{ backgroundColor: backgroundColor }}
      >
        <div
          className={`${
            chColor
              ? "nav-container nav-down-padding"
              : "nav-container nav-top-padding"
          }`}
        >
          <Navbar.Brand>
            <Link to="/" className="site-logo">
              <img src={IplexLogo} alt="Iplex logo" />
            </Link>
          </Navbar.Brand>
          <button
            className={barr}
            onClick={() => {
              barChang()
              ABPag()
            }}
            type="button"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
          <Link to="/" className="contact-btn">
            <h4 className=" link-btn">Hi, can we talk?</h4>
          </Link>
        </div>
      </Navbar>

      {openAbout && <AboutPage />}
    </>
  )
}

export default Header
