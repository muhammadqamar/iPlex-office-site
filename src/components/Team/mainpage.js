import React from "react"
import "./style/mainpage.scss"
import Card from "./card"
import Opportunities from "./opportunities"

const Mainpage = ({ data, datacard }) => {
  console.log("data opportunities", data)
  console.log("datacard is here they", datacard)

  return (
    <>
      <div className="hero-section-page">
        <div className="bg-section-page">
          <h1 className="hero-hd">
            {datacard?.frontmatter?.teamheading.slice(0, 40)}
          </h1>
          <div className="cards">
            {datacard?.frontmatter.team_cards?.Cards.map(items => (
              <Card key={items} item={items} />
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
