import React from "react"
import "./style/card.scss"

const Card = ({ items }) => {
  console.log("cards item", items)
  return (
    <>
      <div className="team-card">
        <div className="img-bx">
          <img className="img-person" src={items.teamsImges} />
        </div>
        <div className="person-detail">
          <h1 className="person-hd">{items.cardheading}</h1>
          <p className="person-pst">{items.carddescription}</p>
        </div>
      </div>
    </>
  )
}

export default Card
