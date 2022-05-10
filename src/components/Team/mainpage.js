import React from "react"
import "./style/mainpage.scss"
import Card from "./card"
import Opportunities from "./opportunities"

const Mainpage = ({ data, tdata }) => {
  return (
    <>
      <div className="hero-section-page">
        <div className="bg-section-page">
          <h1 className="hero-hd">
            {tdata?.frontmatter?.heading.slice(0, 13)}
            <span className="hd-color">
              {tdata?.frontmatter?.heading.slice(13, 17)}
            </span>
            {tdata?.frontmatter?.heading.slice(17)}
          </h1>
          <div className="cards">
            {tdata?.frontmatter.team_cards?.Cards.map(items => (
              <Card key={items} items={items} />
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
