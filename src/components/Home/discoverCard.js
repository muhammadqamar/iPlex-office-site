import React from "react"
import "./style/digitalproduct.scss"
const DiscoverCard = ({ data }) => {
  return (
    <div className="card1">
      <div className="card-detail">
        <h1 className="card-hd">{data.cardheading}</h1>
        <p className="card-para">
          {data.carddescription.length !== 223
            ? `${data.carddescription.slice(0, 222)}...`
            : data.carddescription}
        </p>
      </div>
      <div className="card-number">
        {data.cardnumber < 10 ? `0${data.cardnumber}` : data.cardnumber}
      </div>
    </div>
  )
}

export default DiscoverCard
