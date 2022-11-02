import React from "react"
import "./style/footer.scss"
import IplexLogo from "../../assets/images/iPlax-logo.svg"
const Footer = () => {
  return (
    <>
      <div className="main-footer-box">
        <div className="footer-boxs">
          <div className="footer-logo">
            <a href="https://iplex.co">
              <img src={IplexLogo} alt="logo"></img>
            </a>
          </div>
          <div className="footre-pages">
            <div className="footer-bx2">
              <h1 className="f-hd">Visit us</h1>
              <div className="bx-list">
                <ul className="unoder-list">
                  <li className="item">Bahria Town Civic Center,</li>
                  <li className="item">Phase 4 Plaza 75, Pakistan</li>
                </ul>
              </div>
            </div>
            <div className="footer-bx2">
              <h1 className="f-hd">Get in touch</h1>
              <div className="bx-list">
                <ul className="unoder-list">
                  <li className="item">
                    <a className="f-tag" href="mailto:hr@iplex.co">
                      hr@iplex.co
                    </a>
                  </li>
                  <li className="item">
                    <a className="f-tag" href="tel:+92 51 541 1278">
                      +92 51 541 1278
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-bx2">
              <h1 className="f-hd">Company</h1>
              <div className="bx-list">
                <ul className="unoder-list">
                  <li className="item">
                    <a
                      className="f-tag"
                      href="https://iplex.co/privacy-policy/"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-bx2">
              <h1 className="f-hd">Follow us</h1>
              <div className="bx-list">
                <ul className="unoder-list">
                  <li className="item">
                    <a
                      className="f-tag"
                      target="_blank"
                      href="https://www.facebook.com/iplex.co/"
                    >
                      Facebook
                    </a>
                  </li>
                  <li className="item">
                    <a
                      className="f-tag"
                      target="_blank"
                      href="https://www.instagram.com/iplexlife/"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="item">
                    <a
                      className="f-tag"
                      target="_blank"
                      href="https://www.linkedin.com/company/iplexpvtltd/"
                    >
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="note-para">
          Copyright © 2021 iPlex . All rights reserved
        </p>
      </div>
    </>
  )
}

export default Footer
