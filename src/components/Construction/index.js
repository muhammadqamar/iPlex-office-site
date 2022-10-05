import React from "react"
import "./style/index.scss"

import Rightarrow from "../../assets/images/right_arrow.png"
import Cranelift from "./craneLift"
import Chooseus from "./chooseUs"
import Processfollow from "./processFollow"
import OurServiceWorker from "./ourServiceWorker"
import Blognews from "./blogNews"
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
              <div className="img_bx" />
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
