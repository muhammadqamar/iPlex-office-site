import React from "react"
import "./style/mainpage.scss"
import Card from "./card"
import Opportunities from "./opportunities"

const Mainpage = ({ data, cards }) => {
  console.log("dataCards is", data)
  return (
    <>
      <div className="hero-section-page">
        <div className="bg-section-page">
          <h1 className="hero-hd">
            {cards?.frontmatter?.heading.slice(0, 40)}
          </h1>
          <div className="cards">
            {cards?.frontmatter.team_cards?.Cards.map(items => (
              <Card key={items} />
            ))}
          </div>
          <div className="all-sections">
            <Opportunities data={data} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Mainpage
