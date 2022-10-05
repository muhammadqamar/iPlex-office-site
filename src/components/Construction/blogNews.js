import React from "react"
import "./style/blogNews.scss"

import userconstruction from "../../assets/images/blog_img.jpg"
import blogicon from "../../assets/images/user.svg"
import blogicon3 from "../../assets/images/speech-bubble.svg"
import Rightarrow from "../../assets/images/right_arrow-white.svg"
import blogright from "../../assets/images/blog_rightImg.jpg"

const blogData = [
  {
    blogImg: userconstruction,
    blogTime: "25 jul",
    blogHeading: "Low Cost Construction Tips & Tricks",
    blogtext:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco off a laboris nisi ut aliquip ex ea.",
    blogLink: "read more",
    blogarrow: Rightarrow,
  },
  {
    blogImg: blogright,
    blogTime: "25 jul",
    blogHeading: "Awesome Interor Design Ideas",
    blogtext:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco off a laboris nisi ut aliquip ex ea.",
    blogLink: "read more",
    blogarrow: Rightarrow,
  },
]

const blogInnerContent = [
  {
    usericon: blogicon,
    iconlink: "gbsupport",
  },
  {
    usericon: blogicon3,
    iconlink: "Interior Design",
  },
  {
    usericon: blogicon3,
    iconlink: "1 comment",
  },
]

const Blognews = () => {
  return (
    <div className="main_blog">
      <div className="blog_content">
        <div className="blog_title">
          <h1 className="blog_heading">BLOG & NEWS</h1>
          <h2 className="blog_subheading">KEEP UPDATED ABOUT US</h2>
        </div>
        <div className="blog_flx">
          {blogData.map((item, index) => (
            <div
              key={index}
              className={
                (index === 1 && "blog_innerflx change_direction") ||
                "blog_innerflx same_direction"
              }
            >
              <div
                className={
                  (index === 1 && "blog_left blog_after") ||
                  "blog_left blog_before"
                }
              >
                <img
                  className="blog_img"
                  src={item.blogImg}
                  alt="construction logo"
                />
                <div
                  className={
                    (index === 1 && "time awesome_time") || "time tips_tricks"
                  }
                >
                  <h2 className="time_content">
                    <strong style={{ fontSize: "30px" }}>
                      {item.blogTime.slice(0, 2)}
                    </strong>
                    <br />
                    {item.blogTime.slice(2)}
                  </h2>
                </div>
              </div>
              <div
                className={
                  (index === 1 && "blog_right blogright_before") ||
                  "blog_right blogright_after"
                }
              >
                <h4 className="right_heading">
                  <a className="blog_link">{item.blogHeading}</a>
                </h4>
                <div className="icons_bx">
                  {blogInnerContent.map((item, index) => (
                    <div key={index} className="flx_icon">
                      <img className="icon" src={item.usericon} alt="icon" />
                      <a className="icon_link">{item.iconlink}</a>
                    </div>
                  ))}
                </div>
                <div className="blog_last_news">
                  <p className="blog_para">{item.blogtext}</p>
                  <a className="custom_button">
                    {item.blogLink}
                    <div className="img_bx">
                      <img
                        className="right_arrow"
                        src={item.blogarrow}
                        alt="right arrow"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blognews
