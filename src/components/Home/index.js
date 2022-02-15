import React from "react"
import "./style/index.scss"
import Herosection from "./herosection"
import Digitalfuture from "./digitalfuture"
import Digitalproduct from "./digitalproduct"
import Opportunities from "./opportunities"

const Index = () => {
  return (
    <>
      <div className="top-home-hero-section">
        <Herosection />
      </div>

      <div className="main-home-page">
        <div className="all-sections">
          <Digitalfuture />
          <Digitalproduct />
          <Opportunities />
        </div>
      </div>
    </>
  )
}

export default Index
