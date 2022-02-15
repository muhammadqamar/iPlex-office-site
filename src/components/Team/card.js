import React from "react"
import "./style/card.scss"
import pic from "../../assets/images/au-4.jpg"

const Card = () => {
  return (
    <>
      <div className="team-card">
        <div className="img-bx">
          <img className="img-person" src={pic}></img>
        </div>
        <div className="person-detail">
          <h1 className="person-hd">Haris Siddiqui</h1>
          <p className="person-pst">Creative Department</p>
        </div>
      </div>
    </>
  )
}

export default Card
