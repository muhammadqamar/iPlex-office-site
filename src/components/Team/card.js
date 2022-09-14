import React from "react"
import "./style/card.scss"

const Card = ({ item }) => {
  return (
    <>
      <div className="team-card">
        <div className="img-bx">
          <img className="img-person" src={item.cardimage} />
        </div>
        <div className="person-detail">
          <h1 className="person-hd">{item.cardheading}</h1>
          <p className="person-pst">{item.carddescription}</p>
        </div>
      </div>
    </>
  )
}

export default Card
