import React from "react"
import "./style/digitalproduct.scss"
const DiscoverCard = ({ data }) => {
  return (
    <div className="card1">
      <div className="card-detail">
        <h1 className="card-hd">{data.cardheading}</h1>
        <p className="card-para">{data.cardDescription}</p>
      </div>
      <div className="card-number">
        {data.cardNumber < 10 ? `0${data.cardNumber}` : data.cardNumber}
      </div>
    </div>
  )
}

export default DiscoverCard
