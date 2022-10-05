import React from "react"
import "./style/index.scss"

import Rightarrow from "../../assets/images/right_arrow.png"
import Cranelift from "./cranelift"
import Chooseus from "./chooseus"
import Processfollow from "./processfollow"
import OurServiceWorker from "./ourServiceWorker"
import Blognews from "./blognews"
import CreativeArchitechture from "./creativeArchitechture"
const Index = () => {
  return (
    <>
      <div className="hero_section">
        <div className="overlay_bg"></div>
        <div className="main_content">
          <div className="content">
            <h1 className="hero_heading">hello!</h1>
            <h2 className="sub_heading">we are mistri</h2>
            <a className="secondary_custom_button">
              read more
              <div className="img_bx">
                <img
                  className="right_arrow"
                  src={Rightarrow}
                  alt="right arrow"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      <Cranelift />
      <Chooseus />
      <Processfollow />
      <OurServiceWorker />
      <Blognews />
      <CreativeArchitechture />
    </>
  )
}

export default Index
