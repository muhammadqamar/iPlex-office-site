import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Navbar } from "react-bootstrap"
import AboutPage from "../layout/about"
import IplexLogo from "../../assets/images/iPlax-logo.svg"

const navItems = [
  {
    navlink: "Home",
  },
  {
    navlink: "Services",
  },
  {
    navlink: "About US",
  },
  {
    navlink: "Construction",
  },
  {
    navlink: "Team",
  },
  {
    navlink: "Contact US",
  },
]

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

  const navlinked = area => {
    let link
    switch (area) {
      case "Home":
        link = "/"
        break
      case "Services":
        link = "/services"
        break
      case "About US":
        link = "/aboutus"
        break
      case "Construction":
        link = "/construction"
        break
      case "Team":
        link = "/team"
        break
      case "Contact US":
        link = "/contact-us"
        break
      default:
        break
    }
    return link
  }

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
          <div className="nav_bx">
            {navItems.map((item, index) => (
              <Link
                activeClassName="active_item"
                className="nav_heading_link"
                key={index}
                to={navlinked(item.navlink)}
              >
                <h4 className="nav_item">{item.navlink}</h4>
              </Link>
            ))}
          </div>
          <button
            className={barr}
            onClick={() => {
              barChang()
              ABPag()
            }}
            type="button"
          >
            <button className="toggler-icon top-bar"></button>
            <button className="toggler-icon middle-bar"></button>
            <button className="toggler-icon bottom-bar"></button>
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
