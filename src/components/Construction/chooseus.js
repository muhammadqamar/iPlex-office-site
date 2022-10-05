import React, { useState } from "react"
import "./style/chooseUs.scss"

import listlogo1 from "../../assets/images/choose_card_logo1.png"
import listlogo2 from "../../assets/images/choose_card_logo2.png"
import listlogo3 from "../../assets/images/choose_card_logo3.png"
import rightimg from "../../assets/images/choose_right_img.jpg"
import rightarrow from "../../assets/images/choose_arrow_logo_color.svg"

const cards_lists = [
  {
    logo: listlogo1,
    card_heading: "experienced engineers",
    content:
      " loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
  },
  {
    logo: listlogo2,
    card_heading: "awesome architecture",
    content: " remloremloremloremloremloremloremloremloremloremloremloremlorem",
  },
  {
    logo: listlogo3,
    card_heading: "lifetime client support",
    content: " remloremloremloremloremloremloreml",
  },
]

const arrow_content = [
  {
    arrowImg: rightarrow,
    text: "Vestibulum pulvinar commodo.",
  },
  {
    arrowImg: rightarrow,
    text: "Pellentesque id massa et ligula con.",
  },
  {
    arrowImg: rightarrow,
    text: "Vivamus sed nunc sed ligula rhon.",
  },
]

const Chooseus = () => {
  const [tab, settab] = useState(0)

  return (
    <div className="main_choose">
      <div className=" choose_container">
        <h1 className="choose_heading">WHY CHOOSE US</h1>
        <h2 className="choose_subheading">EXCELLENCE IS OUR ATTITUDE</h2>
        <div className="tab_flex_box">
          <div>
            {cards_lists.map((item, index) => (
              <div className="left_section">
                <div className="lists">
                  <div key={index} className="list">
                    <div className="list_tab">
                      <img className="card_logo" src={item.logo} alt="logo" />
                    </div>
                    <div
                      onClick={() => settab(index)}
                      className={
                        tab === index ? "list_active same" : "para_section same"
                      }
                    >
                      <p className="list_para">{item.card_heading}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {cards_lists.map(
            (item, index) =>
              tab === index && (
                <div className=" right_main">
                  <div className="right_section">
                    <div className="right_img_bx">
                      <img
                        className="right_img"
                        src={rightimg}
                        alt="right image"
                      />
                    </div>
                    <div className="bottom_content">
                      <p className="rightchoose_para">{item.content}</p>
                      {arrow_content.map((item, index) => (
                        <div key={index} className="choose_last_bx">
                          <div className="arrow_bx">
                            <img
                              className="right_arrow"
                              src={item.arrowImg}
                              alt="right arrow"
                            />
                          </div>
                          <p className="arrow_para">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  )
}

export default Chooseus
