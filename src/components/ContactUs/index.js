import React from "react"
import "./style/index.scss"
import Contactform from "./contactform"
import Info from "./info"

const Index = () => {
  return (
    <>
      <div className="main-contact">
        <div className="index-section">
          <Contactform />
          <Info />
        </div>
      </div>
    </>
  )
}

export default Index
