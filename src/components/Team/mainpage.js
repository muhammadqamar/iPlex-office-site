import React from "react"
import "./style/mainpage.scss"
import Card from "./card"
import Opportunities from "../Home/opportunities"

const Mainpage = () => {
  return (
    <>
      <div className="hero-section-page">
        <div className="bg-section-page">
          <h1 className="hero-hd">
            The Creative <span className="main-word"> Crew</span> Behind iPlex
          </h1>
          <div className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <Opportunities />
        </div>
      </div>
    </>
  )
}

export default Mainpage
