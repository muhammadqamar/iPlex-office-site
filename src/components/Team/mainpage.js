import React from "react"
import "./style/mainpage.scss"
import Card from "./card"
import Opportunities from "../Common/opportunities"

const Mainpage = ({ datacard }) => {
  return (
    <>
      <div className="hero-section-page">
        <div className="bg-section-page">
          <h1 className="hero-hd">
            {datacard?.frontmatter?.teamheading.slice(0, 13)}
            <span className="hd-fcolor">
              {datacard?.frontmatter?.teamheading.slice(13, 17)}
            </span>
            {datacard?.frontmatter?.teamheading.slice(17)}
          </h1>
          <div className="cards">
            {datacard?.frontmatter.team_cards?.cards.map(items => (
              <Card key={items} item={items} />
            ))}
          </div>
          <div className="all-sections">
            <Opportunities />
          </div>
        </div>
      </div>
    </>
  )
}

export default Mainpage
