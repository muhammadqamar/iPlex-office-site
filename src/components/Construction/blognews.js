import React from "react"
import "./style/blognews.scss"
import "./style/index.scss"

import userconstruction from "../../assets/images/blog_img.jpg"
import blogicon from "../../assets/images/user.svg"
import blogicon3 from "../../assets/images/speech-bubble.svg"
import Rightarrow from "../../assets/images/right_arrow.png"

const Blognews = () => {
  return (
    <div className="main_blog">
      <div className="blog_content">
        <div className="blog_title">
          <h1 className="blog_heading">BLOG & NEWS</h1>
          <h2 className="blog_subheading">KEEP UPDATED ABOUT US</h2>
        </div>
        <div className="blog_flx">
          <div className="blog_left">
            <img
              className="blog_img"
              src={userconstruction}
              alt="construction logo"
            />
            <div className="time">
              <h2 className="time_content">
                <strong style={{ fontSize: "30px" }}>25</strong>
                <br />
                jul
              </h2>
            </div>
          </div>
          <div className="blog_right">
            <h4 className="right_heading">
              <a className="blog_link">Low Cost Construction Tips & Tricks</a>
            </h4>
            <div className="icons_bx">
              <div className="flx_icon">
                <img className="icon" src={blogicon} alt="icon" />
                <a className="icon_link">gbsupport</a>
              </div>
              <div className="flx_icon">
                <img className="icon" src={blogicon3} alt="icon" />
                <a className="icon_link">Interior Design</a>
              </div>
              <div className="flx_icon">
                <img className="icon" src={blogicon3} alt="icon" />
                <a className="icon_link">1 comment</a>
              </div>
            </div>
            <div className="blog_last_news">
              <p className="blog_para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco off a
                laboris nisi ut aliquip ex ea.
              </p>
              {/* <a className="hero_link">
                read more
                <div className="img_bx">
                  <img
                    className="right_arrow"
                    src={Rightarrow}
                    alt="right arrow"
                  />
                </div>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blognews
